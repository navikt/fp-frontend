import { useForm } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { VStack } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';

import { type FaktaBegrunnelseFormValues, FaktaBegrunnelseTextField, FaktaSubmitButton } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { Aksjonspunkt, ManuellBehandlingResultat } from '@navikt/fp-types';
import type { VurderForutgaendeMedlemskapAp, VurderMedlemskapAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { FaktaKort } from '@navikt/fp-ui-komponenter';
import { harAksjonspunkt, useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

import { MedlemskapVurderinger, type MedlemskapVurderingerFormValues } from './MedlemskapVurderinger';

type FormValues = MedlemskapVurderingerFormValues & FaktaBegrunnelseFormValues;

interface Props {
  manuellBehandlingResultat: ManuellBehandlingResultat | undefined;
}

/**
 * MedlemskapInfoPanel
 *
 * Har ansvar for å vise faktapanelene for medlemskap.
 */
export const VurderMedlemskapAksjonspunktForm = ({ manuellBehandlingResultat }: Props) => {
  const intl = useIntl();
  const { fagsak, behandling, aksjonspunkterForPanel, vilkårForPanel, submitCallback, isReadOnly, isSubmittable } =
    usePanelDataContext<VurderMedlemskapAp | VurderForutgaendeMedlemskapAp>();

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();

  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData ?? createInitialValues(aksjonspunkterForPanel, manuellBehandlingResultat),
  });

  const begrunnelseVerdi = formMethods.watch('begrunnelse');

  const erForutgående = harAksjonspunkt(AksjonspunktKode.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR, aksjonspunkterForPanel);

  return (
    <FaktaKort
      label={
        erForutgående
          ? intl.formatMessage({ id: 'VurderMedlemsskapAksjonspunktForm.Tittel.Forutgående' })
          : intl.formatMessage({ id: 'VurderMedlemsskapAksjonspunktForm.Tittel.Ordinært' })
      }
    >
      <RhfForm
        formMethods={formMethods}
        onSubmit={values => submitCallback(transformValues(values, erForutgående))}
        setDataOnUnmount={setMellomlagretFormData}
      >
        <VStack gap={isReadOnly ? '2' : '6'}>
          <MedlemskapVurderinger
            erForutgående={erForutgående}
            erRevurdering={behandling.type === 'BT-004'}
            vilkår={vilkårForPanel[0]!}
            readOnly={isReadOnly}
            ytelse={fagsak.fagsakYtelseType}
          />
          <FaktaBegrunnelseTextField
            control={formMethods.control}
            hasReadOnlyLabel
            isReadOnly={isReadOnly}
            isSubmittable={isSubmittable}
            hasBegrunnelse={!!begrunnelseVerdi}
          />
          {!isReadOnly && (
            <FaktaSubmitButton
              isSubmittable={isSubmittable}
              isReadOnly={isReadOnly}
              isSubmitting={formMethods.formState.isSubmitting}
              isDirty={formMethods.formState.isDirty}
            />
          )}
        </VStack>
      </RhfForm>
    </FaktaKort>
  );
};

const createInitialValues = (
  aksjonspunkterForPanel: Aksjonspunkt[],
  resultat: ManuellBehandlingResultat | undefined,
): FormValues => {
  return {
    ...MedlemskapVurderinger.initialValues(resultat),
    ...FaktaBegrunnelseTextField.initialValues(aksjonspunkterForPanel),
  };
};

const transformValues = (
  values: FormValues,
  erForutgåendeAksjonspunkt: boolean,
): VurderMedlemskapAp | VurderForutgaendeMedlemskapAp => ({
  kode: erForutgåendeAksjonspunkt
    ? AksjonspunktKode.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR
    : AksjonspunktKode.VURDER_MEDLEMSKAPSVILKÅRET,
  ...MedlemskapVurderinger.transformValues(values),
  ...FaktaBegrunnelseTextField.transformValues(values),
});

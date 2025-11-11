import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { VStack } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';
import { BTag } from '@navikt/ft-utils';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import {
  ProsessPanelTemplate,
  ProsessStegBegrunnelseTextField,
  type ProsessStegBegrunnelseTextFieldFormValues,
  validerApKodeOgHentApEnum,
  VilkarResultPicker,
  type VilkarResultPickerFormValues,
} from '@navikt/fp-prosess-felles';
import type { Aksjonspunkt, BehandlingFpSak } from '@navikt/fp-types';
import type { VurdereYtelseSammeBarnSokerAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

type FormValues = VilkarResultPickerFormValues & ProsessStegBegrunnelseTextFieldFormValues;

interface Props {
  status: string;
}

/**
 * FodselVilkarForm
 *
 * Setter opp aksjonspunktet for avklaring av Fødselsvilkåret.
 */
export const FodselVilkarForm = ({ status }: Props) => {
  const {
    behandling,
    isSubmittable,
    aksjonspunkterForPanel,
    vilkårForPanel,
    submitCallback,
    harÅpentAksjonspunkt,
    isReadOnly,
    alleMerknaderFraBeslutter,
  } = usePanelDataContext<VurdereYtelseSammeBarnSokerAp>();

  const erIkkeGodkjentAvBeslutter = aksjonspunkterForPanel.some(
    a => alleMerknaderFraBeslutter[a.definisjon]?.notAccepted,
  );

  const initialValues = buildInitialValues(aksjonspunkterForPanel, status, behandling.behandlingsresultat);

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();
  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData ?? initialValues,
  });
  const originalErVilkårOk = harÅpentAksjonspunkt ? undefined : 'OPPFYLT' === status;

  return (
    <RhfForm
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values, aksjonspunkterForPanel))}
      setDataOnUnmount={setMellomlagretFormData}
    >
      <ProsessPanelTemplate
        title={<FormattedMessage id="FodselVilkarForm.Fodsel" />}
        harÅpentAksjonspunkt={harÅpentAksjonspunkt}
        isSubmittable={isSubmittable}
        isReadOnly={isReadOnly}
        lovReferanse={vilkårForPanel[0]?.lovReferanse}
        originalErVilkårOk={originalErVilkårOk}
        erIkkeGodkjentAvBeslutter={erIkkeGodkjentAvBeslutter}
        isDirty={formMethods.formState.isDirty}
        isSubmitting={formMethods.formState.isSubmitting}
      >
        <VStack gap="space-16">
          <VilkarResultPicker
            vilkår={vilkårForPanel[0]}
            legend={<FormattedMessage id="FodselVilkarForm.TidligereUtbetaltStonad" />}
            isReadOnly={isReadOnly}
            customVilkårOppfyltText={<FormattedMessage id="FodselVilkarForm.Oppfylt" />}
            customVilkårIkkeOppfyltText={<FormattedMessage id="FodselVilkarForm.IkkeOppfylt" values={{ b: BTag }} />}
          />
          <ProsessStegBegrunnelseTextField readOnly={isReadOnly} />
        </VStack>
      </ProsessPanelTemplate>
    </RhfForm>
  );
};

const buildInitialValues = (
  aksjonspunkter: Aksjonspunkt[],
  status: string,
  behandlingsresultat?: BehandlingFpSak['behandlingsresultat'],
): FormValues => ({
  ...VilkarResultPicker.buildInitialValues(aksjonspunkter, status, behandlingsresultat),
  ...ProsessStegBegrunnelseTextField.buildInitialValues(aksjonspunkter),
});

const transformValues = (values: FormValues, aksjonspunkter: Aksjonspunkt[]): VurdereYtelseSammeBarnSokerAp => ({
  ...VilkarResultPicker.transformValues(values),
  ...ProsessStegBegrunnelseTextField.transformValues(values),
  kode: validerApKodeOgHentApEnum(aksjonspunkter[0]?.definisjon, AksjonspunktKode.AVKLAR_OM_SØKER_HAR_MOTTATT_STØTTE),
});

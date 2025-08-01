import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Label, VStack } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';
import { BTag } from '@navikt/ft-utils';

import { AksjonspunktKode, VilkarType, VilkarUtfallType } from '@navikt/fp-kodeverk';
import {
  ProsessPanelTemplate,
  ProsessStegBegrunnelseTextFieldNew,
  validerApKodeOgHentApEnum,
  VilkarResultPicker,
} from '@navikt/fp-prosess-felles';
import type { Aksjonspunkt, Behandling } from '@navikt/fp-types';
import type { OmsorgsvilkarAp, VurdereYtelseSammeBarnSokerAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

type FormValues = {
  erVilkarOk?: boolean;
  avslagCode?: string;
  begrunnelse?: string;
};

type AksjonspunktData = Array<OmsorgsvilkarAp | VurdereYtelseSammeBarnSokerAp>;

interface Props {
  status: string;
  readOnlySubmitButton: boolean;
}

/**
 * ErOmsorgVilkaarOppfyltForm
 *
 * Setter opp aksjonspunkter for avklaring av omsorgsvilkåret.
 */
export const ErOmsorgVilkaarOppfyltForm = ({ readOnlySubmitButton, status }: Props) => {
  const intl = useIntl();

  const {
    behandling,
    alleKodeverk,
    aksjonspunkterForPanel,
    submitCallback,
    isReadOnly,
    alleMerknaderFraBeslutter,
    harÅpneAksjonspunkter,
  } = usePanelDataContext<AksjonspunktData>();

  const erIkkeGodkjentAvBeslutter = aksjonspunkterForPanel.some(
    a => alleMerknaderFraBeslutter[a.definisjon]?.notAccepted,
  );

  const initialValues = buildInitialValues(aksjonspunkterForPanel, status, behandling.behandlingsresultat);

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();
  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData ?? initialValues,
  });

  const avslagsarsaker = alleKodeverk['Avslagsårsak'][VilkarType.OMSORGSVILKARET];

  const originalErVilkarOk = harÅpneAksjonspunkter ? undefined : VilkarUtfallType.OPPFYLT === status;

  return (
    <RhfForm
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values, aksjonspunkterForPanel))}
      setDataOnUnmount={setMellomlagretFormData}
    >
      <ProsessPanelTemplate
        title={intl.formatMessage({ id: 'ErOmsorgVilkaarOppfyltForm.Omsorg' })}
        isAksjonspunktOpen={!readOnlySubmitButton}
        readOnlySubmitButton={readOnlySubmitButton}
        readOnly={isReadOnly}
        originalErVilkarOk={originalErVilkarOk}
        erIkkeGodkjentAvBeslutter={erIkkeGodkjentAvBeslutter}
        isDirty={formMethods.formState.isDirty}
        isSubmitting={formMethods.formState.isSubmitting}
      >
        <VStack gap="4">
          <Label size="small">
            <FormattedMessage id="ErOmsorgVilkaarOppfyltForm.VilkaretOppfylt" />
          </Label>
          <VilkarResultPicker
            avslagsarsaker={avslagsarsaker}
            readOnly={isReadOnly}
            customVilkarOppfyltText={<FormattedMessage id="ErOmsorgVilkaarOppfyltForm.Oppfylt" />}
            customVilkarIkkeOppfyltText={
              <FormattedMessage id="ErOmsorgVilkaarOppfyltForm.IkkeOppfylt" values={{ b: BTag }} />
            }
          />
          <ProsessStegBegrunnelseTextFieldNew readOnly={isReadOnly} />
        </VStack>
      </ProsessPanelTemplate>
    </RhfForm>
  );
};

const buildInitialValues = (
  aksjonspunkter: Aksjonspunkt[],
  status: string,
  behandlingsresultat?: Behandling['behandlingsresultat'],
): FormValues => ({
  ...VilkarResultPicker.buildInitialValues(aksjonspunkter, status, behandlingsresultat),
  ...ProsessStegBegrunnelseTextFieldNew.buildInitialValues(aksjonspunkter),
});

const transformValues = (values: FormValues, aksjonspunkter: Aksjonspunkt[]): AksjonspunktData =>
  aksjonspunkter.map(ap => ({
    ...VilkarResultPicker.transformValues(values),
    ...ProsessStegBegrunnelseTextFieldNew.transformValues(values),
    kode: validerApKodeOgHentApEnum(
      ap.definisjon,
      AksjonspunktKode.MANUELL_VURDERING_AV_OMSORGSVILKARET,
      AksjonspunktKode.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
    ),
  }));

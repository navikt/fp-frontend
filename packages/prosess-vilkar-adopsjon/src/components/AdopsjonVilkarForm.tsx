import React, { FunctionComponent, useCallback, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Label } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';

import { AksjonspunktKode, AksjonspunktStatus, KodeverkType, VilkarType, VilkarUtfallType } from '@navikt/fp-kodeverk';
import {
  ProsessPanelTemplate,
  ProsessStegBegrunnelseTextFieldNew,
  validerApKodeOgHentApEnum,
  VilkarResultPicker,
} from '@navikt/fp-prosess-felles';
import { Aksjonspunkt, AlleKodeverk, Behandling, Vilkar } from '@navikt/fp-types';
import {
  VurdereYtelseSammeBarnAnnenForelderAp,
  VurdereYtelseSammeBarnSokerAp,
} from '@navikt/fp-types-avklar-aksjonspunkter';
import { useFormData } from '@navikt/fp-utils';

type FormValues = {
  erVilkarOk?: boolean;
  avslagCode?: string;
  begrunnelse?: string;
};

interface OwnProps {
  behandlingsresultat?: Behandling['behandlingsresultat'];
  aksjonspunkter: Aksjonspunkt[];
  status: string;
  vilkar: Vilkar[];
  submitCallback: (
    aksjonspunktData: VurdereYtelseSammeBarnSokerAp | VurdereYtelseSammeBarnAnnenForelderAp,
  ) => Promise<void>;
  readOnly: boolean;
  readOnlySubmitButton: boolean;
  isApOpen: boolean;
  alleKodeverk: AlleKodeverk;
  erIkkeGodkjentAvBeslutter: boolean;
}

const buildInitialValues = (
  aksjonspunkter: Aksjonspunkt[],
  status: string,
  behandlingsresultat?: Behandling['behandlingsresultat'],
): FormValues => ({
  ...VilkarResultPicker.buildInitialValues(aksjonspunkter, status, behandlingsresultat),
  ...ProsessStegBegrunnelseTextFieldNew.buildInitialValues(aksjonspunkter),
});

const transformValues = (
  values: FormValues,
  aksjonspunkter: Aksjonspunkt[],
): VurdereYtelseSammeBarnSokerAp | VurdereYtelseSammeBarnAnnenForelderAp => ({
  ...VilkarResultPicker.transformValues(values),
  ...ProsessStegBegrunnelseTextFieldNew.transformValues(values),
  kode: validerApKodeOgHentApEnum(
    aksjonspunkter[0].definisjon,
    AksjonspunktKode.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
    AksjonspunktKode.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN,
  ),
});

/**
 * AdopsjonVilkarForm
 *
 * Setter opp aksjonspunktet for avklaring av Adopsjonsvilkåret.
 */
const AdopsjonVilkarForm: FunctionComponent<OwnProps> = ({
  vilkar,
  readOnly,
  readOnlySubmitButton,
  status,
  submitCallback,
  behandlingsresultat,
  alleKodeverk,
  isApOpen,
  aksjonspunkter,
  erIkkeGodkjentAvBeslutter,
}) => {
  const intl = useIntl();

  const initialValues = useMemo(
    () => buildInitialValues(aksjonspunkter, status, behandlingsresultat),
    [behandlingsresultat, aksjonspunkter, status],
  );
  const { formData, setFormData } = useFormData<FormValues>();

  const formMethods = useForm<FormValues>({
    defaultValues: formData || initialValues,
  });

  const avslagsarsaker = alleKodeverk[KodeverkType.AVSLAGSARSAK][VilkarType.ADOPSJONSVILKARET];

  const isOpenAksjonspunkt = aksjonspunkter.some(ap => ap.status === AksjonspunktStatus.OPPRETTET);
  const originalErVilkarOk = isOpenAksjonspunkt ? undefined : VilkarUtfallType.OPPFYLT === status;
  const { lovReferanse } = vilkar[0];

  const bTag = useCallback((...chunks: any) => <b>{chunks}</b>, []);

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values, aksjonspunkter))}
      setDataOnUnmount={setFormData}
    >
      <ProsessPanelTemplate
        title={intl.formatMessage({ id: 'AdopsjonVilkarForm.Adopsjon' })}
        isAksjonspunktOpen={isApOpen}
        readOnlySubmitButton={readOnlySubmitButton}
        readOnly={readOnly}
        lovReferanse={lovReferanse}
        originalErVilkarOk={originalErVilkarOk}
        erIkkeGodkjentAvBeslutter={erIkkeGodkjentAvBeslutter}
        isDirty={formMethods.formState.isDirty}
        isSubmitting={formMethods.formState.isSubmitting}
      >
        <Label size="small">
          <FormattedMessage id="AdopsjonVilkarForm.TidligereUtbetaltStonad" />
        </Label>
        <VilkarResultPicker
          avslagsarsaker={avslagsarsaker}
          readOnly={readOnly}
          customVilkarOppfyltText={<FormattedMessage id="AdopsjonVilkarForm.Oppfylt" />}
          customVilkarIkkeOppfyltText={<FormattedMessage id="AdopsjonVilkarForm.IkkeOppfylt" values={{ b: bTag }} />}
        />
        <ProsessStegBegrunnelseTextFieldNew readOnly={readOnly} />
      </ProsessPanelTemplate>
    </Form>
  );
};

export default AdopsjonVilkarForm;

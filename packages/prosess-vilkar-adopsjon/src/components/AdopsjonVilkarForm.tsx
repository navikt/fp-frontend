import React, { FunctionComponent, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import { Element } from 'nav-frontend-typografi';

import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import { Form } from '@fpsak-frontend/form-hooks';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import {
  Aksjonspunkt, AlleKodeverk, Behandling, Vilkar,
} from '@fpsak-frontend/types';
import {
  ProsessStegBegrunnelseTextFieldNew, VilkarResultPickerNew, ProsessPanelTemplate, validerApKodeOgHentApEnum,
} from '@fpsak-frontend/prosess-felles';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import { VurdereYtelseSammeBarnAnnenForelderAp, VurdereYtelseSammeBarnSokerAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';
import AksjonspunktCode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

type FormValues = {
  erVilkarOk?: boolean;
  avslagCode?: string;
  avslagDato?: string;
  begrunnelse?: string;
}

interface OwnProps {
  behandlingsresultat?: Behandling['behandlingsresultat'];
  aksjonspunkter: Aksjonspunkt[];
  status: string;
  vilkar: Vilkar[];
  submitCallback: (aksjonspunktData: VurdereYtelseSammeBarnSokerAp | VurdereYtelseSammeBarnAnnenForelderAp) => Promise<void>;
  readOnly: boolean;
  readOnlySubmitButton: boolean;
  isApOpen: boolean;
  alleKodeverk: AlleKodeverk;
  erIkkeGodkjentAvBeslutter: boolean;
  formData?: FormValues;
  setFormData: (data: FormValues) => void;
}

const buildInitialValues = (
  aksjonspunkter: Aksjonspunkt[],
  status: string,
  behandlingsresultat?: Behandling['behandlingsresultat'],
): FormValues => ({
  ...VilkarResultPickerNew.buildInitialValues(behandlingsresultat, aksjonspunkter, status),
  ...ProsessStegBegrunnelseTextFieldNew.buildInitialValues(aksjonspunkter),
});

const transformValues = (
  values: FormValues,
  aksjonspunkter: Aksjonspunkt[],
): VurdereYtelseSammeBarnSokerAp | VurdereYtelseSammeBarnAnnenForelderAp => ({
  ...VilkarResultPickerNew.transformValues(values),
  ...ProsessStegBegrunnelseTextFieldNew.transformValues(values),
  kode: validerApKodeOgHentApEnum(aksjonspunkter[0].definisjon.kode,
    AksjonspunktCode.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
    AksjonspunktCode.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN),
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
  formData,
  setFormData,
}) => {
  const intl = useIntl();

  const initialValues = useMemo(() => buildInitialValues(aksjonspunkter, status, behandlingsresultat), [behandlingsresultat, aksjonspunkter, status]);
  const formMethods = useForm<FormValues>({
    defaultValues: formData || initialValues,
  });

  const avslagsarsaker = alleKodeverk[kodeverkTyper.AVSLAGSARSAK][vilkarType.ADOPSJONSVILKARET];

  const isOpenAksjonspunkt = aksjonspunkter.some((ap) => isAksjonspunktOpen(ap.status.kode));
  const originalErVilkarOk = isOpenAksjonspunkt ? undefined : vilkarUtfallType.OPPFYLT === status;
  const { lovReferanse } = vilkar[0];

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
        <Element><FormattedMessage id="AdopsjonVilkarForm.TidligereUtbetaltStonad" /></Element>
        <VilkarResultPickerNew
          avslagsarsaker={avslagsarsaker}
          readOnly={readOnly}
          customVilkarOppfyltText={<FormattedMessage id="AdopsjonVilkarForm.Oppfylt" />}
          customVilkarIkkeOppfyltText={<FormattedMessage id="AdopsjonVilkarForm.IkkeOppfylt" values={{ b: (chunks: any) => <b>{chunks}</b> }} />}
        />
        <ProsessStegBegrunnelseTextFieldNew readOnly={readOnly} />
      </ProsessPanelTemplate>
    </Form>
  );
};

export default AdopsjonVilkarForm;

import React, { FunctionComponent, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import { Element } from 'nav-frontend-typografi';

import { Form } from '@fpsak-frontend/form-hooks';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import AksjonspunktCode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import {
  VilkarResultPickerNew, ProsessStegBegrunnelseTextFieldNew, ProsessPanelTemplate, validerApKodeOgHentApEnum,
} from '@fpsak-frontend/prosess-felles';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import { Aksjonspunkt, AlleKodeverk, Behandling } from '@fpsak-frontend/types';
import { OmsorgsvilkarAp, VurdereYtelseSammeBarnAnnenForelderAp, VurdereYtelseSammeBarnSokerAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

type FormValues = {
  erVilkarOk?: boolean;
  avslagCode?: string;
  avslagDato?: string;
  begrunnelse?: string;
}

type AksjonspunktData = Array<OmsorgsvilkarAp | VurdereYtelseSammeBarnSokerAp | VurdereYtelseSammeBarnAnnenForelderAp>;

export const buildInitialValues = (
  aksjonspunkter: Aksjonspunkt[],
  status: string,
  behandlingsresultat?: Behandling['behandlingsresultat'],
): FormValues => ({
  ...VilkarResultPickerNew.buildInitialValues(behandlingsresultat, aksjonspunkter, status),
  ...ProsessStegBegrunnelseTextFieldNew.buildInitialValues(aksjonspunkter),
});

const transformValues = (values: FormValues, aksjonspunkter: Aksjonspunkt[]): AksjonspunktData => aksjonspunkter.map((ap) => ({
  ...VilkarResultPickerNew.transformValues(values),
  ...ProsessStegBegrunnelseTextFieldNew.transformValues(values),
  kode: validerApKodeOgHentApEnum(ap.definisjon.kode, AksjonspunktCode.MANUELL_VURDERING_AV_OMSORGSVILKARET,
    AksjonspunktCode.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
    AksjonspunktCode.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN),
}));

interface OwnProps {
  behandlingsresultat?: Behandling['behandlingsresultat'];
  aksjonspunkter: Aksjonspunkt[];
  status: string;
  submitCallback: (aksjonspunktData: AksjonspunktData) => Promise<void>;
  readOnly: boolean;
  readOnlySubmitButton: boolean;
  alleKodeverk: AlleKodeverk;
  erIkkeGodkjentAvBeslutter: boolean;
  formData?: FormValues;
  setFormData: (data: FormValues) => void;
}

/**
 * ErOmsorgVilkaarOppfyltForm
 *
 * Setter opp aksjonspunkter for avklaring av omsorgsvilkåret.
 */
const ErOmsorgVilkaarOppfyltForm: FunctionComponent<OwnProps> = ({
  readOnly,
  readOnlySubmitButton,
  aksjonspunkter,
  status,
  submitCallback,
  behandlingsresultat,
  erIkkeGodkjentAvBeslutter,
  alleKodeverk,
  formData,
  setFormData,
}) => {
  const intl = useIntl();

  const initialValues = useMemo(() => buildInitialValues(aksjonspunkter, status, behandlingsresultat), [behandlingsresultat, aksjonspunkter, status]);
  const formMethods = useForm<FormValues>({
    defaultValues: formData || initialValues,
  });

  const avslagsarsaker = alleKodeverk[kodeverkTyper.AVSLAGSARSAK][vilkarType.OMSORGSVILKARET];

  const isOpenAksjonspunkt = aksjonspunkter.some((ap) => isAksjonspunktOpen(ap.status.kode));
  const originalErVilkarOk = isOpenAksjonspunkt ? undefined : vilkarUtfallType.OPPFYLT === status;

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values, aksjonspunkter))}
      setDataOnUnmount={setFormData}
    >
      <ProsessPanelTemplate
        title={intl.formatMessage({ id: 'ErOmsorgVilkaarOppfyltForm.Omsorg' })}
        isAksjonspunktOpen={!readOnlySubmitButton}
        readOnlySubmitButton={readOnlySubmitButton}
        readOnly={readOnly}
        originalErVilkarOk={originalErVilkarOk}
        erIkkeGodkjentAvBeslutter={erIkkeGodkjentAvBeslutter}
        isDirty={formMethods.formState.isDirty}
        isSubmitting={formMethods.formState.isSubmitting}
      >
        <Element><FormattedMessage id="ErOmsorgVilkaarOppfyltForm.VilkaretOppfylt" /></Element>
        <VilkarResultPickerNew
          avslagsarsaker={avslagsarsaker}
          readOnly={readOnly}
          customVilkarOppfyltText={<FormattedMessage id="ErOmsorgVilkaarOppfyltForm.Oppfylt" />}
          customVilkarIkkeOppfyltText={<FormattedMessage id="ErOmsorgVilkaarOppfyltForm.IkkeOppfylt" values={{ b: (chunks) => <b>{chunks}</b> }} />}
        />
        <ProsessStegBegrunnelseTextFieldNew readOnly={readOnly} />
      </ProsessPanelTemplate>
    </Form>
  );
};

export default ErOmsorgVilkaarOppfyltForm;

import React, { FunctionComponent, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import { Element } from 'nav-frontend-typografi';

import { Form } from '@fpsak-frontend/form-hooks';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import {
  ProsessStegBegrunnelseTextFieldNew, VilkarResultPickerNew, ProsessPanelTemplate, validerApKodeOgHentApEnum,
} from '@fpsak-frontend/prosess-felles';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import AksjonspunktCode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import {
  Aksjonspunkt, AlleKodeverk, Behandling, KodeverkMedNavn, Vilkar,
} from '@fpsak-frontend/types';
import { VurdereYtelseSammeBarnAnnenForelderAp, VurdereYtelseSammeBarnSokerAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

const avslagsarsakerES = ['1002', '1003', '1032'];

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
  ytelseTypeKode: string
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

const getFodselVilkarAvslagsarsaker = (
  isFpFagsak: boolean,
  fodselsvilkarAvslagskoder: KodeverkMedNavn[],
): KodeverkMedNavn[] => (isFpFagsak
  ? fodselsvilkarAvslagskoder.filter((arsak) => !avslagsarsakerES.includes(arsak.kode))
  : fodselsvilkarAvslagskoder);

/**
 * FodselVilkarForm
 *
 * Setter opp aksjonspunktet for avklaring av Fødselsvilkåret.
 */
const FodselVilkarForm: FunctionComponent<OwnProps> = ({
  isApOpen,
  readOnly,
  readOnlySubmitButton,
  status,
  behandlingsresultat,
  aksjonspunkter,
  erIkkeGodkjentAvBeslutter,
  ytelseTypeKode,
  alleKodeverk,
  submitCallback,
  vilkar,
  setFormData,
  formData,
}) => {
  const intl = useIntl();

  const initialValues = useMemo(() => buildInitialValues(aksjonspunkter, status, behandlingsresultat), [behandlingsresultat, aksjonspunkter, status]);
  const formMethods = useForm<FormValues>({
    defaultValues: formData || initialValues,
  });

  const alleAvslagsarsaker = alleKodeverk[kodeverkTyper.AVSLAGSARSAK][vilkarType.FODSELSVILKARET_MOR];
  const avslagsarsaker = getFodselVilkarAvslagsarsaker(ytelseTypeKode === fagsakYtelseType.FORELDREPENGER, alleAvslagsarsaker);

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
        title={intl.formatMessage({ id: 'FodselVilkarForm.Fodsel' })}
        isAksjonspunktOpen={isApOpen}
        readOnlySubmitButton={readOnlySubmitButton}
        readOnly={readOnly}
        lovReferanse={lovReferanse}
        originalErVilkarOk={originalErVilkarOk}
        erIkkeGodkjentAvBeslutter={erIkkeGodkjentAvBeslutter}
        isDirty={formMethods.formState.isDirty}
        isSubmitting={formMethods.formState.isSubmitting}
      >
        <Element><FormattedMessage id="FodselVilkarForm.TidligereUtbetaltStonad" /></Element>
        <VilkarResultPickerNew
          avslagsarsaker={avslagsarsaker}
          readOnly={readOnly}
          customVilkarOppfyltText={<FormattedMessage id="FodselVilkarForm.Oppfylt" />}
          customVilkarIkkeOppfyltText={<FormattedMessage id="FodselVilkarForm.IkkeOppfylt" values={{ b: (chunks: any) => <b>{chunks}</b> }} />}
        />
        <ProsessStegBegrunnelseTextFieldNew useAllWidth readOnly={readOnly} />
      </ProsessPanelTemplate>
    </Form>
  );
};

export default FodselVilkarForm;

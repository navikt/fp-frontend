import React, { FunctionComponent, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import { Label } from '@navikt/ds-react';

import { Form } from '@navikt/ft-form-hooks';
import vilkarUtfallType from '@navikt/fp-kodeverk/src/vilkarUtfallType';
import { isAksjonspunktOpen } from '@navikt/fp-kodeverk/src/aksjonspunktStatus';
import {
  ProsessStegBegrunnelseTextFieldNew, VilkarResultPicker, ProsessPanelTemplate, validerApKodeOgHentApEnum,
} from '@navikt/fp-prosess-felles';
import kodeverkTyper from '@navikt/fp-kodeverk/src/kodeverkTyper';
import fagsakYtelseType from '@navikt/fp-kodeverk/src/fagsakYtelseType';
import vilkarType from '@navikt/fp-kodeverk/src/vilkarType';
import AksjonspunktCode from '@navikt/fp-kodeverk/src/aksjonspunktCodes';
import {
  Aksjonspunkt, AlleKodeverk, Behandling, KodeverkMedNavn, Vilkar,
} from '@navikt/fp-types';
import { VurdereYtelseSammeBarnAnnenForelderAp, VurdereYtelseSammeBarnSokerAp } from '@navikt/fp-types-avklar-aksjonspunkter';

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
  ...VilkarResultPicker.buildInitialValues(behandlingsresultat, aksjonspunkter, status),
  ...ProsessStegBegrunnelseTextFieldNew.buildInitialValues(aksjonspunkter),
});

const transformValues = (
  values: FormValues,
  aksjonspunkter: Aksjonspunkt[],
): VurdereYtelseSammeBarnSokerAp | VurdereYtelseSammeBarnAnnenForelderAp => ({
  ...VilkarResultPicker.transformValues(values),
  ...ProsessStegBegrunnelseTextFieldNew.transformValues(values),
  kode: validerApKodeOgHentApEnum(aksjonspunkter[0].definisjon,
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

  const isOpenAksjonspunkt = aksjonspunkter.some((ap) => isAksjonspunktOpen(ap.status));
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
        <Label size="small"><FormattedMessage id="FodselVilkarForm.TidligereUtbetaltStonad" /></Label>
        <VilkarResultPicker
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

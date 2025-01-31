import React, { FunctionComponent, useCallback, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Label } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';

import {
  AksjonspunktKode,
  AksjonspunktStatus,
  FagsakYtelseType,
  KodeverkType,
  VilkarType,
  VilkarUtfallType,
} from '@navikt/fp-kodeverk';
import {
  ProsessPanelTemplate,
  ProsessStegBegrunnelseTextFieldNew,
  validerApKodeOgHentApEnum,
  VilkarResultPicker,
} from '@navikt/fp-prosess-felles';
import { Aksjonspunkt, AlleKodeverk, Behandling, KodeverkMedNavn, Vilkar } from '@navikt/fp-types';
import {
  VurdereYtelseSammeBarnAnnenForelderAp,
  VurdereYtelseSammeBarnSokerAp,
} from '@navikt/fp-types-avklar-aksjonspunkter';
import { useFormData } from '@navikt/fp-utils';

const avslagsarsakerES = ['1002', '1003', '1032'];

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
  ytelseTypeKode: string;
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

const getFodselVilkarAvslagsarsaker = (
  isFpFagsak: boolean,
  fodselsvilkarAvslagskoder: KodeverkMedNavn[],
): KodeverkMedNavn[] =>
  isFpFagsak
    ? fodselsvilkarAvslagskoder.filter(arsak => !avslagsarsakerES.includes(arsak.kode))
    : fodselsvilkarAvslagskoder;

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

  const alleAvslagsarsaker = alleKodeverk[KodeverkType.AVSLAGSARSAK][VilkarType.FODSELSVILKARET_MOR];
  const avslagsarsaker = getFodselVilkarAvslagsarsaker(
    ytelseTypeKode === FagsakYtelseType.FORELDREPENGER,
    alleAvslagsarsaker,
  );

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
        <Label size="small">
          <FormattedMessage id="FodselVilkarForm.TidligereUtbetaltStonad" />
        </Label>
        <VilkarResultPicker
          avslagsarsaker={avslagsarsaker}
          readOnly={readOnly}
          customVilkarOppfyltText={<FormattedMessage id="FodselVilkarForm.Oppfylt" />}
          customVilkarIkkeOppfyltText={<FormattedMessage id="FodselVilkarForm.IkkeOppfylt" values={{ b: bTag }} />}
        />
        <ProsessStegBegrunnelseTextFieldNew useAllWidth readOnly={readOnly} />
      </ProsessPanelTemplate>
    </Form>
  );
};

export default FodselVilkarForm;

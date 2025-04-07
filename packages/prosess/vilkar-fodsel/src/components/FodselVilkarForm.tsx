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
import type { Aksjonspunkt, Behandling, KodeverkMedNavn, Vilkar } from '@navikt/fp-types';
import type {
  VurdereYtelseSammeBarnAnnenForelderAp,
  VurdereYtelseSammeBarnSokerAp,
} from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

const avslagsarsakerES = ['1002', '1003', '1032'];

type FormValues = {
  erVilkarOk?: boolean;
  avslagCode?: string;
  begrunnelse?: string;
};

interface Props {
  status: string;
  vilkar: Vilkar[];
  ytelseTypeKode: string;
  readOnlySubmitButton: boolean;
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
export const FodselVilkarForm = ({ readOnlySubmitButton, status, ytelseTypeKode, vilkar }: Props) => {
  const intl = useIntl();

  const {
    behandling,
    alleKodeverk,
    aksjonspunkterForPanel,
    submitCallback,
    harÅpneAksjonspunkter,
    isReadOnly,
    alleMerknaderFraBeslutter,
  } = usePanelDataContext<VurdereYtelseSammeBarnSokerAp | VurdereYtelseSammeBarnAnnenForelderAp>();

  const erIkkeGodkjentAvBeslutter = aksjonspunkterForPanel.some(
    a => alleMerknaderFraBeslutter[a.definisjon]?.notAccepted,
  );

  const initialValues = buildInitialValues(aksjonspunkterForPanel, status, behandling.behandlingsresultat);

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();
  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData || initialValues,
  });

  const alleAvslagsarsaker = alleKodeverk[KodeverkType.AVSLAGSARSAK][VilkarType.FODSELSVILKARET_MOR];
  const avslagsarsaker = getFodselVilkarAvslagsarsaker(
    ytelseTypeKode === FagsakYtelseType.FORELDREPENGER,
    alleAvslagsarsaker,
  );

  const isOpenAksjonspunkt = aksjonspunkterForPanel.some(ap => ap.status === AksjonspunktStatus.OPPRETTET);
  const originalErVilkarOk = isOpenAksjonspunkt ? undefined : VilkarUtfallType.OPPFYLT === status;
  const { lovReferanse } = vilkar[0];

  const bTag = (...chunks: any) => <b>{chunks}</b>;

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values, aksjonspunkterForPanel))}
      setDataOnUnmount={setMellomlagretFormData}
    >
      <ProsessPanelTemplate
        title={intl.formatMessage({ id: 'FodselVilkarForm.Fodsel' })}
        isAksjonspunktOpen={harÅpneAksjonspunkter}
        readOnlySubmitButton={readOnlySubmitButton}
        readOnly={isReadOnly}
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
          readOnly={isReadOnly}
          customVilkarOppfyltText={<FormattedMessage id="FodselVilkarForm.Oppfylt" />}
          customVilkarIkkeOppfyltText={<FormattedMessage id="FodselVilkarForm.IkkeOppfylt" values={{ b: bTag }} />}
        />
        <ProsessStegBegrunnelseTextFieldNew useAllWidth readOnly={isReadOnly} />
      </ProsessPanelTemplate>
    </Form>
  );
};

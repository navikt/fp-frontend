import React, { FunctionComponent, useMemo } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import moment from 'moment';
import { Element } from 'nav-frontend-typografi';

import { Form } from '@fpsak-frontend/form-hooks';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import AksjonspunktKode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import {
  ProsessStegBegrunnelseTextFieldNew, VilkarResultPicker, ProsessPanelTemplate,
} from '@fpsak-frontend/prosess-felles';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import {
  Aksjonspunkt,
  AlleKodeverk,
  ArbeidsforholdFodselOgTilrettelegging, ArbeidsforholdTilretteleggingDato,
  Behandling,
  FodselOgTilrettelegging,
  Vilkar,
} from '@fpsak-frontend/types';
import { BekreftSvangerskapspengervilkarAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';
import tilretteleggingType from '@fpsak-frontend/kodeverk/src/tilretteleggingType';
import { VerticalSpacer } from '@fpsak-frontend/shared-components';

const finnesUttakPåArbfor = (arbfor: ArbeidsforholdFodselOgTilrettelegging): boolean => {
  const finnesAnnenTilretteleggingEnnHel = arbfor.tilretteleggingDatoer
    .some((dato: ArbeidsforholdTilretteleggingDato) => dato.type.kode !== tilretteleggingType.HEL_TILRETTELEGGING);
  const finnesHelTilretteleggingEtterBehovOppstår = arbfor.tilretteleggingDatoer
    .some((dato: ArbeidsforholdTilretteleggingDato) => dato.type.kode === tilretteleggingType.HEL_TILRETTELEGGING
    && moment(dato.fom).isAfter(moment(arbfor.tilretteleggingBehovFom)));
  return finnesAnnenTilretteleggingEnnHel || finnesHelTilretteleggingEtterBehovOppstår;
};

const finnesInnvilgetUttak = (svangerskapspengerTilrettelegging: FodselOgTilrettelegging): boolean => (svangerskapspengerTilrettelegging
  && svangerskapspengerTilrettelegging.arbeidsforholdListe
  ? svangerskapspengerTilrettelegging.arbeidsforholdListe.some((arbfor) => finnesUttakPåArbfor(arbfor))
  : false);

type FormValues = {
  erVilkarOk?: boolean;
  avslagCode?: string;
  avslagDato?: string;
  begrunnelse?: string;
}

const buildInitialValues = (
  aksjonspunkter: Aksjonspunkt[],
  status: string,
  behandlingsresultat?: Behandling['behandlingsresultat'],
): FormValues => ({
  ...VilkarResultPicker.buildInitialValues(behandlingsresultat, aksjonspunkter, status),
  ...ProsessStegBegrunnelseTextFieldNew.buildInitialValues(aksjonspunkter),
});

const transformValues = (values: FormValues): BekreftSvangerskapspengervilkarAp => ({
  ...VilkarResultPicker.transformValues(values),
  ...ProsessStegBegrunnelseTextFieldNew.transformValues(values),
  kode: AksjonspunktKode.SVANGERSKAPSVILKARET,
});

interface OwnProps {
  behandlingsresultat?: Behandling['behandlingsresultat'];
  aksjonspunkter: Aksjonspunkt[];
  status: string;
  vilkar: Vilkar[];
  submitCallback: (aksjonspunktData: BekreftSvangerskapspengervilkarAp) => Promise<void>;
  readOnly: boolean;
  readOnlySubmitButton: boolean;
  isApOpen: boolean;
  alleKodeverk: AlleKodeverk;
  erIkkeGodkjentAvBeslutter: boolean;
  svangerskapspengerTilrettelegging: FodselOgTilrettelegging;
  formData?: FormValues;
  setFormData: (data: FormValues) => void;
}

/**
 * SvangerskapsvilkårForm
 */
const SvangerskapVilkarForm: FunctionComponent<OwnProps> = ({
  readOnly,
  readOnlySubmitButton,
  isApOpen,
  erIkkeGodkjentAvBeslutter,
  svangerskapspengerTilrettelegging,
  aksjonspunkter,
  behandlingsresultat,
  alleKodeverk,
  submitCallback,
  status,
  formData,
  setFormData,
}) => {
  const finnesUttak = useMemo(() => finnesInnvilgetUttak(svangerskapspengerTilrettelegging), [svangerskapspengerTilrettelegging]);

  const intl = useIntl();

  const initialValues = useMemo(() => buildInitialValues(aksjonspunkter, status, behandlingsresultat), [behandlingsresultat, aksjonspunkter, status]);
  const formMethods = useForm<FormValues>({
    defaultValues: formData || initialValues,
  });

  const erVilkarOk = formMethods.watch('erVilkarOk');

  const avslagsarsaker = alleKodeverk[kodeverkTyper.AVSLAGSARSAK][vilkarType.SVANGERSKAPVILKARET];

  const isOpenAksjonspunkt = aksjonspunkter.some((ap) => isAksjonspunktOpen(ap.status.kode));
  const originalErVilkarOk = isOpenAksjonspunkt ? undefined : vilkarUtfallType.OPPFYLT === status;

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values))}
      setDataOnUnmount={setFormData}
    >
      <ProsessPanelTemplate
        title={intl.formatMessage({ id: 'SvangerskapVilkarForm.Svangerskap' })}
        isAksjonspunktOpen={isApOpen}
        readOnlySubmitButton={readOnlySubmitButton}
        readOnly={readOnly}
        originalErVilkarOk={originalErVilkarOk}
        erIkkeGodkjentAvBeslutter={erIkkeGodkjentAvBeslutter}
        isDirty={formMethods.formState.isDirty}
        isSubmitting={formMethods.formState.isSubmitting}
      >
        <Element><FormattedMessage id="SvangerskapVilkarForm.RettTilSvp" /></Element>
        {!finnesUttak && (
          <>
            <VerticalSpacer sixteenPx />
            <Element><FormattedMessage id="SvangerskapVilkarForm.IkkeInnvilgetUttak" /></Element>
          </>
        )}
        <VilkarResultPicker
          avslagsarsaker={avslagsarsaker}
          readOnly={readOnly}
          skalKunneInnvilge={finnesUttak}
          customVilkarOppfyltText={<FormattedMessage id="SvangerskapVilkarForm.Oppfylt" />}
          customVilkarIkkeOppfyltText={<FormattedMessage id="SvangerskapVilkarForm.IkkeOppfylt" values={{ b: (chunks) => <b>{chunks}</b> }} />}
        />
        {erVilkarOk === false && <ProsessStegBegrunnelseTextFieldNew readOnly={readOnly} />}
      </ProsessPanelTemplate>
    </Form>
  );
};

export default SvangerskapVilkarForm;

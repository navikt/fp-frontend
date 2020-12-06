import React, { FunctionComponent, ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';
import { Normaltekst } from 'nav-frontend-typografi';

import { RadioGroupField, RadioOption } from '@fpsak-frontend/form';
import { getKodeverknavnFn, removeSpacesFromNumber, required } from '@fpsak-frontend/utils';
import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import faktaOmBeregningTilfelle from '@fpsak-frontend/kodeverk/src/faktaOmBeregningTilfelle';
import {
  ArbeidsgiverOpplysningerPerId, BeregningsgrunnlagArbeidsforhold,
  FaktaOmBeregning,
  KodeverkMedNavn,
  VurderMottarYtelse,
} from '@fpsak-frontend/types';
import Beregningsgrunnlag from '@fpsak-frontend/types/src/beregningsgrunnlagTsType';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import {
  andelsnrMottarYtelseMap,
  finnFrilansFieldName,
  frilansMottarYtelse,
  skalFastsetteInntektATUtenInntektsmelding,
  utledArbeidsforholdFieldName,
} from './VurderMottarYtelseUtils';
import { createVisningsnavnForAktivitet } from '../../../ArbeidsforholdHelper';
import { InntektTransformed } from '../../andelFieldValueTs';

const andreFrilansTilfeller = [faktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL, faktaOmBeregningTilfelle.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON];

export const mottarYtelseForArbeidMsg = (): string => ('BeregningInfoPanel.VurderMottarYtelse.MottarYtelseForArbeid');

const lagVisningsnavn = (arbeidsforhold: BeregningsgrunnlagArbeidsforhold,
  alleKodeverk: {[key: string]: KodeverkMedNavn[]},
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId): string => {
  const arbeidsgiverOpplysning = arbeidsgiverOpplysningerPerId[arbeidsforhold.arbeidsgiverId];
  if (!arbeidsgiverOpplysning) {
    return arbeidsforhold.arbeidsforholdType ? getKodeverknavnFn(alleKodeverk, kodeverkTyper)(arbeidsforhold.arbeidsforholdType) : '';
  }
  return createVisningsnavnForAktivitet(arbeidsgiverOpplysning, arbeidsforhold.eksternArbeidsforholdId);
};

const utledArbeidsforholdUtenIMRadioTekst = (arbeidsforhold: BeregningsgrunnlagArbeidsforhold,
  alleKodeverk: {[key: string]: KodeverkMedNavn[]},
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId): ReactNode => (
    <FormattedMessage id={mottarYtelseForArbeidMsg()} values={{ arbeid: lagVisningsnavn(arbeidsforhold, alleKodeverk, arbeidsgiverOpplysningerPerId) }} />
);

const mottarYtelseArbeidsforholdRadio = (andel, readOnly, isAksjonspunktClosed, alleKodeverk, arbeidsgiverOpplysningerPerId) => (
  <div key={utledArbeidsforholdFieldName(andel)}>
    <div>
      <Normaltekst>
        {utledArbeidsforholdUtenIMRadioTekst(andel.arbeidsforhold, alleKodeverk, arbeidsgiverOpplysningerPerId)}
      </Normaltekst>
    </div>
    <VerticalSpacer eightPx />
    <RadioGroupField
      name={utledArbeidsforholdFieldName(andel)}
      readOnly={readOnly}
      isEdited={isAksjonspunktClosed}
    >
      <RadioOption label={<FormattedMessage id="BeregningInfoPanel.FormAlternativ.Ja" />} value />
      <RadioOption label={<FormattedMessage id="BeregningInfoPanel.FormAlternativ.Nei" />} value={false} />
    </RadioGroupField>
  </div>
);

export const frilansMedAndreFrilanstilfeller = (): string => ('BeregningInfoPanel.VurderMottarYtelse.MottarYtelseForFrilansUtenFrilans');
export const frilansUtenAndreFrilanstilfeller = (): string => ('BeregningInfoPanel.VurderMottarYtelse.MottarYtelseForFrilans');

const finnFrilansTekstKode = (tilfeller: string[]): string => {
  if (tilfeller.some((tilfelle) => andreFrilansTilfeller.includes(tilfelle))) {
    return frilansMedAndreFrilanstilfeller();
  }
  return frilansUtenAndreFrilanstilfeller();
};

type OwnProps = {
    readOnly: boolean;
    isAksjonspunktClosed: boolean;
    tilfeller: string[];
    beregningsgrunnlag: Beregningsgrunnlag;
    alleKodeverk: {[key: string]: KodeverkMedNavn[]};
    arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
};

interface StaticFunctions {
  validate: (values: any, vurderMottarYtelse: VurderMottarYtelse) => any;
  transformValues: (values: any,
                    inntektVerdier: InntektTransformed[],
                    faktaOmBeregning: FaktaOmBeregning,
                    beregningsgrunnlag: Beregningsgrunnlag,
                    fastsatteAndelsnr: number[]) => any;
  buildInitialValues: (vurderMottarYtelse: VurderMottarYtelse) => any;
}

/**
 * VurderMottarYtelseForm
 *
 * Presentasjonskomponent. Setter opp aksjonspunktet VURDER_FAKTA_FOR_ATFL_SN for tilfelle VURDER_MOTTAR_YTELSE som ber
 * bruker vurder om bruker har mottatt ytelse for en eller flere aktiviteter.
 */
const VurderMottarYtelseForm:FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  isAksjonspunktClosed,
  beregningsgrunnlag,
  tilfeller,
  alleKodeverk,
  arbeidsgiverOpplysningerPerId,
}) => {
  const vurderMottarYtelse = beregningsgrunnlag.faktaOmBeregning ? beregningsgrunnlag.faktaOmBeregning.vurderMottarYtelse : undefined;
  const erFrilans = vurderMottarYtelse && vurderMottarYtelse.erFrilans;
  const arbeidsforholdUtenIM = vurderMottarYtelse && vurderMottarYtelse.arbeidstakerAndelerUtenIM ? vurderMottarYtelse.arbeidstakerAndelerUtenIM : [];
  return (
    <div>
      {erFrilans
      && (
        <div>
          <div key={finnFrilansFieldName()}>
            <Normaltekst>
              <FormattedMessage id={finnFrilansTekstKode(tilfeller)} />
            </Normaltekst>
          </div>
          <VerticalSpacer eightPx />
          <RadioGroupField
            name={finnFrilansFieldName()}
            readOnly={readOnly}
            isEdited={isAksjonspunktClosed}
          >
            <RadioOption label={<FormattedMessage id="BeregningInfoPanel.FormAlternativ.Ja" />} value />
            <RadioOption label={<FormattedMessage id="BeregningInfoPanel.FormAlternativ.Nei" />} value={false} />
          </RadioGroupField>
        </div>
      )}
      {arbeidsforholdUtenIM.map((andel) => (
        mottarYtelseArbeidsforholdRadio(andel, readOnly, isAksjonspunktClosed, alleKodeverk, arbeidsgiverOpplysningerPerId)
      ))}
    </div>
  );
};

const transformValuesArbeidstakerUtenIM = (values, inntektVerdier, faktaOmBeregning, beregningsgrunnlag, fastsatteAndelsnr, faktaOmBeregningTilfeller) => {
  if (inntektVerdier === null) {
    return {};
  }
  const skalFastsetteAT = skalFastsetteInntektATUtenInntektsmelding(values, faktaOmBeregning.vurderMottarYtelse);
  if (skalFastsetteAT) {
    const listeMedFastsatteMaanedsinntekter = [];
    const mottarYtelseMap = andelsnrMottarYtelseMap(values, faktaOmBeregning.vurderMottarYtelse, beregningsgrunnlag);
    faktaOmBeregning.vurderMottarYtelse.arbeidstakerAndelerUtenIM.forEach((andel) => {
      if (mottarYtelseMap[andel.andelsnr] && !fastsatteAndelsnr.includes(andel.andelsnr)) {
        const inntektUtenFormat = inntektVerdier.find((field) => field.andelsnr === andel.andelsnr).fastsattBelop;
        if (inntektUtenFormat || inntektUtenFormat === 0) {
          listeMedFastsatteMaanedsinntekter.push({
            andelsnr: andel.andelsnr,
            fastsattBeløp: removeSpacesFromNumber(inntektUtenFormat),
          });
          fastsatteAndelsnr.push(andel.andelsnr);
        }
      }
    });
    if (listeMedFastsatteMaanedsinntekter.length > 0) {
      faktaOmBeregningTilfeller.push(faktaOmBeregningTilfelle.FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING);
      return {
        fastsattUtenInntektsmelding: { andelListe: listeMedFastsatteMaanedsinntekter },
      };
    }
    return {};
  }
  return {};
};

const transformValuesFrilans = (values, inntektVerdier, beregningsgrunnlag, fastsatteAndelsnr, faktaOmBeregningTilfeller) => {
  if (inntektVerdier === null) {
    return {};
  }
  const skalFastsetteInntektFrilans = values[finnFrilansFieldName()];
  if (skalFastsetteInntektFrilans) {
    const frilansAndel = beregningsgrunnlag.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel
      .find((andel) => andel.aktivitetStatus.kode === aktivitetStatus.FRILANSER);
    if (!fastsatteAndelsnr.includes(frilansAndel.andelsnr) && frilansMottarYtelse(values)) {
      const frilansInntekt = inntektVerdier.find((field) => field.andelsnr === frilansAndel.andelsnr);
      fastsatteAndelsnr.push(frilansAndel.andelsnr);
      faktaOmBeregningTilfeller.push(faktaOmBeregningTilfelle.FASTSETT_MAANEDSINNTEKT_FL);
      return {
        fastsettMaanedsinntektFL: { maanedsinntekt: removeSpacesFromNumber(frilansInntekt.fastsattBelop) },

      };
    }
    return {};
  }
  return {};
};

const transformValuesMottarYtelse = (values, faktaOmBeregning, faktaOmBeregningTilfeller) => {
  const ATAndelerUtenIM = faktaOmBeregning.vurderMottarYtelse.arbeidstakerAndelerUtenIM ? faktaOmBeregning.vurderMottarYtelse.arbeidstakerAndelerUtenIM : [];
  faktaOmBeregningTilfeller.push(faktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE);
  return {
    mottarYtelse: {
      frilansMottarYtelse: values[finnFrilansFieldName()],
      arbeidstakerUtenIMMottarYtelse: ATAndelerUtenIM.map((andel) => ({
        andelsnr: andel.andelsnr,
        mottarYtelse: values[utledArbeidsforholdFieldName(andel)],
      })),
    },
  };
};

VurderMottarYtelseForm.buildInitialValues = (vurderMottarYtelse) => {
  const initialValues = {};
  if (!vurderMottarYtelse) {
    return null;
  }
  if (vurderMottarYtelse.erFrilans) {
    initialValues[finnFrilansFieldName()] = vurderMottarYtelse.frilansMottarYtelse;
  }

  const ATAndelerUtenIM = vurderMottarYtelse.arbeidstakerAndelerUtenIM ? vurderMottarYtelse.arbeidstakerAndelerUtenIM : [];
  if (ATAndelerUtenIM.length < 1) {
    return initialValues;
  }
  ATAndelerUtenIM.forEach((andel) => {
    initialValues[utledArbeidsforholdFieldName(andel)] = andel.mottarYtelse;
  });
  return initialValues;
};

VurderMottarYtelseForm.transformValues = (values, inntektVerdier, faktaOmBeregning, beregningsgrunnlag, fastsatteAndelsnr) => {
  const faktaOmBeregningTilfeller = [];
  const aktiveTilfeller = faktaOmBeregning.faktaOmBeregningTilfeller ? faktaOmBeregning.faktaOmBeregningTilfeller : [];
  if (!aktiveTilfeller.map(({ kode }) => kode).includes(faktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE)) {
    return {};
  }
  return ({
    ...transformValuesMottarYtelse(values, faktaOmBeregning, faktaOmBeregningTilfeller),
    ...transformValuesArbeidstakerUtenIM(values, inntektVerdier, faktaOmBeregning, beregningsgrunnlag, fastsatteAndelsnr, faktaOmBeregningTilfeller),
    ...transformValuesFrilans(values, inntektVerdier, beregningsgrunnlag, fastsatteAndelsnr, faktaOmBeregningTilfeller),
    faktaOmBeregningTilfeller,
  });
};

VurderMottarYtelseForm.validate = (values, vurderMottarYtelse) => {
  const errors = {};
  if (!vurderMottarYtelse) {
    return null;
  }
  if (vurderMottarYtelse.erFrilans) {
    errors[finnFrilansFieldName()] = required(values[finnFrilansFieldName()]);
  }
  const ATAndelerUtenIM = vurderMottarYtelse.arbeidstakerAndelerUtenIM ? vurderMottarYtelse.arbeidstakerAndelerUtenIM : [];
  ATAndelerUtenIM.forEach((andel) => {
    errors[utledArbeidsforholdFieldName(andel)] = required(values[utledArbeidsforholdFieldName(andel)]);
  });
  return errors;
};

export default VurderMottarYtelseForm;

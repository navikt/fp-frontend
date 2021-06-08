import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Normaltekst } from 'nav-frontend-typografi';

import { RadioGroupField, RadioOption } from '@fpsak-frontend/form';
import { getKodeverknavnFn, removeSpacesFromNumber, required } from '@fpsak-frontend/utils';
import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import faktaOmBeregningTilfelle from '@fpsak-frontend/kodeverk/src/faktaOmBeregningTilfelle';
import {
  ArbeidsgiverOpplysningerPerId,
  ArbeidstakerUtenIMAndel, BeregningsgrunnlagArbeidsforhold, FaktaOmBeregning, AlleKodeverk, VurderMottarYtelse,
} from '@fpsak-frontend/types';
import Beregningsgrunnlag from '@fpsak-frontend/types/src/beregningsgrunnlagTsType';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { FaktaBeregningTransformedValues } from '@fpsak-frontend/types-avklar-aksjonspunkter/src/fakta/BeregningFaktaAP';
import {
  andelsnrMottarYtelseMap,
  finnFrilansFieldName,
  frilansMottarYtelse,
  skalFastsetteInntektATUtenInntektsmelding,
  utledArbeidsforholdFieldName,
} from './VurderMottarYtelseUtils';
import { createVisningsnavnFakta } from '../../../ArbeidsforholdHelper';
import { InntektTransformed } from '../../../../typer/FieldValues';
import {
  FaktaOmBeregningAksjonspunktValues,
  TilfellerValues,
  VurderMottarYtelseValues,
} from '../../../../typer/FaktaBeregningTypes';

const andreFrilansTilfeller = [faktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL, faktaOmBeregningTilfelle.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON];

export const mottarYtelseForArbeidMsg = () => ('BeregningInfoPanel.VurderMottarYtelse.MottarYtelseForArbeid');

const utledArbeidsforholdUtenIMRadioTekst = (arbeidsforhold: BeregningsgrunnlagArbeidsforhold,
  alleKodeverk: AlleKodeverk,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId): React.ReactNode => {
  const agOpplysning = arbeidsgiverOpplysningerPerId[arbeidsforhold.arbeidsgiverIdent];
  let radioNavn;
  if (!agOpplysning) {
    radioNavn = arbeidsforhold.arbeidsforholdType ? getKodeverknavnFn(alleKodeverk, kodeverkTyper)(arbeidsforhold.arbeidsforholdType) : '';
  } else {
    radioNavn = createVisningsnavnFakta(agOpplysning, arbeidsforhold.eksternArbeidsforholdId);
  }
  return (
    <FormattedMessage id={mottarYtelseForArbeidMsg()} values={{ arbeid: radioNavn }} />
  );
};

const mottarYtelseArbeidsforholdRadio = (andel: ArbeidstakerUtenIMAndel,
  readOnly: boolean,
  isAksjonspunktClosed: boolean,
  alleKodeverk: AlleKodeverk,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId): React.ReactNode => (
    <div key={utledArbeidsforholdFieldName(andel)}>
      <div>
        <Normaltekst>
          {utledArbeidsforholdUtenIMRadioTekst(andel.arbeidsforhold, alleKodeverk, arbeidsgiverOpplysningerPerId)}
        </Normaltekst>
      </div>
      <VerticalSpacer eightPx />
      <RadioGroupField
        name={`vurderMottarYtelseValues.${utledArbeidsforholdFieldName(andel)}`}
        readOnly={readOnly}
        isEdited={isAksjonspunktClosed}
      >
        <RadioOption label={<FormattedMessage id="BeregningInfoPanel.FormAlternativ.Ja" />} value />
        <RadioOption label={<FormattedMessage id="BeregningInfoPanel.FormAlternativ.Nei" />} value={false} />
      </RadioGroupField>
    </div>
);

export const frilansMedAndreFrilanstilfeller = () => ('BeregningInfoPanel.VurderMottarYtelse.MottarYtelseForFrilansUtenFrilans');
export const frilansUtenAndreFrilanstilfeller = () => ('BeregningInfoPanel.VurderMottarYtelse.MottarYtelseForFrilans');

const finnFrilansTekstKode = (tilfeller) => {
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
    alleKodeverk: AlleKodeverk;
    arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
};

interface StaticFunctions {
  validate: (values: FaktaOmBeregningAksjonspunktValues, vurderMottarYtelse: VurderMottarYtelse) => any;
  transformValues: (values: FaktaOmBeregningAksjonspunktValues,
                    inntektVerdier: InntektTransformed[],
                    faktaOmBeregning: FaktaOmBeregning,
                    beregningsgrunnlag: Beregningsgrunnlag,
                    fastsatteAndelsnr: number[]) => FaktaBeregningTransformedValues;
  buildInitialValues: (vurderMottarYtelse: VurderMottarYtelse) => VurderMottarYtelseValues;
}

/**
 * VurderMottarYtelseForm
 *
 * Presentasjonskomponent. Setter opp aksjonspunktet VURDER_FAKTA_FOR_ATFL_SN for tilfelle VURDER_MOTTAR_YTELSE som ber
 * bruker vurder om bruker har mottatt ytelse for en eller flere aktiviteter.
 */
const VurderMottarYtelseForm:FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly, isAksjonspunktClosed, beregningsgrunnlag, tilfeller, alleKodeverk, arbeidsgiverOpplysningerPerId,
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
            name={`vurderMottarYtelseValues.${finnFrilansFieldName()}`}
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

const transformValuesArbeidstakerUtenIM = (values: FaktaOmBeregningAksjonspunktValues,
  inntektVerdier: InntektTransformed[],
  faktaOmBeregning: FaktaOmBeregning,
  beregningsgrunnlag: Beregningsgrunnlag,
  fastsatteAndelsnr: number[],
  faktaOmBeregningTilfeller: string[]): FaktaBeregningTransformedValues => {
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

const transformValuesFrilans = (values: FaktaOmBeregningAksjonspunktValues,
  inntektVerdier: InntektTransformed[],
  beregningsgrunnlag: Beregningsgrunnlag,
  fastsatteAndelsnr: number[], faktaOmBeregningTilfeller: string[]): FaktaBeregningTransformedValues => {
  if (inntektVerdier === null) {
    return {};
  }
  const skalFastsetteInntektFrilans = values.vurderMottarYtelseValues[finnFrilansFieldName()];
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

const transformValuesMottarYtelse = (values: FaktaOmBeregningAksjonspunktValues,
  faktaOmBeregning: FaktaOmBeregning,
  faktaOmBeregningTilfeller: string[]): FaktaBeregningTransformedValues => {
  const ATAndelerUtenIM = faktaOmBeregning.vurderMottarYtelse.arbeidstakerAndelerUtenIM ? faktaOmBeregning.vurderMottarYtelse.arbeidstakerAndelerUtenIM : [];
  faktaOmBeregningTilfeller.push(faktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE);
  return {
    mottarYtelse: {
      frilansMottarYtelse: values.vurderMottarYtelseValues[finnFrilansFieldName()],
      arbeidstakerUtenIMMottarYtelse: ATAndelerUtenIM.map((andel) => ({
        andelsnr: andel.andelsnr,
        mottarYtelse: values.vurderMottarYtelseValues[utledArbeidsforholdFieldName(andel)],
      })),
    },
  };
};

VurderMottarYtelseForm.buildInitialValues = (vurderMottarYtelse: VurderMottarYtelse): VurderMottarYtelseValues => {
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

VurderMottarYtelseForm.transformValues = (values: FaktaOmBeregningAksjonspunktValues,
  inntektVerdier: InntektTransformed[],
  faktaOmBeregning: FaktaOmBeregning,
  beregningsgrunnlag: Beregningsgrunnlag,
  fastsatteAndelsnr: number[]): FaktaBeregningTransformedValues => {
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

VurderMottarYtelseForm.validate = (values: FaktaOmBeregningAksjonspunktValues, vurderMottarYtelse: VurderMottarYtelse): any => {
  const errors = {};
  if (!vurderMottarYtelse) {
    return null;
  }
  if (vurderMottarYtelse.erFrilans) {
    errors[finnFrilansFieldName()] = required(values.vurderMottarYtelseValues[finnFrilansFieldName()]);
  }
  const ATAndelerUtenIM = vurderMottarYtelse.arbeidstakerAndelerUtenIM ? vurderMottarYtelse.arbeidstakerAndelerUtenIM : [];
  ATAndelerUtenIM.forEach((andel) => {
    errors[utledArbeidsforholdFieldName(andel)] = required(values.vurderMottarYtelseValues[utledArbeidsforholdFieldName(andel)]);
  });
  return errors;
};

export default VurderMottarYtelseForm;

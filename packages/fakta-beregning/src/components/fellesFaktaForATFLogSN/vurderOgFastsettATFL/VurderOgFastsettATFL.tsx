import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { FieldArray } from 'redux-form';
import faktaOmBeregningTilfelle from '@fpsak-frontend/kodeverk/src/faktaOmBeregningTilfelle';
import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import { createSelector } from 'reselect';
import {
  ArbeidsgiverOpplysningerPerId, FaktaOmBeregning, AlleKodeverk, VurderMottarYtelse,
} from '@fpsak-frontend/types';
import Aksjonspunkt from '@fpsak-frontend/types/src/aksjonspunktTsType';
import Beregningsgrunnlag from '@fpsak-frontend/types/src/beregningsgrunnlagTsType';
import {
  BeregningFaktaTransformedValues,
  FaktaBeregningTransformedValues,
} from '@fpsak-frontend/types-avklar-aksjonspunkter/src/fakta/BeregningFaktaAP';
import { IntlShape } from 'react-intl';
import LonnsendringForm, { lonnsendringField }
  from './forms/LonnsendringForm';
import NyoppstartetFLForm, { erNyoppstartetFLField }
  from './forms/NyoppstartetFLForm';
import { harVurdertMottarYtelse } from './forms/VurderMottarYtelseUtils';
import InntektstabellPanel from '../InntektstabellPanel';
import { ATFLSammeOrgTekst, transformValuesForATFLISammeOrg } from './forms/ATFLSammeOrg';
import { harKunstigArbeidsforhold } from './forms/KunstigArbeidsforhold';
import transformValuesArbeidUtenInntektsmelding from './forms/ArbeidUtenInntektsmelding';
import VurderMottarYtelseForm from './forms/VurderMottarYtelseForm';
import { getFormValuesForBeregning } from '../../BeregningFormUtils';
import { validateMinstEnFastsatt } from '../ValidateAndelerUtils';
import {
  skalFastsetteInntektForAndel, erOverstyring, erOverstyringAvBeregningsgrunnlag,
  getKanRedigereInntekt, INNTEKT_FIELD_ARRAY_NAME, mapAndelFieldIdentifikator,
} from '../BgFaktaUtils';
import VurderBesteberegningForm, { besteberegningField, vurderBesteberegningTransform } from '../besteberegningFodendeKvinne/VurderBesteberegningForm';
import InntektFieldArray, { InntektFieldArray as InntektFieldArrayImpl } from '../InntektFieldArray';
import VurderEtterlonnSluttpakkeForm from './forms/VurderEtterlonnSluttpakkeForm';
import { FaktaOmBeregningAksjonspunktValues, VurderOgFastsettATFLValues } from '../../../typer/FaktaBeregningTypes';
import AndelFieldValue, { InntektTransformed } from '../../../typer/FieldValues';

const lonnsendringErVurdertEllerIkkjeTilstede = (tilfeller: string[], values: FaktaOmBeregningAksjonspunktValues): boolean => (
  !tilfeller.includes(faktaOmBeregningTilfelle.VURDER_LONNSENDRING)
  || (values[lonnsendringField] !== undefined && values[lonnsendringField] !== null));

const nyoppstartetFLErVurdertEllerIkkjeTilstede = (tilfeller: string[], values: FaktaOmBeregningAksjonspunktValues): boolean => (
  !tilfeller.includes(faktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL)
  || (values[erNyoppstartetFLField] !== undefined && values[erNyoppstartetFLField] !== null));

const besteberegningErVurdertEllerIkkjeTilstede = (tilfeller: string[], values: FaktaOmBeregningAksjonspunktValues): boolean => (
  !tilfeller.includes(faktaOmBeregningTilfelle.VURDER_BESTEBEREGNING)
  || (values[besteberegningField] !== undefined && values[besteberegningField] !== null));

const mottarYtelseErVurdertEllerIkkjeTilstede = (tilfeller: string[], vurderMottarYtelse: VurderMottarYtelse,
  values: FaktaOmBeregningAksjonspunktValues): boolean => (
  !tilfeller.includes(faktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE)
  || (harVurdertMottarYtelse(values, vurderMottarYtelse)));

const harVurdert = (tilfeller: string[], values: FaktaOmBeregningAksjonspunktValues, faktaOmBeregning: FaktaOmBeregning): boolean => (
  lonnsendringErVurdertEllerIkkjeTilstede(tilfeller, values)
    && nyoppstartetFLErVurdertEllerIkkjeTilstede(tilfeller, values)
    && mottarYtelseErVurdertEllerIkkjeTilstede(tilfeller, faktaOmBeregning.vurderMottarYtelse, values)
    && besteberegningErVurdertEllerIkkjeTilstede(tilfeller, values)
);

const skalFastsetteInntekt = (values: FaktaOmBeregningAksjonspunktValues, faktaOmBeregning: FaktaOmBeregning,
  beregningsgrunnlag: Beregningsgrunnlag) => faktaOmBeregning.andelerForFaktaOmBeregning
  .map((andel) => mapAndelFieldIdentifikator(andel))
  .find(skalFastsetteInntektForAndel(values, faktaOmBeregning, beregningsgrunnlag)) !== undefined;

export const findInstruksjonForFastsetting = (skalHaBesteberegning, skalFastsetteFL, skalFastsetteAT, harKunstigArbeid) => {
  if (harKunstigArbeid) {
    return 'BeregningInfoPanel.KunstigArbeidsforhold.FastsettKunstigArbeidsforhold';
  }
  if (skalHaBesteberegning) {
    return 'KunYtelsePanel.OverskriftBesteberegning';
  }
  if (skalFastsetteFL) {
    if (!skalFastsetteAT) {
      return 'BeregningInfoPanel.VurderOgFastsettATFL.FastsettFrilans';
    }
    return 'BeregningInfoPanel.VurderOgFastsettATFL.FastsettATFLAlleOppdrag';
  }
  if (skalFastsetteAT) {
    return 'BeregningInfoPanel.VurderOgFastsettATFL.FastsettArbeidsinntekt';
  }
  return ' ';
};

const finnInntektstabell = (readOnly, beregningsgrunnlag,
  isAksjonspunktClosed, alleKodeverk, erOverstyrt, arbeidsgiverOpplysningerPerId) => (
    <FieldArray
      name={INNTEKT_FIELD_ARRAY_NAME}
      component={InntektFieldArray}
      readOnly={readOnly}
      skalKunneLeggeTilDagpengerManuelt={erOverstyrt}
      beregningsgrunnlag={beregningsgrunnlag}
      alleKodeverk={alleKodeverk}
      isAksjonspunktClosed={isAksjonspunktClosed}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />
);

type OwnProps = {
    readOnly: boolean;
    isAksjonspunktClosed: boolean;
    tilfeller: string[];
    manglerInntektsmelding: boolean;
    skalFastsetteAT: boolean;
    skalFastsetteFL: boolean;
    skalHaBesteberegning: boolean;
    harKunstigArbeid: boolean;
    skalViseTabell: boolean;
    alleKodeverk: AlleKodeverk;
    erOverstyrer: boolean;
    aksjonspunkter: Aksjonspunkt[];
    beregningsgrunnlag: Beregningsgrunnlag;
    erOverstyrt: boolean;
    skalHaMilitær: boolean;
    arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
};

interface StaticFunctions {
  buildInitialValues: (faktaOmBeregning: FaktaOmBeregning,
                       erOverstyrt: boolean,
                       arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
                       alleKodeverk: AlleKodeverk) => VurderOgFastsettATFLValues;
  validate: (values: FaktaOmBeregningAksjonspunktValues,
             tilfeller: string[],
             faktaOmBeregning: FaktaOmBeregning,
             beregningsgrunnlag: Beregningsgrunnlag,
             intl: IntlShape) => any;
  transformValues: (faktaOmBeregning: FaktaOmBeregning, beregningsgrunnlag: Beregningsgrunnlag) =>
    (values: FaktaOmBeregningAksjonspunktValues) => BeregningFaktaTransformedValues;
}

/**
 * VurderOgFastsettATFL
 *
 * Presentasjonskomponent. Styrer samspillet mellom tre tilfeller av vurdering: VURDER_LONNSENDRING,
 * VURDER_NYOPPSTARTET_FL og VURDER_AT_OG_FL_I_SAMME_ORGANISASJON.
 * Dersom alle tre opptrer samtidig er det et spesialtilfelle, der saksbehandler først må vurdere to
 * tilfeller før h*n kan fastsette inntekt.
 */

const VurderOgFastsettATFL: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  isAksjonspunktClosed,
  tilfeller,
  beregningsgrunnlag,
  manglerInntektsmelding,
  skalFastsetteAT,
  skalFastsetteFL,
  skalHaBesteberegning,
  harKunstigArbeid,
  skalViseTabell,
  aksjonspunkter,
  alleKodeverk,
  erOverstyrer,
  erOverstyrt,
  arbeidsgiverOpplysningerPerId,
}) => (
  <div>
    <InntektstabellPanel
      key="inntektstabell"
      tabell={finnInntektstabell(readOnly,
        beregningsgrunnlag,
        isAksjonspunktClosed,
        alleKodeverk,
        erOverstyrt,
        arbeidsgiverOpplysningerPerId)}
      skalViseTabell={skalViseTabell}
      hjelpeTekstId={findInstruksjonForFastsetting(skalHaBesteberegning, skalFastsetteFL, skalFastsetteAT, harKunstigArbeid)}
      readOnly={readOnly}
      erOverstyrer={erOverstyrer}
      aksjonspunkter={aksjonspunkter}
    >
      <ATFLSammeOrgTekst
        beregningsgrunnlag={beregningsgrunnlag}
        manglerInntektsmelding={manglerInntektsmelding}
      />
      {tilfeller.includes(faktaOmBeregningTilfelle.VURDER_LONNSENDRING)
      && (
        <LonnsendringForm
          readOnly={readOnly}
          isAksjonspunktClosed={isAksjonspunktClosed}
        />
      )}
      {tilfeller.includes(faktaOmBeregningTilfelle.VURDER_ETTERLONN_SLUTTPAKKE)
      && (
        <VurderEtterlonnSluttpakkeForm
          readOnly={readOnly}
          isAksjonspunktClosed={isAksjonspunktClosed}
        />
      )}
      {tilfeller.includes(faktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL)
      && (
        <NyoppstartetFLForm
          readOnly={readOnly}
          isAksjonspunktClosed={isAksjonspunktClosed}
        />
      )}
      {tilfeller.includes(faktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE)
      && (
        <VurderMottarYtelseForm
          readOnly={readOnly}
          isAksjonspunktClosed={isAksjonspunktClosed}
          tilfeller={tilfeller}
          beregningsgrunnlag={beregningsgrunnlag}
          alleKodeverk={alleKodeverk}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        />
      )}
      {tilfeller.includes(faktaOmBeregningTilfelle.VURDER_BESTEBEREGNING) && !tilfeller.includes(faktaOmBeregningTilfelle.FASTSETT_BG_KUN_YTELSE)
      && (
        <VurderBesteberegningForm
          readOnly={readOnly}
          isAksjonspunktClosed={isAksjonspunktClosed}
          erOverstyrt={erOverstyrt}
        />
      )}
    </InntektstabellPanel>
  </div>
);

VurderOgFastsettATFL.buildInitialValues = (faktaOmBeregning: FaktaOmBeregning,
  erOverstyrt: boolean,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  alleKodeverk: AlleKodeverk): VurderOgFastsettATFLValues => {
  if (!faktaOmBeregning) {
    return {};
  }
  const andeler = faktaOmBeregning.andelerForFaktaOmBeregning;
  if (andeler.length === 0) {
    return {};
  }
  return {
    [INNTEKT_FIELD_ARRAY_NAME]: InntektFieldArrayImpl.buildInitialValues(andeler, arbeidsgiverOpplysningerPerId, alleKodeverk),
    ...InntektstabellPanel.buildInitialValues(erOverstyrt),
  };
};

const validateEnFastsattVedOverstyring = (values: AndelFieldValue[], intl: IntlShape): any => {
  const minstEnFastsattFeilmelding = validateMinstEnFastsatt(values, intl);
  if (minstEnFastsattFeilmelding != null) {
    return { _error: minstEnFastsattFeilmelding };
  }
  return null;
};

VurderOgFastsettATFL.validate = (values: FaktaOmBeregningAksjonspunktValues,
  tilfeller: string[],
  faktaOmBeregning: FaktaOmBeregning,
  beregningsgrunnlag: Beregningsgrunnlag,
  intl: IntlShape): any => {
  const errors = {};
  if (harVurdert(tilfeller, values, faktaOmBeregning) && skalFastsetteInntekt(values, faktaOmBeregning, beregningsgrunnlag)) {
    errors[INNTEKT_FIELD_ARRAY_NAME] = InntektFieldArrayImpl.validate(values[INNTEKT_FIELD_ARRAY_NAME], false,
      skalFastsetteInntektForAndel(values, faktaOmBeregning, beregningsgrunnlag), intl);
  }
  if (!errors[INNTEKT_FIELD_ARRAY_NAME] && erOverstyring(values)) {
    errors[INNTEKT_FIELD_ARRAY_NAME] = validateEnFastsattVedOverstyring(values[INNTEKT_FIELD_ARRAY_NAME], intl);
  }
  return errors;
};

const concatTilfeller = (transformed: FaktaBeregningTransformedValues,
  newTransformedValues: FaktaBeregningTransformedValues): FaktaBeregningTransformedValues => ({
  ...transformed,
  ...newTransformedValues,
  faktaOmBeregningTilfeller: newTransformedValues.faktaOmBeregningTilfeller
    ? transformed.faktaOmBeregningTilfeller.concat(newTransformedValues.faktaOmBeregningTilfeller) : transformed.faktaOmBeregningTilfeller,
});

const transformValuesForOverstyring = (values: FaktaOmBeregningAksjonspunktValues,
  transformed: FaktaBeregningTransformedValues,
  inntektVerdier: InntektTransformed[],
  fastsatteAndelsnr: number[]): BeregningFaktaTransformedValues => {
  if (erOverstyring(values)) {
    const overstyrteAndeler = inntektVerdier.filter((andel) => !fastsatteAndelsnr.includes(andel.andelsnr))
      .filter((verdi) => verdi.fastsattBelop != null)
      .map((verdi) => ({
        andelsnr: verdi.andelsnr,
        nyAndel: verdi.nyAndel,
        aktivitetStatus: verdi.aktivitetStatus,
        lagtTilAvSaksbehandler: verdi.lagtTilAvSaksbehandler,
        fastsatteVerdier: {
          fastsattBeløp: verdi.fastsattBelop,
          inntektskategori: verdi.inntektskategori,
        },
      }));
    return {
      fakta: transformed,
      overstyrteAndeler,
    };
  }
  return {
    fakta: transformed,
  };
};

const transformValuesForAksjonspunkt = (values: FaktaOmBeregningAksjonspunktValues,
  inntektVerdier: InntektTransformed[],
  fastsatteAndelsnr: number[],
  faktaOmBeregning: FaktaOmBeregning,
  beregningsgrunnlag: Beregningsgrunnlag): FaktaBeregningTransformedValues => {
  const tilfeller = faktaOmBeregning.faktaOmBeregningTilfeller
    ? faktaOmBeregning.faktaOmBeregningTilfeller.map(({ kode }) => kode) : [];
  let transformed = { faktaOmBeregningTilfeller: [] } as FaktaBeregningTransformedValues;
  if (tilfeller.length > 0) {
    // Besteberegning
    transformed = concatTilfeller(transformed, vurderBesteberegningTransform(faktaOmBeregning)(values, inntektVerdier));
    const allInntektErFastsatt = values[besteberegningField] === true;
    // Nyoppstartet FL
    transformed = concatTilfeller(transformed, NyoppstartetFLForm.transformValues(values, allInntektErFastsatt ? null : inntektVerdier,
      faktaOmBeregning, fastsatteAndelsnr));
    // Etterlønn / sluttpakke
    transformed = concatTilfeller(transformed, VurderEtterlonnSluttpakkeForm.transformValues(values, allInntektErFastsatt ? null : inntektVerdier,
      faktaOmBeregning, fastsatteAndelsnr));
    // Lønnsendring FL
    transformed = concatTilfeller(transformed, LonnsendringForm.transformValues(values, faktaOmBeregning));
    // Mottar ytelse
    transformed = concatTilfeller(transformed, VurderMottarYtelseForm.transformValues(values, allInntektErFastsatt ? null : inntektVerdier,
      faktaOmBeregning, beregningsgrunnlag, fastsatteAndelsnr));
    // ATFL i samme org
    transformed = concatTilfeller(transformed, transformValuesForATFLISammeOrg(allInntektErFastsatt ? null : inntektVerdier,
      faktaOmBeregning, fastsatteAndelsnr));
    // Inntekt for arbeid uten inntektsmelding
    transformed = concatTilfeller(transformed, transformValuesArbeidUtenInntektsmelding(values, allInntektErFastsatt ? null : inntektVerdier,
      faktaOmBeregning, beregningsgrunnlag, fastsatteAndelsnr));
  }
  return transformed;
};

VurderOgFastsettATFL.transformValues = (faktaOmBeregning: FaktaOmBeregning,
  beregningsgrunnlag: Beregningsgrunnlag) => (values: FaktaOmBeregningAksjonspunktValues): BeregningFaktaTransformedValues => {
  const inntektVerdier = InntektFieldArrayImpl.transformValues(values[INNTEKT_FIELD_ARRAY_NAME]);
  const fastsatteAndelsnr = [];
  const transformed = transformValuesForAksjonspunkt(values, inntektVerdier, fastsatteAndelsnr, faktaOmBeregning, beregningsgrunnlag);
  return transformValuesForOverstyring(values, transformed, inntektVerdier, fastsatteAndelsnr);
};

export const skalFastsettInntektForArbeidstaker = createSelector([
  getFormValuesForBeregning,
  getKanRedigereInntekt],
(values, skalFastsette) => {
  const fields = values[INNTEKT_FIELD_ARRAY_NAME];
  if (!fields) {
    return false;
  }
  return fields.filter((field) => field.aktivitetStatus === aktivitetStatus.ARBEIDSTAKER).map(skalFastsette).includes(true);
});

export const skalFastsettInntektForFrilans = createSelector([
  getFormValuesForBeregning,
  getKanRedigereInntekt],
(values, skalFastsette) => {
  const fields = values[INNTEKT_FIELD_ARRAY_NAME];
  if (!fields) {
    return false;
  }
  return fields.filter((field) => field.aktivitetStatus === aktivitetStatus.FRILANSER).map(skalFastsette).includes(true);
});

const getManglerInntektsmelding = createSelector([(ownProps: OwnProps) => ownProps.beregningsgrunnlag],
  (beregningsgrunnlag) => {
    const { faktaOmBeregning } = beregningsgrunnlag;
    if (faktaOmBeregning.arbeidstakerOgFrilanserISammeOrganisasjonListe && faktaOmBeregning.arbeidstakerOgFrilanserISammeOrganisasjonListe.length > 0) {
      return faktaOmBeregning.arbeidstakerOgFrilanserISammeOrganisasjonListe.find((forhold) => !forhold.inntektPrMnd) !== undefined;
    }
    return false;
  });

const getSkalViseTabell = createSelector([
  (state, ownProps) => ownProps.tilfeller],
(tilfeller) => !tilfeller.includes(faktaOmBeregningTilfelle.FASTSETT_BG_KUN_YTELSE));

const mapStateToProps = (state, ownProps) => ({
  // @ts-ignore FIX reselect
  erOverstyrt: erOverstyringAvBeregningsgrunnlag(state, ownProps),
  // @ts-ignore FIX reselect
  skalFastsetteAT: skalFastsettInntektForArbeidstaker(state, ownProps),
  // @ts-ignore FIX reselect
  skalFastsetteFL: skalFastsettInntektForFrilans(state, ownProps),
  skalHaBesteberegning: getFormValuesForBeregning(state)[besteberegningField] === true,
  manglerInntektsmelding: getManglerInntektsmelding(ownProps),
  // @ts-ignore
  skalViseTabell: getSkalViseTabell(state, ownProps),
  harKunstigArbeid: harKunstigArbeidsforhold(ownProps.tilfeller, ownProps.beregningsgrunnlag),
});

export default connect(mapStateToProps)(VurderOgFastsettATFL);

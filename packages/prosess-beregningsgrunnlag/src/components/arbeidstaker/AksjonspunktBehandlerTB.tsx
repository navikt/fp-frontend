import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import { formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Normaltekst, Undertekst } from 'nav-frontend-typografi';

import {
  dateFormat, formatCurrencyNoKr, parseCurrencyInput, removeSpacesFromNumber, required, getKodeverknavnFn,
} from '@fpsak-frontend/utils';
import { InputField } from '@fpsak-frontend/form';
import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import periodeAarsak from '@fpsak-frontend/kodeverk/src/periodeAarsak';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';

import {
  Aksjonspunkt,
  AlleKodeverk,
  ArbeidsgiverOpplysningerPerId,
  BeregningsgrunnlagAndel, BeregningsgrunnlagArbeidsforhold,
  BeregningsgrunnlagPeriodeProp, Kodeverk,
} from '@fpsak-frontend/types';
import createVisningsnavnForAktivitet from '../../util/createVisningsnavnForAktivitet';

import styles from '../fellesPaneler/aksjonspunktBehandler.less';
import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.less';
import {
  TidsbegrenseArbeidsforholdInntektMap,
  TidsbegrenseArbeidsforholdTabellCelle,
  TidsbegrenseArbeidsforholdTabellData,
  TidsbegrenseArbeidsforholdValues,
  TidsbegrensetArbeidsforholdPeriodeTransformedValues,
} from '../../types/ATFLAksjonspunktTsType';

const formPrefix = 'inntektField';

// Disse er nå slått sammen til et AP, men må håndtere begge AP'ene helt til det ene er slettet fra databasen
const {
  FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
  FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
} = aksjonspunktCodes;

const finnAksjonspunktForFastsettBgTidsbegrensetAT = (gjeldendeAksjonspunkter: Aksjonspunkt[]): Aksjonspunkt => gjeldendeAksjonspunkter
  && (gjeldendeAksjonspunkter.find((ap) => ap.definisjon.kode === FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD
  || ap.definisjon.kode === FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS));

const harPeriodeArbeidsforholdAvsluttet = (periode: BeregningsgrunnlagPeriodeProp): boolean => periode.periodeAarsaker !== null
&& periode.periodeAarsaker.map(({ kode }) => kode).includes(periodeAarsak.ARBEIDSFORHOLD_AVSLUTTET);

// Kombinerer perioder mellom avsluttede arbeidsforhold
const finnPerioderMedAvsluttetArbeidsforhold = (allePerioder: BeregningsgrunnlagPeriodeProp[]): BeregningsgrunnlagPeriodeProp[] => {
  const perioderMellomSluttdatoForArbeidsforhold = [];
  let k = 0;
  while (k < allePerioder.length) {
    const nyPeriode = { ...allePerioder[k] };
    k += 1;
    while (k < allePerioder.length && !harPeriodeArbeidsforholdAvsluttet(allePerioder[k])) {
      k += 1;
    }
    nyPeriode.beregningsgrunnlagPeriodeTom = allePerioder[k - 1].beregningsgrunnlagPeriodeTom;
    perioderMellomSluttdatoForArbeidsforhold.push(nyPeriode);
  }
  return perioderMellomSluttdatoForArbeidsforhold;
};

// Nøkkelen til et inputfield konstrueres utifra navnet på andelen og perioden den er i samt en fast prefix
export const createInputFieldKey = (andel: BeregningsgrunnlagAndel, periode: BeregningsgrunnlagPeriodeProp): string => {
  if (!andel.arbeidsforhold) {
    return undefined;
  }
  return `${formPrefix}_${andel.arbeidsforhold.arbeidsforholdId}_${andel.andelsnr}_${periode.beregningsgrunnlagPeriodeFom}`;
};

const findRelevanteArbeidstakerAndeler = (periode: BeregningsgrunnlagPeriodeProp): BeregningsgrunnlagAndel[] => periode.beregningsgrunnlagPrStatusOgAndel
  .filter((andel) => andel.aktivitetStatus.kode === aktivitetStatus.ARBEIDSTAKER)
  .filter((andel) => !andel.erTilkommetAndel);

const createArbeidsforholdMapKey = (arbeidsforhold: BeregningsgrunnlagArbeidsforhold, arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId): string => {
  const arbeidsforholdInformasjon = arbeidsgiverOpplysningerPerId[arbeidsforhold.arbeidsgiverIdent];
  if (!arbeidsforholdInformasjon) {
    return arbeidsforhold.arbeidsforholdType ? arbeidsforhold.arbeidsforholdType.kode : '';
  }
  return `${arbeidsforholdInformasjon.navn}${arbeidsforhold.arbeidsforholdId}`;
};

// Finner beregnetPrAar for alle andeler, basert på data fra den første perioden
const createBeregnetInntektForAlleAndeler = (perioder: BeregningsgrunnlagPeriodeProp[],
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId): TidsbegrenseArbeidsforholdInntektMap => {
  const mapMedInnteker = {};
  const arbeidstakerAndeler = perioder[0].beregningsgrunnlagPrStatusOgAndel.filter((andel) => andel.aktivitetStatus.kode === aktivitetStatus.ARBEIDSTAKER);
  arbeidstakerAndeler.forEach((andel) => {
    mapMedInnteker[createArbeidsforholdMapKey(andel.arbeidsforhold, arbeidsgiverOpplysningerPerId)] = formatCurrencyNoKr(andel.beregnetPrAar);
  });
  return mapMedInnteker;
};

// Dette er objektet hver key i mappen vil ha en liste med
const createMapValueObject = (): TidsbegrenseArbeidsforholdTabellCelle => ({
  erTidsbegrenset: true,
  isEditable: false,
  tabellInnhold: '',
  inputfieldKey: '',
});

const lagVisningsnavnForAktivitet = (arbeidsforhold: BeregningsgrunnlagArbeidsforhold,
  getKodeverknavn: (kodeverk: Kodeverk) => string,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId): string => {
  const arbeidsforholdInfo = arbeidsgiverOpplysningerPerId[arbeidsforhold.arbeidsgiverIdent];
  if (!arbeidsforholdInfo) {
    return arbeidsforhold.arbeidsforholdType ? getKodeverknavn(arbeidsforhold.arbeidsforholdType) : '';
  }
  return createVisningsnavnForAktivitet(arbeidsforholdInfo, arbeidsforhold.eksternArbeidsforholdId);
};

// Initialiserer arbeidsforholdet mappet med data som skal vises uansett hva slags data vi har.
// Dette innebærer at første kolonne i raden skal inneholde andelsnavn og andre kolonne skal inneholde beregnetPrAar.
// Vi antar at alle andeler ligger i alle perioder, henter derfor kun ut andeler fra den første perioden.
const initializeMap = (perioder: BeregningsgrunnlagPeriodeProp[],
  getKodeverknavn: (kodeverk: Kodeverk) => string,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId): TidsbegrenseArbeidsforholdTabellData => {
  const inntektMap = createBeregnetInntektForAlleAndeler(perioder, arbeidsgiverOpplysningerPerId);
  const alleAndeler = findRelevanteArbeidstakerAndeler(perioder[0]);
  const mapMedAndeler = {};
  alleAndeler.forEach((andel) => {
    const andelMapNavn = createArbeidsforholdMapKey(andel.arbeidsforhold, arbeidsgiverOpplysningerPerId);
    const mapValueMedAndelNavn = createMapValueObject();
    mapValueMedAndelNavn.tabellInnhold = lagVisningsnavnForAktivitet(andel.arbeidsforhold, getKodeverknavn, arbeidsgiverOpplysningerPerId);
    mapValueMedAndelNavn.erTidsbegrenset = andel.erTidsbegrensetArbeidsforhold !== undefined ? andel.erTidsbegrensetArbeidsforhold : false;

    const mapValueMedBeregnetForstePeriode = createMapValueObject();
    mapValueMedBeregnetForstePeriode.erTidsbegrenset = false;
    mapValueMedBeregnetForstePeriode.tabellInnhold = inntektMap[andelMapNavn];
    mapMedAndeler[andelMapNavn] = [mapValueMedAndelNavn];
  });
  return mapMedAndeler;
};

export const createTableData = createSelector(
  [(ownProps: OwnProps) => ownProps.allePerioder,
    (ownProps: OwnProps) => ownProps.alleKodeverk,
    (ownProps: OwnProps) => ownProps.arbeidsgiverOpplysningerPerId],
  (allePerioder: BeregningsgrunnlagPeriodeProp[],
    alleKodeverk: AlleKodeverk,
    arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId): TidsbegrenseArbeidsforholdTabellData => {
    // Vi er ikke interessert i perioder som oppstår grunnet naturalytelse
    const relevantePerioder = finnPerioderMedAvsluttetArbeidsforhold(allePerioder);
    const kopiAvPerioder = relevantePerioder.slice(0);
    const arbeidsforholdPeriodeMap = initializeMap(kopiAvPerioder, getKodeverknavnFn(alleKodeverk, kodeverkTyper), arbeidsgiverOpplysningerPerId);
    // Etter å ha initialiser mappet med faste bokser kan vi fjerne første element fra lista, da
    // denne ikke skal være en av de redigerbare feltene i tabellen, og det er disse vi skal lage nå
    kopiAvPerioder.forEach((periode) => {
      const arbeidstakerAndeler = findRelevanteArbeidstakerAndeler(periode);
      arbeidstakerAndeler.forEach((andel) => {
        const mapKey = createArbeidsforholdMapKey(andel.arbeidsforhold, arbeidsgiverOpplysningerPerId);
        const mapValue = arbeidsforholdPeriodeMap[mapKey];
        const newMapValue = createMapValueObject();
        newMapValue.tabellInnhold = andel.overstyrtPrAar !== undefined && andel.overstyrtPrAar !== null ? formatCurrencyNoKr(andel.overstyrtPrAar) : '';
        newMapValue.erTidsbegrenset = false;
        newMapValue.isEditable = true;
        newMapValue.inputfieldKey = createInputFieldKey(andel, periode);
        mapValue.push(newMapValue);
        arbeidsforholdPeriodeMap[mapKey] = mapValue;
      });
    });
    return arbeidsforholdPeriodeMap;
  },
);

const createSummaryTableRow = (listOfBruttoPrPeriode: BruttoPrPeriode[]): ReactElement => (
  <tr id="bruttoPrPeriodeRad" key="bruttoPrPeriodeRad">
    <td key="bruttoTittel" colSpan={2}>
      <Normaltekst>
        <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandlerTB.SumPeriode" />
      </Normaltekst>
    </td>
    {listOfBruttoPrPeriode.map((element) => (
      <td key={element.periode} colSpan={2}>
        <Normaltekst className={beregningStyles.semiBoldText}>{formatCurrencyNoKr(element.brutto)}</Normaltekst>
      </td>
    ))}
  </tr>
);

const createPerioderRow = (relevantePerioder: BruttoPrPeriode[]): ReactElement => (
  <tr key="PeriodeHeaderRad">
    <td />
    {relevantePerioder.map((element) => {
      const fraDato = element.periode.split('_')[0];
      return (
        <td key={`periodeittel${fraDato}`} colSpan={2}>
          <Undertekst>{dateFormat(fraDato)}</Undertekst>
        </td>
      );
    })}
    <td />
  </tr>

);
const createRows = (tableData: TidsbegrenseArbeidsforholdTabellData,
  readOnly: boolean,
  isAksjonspunktClosed: boolean,
  perioder: BruttoPrPeriode[]): ReactElement[] => {
  const rows = [];
  rows.push(createPerioderRow(perioder));
  rows.push(
    <tr key="Tabletop">
      <td key="ombergenetAarBlank" colSpan={2} />
      {perioder.map((element, index) => (
        <React.Fragment key={`PeriodeWrapper${index + 1}`}>
          <td key={`Col_Tittel_${element.periode}`} colSpan={2}>
            <Undertekst>
              <FormattedMessage
                id="Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandler.OmberegnetAar"
                key={`Tittel_${element.periode}`}
              />
            </Undertekst>
          </td>

        </React.Fragment>
      ))}
    </tr>,
  );

  Object.keys(tableData).forEach((val) => {
    const list = tableData[val];
    rows.push(
      <tr key={val}>
        {list.map((element) => {
          if (!element.isEditable) {
            return (
              <td key={element.tabellInnhold} colSpan={2}>
                <Normaltekst>
                  {element.tabellInnhold}
                </Normaltekst>
              </td>
            );
          }
          return (
            <React.Fragment key={`key${element.inputfieldKey}`}>
              <td key={`Col-${element.inputfieldKey}`} colSpan={2}>
                <div className={(isAksjonspunktClosed && readOnly) ? styles.adjustedField : undefined}>
                  <InputField
                    name={element.inputfieldKey}
                    validate={[required]}
                    readOnly={readOnly}
                    parse={parseCurrencyInput}
                    bredde="XS"
                  />
                </div>
              </td>
            </React.Fragment>
          );
        })}
      </tr>,
    );
  });

  rows.push(<tr key="sdeparator" className={styles.rowSpacer}><td /></tr>);
  rows.push(createSummaryTableRow(perioder));

  return rows;
};

interface StaticFunctions {
  buildInitialValues: (allePerioder: BeregningsgrunnlagPeriodeProp[]) => TidsbegrenseArbeidsforholdValues;
  transformValues: (values: TidsbegrenseArbeidsforholdValues,
                     perioder: BeregningsgrunnlagPeriodeProp[]) => TidsbegrensetArbeidsforholdPeriodeTransformedValues[];
}

type BruttoPrPeriode = {
  brutto: number;
  periode: string;
}

type OwnProps = {
    readOnly: boolean;
    arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
    formName: string;
    aksjonspunkter: Aksjonspunkt[];
    allePerioder: BeregningsgrunnlagPeriodeProp[];
    alleKodeverk: AlleKodeverk;
};

type MappedOwnProps = {
  tableData: TidsbegrenseArbeidsforholdTabellData;
  isAksjonspunktClosed: boolean;
  bruttoPrPeriodeList: BruttoPrPeriode[],
}

export const AksjonspunktBehandlerTidsbegrensetImpl: FunctionComponent<OwnProps & MappedOwnProps> & StaticFunctions = ({
  readOnly, tableData, isAksjonspunktClosed, bruttoPrPeriodeList,
}) => {
  const perioder = bruttoPrPeriodeList.slice(1);
  return (
    <table className={styles.inntektTableTB}>
      <tbody>
        {createRows(tableData, readOnly, isAksjonspunktClosed, perioder)}
      </tbody>
    </table>
  );
};

AksjonspunktBehandlerTidsbegrensetImpl.defaultProps = {
  isAksjonspunktClosed: false,
  bruttoPrPeriodeList: undefined,
};

export const getIsAksjonspunktClosed = createSelector(
  [(ownProps: OwnProps) => ownProps.aksjonspunkter],
  (gjeldendeAksjonspunkter: Aksjonspunkt[]): boolean => {
    const aksjonspunkt = finnAksjonspunktForFastsettBgTidsbegrensetAT(gjeldendeAksjonspunkter);
    return aksjonspunkt ? !isAksjonspunktOpen(aksjonspunkt.status.kode) : false;
  },
);

const mapStateToProps = (state: any, ownProps: OwnProps): MappedOwnProps => {
  const { allePerioder, formName } = ownProps;
  const bruttoPrPeriodeList = [];
  const relevantePerioder = finnPerioderMedAvsluttetArbeidsforhold(allePerioder);
  const forstePeriodeATInntekt = relevantePerioder[0].beregningsgrunnlagPrStatusOgAndel
    .filter((andel) => andel.aktivitetStatus.kode === aktivitetStatus.ARBEIDSTAKER).map((andel) => andel.beregnetPrAar);
  const forstePeriodeInntekt = forstePeriodeATInntekt.reduce((a, b) => a + b);
  bruttoPrPeriodeList.push({
    brutto: forstePeriodeInntekt,
    periode:
      `beregnetInntekt_${relevantePerioder[0].beregningsgrunnlagPeriodeFom}_${relevantePerioder[0].beregningsgrunnlagPeriodeTom}`,
  });
  relevantePerioder.forEach((periode) => {
    const arbeidstakerAndeler = periode.beregningsgrunnlagPrStatusOgAndel
      .filter((andel) => andel.aktivitetStatus.kode === aktivitetStatus.ARBEIDSTAKER);
    const bruttoPrAndelForPeriode = arbeidstakerAndeler.map((andel) => {
      const inputFieldKey = createInputFieldKey(andel, periode);
      const fastsattInntekt = formValueSelector(formName)(state, inputFieldKey);
      return (fastsattInntekt === undefined || fastsattInntekt === '') ? 0 : removeSpacesFromNumber(fastsattInntekt);
    });
    const samletBruttoForPeriode = bruttoPrAndelForPeriode.reduce((a, b) => a + b);
    bruttoPrPeriodeList.push({
      brutto: samletBruttoForPeriode,
      periode: `${periode.beregningsgrunnlagPeriodeFom}_${periode.beregningsgrunnlagPeriodeTom}`,
    });
  });
  return {
    tableData: createTableData(ownProps),
    isAksjonspunktClosed: getIsAksjonspunktClosed(ownProps),
    bruttoPrPeriodeList,
  };
};

AksjonspunktBehandlerTidsbegrensetImpl.buildInitialValues = (allePerioder: BeregningsgrunnlagPeriodeProp[]): TidsbegrenseArbeidsforholdValues => {
  const initialValues = {};
  const relevantePerioder = finnPerioderMedAvsluttetArbeidsforhold(allePerioder);
  relevantePerioder.forEach((periode) => {
    const arbeidstakerAndeler = periode.beregningsgrunnlagPrStatusOgAndel
      .filter((andel) => andel.aktivitetStatus.kode === aktivitetStatus.ARBEIDSTAKER);
    arbeidstakerAndeler.forEach((andel) => {
      initialValues[createInputFieldKey(andel, periode)] = andel.overstyrtPrAar !== undefined ? formatCurrencyNoKr(andel.overstyrtPrAar) : '';
    });
  });
  return initialValues;
};

AksjonspunktBehandlerTidsbegrensetImpl.transformValues = (values: TidsbegrenseArbeidsforholdValues,
  perioder: BeregningsgrunnlagPeriodeProp[]): TidsbegrensetArbeidsforholdPeriodeTransformedValues[] => {
  const fastsattePerioder = [];
  const relevantePerioder = finnPerioderMedAvsluttetArbeidsforhold(perioder);
  relevantePerioder.forEach((periode) => {
    const arbeidstakerAndeler = findRelevanteArbeidstakerAndeler(periode);
    const fastsatteTidsbegrensedeAndeler = [];
    arbeidstakerAndeler.forEach((andel) => {
      const overstyrtInntekt = removeSpacesFromNumber(values[createInputFieldKey(andel, periode)]);
      fastsatteTidsbegrensedeAndeler.push({
        andelsnr: andel.andelsnr,
        bruttoFastsattInntekt: overstyrtInntekt,
      });
    });
    fastsattePerioder.push({
      periodeFom: periode.beregningsgrunnlagPeriodeFom,
      periodeTom: periode.beregningsgrunnlagPeriodeTom,
      fastsatteTidsbegrensedeAndeler,
    });
  });
  return fastsattePerioder;
};

const AksjonspunktBehandlerTidsbegrenset = connect(mapStateToProps)(AksjonspunktBehandlerTidsbegrensetImpl);

export default AksjonspunktBehandlerTidsbegrenset;

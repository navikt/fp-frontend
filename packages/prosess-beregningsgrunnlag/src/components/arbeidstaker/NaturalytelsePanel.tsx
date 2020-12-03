import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Element, Normaltekst, Undertekst } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';

import { dateFormat, formatCurrencyNoKr } from '@fpsak-frontend/utils';
import periodeAarsak from '@fpsak-frontend/kodeverk/src/periodeAarsak';
import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import {
  ArbeidsgiverOpplysningerPerId, BeregningsgrunnlagAndel,
  BeregningsgrunnlagArbeidsforhold,
  BeregningsgrunnlagPeriodeProp,
} from '@fpsak-frontend/types';
import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.less';
import LinkTilEksterntSystem from '../redesign/LinkTilEksterntSystem';
import AvsnittSkiller from '../redesign/AvsnittSkiller';

const createArbeidsforholdKey = (arbeidsforhold: BeregningsgrunnlagArbeidsforhold, arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId): string => {
  const arbeidsforholdInformasjon = arbeidsgiverOpplysningerPerId[arbeidsforhold.arbeidsgiverId];
  if (arbeidsforholdInformasjon.erPrivatPerson) {
    return `${arbeidsforholdInformasjon.navn}${arbeidsforholdInformasjon.fødselsdato}`;
  }
  return `${arbeidsforholdInformasjon.navn}${arbeidsforholdInformasjon.identifikator}`;
};

const findArbeidsforholdMedFrafaltYtelse = (periode: BeregningsgrunnlagPeriodeProp): BeregningsgrunnlagAndel[] => periode.beregningsgrunnlagPrStatusOgAndel
  .filter((andel) => andel.bortfaltNaturalytelse !== undefined
    && andel.bortfaltNaturalytelse !== null
    && andel.bortfaltNaturalytelse !== 0);

const createPeriodeTekst = (periode: BeregningsgrunnlagPeriodeProp): string => {
  if (!periode) return '';
  if (periode.beregningsgrunnlagPeriodeFom && periode.beregningsgrunnlagPeriodeTom) {
    return `${dateFormat(periode.beregningsgrunnlagPeriodeFom)} - ${dateFormat(periode.beregningsgrunnlagPeriodeTom)}`;
  }
  return dateFormat(periode.beregningsgrunnlagPeriodeFom);
};

const createOrEditMapValue = (andel, mapValue, periodeTekst, arbeidsgiverOpplysningerPerId) => {
  let newMapValue;
  const arbeidsforholdInformasjon = arbeidsgiverOpplysningerPerId[andel.arbeidsforhold.arbeidsgiverId];
  const agNavn = arbeidsforholdInformasjon.navn;

  if (mapValue === undefined) {
    newMapValue = [agNavn];
  } else {
    newMapValue = mapValue.slice();
  }
  const maaned = andel.bortfaltNaturalytelse ? andel.bortfaltNaturalytelse / 12 : 0;
  newMapValue.push({ periodeTekst, aar: andel.bortfaltNaturalytelse, maaned });
  return newMapValue;
};

// Denne metoden lager data til naturalytelsetabellen. Returnerer et map der key er arbeidsgiver + orgNr
// med periodetekst og aar=bortfaltNaturalytelse og maaned=bortfaltNaturalytelse/12
// Eksempel på hvordan et map returnert av denne metoden kan se ut:
// arbeidsgivermap = {
//  arbeidsgiver1123: ['arbeidsgiver1', { periodeTekst: '01.09.2018 - 01.12.2018', aar: 1231, maaned: 103 }],
//  arbeidsgiver2456: ['arbeidsgiver2', { periodeTekst: '01.07.2018', aar: 2231, maaned: 186 }],
//  arbeidsgiver3789: ['arbeidsgiver3', { periodeTekst: '01.07.2018', aar: 3231, maaned: 269 }],
// }

const findAllePerioderMedBortfaltNaturalytelse = (allePerioder: BeregningsgrunnlagPeriodeProp[]): BeregningsgrunnlagPeriodeProp[] => allePerioder
  .filter((periode) => periode.periodeAarsaker.map(({ kode }) => kode).includes(periodeAarsak.NATURALYTELSE_BORTFALT));

const harBortfalteNaturalytelser = (allePerioder: BeregningsgrunnlagPeriodeProp[]): boolean => {
  if (!allePerioder || allePerioder.length < 1) {
    return false;
  }
  const naturalYtelseAndel = allePerioder.filter((perioder) => perioder.beregningsgrunnlagPrStatusOgAndel
    .some((andel) => andel.bortfaltNaturalytelse !== undefined
    && andel.bortfaltNaturalytelse !== null
    && andel.bortfaltNaturalytelse !== 0));
  return !(!naturalYtelseAndel || naturalYtelseAndel.length < 1);
};
export const createNaturalytelseTableData = (allePerioder: BeregningsgrunnlagPeriodeProp[], arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId) => {
  if (!allePerioder || allePerioder.length < 1) {
    return undefined;
  }
  let relevantePerioder = findAllePerioderMedBortfaltNaturalytelse(allePerioder);

  if (!harBortfalteNaturalytelser(allePerioder)) {
    return undefined;
  }
  if (!relevantePerioder || relevantePerioder.length < 1) {
    relevantePerioder = allePerioder;
  }
  const tempMap = {};
  relevantePerioder.forEach((periode) => {
    const andelerMedFrafaltYtelse = findArbeidsforholdMedFrafaltYtelse(periode);
    andelerMedFrafaltYtelse.forEach((andel) => {
      const mapKey = createArbeidsforholdKey(andel.arbeidsforhold, arbeidsgiverOpplysningerPerId);
      const mapValue = tempMap[mapKey];
      const periodeText = createPeriodeTekst(periode);
      tempMap[mapKey] = createOrEditMapValue(andel, mapValue, periodeText, arbeidsgiverOpplysningerPerId);
    });
  });
  const arbeidsforholdPeriodeMap = tempMap;
  return {
    arbeidsforholdPeriodeMap,
  };
};

const createNaturalYtelseRows = (tableData) => {
  const { arbeidsforholdPeriodeMap } = tableData;
  const rows = [];
  Object.keys(arbeidsforholdPeriodeMap).sort().forEach((val) => {
    const list = arbeidsforholdPeriodeMap[val];
    let valueKey = 0;
    const userIdent = null; // TODO denne må hentes fra brukerID enten fra brukerObjectet eller på beregningsgrunnlag må avklares
    const row = list.map((element) => {
      valueKey += 1;
      if (valueKey === 1) {
        return (
          <Row key={`naturalytelse_firma_rad_${val}_{valueKey}`}>
            <Column xs="11" className={beregningStyles.noPaddingRight} key={`naturalytelse_firma_col_${val}_{valueKey}`}>
              <Element>{element}</Element>
            </Column>
            <Column xs="1" className={beregningStyles.colLink} key={`naturalytelse_link_${valueKey}`}>
              {userIdent && (
              <LinkTilEksterntSystem linkText="IM" userIdent={userIdent} type="IM" />
              )}
            </Column>
          </Row>
        );
      }
      return (
        <Row key={`naturalytelse_periode_rad_${valueKey}`}>
          <Column xs="7" key={`naturalytelse_vperiode_${valueKey}`}>
            <Normaltekst>{element && element.periodeTekst && element.periodeTekst}</Normaltekst>
          </Column>
          <Column xs="2" className={beregningStyles.colMaanedText}>
            <Normaltekst>{element && element.maaned && formatCurrencyNoKr(element.maaned)}</Normaltekst>
          </Column>
          <Column xs="2" className={beregningStyles.colAarText}>
            <Element>{element && element.aar && formatCurrencyNoKr(element.aar)}</Element>
          </Column>
        </Row>
      );
    });
    rows.push(row);
  });
  return rows;
};

type OwnProps = {
    allePerioder: BeregningsgrunnlagPeriodeProp[];
    arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
};

/**
 * NaturalytelsePanel
 *
 * Presentasjonskomponent. Viser en tabell med oversikt over hvilke arbeidsgivere som har hatt bortfall
 * av naturalytelse og for hvilke perioder det gjelder.
 */
const NaturalytelsePanel: FunctionComponent<OwnProps> = ({ allePerioder, arbeidsgiverOpplysningerPerId }) => {
  const tableData = createNaturalytelseTableData(allePerioder, arbeidsgiverOpplysningerPerId);
  if (!tableData) {
    return null;
  }
  return (
    <>
      <AvsnittSkiller luftOver luftUnder />
      <Element className={beregningStyles.avsnittOverskrift}>
        <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Naturalytelse2" />
      </Element>
      <VerticalSpacer eightPx />
      <Row>
        <Column xs="7" key="ATempthy1" />
        <Column xs="2" className={beregningStyles.colMaanedText}>
          <Undertekst>
            <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned" />
          </Undertekst>
        </Column>
        <Column xs="2" className={beregningStyles.colAarText}>
          <Undertekst>
            <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar" />
          </Undertekst>
        </Column>
        <Column className={beregningStyles.colLink} />
      </Row>
      {createNaturalYtelseRows(tableData)}
    </>
  );
};

export default NaturalytelsePanel;

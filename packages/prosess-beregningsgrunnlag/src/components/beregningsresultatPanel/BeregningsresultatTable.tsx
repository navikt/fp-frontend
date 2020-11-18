import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';

import { connect } from 'react-redux';
import moment from 'moment';
import { createSelector } from 'reselect';
import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';

import { DDMMYYYY_DATE_FORMAT, formatCurrencyNoKr, removeSpacesFromNumber } from '@fpsak-frontend/utils';
import periodeAarsak from '@fpsak-frontend/kodeverk/src/periodeAarsak';
import dekningsgradKode from '@fpsak-frontend/kodeverk/src/dekningsgrad';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import { Vilkar } from '@fpsak-frontend/types';
import { andelErIkkeTilkommetEllerLagtTilAvSBH } from '../arbeidstaker/GrunnlagForAarsinntektPanelAT';
import BeregningsresutatPanel from './BeregningsResultatPanel';

const VIRKEDAGER_PR_AAR = 260;

const periodeHarAarsakSomTilsierVisning = (aarsaker) => {
  if (aarsaker.length < 1) {
    return true;
  }
  const aarsakerSomTilsierMuligEndringIDagsats = [periodeAarsak.NATURALYTELSE_BORTFALT,
    periodeAarsak.ARBEIDSFORHOLD_AVSLUTTET, periodeAarsak.NATURALYTELSE_TILKOMMER];
  return aarsaker.filter((aarsak) => aarsakerSomTilsierMuligEndringIDagsats.indexOf(aarsak.kode) !== -1).length > 0;
};
const setTekstStrengKeyPavilkaarUtfallType = (vilkarStatus, skalFastsetteGrunnlag) => {
  if (!vilkarStatus || !vilkarStatus.kode) return 'Fastsatt';
  if (vilkarStatus.kode === vilkarUtfallType.OPPFYLT && !skalFastsetteGrunnlag) {
    return 'Omberegnet';
  }
  if (vilkarStatus.kode === vilkarUtfallType.IKKE_OPPFYLT) {
    return 'Omberegnet';
  }
  return 'Fastsatt';
};

const erVilkaarOppfyltForEnAvAndelene = (vilkarStatus, andeler) => {
  if (!vilkarStatus || !vilkarStatus.kode) return false;
  if (vilkarStatus.kode === vilkarUtfallType.IKKE_OPPFYLT) {
    return false;
  }
  if (vilkarStatus.kode === vilkarUtfallType.IKKE_VURDERT) {
    return false;
  }
  if (vilkarStatus.kode === vilkarUtfallType.OPPFYLT) {
    const harOverstyrt = andeler.find((andel) => (andel.overstyrtPrAar !== true));
    if (harOverstyrt) {
      return true;
    }
  }
  return false;
};
const hentAndelFraPeriode = (periode, andelType) => {
  if (andelType === aktivitetStatus.ARBEIDSTAKER) {
    return periode.beregningsgrunnlagPrStatusOgAndel
      .filter((andel) => andel.aktivitetStatus.kode === aktivitetStatus.ARBEIDSTAKER)
      .filter((andel) => andelErIkkeTilkommetEllerLagtTilAvSBH(andel));
  }
  return periode.beregningsgrunnlagPrStatusOgAndel.find((andel) => andel.aktivitetStatus.kode === andelType);
};
const lagPeriodeHeader = (fom, tom) => (
  <FormattedMessage
    id="Beregningsgrunnlag.BeregningTable.Periode"
    key={`fom-tom${fom}${tom}`}
    values={{ fom: moment(fom).format(DDMMYYYY_DATE_FORMAT), tom: tom ? moment(tom).format(DDMMYYYY_DATE_FORMAT) : '' }}
  />
);
const summertVerdiFraListeProp = (andeler, propNavn) => {
  if (!andeler || andeler.length < 1) {
    return -1;
  }
  let sum = 0;
  andeler.forEach((andel) => {
    sum += andel[propNavn] ? andel[propNavn] : 0;
  });
  return sum;
};
const opprettAndelElement = (periode, andelType, vilkarStatus) => {
  let inntekt;
  const andelElement = {
    ledetekst: {},
    erOverstyrt: false,
    pgiSnitt: null,
    skalFastsetteGrunnlag: false,
    verdi: null,
  };
  andelElement.ledetekst = 'Beregningsgrunnlag -';
  let skalFastsetteGrunnlag = false;
  const andel = hentAndelFraPeriode(periode, andelType);
  if (!andel || andel.length < 1) {
    return null;
  }
  switch (andelType) {
    case aktivitetStatus.ARBEIDSTAKER:
      skalFastsetteGrunnlag = andel.some((atAndel) => atAndel.skalFastsetteGrunnlag === true);
      if (skalFastsetteGrunnlag && vilkarStatus.kode !== vilkarUtfallType.IKKE_VURDERT) { // denne testen kan brukes på alle
        const erOverstyrt = andel.some((atAndel) => (atAndel.overstyrtPrAar !== undefined && atAndel.overstyrtPrAar !== null));
        if (erOverstyrt) {
          inntekt = summertVerdiFraListeProp(andel, 'overstyrtPrAar');
          andelElement.erOverstyrt = true;
        } else {
          inntekt = summertVerdiFraListeProp(andel, 'beregnetPrAar');
        }
      } else if (skalFastsetteGrunnlag && vilkarStatus.kode === vilkarUtfallType.IKKE_VURDERT) {
        inntekt = 'fastsett';
      } else {
        inntekt = summertVerdiFraListeProp(andel, 'bruttoPrAar');
      }
      break;
    case aktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE:
      skalFastsetteGrunnlag = andel.skalFastsetteGrunnlag;
      if (skalFastsetteGrunnlag && vilkarStatus.kode !== vilkarUtfallType.IKKE_VURDERT) {
        if (andel.overstyrtPrAar || andel.overstyrtPrAar === 0) {
          inntekt = andel.overstyrtPrAar;
          andelElement.erOverstyrt = true;
        } else {
          inntekt = andel.beregnetPrAar;
        }
      } else if (skalFastsetteGrunnlag && vilkarStatus.kode === vilkarUtfallType.IKKE_VURDERT) {
        inntekt = 'fastsett';
      } else {
        inntekt = andel && (andel.bruttoPrAar || andel.bruttoPrAar === 0) ? andel.bruttoPrAar : undefined;
      }
      // brukes for å sammeligne mot pensjonsgivende inntekt senere
      andelElement.pgiSnitt = andel && (andel.pgiSnitt || andel.pgiSnitt === 0) ? andel.pgiSnitt : undefined;
      break;
    default:
      if (skalFastsetteGrunnlag && vilkarStatus.kode !== vilkarUtfallType.IKKE_VURDERT) {
        if (andel.overstyrtPrAar || andel.overstyrtPrAar === 0) {
          inntekt = andel.overstyrtPrAar;
          andelElement.erOverstyrt = true;
        } else {
          inntekt = andel.beregnetPrAar;
        }
      } else if (skalFastsetteGrunnlag && vilkarStatus.kode === vilkarUtfallType.IKKE_VURDERT) {
        inntekt = 'fastsett';
      } else {
        inntekt = andel && (andel.bruttoPrAar || andel.bruttoPrAar === 0) ? andel.bruttoPrAar : undefined;
      }
      skalFastsetteGrunnlag = andel.skalFastsetteGrunnlag;
  }
  andelElement.skalFastsetteGrunnlag = skalFastsetteGrunnlag;
  if ((inntekt || inntekt === 0) && inntekt !== -1) {
    andelElement.verdi = inntekt;
  }
  const strKey = setTekstStrengKeyPavilkaarUtfallType(vilkarStatus, skalFastsetteGrunnlag);
  andelElement.ledetekst = <FormattedMessage id={`Beregningsgrunnlag.BeregningTable.${strKey}.${andelType}`} />;
  return andelElement;
};
const hentVerdiFraAndel = (andel) => {
  if (!andel || !andel.verdi) {
    return 0;
  }
  return andel.verdi;
};

const hentPGIFraSNAndel = (andel) => {
  if (!andel || !andel.pgiSnitt) {
    return 0;
  }
  return andel.pgiSnitt;
};
const settVisningsRaderForATSN = (periode, rowsAndeler, rowsForklaringer, vilkarStatus) => {
  const atElement = opprettAndelElement(
    periode,
    aktivitetStatus.ARBEIDSTAKER,
    vilkarStatus,
  );
  const snElement = opprettAndelElement(
    periode,
    aktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
    vilkarStatus,
  );
  // legger til regler for særtilfeller
  const erOppfylt = erVilkaarOppfyltForEnAvAndelene(vilkarStatus, [atElement, snElement]);
  if ((hentVerdiFraAndel(atElement) < hentPGIFraSNAndel(snElement)) && !erOppfylt) {
    snElement.verdi = snElement.pgiSnitt;
    rowsAndeler.push(snElement);
    return;
  }
  if (hentVerdiFraAndel(atElement) > hentPGIFraSNAndel(snElement)) {
    rowsForklaringer.push(<FormattedMessage
      id="Beregningsgrunnlag.BeregningTable.Omberegnet.ForklaringAToverstigerSN"
    />);
    if (!erOppfylt) {
      atElement.ledetekst = <FormattedMessage id="Beregningsgrunnlag.BeregningTable.Omberegnet.AT" />;
    }
    rowsAndeler.push(atElement);
    return;
  }
  rowsAndeler.push(atElement);
  rowsAndeler.push(snElement);
};
const settVisningsRaderForATFLSN = (periode, rowsAndeler, rowsForklaringer, vilkarStatus) => {
  const atElement = opprettAndelElement(
    periode,
    aktivitetStatus.ARBEIDSTAKER,
    vilkarStatus,
  );
  const snElement = opprettAndelElement(
    periode,
    aktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
    vilkarStatus,
  );
  const flElement = opprettAndelElement(
    periode,
    aktivitetStatus.FRILANSER,
    vilkarStatus,
  );
  const erOppfylt = erVilkaarOppfyltForEnAvAndelene(vilkarStatus, [atElement, flElement, snElement]);
  if ((hentVerdiFraAndel(atElement) + hentVerdiFraAndel(flElement)) > hentVerdiFraAndel(snElement)) {
    rowsForklaringer.push(<FormattedMessage id="Beregningsgrunnlag.BeregningTable.Omberegnet.ForklaringAT_FLoverstigerSN" />);
    rowsAndeler.push(atElement);
    rowsAndeler.push(flElement);
  } else {
    // setter SN ledetekst til Pensjonsgibevnde årsintekt
    if (erOppfylt) {
      // setter SN ledetekst til Fastsatt årsintekt
      snElement.ledetekst = <FormattedMessage id="Beregningsgrunnlag.BeregningTable.Fastsatt.SN" />;
    } else {
      snElement.ledetekst = <FormattedMessage id="Beregningsgrunnlag.BeregningTable.Omberegnet.SN" />;
    }
    rowsAndeler.push(atElement);
    rowsAndeler.push(flElement);
    rowsAndeler.push(snElement);
  }
};
const settVisningsRaderForDPFLSN = (periode, rowsAndeler, rowsForklaringer, vilkarStatus) => {
  const snElement = opprettAndelElement(
    periode,
    aktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
    vilkarStatus,
  );
  const flElement = opprettAndelElement(
    periode,
    aktivitetStatus.FRILANSER,
    vilkarStatus,
  );
  const dpElement = opprettAndelElement(
    periode,
    aktivitetStatus.DAGPENGER,
    vilkarStatus,
  );
  if ((hentVerdiFraAndel(dpElement) + hentVerdiFraAndel(flElement)) > hentVerdiFraAndel(snElement)) {
    rowsForklaringer.push(<FormattedMessage id="Beregningsgrunnlag.BeregningTable.Omberegnet.ForklaringDP_FLoverstigerSN" />);
    rowsAndeler.push(flElement);
    rowsAndeler.push(dpElement);
  } else {
    rowsAndeler.push(flElement);
    rowsAndeler.push(dpElement);
    rowsAndeler.push(snElement);
  }
};
const settVisningsRaderForATDPSN = (periode, rowsAndeler, rowsForklaringer, vilkarStatus) => {
  const atElement = opprettAndelElement(
    periode,
    aktivitetStatus.ARBEIDSTAKER,
    vilkarStatus,
  );
  const snElement = opprettAndelElement(
    periode,
    aktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
    vilkarStatus,
  );
  const dpElement = opprettAndelElement(
    periode,
    aktivitetStatus.DAGPENGER,
    vilkarStatus,
  );

  if ((hentVerdiFraAndel(dpElement) + hentVerdiFraAndel(atElement)) > hentVerdiFraAndel(snElement)) {
    rowsForklaringer.push(<FormattedMessage id="Beregningsgrunnlag.BeregningTable.Omberegnet.ForklaringAT_DPoverstigerSN" />);
    rowsAndeler.push(atElement);
    rowsAndeler.push(dpElement);
  } else {
    rowsAndeler.push(atElement);
    rowsAndeler.push(dpElement);
    rowsAndeler.push(snElement);
  }
};
const settVisningsRaderForDefault = (periode, rows, rowsAndeler, rowsForklaringer, vilkarStatus, harBortfallNaturalYtelse) => {
  const atElement = opprettAndelElement(
    periode,
    aktivitetStatus.ARBEIDSTAKER,
    vilkarStatus,
  );
  const flElement = opprettAndelElement(
    periode,
    aktivitetStatus.FRILANSER,
    vilkarStatus,
  );
  const snElement = opprettAndelElement(
    periode,
    aktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
    vilkarStatus,
  );
  const aapElement = opprettAndelElement(
    periode,
    aktivitetStatus.ARBEIDSAVKLARINGSPENGER,
    vilkarStatus,
  );
  const dpElement = opprettAndelElement(
    periode,
    aktivitetStatus.DAGPENGER,
    vilkarStatus,
  );
  const baElement = opprettAndelElement(
    periode,
    aktivitetStatus.BRUKERS_ANDEL,
    vilkarStatus,
  );
  const msElement = opprettAndelElement(
    periode,
    aktivitetStatus.MILITAER_ELLER_SIVIL,
    vilkarStatus,
  );
  const kyElement = opprettAndelElement(
    periode,
    aktivitetStatus.KUN_YTELSE,
    vilkarStatus,
  );

  if (baElement && baElement.verdi !== undefined) { rowsAndeler.push(baElement); }
  if (atElement && atElement.verdi !== undefined) { rowsAndeler.push({ ...atElement }); }
  if (flElement && flElement.verdi !== undefined) { rowsAndeler.push(flElement); }
  if (snElement && snElement.verdi !== undefined) { rowsAndeler.push(snElement); }
  if (aapElement && aapElement.verdi !== undefined) { rowsAndeler.push(aapElement); }
  if (dpElement && dpElement.verdi !== undefined) { rowsAndeler.push(dpElement); }
  if (msElement && msElement.verdi !== undefined) { rowsAndeler.push(msElement); }
  if (kyElement && kyElement.verdi !== undefined) { rowsAndeler.push(kyElement); }

  if (harBortfallNaturalYtelse) {
    const ntElement = {
      verdi: null,
      skalFastsetteGrunnlag: null,
      ledetekst: {},
    };
    const atAndel = periode.beregningsgrunnlagPrStatusOgAndel.filter(
      (andel) => andel.aktivitetStatus.kode === aktivitetStatus.ARBEIDSTAKER && andel.bortfaltNaturalytelse,
    );
    ntElement.verdi = atAndel && atAndel.length > 0 ? atAndel.reduce((sum, andel) => sum + andel.bortfaltNaturalytelse, 0) : undefined;
    ntElement.skalFastsetteGrunnlag = false;
    ntElement.ledetekst = <FormattedMessage id="Beregningsgrunnlag.BeregningTable.Naturalytelser" />;
    rowsAndeler.push(ntElement);
  }
};
const finnDagsatsGrunnlag = (bruttoRad, avkortetRad, redusertRad) => {
  if (redusertRad.verdi && redusertRad.display !== false) return redusertRad.verdi;
  if (avkortetRad.verdi && avkortetRad.display !== false) return avkortetRad.verdi;
  if (bruttoRad.verdi && bruttoRad.display !== false) return bruttoRad.verdi;
  return null;
};
const harSVPGrunnlag = (ytelseGrunnlag) => ytelseGrunnlag && ytelseGrunnlag.ytelsetype === fagsakYtelseType.SVANGERSKAPSPENGER;
const finnDagsats = (periode, ytelseGrunnlag) => {
  if (harSVPGrunnlag(ytelseGrunnlag) && periode.avkortetPrAar) {
    return Math.round(periode.avkortetPrAar / VIRKEDAGER_PR_AAR);
  }
  return periode.dagsats;
};
const sjekkHarBortfaltNaturalYtelse = (periode) => {
  if (!periode) {
    return false;
  }
  return periode.beregningsgrunnlagPrStatusOgAndel.some((andel) => andel.bortfaltNaturalytelse !== undefined
      && andel.bortfaltNaturalytelse !== null
      && andel.bortfaltNaturalytelse !== 0);
};

export const createBeregningTableData = createSelector(
  [(state, ownProps) => ownProps.beregningsgrunnlagPerioder,
    (state, ownProps) => ownProps.aktivitetStatusList,
    (state, ownProps) => ownProps.dekningsgrad,
    (state, ownProps) => ownProps.grunnbelop,
    (state, ownProps) => ownProps.vilkaarBG.vilkarStatus,
    (state, ownProps) => ownProps.ytelseGrunnlag],
  (allePerioder, aktivitetStatusList, dekningsgrad, grunnbelop, vilkarStatus, ytelseGrunnlag) => {
    const perioderSomSkalVises = allePerioder.filter((periode) => periodeHarAarsakSomTilsierVisning(periode.periodeAarsaker));
    if (perioderSomSkalVises.length < 1) {
      // Alle perioder har periodeårsak som egentlig ikke trengs vises, velger første periode som den eneste som blir vist.
      perioderSomSkalVises.push(allePerioder[0]);
    }
    const periodeResultatTabeller = [];
    const seksG = grunnbelop * 6;
    perioderSomSkalVises.forEach((periode) => {
      const headers = [];
      const bruttoRad = {
        ledetekst: <FormattedMessage id="Beregningsgrunnlag.BeregningTable.BruttoTotalt" />,
        verdi: null,
        display: null,
        grunnlag: null,
      };
      const avkortetRad = {
        ledetekst: <FormattedMessage id="Beregningsgrunnlag.BeregningTable.Avkortet6g" />,
        verdi: null,
        display: null,
      };
      const redusertRad = {
        ledetekst: <FormattedMessage id="Beregningsgrunnlag.BeregningTable.RedusertProsent" values={{ redusert: dekningsgrad }} />,
        verdi: null,
        display: null,
      };
      const dagsatserRad = {
        verdi: null,
        grunnlag: null,
      };
      const harBortfallNaturalYtelse = sjekkHarBortfaltNaturalYtelse(periode);
      headers.push(lagPeriodeHeader(periode.beregningsgrunnlagPeriodeFom, periode.beregningsgrunnlagPeriodeTom));
      bruttoRad.verdi = formatCurrencyNoKr(periode.bruttoInkludertBortfaltNaturalytelsePrAar);
      avkortetRad.verdi = formatCurrencyNoKr(periode.avkortetPrAar);
      if (dekningsgrad !== dekningsgradKode.HUNDRE) {
        redusertRad.verdi = formatCurrencyNoKr(periode.redusertPrAar);
      }
      dagsatserRad.verdi = formatCurrencyNoKr(finnDagsats(periode, ytelseGrunnlag));
      const rows = [];
      const rowsAndeler = [];
      const rowsForklaringer = [];
      const sortedStatusList = aktivitetStatusList.sort((a, b) => ((a.kode > b.kode) ? 1 : -1)); // sorter alfabetisk
      const aktivitetStatusKodeKombo = sortedStatusList.map((andelKode) => andelKode.kode).join('_');
      switch (aktivitetStatusKodeKombo) {
        case 'AT_SN': {
          settVisningsRaderForATSN(periode, rowsAndeler, rowsForklaringer, vilkarStatus);
          break;
        }
        case 'AT_FL_SN': {
          settVisningsRaderForATFLSN(periode, rowsAndeler, rowsForklaringer, vilkarStatus);
          break;
        }
        case 'DP_FL_SN': {
          settVisningsRaderForDPFLSN(periode, rowsAndeler, rowsForklaringer, vilkarStatus);
          break;
        }
        case 'AT_DP_SN': {
          settVisningsRaderForATDPSN(periode, rowsAndeler, rowsForklaringer, vilkarStatus);
          break;
        }
        default: {
          settVisningsRaderForDefault(periode, rows, rowsAndeler, rowsForklaringer, vilkarStatus, harBortfallNaturalYtelse);
        }
      }

      // sjekk om spesialrader skul vises
      // IKKE vis avkortet rad hvis mindre en 6G
      if (removeSpacesFromNumber(bruttoRad.verdi) < seksG) {
        avkortetRad.display = false;
      }
      dagsatserRad.grunnlag = finnDagsatsGrunnlag(bruttoRad, avkortetRad, redusertRad);
      if (rowsAndeler.length < 2) {
        bruttoRad.display = false;
      }
      if (bruttoRad.display !== false && bruttoRad.verdi === redusertRad.verdi) {
        redusertRad.display = false;
      }

      periodeResultatTabeller.push(
        {
          headers,
          rowsAndeler,
          avkortetRad,
          redusertRad,
          bruttoRad,
          dagsatser: dagsatserRad,
          rowsForklaringer,
        },
      );
    });
    return periodeResultatTabeller;
  },
);

type OwnProps = {
    halvGVerdi: number;
    vilkaarBG: Vilkar;
    periodeResultatTabeller: any[];
};

/**
 * BeregningsresultatTable2
 *
 * Presentasjonskomponent. Viser faktagruppe med beregningstabellen som viser inntekter brukt i
 * beregningen og hva dagsatsen ble.
 * Dersom vilkåret ble avslått vil grunnen til dette vises istedenfor tabellen
 */
const BeregningsresultatTable: FunctionComponent<OwnProps> = ({
  vilkaarBG, periodeResultatTabeller, halvGVerdi,
}) => (
  <BeregningsresutatPanel halvGVerdi={halvGVerdi} periodeResultatTabeller={periodeResultatTabeller} vilkaarBG={vilkaarBG} />
);

const mapStateToProps = (state, ownProps) => ({
  periodeResultatTabeller: createBeregningTableData(state, ownProps),
});

export default connect(mapStateToProps)(BeregningsresultatTable);

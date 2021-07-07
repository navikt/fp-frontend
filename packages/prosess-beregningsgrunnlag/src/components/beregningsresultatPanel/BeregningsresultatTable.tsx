import React, { FunctionComponent, ReactElement } from 'react';
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
import {
  BeregningsgrunnlagAndel, BeregningsgrunnlagPeriodeProp, Kodeverk, Vilkar, YtelseGrunnlag,
} from '@fpsak-frontend/types';
import { andelErIkkeTilkommetEllerLagtTilAvSBH } from '../arbeidstaker/GrunnlagForAarsinntektPanelAT';
import BeregningsresutatPanel from './BeregningsResultatPanel';
import BeregningsresultatPeriodeTabellType, {
  AvkortetRadType,
  BeregningsresultatAndelElementType,
  BruttoRadType, RedusertRadType,
} from '../../types/BeregningsresultatPeriodeTabellType';

const VIRKEDAGER_PR_AAR = 260;

const periodeHarAarsakSomTilsierVisning = (aarsaker: Kodeverk[]): boolean => {
  if (aarsaker.length < 1) {
    return true;
  }
  const aarsakerSomTilsierMuligEndringIDagsats = [periodeAarsak.NATURALYTELSE_BORTFALT,
    periodeAarsak.ARBEIDSFORHOLD_AVSLUTTET, periodeAarsak.NATURALYTELSE_TILKOMMER];
  return aarsaker.filter((aarsak) => aarsakerSomTilsierMuligEndringIDagsats.indexOf(aarsak.kode) !== -1).length > 0;
};

const setTekstStrengKeyPavilkaarUtfallType = (vilkarStatus: Kodeverk, skalFastsetteGrunnlag: boolean): string => {
  if (!vilkarStatus || !vilkarStatus.kode) return 'Fastsatt';
  if (vilkarStatus.kode === vilkarUtfallType.OPPFYLT && !skalFastsetteGrunnlag) {
    return 'Omberegnet';
  }
  if (vilkarStatus.kode === vilkarUtfallType.IKKE_OPPFYLT) {
    return 'Omberegnet';
  }
  return 'Fastsatt';
};

const erVilkaarOppfyltForEnAvAndelene = (vilkarStatus: Kodeverk, andeler: any[]): boolean => {
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

const hentAndelFraPeriode = (periode: BeregningsgrunnlagPeriodeProp, andelType: string): BeregningsgrunnlagAndel[] => periode.beregningsgrunnlagPrStatusOgAndel
  .filter((andel) => andel.aktivitetStatus.kode === andelType)
  .filter((andel) => andelErIkkeTilkommetEllerLagtTilAvSBH(andel));

const lagPeriodeHeader = (fom: string, tom: string): ReactElement => (
  <FormattedMessage
    id="Beregningsgrunnlag.BeregningTable.Periode"
    key={`fom-tom${fom}${tom}`}
    values={{ fom: moment(fom).format(DDMMYYYY_DATE_FORMAT), tom: tom ? moment(tom).format(DDMMYYYY_DATE_FORMAT) : '' }}
  />
);
const summertVerdiFraListeProp = (andeler: BeregningsgrunnlagAndel[], propNavn: string): number => {
  if (!andeler || andeler.length < 1) {
    return -1;
  }
  let sum = 0;
  andeler.forEach((andel) => {
    sum += andel[propNavn] ? andel[propNavn] : 0;
  });
  return sum;
};

const opprettSNElement = (andel: BeregningsgrunnlagAndel, vilkårstatus: Kodeverk): BeregningsresultatAndelElementType => {
  let erOverstyrt = false;
  let inntekt;
  const { skalFastsetteGrunnlag } = andel;
  if (skalFastsetteGrunnlag && vilkårstatus.kode !== vilkarUtfallType.IKKE_VURDERT) {
    if (andel.overstyrtPrAar || andel.overstyrtPrAar === 0) {
      inntekt = andel.overstyrtPrAar;
      erOverstyrt = true;
    } else {
      inntekt = andel.beregnetPrAar;
    }
  } else if (skalFastsetteGrunnlag && vilkårstatus.kode === vilkarUtfallType.IKKE_VURDERT) {
    inntekt = 'fastsett';
  } else {
    inntekt = andel.bruttoPrAar || andel.bruttoPrAar === 0 ? andel.bruttoPrAar : undefined;
  }
  const pgiSnitt = andel.pgiSnitt || andel.pgiSnitt === 0 ? andel.pgiSnitt : undefined;
  return {
    erOverstyrt,
    skalFastsetteGrunnlag,
    inntekt,
    pgiSnitt,
  };
};

const opprettATElement = (andeler: BeregningsgrunnlagAndel[], vilkårstatus: Kodeverk): BeregningsresultatAndelElementType => {
  let inntekt;
  let erOverstyrt = false;
  const skalFastsetteGrunnlag = andeler.some((atAndel) => atAndel.skalFastsetteGrunnlag === true);
  if (skalFastsetteGrunnlag && vilkårstatus.kode !== vilkarUtfallType.IKKE_VURDERT) { // denne testen kan brukes på alle
    erOverstyrt = andeler.some((atAndel) => (atAndel.overstyrtPrAar !== undefined && atAndel.overstyrtPrAar !== null));
    if (erOverstyrt) {
      inntekt = summertVerdiFraListeProp(andeler, 'overstyrtPrAar');
    } else {
      inntekt = summertVerdiFraListeProp(andeler, 'beregnetPrAar');
    }
  } else if (skalFastsetteGrunnlag && vilkårstatus.kode === vilkarUtfallType.IKKE_VURDERT) {
    inntekt = 'fastsett';
  } else {
    inntekt = summertVerdiFraListeProp(andeler, 'bruttoPrAar');
  }
  return {
    erOverstyrt,
    skalFastsetteGrunnlag,
    inntekt,
  };
};

const opprettDefaultElement = (førsteAndel: BeregningsgrunnlagAndel, vilkårstatus: Kodeverk): BeregningsresultatAndelElementType => {
  let inntekt;
  let erOverstyrt = false;
  let { skalFastsetteGrunnlag } = førsteAndel;
  if (skalFastsetteGrunnlag && vilkårstatus.kode !== vilkarUtfallType.IKKE_VURDERT) {
    if (førsteAndel.overstyrtPrAar || førsteAndel.overstyrtPrAar === 0) {
      inntekt = førsteAndel.overstyrtPrAar;
      erOverstyrt = true;
    } else {
      inntekt = førsteAndel.beregnetPrAar;
    }
  } else if (skalFastsetteGrunnlag && vilkårstatus.kode === vilkarUtfallType.IKKE_VURDERT) {
    inntekt = 'fastsett';
  } else {
    inntekt = førsteAndel.bruttoPrAar || førsteAndel.bruttoPrAar === 0 ? førsteAndel.bruttoPrAar : undefined;
  }
  skalFastsetteGrunnlag = førsteAndel.skalFastsetteGrunnlag;
  return {
    erOverstyrt,
    skalFastsetteGrunnlag,
    inntekt,
  };
};

const opprettAndelElement = (periode: BeregningsgrunnlagPeriodeProp, andelType: string, vilkarStatus: Kodeverk): BeregningsresultatAndelElementType => {
  const andelElement = {
    ledetekst: null,
    erOverstyrt: false,
    pgiSnitt: null,
    skalFastsetteGrunnlag: false,
    verdi: null,
    inntekt: null,
  };
  andelElement.ledetekst = 'Beregningsgrunnlag -';
  const andeler = hentAndelFraPeriode(periode, andelType);
  if (!andeler || andeler.length < 1) {
    return null;
  }
  const førsteAndel = andeler[0]; // Vil kun være en for statuser som ikke er ARBEIDSTAKER så drar for bruk i switch her
  if (andelType === aktivitetStatus.ARBEIDSTAKER) {
    const atElement = opprettATElement(andeler, vilkarStatus);
    andelElement.inntekt = atElement.inntekt;
    andelElement.erOverstyrt = atElement.erOverstyrt;
    andelElement.skalFastsetteGrunnlag = atElement.skalFastsetteGrunnlag;
  } else if (andelType === aktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE) {
    const snElement = opprettSNElement(førsteAndel, vilkarStatus);
    andelElement.inntekt = snElement.inntekt;
    andelElement.erOverstyrt = snElement.erOverstyrt;
    andelElement.skalFastsetteGrunnlag = snElement.skalFastsetteGrunnlag;
    andelElement.pgiSnitt = snElement.pgiSnitt;
  } else {
    const defaultElement = opprettDefaultElement(førsteAndel, vilkarStatus);
    andelElement.inntekt = defaultElement.inntekt;
    andelElement.erOverstyrt = defaultElement.erOverstyrt;
    andelElement.skalFastsetteGrunnlag = defaultElement.skalFastsetteGrunnlag;
  }
  if ((andelElement.inntekt || andelElement.inntekt === 0) && andelElement.inntekt !== -1) {
    andelElement.verdi = andelElement.inntekt;
  }
  const strKey = setTekstStrengKeyPavilkaarUtfallType(vilkarStatus, andelElement.skalFastsetteGrunnlag);
  andelElement.ledetekst = <FormattedMessage id={`Beregningsgrunnlag.BeregningTable.${strKey}.${andelType}`} />;
  return andelElement;
};

const hentVerdiFraAndel = (andel: BeregningsresultatAndelElementType): number => {
  if (!andel || !andel.verdi) {
    return 0;
  }
  return andel.verdi;
};

const hentPGIFraSNAndel = (andel: BeregningsresultatAndelElementType): number => {
  if (!andel || !andel.pgiSnitt) {
    return 0;
  }
  return andel.pgiSnitt;
};

const settVisningsRaderForATSN = (periode: BeregningsgrunnlagPeriodeProp,
  rowsAndeler: BeregningsresultatAndelElementType[],
  rowsForklaringer: ReactElement[],
  vilkarStatus: Kodeverk): void => {
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
const settVisningsRaderForATFLSN = (periode: BeregningsgrunnlagPeriodeProp,
  rowsAndeler: BeregningsresultatAndelElementType[],
  rowsForklaringer: ReactElement[],
  vilkarStatus: Kodeverk): void => {
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
const settVisningsRaderForDPFLSN = (periode: BeregningsgrunnlagPeriodeProp,
  rowsAndeler: BeregningsresultatAndelElementType[],
  rowsForklaringer: ReactElement[],
  vilkarStatus: Kodeverk): void => {
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
const settVisningsRaderForATDPSN = (periode: BeregningsgrunnlagPeriodeProp,
  rowsAndeler: BeregningsresultatAndelElementType[],
  rowsForklaringer: ReactElement[],
  vilkarStatus: Kodeverk): void => {
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

  if ((hentVerdiFraAndel(dpElement) + hentVerdiFraAndel(atElement)) > hentPGIFraSNAndel(snElement)) {
    rowsForklaringer.push(<FormattedMessage id="Beregningsgrunnlag.BeregningTable.Omberegnet.ForklaringAT_DPoverstigerSN" />);
    rowsAndeler.push(atElement);
    rowsAndeler.push(dpElement);
  } else {
    rowsAndeler.push(atElement);
    rowsAndeler.push(dpElement);
    rowsAndeler.push(snElement);
  }
};
const settVisningsRaderForDefault = (periode: BeregningsgrunnlagPeriodeProp,
  rowsAndeler: BeregningsresultatAndelElementType[],
  rowsForklaringer: ReactElement[],
  vilkarStatus: Kodeverk,
  harBortfallNaturalYtelse: boolean): void => { // NOSONAR ikke vanskelig å lese, men kunne vært splittet?
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
      ledetekst: null,
      inntekt: null,
    };
    const atAndel = periode.beregningsgrunnlagPrStatusOgAndel.filter(
      (andel) => andel.aktivitetStatus.kode === aktivitetStatus.ARBEIDSTAKER && andel.arbeidsforhold?.naturalytelseBortfaltPrÅr,
    );
    ntElement.verdi = atAndel && atAndel.length > 0 ? atAndel.reduce((sum, andel) => sum + andel.arbeidsforhold?.naturalytelseBortfaltPrÅr, 0) : undefined;
    ntElement.skalFastsetteGrunnlag = false;
    ntElement.ledetekst = <FormattedMessage id="Beregningsgrunnlag.BeregningTable.Naturalytelser" />;
    rowsAndeler.push(ntElement);
  }
};

const finnDagsatsGrunnlag = (bruttoRad: BruttoRadType, avkortetRad: AvkortetRadType, redusertRad: RedusertRadType): string => {
  if (redusertRad.verdi && redusertRad.display !== false) return redusertRad.verdi;
  if (avkortetRad.verdi && avkortetRad.display !== false) return avkortetRad.verdi;
  if (bruttoRad.verdi && bruttoRad.display !== false) return bruttoRad.verdi;
  return null;
};

const harSVPGrunnlag = (ytelseGrunnlag: YtelseGrunnlag): boolean => ytelseGrunnlag && ytelseGrunnlag.ytelsetype === fagsakYtelseType.SVANGERSKAPSPENGER;

const finnDagsats = (periode: BeregningsgrunnlagPeriodeProp, ytelseGrunnlag: YtelseGrunnlag): number => {
  if (harSVPGrunnlag(ytelseGrunnlag) && periode.avkortetPrAar) {
    return Math.round(periode.avkortetPrAar / VIRKEDAGER_PR_AAR);
  }
  return periode.dagsats;
};

const sjekkHarBortfaltNaturalYtelse = (periode: BeregningsgrunnlagPeriodeProp): boolean => {
  if (!periode) {
    return false;
  }
  return periode.beregningsgrunnlagPrStatusOgAndel.some((andel) => andel.arbeidsforhold?.naturalytelseBortfaltPrÅr !== undefined
      && andel.arbeidsforhold?.naturalytelseBortfaltPrÅr !== null
      && andel.arbeidsforhold?.naturalytelseBortfaltPrÅr !== 0);
};

export const createBeregningTableData = createSelector(
  [(ownProps: OwnProps) => ownProps.beregningsgrunnlagPerioder,
    (ownProps: OwnProps) => ownProps.aktivitetStatusList,
    (ownProps: OwnProps) => ownProps.dekningsgrad,
    (ownProps: OwnProps) => ownProps.grunnbelop,
    (ownProps: OwnProps) => ownProps.vilkaarBG.vilkarStatus,
    (ownProps: OwnProps) => ownProps.ytelseGrunnlag],
  (allePerioder: BeregningsgrunnlagPeriodeProp[],
    aktivitetStatusList: Kodeverk[],
    dekningsgrad: number,
    grunnbelop: number,
    vilkarStatus: Kodeverk,
    ytelseGrunnlag: YtelseGrunnlag): BeregningsresultatPeriodeTabellType[] => {
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
      const rowsAndeler = [];
      const rowsForklaringer = [];
      aktivitetStatusList.sort((a, b) => ((a.kode > b.kode) ? 1 : -1)); // sorter alfabetisk
      const aktivitetStatusKodeKombo = aktivitetStatusList.map((andelKode) => andelKode.kode).join('_');
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
          settVisningsRaderForDefault(periode, rowsAndeler, rowsForklaringer, vilkarStatus, harBortfallNaturalYtelse);
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

type MappedOwnProps = {
  periodeResultatTabeller: BeregningsresultatPeriodeTabellType[];
};

type OwnProps = {
    vilkaarBG: Vilkar;
    beregningsgrunnlagPerioder: BeregningsgrunnlagPeriodeProp[];
    aktivitetStatusList: Kodeverk[];
    dekningsgrad: number;
    grunnbelop: number;
    ytelseGrunnlag: YtelseGrunnlag;
};

/**
 * BeregningsresultatTable
 *
 * Presentasjonskomponent. Viser faktagruppe med beregningstabellen som viser inntekter brukt i
 * beregningen og hva dagsatsen ble.
 * Dersom vilkåret ble avslått vil grunnen til dette vises istedenfor tabellen
 */
const BeregningsresultatTable: FunctionComponent<OwnProps & MappedOwnProps> = ({
  vilkaarBG, periodeResultatTabeller, grunnbelop,
}) => (
  <BeregningsresutatPanel grunnbeløp={grunnbelop} periodeResultatTabeller={periodeResultatTabeller} vilkaarBG={vilkaarBG} />
);

const mapStateToProps = (state, ownProps: OwnProps): MappedOwnProps => ({
  periodeResultatTabeller: createBeregningTableData(ownProps),
});

export default connect(mapStateToProps)(BeregningsresultatTable);

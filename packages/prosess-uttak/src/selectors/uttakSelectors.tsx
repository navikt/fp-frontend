import React from 'react';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';

import oppholdArsakType, { oppholdArsakMapper } from '@fpsak-frontend/kodeverk/src/oppholdArsakType';
import periodeResultatType from '@fpsak-frontend/kodeverk/src/periodeResultatType';
import { calcDaysAndWeeks, DDMMYY_DATE_FORMAT } from '@fpsak-frontend/utils';
import { uttakPeriodeNavn } from '@fpsak-frontend/kodeverk/src/uttakPeriodeType';
import { Kodeverk } from '@fpsak-frontend/types';

const godkjentKlassenavn = 'godkjentPeriode';
const avvistKlassenavn = 'avvistPeriode';

export const getStatusPeriodeHoved = (periode: any) => {
  if (periode.erOppfylt === false) {
    return avvistKlassenavn;
  }
  if (periode.erOppfylt === true || (periode.periodeResultatType.kode === periodeResultatType.INNVILGET
    && !periode.tilknyttetStortinget)) {
    return godkjentKlassenavn;
  }
  if (periode.periodeResultatType.kode === periodeResultatType.MANUELL_BEHANDLING
    || periode.tilknyttetStortinget
  ) {
    return 'undefined';
  }
  return avvistKlassenavn;
};

export const getStatusPeriodeMed = (periode: any) => {
  if (periode.periodeResultatType.kode === periodeResultatType.INNVILGET && !periode.tilknyttetStortinget) {
    return godkjentKlassenavn;
  }
  return avvistKlassenavn;
};

export const createTooltipContent = (periodeType: any, intl: any, item: any) => (`
    <p>
      ${moment(item.fom).format(DDMMYY_DATE_FORMAT)} - ${moment(item.tom).format(DDMMYY_DATE_FORMAT)}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       ${intl.formatMessage({ id: calcDaysAndWeeks(moment(item.fom), moment(item.tom)).id },
    {
      weeks: calcDaysAndWeeks(moment(item.fom), moment(item.tom)).weeks,
      days: calcDaysAndWeeks(moment(item.fom), moment(item.tom)).days,
    })}
      </br>
      ${item.utsettelseType && item.utsettelseType.kode !== '-'
    ? intl.formatMessage({ id: 'Timeline.tooltip.utsettelsePeriode' }) : periodeType}
     </p>
  `);

export const getCorrectPeriodName = (item: any, getKodeverknavn: (kodeverk: Kodeverk) => string) => {
  if (item.utsettelseType && item.utsettelseType.kode !== '-') {
    return (<FormattedMessage id="Timeline.tooltip.slutt" />);
  }

  if (item.aktiviteter.length > 0 && item.aktiviteter[0].stønadskontoType) {
    return getKodeverknavn(item.aktiviteter[0].stønadskontoType);
  }

  if (item.oppholdÅrsak !== oppholdArsakType.UDEFINERT) {
    const stonadskonto = oppholdArsakMapper[item.oppholdÅrsak.kode];
    return uttakPeriodeNavn[stonadskonto];
  }

  return '';
};

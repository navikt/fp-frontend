import React from 'react';
import { HistorikkAktor } from '@navikt/fp-kodeverk';
import { KjønnkodeEnum } from '@navikt/fp-types';
import { dateFormat, timeFormat } from '@navikt/ft-utils';

import styles from '../snakkeboble.module.css';

export const utledPlassering = (aktørType: HistorikkAktor): 'right' | 'left' =>
  [HistorikkAktor.SAKSBEHANDLER, HistorikkAktor.VEDTAKSLOSNINGEN, HistorikkAktor.BESLUTTER].includes(aktørType)
    ? 'right'
    : 'left';

const getSøkerStyle = (kjønn?: string): string => {
  if (kjønn === KjønnkodeEnum.KVINNE) {
    return styles.bubbleSokerKvinne;
  }
  return kjønn === KjønnkodeEnum.MANN ? styles.bubbleSokerMann : styles.bubbleSoker;
};

export const getStyle = (aktørType: HistorikkAktor, kjønn?: string) => {
  const styleMap = {
    [HistorikkAktor.ARBEIDSGIVER]: styles.bubbleArbeidsgiver,
    [HistorikkAktor.BESLUTTER]: styles.bubbleBeslutter,
    [HistorikkAktor.VEDTAKSLOSNINGEN]: styles.bubbleVedtakslosningen,
    [HistorikkAktor.SAKSBEHANDLER]: styles.bubbleSaksbehandler,
    [HistorikkAktor.SOKER]: getSøkerStyle(kjønn),
  };
  return styleMap[aktørType];
};

export const formatDate = (date: string) => `${dateFormat(date)} - ${timeFormat(date)}`;

export const parseBoldText = (input: string) =>
  input
    .split(/(__.*?__)/g)
    .map((part, index) =>
      part.startsWith('__') && part.endsWith('__') ? <b key={index}>{part.slice(2, -2)}</b> : part,
    );

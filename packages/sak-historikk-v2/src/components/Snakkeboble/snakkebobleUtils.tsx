import React from 'react';
import { historikkAktor as HistorikkAktor } from '@navikt/fp-kodeverk';
import { HistorikkinnslagV2, KjønnkodeEnum } from '@navikt/fp-types';
import { dateFormat, timeFormat } from '@navikt/ft-utils';

import styles from '../snakkeboble.module.css';

export const utledPlassering = (aktørType: HistorikkAktor): 'right' | 'left' =>
  [HistorikkAktor.SAKSBEHANDLER, HistorikkAktor.VEDTAKSLOSNINGEN, HistorikkAktor.BESLUTTER].includes(aktørType)
    ? 'right'
    : 'left';

export const getStyle = (aktørType: HistorikkAktor, kjønn?: string) => {
  const styleMap = {
    [HistorikkAktor.ARBEIDSGIVER]: styles.bubbleArbeidsgiver,
    [HistorikkAktor.BESLUTTER]: styles.bubbleBeslutter,
    [HistorikkAktor.VEDTAKSLOSNINGEN]: styles.bubbleVedtakslosningen,
    [HistorikkAktor.SAKSBEHANDLER]: styles.bubbleSaksbehandler,
    [HistorikkAktor.SOKER]:
      kjønn === KjønnkodeEnum.KVINNE
        ? styles.bubbleSokerKvinne
        : kjønn === KjønnkodeEnum.MANN
          ? styles.bubbleSokerMann
          : styles.bubbleSoker,
  };
  return styleMap[aktørType];
};

export const formatDate = (date: string) => `${dateFormat(date)} - ${timeFormat(date)}`;

export const visNavn = (rolleNavn: string, aktør: HistorikkinnslagV2['aktør']): string =>
  [HistorikkAktor.ARBEIDSGIVER, HistorikkAktor.SOKER, HistorikkAktor.VEDTAKSLOSNINGEN].includes(aktør.type)
    ? rolleNavn
    : `${rolleNavn} ${aktør.ident}`;

export const parseBoldText = (input: string) =>
  input
    .split(/(__.*?__)/g)
    .map((part, index) =>
      part.startsWith('__') && part.endsWith('__') ? <b key={index}>{part.slice(2, -2)}</b> : part,
    );

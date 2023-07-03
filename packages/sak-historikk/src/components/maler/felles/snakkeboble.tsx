import React, { FunctionComponent } from 'react';
import { Chat } from '@navikt/ds-react';
import { Image } from '@navikt/ft-ui-komponenter';

import { historikkAktor as HistorikkAktor, navBrukerKjonn } from '@navikt/fp-kodeverk';
import kvinneImg from '../../../images/kvinne.svg';
import maskinImg from '../../../images/maskin.svg';
import arbeidsgiverImg from '../../../images/arbeidsgiver.svg';
import mannImg from '../../../images/mann.svg';
import beslutterImg from '../../../images/beslutter.svg';
import navAnsattHistorikkImg from '../../../images/nav_ansatt_historikk.svg';

import styles from './snakkeboble.module.css';

const formatDate = (date: string): string =>
  `${date.substring(8, 10)}.${date.substring(5, 7)}.${date.substring(0, 4)} - ${date.substring(11, 16)}`;

const utledIkon = (aktoer: string, kjoenn?: string) => {
  if (aktoer === HistorikkAktor.SAKSBEHANDLER) {
    return navAnsattHistorikkImg;
  }
  if (aktoer === HistorikkAktor.SOKER && kjoenn === navBrukerKjonn.MANN) {
    return mannImg;
  }
  if (aktoer === HistorikkAktor.SOKER && kjoenn === navBrukerKjonn.KVINNE) {
    return kvinneImg;
  }
  if (aktoer === HistorikkAktor.BESLUTTER) {
    return beslutterImg;
  }
  if (aktoer === HistorikkAktor.VEDTAKSLOSNINGEN) {
    return maskinImg;
  }
  return arbeidsgiverImg;
};

const utledPlassering = (aktoer: string): 'right' | 'left' =>
  aktoer === HistorikkAktor.SAKSBEHANDLER ||
  aktoer === HistorikkAktor.VEDTAKSLOSNINGEN ||
  aktoer === HistorikkAktor.BESLUTTER
    ? 'right'
    : 'left';

const BAKGRUNNSFARGER = {
  [HistorikkAktor.SAKSBEHANDLER]: styles.bubbleSaksbehandler,
  [HistorikkAktor.BESLUTTER]: styles.bubbleBeslutter,
  [HistorikkAktor.VEDTAKSLOSNINGEN]: styles.bubbleVedtakslosningen,
  [HistorikkAktor.SOKER]: styles.bubbleSoker,
  [HistorikkAktor.ARBEIDSGIVER]: styles.bubbleArbeidsgiver,
} as Record<string, string>;

interface OwnProps {
  dato: string;
  aktoer: string;
  kjoenn?: string;
  rolleNavn?: string;
  opprettetAv?: string;
  children: React.ReactElement;
  erFørsteBoble: boolean;
}

const Snakkeboble: FunctionComponent<OwnProps> = ({
  dato,
  aktoer,
  kjoenn,
  rolleNavn = '',
  opprettetAv,
  children,
  erFørsteBoble,
}) => (
  <div className={erFørsteBoble ? styles.marginForste : styles.margin} data-testid={`snakkeboble-${dato}`}>
    <Chat
      avatar={<Image className={styles.image} src={utledIkon(aktoer, kjoenn)} />}
      timestamp={`${formatDate(dato)} // ${rolleNavn} ${opprettetAv || ''}`}
      position={utledPlassering(aktoer)}
      toptextPosition="left"
    >
      <Chat.Bubble className={BAKGRUNNSFARGER[aktoer]}>{children}</Chat.Bubble>
    </Chat>
  </div>
);

export default Snakkeboble;

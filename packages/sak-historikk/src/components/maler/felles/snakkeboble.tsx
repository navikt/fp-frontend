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
  [HistorikkAktor.SAKSBEHANDLER]: 'var(--a-purple-100)',
  [HistorikkAktor.BESLUTTER]: 'var(--a-green-100)',
  [HistorikkAktor.VEDTAKSLOSNINGEN]: 'var(--a-gray-100)',
  [HistorikkAktor.SOKER]: 'var(--a-orange-100)',
  [HistorikkAktor.ARBEIDSGIVER]: 'var(--a-lightblue-100)',
} as Record<string, string>;

interface OwnProps {
  dato: string;
  aktoer: string;
  kjoenn?: string;
  rolleNavn?: string;
  opprettetAv?: string;
  children: React.ReactElement;
}

const Snakkeboble: FunctionComponent<OwnProps> = ({ dato, aktoer, kjoenn, rolleNavn = '', opprettetAv, children }) => (
  <div className={styles.margin} data-testid={`snakkeboble-${dato}`}>
    <Chat
      avatar={<Image className={styles.image} src={utledIkon(aktoer, kjoenn)} />}
      timestamp={`${formatDate(dato)} // ${rolleNavn} ${opprettetAv || ''}`}
      position={utledPlassering(aktoer)}
      toptextPosition="left"
      backgroundColor={BAKGRUNNSFARGER[aktoer]}
      className={styles.width}
    >
      <Chat.Bubble>{children}</Chat.Bubble>
    </Chat>
  </div>
);

export default Snakkeboble;

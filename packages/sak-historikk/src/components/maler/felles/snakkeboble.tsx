import React, { FunctionComponent } from 'react';
import { Chat } from '@navikt/ds-react';
import { Image } from '@navikt/ft-ui-komponenter';

import HistorikkAktor from '@navikt/fp-kodeverk/src/historikkAktor';
import navAnsattHistorikkImg from '@navikt/fp-assets/images/nav_ansatt_historikk.svg';
import kvinneImg from '@navikt/fp-assets/images/kvinne.svg';
import maskinImg from '@navikt/fp-assets/images/maskin.svg';
import arbeidsgiverImg from '@navikt/fp-assets/images/arbeidsgiver.svg';
import mannImg from '@navikt/fp-assets/images/mann.svg';
import beslutterImg from '@navikt/fp-assets/images/beslutter.svg';
import navBrukerKjonn from '@navikt/fp-kodeverk/src/navBrukerKjonn';

import styles from './snakkeboble.less';

const formatDate = (date: string): string => (`${date.substring(8, 10)}.${date.substring(5, 7)}.${date.substring(0, 4)} - ${date.substring(11, 16)}`);

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

const utledPlassering = (
  aktoer: string,
): 'right' | 'left' => (aktoer === HistorikkAktor.SAKSBEHANDLER
  || aktoer === HistorikkAktor.VEDTAKSLOSNINGEN || aktoer === HistorikkAktor.BESLUTTER ? 'right' : 'left');

const BAKGRUNNSFARGER = {
  [HistorikkAktor.SAKSBEHANDLER]: 'var(--a-purple-100)',
  [HistorikkAktor.BESLUTTER]: 'var(--a-green-100)',
  [HistorikkAktor.VEDTAKSLOSNINGEN]: 'var(--a-gray-100)',
  [HistorikkAktor.SOKER]: 'var(--a-orange-100)',
  [HistorikkAktor.ARBEIDSGIVER]: 'var(--a-lightblue-100)',
};

interface OwnProps {
  dato: string;
  aktoer: string;
  kjoenn?: string;
  rolleNavn?: string;
  opprettetAv?: string;
  children: React.ReactElement;
}

const Snakkeboble: FunctionComponent<OwnProps> = ({
  dato,
  aktoer,
  kjoenn,
  rolleNavn = '',
  opprettetAv,
  children,
}) => (
  <div className={styles.margin} data-testid={`snakkeboble-${dato}`}>
    <Chat
      avatar={<Image className={styles.image} src={utledIkon(aktoer, kjoenn)} />}
      timestamp={`${formatDate(dato)} // ${rolleNavn} ${opprettetAv || ''}`}
      position={utledPlassering(aktoer)}
      toptextPosition="left"
      backgroundColor={BAKGRUNNSFARGER[aktoer]}
      className={styles.width}
    >
      <Chat.Bubble>
        {children}
      </Chat.Bubble>
    </Chat>
  </div>
);

export default Snakkeboble;

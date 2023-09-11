import React, { FunctionComponent } from 'react';
import { Chat } from '@navikt/ds-react';
import {
  FigureInwardFillIcon,
  FigureOutwardFillIcon,
  PersonCheckmarkFillIcon,
  PersonPencilFillIcon,
  PersonSuitFillIcon,
  RobotSmileIcon,
} from '@navikt/aksel-icons';

import { historikkAktor as HistorikkAktor, navBrukerKjonn } from '@navikt/fp-kodeverk';

import { IntlShape, useIntl } from 'react-intl';
import styles from './snakkeboble.module.css';

const formatDate = (date: string): string =>
  `${date.substring(8, 10)}.${date.substring(5, 7)}.${date.substring(0, 4)} - ${date.substring(11, 16)}`;

const BAKGRUNNSFARGER = {
  [HistorikkAktor.SAKSBEHANDLER]: styles.bubbleSaksbehandler,
  [HistorikkAktor.BESLUTTER]: styles.bubbleBeslutter,
  [HistorikkAktor.VEDTAKSLOSNINGEN]: styles.bubbleVedtakslosningen,
  [HistorikkAktor.SOKER]: styles.bubbleSoker,
  [HistorikkAktor.ARBEIDSGIVER]: styles.bubbleArbeidsgiver,
} as Record<string, string>;

const utledIkon = (intl: IntlShape, aktoer: string, kjoenn?: string) => {
  if (aktoer === HistorikkAktor.SAKSBEHANDLER) {
    return (
      <PersonPencilFillIcon
        className={styles.imageSaksbehandler}
        title={intl.formatMessage({ id: 'Snakkeboble.Saksbehandler' })}
      />
    );
  }
  if (aktoer === HistorikkAktor.SOKER && kjoenn === navBrukerKjonn.MANN) {
    return (
      <FigureInwardFillIcon className={styles.imageMann} title={intl.formatMessage({ id: 'Snakkeboble.Soker' })} />
    );
  }
  if (aktoer === HistorikkAktor.SOKER && kjoenn === navBrukerKjonn.KVINNE) {
    return (
      <FigureOutwardFillIcon className={styles.imageKvinne} title={intl.formatMessage({ id: 'Snakkeboble.Soker' })} />
    );
  }
  if (aktoer === HistorikkAktor.BESLUTTER) {
    return (
      <PersonCheckmarkFillIcon
        className={styles.imageBeslutter}
        title={intl.formatMessage({ id: 'Snakkeboble.Beslutter' })}
      />
    );
  }
  if (aktoer === HistorikkAktor.VEDTAKSLOSNINGEN) {
    return (
      <RobotSmileIcon
        className={styles.imageVedtak}
        title={intl.formatMessage({ id: 'Snakkeboble.Vedtakslosninger' })}
      />
    );
  }
  return (
    <PersonSuitFillIcon
      className={styles.imageArbeidsgiver}
      title={intl.formatMessage({ id: 'Snakkeboble.Arbeidsgiver' })}
    />
  );
};

const utledPlassering = (aktoer: string): 'right' | 'left' =>
  aktoer === HistorikkAktor.SAKSBEHANDLER ||
  aktoer === HistorikkAktor.VEDTAKSLOSNINGEN ||
  aktoer === HistorikkAktor.BESLUTTER
    ? 'right'
    : 'left';

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
}) => {
  const intl = useIntl();
  return (
    <div className={erFørsteBoble ? styles.marginForste : styles.margin} data-testid={`snakkeboble-${dato}`}>
      <Chat
        avatar={utledIkon(intl, aktoer, kjoenn)}
        timestamp={`${formatDate(dato)} // ${rolleNavn} ${opprettetAv || ''}`}
        position={utledPlassering(aktoer)}
        toptextPosition="left"
      >
        <Chat.Bubble className={BAKGRUNNSFARGER[aktoer]}>{children}</Chat.Bubble>
      </Chat>
    </div>
  );
};

export default Snakkeboble;

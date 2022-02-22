import React, { FunctionComponent } from 'react';
import classNames from 'classnames/bind';
import Panel from 'nav-frontend-paneler';
import { Undertekst } from 'nav-frontend-typografi';
import { Image } from '@navikt/fp-react-components';

import HistorikkAktor from '@fpsak-frontend/kodeverk/src/historikkAktor';
import navAnsattHistorikkImg from '@fpsak-frontend/assets/images/nav_ansatt_historikk.svg';
import kvinneImg from '@fpsak-frontend/assets/images/kvinne.svg';
import maskinImg from '@fpsak-frontend/assets/images/maskin.svg';
import arbeidsgiverImg from '@fpsak-frontend/assets/images/arbeidsgiver.svg';
import mannImg from '@fpsak-frontend/assets/images/mann.svg';
import beslutterImg from '@fpsak-frontend/assets/images/beslutter.svg';
import navBrukerKjonn from '@fpsak-frontend/kodeverk/src/navBrukerKjonn';

import styles from './snakkeboble.less';

const cx = classNames.bind(styles);

const snakkebobleCls = (aktoer: string): string => cx('snakkeboble', {
  'snakkeboble--hoyre': aktoer !== HistorikkAktor.SOKER && aktoer !== HistorikkAktor.ARBEIDSGIVER,
  'snakkeboble--venstre': aktoer === HistorikkAktor.SOKER || aktoer === HistorikkAktor.ARBEIDSGIVER,
});

const formatDate = (date: string): string => (`${date.substring(8, 10)}.${date.substring(5, 7)}.${date.substring(0, 4)} - ${date.substring(11, 16)}`);

const snakkeboblePilCls = (aktoer: string): string => cx('snakkeboble__snakkebole-pil', {
  'snakkeboble__snakkebole-pil--hoyre--saksbehandler': aktoer === HistorikkAktor.SAKSBEHANDLER,
  'snakkeboble__snakkebole-pil--hoyre--beslutter': aktoer === HistorikkAktor.BESLUTTER,
  'snakkeboble__snakkebole-pil--hoyre--losningen': aktoer === HistorikkAktor.VEDTAKSLOSNINGEN,
  'snakkeboble__snakkebole-pil--venstre--bruker': aktoer === HistorikkAktor.SOKER,
  'snakkeboble__snakkebole-pil--venstre--ekstern': aktoer === HistorikkAktor.ARBEIDSGIVER,
});

const snakkeboblePanelCls = (aktoer: string): string => cx('snakkeboble__panel snakkeboble-panel', {
  'snakkeboble__snakkebole-panel--saksbehandler': aktoer === HistorikkAktor.SAKSBEHANDLER,
  'snakkeboble__snakkebole-panel--beslutter': aktoer === HistorikkAktor.BESLUTTER,
  'snakkeboble__snakkebole-panel--losningen': aktoer === HistorikkAktor.VEDTAKSLOSNINGEN,
  'snakkeboble__snakkebole-panel--bruker': aktoer === HistorikkAktor.SOKER,
  'snakkeboble__snakkebole-panel--ekstern': aktoer === HistorikkAktor.ARBEIDSGIVER,
});

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

const utledTooltipPlassering = (aktoer: string): boolean => aktoer === HistorikkAktor.SAKSBEHANDLER
|| aktoer === HistorikkAktor.VEDTAKSLOSNINGEN || aktoer === HistorikkAktor.BESLUTTER;

interface OwnProps {
  dato: string;
  aktoer: string;
  kjoenn?: string;
  rolleNavn?: string;
  opprettetAv?: string;
  children: React.ReactElement;
}

/**
 * Snakkeboble
 *
 * En snakkeboble for dialog - detta är en variant av felles-komponenten men den avviker litt för mye från våra behov.
 */
const Snakkeboble: FunctionComponent<OwnProps> = ({
  dato,
  aktoer,
  kjoenn,
  rolleNavn = '',
  opprettetAv,
  children,
}) => (
  <div className={snakkebobleCls(aktoer)} data-testid={`snakkeboble-${dato}`}>
    <Image className={styles.image} src={utledIkon(aktoer, kjoenn)} tooltip={rolleNavn} alignTooltipLeft={utledTooltipPlassering(aktoer)} />
    <div className={styles['snakkeboble__snakkeboble-pil-container']}>
      <i className={snakkeboblePilCls(aktoer)} />
    </div>
    <Panel className={snakkeboblePanelCls(aktoer)}>
      <Undertekst className={styles['snakkeboble-panel__dato']}>
        {`${formatDate(dato)} // ${rolleNavn} ${opprettetAv || ''}`}
      </Undertekst>
      {children}
    </Panel>
  </div>

);

export default Snakkeboble;

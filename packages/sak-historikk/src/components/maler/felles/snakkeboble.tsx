import React, { FunctionComponent } from 'react';
import classNames from 'classnames/bind';
import Panel from 'nav-frontend-paneler';
import { Undertekst } from 'nav-frontend-typografi';

import HistorikkAktor from '@fpsak-frontend/kodeverk/src/historikkAktor';
import navAnsattHistorikkImg from '@fpsak-frontend/assets/images/nav_ansatt_historikk.svg';
import kvinneImg from '@fpsak-frontend/assets/images/kvinne.svg';
import maskinImg from '@fpsak-frontend/assets/images/maskin.svg';
import arbeidsgiverImg from '@fpsak-frontend/assets/images/arbeidsgiver.svg';
import mannImg from '@fpsak-frontend/assets/images/mann.svg';
import beslutterImg from '@fpsak-frontend/assets/images/beslutter.svg';
import { Image } from '@fpsak-frontend/shared-components';
import navBrukerKjonn from '@fpsak-frontend/kodeverk/src/navBrukerKjonn';
import { Kodeverk } from '@fpsak-frontend/types';

import styles from './snakkeboble.less';

const cx = classNames.bind(styles);

const snakkebobleCls = (aktoer: Kodeverk) => cx('snakkeboble', {
  'snakkeboble--hoyre': aktoer.kode !== HistorikkAktor.SOKER && aktoer.kode !== HistorikkAktor.ARBEIDSGIVER,
  'snakkeboble--venstre': aktoer.kode === HistorikkAktor.SOKER || aktoer.kode === HistorikkAktor.ARBEIDSGIVER,
});

const formatDate = (date: string) => (`${date.substring(8, 10)}.${date.substring(5, 7)}.${date.substring(0, 4)} - ${date.substring(11, 16)}`);

const snakkeboblePilCls = (aktoer: Kodeverk) => cx('snakkeboble__snakkebole-pil', {
  'snakkeboble__snakkebole-pil--hoyre--saksbehandler': aktoer.kode === HistorikkAktor.SAKSBEHANDLER,
  'snakkeboble__snakkebole-pil--hoyre--beslutter': aktoer.kode === HistorikkAktor.BESLUTTER,
  'snakkeboble__snakkebole-pil--hoyre--losningen': aktoer.kode === HistorikkAktor.VEDTAKSLOSNINGEN,
  'snakkeboble__snakkebole-pil--venstre--bruker': aktoer.kode === HistorikkAktor.SOKER,
  'snakkeboble__snakkebole-pil--venstre--ekstern': aktoer.kode === HistorikkAktor.ARBEIDSGIVER,
});

const snakkeboblePanelCls = (aktoer: Kodeverk) => cx('snakkeboble__panel snakkeboble-panel', {
  'snakkeboble__snakkebole-panel--saksbehandler': aktoer.kode === HistorikkAktor.SAKSBEHANDLER,
  'snakkeboble__snakkebole-panel--beslutter': aktoer.kode === HistorikkAktor.BESLUTTER,
  'snakkeboble__snakkebole-panel--losningen': aktoer.kode === HistorikkAktor.VEDTAKSLOSNINGEN,
  'snakkeboble__snakkebole-panel--bruker': aktoer.kode === HistorikkAktor.SOKER,
  'snakkeboble__snakkebole-panel--ekstern': aktoer.kode === HistorikkAktor.ARBEIDSGIVER,
});

const utledIkon = (aktoer: Kodeverk, kjoenn: Kodeverk) => {
  if (aktoer.kode === HistorikkAktor.SAKSBEHANDLER) {
    return navAnsattHistorikkImg;
  } if (aktoer.kode === HistorikkAktor.SOKER && kjoenn?.kode === navBrukerKjonn.MANN) {
    return mannImg;
  } if (aktoer.kode === HistorikkAktor.SOKER && kjoenn?.kode === navBrukerKjonn.KVINNE) {
    return kvinneImg;
  } if (aktoer.kode === HistorikkAktor.BESLUTTER) {
    return beslutterImg;
  } if (aktoer.kode === HistorikkAktor.VEDTAKSLOSNINGEN) {
    return maskinImg;
  }
  return arbeidsgiverImg;
};

const utledTooltipPlassering = (aktoer: Kodeverk) => aktoer.kode === HistorikkAktor.SAKSBEHANDLER
|| aktoer.kode === HistorikkAktor.VEDTAKSLOSNINGEN || aktoer.kode === HistorikkAktor.BESLUTTER;

interface OwnProps {
  dato: string;
  aktoer: Kodeverk;
  kjoenn?: Kodeverk;
  rolleNavn?: string;
  opprettetAv: string;
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
  <div className={snakkebobleCls(aktoer)}>
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

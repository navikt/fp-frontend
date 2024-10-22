import React from 'react';
import { IntlShape, useIntl } from 'react-intl';
import { BodyShort, Chat, Heading } from '@navikt/ds-react';
import {
  FigureInwardFillIcon,
  FigureOutwardFillIcon,
  PersonCheckmarkFillIcon,
  PersonPencilFillIcon,
  PersonSuitFillIcon,
  RobotSmileIcon,
} from '@navikt/aksel-icons';

import { historikkAktor as HistorikkAktor } from '@navikt/fp-kodeverk';
import { HistorikkinnslagV2, KjønnkodeEnum } from '@navikt/fp-types';
import { dateFormat, timeFormat } from '@navikt/ft-utils';

import styles from './snakkeboble.module.css';

const formatDate = (date: string): string => `${dateFormat(date)} kl.${timeFormat(date)}`;
const visNavn = (rolleNavn: string, aktør: HistorikkinnslagV2['aktør']): string =>
  [HistorikkAktor.SOKER, HistorikkAktor.ARBEIDSGIVER, HistorikkAktor.VEDTAKSLOSNINGEN].includes(aktør.type)
    ? rolleNavn
    : `${rolleNavn} ${aktør.ident}`;

const getStyle = (aktoer: HistorikkAktor, kjønn?: string) => {
  switch (aktoer) {
    case HistorikkAktor.SAKSBEHANDLER:
      return styles.bubbleSaksbehandler;
    case HistorikkAktor.BESLUTTER:
      return styles.bubbleBeslutter;
    case HistorikkAktor.VEDTAKSLOSNINGEN:
      return styles.bubbleVedtakslosningen;
    case HistorikkAktor.SOKER:
      if (kjønn === KjønnkodeEnum.KVINNE) return styles.bubbleSokerKvinne;
      else if (kjønn === KjønnkodeEnum.MANN) return styles.bubbleSokerMann;
      return styles.bubbleSoker;
    case HistorikkAktor.ARBEIDSGIVER:
      return styles.bubbleArbeidsgiver;
  }
};

const utledIkon = (intl: IntlShape, aktoer: HistorikkAktor, kjoenn?: string) => {
  switch (aktoer) {
    case HistorikkAktor.SAKSBEHANDLER:
      return <PersonPencilFillIcon fontSize={45} title={intl.formatMessage({ id: 'Snakkeboble.Saksbehandler' })} />;
    case HistorikkAktor.SOKER:
      if (kjoenn === KjønnkodeEnum.KVINNE)
        return <FigureOutwardFillIcon fontSize={45} title={intl.formatMessage({ id: 'Snakkeboble.Soker' })} />;
      else if (kjoenn === KjønnkodeEnum.MANN)
        return <FigureInwardFillIcon fontSize={45} title={intl.formatMessage({ id: 'Snakkeboble.Soker' })} />;
      return <FigureOutwardFillIcon fontSize={45} title={intl.formatMessage({ id: 'Snakkeboble.Soker' })} />;
    case HistorikkAktor.BESLUTTER:
      return <PersonCheckmarkFillIcon fontSize={45} title={intl.formatMessage({ id: 'Snakkeboble.Beslutter' })} />;
    case HistorikkAktor.VEDTAKSLOSNINGEN:
      return <RobotSmileIcon fontSize={45} title={intl.formatMessage({ id: 'Snakkeboble.Vedtakslosninger' })} />;
    case HistorikkAktor.ARBEIDSGIVER:
      return <PersonSuitFillIcon fontSize={45} title={intl.formatMessage({ id: 'Snakkeboble.Arbeidsgiver' })} />;
  }
};

const utledPlassering = (aktoer: string): 'right' | 'left' =>
  aktoer === HistorikkAktor.SAKSBEHANDLER ||
  aktoer === HistorikkAktor.VEDTAKSLOSNINGEN ||
  aktoer === HistorikkAktor.BESLUTTER
    ? 'right'
    : 'left';

interface Props {
  kjønn?: string;
  rolleNavn?: string;
  historikkInnslag: HistorikkinnslagV2;
}

export const Snakkeboble = ({
  kjønn,
  rolleNavn = '',
  historikkInnslag: { aktør, opprettetTidspunkt, title, body },
}: Props) => {
  const intl = useIntl();
  return (
    <Chat
      data-testid={`snakkeboble-${opprettetTidspunkt}`}
      avatar={utledIkon(intl, aktør.type, kjønn)}
      name={visNavn(rolleNavn, aktør)}
      timestamp={formatDate(opprettetTidspunkt)}
      position={utledPlassering(aktør.type)}
      className={getStyle(aktør.type, kjønn)}
    >
      <Chat.Bubble>
        <Heading size="small">{title}</Heading>
        {body.map((linje, index) => {
          // @ts-ignore
          return <BodyShort key={index} size="small" dangerouslySetInnerHTML={{ __html: linje }} />;
        })}
      </Chat.Bubble>
    </Chat>
  );
};

import React from 'react';
import { useIntl } from 'react-intl';

import {
  FigureInwardFillIcon,
  FigureOutwardFillIcon,
  PersonCheckmarkFillIcon,
  PersonPencilFillIcon,
  PersonSuitFillIcon,
  RobotSmileIcon,
} from '@navikt/aksel-icons';
import { historikkAktor as HistorikkAktor } from '@navikt/fp-kodeverk';
import { KjønnkodeEnum } from '@navikt/fp-types';

interface Props {
  aktørType: HistorikkAktor;
  kjønn?: string;
}

export const Avatar = ({ aktørType, kjønn }: Props) => {
  const intl = useIntl();

  switch (aktørType) {
    case HistorikkAktor.SAKSBEHANDLER:
      return <PersonPencilFillIcon fontSize={45} title={intl.formatMessage({ id: 'Index.Saksbehandler' })} />;
    case HistorikkAktor.SOKER:
      if (kjønn === KjønnkodeEnum.KVINNE)
        return <FigureOutwardFillIcon fontSize={45} title={intl.formatMessage({ id: 'Index.Soker' })} />;
      else if (kjønn === KjønnkodeEnum.MANN)
        return <FigureInwardFillIcon fontSize={45} title={intl.formatMessage({ id: 'Index.Soker' })} />;
      return <FigureOutwardFillIcon fontSize={45} title={intl.formatMessage({ id: 'Index.Soker' })} />;
    case HistorikkAktor.BESLUTTER:
      return <PersonCheckmarkFillIcon fontSize={45} title={intl.formatMessage({ id: 'Index.Beslutter' })} />;
    case HistorikkAktor.VEDTAKSLOSNINGEN:
      return <RobotSmileIcon fontSize={45} title={intl.formatMessage({ id: 'Index.Vedtakslosninger' })} />;
    case HistorikkAktor.ARBEIDSGIVER:
      return <PersonSuitFillIcon fontSize={45} title={intl.formatMessage({ id: 'Index.Arbeidsgiver' })} />;
  }
};

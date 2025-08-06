import { useIntl } from 'react-intl';

import {
  PersonCheckmarkIcon,
  PersonFillIcon,
  PersonHeadsetIcon,
  PersonSuitIcon,
  RobotSmileIcon,
} from '@navikt/aksel-icons';

import { HistorikkAktor } from '@navikt/fp-kodeverk';

interface Props {
  aktørType: HistorikkAktor;
}

export const Avatar = ({ aktørType }: Props) => {
  const intl = useIntl();

  switch (aktørType) {
    case HistorikkAktor.SAKSBEHANDLER:
      return <PersonHeadsetIcon fontSize={24} title={intl.formatMessage({ id: 'Historikkinnslag.Saksbehandler' })} />;
    case HistorikkAktor.SOKER:
      return (
        <PersonFillIcon
          fontSize={24}
          color="var(--ax-danger-400)"
          title={intl.formatMessage({ id: 'Historikkinnslag.Soker' })}
        />
      );
    case HistorikkAktor.BESLUTTER:
      return <PersonCheckmarkIcon fontSize={24} title={intl.formatMessage({ id: 'Historikkinnslag.Beslutter' })} />;
    case HistorikkAktor.VEDTAKSLOSNINGEN:
      return <RobotSmileIcon fontSize={24} title={intl.formatMessage({ id: 'Historikkinnslag.Vedtakslosninger' })} />;
    case HistorikkAktor.ARBEIDSGIVER:
      return <PersonSuitIcon fontSize={24} title={intl.formatMessage({ id: 'Historikkinnslag.Arbeidsgiver' })} />;
  }
};

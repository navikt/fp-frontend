import { useIntl } from 'react-intl';

import {
  PersonCheckmarkIcon,
  PersonFillIcon,
  PersonHeadsetIcon,
  PersonSuitIcon,
  RobotSmileIcon,
} from '@navikt/aksel-icons';

import { type HistorikkAktor, HistorikkAktorEnum } from '@navikt/fp-kodeverk';

interface Props {
  aktørType: HistorikkAktor;
}

export const Avatar = ({ aktørType }: Props) => {
  const intl = useIntl();

  switch (aktørType) {
    case HistorikkAktorEnum.SAKSBEHANDLER:
      return <PersonHeadsetIcon fontSize={24} title={intl.formatMessage({ id: 'Historikkinnslag.Saksbehandler' })} />;
    case HistorikkAktorEnum.SOKER:
      return (
        <PersonFillIcon
          fontSize={24}
          color="var(--ax-danger-400)"
          title={intl.formatMessage({ id: 'Historikkinnslag.Soker' })}
        />
      );
    case HistorikkAktorEnum.BESLUTTER:
      return <PersonCheckmarkIcon fontSize={24} title={intl.formatMessage({ id: 'Historikkinnslag.Beslutter' })} />;
    case HistorikkAktorEnum.VEDTAKSLOSNINGEN:
      return <RobotSmileIcon fontSize={24} title={intl.formatMessage({ id: 'Historikkinnslag.Vedtakslosninger' })} />;
    case HistorikkAktorEnum.ARBEIDSGIVER:
      return <PersonSuitIcon fontSize={24} title={intl.formatMessage({ id: 'Historikkinnslag.Arbeidsgiver' })} />;
    case '-':
      return ''; // TODO [JOHANNES] - eller kast feil?
  }

  // TODO [JOHANNES] -- ikke sikker på hvorfor switch ikke er exhaustive
  return '';
};

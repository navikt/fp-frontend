import { useIntl } from 'react-intl';

import {
  PersonCheckmarkIcon,
  PersonFillIcon,
  PersonHeadsetIcon,
  PersonSuitIcon,
  RobotSmileIcon,
} from '@navikt/aksel-icons';

import type { HistorikkAktor } from '@navikt/fp-types';

interface Props {
  aktørType: HistorikkAktor;
}

export const Avatar = ({ aktørType }: Props) => {
  const intl = useIntl();

  switch (aktørType) {
    case 'SBH':
      return <PersonHeadsetIcon fontSize={24} title={intl.formatMessage({ id: 'Historikkinnslag.Saksbehandler' })} />;
    case 'SOKER':
      return (
        <PersonFillIcon
          fontSize={24}
          color="var(--ax-danger-400)"
          title={intl.formatMessage({ id: 'Historikkinnslag.Soker' })}
        />
      );
    case 'BESL':
      return <PersonCheckmarkIcon fontSize={24} title={intl.formatMessage({ id: 'Historikkinnslag.Beslutter' })} />;
    case 'VL':
      return <RobotSmileIcon fontSize={24} title={intl.formatMessage({ id: 'Historikkinnslag.Vedtakslosninger' })} />;
    case 'ARBEIDSGIVER':
      return <PersonSuitIcon fontSize={24} title={intl.formatMessage({ id: 'Historikkinnslag.Arbeidsgiver' })} />;
    case '-':
      throw new Error(`Ugyldig aktørType: ${aktørType}`);
  }
};

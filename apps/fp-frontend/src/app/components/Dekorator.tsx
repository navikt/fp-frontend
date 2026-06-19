import { type ComponentProps } from 'react';
import { useIntl } from 'react-intl';
import { useNavigate } from 'react-router-dom';

import type { Theme } from '@navikt/ds-react';

import { FellesDekorator, type QueryStrings } from '@navikt/fp-app-felles';
import { getAvdelingslederLenke, getJournalføringLenke } from '@navikt/fp-konstanter';
import { type DekoratorLenke } from '@navikt/fp-sak-dekorator';
import type { NavAnsatt } from '@navikt/fp-types';

import { GLOBALE_SNARVEG_IDER } from '../../snarveger/snarvegDefinisjoner';
import { useRegistrerSnarveg, useSnarvegerContextValgfri } from '../../snarveger/SnarvegerContext';
import { snarvegerErTilgjengelig } from '../../snarveger/snarvegerMiljo';
import { UTBETALINGSDATA_PATH } from '../paths';

interface Props {
  queryStrings: QueryStrings;
  setSiteHeight: (headerHeight: number) => void;
  crashMessage?: string;
  hideErrorMessages?: boolean;
  theme: ComponentProps<typeof Theme>['theme'];
  setTheme: (theme: NonNullable<ComponentProps<typeof Theme>['theme']>) => void;
  navAnsatt?: NavAnsatt;
}

export const Dekorator = ({ navAnsatt, ...rest }: Props) => {
  const intl = useIntl();

  const { navn = '', kanOppgavestyre = false, kanSaksbehandle = false } = navAnsatt ?? {};

  const navigate = useNavigate();
  const snarvegerContext = useSnarvegerContextValgfri();
  const gotToAppRoot = () => {
    void navigate('/');
  };

  const visUtbetalingsdataSide = (e: React.SyntheticEvent) => {
    void navigate(UTBETALINGSDATA_PATH);
    e.preventDefault();
  };

  const visSnarveger = (e: React.SyntheticEvent) => {
    e.preventDefault();
    snarvegerContext?.settHjelpÅpen(true);
  };

  useRegistrerSnarveg(
    GLOBALE_SNARVEG_IDER.AVDELINGSLEDER,
    () => (globalThis.location.href = getAvdelingslederLenke()),
    kanOppgavestyre,
  );
  useRegistrerSnarveg(
    GLOBALE_SNARVEG_IDER.JOURNALFØRING,
    () => (globalThis.location.href = getJournalføringLenke()),
    kanSaksbehandle,
  );

  const interneLenker: DekoratorLenke[] = [];
  if (kanOppgavestyre) {
    interneLenker.push({
      tekst: intl.formatMessage({ id: 'Dekorator.Avdelingsleder' }),
      callback: () => (globalThis.location.href = getAvdelingslederLenke()),
    });
  }
  if (kanSaksbehandle) {
    interneLenker.push({
      tekst: intl.formatMessage({ id: 'Dekorator.Journalforing' }),
      callback: () => (globalThis.location.href = getJournalføringLenke()),
    });
  }
  interneLenker.push({
    tekst: intl.formatMessage({ id: 'Dekorator.Utbetalingsdata' }),
    callback: (e: React.SyntheticEvent) => visUtbetalingsdataSide(e),
  });
  if (snarvegerErTilgjengelig()) {
    interneLenker.push({
      tekst: intl.formatMessage({ id: 'Dekorator.Tastatursnarvegar' }),
      callback: (e: React.SyntheticEvent) => visSnarveger(e),
    });
  }

  return (
    <FellesDekorator
      tittel={intl.formatMessage({ id: 'Dekorator.Foreldrepenger' })}
      interneLenker={interneLenker}
      ansattnavn={navn}
      gotToAppRoot={gotToAppRoot}
      {...rest}
    />
  );
};

import React, { type ComponentProps } from 'react';
import { useIntl } from 'react-intl';
import { useNavigate } from 'react-router-dom';

import type { Theme } from '@navikt/ds-react';
import { useQuery } from '@tanstack/react-query';

import { FellesDekorator, type QueryStrings } from '@navikt/fp-app-felles';
import { AVDELINGSLEDER_URL_NAME, FPSAK_URL_NAME, JOURNALFORING_URL_NAME } from '@navikt/fp-konstanter';
import { type DekoratorLenke } from '@navikt/fp-sak-dekorator';
import { notEmpty } from '@navikt/fp-utils';

import { initFetchOptions } from '../../data/fagsakApi';
import { UTBETALINGSDATA_PATH } from '../paths';

interface Props {
  queryStrings: QueryStrings;
  setSiteHeight: (headerHeight: number) => void;
  crashMessage?: string;
  hideErrorMessages?: boolean;
  theme: ComponentProps<typeof Theme>['theme'];
  setTheme: (theme: NonNullable<ComponentProps<typeof Theme>['theme']>) => void;
}

export const Dekorator = (props: Props) => {
  const intl = useIntl();

  const initFetchQuery = useQuery(initFetchOptions());
  const { innloggetBruker: navAnsatt } = notEmpty(initFetchQuery.data);

  const navigate = useNavigate();
  const gotToAppRoot = () => {
    void navigate('/');
  };

  const visUtbetalingsdataSide = (e: React.SyntheticEvent) => {
    void navigate(UTBETALINGSDATA_PATH);
    e.preventDefault();
  };

  const { navn, kanOppgavestyre, kanSaksbehandle } = navAnsatt;

  const interneLenker: DekoratorLenke[] = [];
  if (kanOppgavestyre) {
    interneLenker.push({
      tekst: intl.formatMessage({ id: 'Dekorator.Avdelingsleder' }),
      callback: () =>
        (globalThis.location.href = globalThis.location.href.replace(FPSAK_URL_NAME, AVDELINGSLEDER_URL_NAME)),
    });
  }
  if (kanSaksbehandle) {
    interneLenker.push({
      tekst: intl.formatMessage({ id: 'Dekorator.Journalforing' }),
      callback: () =>
        (globalThis.location.href = globalThis.location.href.replace(FPSAK_URL_NAME, JOURNALFORING_URL_NAME)),
    });
  }
  interneLenker.push({
    tekst: intl.formatMessage({ id: 'Dekorator.Utbetalingsdata' }),
    callback: (e: React.SyntheticEvent) => visUtbetalingsdataSide(e),
  });

  return (
    <FellesDekorator
      tittel={intl.formatMessage({ id: 'Dekorator.Foreldrepenger' })}
      interneLenker={interneLenker}
      ansattnavn={navn}
      gotToAppRoot={gotToAppRoot}
      {...props}
    />
  );
};

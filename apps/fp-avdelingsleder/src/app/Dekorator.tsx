import { type ComponentProps } from 'react';
import { useIntl } from 'react-intl';
import { useNavigate } from 'react-router-dom';

import type { Theme } from '@navikt/ds-react';

import { FellesDekorator, type QueryStrings } from '@navikt/fp-app-felles';
import { getFpSakLenke } from '@navikt/fp-konstanter';
import { type DekoratorLenke } from '@navikt/fp-sak-dekorator';

interface Props {
  queryStrings: QueryStrings;
  setSiteHeight: (headerHeight: number) => void;
  crashMessage?: string;
  hideErrorMessages?: boolean;
  theme: ComponentProps<typeof Theme>['theme'];
  setTheme: (theme: ComponentProps<typeof Theme>['theme']) => void;
  ansattnavn: string;
}

export const Dekorator = (props: Props) => {
  const intl = useIntl();

  const interneLenker: DekoratorLenke[] = [
    {
      tekst: intl.formatMessage({ id: 'Dekorator.Foreldrepenger' }),
      callback: () => (globalThis.location.href = getFpSakLenke()),
    },
  ];

  const navigate = useNavigate();
  const gotToAppRoot = () => {
    void navigate('/');
  };

  return (
    <FellesDekorator
      tittel={intl.formatMessage({ id: 'Dekorator.Avdelingsleder' })}
      interneLenker={interneLenker}
      gotToAppRoot={gotToAppRoot}
      {...props}
    />
  );
};

import React from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';
import { render, screen } from '@testing-library/react';

import { DiskresjonskodeType, NavBrukerKjonn } from '@navikt/fp-kodeverk';

import { VisittkortLabels } from './VisittkortLabels';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

describe('VisittkortSakIndex', () => {
  const fagsakPerson = {
    navn: 'Olga Utvikler',
    kjønn: NavBrukerKjonn.KVINNE,
    fødselsdato: '1979-01-01',
    fødselsnummer: '1234567',
  };

  it('skal vise etikett for dødsdato', async () => {
    render(
      <RawIntlProvider value={intl}>
        <VisittkortLabels
          fagsakPerson={{
            ...fagsakPerson,
            dødsdato: '2019-01-01',
          }}
          harVergeIÅpenBehandling={false}
        />
      </RawIntlProvider>,
    );

    expect(await screen.findByLabelText('Personen er død')).toBeInTheDocument();
    expect(screen.getByText('Død 01.01.2019')).toBeInTheDocument();
  });

  it('skal vise etikett for kode 6', async () => {
    render(
      <RawIntlProvider value={intl}>
        <VisittkortLabels
          fagsakPerson={{
            ...fagsakPerson,
            diskresjonskode: DiskresjonskodeType.KODE6,
          }}
          harVergeIÅpenBehandling={false}
        />
      </RawIntlProvider>,
    );

    expect(await screen.findByLabelText('Personen har diskresjonsmerking kode 6')).toBeInTheDocument();
    expect(screen.getByText('Kode 6')).toBeInTheDocument();
  });

  it('skal vise etikett for kode 7', async () => {
    render(
      <RawIntlProvider value={intl}>
        <VisittkortLabels
          fagsakPerson={{
            ...fagsakPerson,
            diskresjonskode: DiskresjonskodeType.KODE7,
          }}
          harVergeIÅpenBehandling={false}
        />
      </RawIntlProvider>,
    );

    expect(await screen.findByLabelText('Personen har diskresjonsmerking kode 7')).toBeInTheDocument();
    expect(screen.getByText('Kode 7')).toBeInTheDocument();
  });

  it('skal vise etikett for verge', async () => {
    render(
      <RawIntlProvider value={intl}>
        <VisittkortLabels fagsakPerson={fagsakPerson} harVergeIÅpenBehandling />
      </RawIntlProvider>,
    );

    expect(await screen.findByLabelText('Personen har verge i en åpen behandling')).toBeInTheDocument();
    expect(screen.getByText('Verge')).toBeInTheDocument();
  });

  it('skal vise etikett for søker under 18', async () => {
    render(
      <RawIntlProvider value={intl}>
        <VisittkortLabels
          fagsakPerson={{
            ...fagsakPerson,
            fødselsdato: '2019-01-01',
          }}
          harVergeIÅpenBehandling={false}
        />
      </RawIntlProvider>,
    );

    expect(await screen.findByLabelText('Personen er under 18 år')).toBeInTheDocument();
    expect(screen.getByText('Under 18')).toBeInTheDocument();
  });
});

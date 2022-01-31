import React from 'react';
import { RawIntlProvider } from 'react-intl';
import { render, screen } from '@testing-library/react';
import { KjønnkodeEnum } from '@fpsak-frontend/types';
import diskresjonskodeType from '@fpsak-frontend/kodeverk/src/diskresjonskodeType';
import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import VisittkortLabels from './VisittkortLabels';
import messages from '../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

describe('<VisittkortSakIndex>', () => {
  const fagsakPerson = {
    navn: 'Olga Utvikler',
    kjønn: KjønnkodeEnum.KVINNE,
    fødselsdato: '1979-01-01',
    fødselsnummer: '1234567',
  };

  it('skal vise etikett for dødsdato', async () => {
    render(
      <RawIntlProvider value={intlMock}>
        <VisittkortLabels
          fagsakPerson={{
            ...fagsakPerson,
            dodsdato: '2019-01-01',
          }}
          harVerge={false}
        />
      </RawIntlProvider>,
    );

    expect(await screen.findByText('Personen er død')).toBeInTheDocument();
    expect(screen.getByText('DØD 01.01.2019')).toBeInTheDocument();
  });

  it('skal vise etikett for kode 6', async () => {
    render(
      <RawIntlProvider value={intlMock}>
        <VisittkortLabels
          fagsakPerson={{
            ...fagsakPerson,
            diskresjonskode: diskresjonskodeType.KODE6,
          }}
          harVerge={false}
        />
      </RawIntlProvider>,
    );

    expect(await screen.findByText('Personen har diskresjonsmerking kode 6')).toBeInTheDocument();
    expect(screen.getByText('Kode 6')).toBeInTheDocument();
  });

  it('skal vise etikett for kode 7', async () => {
    render(
      <RawIntlProvider value={intlMock}>
        <VisittkortLabels
          fagsakPerson={{
            ...fagsakPerson,
            diskresjonskode: diskresjonskodeType.KODE7,
          }}
          harVerge={false}
        />
      </RawIntlProvider>,
    );

    expect(await screen.findByText('Personen har diskresjonsmerking kode 7')).toBeInTheDocument();
    expect(screen.getByText('Kode 7')).toBeInTheDocument();
  });

  it('skal vise etikett for verge', async () => {
    render(
      <RawIntlProvider value={intlMock}>
        <VisittkortLabels
          fagsakPerson={fagsakPerson}
          harVerge
        />
      </RawIntlProvider>,
    );

    expect(await screen.findByText('Personen har verge')).toBeInTheDocument();
    expect(screen.getByText('Verge')).toBeInTheDocument();
  });

  it('skal vise etikett for søker under 18', async () => {
    render(
      <RawIntlProvider value={intlMock}>
        <VisittkortLabels
          fagsakPerson={{
            ...fagsakPerson,
            fødselsdato: '2019-01-01',
          }}
          harVerge={false}
        />
      </RawIntlProvider>,
    );

    expect(await screen.findByText('Personen er under 18 år')).toBeInTheDocument();
    expect(screen.getByText('Under 18')).toBeInTheDocument();
  });
});

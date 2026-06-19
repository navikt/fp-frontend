import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';
import { render, screen } from '@testing-library/react';

import { SnarvegerProvider } from './SnarvegerContext';
import { SnarvegerOversikt } from './SnarvegerOversikt';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

const renderSnarvegerOversikt = () =>
  render(
    <RawIntlProvider value={intl}>
      <SnarvegerProvider>
        <SnarvegerOversikt />
      </SnarvegerProvider>
    </RawIntlProvider>,
  );

describe('SnarvegerOversikt', () => {
  it('skal vise gruppene med snarveier', () => {
    renderSnarvegerOversikt();

    expect(screen.getByText('Generelt')).toBeInTheDocument();
    expect(screen.getByText('I en behandling')).toBeInTheDocument();
    expect(screen.getByRole('table', { name: 'Generelt' })).toBeInTheDocument();
    expect(screen.getByRole('table', { name: 'I en behandling' })).toBeInTheDocument();
  });

  it('skal liste opp både globale og behandlingsspesifikke handlinger', () => {
    renderSnarvegerOversikt();

    expect(screen.getByText('Gå til oppgavelisten')).toBeInTheDocument();
    expect(screen.getByText('Vis historikk')).toBeInTheDocument();
    expect(screen.getByText('Utvid eller minsk behandlingsdetaljer')).toBeInTheDocument();
  });

  it('skal la brukeren slå snarveiene av og på', () => {
    renderSnarvegerOversikt();

    const bryter = screen.getByRole('checkbox', { name: 'Bruk tastatursnarveier' });
    expect(bryter).toBeChecked();
  });

  it('skal vise sekvens-snarveier med pil i stedet for pluss', () => {
    renderSnarvegerOversikt();

    expect(screen.getAllByLabelText('deretter')).toHaveLength(4);
  });
});

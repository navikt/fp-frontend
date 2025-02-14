import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, expect } from 'vitest';

import { VergeType } from '@navikt/fp-kodeverk';

import * as stories from './MenyVergeIndex.stories';

const { LeggeTilVerge, FjerneVerge } = composeStories(stories);

describe('MenyVergeIndex', () => {
  const opprettVerge = vi.fn();
  const fjernVerge = vi.fn();
  const lukkModal = vi.fn();

  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('skal opprette verge som er person', async () => {
    render(<LeggeTilVerge opprettVerge={opprettVerge} lukkModal={lukkModal} />);

    expect(await screen.findByText('Opprett verge/fullmektig?')).toBeInTheDocument();

    await userEvent.selectOptions(screen.getByLabelText('Type verge'), VergeType.FBARN);
    await userEvent.type(screen.getByLabelText('Navn'), 'Ola Nordmann');
    await userEvent.type(screen.getByLabelText('Fødselsnummer'), '11427635718');
    await userEvent.type(screen.getByLabelText('Periode f.o.m.'), '01.01.2025');
    await userEvent.type(screen.getByLabelText('Periode t.o.m.'), '31.12.2025');
    await userEvent.click(screen.getByText('Opprett'));

    expect(opprettVerge).toHaveBeenNthCalledWith(1, {
      navn: 'Ola Nordmann',
      fnr: '11427635718',
      gyldigFom: '2025-01-01',
      gyldigTom: '2025-12-31',
      vergeType: VergeType.FBARN,
    });
    expect(lukkModal).toHaveBeenCalledOnce();
    expect(fjernVerge).not.toHaveBeenCalled();
  });

  it('skal opprette verge som er organisasjon', async () => {
    render(<LeggeTilVerge opprettVerge={opprettVerge} lukkModal={lukkModal} />);

    expect(await screen.findByText('Opprett verge/fullmektig?')).toBeInTheDocument();

    await userEvent.selectOptions(screen.getByLabelText('Type verge'), VergeType.ADVOKAT);
    await userEvent.type(screen.getByLabelText('Navn'), 'Advokatfirma AS');
    await userEvent.type(screen.getByLabelText('Organisasjonsnummer'), '123456789');
    await userEvent.type(screen.getByLabelText('Periode f.o.m.'), '01.01.2025');
    await userEvent.type(screen.getByLabelText('Periode t.o.m.'), '31.12.2025');
    await userEvent.click(screen.getByText('Opprett'));

    expect(opprettVerge).toHaveBeenNthCalledWith(1, {
      navn: 'Advokatfirma AS',
      organisasjonsnummer: '123456789',
      gyldigFom: '2025-01-01',
      gyldigTom: '2025-12-31',
      vergeType: VergeType.ADVOKAT,
    });
    expect(lukkModal).toHaveBeenCalledOnce();
    expect(fjernVerge).not.toHaveBeenCalled();
  });

  it('skal vise modal for fjerne og så velge å fjerne verge', async () => {
    render(<FjerneVerge fjernVerge={fjernVerge} lukkModal={lukkModal} />);

    expect(await screen.findByText('Fjern verge/fullmektig?')).toBeInTheDocument();

    expect(screen.getByText('Advokat/advokatfullmektig')).toBeInTheDocument();
    expect(screen.getByText('Ola Nordmann')).toBeInTheDocument();
    expect(screen.getByText('123456789')).toBeInTheDocument();
    expect(screen.getByText('01.01.2025')).toBeInTheDocument();
    expect(screen.getByText('31.12.2025')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Fjern'));

    await waitFor(() => expect(fjernVerge).toHaveBeenCalledOnce());
    expect(lukkModal).toHaveBeenCalledOnce();
    expect(opprettVerge).not.toHaveBeenCalled();
  });
});

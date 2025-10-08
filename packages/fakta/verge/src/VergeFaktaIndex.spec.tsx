import { composeStories } from '@storybook/react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import * as stories from './VergeFaktaIndex.stories';

const { Default } = composeStories(stories);

describe('VergeFaktaIndex', () => {
  it('skal velge vergetype og bekrefte aksjonspunkt', async () => {
    const lagre = vi.fn();

    render(<Default submitCallback={lagre} />);

    expect(await screen.findByText('Fyll ut og kontroller vergeopplysninger')).toBeInTheDocument();
    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();

    await userEvent.selectOptions(screen.getByLabelText('Type verge'), 'ADVOKAT');

    const navnInput = screen.getByLabelText('Navn');
    await userEvent.type(navnInput, 'Espen Utvikler');

    const organisasjonsnummerInput = screen.getByLabelText('Organisasjonsnummer');
    await userEvent.type(organisasjonsnummerInput, '232232323');

    const fomInput = screen.getByLabelText('Fra og med');
    await userEvent.type(fomInput, '14.09.2022');
    fireEvent.blur(fomInput);

    const tomInput = screen.getByLabelText('Til og med');
    await userEvent.type(tomInput, '24.09.2022');
    fireEvent.blur(tomInput);

    const begrunnelseInput = screen.getByLabelText('Begrunn endringene');
    await userEvent.type(begrunnelseInput, 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    expect(lagre).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Dette er en begrunnelse',
      fnr: undefined,
      gyldigFom: '2022-09-14',
      gyldigTom: '2022-09-24',
      kode: AksjonspunktKode.AVKLAR_VERGE,
      navn: 'Espen Utvikler',
      organisasjonsnummer: '232232323',
      vergeType: 'ADVOKAT',
    });
  });
});

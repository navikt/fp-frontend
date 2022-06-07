import React from 'react';
import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import ModalWrapper from 'nav-frontend-modal';

import * as stories from './VirksomhetPapirsoknadIndex.stories';

const { Default } = composeStories(stories);

describe('<VirksomhetPapirsoknadIndex>', () => {
  ModalWrapper.setAppElement('body');

  it('skal velge at søker ikke har arbeidet i egen næringsvirksomhet', async () => {
    const lagre = jest.fn();

    render(<Default submitCallback={lagre} />);

    expect(await screen.findByText('Egen næringsvirksomhet')).toBeInTheDocument();

    userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findByText('Feltet må fylles ut')).toBeInTheDocument();

    userEvent.click(screen.getByText('Nei, søker har ikke arbeidet i egen næringsvirksomhet i løpet av de 10 siste månedene'));

    userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      egenVirksomhet: {
        harArbeidetIEgenVirksomhet: false,
      },
    });
  });

  it('skal velge at søker har arbeidet i egen næringsvirksomhet', async () => {
    const lagre = jest.fn();

    const utils = render(<Default submitCallback={lagre} />);

    expect(await screen.findByText('Egen næringsvirksomhet')).toBeInTheDocument();

    userEvent.click(screen.getByText('Ja, søker har arbeidet i egen næringsvirksomhet i løpet av de 10 siste månedene'));

    userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findByText('Listen må ha lengde større enn 1')).toBeInTheDocument();

    userEvent.click(screen.getByText('Legg til næringsvirksomhet'));

    expect(await screen.findByText('Navn på foretaket')).toBeInTheDocument();

    const navnPåForetaketInput = utils.getByLabelText('Navn på foretaket');
    userEvent.paste(navnPåForetaketInput, 'Bedrift1');

    userEvent.click(screen.getAllByText('Nei')[0]);

    userEvent.selectOptions(utils.getByLabelText('Hvilket land er virksomheten registrert i?'), 'AND');

    const fraOgMedInput = utils.getByLabelText('Fra og med');
    userEvent.paste(fraOgMedInput, '2022-06-01');
    fireEvent.blur(fraOgMedInput);

    const tilOgMedInput = utils.getByLabelText('Til og med');
    userEvent.paste(tilOgMedInput, '2022-06-03');
    fireEvent.blur(tilOgMedInput);

    userEvent.click(screen.getByText('Fiske'));

    userEvent.click(screen.getAllByText('Ja')[1]);

    userEvent.click(screen.getByText('Varig endring i næring'));

    const gjeldendeFomInput = utils.getByLabelText('Gjeldende f.o.m.');
    userEvent.paste(gjeldendeFomInput, '2022-05-03');
    fireEvent.blur(gjeldendeFomInput);

    userEvent.paste(utils.getByLabelText('Beskriv endringen i næring'), 'Dette er en endring');

    userEvent.paste(utils.getByLabelText('Årsinntekt'), '500000');

    userEvent.click(screen.getAllByText('Ja')[2]);

    userEvent.paste(utils.getByLabelText('Navn på regnskapsfører/revisor?'), 'Espen Utvikler');

    userEvent.paste(utils.getByLabelText('Telefonnummer til regnskapsfører/revisor?'), '555454534');

    userEvent.click(screen.getByText('Ja, har nære venner eller er i familie tilknyttet næringen'));

    userEvent.click(screen.getByText('Lagre'));

    expect(await screen.findByText('Navn på virksomhet')).toBeInTheDocument();

    userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(2));
    expect(lagre).toHaveBeenNthCalledWith(2, {
      egenVirksomhet: {
        harArbeidetIEgenVirksomhet: true,
        virksomheter: [{
          beskrivelseAvEndring: 'Dette er en endring',
          erNyIArbeidslivet: undefined,
          erNyoppstartet: undefined,
          familieEllerVennerTilknyttetNaringen: true,
          fom: '2022-06-01',
          tom: '2022-06-03',
          harRegnskapsforer: true,
          harVarigEndring: true,
          inntekt: 500000,
          landJobberFra: 'AND',
          navn: 'Bedrift1',
          navnRegnskapsforer: 'Espen Utvikler',
          tlfRegnskapsforer: '555454534',
          typeVirksomhet: {
            ANNEN: undefined,
            DAGMAMMA: undefined,
            FISKE: true,
            JORDBRUK_SKOGBRUK: undefined,
          },
          varigEndretEllerStartetSisteFireAr: true,
          varigEndringGjeldendeFom: '2022-05-03',
          virksomhetRegistrertINorge: false,
        }],
      },
    });
  });
});

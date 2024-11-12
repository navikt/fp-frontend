import { fireEvent, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';

import * as stories from './VirksomhetPapirsoknadIndex.stories';

const { Default } = composeStories(stories);

describe('<VirksomhetPapirsoknadIndex>', () => {
  it('skal velge at søker ikke har arbeidet i egen næringsvirksomhet', async () => {
    const lagre = vi.fn();

    await Default.run({
      parameters: {
        submitCallback: lagre,
      },
    });

    expect(await screen.findByText('Egen næringsvirksomhet')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findByText('Feltet må fylles ut')).toBeInTheDocument();

    await userEvent.click(
      screen.getByText('Nei, søker har ikke arbeidet i egen næringsvirksomhet i løpet av de 10 siste månedene'),
    );

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(lagre).toHaveBeenCalledOnce();
    expect(lagre).toHaveBeenCalledWith({
      egenVirksomhet: {
        harArbeidetIEgenVirksomhet: false,
      },
    });
  });

  it('skal velge at søker har arbeidet i egen næringsvirksomhet', async () => {
    const lagre = vi.fn();

    await Default.run({
      parameters: {
        submitCallback: lagre,
      },
    });
    expect(await screen.findByText('Egen næringsvirksomhet')).toBeInTheDocument();

    await userEvent.click(
      screen.getByText('Ja, søker har arbeidet i egen næringsvirksomhet i løpet av de 10 siste månedene'),
    );

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findByText('Listen må ha lengde større enn 1')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Legg til næringsvirksomhet'));

    expect(await screen.findByText('Navn på foretaket')).toBeInTheDocument();

    const navnPåForetaketInput = screen.getByLabelText('Navn på foretaket');
    await userEvent.type(navnPåForetaketInput, 'Bedrift1');

    await userEvent.click(screen.getAllByText('Nei')[0]);

    await userEvent.selectOptions(screen.getByLabelText('Hvilket land er virksomheten registrert i?'), 'AND');

    const fraOgMedInput = screen.getByLabelText('Fra og med');
    await userEvent.type(fraOgMedInput, '2022-06-01');
    fireEvent.blur(fraOgMedInput);

    const tilOgMedInput = screen.getByLabelText('Til og med');
    await userEvent.type(tilOgMedInput, '2022-06-03');
    fireEvent.blur(tilOgMedInput);

    await userEvent.click(screen.getByText('Fiske'));

    await userEvent.click(screen.getAllByText('Ja')[1]);

    await userEvent.click(screen.getByText('Varig endring i næring'));

    const gjeldendeFomInput = screen.getByLabelText('Gjeldende f.o.m.');
    await userEvent.type(gjeldendeFomInput, '2022-05-03');
    fireEvent.blur(gjeldendeFomInput);

    await userEvent.type(screen.getByLabelText('Beskriv endringen i næring'), 'Dette er en endring');

    await userEvent.type(screen.getByLabelText('Årsinntekt'), '500000');

    await userEvent.click(screen.getAllByText('Ja')[2]);

    await userEvent.type(screen.getByLabelText('Navn på regnskapsfører/revisor?'), 'Espen Utvikler');

    await userEvent.type(screen.getByLabelText('Telefonnummer til regnskapsfører/revisor?'), '555454534');

    await userEvent.click(screen.getByText('Ja, har nære venner eller er i familie tilknyttet næringen'));

    await userEvent.click(screen.getByText('Lagre'));

    expect(await screen.findByText('Navn på virksomhet')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(lagre).toHaveBeenCalledOnce();
    expect(lagre).toHaveBeenCalledWith({
      egenVirksomhet: {
        harArbeidetIEgenVirksomhet: true,
        virksomheter: [
          {
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
          },
        ],
      },
    });
  });
});

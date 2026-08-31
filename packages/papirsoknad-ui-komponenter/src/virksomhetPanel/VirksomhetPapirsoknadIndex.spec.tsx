import { composeStories } from '@storybook/react';
import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect } from 'vitest';

import * as stories from './VirksomhetPapirsoknadIndex.stories';

const { Default } = composeStories(stories);

describe('VirksomhetPapirsoknadIndex', () => {
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

    expect(lagre).toHaveBeenCalledExactlyOnceWith({
      egenVirksomhet: {
        harArbeidetIEgenVirksomhet: false,
      },
    });
  });

  it('skal velge at søker har arbeidet i egen næringsvirksomhet', { timeout: 50_000 }, async () => {
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

    expect(await screen.findByText('Søkers virksomheter')).toBeInTheDocument();
    expect(screen.getByText('Navn på foretaket')).toBeInTheDocument();

    const navnPåForetaketInput = screen.getByLabelText('Navn på foretaket');
    await userEvent.type(navnPåForetaketInput, 'Bedriften AS');

    await userEvent.click(screen.getAllByText('Nei')[0]!);

    await userEvent.selectOptions(screen.getByLabelText('Hvilket land er virksomheten registrert i?'), 'AND');

    await userEvent.type(screen.getByLabelText('Fra og med'), '01.06.2022');
    await userEvent.type(screen.getByLabelText('Til og med'), '03.06.2022');

    await userEvent.click(screen.getByLabelText('Fiske'));

    expect(
      screen.getByText('Er virksomheten blitt varig endret, nyoppstartet eller er søker ny i arbeidslivet?'),
    ).toBeInTheDocument();
    await userEvent.click(screen.getAllByText('Ja')[1]!);

    expect(screen.getByText('Årsak')).toBeInTheDocument();
    await userEvent.click(screen.getByLabelText('Varig endring i næring'));

    await userEvent.type(screen.getByLabelText('Gjeldende f.o.m.'), '03.05.2022');

    await userEvent.type(screen.getByLabelText('Beskriv endringen i næring'), 'Dette er en endring');

    await userEvent.type(screen.getByLabelText('Årsinntekt'), '500000');

    await userEvent.click(screen.getAllByText('Ja')[2]!);

    await userEvent.type(screen.getByLabelText('Navn på regnskapsfører/revisor?'), 'Espen Utvikler');

    await userEvent.type(screen.getByLabelText('Telefonnummer til regnskapsfører/revisor?'), '555454534');

    await userEvent.click(screen.getByText('Ja, har nære venner eller er i familie tilknyttet næringen'));

    await userEvent.click(screen.getByLabelText('Vis mindre'));

    expect(screen.getByText('Bedriften AS')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(lagre).toHaveBeenCalledExactlyOnceWith({
      egenVirksomhet: {
        harArbeidetIEgenVirksomhet: true,
        virksomheter: [
          {
            beskrivelseAvEndring: 'Dette er en endring',
            erNyIArbeidslivet: false,
            erNyoppstartet: false,
            familieEllerVennerTilknyttetNaringen: true,
            fom: '2022-06-01',
            tom: '2022-06-03',
            harRegnskapsforer: true,
            harVarigEndring: true,
            inntekt: 500_000,
            landJobberFra: 'AND',
            navn: 'Bedriften AS',
            navnRegnskapsforer: 'Espen Utvikler',
            tlfRegnskapsforer: '555454534',
            typeVirksomhet: {
              ANNEN: false,
              DAGMAMMA: false,
              FISKE: true,
              JORDBRUK_SKOGBRUK: false,
            },
            varigEndretEllerStartetSisteFireAr: true,
            varigEndringGjeldendeFom: '2022-05-03',
            virksomhetRegistrertINorge: false,
          },
        ],
      },
    });
  });

  it(
    'skal velge at søker har arbeidet i egen næringsvirksomhet og ikke oppgi virksomhet',
    { timeout: 30_000 },
    async () => {
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

      await userEvent.click(screen.getByLabelText('Slett rad'));

      await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

      expect(await screen.findByText('Det må registreres minst 1 virksomhet')).toBeInTheDocument();

      expect(lagre).toHaveBeenCalledTimes(0);
    },
  );

  it('skal vise feil ved for lang beskrivelseAvEndring', { timeout: 30_000 }, async () => {
    const lagre = vi.fn();

    await Default.run({
      parameters: {
        submitCallback: lagre,
      },
    });

    await userEvent.click(
      screen.getByText('Ja, søker har arbeidet i egen næringsvirksomhet i løpet av de 10 siste månedene'),
    );

    await userEvent.type(screen.getByLabelText('Navn på foretaket'), 'Bedriften AS');
    await userEvent.click(screen.getAllByText('Nei')[0]!);
    await userEvent.selectOptions(screen.getByLabelText('Hvilket land er virksomheten registrert i?'), 'AND');
    await userEvent.type(screen.getByLabelText('Fra og med'), '01.06.2022');
    await userEvent.type(screen.getByLabelText('Til og med'), '03.06.2022');
    await userEvent.click(screen.getByLabelText('Fiske'));
    await userEvent.click(screen.getAllByText('Ja')[1]!);
    await userEvent.click(screen.getByLabelText('Varig endring i næring'));
    await userEvent.type(screen.getByLabelText('Gjeldende f.o.m.'), '03.05.2022');

    const beskrivelseInput = screen.getByLabelText('Beskriv endringen i næring');
    fireEvent.change(beskrivelseInput, { target: { value: 'a'.repeat(4001) } });

    await userEvent.type(screen.getByLabelText('Årsinntekt'), '500000');
    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findByText('Du kan skrive maksimalt 4000 tegn')).toBeInTheDocument();
  });

  it('skal vise feil ved for lang navnRegnskapsforer og tlfRegnskapsforer', { timeout: 50_000 }, async () => {
    const lagre = vi.fn();

    await Default.run({
      parameters: {
        submitCallback: lagre,
      },
    });

    await userEvent.click(
      screen.getByText('Ja, søker har arbeidet i egen næringsvirksomhet i løpet av de 10 siste månedene'),
    );

    await userEvent.type(screen.getByLabelText('Navn på foretaket'), 'Bedriften AS');
    await userEvent.click(screen.getAllByText('Nei')[0]!);
    await userEvent.selectOptions(screen.getByLabelText('Hvilket land er virksomheten registrert i?'), 'AND');
    await userEvent.type(screen.getByLabelText('Fra og med'), '01.06.2022');
    await userEvent.type(screen.getByLabelText('Til og med'), '03.06.2022');
    await userEvent.click(screen.getByLabelText('Fiske'));
    await userEvent.click(screen.getAllByText('Ja')[1]!);
    await userEvent.click(screen.getByLabelText('Varig endring i næring'));
    await userEvent.type(screen.getByLabelText('Gjeldende f.o.m.'), '03.05.2022');
    await userEvent.type(screen.getByLabelText('Beskriv endringen i næring'), 'Dette er en endring');
    await userEvent.type(screen.getByLabelText('Årsinntekt'), '500000');
    await userEvent.click(screen.getAllByText('Ja')[2]!);

    const navnInput = screen.getByLabelText('Navn på regnskapsfører/revisor?');
    fireEvent.change(navnInput, { target: { value: 'A'.repeat(101) } });

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findByText('Du kan skrive maksimalt 100 tegn')).toBeInTheDocument();

    fireEvent.change(navnInput, { target: { value: 'Espen Revisor' } });

    const tlfInput = screen.getByLabelText('Telefonnummer til regnskapsfører/revisor?');
    fireEvent.change(tlfInput, { target: { value: '1'.repeat(31) } });

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findByText('Du kan skrive maksimalt 30 tegn')).toBeInTheDocument();
  });
});

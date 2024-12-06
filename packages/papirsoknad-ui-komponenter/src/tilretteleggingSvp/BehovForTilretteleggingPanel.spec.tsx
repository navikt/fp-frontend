import { composeStories } from '@storybook/react';
import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TilretteleggingType } from '@navikt/fp-kodeverk';

import * as stories from './BehovForTilretteleggingPanel.stories';

const { Default } = composeStories(stories);

describe('<BehovForTilretteleggingPanel>', () => {
  it('skal velge nei på alle de obligatoriske spørsmålene og da få feilmelding', async () => {
    const lagre = vi.fn();

    await Default.run({
      parameters: {
        submitCallback: lagre,
      },
    });

    expect(await screen.findByText('Behov for tilrettelegging')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findAllByText('Feltet må fylles ut')).toHaveLength(3);

    await userEvent.click(screen.getAllByText('Nei')[0]);
    await userEvent.click(screen.getAllByText('Nei')[1]);
    await userEvent.click(screen.getAllByText('Nei')[2]);

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findByText('Minst ett av spørsmålene må besvares med alternativ Ja')).toBeInTheDocument();

    expect(lagre).not.toHaveBeenCalled();
  });

  it('skal delvis fylle ut skjema og få feilmeldinger', async () => {
    const lagre = vi.fn();

    await Default.run({
      parameters: {
        submitCallback: lagre,
      },
    });

    expect(await screen.findByText('Behov for tilrettelegging')).toBeInTheDocument();

    await userEvent.click(screen.getAllByText('Ja')[0]);
    await userEvent.click(screen.getAllByText('Ja')[1]);
    await userEvent.click(screen.getAllByText('Ja')[2]);

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findAllByText('Feltet må fylles ut')).toHaveLength(13);

    expect(lagre).toHaveBeenCalledTimes(0);
  });

  it('skal søkes om tilrettelegging for alle arbeidstyper', { timeout: 30000 }, async () => {
    const lagre = vi.fn();

    await Default.run({
      parameters: {
        submitCallback: lagre,
      },
    });

    expect(await screen.findByText('Behov for tilrettelegging')).toBeInTheDocument();

    await userEvent.click(screen.getAllByText('Ja')[0]);
    await userEvent.click(screen.getAllByText('Ja')[1]);
    await userEvent.click(screen.getAllByText('Ja')[2]);

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findAllByText('Feltet må fylles ut')).toHaveLength(13);

    // Selvstendig næringsdrivende
    const næringsdrivende = within(
      screen
        .getByText('Søkes det om svangerskapspenger som selvstendig næringsdrivende?')
        .closest('fieldset') as HTMLElement,
    );

    await userEvent.type(
      næringsdrivende.getByLabelText('Jordmor/lege oppgir at tilrettelegging er nødvendig fra og med'),
      '11.01.2024',
    );
    await userEvent.selectOptions(
      næringsdrivende.getByLabelText('Behov for tilrettelegging'),
      TilretteleggingType.HEL_TILRETTELEGGING,
    );
    await userEvent.type(næringsdrivende.getByLabelText('Fra dato'), '01.01.2024');
    await userEvent.type(næringsdrivende.getByLabelText('Stillingsprosent'), '80');

    // Frilans
    const frilans = within(
      screen.getByText('Søkes det om svangerskapspenger som frilanser?').closest('fieldset') as HTMLElement,
    );

    await userEvent.type(
      frilans.getByLabelText('Jordmor/lege oppgir at tilrettelegging er nødvendig fra og med'),
      '12.02.2024',
    );
    await userEvent.selectOptions(
      frilans.getByLabelText('Behov for tilrettelegging'),
      TilretteleggingType.DELVIS_TILRETTELEGGING,
    );
    await userEvent.type(frilans.getByLabelText('Fra dato'), '02.02.2024');
    await userEvent.type(frilans.getByLabelText('Stillingsprosent'), '90');

    // Arbeidstaker
    const arbeidstaker = within(
      screen.getByText('Søkes det om svangerskapspenger som arbeidstaker?').closest('fieldset') as HTMLElement,
    );

    await userEvent.type(arbeidstaker.getByLabelText('Arbeidsgivers orgnr/fnr'), '000000000');
    await userEvent.type(
      arbeidstaker.getByLabelText('Jordmor/lege oppgir at tilrettelegging er nødvendig fra og med'),
      '13.03.2024',
    );
    await userEvent.selectOptions(
      arbeidstaker.getByLabelText('Behov for tilrettelegging'),
      TilretteleggingType.INGEN_TILRETTELEGGING,
    );
    await userEvent.type(arbeidstaker.getByLabelText('Fra dato'), '03.03.2024');
    await userEvent.type(arbeidstaker.getByLabelText('Stillingsprosent'), '100');

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(lagre).toHaveBeenCalledOnce();
    expect(lagre).toHaveBeenCalledWith({
      tilretteleggingArbeidsforhold: [
        {
          '@type': 'VI',
          behovsdato: '2024-03-13',
          organisasjonsnummer: '000000000',
          tilrettelegginger: [
            {
              dato: '2024-03-03',
              stillingsprosent: '100',
              tilretteleggingType: TilretteleggingType.INGEN_TILRETTELEGGING,
            },
          ],
        },
        {
          '@type': 'FR',
          behovsdato: '2024-02-12',
          tilrettelegginger: [
            {
              dato: '2024-02-02',
              stillingsprosent: '90',
              tilretteleggingType: TilretteleggingType.DELVIS_TILRETTELEGGING,
            },
          ],
        },
        {
          '@type': 'SN',
          behovsdato: '2024-01-11',
          tilrettelegginger: [
            {
              dato: '2024-01-01',
              stillingsprosent: '80',
              tilretteleggingType: TilretteleggingType.HEL_TILRETTELEGGING,
            },
          ],
        },
      ],
    });
  });
});

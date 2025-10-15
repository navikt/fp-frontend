import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './OmsorgOgForeldreansvarFaktaIndex.stories';

const { ÅpentAksjonspunktForOmsorgovertakelse, ÅpentAksjonspunktForAvklareVilkårForForeldreansvar } =
  composeStories(stories);

describe('OmsorgOgForeldreansvarFaktaIndex', () => {
  it('skal løse aksjonspunkt for omsorgsovertakelse', async () => {
    const lagre = vi.fn();

    render(<ÅpentAksjonspunktForOmsorgovertakelse submitCallback={lagre} />);

    expect(screen.getByText('Kontroller opplysningene om omsorgsovertakelse')).toBeInTheDocument();

    expect(screen.getByText('Antall barn')).toBeInTheDocument();
    expect(screen.getByText('Barn 1')).toBeInTheDocument();
    expect(screen.getByText('10.01.2019')).toBeInTheDocument();
    expect(screen.getByText('Barn 2')).toBeInTheDocument();
    expect(screen.getByText('11.01.2019')).toBeInTheDocument();

    expect(screen.getByText('Olga Utvikler')).toBeInTheDocument();
    expect(screen.getByText('Gateadresse 1, 1000 Oslo')).toBeInTheDocument();
    expect(screen.getByText('Espen Utvikler')).toBeInTheDocument();
    expect(screen.getByText('Dødsdato')).toBeInTheDocument();
    expect(screen.getByText('01.01.2021')).toBeInTheDocument();

    expect(screen.getByText('Rettighet')).toBeInTheDocument();

    expect(screen.getByText('Far søker')).toBeInTheDocument();
    expect(screen.getByText('Adopterer barnet eller barna alene')).toBeInTheDocument();
    expect(screen.getByText('Andre ytelser til mor')).toBeInTheDocument();
    expect(screen.getByText('Foreldrepenger: 01.01.2019 - 02.02.2019')).toBeInTheDocument();
    expect(screen.getByText('Svangerskapspenger: 03.02.2019 - 04.02.2019')).toBeInTheDocument();

    expect(screen.queryByText('Vurder opplysningene om foreldreansvar og omsorg')).not.toBeInTheDocument();
    expect(screen.getByText('Vurder opplysningene om omsorgsovertakelse')).toBeInTheDocument();

    const omsorgsovertakelseInput = screen.getByLabelText('Omsorgsovertakelsesdato');
    await userEvent.clear(omsorgsovertakelseInput);
    await userEvent.type(omsorgsovertakelseInput, '14.09.2022');

    expect(screen.getByText('Velg vilkår som skal anvendes')).toBeInTheDocument();
    const radioKnapp = screen.getByRole('radio', { name: 'Omsorg §14-17 tredje ledd' });
    expect(radioKnapp).not.toBeChecked();
    await userEvent.click(radioKnapp);
    expect(radioKnapp).toBeChecked();

    expect(
      await screen.findByText(
        'Dersom mor dør i forbindelse med fødselen eller omsorgsovertakelsen, har faren rett til ' +
          'engangsstønad. Det er et vilkår at han har omsorgen for barnet og at stønaden ikke allerede er utbetalt til moren',
      ),
    ).toBeInTheDocument();

    await userEvent.type(screen.getByLabelText('Begrunn endringene'), 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Dette er en begrunnelse',
      kode: '5008',
      omsorgsovertakelseDato: '2022-09-14',
      vilkarType: 'FP_VK_5',
    });
  });

  it('skal løse aksjonspunkt for avklaring av vilkår', async () => {
    const lagre = vi.fn();

    render(<ÅpentAksjonspunktForAvklareVilkårForForeldreansvar submitCallback={lagre} />);

    expect(screen.getByText('Antall barn')).toBeInTheDocument();
    expect(screen.getByText('Fødselsdato')).toBeInTheDocument();
    expect(screen.getByText('Barn 1')).toBeInTheDocument();
    expect(screen.getByText('10.01.2019')).toBeInTheDocument();
    expect(screen.getByText('Barn 2')).toBeInTheDocument();
    expect(screen.getByText('11.01.2019')).toBeInTheDocument();

    expect(screen.getByText('Olga Utvikler')).toBeInTheDocument();
    expect(screen.getByText('Gateadresse 1, 1000 Oslo')).toBeInTheDocument();
    expect(screen.getByText('Espen Utvikler')).toBeInTheDocument();
    expect(screen.getByText('Dødsdato')).toBeInTheDocument();
    expect(screen.getByText('01.01.2021')).toBeInTheDocument();

    expect(screen.queryByText('Rettighet')).not.toBeInTheDocument();

    expect(await screen.findByText('Kontroller opplysninger om foreldreansvar og omsorg')).toBeInTheDocument();
    expect(screen.queryByText('Velg vilkår som skal anvendes')).not.toBeInTheDocument();

    expect(screen.getByText('Vurder opplysninger om foreldreansvar og omsorg')).toBeInTheDocument();
    expect(screen.queryByText('Vurder opplysningene om omsorgsovertakelse')).not.toBeInTheDocument();

    const omsorgsovertakelseInput = screen.getByLabelText('Omsorgsovertakelsesdato');
    await userEvent.clear(omsorgsovertakelseInput);
    await userEvent.type(omsorgsovertakelseInput, '14.09.2022');

    const foreldreansvarInput = screen.getByLabelText('Foreldreansvarsdato');
    await userEvent.clear(foreldreansvarInput);
    await userEvent.type(foreldreansvarInput, '20.09.2022');

    const begrunnValgInput = screen.getByLabelText('Begrunn endringene');
    await userEvent.type(begrunnValgInput, 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Dette er en begrunnelse',
      foreldreansvarDato: '2022-09-20',
      kode: '5054',
      omsorgsovertakelseDato: '2022-09-14',
    });
  });
});

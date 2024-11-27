import React from 'react';

import { composeStories } from '@storybook/react';
import { fireEvent,render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './OmsorgOgForeldreansvarFaktaIndex.stories';

const { ÅpentAksjonspunktForOmsorgovertakelse, ÅpentAksjonspunktForAvklareVilkårForForeldreansvar } =
  composeStories(stories);

describe('<OmsorgOgForeldreansvarFaktaIndex>', () => {
  it('skal løse aksjonspunkt for omsorgsovertakelse', async () => {
    const lagre = vi.fn();

    const utils = render(<ÅpentAksjonspunktForOmsorgovertakelse submitCallback={lagre} />);

    expect(
      await screen.findByText('Kontroller opplysningene om omsorgsovertakelse. Velg vilkår som skal anvendes'),
    ).toBeInTheDocument();

    expect(screen.getByText('Opplysninger om omsorg')).toBeInTheDocument();
    const omsorgsovertakelseInput = utils.getByLabelText('Dato for omsorgsovertakelse');
    await userEvent.type(omsorgsovertakelseInput, '14.09.2022');
    fireEvent.blur(omsorgsovertakelseInput);
    expect(screen.getByText('Antall barn')).toBeInTheDocument();

    expect(screen.getByText('Rettighet')).toBeInTheDocument();
    expect(screen.getByText('Adopterer barnet eller barna alene')).toBeInTheDocument();
    expect(screen.getByText('Foreldrepenger iverksatt 01.01.2019')).toBeInTheDocument();

    expect(screen.getByText(/Barn 1 fødselsdato/)).toBeInTheDocument();
    expect(screen.getByText('10.01.2019')).toBeInTheDocument();
    expect(screen.getByText(/Barn 2 fødselsdato/)).toBeInTheDocument();
    expect(screen.getByText('11.01.2019')).toBeInTheDocument();

    expect(screen.getByText('Olga Utvikler')).toBeInTheDocument();
    expect(screen.getByText('Gateadresse 1, 1000 Oslo')).toBeInTheDocument();
    expect(screen.getByText('Espen Utvikler')).toBeInTheDocument();
    expect(screen.getByText('Dødsdato')).toBeInTheDocument();
    expect(screen.getByText('01.01.2021')).toBeInTheDocument();

    expect(screen.getByText('Velg vilkår som skal anvendes')).toBeInTheDocument();
    await userEvent.selectOptions(screen.getByRole('combobox', { hidden: true }), 'FP_VK_5');

    expect(
      await screen.findByText(
        'Dersom mor dør i forbindelse med fødselen eller omsorgsovertakelsen, har faren rett til ' +
          'engangsstønad. Det er et vilkår at han har omsorgen for barnet og at stønaden ikke allerede er utbetalt til moren',
      ),
    ).toBeInTheDocument();

    const begrunnValgInput = utils.getByLabelText('Begrunn valg av vilkår');
    await userEvent.type(begrunnValgInput, 'Dette er en begrunnelse');

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

    const utils = render(<ÅpentAksjonspunktForAvklareVilkårForForeldreansvar submitCallback={lagre} />);

    expect(await screen.findByText('Kontroller opplysninger om foreldreansvar og omsorg')).toBeInTheDocument();
    expect(screen.queryByText('Velg vilkår som skal anvendes')).not.toBeInTheDocument();

    expect(screen.getByText('Foreldreansvar og omsorg')).toBeInTheDocument();
    expect(screen.queryByText('Opplysninger om omsorg')).not.toBeInTheDocument();
    const omsorgsovertakelseInput = utils.getByLabelText('Dato for omsorgsovertakelse');
    await userEvent.type(omsorgsovertakelseInput, '14.09.2022');
    fireEvent.blur(omsorgsovertakelseInput);
    const foreldreansvarInput = utils.getByLabelText('Dato for foreldreansvar');
    await userEvent.type(foreldreansvarInput, '20.09.2022');
    fireEvent.blur(foreldreansvarInput);
    expect(screen.getByText('Antall barn')).toBeInTheDocument();

    expect(screen.queryByText('Rettighet')).not.toBeInTheDocument();

    expect(screen.getByText(/Barn 1 fødselsdato/)).toBeInTheDocument();
    expect(screen.getByText('10.01.2019')).toBeInTheDocument();
    expect(screen.getByText(/Barn 2 fødselsdato/)).toBeInTheDocument();
    expect(screen.getByText('11.01.2019')).toBeInTheDocument();

    expect(screen.getByText('Olga Utvikler')).toBeInTheDocument();
    expect(screen.getByText('Gateadresse 1, 1000 Oslo')).toBeInTheDocument();
    expect(screen.getByText('Espen Utvikler')).toBeInTheDocument();
    expect(screen.getByText('Dødsdato')).toBeInTheDocument();
    expect(screen.getByText('01.01.2021')).toBeInTheDocument();

    const begrunnValgInput = utils.getByLabelText('Begrunn endringene');
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

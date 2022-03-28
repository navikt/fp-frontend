import React from 'react';
import {
  render, screen, waitFor, fireEvent,
} from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './OmsorgOgForeldreansvarFaktaIndex.stories';

const { ÅpentAksjonspunktForOmsorgovertakelse, ÅpentAksjonspunktForAvklareVilkårForForeldreansvar } = composeStories(stories);

describe('<OmsorgOgForeldreansvarFaktaIndex>', () => {
  it('skal løse aksjonspunkt for omsorgsovertakelse', async () => {
    const lagre = jest.fn();

    const utils = render(<ÅpentAksjonspunktForOmsorgovertakelse submitCallback={lagre} />);

    expect(await screen.findByText('Kontroller opplysningene om omsorgsovertakelse')).toBeInTheDocument();
    expect(screen.getAllByText('Velg vilkår som skal anvendes')[0]).toBeInTheDocument();

    expect(screen.getByText('Opplysninger om omsorg')).toBeInTheDocument();
    const omsorgsovertakelseInput = utils.getByLabelText('Dato for omsorgsovertakelse');
    userEvent.paste(omsorgsovertakelseInput, '14.09.2022');
    fireEvent.blur(omsorgsovertakelseInput);
    expect(screen.getByText('Antall barn')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();

    expect(screen.getByText('Rettighet')).toBeInTheDocument();
    expect(screen.getByText('Adopterer barnet eller barna alene')).toBeInTheDocument();
    expect(screen.getByText('Foreldrepenger iverksatt 01.01.2019')).toBeInTheDocument();

    expect(screen.getByText(/Barn 1 fødselsdato/)).toBeInTheDocument();
    expect(screen.getByText('10.01.2019')).toBeInTheDocument();
    expect(screen.getByText(/Barn 2 fødselsdato/)).toBeInTheDocument();
    expect(screen.getByText('11.01.2019')).toBeInTheDocument();

    expect(screen.getByText('Olga Utvikler')).toBeInTheDocument();
    expect(screen.getByText('Gateadresse 1, 1000 Oslo Norge')).toBeInTheDocument();
    expect(screen.getByText('Espen Utvikler')).toBeInTheDocument();
    expect(screen.getByText('Dato for fars død')).toBeInTheDocument();
    expect(screen.getByText('01.01.2021')).toBeInTheDocument();

    expect(screen.getAllByText('Velg vilkår som skal anvendes')[1]).toBeInTheDocument();
    userEvent.selectOptions(screen.getByRole('combobox', { hidden: true }), 'FP_VK_5');

    expect(await screen.findByText(
      'Dersom mor dør i forbindelse med fødselen eller omsorgsovertakelsen, har faren rett til '
      + 'engangsstønad. Det er et vilkår at han har omsorgen for barnet og at stønaden ikke allerede er utbetalt til moren',
    )).toBeInTheDocument();

    const begrunnValgInput = utils.getByLabelText('Begrunn valg av vilkår');
    userEvent.paste(begrunnValgInput, 'Dette er en begrunnelse');

    userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Dette er en begrunnelse',
      kode: '5008',
      omsorgsovertakelseDato: '2022-09-14',
      vilkarType: 'FP_VK_5',
    });
  });

  it('skal løse aksjonspunkt for avklaring av vilkår', async () => {
    const lagre = jest.fn();

    const utils = render(<ÅpentAksjonspunktForAvklareVilkårForForeldreansvar submitCallback={lagre} />);

    expect(await screen.findByText('Kontroller opplysninger om foreldreansvar og omsorg')).toBeInTheDocument();
    expect(screen.queryByText('Velg vilkår som skal anvendes')).not.toBeInTheDocument();

    expect(screen.getByText('Foreldreansvar og omsorg')).toBeInTheDocument();
    expect(screen.queryByText('Opplysninger om omsorg')).not.toBeInTheDocument();
    const omsorgsovertakelseInput = utils.getByLabelText('Dato for omsorgsovertakelse');
    userEvent.paste(omsorgsovertakelseInput, '14.09.2022');
    fireEvent.blur(omsorgsovertakelseInput);
    const foreldreansvarInput = utils.getByLabelText('Dato for foreldreansvar');
    userEvent.paste(foreldreansvarInput, '20.09.2022');
    fireEvent.blur(foreldreansvarInput);
    expect(screen.getByText('Antall barn')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();

    expect(screen.queryByText('Rettighet')).not.toBeInTheDocument();

    expect(screen.getByText(/Barn 1 fødselsdato/)).toBeInTheDocument();
    expect(screen.getByText('10.01.2019')).toBeInTheDocument();
    expect(screen.getByText(/Barn 2 fødselsdato/)).toBeInTheDocument();
    expect(screen.getByText('11.01.2019')).toBeInTheDocument();

    expect(screen.getByText('Olga Utvikler')).toBeInTheDocument();
    expect(screen.getByText('Gateadresse 1, 1000 Oslo Norge')).toBeInTheDocument();
    expect(screen.getByText('Espen Utvikler')).toBeInTheDocument();
    expect(screen.getByText('Dato for fars død')).toBeInTheDocument();
    expect(screen.getByText('01.01.2021')).toBeInTheDocument();

    const begrunnValgInput = utils.getByLabelText('Begrunn endringene');
    userEvent.paste(begrunnValgInput, 'Dette er en begrunnelse');

    userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Dette er en begrunnelse',
      foreldreansvarDato: '2022-09-20',
      kode: '5054',
      omsorgsovertakelseDato: '2022-09-14',
    });
  });
});

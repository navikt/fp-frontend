import React from 'react';
import {
  render, screen, waitFor,
} from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './AdopsjonFaktaIndex.stories';

const {
  AksjonspunktForAdopsjonsvilkåret,
  AksjonspunktForOmSøkerErMannSomAdoptererAlene,
  AksjonspunktForOmAdopsjonGjelderEktefellesBarn,
  IkkeVisBarnetsAnkomstDatoForEngangsstønad,
} = composeStories(stories);

describe('<AdopsjonFaktaIndex>', () => {
  it('skal kontrollere opplysninger fra adopsjonsdokumentasjonen og så bekrefte', async () => {
    const lagre = jest.fn();

    const utils = render(<AksjonspunktForAdopsjonsvilkåret submitCallback={lagre} />);

    expect(await screen.findByText('Kontroller mot opplysningene fra adopsjonsdokumentasjonen')).toBeInTheDocument();
    expect(screen.getByText('Adopsjonsopplysninger fra søknad')).toBeInTheDocument();
    expect(screen.queryByText('Ektefelles/samboers barn')).not.toBeInTheDocument();
    expect(screen.queryByText('Mann adopterer')).not.toBeInTheDocument();

    expect(await screen.findByText('Barnet er over 15 år ved omsorgsovertakelsen')).toBeInTheDocument();

    expect(screen.getByText('Dato for barnets ankomst til Norge (ved utenlandsadopsjon)')).toBeInTheDocument();

    expect(screen.getByText('Antall barn som fyller vilkåret')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();

    const begrunnValgInput = utils.getByLabelText('Begrunn endringene');
    userEvent.type(begrunnValgInput, 'Dette er en begrunnelse');

    userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [{
      begrunnelse: 'Dette er en begrunnelse',
      fodselsdatoer: {
        1: '2018-01-01',
        2: '2000-01-02',
      },
      kode: '5004',
      omsorgsovertakelseDato: '2022-09-14',
    }]);
  });

  it('skal kontrollere opplysninger fra adopsjonsdokumentasjonen og mann adopterer og så bekrefte', async () => {
    const lagre = jest.fn();

    const utils = render(<AksjonspunktForOmSøkerErMannSomAdoptererAlene submitCallback={lagre} />);

    expect(await screen.findByText('Kontroller mot opplysningene fra adopsjonsdokumentasjonen')).toBeInTheDocument();
    expect(screen.getByText('Vurder om mann adopterer alene')).toBeInTheDocument();

    expect(screen.getByText('Adopsjonsopplysninger fra søknad')).toBeInTheDocument();

    expect(screen.queryByText('Ektefelles/samboers barn')).not.toBeInTheDocument();
    expect(screen.getByText('Mann adopterer')).toBeInTheDocument();
    userEvent.click(screen.getByText('Adopterer alene'));

    const begrunnValgInput = utils.getByLabelText('Begrunn endringene');
    userEvent.type(begrunnValgInput, 'Dette er en begrunnelse');

    userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [{
      begrunnelse: 'Dette er en begrunnelse',
      fodselsdatoer: {
        1: '2018-01-01',
        2: '2000-01-02',
      },
      kode: '5004',
      omsorgsovertakelseDato: '2022-09-14',
    }, {
      begrunnelse: 'Dette er en begrunnelse',
      kode: '5006',
      mannAdoptererAlene: true,
    }]);
  });

  it('skal kontrollere opplysninger fra adopsjonsdokumentasjonen og ektefelles barn og så bekrefte', async () => {
    const lagre = jest.fn();

    const utils = render(<AksjonspunktForOmAdopsjonGjelderEktefellesBarn submitCallback={lagre} />);

    expect(await screen.findByText('Kontroller mot opplysningene fra adopsjonsdokumentasjonen')).toBeInTheDocument();
    expect(screen.getAllByText('Vurder om det er ektefelles/samboers barn som adopteres')).toHaveLength(2);

    expect(screen.getByText('Adopsjonsopplysninger fra søknad')).toBeInTheDocument();

    expect(screen.queryByText('Mann adopterer')).not.toBeInTheDocument();
    expect(screen.getAllByText('Ektefelles/samboers barn')).toHaveLength(2);
    userEvent.click(screen.getByText('Ikke ektefelles/samboers barn'));

    const begrunnValgInput = utils.getByLabelText('Begrunn endringene');
    userEvent.type(begrunnValgInput, 'Dette er en begrunnelse');

    userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [{
      begrunnelse: 'Dette er en begrunnelse',
      fodselsdatoer: {
        1: '2018-01-01',
        2: '2000-01-02',
      },
      kode: '5004',
      omsorgsovertakelseDato: '2022-09-14',
    }, {
      begrunnelse: 'Dette er en begrunnelse',
      kode: '5005',
      ektefellesBarn: false,
    }]);
  });

  it('skal ikke vise felt for barnets ankomst når fagsak er engangsstønad', async () => {
    const lagre = jest.fn();

    render(<IkkeVisBarnetsAnkomstDatoForEngangsstønad submitCallback={lagre} />);

    expect(await screen.findByText('Kontroller mot opplysningene fra adopsjonsdokumentasjonen')).toBeInTheDocument();
    expect(screen.queryByText('Dato for barnets ankomst til Norge (ved utenlandsadopsjon)')).not.toBeInTheDocument();
  });
});

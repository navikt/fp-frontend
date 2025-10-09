import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './AdopsjonFaktaIndex.stories';

const {
  AksjonspunktForAdopsjonsvilkåret,
  AksjonspunktForOmSøkerErMannSomAdoptererAlene,
  AksjonspunktForOmAdopsjonGjelderEktefellesBarn,
  IkkeVisBarnetsAnkomstDatoForEngangsstønad,
} = composeStories(stories);

describe('AdopsjonFaktaIndex', () => {
  it('skal kontrollere opplysninger fra adopsjonsdokumentasjonen og så bekrefte', async () => {
    const lagre = vi.fn();

    const utils = render(<AksjonspunktForAdopsjonsvilkåret submitCallback={lagre} />);

    expect(await screen.findByText('Kontroller mot opplysningene fra adopsjonsdokumentasjonen')).toBeInTheDocument();
    expect(screen.getByText('Adopsjonsopplysninger fra søknad')).toBeInTheDocument();
    expect(screen.queryByText('Ektefelles/samboers barn')).not.toBeInTheDocument();
    expect(screen.queryByText('Mann adopterer')).not.toBeInTheDocument();

    expect(await screen.findByText('Barnet er over 15 år ved omsorgsovertakelsen')).toBeInTheDocument();

    expect(screen.getByText('Barnets ankomstdato til Norge')).toBeInTheDocument();
    expect(screen.getByText('ved utenlandsadopsjon')).toBeInTheDocument();

    expect(screen.getByText('Antall barn som fyller vilkåret')).toBeInTheDocument();

    const begrunnValgInput = utils.getByLabelText('Begrunn endringene');
    await userEvent.type(begrunnValgInput, 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [
      {
        begrunnelse: 'Dette er en begrunnelse',
        fodselsdatoer: {
          1: '2018-01-01',
          2: '2000-01-02',
        },
        kode: '5004',
        omsorgsovertakelseDato: '2022-09-14',
      },
    ]);
  });

  it('skal kontrollere opplysninger fra adopsjonsdokumentasjonen og mann adopterer og så bekrefte', async () => {
    const lagre = vi.fn();

    const utils = render(<AksjonspunktForOmSøkerErMannSomAdoptererAlene submitCallback={lagre} />);

    expect(await screen.findByText('Kontroller mot opplysningene fra adopsjonsdokumentasjonen')).toBeInTheDocument();
    expect(screen.getByText('Vurder om mann adopterer alene')).toBeInTheDocument();

    expect(screen.getByText('Adopsjonsopplysninger fra søknad')).toBeInTheDocument();

    expect(screen.queryByText('Ektefelles/samboers barn')).not.toBeInTheDocument();
    expect(screen.getByText('Mann adopterer')).toBeInTheDocument();
    await userEvent.click(screen.getByText('Ja, adopterer alene'));

    const begrunnValgInput = utils.getByLabelText('Begrunn endringene');
    await userEvent.type(begrunnValgInput, 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [
      {
        begrunnelse: 'Dette er en begrunnelse',
        fodselsdatoer: {
          1: '2018-01-01',
          2: '2000-01-02',
        },
        kode: '5004',
        omsorgsovertakelseDato: '2022-09-14',
      },
      {
        begrunnelse: 'Dette er en begrunnelse',
        kode: '5006',
        mannAdoptererAlene: true,
      },
    ]);
  });

  it('skal kontrollere opplysninger fra adopsjonsdokumentasjonen og ektefelles barn og så bekrefte', async () => {
    const lagre = vi.fn();

    const utils = render(<AksjonspunktForOmAdopsjonGjelderEktefellesBarn submitCallback={lagre} />);

    expect(await screen.findByText('Kontroller mot opplysningene fra adopsjonsdokumentasjonen')).toBeInTheDocument();
    expect(screen.getByText('Vurder om det er ektefelles/samboers barn som adopteres')).toBeInTheDocument();

    expect(screen.getByText('Adopsjonsopplysninger fra søknad')).toBeInTheDocument();

    expect(screen.queryByText('Mann adopterer')).not.toBeInTheDocument();
    expect(screen.getByText('Ektefelles/samboers barn')).toBeInTheDocument();
    expect(screen.getByText('Er det ektefelles/samboers barn som adopteres?')).toBeInTheDocument();
    await userEvent.click(screen.getByText('Nei, det er ikke ektefelles/samboers barn'));

    const begrunnValgInput = utils.getByLabelText('Begrunn endringene');
    await userEvent.type(begrunnValgInput, 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [
      {
        begrunnelse: 'Dette er en begrunnelse',
        fodselsdatoer: {
          1: '2018-01-01',
          2: '2000-01-02',
        },
        kode: '5004',
        omsorgsovertakelseDato: '2022-09-14',
      },
      {
        begrunnelse: 'Dette er en begrunnelse',
        kode: '5005',
        ektefellesBarn: false,
      },
    ]);
  });

  it('skal ikke vise felt for barnets ankomst når fagsak er engangsstønad', async () => {
    const lagre = vi.fn();

    render(<IkkeVisBarnetsAnkomstDatoForEngangsstønad submitCallback={lagre} />);

    expect(await screen.findByText('Kontroller mot opplysningene fra adopsjonsdokumentasjonen')).toBeInTheDocument();
    expect(screen.queryByText('Barnets ankomstdato til Norge')).not.toBeInTheDocument();
  });
});

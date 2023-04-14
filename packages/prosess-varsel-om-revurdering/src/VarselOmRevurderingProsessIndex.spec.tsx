import React from 'react';
import moment from 'moment';
import { Modal } from '@navikt/ds-react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';

import { ISO_DATE_FORMAT } from '@navikt/ft-utils';

import * as stories from './VarselOmRevurderingProsessIndex.stories';

const { ForFørstegangsbehandling, ForRevurdering } = composeStories(stories);

describe('<VarselOmRevurderingProsessIndex>', () => {
  Modal.setAppElement('body');
  it('skal for førstegangsbehandling velge å ikke sende varsel til søker og så bekrefte', async () => {
    const lagre = vi.fn();

    const utils = render(<ForFørstegangsbehandling submitCallback={lagre} />);

    expect(await screen.findByText('Varsel om revurdering')).toBeInTheDocument();
    expect(screen.getByText('Vurder om varsel om revurdering skal sendes til søker')).toBeInTheDocument();

    expect(screen.getByText('Opplysninger om fødsel fra søknaden')).toBeInTheDocument();
    expect(screen.getByText('Utstedt dato')).toBeInTheDocument();
    expect(screen.getByText('02.01.2019')).toBeInTheDocument();
    expect(screen.getAllByText('Fødselsdato')).toHaveLength(2);
    expect(screen.getAllByText('10.01.2019')).toHaveLength(2);
    expect(screen.getByText('Antall barn')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();

    expect(screen.getByText('Opplysninger om fødsel fra folkeregisteret')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Ikke send varsel til søker'));

    const vurderingInput = utils.getByLabelText('Begrunnelse');
    await userEvent.type(vurderingInput, 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Dette er en begrunnelse',
      kode: '5026',
      sendVarsel: false,
    });
  });

  it('skal for førstegangsbehandling velge å sende varsel til søker og så bekrefte', async () => {
    const lagre = vi.fn();
    const forhåndsvis = vi.fn();

    const utils = render(<ForFørstegangsbehandling submitCallback={lagre} previewCallback={forhåndsvis} />);

    expect(await screen.findByText('Varsel om revurdering')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Send varsel til søker'));

    const fritekstInput = utils.getByLabelText('Fritekst i brev');
    await userEvent.type(fritekstInput, 'Dette er en fritekst');

    const vurderingInput = utils.getByLabelText('Begrunnelse');
    await userEvent.type(vurderingInput, 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Forhåndsvis'));

    await waitFor(() => expect(forhåndsvis).toHaveBeenCalledTimes(1));
    expect(forhåndsvis).toHaveBeenNthCalledWith(1, {
      dokumentMal: 'VARREV',
      fritekst: 'Dette er en fritekst',
      mottaker: '',
    });

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    expect(await screen.findByText('Behandlingen settes på vent med frist')).toBeInTheDocument();

    await userEvent.selectOptions(utils.getByLabelText('Årsak'), 'AVV_DOK');

    await userEvent.click(screen.getByText('OK'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Dette er en begrunnelse',
      frist: moment().add(28, 'days').format(ISO_DATE_FORMAT),
      fritekst: 'Dette er en fritekst',
      kode: '5026',
      sendVarsel: true,
      ventearsak: 'AVV_DOK',
    });
  });

  it('skal for revurdering velge å ikke sende varsel til søker og så bekrefte', async () => {
    const lagre = vi.fn();

    const utils = render(<ForRevurdering submitCallback={lagre} />);

    expect(await screen.findByText('Varsel om revurdering')).toBeInTheDocument();
    expect(screen.getByText('Vurder om varsel om revurdering skal sendes til søker')).toBeInTheDocument();

    expect(screen.getByText('Vedtak')).toBeInTheDocument();
    expect(screen.getByText('Termindato')).toBeInTheDocument();
    expect(screen.getByText('01.01.2019')).toBeInTheDocument();
    expect(screen.getByText('Antall barn')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();

    expect(screen.getByText('Fødselsdato')).toBeInTheDocument();
    expect(screen.getByText('10.01.2019')).toBeInTheDocument();

    expect(screen.getByText('Opplysninger om fødsel fra folkeregisteret')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Ikke send varsel til søker'));

    const vurderingInput = utils.getByLabelText('Begrunnelse');
    await userEvent.type(vurderingInput, 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Dette er en begrunnelse',
      kode: '5026',
      sendVarsel: false,
    });
  });
});

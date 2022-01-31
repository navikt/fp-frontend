import React from 'react';
import Modal from 'nav-frontend-modal';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import dokumentMalType from '@fpsak-frontend/kodeverk/src/dokumentMalType';
import * as stories from './VedtakProsessIndex.stories';

const {
  InnvilgetForeldrepengerTilGodkjenningForSaksbehandler,
  AvslåttForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring,
  TeksterForAksjonspunkterSomSaksbehandlerMåTaStillingTil,
  InnvilgetEngangsstønadTilGodkjenningForSaksbehandlerUtenOverstyring,
  InnvilgetRevurderingForeldrepengerTilGodkjenningForSaksbehandlerUtenOverstyring,
  GodkjentForeldrepengerMedManueltBrevForSaksbehandlerMedOverstyring,
} = composeStories(stories);

describe('<VedtakProsessIndex>', () => {
  Modal.setAppElement('body');
  it('skal forhåndsvise innvilget vedtaksbrev og så fatte vedtak', async () => {
    const lagre = jest.fn();
    const forhåndsvis = jest.fn();

    render(<InnvilgetForeldrepengerTilGodkjenningForSaksbehandler submitCallback={lagre} previewCallback={forhåndsvis} />);

    expect(await screen.findByText('Vedtak')).toBeInTheDocument();
    expect(screen.getByText('Foreldrepenger er innvilget')).toBeInTheDocument();
    expect(screen.getByText('Rediger vedtaksbrev')).toBeInTheDocument();

    userEvent.click(screen.getByText('Automatisk vedtaksbrev'));

    await waitFor(() => expect(forhåndsvis).toHaveBeenCalledTimes(1));
    expect(forhåndsvis).toHaveBeenNthCalledWith(1, {
      dokumentMal: undefined,
      fritekst: undefined,
      gjelderVedtak: true,
      tittel: undefined,
      automatiskVedtaksbrev: true,
      vedtaksbrev: 'AUTOMATISK',
    });

    userEvent.click(screen.getByText('Fatt vedtak'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [{
      begrunnelse: undefined,
      fritekstBrev: undefined,
      kode: '5015',
      overskrift: undefined,
      skalBrukeOverstyrendeFritekstBrev: false,
    }]);
  });

  it('skal redigere innvilget vedtaksbrev, forhåndsvise og så fatte vedtak', async () => {
    const lagre = jest.fn();
    const forhåndsvis = jest.fn();

    const utils = render(<InnvilgetForeldrepengerTilGodkjenningForSaksbehandler submitCallback={lagre} previewCallback={forhåndsvis} />);

    expect(await screen.findByText('Vedtak')).toBeInTheDocument();

    userEvent.click(screen.getByText('Rediger vedtaksbrev'));

    expect(await screen.findByText('Manuelt vedtaksbrev')).toBeInTheDocument();
    expect(screen.getByText('Tekst fra det automatisk genererte brevet kan kopieres og limes inn i det manuelle brevet')).toBeInTheDocument();

    userEvent.click(screen.getByText('Fatt vedtak'));

    expect(await screen.findAllByText('Feltet må fylles ut')).toHaveLength(2);

    const overskriftInput = utils.getByLabelText('Overskrift');
    userEvent.type(overskriftInput, 'Dette er en overskrift');

    const innholdInput = utils.getByLabelText('Innhold i brev til søker');
    userEvent.type(innholdInput, 'Dette er innhold');

    await waitFor(() => expect(screen.queryByText('Feltet må fylles ut')).not.toBeInTheDocument());

    userEvent.click(screen.getByText('Forhåndsvis manuelt brev'));

    await waitFor(() => expect(forhåndsvis).toHaveBeenCalledTimes(1));
    expect(forhåndsvis).toHaveBeenNthCalledWith(1, {
      dokumentMal: dokumentMalType.FRITKS,
      fritekst: 'Dette er innhold',
      gjelderVedtak: true,
      tittel: 'Dette er en overskrift',
      vedtaksbrev: undefined,
    });

    userEvent.click(screen.getByText('Fatt vedtak'));
    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [{
      begrunnelse: undefined,
      fritekstBrev: 'Dette er innhold',
      kode: '5015',
      overskrift: 'Dette er en overskrift',
      skalBrukeOverstyrendeFritekstBrev: true,
    }]);
  });

  it('skal redigere innvilget vedtaksbrev, forkaste det via modal og så fatte vedtak', async () => {
    const lagre = jest.fn();

    const utils = render(<InnvilgetForeldrepengerTilGodkjenningForSaksbehandler submitCallback={lagre} />);

    expect(await screen.findByText('Vedtak')).toBeInTheDocument();

    userEvent.click(screen.getByText('Rediger vedtaksbrev'));

    expect(await screen.findByText('Manuelt vedtaksbrev')).toBeInTheDocument();
    expect(screen.getByText('Tekst fra det automatisk genererte brevet kan kopieres og limes inn i det manuelle brevet')).toBeInTheDocument();

    userEvent.click(screen.getByText('Fatt vedtak'));

    expect(await screen.findAllByText('Feltet må fylles ut')).toHaveLength(2);

    const overskriftInput = utils.getByLabelText('Overskrift');
    userEvent.type(overskriftInput, 'Dette er en overskrift');

    const innholdInput = utils.getByLabelText('Innhold i brev til søker');
    userEvent.type(innholdInput, 'Dette er innhold');

    await waitFor(() => expect(screen.queryByText('Feltet må fylles ut')).not.toBeInTheDocument());

    userEvent.click(screen.getByText('Forkast manuelt brev'));

    expect(await screen.findByText('Dersom du forkaster det manuelle brevet, vil det erstattes av det automatisk genererte brevet')).toBeInTheDocument();

    userEvent.click(screen.getAllByText('Forkast manuelt brev')[1]);

    await waitFor(() => expect(screen.queryByText('Manuelt vedtaksbrev')).not.toBeInTheDocument());

    userEvent.click(screen.getByText('Fatt vedtak'));
    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [{
      begrunnelse: undefined,
      fritekstBrev: undefined,
      kode: '5015',
      overskrift: undefined,
      skalBrukeOverstyrendeFritekstBrev: false,
    }]);
  });

  it('skal forhåndsvise avslått vedtaksbrev og så fatte vedtak uten å skrive inn fritekst', async () => {
    const lagre = jest.fn();

    render(<AvslåttForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring submitCallback={lagre} />);

    expect(await screen.findByText('Vedtak')).toBeInTheDocument();
    expect(screen.getByText('Foreldrepenger er avslått')).toBeInTheDocument();
    expect(screen.getByText('Automatisk vedtaksbrev')).toBeInTheDocument();
    expect(screen.getByText('Rediger vedtaksbrev')).toBeInTheDocument();

    userEvent.click(screen.getByText('Fatt vedtak'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [{
      begrunnelse: undefined,
      fritekstBrev: undefined,
      kode: '5015',
      overskrift: undefined,
      skalBrukeOverstyrendeFritekstBrev: false,
    }]);
  });

  it('skal forhåndsvise avslått vedtaksbrev og så fatte vedtak med fritekst', async () => {
    const lagre = jest.fn();

    const utils = render(<AvslåttForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring submitCallback={lagre} />);

    expect(await screen.findByText('Vedtak')).toBeInTheDocument();
    expect(screen.getByText('Foreldrepenger er avslått')).toBeInTheDocument();
    expect(screen.getByText('Automatisk vedtaksbrev')).toBeInTheDocument();
    expect(screen.getByText('Rediger vedtaksbrev')).toBeInTheDocument();

    expect(screen.getByText('Årsak til avslag')).toBeInTheDocument();
    expect(screen.getByText('Søker har ikke noen gyldig uttaksperiode')).toBeInTheDocument();

    userEvent.type(utils.getByLabelText('Fritekst i brev til søker'), 'D');

    userEvent.click(screen.getByText('Fatt vedtak'));

    expect(await screen.findByText('Du må skrive minst 3 tegn')).toBeInTheDocument();

    userEvent.type(utils.getByLabelText('Fritekst i brev til søker'), 'ette er en tekst');

    userEvent.click(screen.getByText('Fatt vedtak'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [{
      begrunnelse: 'Dette er en tekst',
      fritekstBrev: undefined,
      kode: '5015',
      overskrift: undefined,
      skalBrukeOverstyrendeFritekstBrev: false,
    }]);
  });

  it('skal vise info om hva saksbehandler må ta stilling til før godkjenning', async () => {
    const lagre = jest.fn();

    const utils = render(<TeksterForAksjonspunkterSomSaksbehandlerMåTaStillingTil submitCallback={lagre} />);

    expect(await screen.findByText('Vedtak')).toBeInTheDocument();
    expect(screen.getByText('Foreldrepenger er innvilget')).toBeInTheDocument();
    expect(screen.getByText('Automatisk vedtaksbrev')).toBeInTheDocument();
    expect(screen.getByText('Rediger vedtaksbrev')).toBeInTheDocument();

    expect(screen.getByText('Vurder følgende før du sender til godkjenning:')).toBeInTheDocument();
    expect(screen.getByText('Påvirker den åpne Gosys-oppgaven «Vurder konsekvens for ytelse» behandlingen?')).toBeInTheDocument();
    expect(screen.getByText('Påvirker den åpne Gosys-oppgaven «Vurder dokument» behandlingen?')).toBeInTheDocument();
    expect(screen.getByText('Beregningsgrunnlaget er endret til ugunst for søker. Skal det sendes varsel?')).toBeInTheDocument();

    const fritekstInput = utils.getByLabelText('Fritekst i brev til søker som handler om fastsettelse av beregningsgrunnlaget');
    userEvent.type(fritekstInput, 'Dette er en tekst');

    userEvent.click(screen.getByText('Til godkjenning'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [{
      begrunnelse: 'Dette er en tekst',
      fritekstBrev: undefined,
      kode: '5015',
      overskrift: undefined,
      skalBrukeOverstyrendeFritekstBrev: false,
    }]);
  });

  it('skal vise innvilget vedtaksbrev for engangsstønad og så fatte vedtak', async () => {
    const lagre = jest.fn();

    render(<InnvilgetEngangsstønadTilGodkjenningForSaksbehandlerUtenOverstyring submitCallback={lagre} />);

    expect(await screen.findByText('Vedtak')).toBeInTheDocument();
    expect(screen.getByText('Engangsstønad er innvilget')).toBeInTheDocument();
    expect(screen.getByText('Automatisk vedtaksbrev')).toBeInTheDocument();
    expect(screen.getByText('Rediger vedtaksbrev')).toBeInTheDocument();

    expect(screen.getByText('Beregnet engangsstønad')).toBeInTheDocument();
    expect(screen.getByText('10 000 kr')).toBeInTheDocument();
    expect(screen.getByText('Antall barn')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();

    userEvent.click(screen.getByText('Fatt vedtak'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [{
      begrunnelse: undefined,
      fritekstBrev: undefined,
      kode: '5015',
      overskrift: undefined,
      skalBrukeOverstyrendeFritekstBrev: false,
    }]);
  });

  it('skal vise revurdering av foreldrepenger', async () => {
    const lagre = jest.fn();

    render(<InnvilgetRevurderingForeldrepengerTilGodkjenningForSaksbehandlerUtenOverstyring submitCallback={lagre} />);

    expect(await screen.findByText('Vedtak')).toBeInTheDocument();
    expect(screen.getByText('Endring i beregning og uttak og Foreldrepenger opphører')).toBeInTheDocument();
    expect(screen.getByText('Automatisk vedtaksbrev')).toBeInTheDocument();
    expect(screen.getByText('Rediger vedtaksbrev')).toBeInTheDocument();

    expect(screen.getByText('Årsak til revurdering')).toBeInTheDocument();
    expect(screen.getByText('Annet')).toBeInTheDocument();

    userEvent.click(screen.getByText('Fatt vedtak'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [{
      begrunnelse: undefined,
      fritekstBrev: undefined,
      kode: '5015',
      overskrift: undefined,
      skalBrukeOverstyrendeFritekstBrev: false,
    }]);
  });

  it('skal vise panel der saksbehandler har overstyrt vedtaksbrev og innvilget sak (readonly)', async () => {
    render(<GodkjentForeldrepengerMedManueltBrevForSaksbehandlerMedOverstyring />);

    expect(await screen.findByText('Vedtak')).toBeInTheDocument();
    expect(screen.getByText('Manuelt vedtaksbrev')).toBeInTheDocument();
    expect(screen.getByText('Overskrift')).toBeInTheDocument();
    expect(screen.getByText('Dette er en overskrift')).toBeInTheDocument();

    expect(screen.getByText('Innhold i brev til søker')).toBeInTheDocument();
    expect(screen.getByText('Dette er innholdet i brevet')).toBeInTheDocument();
    expect(screen.getByText('Endret av saksbehandler')).toBeInTheDocument();
  });
});

import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect } from 'vitest';

import { DokumentMalType } from '@navikt/fp-kodeverk';

import * as stories from './VedtakProsessIndex.stories';

const {
  InnvilgetForeldrepengerTilGodkjenningForSaksbehandler,
  AvslåttForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring,
  TeksterForAksjonspunkterSomSaksbehandlerMåTaStillingTil,
  OppgaverForAksjonspunkterSomSaksbehandlerMåTaStillingTil,
  InnvilgetEngangsstønadTilGodkjenningForSaksbehandlerUtenOverstyring,
  InnvilgetRevurderingForeldrepengerTilGodkjenningForSaksbehandlerUtenOverstyring,
  GodkjentForeldrepengerMedManueltBrevForSaksbehandlerMedOverstyring,
} = composeStories(stories);

describe('<VedtakProsessIndex>', () => {
  it.skip('skal forhåndsvise innvilget vedtaksbrev og så fatte vedtak', async () => {
    const lagre = vi.fn();
    const forhåndsvis = vi.fn();

    render(
      <InnvilgetForeldrepengerTilGodkjenningForSaksbehandler submitCallback={lagre} previewCallback={forhåndsvis} />,
    );

    expect(await screen.findByText('Vedtak')).toBeInTheDocument();
    expect(screen.getByText('Foreldrepenger er innvilget')).toBeInTheDocument();
    expect(screen.getByText('Rediger vedtaksbrev')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Automatisk vedtaksbrev'));

    await waitFor(() => expect(forhåndsvis).toHaveBeenCalledTimes(1));
    expect(forhåndsvis).toHaveBeenNthCalledWith(1, {
      dokumentMal: undefined,
      fritekst: undefined,
      gjelderVedtak: true,
      tittel: undefined,
      automatiskVedtaksbrev: true,
    });

    await userEvent.click(screen.getByText('Til godkjenning'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [
      {
        begrunnelse: undefined,
        fritekstBrev: undefined,
        kode: '5015',
        overskrift: undefined,
        skalBrukeOverstyrendeFritekstBrev: false,
      },
    ]);
  });

  it.skip('skal redigere innvilget vedtaksbrev, forhåndsvise og så fatte vedtak', async () => {
    const lagre = vi.fn();
    const forhåndsvis = vi.fn();

    const utils = render(
      <InnvilgetForeldrepengerTilGodkjenningForSaksbehandler submitCallback={lagre} previewCallback={forhåndsvis} />,
    );

    expect(await screen.findByText('Vedtak')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Rediger vedtaksbrev'));

    expect(await screen.findByText('Manuelt vedtaksbrev')).toBeInTheDocument();
    expect(
      screen.getByText('Tekst fra det automatisk genererte brevet kan kopieres og limes inn i det manuelle brevet'),
    ).toBeInTheDocument();

    await userEvent.click(screen.getByText('Til godkjenning'));

    expect(await screen.findAllByText('Feltet må fylles ut')).toHaveLength(2);

    const overskriftInput = utils.getByLabelText('Overskrift');
    await userEvent.type(overskriftInput, 'Dette er en overskrift');

    const innholdInput = utils.getByLabelText('Innhold i brev til søker');
    await userEvent.type(innholdInput, 'Dette er innhold');

    await waitFor(() => expect(screen.queryByText('Feltet må fylles ut')).not.toBeInTheDocument());

    await userEvent.click(screen.getByText('Forhåndsvis manuelt brev'));

    await waitFor(() => expect(forhåndsvis).toHaveBeenCalledTimes(1));
    expect(forhåndsvis).toHaveBeenNthCalledWith(1, {
      dokumentMal: DokumentMalType.FRITEKST,
      fritekst: 'Dette er innhold',
      gjelderVedtak: true,
      tittel: 'Dette er en overskrift',
      automatiskVedtaksbrev: undefined,
    });

    await userEvent.click(screen.getByText('Til godkjenning'));
    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [
      {
        begrunnelse: undefined,
        fritekstBrev: 'Dette er innhold',
        kode: '5015',
        overskrift: 'Dette er en overskrift',
        skalBrukeOverstyrendeFritekstBrev: true,
      },
    ]);
  });

  it.skip('skal redigere innvilget vedtaksbrev, åpne redigeringsmodal, forkaste overstyring og så fatte vedtak', async () => {
    const lagre = vi.fn();

    render(<InnvilgetForeldrepengerTilGodkjenningForSaksbehandler submitCallback={lagre} />);

    expect(await screen.findByText('Vedtak')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Rediger vedtaksbrev'));

    expect(await screen.findByText('Innholdet fra det automatiske brevet kan nå redigeres')).toBeInTheDocument();

    await userEvent.click(screen.getAllByText('Rediger vedtaksbrev')[1]);

    expect(await screen.findByText('Rediger brev')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Lagre og lukk'));

    await userEvent.click(screen.getAllByText('Forkast manuelt brev')[1]);

    await waitFor(() => expect(screen.queryByText('Manuelt vedtaksbrev')).not.toBeInTheDocument());

    await userEvent.click(screen.getByText('Til godkjenning'));
    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [
      {
        begrunnelse: undefined,
        fritekstBrev: undefined,
        kode: '5015',
        overskrift: undefined,
        skalBrukeOverstyrendeFritekstBrev: false,
      },
    ]);
  });

  it.skip('skal forhåndsvise avslått vedtaksbrev og så fatte vedtak uten å skrive inn fritekst', async () => {
    const lagre = vi.fn();

    render(<AvslåttForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring submitCallback={lagre} />);

    expect(await screen.findByText('Vedtak')).toBeInTheDocument();
    expect(screen.getByText('Foreldrepenger er avslått')).toBeInTheDocument();
    expect(screen.getByText('Automatisk vedtaksbrev')).toBeInTheDocument();
    expect(screen.getByText('Rediger vedtaksbrev')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Til godkjenning'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [
      {
        begrunnelse: undefined,
        fritekstBrev: undefined,
        kode: '5015',
        overskrift: undefined,
        skalBrukeOverstyrendeFritekstBrev: false,
      },
    ]);
  });

  it.skip('skal forhåndsvise avslått vedtaksbrev og så fatte vedtak med fritekst', async () => {
    const lagre = vi.fn();

    const utils = render(<AvslåttForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring submitCallback={lagre} />);

    expect(await screen.findByText('Vedtak')).toBeInTheDocument();
    expect(screen.getByText('Foreldrepenger er avslått')).toBeInTheDocument();
    expect(screen.getByText('Automatisk vedtaksbrev')).toBeInTheDocument();
    expect(screen.getByText('Rediger vedtaksbrev')).toBeInTheDocument();

    expect(screen.getByText('Årsak til avslag')).toBeInTheDocument();
    expect(screen.getByText('Søker har ikke noen gyldig uttaksperiode')).toBeInTheDocument();

    await userEvent.type(utils.getByLabelText('Fritekst i brev til søker'), 'D');

    await userEvent.click(screen.getByText('Til godkjenning'));

    expect(await screen.findByText('Du må skrive minst 3 tegn')).toBeInTheDocument();

    await userEvent.type(utils.getByLabelText('Fritekst i brev til søker'), 'ette er en tekst');

    await userEvent.click(screen.getByText('Til godkjenning'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [
      {
        begrunnelse: 'Dette er en tekst',
        fritekstBrev: undefined,
        kode: '5015',
        overskrift: undefined,
        skalBrukeOverstyrendeFritekstBrev: false,
      },
    ]);
  });

  it.skip('skal vise info om hva saksbehandler må ta stilling til før godkjenning', async () => {
    const lagre = vi.fn();

    const utils = render(<TeksterForAksjonspunkterSomSaksbehandlerMåTaStillingTil submitCallback={lagre} />);

    expect(await screen.findByText('Vedtak')).toBeInTheDocument();
    expect(screen.getByText('Foreldrepenger er innvilget')).toBeInTheDocument();
    expect(screen.getByText('Automatisk vedtaksbrev')).toBeInTheDocument();
    expect(screen.getByText('Rediger vedtaksbrev')).toBeInTheDocument();

    expect(screen.getByText('Vurder følgende før du sender til godkjenning:')).toBeInTheDocument();
    expect(
      screen.getByText('Påvirker den åpne Gosys-oppgaven «Vurder konsekvens for ytelse» behandlingen?'),
    ).toBeInTheDocument();
    expect(screen.getByText('Påvirker den åpne Gosys-oppgaven «Vurder dokument» behandlingen?')).toBeInTheDocument();
    expect(
      screen.getByText('Beregningsgrunnlaget er endret til ugunst for søker. Skal det sendes varsel?'),
    ).toBeInTheDocument();

    const fritekstInput = utils.getByLabelText(
      'Fritekst i brev til søker som handler om fastsettelse av beregningsgrunnlaget',
    );
    await userEvent.type(fritekstInput, 'Dette er en tekst');

    await userEvent.click(screen.getByText('Til godkjenning'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [
      {
        begrunnelse: 'Dette er en tekst',
        fritekstBrev: undefined,
        kode: '5015',
        overskrift: undefined,
        skalBrukeOverstyrendeFritekstBrev: false,
      },
    ]);
  });

  it.skip('skal vise oppgaver for aksjonspunkter saksbehandler må ta stilling til før godkjenning', async () => {
    const lagre = vi.fn();
    render(<OppgaverForAksjonspunkterSomSaksbehandlerMåTaStillingTil submitCallback={lagre} />);

    expect(await screen.findByText('Vedtak')).toBeInTheDocument();
    expect(screen.getByText('Foreldrepenger er innvilget')).toBeInTheDocument();
    expect(screen.getByText('Automatisk vedtaksbrev')).toBeInTheDocument();
    expect(screen.getByText('Rediger vedtaksbrev')).toBeInTheDocument();

    expect(screen.getByText('Vurder følgende før du sender til godkjenning:')).toBeInTheDocument();
    expect(
      screen.getByText('Påvirker den åpne Gosys-oppgaven «Vurder konsekvens for ytelse» behandlingen?'),
    ).toBeInTheDocument();
    expect(screen.getByText('Påvirker den åpne Gosys-oppgaven «Vurder dokument» behandlingen?')).toBeInTheDocument();

    expect(screen.getByText('Åpne oppgaver fra Gosys')).toBeInTheDocument();
    expect(screen.getByText('Type')).toBeInTheDocument();
    expect(screen.getByText('Beskrivelse')).toBeInTheDocument();
    expect(screen.getAllByText('Vurder konsekvens for ytelse')).toHaveLength(2);
    expect(screen.getAllByText('Vurder dokument')).toHaveLength(2);
    expect(screen.getByText('Se sto mottatt 24.02.25')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Fullmektig tar kontakt. Ber om fristutsettelse 4 uker, ettersom bruker først mottok brevet i dag. Je...',
      ),
    ).toBeInTheDocument();
    expect(screen.getByText('Vis mer')).toBeInTheDocument();
    expect(screen.getByText('Søknad om foreldrepenger ved fødsel')).toBeInTheDocument();
    expect(screen.getByText('Bekreftelse fra arbeidsgiver')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Til godkjenning'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [
      {
        begrunnelse: undefined,
        fritekstBrev: undefined,
        kode: '5015',
        overskrift: undefined,
        skalBrukeOverstyrendeFritekstBrev: false,
      },
    ]);
  });

  it.skip('skal vise innvilget vedtaksbrev for engangsstønad og så fatte vedtak', async () => {
    const lagre = vi.fn();

    render(<InnvilgetEngangsstønadTilGodkjenningForSaksbehandlerUtenOverstyring submitCallback={lagre} />);

    expect(await screen.findByText('Vedtak')).toBeInTheDocument();
    expect(screen.getByText('Engangsstønad er innvilget')).toBeInTheDocument();
    expect(screen.getByText('Automatisk vedtaksbrev')).toBeInTheDocument();
    expect(screen.getByText('Rediger vedtaksbrev')).toBeInTheDocument();

    expect(screen.getByText('Beregnet engangsstønad')).toBeInTheDocument();
    expect(screen.getByText('10 000 kr')).toBeInTheDocument();
    expect(screen.getByText('Antall barn')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Til godkjenning'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [
      {
        begrunnelse: undefined,
        fritekstBrev: undefined,
        kode: '5015',
        overskrift: undefined,
        skalBrukeOverstyrendeFritekstBrev: false,
      },
    ]);
  });

  it.skip('skal vise revurdering av foreldrepenger', async () => {
    const lagre = vi.fn();

    render(<InnvilgetRevurderingForeldrepengerTilGodkjenningForSaksbehandlerUtenOverstyring submitCallback={lagre} />);

    expect(await screen.findByText('Vedtak')).toBeInTheDocument();
    expect(screen.getByText('Endring i beregning og uttak og Foreldrepenger opphører')).toBeInTheDocument();
    expect(screen.getByText('Automatisk vedtaksbrev')).toBeInTheDocument();
    expect(screen.getByText('Rediger vedtaksbrev')).toBeInTheDocument();

    expect(screen.getByText('Årsak til revurdering')).toBeInTheDocument();
    expect(screen.getByText('Annet')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Til godkjenning'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [
      {
        begrunnelse: undefined,
        fritekstBrev: undefined,
        kode: '5015',
        overskrift: undefined,
        skalBrukeOverstyrendeFritekstBrev: false,
      },
    ]);
  });

  it.skip('skal vise panel der saksbehandler har overstyrt vedtaksbrev og innvilget sak (readonly)', async () => {
    render(<GodkjentForeldrepengerMedManueltBrevForSaksbehandlerMedOverstyring />);

    expect(await screen.findByText('Vedtak')).toBeInTheDocument();
    expect(screen.getByText('Automatisk vedtaksbrev')).toBeInTheDocument();
    expect(screen.getByText('Rediger vedtaksbrev')).toBeInTheDocument();

    expect(screen.getByText('Brev er overstyrt')).toBeInTheDocument();
    expect(screen.getByText('Forhåndsvis brev')).toBeInTheDocument();
  });
});

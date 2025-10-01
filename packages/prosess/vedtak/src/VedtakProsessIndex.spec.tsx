import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect } from 'vitest';

import * as stories from './VedtakProsessIndex.stories';

const {
  InnvilgetForeldrepengerTilGodkjenningForSaksbehandler,
  AvslåttForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring,
  TeksterForAksjonspunkterSomSaksbehandlerMåTaStillingTil,
  OppgaverForAksjonspunkterSomSaksbehandlerMåTaStillingTil,
  InnvilgetEngangsstønadTilGodkjenningForSaksbehandlerUtenOverstyring,
  InnvilgetRevurderingForeldrepengerTilGodkjenningForSaksbehandlerUtenOverstyring,
  GodkjentForeldrepengerMedManueltBrevForSaksbehandlerMedOverstyring,
  LegacyOverstyring,
  LegacyOverstyringHarSendtTilbakeFraBeslutter,
  SkalIkkeProduseresBrev,
} = composeStories(stories);

describe('VedtakProsessIndex', () => {
  vi.hoisted(() => {
    Object.defineProperty(globalThis, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation(query => ({
        matches: false,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        media: query,
        onchange: null,
        addListener: vi.fn(), // Deprecated
        removeListener: vi.fn(), // Deprecated
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
  });

  it('skal forhåndsvise innvilget vedtaksbrev og så fatte vedtak', async () => {
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

  it('skal åpne modal for redigering og så forhåndsvise brev', async () => {
    const lagre = vi.fn();
    const forhåndsvis = vi.fn();

    render(
      <InnvilgetForeldrepengerTilGodkjenningForSaksbehandler submitCallback={lagre} previewCallback={forhåndsvis} />,
    );

    expect(await screen.findByText('Vedtak')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Rediger vedtaksbrev'));

    expect(screen.getByText('Innholdet fra det automatiske brevet kan nå redigeres')).toBeInTheDocument();

    await userEvent.click(screen.getAllByText('Rediger brev')[0]!);

    expect(screen.getByText(/Gjør nødvendige endringer i brevet nedenfor/)).toBeInTheDocument();

    await userEvent.click(screen.getByText('Forhåndsvis brev'));

    await waitFor(() => expect(forhåndsvis).toHaveBeenCalledTimes(1));
    expect(forhåndsvis).toHaveBeenNthCalledWith(1, {
      automatiskVedtaksbrev: false,
      dokumentMal: 'FRIHTM',
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      fritekst: expect.stringContaining('Nav har innvilget søknaden din om 100 prosent foreldrepenger'),
    });
  });

  it('skal redigere innvilget vedtaksbrev, åpne redigeringsmodal, forkaste overstyring og så fatte vedtak', async () => {
    const lagre = vi.fn();

    render(<InnvilgetForeldrepengerTilGodkjenningForSaksbehandler submitCallback={lagre} />);

    expect(await screen.findByText('Vedtak')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Rediger vedtaksbrev'));

    expect(await screen.findByText('Innholdet fra det automatiske brevet kan nå redigeres')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Rediger brev'));

    expect(screen.getByText(/Gjør nødvendige endringer i brevet nedenfor/)).toBeInTheDocument();

    await userEvent.click(screen.getByText('Lagre og lukk'));

    await userEvent.click(screen.getAllByText('Forkast redigert brev')[0]!);

    await waitFor(() =>
      expect(screen.queryByText('Innholdet fra det automatiske brevet kan nå redigeres')).not.toBeInTheDocument(),
    );

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

  it('skal forhåndsvise avslått vedtaksbrev og så fatte vedtak uten å skrive inn fritekst', async () => {
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

  it('skal forhåndsvise avslått vedtaksbrev og så fatte vedtak med fritekst', async () => {
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

  it('skal vise info om hva saksbehandler må ta stilling til før godkjenning', async () => {
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

  it('skal vise oppgaver for aksjonspunkter saksbehandler må ta stilling til før godkjenning', async () => {
    const ferdigstillOppgave = vi.fn();
    render(<OppgaverForAksjonspunkterSomSaksbehandlerMåTaStillingTil ferdigstillOppgave={ferdigstillOppgave} />);

    const visMerKnapper = screen.getAllByText('Vis mer');
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
    expect(screen.getAllByText('Vurder dokument')).toHaveLength(3);
    expect(screen.getByText('VL: Se sto mottatt 24.02.25')).toBeInTheDocument();
    expect(screen.getByText('--- 19.03.2025 11:24 F_Z990245 E_Z990245 (Z990245, 0219) ---')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Fullmektig tar kontakt. Ber om fristutsettelse 4 uker, ettersom bruker først mottok brevet i dag. ' +
          'Jeg har utsatt 14 dager, men han ønsker ytterligere 2 uker utover det, altså 28.09.24.',
      ),
    ).toBeInTheDocument();
    expect(screen.getByText('Kan dere gi tilbakemelding på dette?')).toBeInTheDocument();
    expect(screen.getAllByText('Vis mer')).toHaveLength(2);
    expect(screen.getAllByText('Ferdigstill oppgave i Gosys')).toHaveLength(5);
    await userEvent.click(visMerKnapper[0]!);
    expect(screen.getByText('Vis mindre')).toBeInTheDocument();
    expect(screen.getByText('VL: Se sto mottatt 20.02.25')).toBeInTheDocument();
    expect(screen.getByText('VL: Bekreftelse fra arbeidsgiver')).toBeInTheDocument();
    expect(screen.getByText('Vis dokumenter (3)')).toBeInTheDocument();
    await userEvent.click(screen.getByText('Vis dokumenter (3)'));
    expect(screen.getByText('Skjul dokumenter (3)')).toBeInTheDocument();
    expect(screen.getByText('Dokumentasjon av mors deltakelse i kvalifiseringsprogrammet')).toBeInTheDocument();
    expect(screen.getByText('Dokumentasjon på reiser til og fra Norge')).toBeInTheDocument();
    expect(screen.getByText('Ettersendelse til søknad om foreldrepenger ved fødsel')).toBeInTheDocument();
    expect(screen.getByText('VL: Bekreftelse fra studiested/skole')).toBeInTheDocument();
    expect(screen.getByText('Dokumentasjon på at mor studerer på heltid')).toBeInTheDocument();
    expect(screen.getByText('--- 19.01.2025 11:24 F_Z990245 E_Z990245 (Z990245, 0219) ---')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Bruker sier at han har søkt Foreldrepenger, han er i permisjon nå. Han har ikke fått svar, han skriver at saksnr er: 12341234.',
      ),
    ).toBeInTheDocument();
    await userEvent.click(visMerKnapper[1]!);
    expect(screen.getAllByText('Vis mindre')).toHaveLength(2);
    expect(
      screen.getByText(
        'Han har AAP, så det er greit å vite om han får Foreldrepenger før man evt stanser denne ytelsen.',
      ),
    ).toBeInTheDocument();
    expect(screen.getByText('--- 19.02.2025 11:24 F_Z990245 E_Z990245 (Z990245, 0219) ---')).toBeInTheDocument();
    expect(screen.getByText('Må ringe bruker for å avklare AAP og Foreldrepenger')).toBeInTheDocument();
    expect(screen.getByText('Undersøk dette før vi går videre')).toBeInTheDocument();
    expect(screen.getByText('VL: Søknad om foreldrepenger ved fødsel')).toBeInTheDocument();
    expect(screen.getByText('Vis dokumenter (2)')).toBeInTheDocument();
    await userEvent.click(screen.getByText('Vis dokumenter (2)'));
    expect(screen.getByText('Skjul dokumenter (2)')).toBeInTheDocument();
    expect(
      screen.getByText('Dokumentasjon av termindato (lev. kun av mor), fødsel eller dato for omsorgsovertakelse'),
    ).toBeInTheDocument();
    expect(
      screen.getByText('Ettersendelse til søknad om svangerskapspenger til selvstendig næringsdrivende og frilanser'),
    ).toBeInTheDocument();

    const filIkoner = screen.getAllByLabelText('Åpne dokument');
    expect(filIkoner).toHaveLength(6);

    const ferdigstillOppgaveKnapper = screen.getAllByText('Ferdigstill oppgave i Gosys');
    await userEvent.click(ferdigstillOppgaveKnapper[0]!);
    expect(ferdigstillOppgave).toHaveBeenCalledTimes(1);
    expect(ferdigstillOppgave).toHaveBeenNthCalledWith(1, '1');
    await userEvent.click(ferdigstillOppgaveKnapper[1]!);
    expect(ferdigstillOppgave).toHaveBeenCalledTimes(2);
    expect(ferdigstillOppgave).toHaveBeenNthCalledWith(2, '2');
    await userEvent.click(ferdigstillOppgaveKnapper[2]!);
    expect(ferdigstillOppgave).toHaveBeenCalledTimes(3);
    expect(ferdigstillOppgave).toHaveBeenNthCalledWith(3, '3');
    await userEvent.click(ferdigstillOppgaveKnapper[3]!);
    expect(ferdigstillOppgave).toHaveBeenCalledTimes(4);
    expect(ferdigstillOppgave).toHaveBeenNthCalledWith(4, '4');
    await userEvent.click(ferdigstillOppgaveKnapper[4]!);
    expect(ferdigstillOppgave).toHaveBeenCalledTimes(5);
    expect(ferdigstillOppgave).toHaveBeenNthCalledWith(5, '5');
  });

  it('skal vise innvilget vedtaksbrev for engangsstønad og så fatte vedtak', async () => {
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

  it('skal vise revurdering av foreldrepenger', async () => {
    const lagre = vi.fn();

    render(<InnvilgetRevurderingForeldrepengerTilGodkjenningForSaksbehandlerUtenOverstyring submitCallback={lagre} />);

    expect(await screen.findByText('Vedtak')).toBeInTheDocument();
    expect(screen.getByText('Endring i beregning og Foreldrepenger opphører')).toBeInTheDocument();
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

  it('skal vise panel der saksbehandler har overstyrt vedtaksbrev og innvilget sak (readonly)', async () => {
    render(<GodkjentForeldrepengerMedManueltBrevForSaksbehandlerMedOverstyring />);

    expect(await screen.findByText('Vedtak')).toBeInTheDocument();
    expect(screen.getByText('Automatisk vedtaksbrev')).toBeInTheDocument();
    expect(screen.getByText('Rediger vedtaksbrev')).toBeInTheDocument();

    expect(screen.getByText('Brev er redigert')).toBeInTheDocument();
    expect(screen.getByText('Vis brev')).toBeInTheDocument();
  });

  it('skal vise panel der saksbehandler har redigert brev i gammel løsning og behandling er avsluttet', async () => {
    render(<LegacyOverstyring />);

    expect(await screen.findByText('Vedtak')).toBeInTheDocument();
    expect(screen.getByText('Vis manuelt brev')).toBeInTheDocument();

    expect(screen.getByText('Overskrift')).toBeInTheDocument();
    expect(screen.getByText('Dette er en overskrift')).toBeInTheDocument();

    expect(screen.getByText('Innhold i brev til søker')).toBeInTheDocument();
    expect(screen.getByText('Dette er en fritekst')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Rediger vedtaksbrev'));

    expect(screen.queryByText('Innholdet fra det automatiske brevet kan nå redigeres')).not.toBeInTheDocument();
  });

  it('skal vise panel der saskbehandler har redigert brev i gammel løsning og fått tilbake frå beslutter i ny løsning', async () => {
    render(<LegacyOverstyringHarSendtTilbakeFraBeslutter />);

    expect(await screen.findByText('Vedtak')).toBeInTheDocument();
    expect(screen.getByText('Vis manuelt brev')).toBeInTheDocument();

    expect(screen.getByText('Overskrift')).toBeInTheDocument();
    expect(screen.getByText('Dette er en overskrift')).toBeInTheDocument();

    expect(screen.getByText('Innhold i brev til søker')).toBeInTheDocument();
    expect(screen.getByText('Dette er en fritekst')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Rediger vedtaksbrev'));

    expect(screen.getByText('Innholdet fra det automatiske brevet kan nå redigeres')).toBeInTheDocument();
  });

  it('skal vise en infotekst og skjul editeringslenke når brev ikke skal sendes ut', async () => {
    render(<SkalIkkeProduseresBrev />);

    expect(await screen.findByText('Vedtak')).toBeInTheDocument();
    expect(screen.getByText('Det blir ikke sendt vedtaksbrev i denne behandlingen')).toBeInTheDocument();
    expect(screen.queryByText('Rediger vedtaksbrev')).not.toBeInTheDocument();
  });
});

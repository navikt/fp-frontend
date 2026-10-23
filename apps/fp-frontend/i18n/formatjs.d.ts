import type { AppFellesMessageId } from '@navikt/fp-app-felles';
import type { FaktaAapMessageId } from '@navikt/fp-fakta-aap';
import type { FaktaArbeidOgInntektMessageId } from '@navikt/fp-fakta-arbeid-og-inntekt';
import type { FaktaArbeidsforholdMessageId } from '@navikt/fp-fakta-arbeidsforhold';
import type { FaktaBesteberegningMessageId } from '@navikt/fp-fakta-besteberegning';
import type { FaktaFodselMessageId } from '@navikt/fp-fakta-fodsel';
import type { FaktaInntektsmeldingMessageId } from '@navikt/fp-fakta-inntektsmelding';
import type { FaktaMedlemskapMessageId } from '@navikt/fp-fakta-medlemskap';
import type { FaktaOmsorgMessageId } from '@navikt/fp-fakta-omsorg';
import type { FaktaOmsorgOgRettMessageId } from '@navikt/fp-fakta-omsorg-og-rett';
import type { FaktaOmsorgsovertakelseMessageId } from '@navikt/fp-fakta-omsorgsovertakelse';
import type { FaktaOpptjeningMessageId } from '@navikt/fp-fakta-opptjening';
import type { FaktaPermisjonMessageId } from '@navikt/fp-fakta-permisjon';
import type { FaktaSakenMessageId } from '@navikt/fp-fakta-saken';
import type { FaktaTilretteleggingMessageId } from '@navikt/fp-fakta-tilrettelegging';
import type { FaktaUttakMessageId } from '@navikt/fp-fakta-uttak';
import type { FaktaUttakEosMessageId } from '@navikt/fp-fakta-uttak-eos';
import type { FaktaUttaksdokumentasjonMessageId } from '@navikt/fp-fakta-uttaksdokumentasjon';
import type { FaktaVergeMessageId } from '@navikt/fp-fakta-verge';
import type { FaktaYtelserMessageId } from '@navikt/fp-fakta-ytelser';
import type { LosSaksbehandlerMessageId } from '@navikt/fp-los-saksbehandler';
import type { ModalSettPaVentMessageId } from '@navikt/fp-modal-sett-pa-vent';
import type { PapirsoknadMessageId } from '@navikt/fp-papirsoknad';
import type { ProsessAnkeMessageId } from '@navikt/fp-prosess-anke';
import type { ProsessAnkeResultatMessageId } from '@navikt/fp-prosess-anke-resultat';
import type { ProsessAnkeTrygderettsbehandlingMessageId } from '@navikt/fp-prosess-anke-trygderettsbehandling';
import type { ProsessBeregningsresultatMessageId } from '@navikt/fp-prosess-beregningsresultat';
import type { ProsessFormkravMessageId } from '@navikt/fp-prosess-formkrav';
import type { ProsessInnsynMessageId } from '@navikt/fp-prosess-innsyn';
import type { ProsessKlagevurderingMessageId } from '@navikt/fp-prosess-klagevurdering';
import type { ProsessSimuleringMessageId } from '@navikt/fp-prosess-simulering';
import type { ProsessSoknadsfristMessageId } from '@navikt/fp-prosess-soknadsfrist';
import type { ProsessTilkjentYtelseMessageId } from '@navikt/fp-prosess-tilkjent-ytelse';
import type { ProsessUttakMessageId } from '@navikt/fp-prosess-uttak';
import type { ProsessVarselOmRevurderingMessageId } from '@navikt/fp-prosess-varsel-om-revurdering';
import type { ProsessVedtakMessageId } from '@navikt/fp-prosess-vedtak';
import type { ProsessVedtakInnsynMessageId } from '@navikt/fp-prosess-vedtak-innsyn';
import type { ProsessVedtakKlageMessageId } from '@navikt/fp-prosess-vedtak-klage';
import type { ProsessVilkarFodselMessageId } from '@navikt/fp-prosess-vilkar-fodsel';
import type { ProsessVilkarOpptjeningMessageId } from '@navikt/fp-prosess-vilkar-opptjening';
import type { ProsessVilkarOverstyringMessageId } from '@navikt/fp-prosess-vilkar-overstyring';
import type { ProsessVilkarSokersOpplysningspliktMessageId } from '@navikt/fp-prosess-vilkar-sokers-opplysningsplikt';
import type { ProsessVilkarSoknadsfristMessageId } from '@navikt/fp-prosess-vilkar-soknadsfrist';
import type { ProsessVilkarSvangerskapMessageId } from '@navikt/fp-prosess-vilkar-svangerskap';
import type { SakAktorMessageId } from '@navikt/fp-sak-aktor';
import type { SakBehandlingVelgerMessageId } from '@navikt/fp-sak-behandling-velger';
import type { SakDekoratorMessageId } from '@navikt/fp-sak-dekorator';
import type { SakDokumenterMessageId } from '@navikt/fp-sak-dokumenter';
import type { SakFagsakProfilMessageId } from '@navikt/fp-sak-fagsak-profil';
import type { SakHistorikkMessageId } from '@navikt/fp-sak-historikk';
import type { SakInfosiderMessageId } from '@navikt/fp-sak-infosider';
import type { SakMeldingerMessageId } from '@navikt/fp-sak-meldinger';
import type { SakMenyMessageId } from '@navikt/fp-sak-meny';
import type { SakMenyApneForEndringerMessageId } from '@navikt/fp-sak-meny-apne-for-endringer';
import type { SakMenyEndreUtlandMessageId } from '@navikt/fp-sak-meny-endre-utland';
import type { SakMenyHenleggMessageId } from '@navikt/fp-sak-meny-henlegg';
import type { SakMenyMerkSomHasterMessageId } from '@navikt/fp-sak-meny-merk-som-haster';
import type { SakMenyNyBehandlingMessageId } from '@navikt/fp-sak-meny-ny-behandling';
import type { SakMenySettPaVentMessageId } from '@navikt/fp-sak-meny-sett-pa-vent';
import type { SakNotatMessageId } from '@navikt/fp-sak-notat';
import type { SakRisikoklassifiseringMessageId } from '@navikt/fp-sak-risikoklassifisering';
import type { SakSokMessageId } from '@navikt/fp-sak-sok';
import type { SakTotrinnskontrollMessageId } from '@navikt/fp-sak-totrinnskontroll';
import type { SakUkjentAdresseMessageId } from '@navikt/fp-sak-ukjent-adresse';
import type { SakVisittkortMessageId } from '@navikt/fp-sak-visittkort';
import type { UtbetalingsdataIs15MessageId } from '@navikt/fp-utbetalingsdata-is15';
import type { UtilsMessageId } from '@navikt/fp-utils';

import type nb from './nb_NO.json';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids:
        | keyof typeof nb
        | AppFellesMessageId
        | FaktaAapMessageId
        | FaktaArbeidOgInntektMessageId
        | FaktaArbeidsforholdMessageId
        | FaktaBesteberegningMessageId
        | FaktaFodselMessageId
        | FaktaInntektsmeldingMessageId
        | FaktaMedlemskapMessageId
        | FaktaOmsorgMessageId
        | FaktaOmsorgOgRettMessageId
        | FaktaOmsorgsovertakelseMessageId
        | FaktaOpptjeningMessageId
        | FaktaPermisjonMessageId
        | FaktaSakenMessageId
        | FaktaTilretteleggingMessageId
        | FaktaUttakMessageId
        | FaktaUttakEosMessageId
        | FaktaUttaksdokumentasjonMessageId
        | FaktaVergeMessageId
        | FaktaYtelserMessageId
        | LosSaksbehandlerMessageId
        | ModalSettPaVentMessageId
        | PapirsoknadMessageId
        | ProsessAnkeMessageId
        | ProsessAnkeResultatMessageId
        | ProsessAnkeTrygderettsbehandlingMessageId
        | ProsessBeregningsresultatMessageId
        | ProsessFormkravMessageId
        | ProsessInnsynMessageId
        | ProsessKlagevurderingMessageId
        | ProsessSimuleringMessageId
        | ProsessSoknadsfristMessageId
        | ProsessTilkjentYtelseMessageId
        | ProsessUttakMessageId
        | ProsessVarselOmRevurderingMessageId
        | ProsessVedtakMessageId
        | ProsessVedtakInnsynMessageId
        | ProsessVedtakKlageMessageId
        | ProsessVilkarFodselMessageId
        | ProsessVilkarOpptjeningMessageId
        | ProsessVilkarOverstyringMessageId
        | ProsessVilkarSokersOpplysningspliktMessageId
        | ProsessVilkarSoknadsfristMessageId
        | ProsessVilkarSvangerskapMessageId
        | SakAktorMessageId
        | SakBehandlingVelgerMessageId
        | SakDekoratorMessageId
        | SakDokumenterMessageId
        | SakFagsakProfilMessageId
        | SakHistorikkMessageId
        | SakInfosiderMessageId
        | SakMeldingerMessageId
        | SakMenyMessageId
        | SakMenyApneForEndringerMessageId
        | SakMenyEndreUtlandMessageId
        | SakMenyHenleggMessageId
        | SakMenyMerkSomHasterMessageId
        | SakMenyNyBehandlingMessageId
        | SakMenySettPaVentMessageId
        | SakNotatMessageId
        | SakRisikoklassifiseringMessageId
        | SakSokMessageId
        | SakTotrinnskontrollMessageId
        | SakUkjentAdresseMessageId
        | SakVisittkortMessageId
        | UtbetalingsdataIs15MessageId
        | UtilsMessageId;
    }
  }
}

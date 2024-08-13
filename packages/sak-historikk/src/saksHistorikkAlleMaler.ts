import { Historikkinnslag, HistorikkinnslagDel, HistorikkinnslagEndretFelt } from '@navikt/fp-types';

const lagHistorikk = (input: Partial<Historikkinnslag>): Historikkinnslag =>
  ({
    behandlingUuid: 'f13637fd-ef16-4bd8-b1b1-9b1f876de807',
    dokumentLinks: [],
    historikkinnslagDeler: [],
    ...input,
  }) as Historikkinnslag;

const lagInnslagDel = (input: Partial<HistorikkinnslagDel>): HistorikkinnslagDel =>
  ({
    begrunnelsetekst: null,
    begrunnelseFritekst: null,
    hendelse: null,
    opplysninger: null,
    soeknadsperiode: null,
    skjermlenke: null,
    årsaktekst: null,
    tema: null,
    gjeldendeFra: null,
    resultat: null,
    endredeFelter: null,
    aksjonspunkter: null,
    ...input,
  }) as HistorikkinnslagDel;

const lagEndretFelt = (input: Partial<HistorikkinnslagEndretFelt>): HistorikkinnslagEndretFelt =>
  ({
    endretFeltNavn: 'DOKUMENTASJON_FORELIGGER',
    navnVerdi: null,
    fraVerdi: null,
    klFraVerdi: null,
    klTilVerdi: null,
    ...input,
  }) as HistorikkinnslagEndretFelt;

const historikkAlleMaler: Historikkinnslag[] = [
  lagHistorikk({
    type: 'BREV_SENT',
    aktoer: 'VL',
    opprettetAv: 'Srvvtp',
    opprettetTidspunkt: '2024-08-09T13:01:33.074',
    dokumentLinks: [
      {
        tag: 'Innvilgelsesbrev foreldrepenger',
        url: 'https://example.com',
        journalpostId: '1',
        dokumentId: '1',
        utgått: false,
      },
    ],
    historikkinnslagDeler: [
      lagInnslagDel({
        hendelse: {
          navn: 'BREV_SENT',
        },
      }),
    ],
  }),
  lagHistorikk({
    type: 'VEDTAK_FATTET',
    aktoer: 'BESL',
    opprettetAv: 'B123456',
    opprettetTidspunkt: '2024-08-09T13:02:29.674',
    historikkinnslagDeler: [
      lagInnslagDel({
        hendelse: {
          navn: 'VEDTAK_FATTET',
        },
        skjermlenke: 'VEDTAK',
        resultat: 'INNVILGET',
      }),
    ],
  }),
  lagHistorikk({
    type: 'SAK_RETUR',
    aktoer: 'BESL',
    opprettetAv: 'B123456',
    opprettetTidspunkt: '2024-08-09T13:03:32.111',
    historikkinnslagDeler: [
      lagInnslagDel({
        hendelse: {
          navn: 'SAK_RETUR',
        },
        skjermlenke: 'FAKTA_FOR_OPPTJENING',
        aksjonspunkter: [
          {
            aksjonspunktBegrunnelse: 'Dette er en begrunnelse',
            godkjent: false,
            aksjonspunktKode: '5051',
          },
        ],
      }),
      lagInnslagDel({
        skjermlenke: 'BEREGNING_FORELDREPENGER',
        aksjonspunkter: [
          {
            aksjonspunktBegrunnelse: 'Dette er en begrunnelse',
            godkjent: false,
            aksjonspunktKode: '5038',
          },
        ],
      }),
    ],
  }),
  lagHistorikk({
    type: 'BEH_VENT',
    aktoer: 'VL',
    opprettetAv: 'Srvfpsak',
    opprettetTidspunkt: '2024-08-09T13:04:33.7',
    historikkinnslagDeler: [
      lagInnslagDel({
        hendelse: {
          navn: 'BEH_VENT',
          verdi: '16.08.2024',
        },
        årsaktekst: 'Venter på inntektsmelding',
      }),
    ],
  }),
  lagHistorikk({
    type: 'BEH_VENT',
    aktoer: 'VL',
    opprettetAv: 'Srvfpsak',
    opprettetTidspunkt: '2024-08-09T13:04:54.289',
    historikkinnslagDeler: [
      lagInnslagDel({
        hendelse: {
          navn: 'BEH_VENT',
          verdi: '16.08.2024',
        },
        årsaktekst: 'Venter på inntektsmelding',
      }),
    ],
  }),
  lagHistorikk({
    type: 'FAKTA_ENDRET',
    aktoer: 'SBH',
    opprettetAv: 'S123456',
    opprettetTidspunkt: '2024-08-09T13:05:55.571',
    historikkinnslagDeler: [
      lagInnslagDel({
        opplysninger: [
          {
            opplysningType: 'ANTALL_BARN',
            tilVerdi: '1',
          },
        ],
        skjermlenke: 'FAKTA_OM_FOEDSEL',
        endredeFelter: [
          lagEndretFelt({
            endretFeltNavn: 'DOKUMENTASJON_FORELIGGER',
            klNavn: 'HISTORIKK_ENDRET_FELT_TYPE',
            tilVerdi: true,
          }),
          lagEndretFelt({
            endretFeltNavn: 'BRUK_ANTALL_I_SOKNAD',
            klNavn: 'HISTORIKK_ENDRET_FELT_TYPE',
            tilVerdi: true,
          }),
        ],
      }),
    ],
  }),
  lagHistorikk({
    type: 'OVERSTYRT',
    aktoer: 'SBH',
    opprettetAv: 'S123456',
    opprettetTidspunkt: '2024-08-09T13:07:15.987',
    historikkinnslagDeler: [
      lagInnslagDel({
        begrunnelseFritekst: 'avvist',
        skjermlenke: 'PUNKT_FOR_FOEDSEL',
        endredeFelter: [
          lagEndretFelt({
            endretFeltNavn: 'OVERSTYRT_VURDERING',
            klNavn: 'HISTORIKK_ENDRET_FELT_TYPE',
            fraVerdi: 'VILKAR_OPPFYLT',
            tilVerdi: 'VILKAR_IKKE_OPPFYLT',
            klFraVerdi: 'HISTORIKK_ENDRET_FELT_VERDI_TYPE',
            klTilVerdi: 'HISTORIKK_ENDRET_FELT_VERDI_TYPE',
          }),
        ],
      }),
    ],
  }),
  lagHistorikk({
    type: 'TILBAKEKR_VIDEREBEHANDLING',
    aktoer: 'SBH',
    opprettetAv: 'S123456',
    opprettetTidspunkt: '2024-08-09T13:09:49.778',
    historikkinnslagDeler: [
      lagInnslagDel({
        begrunnelseFritekst: 'Dette er begrunnelsen',
        hendelse: {
          navn: 'TILBAKEKR_VIDEREBEHANDLING',
        },
        skjermlenke: 'FAKTA_OM_SIMULERING',
        endredeFelter: [
          lagEndretFelt({
            endretFeltNavn: 'FASTSETT_VIDERE_BEHANDLING',
            klNavn: 'HISTORIKK_ENDRET_FELT_TYPE',
            tilVerdi: 'TILBAKEKR_IGNORER',
            klTilVerdi: 'TILBAKEKR_VIDERE_BEH',
          }),
        ],
      }),
    ],
  }),
  lagHistorikk({
    type: 'FASTSATT_UTTAK',
    aktoer: 'SBH',
    opprettetAv: 'S123456',
    opprettetTidspunkt: '2024-08-09T13:10:25.853',
    historikkinnslagDeler: [
      lagInnslagDel({
        begrunnelseFritekst: 'Perioden er avslått av Autotest.',
        hendelse: {
          navn: 'FASTSATT_UTTAK',
        },
        opplysninger: [
          {
            opplysningType: 'UTTAK_PERIODE_FOM',
            tilVerdi: '31.01.2025',
          },
          {
            opplysningType: 'UTTAK_PERIODE_TOM',
            tilVerdi: '06.02.2025',
          },
        ],
        skjermlenke: 'UTTAK',
        endredeFelter: [
          lagEndretFelt({
            endretFeltNavn: 'UTTAK_TREKKDAGER',
            klNavn: 'HISTORIKK_ENDRET_FELT_TYPE',
            fraVerdi: '5.0',
            tilVerdi: '0.0',
          }),
          lagEndretFelt({
            endretFeltNavn: 'UTTAK_PERIODE_RESULTAT_TYPE',
            klNavn: 'HISTORIKK_ENDRET_FELT_TYPE',
            fraVerdi: 'MANUELL_BEHANDLING',
            tilVerdi: 'AVSLÅTT',
            klFraVerdi: 'PERIODE_RESULTAT_TYPE',
            klTilVerdi: 'PERIODE_RESULTAT_TYPE',
          }),
        ],
      }),
    ],
  }),
  lagHistorikk({
    type: 'TILBAKEKREVING',
    aktoer: 'SBH',
    opprettetAv: 'S123456',
    opprettetTidspunkt: '2024-08-09T13:11:21.659',
    historikkinnslagDeler: [
      lagInnslagDel({
        begrunnelseFritekst: 'Dette er en aktsomhetsvurdering skrevet av Autotest!',
        opplysninger: [
          {
            opplysningType: 'PERIODE_FOM',
            tilVerdi: '12.02.2024',
          },
          {
            opplysningType: 'PERIODE_TOM',
            tilVerdi: '12.02.2024',
          },
          {
            opplysningType: 'TILBAKEKREVING_OPPFYLT_BEGRUNNELSE',
            tilVerdi: 'Dette er en vilkårsvurdering skrevet av Autotest!',
          },
          {
            opplysningType: 'SÆRLIG_GRUNNER_BEGRUNNELSE',
            tilVerdi: 'Dette er en særlige grunner vurdering skrevet av Autotest!',
          },
        ],
        skjermlenke: 'TILBAKEKREVING',
        endredeFelter: [
          lagEndretFelt({
            endretFeltNavn: 'ER_VILKARENE_TILBAKEKREVING_OPPFYLT',
            klNavn: 'HISTORIKK_ENDRET_FELT_TYPE',
            tilVerdi: 'Ja, mottaker forsto eller burde forstått at utbetalingen skyldtes en feil (1. ledd, 1. punkt)',
          }),
          lagEndretFelt({
            endretFeltNavn: 'MOTTAKER_UAKTSOMHET_GRAD',
            klNavn: 'HISTORIKK_ENDRET_FELT_TYPE',
            tilVerdi: 'Simpel uaktsomhet',
          }),
          lagEndretFelt({
            endretFeltNavn: 'TILBAKEKREV_SMAABELOEP',
            klNavn: 'HISTORIKK_ENDRET_FELT_TYPE',
            tilVerdi: 'Ja',
          }),
          lagEndretFelt({
            endretFeltNavn: 'ER_SARLIGE_GRUNNER_TIL_REDUKSJON',
            klNavn: 'HISTORIKK_ENDRET_FELT_TYPE',
            tilVerdi: 'Nei: Om feilen helt eller delvis kan tilskrives NAV, Hvor lang tid siden utbetalingen fant sted',
          }),
        ],
      }),
    ],
  }),
  lagHistorikk({
    type: 'FAKTA_OM_FEILUTBETALING',
    aktoer: 'SBH',
    opprettetAv: 'S123456',
    opprettetTidspunkt: '2024-08-09T13:12:20.722',
    historikkinnslagDeler: [
      lagInnslagDel({
        begrunnelseFritekst: 'Dette er en begrunnelse dannet av Autotest!',
        opplysninger: [
          {
            opplysningType: 'PERIODE_FOM',
            tilVerdi: '12.02.2024',
          },
          {
            opplysningType: 'PERIODE_TOM',
            tilVerdi: '12.02.2024',
          },
        ],
        skjermlenke: 'FAKTA_OM_FEILUTBETALING',
        endredeFelter: [
          lagEndretFelt({
            endretFeltNavn: 'HENDELSE_AARSAK',
            klNavn: 'HISTORIKK_ENDRET_FELT_TYPE',
            tilVerdi: 'ES_ADOPSJONSVILKAARET_TYPE',
            klTilVerdi: 'HENDELSE_TYPE',
          }),
          lagEndretFelt({
            endretFeltNavn: 'HENDELSE_UNDER_AARSAK',
            klNavn: 'HISTORIKK_ENDRET_FELT_TYPE',
            tilVerdi: 'ES_IKKE_OPPFYLT',
            klTilVerdi: 'HENDELSE_UNDERTYPE',
          }),
        ],
      }),
    ],
  }),
];

export default historikkAlleMaler;

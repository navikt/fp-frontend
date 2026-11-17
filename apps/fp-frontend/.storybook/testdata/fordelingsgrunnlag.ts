import { type Fordelingsgrunnlag } from '@navikt/fp-types';

export const fordelingsgrunnlag: Fordelingsgrunnlag = {
  refusjonsandeler: [
    {
      arbeidsgiverIdent: '992257822',
      journalpostId: '0000',
      kilde: 'INNTEKTSMELDING',
      refusjonsperioder: [
        {
          fom: '2017-08-01',
          tom: '2017-10-31',
          refusjonPrMnd: 20_000,
          utfall: 'INNVILGET',
        },
        {
          fom: '2017-11-01',
          tom: '9999-12-31',
          refusjonPrMnd: 15_000,
          utfall: 'REDUSERT',
          utfallÅrsak: 'IKKE_INNENFOR_FRIST',
          utfallBegrunnelse: 'Refusjonskravet kom inn etter fristen for deler av perioden.',
        },
      ],
    },
    {
      arbeidsgiverIdent: '992260475',
      kilde: 'SAKSBEHANDLER',
      refusjonsperioder: [
        {
          fom: '2017-08-01',
          tom: '9999-12-31',
          refusjonPrMnd: 0,
          utfall: 'AVSLÅTT',
          utfallÅrsak: 'UTMELDT',
        },
      ],
    },
  ],
};

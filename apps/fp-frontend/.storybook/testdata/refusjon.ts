import { type Refusjon } from '@navikt/fp-types';

export const refusjon: Refusjon = {
  refusjonsandeler: [
    {
      arbeidsgiverIdent: '992257822',
      kilde: 'IM',
      refusjonsperioder: [
        {
          fom: '2017-08-01',
          tom: '2017-10-31',
          refusjonsbeløpPrMnd: 20_000,
          fristForInnsendingAvRefusjonskrav: '2017-11-30',
          tidligsteMuligeDatoMedRefusjonEtterFrist: '2017-08-01',
          datoForInnsendtEllerEndretIM: '2017-08-15',
          utfall: 'INNVILGET',
        },
        {
          fom: '2017-11-01',
          tom: '9999-12-31',
          refusjonsbeløpPrMnd: 15_000,
          fristForInnsendingAvRefusjonskrav: '2018-02-28',
          tidligsteMuligeDatoMedRefusjonEtterFrist: '2017-11-01',
          datoForInnsendtEllerEndretIM: '2018-03-10',
          utfall: 'REDUSERT',
          utfallÅrsak: 'UTMELDT',
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
          refusjonsbeløpPrMnd: 0,
          fristForInnsendingAvRefusjonskrav: '2017-11-30',
          tidligsteMuligeDatoMedRefusjonEtterFrist: '2017-08-01',
          datoForInnsendtEllerEndretIM: '2017-08-20',
          utfall: 'AVSLÅTT',
          utfallÅrsak: 'AVTALT_MED_ARBEIDSGIVER',
        },
      ],
    },
  ],
};

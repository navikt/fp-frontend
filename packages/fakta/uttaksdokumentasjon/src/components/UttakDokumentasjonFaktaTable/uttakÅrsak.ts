import { assertUnreachable } from '@navikt/ft-utils';

import type { UttakÅrsak } from '@navikt/fp-types';

export const getUttakÅrsakTekst = (årsak: UttakÅrsak) => {
  switch (årsak) {
    case 'INNLEGGELSE_SØKER':
      return 'UttakDokumentasjonFaktaTable.InnleggelseSoker';
    case 'INNLEGGELSE_BARN':
      return 'UttakDokumentasjonFaktaTable.InnleggelseBarn';
    case 'HV_ØVELSE':
      return 'UttakDokumentasjonFaktaTable.HvOvelse';
    case 'NAV_TILTAK':
      return 'UttakDokumentasjonFaktaTable.NavTiltak';
    case 'SYKDOM_SØKER':
      return 'UttakDokumentasjonFaktaTable.SykdomSoker';
    case 'SYKDOM_ANNEN_FORELDER':
      return 'UttakDokumentasjonFaktaTable.SykdomAnnenForelder';
    case 'INNLEGGELSE_ANNEN_FORELDER':
      return 'UttakDokumentasjonFaktaTable.InnleggelseAnnenForelder';
    case 'BARE_SØKER_RETT':
      return 'UttakDokumentasjonFaktaTable.BareSokerRett';
    case 'ALENEOMSORG':
      return 'UttakDokumentasjonFaktaTable.Aleneomsorg';
    case 'AKTIVITETSKRAV_ARBEID':
      return 'UttakDokumentasjonFaktaTable.AktivitetskravArbeid';
    case 'AKTIVITETSKRAV_UTDANNING':
      return 'UttakDokumentasjonFaktaTable.AktivitetskravUtdanning';
    case 'AKTIVITETSKRAV_KVALPROG':
      return 'UttakDokumentasjonFaktaTable.AktivitetskravKvalprog';
    case 'AKTIVITETSKRAV_INTROPROG':
      return 'UttakDokumentasjonFaktaTable.AktivitetskravIntroprog';
    case 'AKTIVITETSKRAV_TRENGER_HJELP':
      return 'UttakDokumentasjonFaktaTable.AktivitetskravTrengerHjelp';
    case 'AKTIVITETSKRAV_INNLAGT':
      return 'UttakDokumentasjonFaktaTable.AktivitetskravInnlagt';
    case 'AKTIVITETSKRAV_ARBEID_OG_UTDANNING':
      return 'UttakDokumentasjonFaktaTable.AktivitetskravArbeidUtdanning';
    case 'AKTIVITETSKRAV_IKKE_OPPGITT':
      return 'UttakDokumentasjonFaktaTable.AktivitetskravIkkeOppgitt';
    case 'TIDLIG_OPPSTART_FAR':
      return 'UttakDokumentasjonFaktaTable.TidligOppstartFar';
    default:
      return assertUnreachable(årsak);
  }
};

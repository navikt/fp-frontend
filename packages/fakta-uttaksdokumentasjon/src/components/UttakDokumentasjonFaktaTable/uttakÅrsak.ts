import { UttakÅrsak } from '@navikt/fp-types';
import assertUnreachable from '../../utils/switchCaseUtils';

const getUttakÅrsakTekst = (årsak: UttakÅrsak) => {
  switch (årsak) {
    case UttakÅrsak.INNLEGGELSE_SØKER:
      return 'UttakDokumentasjonFaktaTable.InnleggelseSoker';
    case UttakÅrsak.INNLEGGELSE_BARN:
      return 'UttakDokumentasjonFaktaTable.InnleggelseBarn';
    case UttakÅrsak.HV_ØVELSE:
      return 'UttakDokumentasjonFaktaTable.HvOvelse';
    case UttakÅrsak.NAV_TILTAK:
      return 'UttakDokumentasjonFaktaTable.NavTiltak';
    case UttakÅrsak.SYKDOM_SØKER:
      return 'UttakDokumentasjonFaktaTable.SykdomSoker';
    case UttakÅrsak.SYKDOM_ANNEN_FORELDER:
      return 'UttakDokumentasjonFaktaTable.SykdomAnnenForelder';
    case UttakÅrsak.INNLEGGELSE_ANNEN_FORELDER:
      return 'UttakDokumentasjonFaktaTable.InnleggelseAnnenForelder';
    case UttakÅrsak.BARE_SØKER_RETT:
      return 'UttakDokumentasjonFaktaTable.BareSokerRett';
    case UttakÅrsak.ALENEOMSORG:
      return 'UttakDokumentasjonFaktaTable.Aleneomsorg';
    case UttakÅrsak.AKTIVITETSKRAV_ARBEID:
      return 'UttakDokumentasjonFaktaTable.AktivitetskravArbeid';
    case UttakÅrsak.AKTIVITETSKRAV_UTDANNING:
      return 'UttakDokumentasjonFaktaTable.AktivitetskravUtdanning';
    case UttakÅrsak.AKTIVITETSKRAV_KVALPROG:
      return 'UttakDokumentasjonFaktaTable.AktivitetskravKvalprog';
    case UttakÅrsak.AKTIVITETSKRAV_INTROPROG:
      return 'UttakDokumentasjonFaktaTable.AktivitetskravIntroprog';
    case UttakÅrsak.AKTIVITETSKRAV_TRENGER_HJELP:
      return 'UttakDokumentasjonFaktaTable.AktivitetskravTrengerHjelp';
    case UttakÅrsak.AKTIVITETSKRAV_INNLAGT:
      return 'UttakDokumentasjonFaktaTable.AktivitetskravInnlagt';
    case UttakÅrsak.AKTIVITETSKRAV_ARBEID_OG_UTDANNING:
      return 'UttakDokumentasjonFaktaTable.AktivitetskravArbeidUtdanning';
    case UttakÅrsak.AKTIVITETSKRAV_IKKE_OPPGITT:
      return 'UttakDokumentasjonFaktaTable.AktivitetskravIkkeOppgitt';
    case UttakÅrsak.TIDLIG_OPPSTART_FAR:
      return 'UttakDokumentasjonFaktaTable.TidligOppstartFar';
    default:
      return assertUnreachable(årsak);
  }
};

export default getUttakÅrsakTekst;

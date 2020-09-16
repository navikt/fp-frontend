import soknadType from '@fpsak-frontend/kodeverk/src/soknadType';
import { FamilieHendelse, Personopplysninger, Soknad } from '@fpsak-frontend/types';
import { diff } from '@fpsak-frontend/utils';

const hasValue = (value: any) => value !== null && value !== undefined;

const isNotEqual = (soknadValue: any, familiehendelseValue: any) => hasValue(familiehendelseValue) && soknadValue !== familiehendelseValue;

const getIsUtstedtDatoEdited = (soknad: Soknad, familiehendelse: FamilieHendelse) => isNotEqual(soknad.utstedtdato, familiehendelse.utstedtdato);

const getIsTerminDatoEdited = (soknad: Soknad, familiehendelse: FamilieHendelse) => isNotEqual(soknad.termindato, familiehendelse.termindato);

const getIsAntallBarnEdited = (soknad: Soknad, familiehendelse: FamilieHendelse) => isNotEqual(soknad.antallBarn, familiehendelse.antallBarnTermin);

const getIsVilkarTypeEdited = (familiehendelse: FamilieHendelse) => hasValue(familiehendelse.vilkarType);

const getIsAdopsjonFodelsedatoerEdited = (soknad: Soknad, familiehendelse: FamilieHendelse) => diff(soknad.adopsjonFodelsedatoer,
  familiehendelse.adopsjonFodelsedatoer);

const getIsOmsorgsovertakelseDatoEdited = (soknad: Soknad, familiehendelse: FamilieHendelse) => isNotEqual(soknad.omsorgsovertakelseDato,
  familiehendelse.omsorgsovertakelseDato);

const getIsBarnetsAnkomstTilNorgeDatoEdited = (
  soknad: any, familiehendelse: any,
) => isNotEqual(soknad.barnetsAnkomstTilNorgeDato, familiehendelse.barnetsAnkomstTilNorgeDato);

const getIsAntallBarnOmsorgOgForeldreansvarEdited = (soknad: Soknad, familiehendelse: FamilieHendelse) => isNotEqual(soknad.antallBarn,
  familiehendelse.antallBarnTilBeregning);

const getIsFodselsdatoerEdited = (soknad: Soknad, personopplysning: Personopplysninger) => {
  const soknadFodselsdatoer = soknad.soknadType.kode === soknadType.FODSEL
    ? soknad.fodselsdatoer
    : soknad.adopsjonFodelsedatoer;

  const barn = personopplysning.barnSoktFor;

  const fodselsdatoerEdited = Object.keys(soknadFodselsdatoer)
    .filter((barnNummer) => barn.some((b: Personopplysninger) => `${b.nummer}` === barnNummer))
    .map((barnNummer) => ({
      [barnNummer]: barn.find((b: any) => `${b.nummer}` === barnNummer).fodselsdato !== soknadFodselsdatoer[barnNummer],
    }))
    .reduce((a, b) => ({ ...a, ...b }), {});

  return fodselsdatoerEdited;
};

const getIsEktefellesBarnEdited = (familiehendelse: FamilieHendelse) => hasValue(familiehendelse.ektefellesBarn);

const getIsMannAdoptererAleneEdited = (familiehendelse: FamilieHendelse) => hasValue(familiehendelse.mannAdoptererAlene);

const getIsDokumentasjonForeliggerEdited = (familiehendelse: FamilieHendelse) => hasValue(familiehendelse.dokumentasjonForeligger);

const isFieldEdited = (
  soknad: Soknad = {} as Soknad,
  familiehendelse: FamilieHendelse = {} as FamilieHendelse,
  personopplysning: Personopplysninger = {} as Personopplysninger,
) => ({
  termindato: getIsTerminDatoEdited(soknad, familiehendelse),
  antallBarn: getIsAntallBarnEdited(soknad, familiehendelse),
  utstedtdato: getIsUtstedtDatoEdited(soknad, familiehendelse),
  adopsjonFodelsedatoer: getIsAdopsjonFodelsedatoerEdited(soknad, familiehendelse),
  omsorgsovertakelseDato: getIsOmsorgsovertakelseDatoEdited(soknad, familiehendelse),
  barnetsAnkomstTilNorgeDato: getIsBarnetsAnkomstTilNorgeDatoEdited(soknad, familiehendelse),
  antallBarnOmsorgOgForeldreansvar: getIsAntallBarnOmsorgOgForeldreansvarEdited(soknad, familiehendelse),
  fodselsdatoer: getIsFodselsdatoerEdited(soknad, personopplysning),
  vilkarType: getIsVilkarTypeEdited(familiehendelse),
  ektefellesBarn: getIsEktefellesBarnEdited(familiehendelse),
  mannAdoptererAlene: getIsMannAdoptererAleneEdited(familiehendelse),
  dokumentasjonForeligger: getIsDokumentasjonForeliggerEdited(familiehendelse),
});

export default isFieldEdited;

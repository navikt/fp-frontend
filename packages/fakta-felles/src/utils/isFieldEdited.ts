import soknadType from '@fpsak-frontend/kodeverk/src/soknadType';
import {
  FamilieHendelse, Kodeverk, Personopplysninger, Soknad,
} from '@fpsak-frontend/types';
import { diff } from '@fpsak-frontend/utils';

const hasValue = (value: string | number | boolean | Kodeverk): boolean => value !== null && value !== undefined;

const isNotEqual = (value1: number | string, value2: number | string): boolean => hasValue(value2) && value1 !== value2;

const getIsUtstedtDatoEdited = (soknad: Soknad, familiehendelse: FamilieHendelse): boolean => isNotEqual(soknad.utstedtdato, familiehendelse.utstedtdato);

const getIsTerminDatoEdited = (soknad: Soknad, familiehendelse: FamilieHendelse): boolean => isNotEqual(soknad.termindato, familiehendelse.termindato);

const getIsAntallBarnEdited = (soknad: Soknad, familiehendelse: FamilieHendelse): boolean => isNotEqual(soknad.antallBarn, familiehendelse.antallBarnTermin);

const getIsVilkarTypeEdited = (familiehendelse: FamilieHendelse): boolean => hasValue(familiehendelse.vilkarType);

const getIsAdopsjonFodelsedatoerEdited = (soknad: Soknad, familiehendelse: FamilieHendelse): boolean | Record<string, boolean> => diff(
  soknad.adopsjonFodelsedatoer, familiehendelse.adopsjonFodelsedatoer,
);

const getIsOmsorgsovertakelseDatoEdited = (soknad: Soknad, familiehendelse: FamilieHendelse): boolean => isNotEqual(soknad.omsorgsovertakelseDato,
  familiehendelse.omsorgsovertakelseDato);

const getIsBarnetsAnkomstTilNorgeDatoEdited = (
  soknad: Soknad, familiehendelse: FamilieHendelse,
): boolean => isNotEqual(soknad.barnetsAnkomstTilNorgeDato, familiehendelse.ankomstNorge);

const getIsAntallBarnOmsorgOgForeldreansvarEdited = (soknad: Soknad, familiehendelse: FamilieHendelse): boolean => isNotEqual(soknad.antallBarn,
  familiehendelse.antallBarnTilBeregning);

const getIsFodselsdatoerEdited = (soknad: Soknad, personopplysning: Personopplysninger): Record<number, boolean> => {
  const soknadFodselsdatoer = soknad.soknadType.kode === soknadType.FODSEL
    ? soknad.fodselsdatoer
    : soknad.adopsjonFodelsedatoer;

  const barn = personopplysning.barnSoktFor;

  const fodselsdatoerEdited = Object.keys(soknadFodselsdatoer)
    .filter((barnNummer) => barn.some((b: Personopplysninger) => `${b.nummer}` === barnNummer))
    .map((barnNummer) => ({
      [barnNummer]: barn.find((b) => `${b.nummer}` === barnNummer).fodselsdato !== soknadFodselsdatoer[barnNummer],
    }))
    .reduce((a, b) => ({ ...a, ...b }), {});

  return fodselsdatoerEdited;
};

const getIsEktefellesBarnEdited = (familiehendelse: FamilieHendelse): boolean => hasValue(familiehendelse.ektefellesBarn);

const getIsMannAdoptererAleneEdited = (familiehendelse: FamilieHendelse): boolean => hasValue(familiehendelse.mannAdoptererAlene);

const getIsDokumentasjonForeliggerEdited = (familiehendelse: FamilieHendelse): boolean => hasValue(familiehendelse.dokumentasjonForeligger);

export type FieldEditedInfo = {
  termindato?: boolean;
  antallBarn?: boolean;
  utstedtdato?: boolean;
  adopsjonFodelsedatoer?: boolean | Record<string, boolean>;
  omsorgsovertakelseDato?: boolean;
  barnetsAnkomstTilNorgeDato?: boolean;
  antallBarnOmsorgOgForeldreansvar?: boolean;
  fodselsdatoer?: boolean | Record<string, boolean>;
  vilkarType?: boolean;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  dokumentasjonForeligger?: boolean;
}

const isFieldEdited = (
  soknad: Soknad = {} as Soknad,
  familiehendelse: FamilieHendelse = {} as FamilieHendelse,
  personopplysning?: Personopplysninger,
): FieldEditedInfo => ({
  termindato: getIsTerminDatoEdited(soknad, familiehendelse),
  antallBarn: getIsAntallBarnEdited(soknad, familiehendelse),
  utstedtdato: getIsUtstedtDatoEdited(soknad, familiehendelse),
  adopsjonFodelsedatoer: getIsAdopsjonFodelsedatoerEdited(soknad, familiehendelse),
  omsorgsovertakelseDato: getIsOmsorgsovertakelseDatoEdited(soknad, familiehendelse),
  barnetsAnkomstTilNorgeDato: getIsBarnetsAnkomstTilNorgeDatoEdited(soknad, familiehendelse),
  antallBarnOmsorgOgForeldreansvar: getIsAntallBarnOmsorgOgForeldreansvarEdited(soknad, familiehendelse),
  fodselsdatoer: personopplysning ? getIsFodselsdatoerEdited(soknad, personopplysning) : undefined,
  vilkarType: getIsVilkarTypeEdited(familiehendelse),
  ektefellesBarn: getIsEktefellesBarnEdited(familiehendelse),
  mannAdoptererAlene: getIsMannAdoptererAleneEdited(familiehendelse),
  dokumentasjonForeligger: getIsDokumentasjonForeliggerEdited(familiehendelse),
});

export default isFieldEdited;

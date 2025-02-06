import { diff } from '@navikt/ft-utils';

import type { FamilieHendelse, Soknad } from '@navikt/fp-types';

const hasValue = (value: string | number | boolean | undefined): boolean => value !== null && value !== undefined;

const isNotEqual = (value1: number | string | undefined, value2: number | string | undefined): boolean =>
  hasValue(value2) && value1 !== value2;

const getIsUtstedtDatoEdited = (soknad: Soknad, familiehendelse: FamilieHendelse): boolean =>
  isNotEqual(soknad.utstedtdato, familiehendelse.utstedtdato);

const getIsTerminDatoEdited = (soknad: Soknad, familiehendelse: FamilieHendelse): boolean =>
  isNotEqual(soknad.termindato, familiehendelse.termindato);

const getIsAntallBarnEdited = (soknad: Soknad, familiehendelse: FamilieHendelse): boolean =>
  isNotEqual(soknad.antallBarn, familiehendelse.antallBarnTermin);

const getIsVilkarTypeEdited = (familiehendelse: FamilieHendelse): boolean => hasValue(familiehendelse.vilkarType);

const getIsAdopsjonFodelsedatoerEdited = (
  soknad: Soknad,
  familiehendelse: FamilieHendelse,
  // @ts-expect-error diff bør endrast så den gir ein meir forutsigbar output
): Record<string, boolean> => diff(soknad.adopsjonFodelsedatoer, familiehendelse.adopsjonFodelsedatoer);

const getIsOmsorgsovertakelseDatoEdited = (soknad: Soknad, familiehendelse: FamilieHendelse): boolean =>
  isNotEqual(soknad.omsorgsovertakelseDato, familiehendelse.omsorgsovertakelseDato);

const getIsBarnetsAnkomstTilNorgeDatoEdited = (soknad: Soknad, familiehendelse: FamilieHendelse): boolean =>
  isNotEqual(soknad.barnetsAnkomstTilNorgeDato, familiehendelse.ankomstNorge);

const getIsAntallBarnOmsorgOgForeldreansvarEdited = (soknad: Soknad, familiehendelse: FamilieHendelse): boolean =>
  isNotEqual(soknad.antallBarn, familiehendelse.antallBarnTilBeregning);

const getIsEktefellesBarnEdited = (familiehendelse: FamilieHendelse): boolean =>
  hasValue(familiehendelse.ektefellesBarn);

const getIsMannAdoptererAleneEdited = (familiehendelse: FamilieHendelse): boolean =>
  hasValue(familiehendelse.mannAdoptererAlene);

const getIsDokumentasjonForeliggerEdited = (familiehendelse: FamilieHendelse): boolean =>
  hasValue(familiehendelse.dokumentasjonForeligger);

export type FieldEditedInfo = {
  termindato?: boolean;
  antallBarn?: boolean;
  utstedtdato?: boolean;
  adopsjonFodelsedatoer?: Record<string, boolean>;
  omsorgsovertakelseDato?: boolean;
  barnetsAnkomstTilNorgeDato?: boolean;
  antallBarnOmsorgOgForeldreansvar?: boolean;
  vilkarType?: boolean;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  dokumentasjonForeligger?: boolean;
};

const isFieldEdited = (
  soknad: Soknad = {} as Soknad,
  gjeldendeFamiliehendelse: FamilieHendelse = {} as FamilieHendelse,
): FieldEditedInfo => ({
  termindato: getIsTerminDatoEdited(soknad, gjeldendeFamiliehendelse),
  antallBarn: getIsAntallBarnEdited(soknad, gjeldendeFamiliehendelse),
  utstedtdato: getIsUtstedtDatoEdited(soknad, gjeldendeFamiliehendelse),
  adopsjonFodelsedatoer: getIsAdopsjonFodelsedatoerEdited(soknad, gjeldendeFamiliehendelse),
  omsorgsovertakelseDato: getIsOmsorgsovertakelseDatoEdited(soknad, gjeldendeFamiliehendelse),
  barnetsAnkomstTilNorgeDato: getIsBarnetsAnkomstTilNorgeDatoEdited(soknad, gjeldendeFamiliehendelse),
  antallBarnOmsorgOgForeldreansvar: getIsAntallBarnOmsorgOgForeldreansvarEdited(soknad, gjeldendeFamiliehendelse),
  vilkarType: getIsVilkarTypeEdited(gjeldendeFamiliehendelse),
  ektefellesBarn: getIsEktefellesBarnEdited(gjeldendeFamiliehendelse),
  mannAdoptererAlene: getIsMannAdoptererAleneEdited(gjeldendeFamiliehendelse),
  dokumentasjonForeligger: getIsDokumentasjonForeliggerEdited(gjeldendeFamiliehendelse),
});

export default isFieldEdited;

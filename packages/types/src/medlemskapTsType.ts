import type {
  MedlemskapDekningType,
  MedlemskapManuellVurderingType,
  MedlemskapType,
  OppholdstillatelseType,
  PersonstatusType,
  Region,
} from '@navikt/fp-kodeverk';

import type { Personadresse } from './personadresseTsType';

export type RegionPeriode = Readonly<{
  fom: string;
  tom: string | null;
  type: Region;
}>;

export type PersonstatusPeriode = Readonly<{
  fom: string;
  tom: string | null;
  type: PersonstatusType;
}>;

export type OppholdstillatelsePeriode = Readonly<{
  fom: string;
  tom: string | null;
  type: OppholdstillatelseType;
}>;

type UtenlandsoppholdPeriode = Readonly<{
  fom: string;
  tom: string | null;
  landkode: string;
}>;

export type MedlemskapPeriode = Readonly<{
  fom: string;
  tom: string | null;
  erMedlem: boolean;
  lovvalgsland: string | null;
  studieland: string | null;
  medlemskapType: MedlemskapType;
  dekningType: MedlemskapDekningType;
  beslutningsdato: string;
}>;

export enum MedlemskapAvvik {
  BOSATT_UTENLANDSOPPHOLD = 'BOSATT_UTENLANDSOPPHOLD',
  BOSATT_MANGLENDE_BOSTEDSADRESSE = 'BOSATT_MANGLENDE_BOSTEDSADRESSE',
  BOSATT_UTENLANDSADRESSE = 'BOSATT_UTENLANDSADRESSE',
  BOSATT_UGYLDIG_PERSONSTATUS = 'BOSATT_UGYLDIG_PERSONSTATUS',
  TREDJELAND_MANGLENDE_LOVLIG_OPPHOLD = 'TREDJELAND_MANGLENDE_LOVLIG_OPPHOLD',
  EØS_MANGLENDE_ANSETTELSE_MED_INNTEKT = 'EØS_MANGLENDE_ANSETTELSE_MED_INNTEKT',
  MEDL_PERIODER = 'MEDL_PERIODER',
}

export type LegacyMedlemPeriode = Readonly<{
  vurderingsdato: string;
  oppholdsrettVurdering?: boolean;
  erEosBorger?: boolean;
  lovligOppholdVurdering?: boolean;
  bosattVurdering?: boolean;
  medlemskapManuellVurderingType?: MedlemskapManuellVurderingType;
  begrunnelse?: string;
}>;

export type LegacyManuellMedlemskapsBehandling = Readonly<{
  perioder: LegacyMedlemPeriode[];
}>;

export type ManuellBehandlingResultat = Readonly<{
  avslagskode: string | null;
  medlemFom: string | null;
  opphørFom: string | null;
}>;

type Annenpart = {
  adresser: Personadresse[];
  regioner: RegionPeriode[];
  personstatuser: PersonstatusPeriode[];
};

export type Medlemskap = Readonly<{
  manuellBehandlingResultat: ManuellBehandlingResultat | null;
  legacyManuellBehandling: LegacyManuellMedlemskapsBehandling | null;
  regioner: RegionPeriode[];
  personstatuser: PersonstatusPeriode[];
  utenlandsopphold: UtenlandsoppholdPeriode[];
  adresser: Personadresse[];
  oppholdstillatelser: OppholdstillatelsePeriode[];
  medlemskapsperioder: MedlemskapPeriode[];
  avvik: MedlemskapAvvik[];
  annenpart: Annenpart | null;
}>;

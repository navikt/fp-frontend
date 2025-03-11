import { MedlemskapAvvik } from '@navikt/fp-types';

export const relevantForUtenlandsopphold = [MedlemskapAvvik.BOSATT_UTENLANDSOPPHOLD];
export const relevantForAdresser = [
  MedlemskapAvvik.BOSATT_MANGLENDE_BOSTEDSADRESSE,
  MedlemskapAvvik.BOSATT_UTENLANDSADRESSE,
];
export const relevantForPersonstatus = [MedlemskapAvvik.BOSATT_UGYLDIG_PERSONSTATUS];
export const relevantForMedl = [MedlemskapAvvik.MEDL_PERIODER];
export const relevantForOppholdstillatelser = [MedlemskapAvvik.TREDJELAND_MANGLENDE_LOVLIG_OPPHOLD];
export const relevantForAnsettelseOgInntekt = [MedlemskapAvvik.EØS_MANGLENDE_ANSETTELSE_MED_INNTEKT];

import { AlleKodeverk, MedlemskapV3, UtlandsoppholdPeriode } from '@navikt/fp-types';
import { getKodeverknavnFn, KodeverkType, landkoder, opplysningAdresseType } from '@navikt/fp-kodeverk';
import { IntlShape } from 'react-intl';

import { sorterPerioder } from '../../utils/periodeUtils';
import { toTitleCapitalization } from '../../utils/stringUtils';

export const getSisteRegion = (medlemskap: MedlemskapV3, alleKodeverk: AlleKodeverk): string | null => {
  const alleRegioner = alleKodeverk[KodeverkType.REGION];
  const nyesteRegion = medlemskap.regioner.sort(sorterPerioder)[0];
  return alleRegioner.find(r => r.kode === nyesteRegion.type)?.navn ?? null;
};

export const getSistePersonstatus = (medlemskap: MedlemskapV3, alleKodeverk: AlleKodeverk): string | null => {
  const nyeste = medlemskap.personstatuser.sort(sorterPerioder)[0];
  if (nyeste) {
    return getKodeverknavnFn(alleKodeverk)(nyeste.type, KodeverkType.PERSONSTATUS_TYPE);
  }
  return null;
};

export const getSisteBostedsLand = (medlemskap: MedlemskapV3, intl: IntlShape): string | null => {
  const nyeste = medlemskap.adresser
    .filter(adresse => adresse.adresse.adresseType === opplysningAdresseType.BOSTEDSADRESSE)
    .sort(sorterPerioder)[0]?.adresse.land;
  if (!nyeste) return null;
  if ([landkoder.NORGE, 'Norge'].includes(nyeste)) {
    return intl.formatMessage({ id: 'Situasjon.INorge' });
  }
  return intl.formatMessage({ id: 'Situasjon.IUtlandet' });
};

export const formaterUtenlandsopphold = (
  utenlandsopphold: UtlandsoppholdPeriode[],
  alleKodeverk: AlleKodeverk,
  intl: IntlShape,
): string => {
  if (utenlandsopphold.length > 1) {
    return intl.formatMessage({ id: 'Situasjon.FlereLand' });
  }
  const landNavn =
    utenlandsopphold.length === 1
      ? utenlandsopphold[0].landNavn
      : getKodeverknavnFn(alleKodeverk)(landkoder.NORGE, KodeverkType.LANDKODER);

  return intl.formatMessage({ id: 'Situasjon.ILand' }, { land: toTitleCapitalization(landNavn) });
};

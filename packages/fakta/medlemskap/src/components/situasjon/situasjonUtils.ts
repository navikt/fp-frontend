import { type IntlShape } from 'react-intl';

import { sorterPerioder } from '@navikt/fp-fakta-felles';
import { AdresseType, getKodeverknavnFn, KodeverkType, Landkode } from '@navikt/fp-kodeverk';
import type { AlleKodeverk, Medlemskap, UtlandsoppholdPeriode } from '@navikt/fp-types';

import { toTitleCapitalization } from '../../utils/stringUtils';

export const getSisteRegion = (medlemskap: Medlemskap, alleKodeverk: AlleKodeverk, intl: IntlShape): string => {
  const alleRegioner = alleKodeverk[KodeverkType.REGION];
  const nyesteRegion = medlemskap.regioner.sort(sorterPerioder)[0];
  return alleRegioner.find(r => r.kode === nyesteRegion.type)?.navn ?? intl.formatMessage({ id: 'Situasjon.Ukjent' });
};

export const getSistePersonstatus = (medlemskap: Medlemskap, alleKodeverk: AlleKodeverk, intl: IntlShape): string => {
  const nyeste = medlemskap.personstatuser.sort(sorterPerioder)[0];
  if (nyeste) {
    return getKodeverknavnFn(alleKodeverk)(nyeste.type, KodeverkType.PERSONSTATUS_TYPE);
  }
  return intl.formatMessage({ id: 'Situasjon.Ukjent' });
};

export const getSisteBostedsLand = (medlemskap: Medlemskap, intl: IntlShape): string => {
  const nyeste = medlemskap.adresser
    .filter(adresse => adresse.adresseType === AdresseType.BOSTEDSADRESSE)
    .sort(sorterPerioder)[0]?.land;
  if (!nyeste) return intl.formatMessage({ id: 'Situasjon.Ukjent' });
  if ([Landkode.NORGE, 'Norge'].includes(nyeste)) {
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
      : getKodeverknavnFn(alleKodeverk)(Landkode.NORGE, KodeverkType.LANDKODER);

  return intl.formatMessage({ id: 'Situasjon.ILand' }, { land: toTitleCapitalization(landNavn) });
};

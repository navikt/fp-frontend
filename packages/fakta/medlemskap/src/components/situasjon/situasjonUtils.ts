import { type IntlShape } from 'react-intl';

import { sorterPerioder } from '@navikt/fp-fakta-felles';
import { AdresseType, Landkode } from '@navikt/fp-kodeverk';
import type { AlleKodeverk, Medlemskap, UtlandsoppholdPeriode } from '@navikt/fp-types';

import { toTitleCapitalization } from '../../utils/stringUtils';

export const getSisteRegion = (medlemskap: Medlemskap, alleKodeverk: AlleKodeverk, intl: IntlShape): string => {
  const alleRegioner = alleKodeverk['Region'];
  const nyesteRegion = medlemskap.regioner.sort(sorterPerioder)[0];
  return alleRegioner.find(r => r.kode === nyesteRegion.type)?.navn ?? intl.formatMessage({ id: 'Situasjon.Ukjent' });
};

export const getSistePersonstatus = (medlemskap: Medlemskap, alleKodeverk: AlleKodeverk, intl: IntlShape): string => {
  const nyeste = medlemskap.personstatuser.sort(sorterPerioder)[0];
  if (nyeste) {
    return alleKodeverk['PersonstatusType'].find(type => type.kode === nyeste.type)?.navn ?? '';
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
      : (alleKodeverk['Landkoder'].find(type => type.kode === Landkode.NORGE)?.navn ?? '');

  return intl.formatMessage({ id: 'Situasjon.ILand' }, { land: toTitleCapitalization(landNavn) });
};

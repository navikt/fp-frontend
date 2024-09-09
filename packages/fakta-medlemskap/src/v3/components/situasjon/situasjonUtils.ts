import { MedlemskapV3, UtlandsoppholdPeriode } from '@navikt/fp-types';
import { getKodeverknavnFn, KodeverkType, opplysningAdresseType } from '@navikt/fp-kodeverk';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import kodeverkTyper from '@navikt/fp-kodeverk/src/kodeverkTyper';
import { IntlShape } from 'react-intl';
import { toTitleCapitalization } from '../../utils/stringUtils';
import { sorterPerioder } from '../../utils/periodeUtils';

const formaterLand = (landNavn: string, intl: IntlShape) => {
  return intl.formatMessage({ id: 'Situasjon.ILand' }, { land: toTitleCapitalization(landNavn) });
};

export const getSisteRegion = (medlemskap: MedlemskapV3): string => {
  const alleRegioner = alleKodeverk[KodeverkType.REGION];
  const nyesteRegion = medlemskap.regioner.sort(sorterPerioder)[0];
  return alleRegioner.find(r => r.kode === nyesteRegion.type)?.navn ?? '-';
};

export const getSistePersonstatus = (medlemskap: MedlemskapV3): string => {
  const nyeste = medlemskap.personstatuser.sort(sorterPerioder)[0];
  if (nyeste) {
    const personstatus = getKodeverknavnFn(alleKodeverk)(nyeste.type, KodeverkType.PERSONSTATUS_TYPE);
    if (personstatus) return personstatus;
  }
  return '-';
};

export const getSisteBostedsLand = (medlemskap: MedlemskapV3, intl: IntlShape): string => {
  const nyeste = medlemskap.adresser
    .filter(adresse => adresse.adresse.adresseType === opplysningAdresseType.BOSTEDSADRESSE)
    .sort(sorterPerioder)[0]?.adresse.land;
  if (nyeste) {
    const landNavn = getKodeverknavnFn(alleKodeverk)(nyeste, kodeverkTyper.LANDKODER);
    if (landNavn) return formaterLand(landNavn, intl);
  }
  return '-';
};

export const formaterUtenlandsopphold = (utenlandsopphold: UtlandsoppholdPeriode[], intl: IntlShape): string => {
  if (utenlandsopphold.length == 1) {
    return formaterLand(utenlandsopphold[0].landNavn, intl);
  } else if (utenlandsopphold.length > 1) {
    return intl.formatMessage({ id: 'Situasjon.FlereLand' });
  }
  const landNavn = getKodeverknavnFn(alleKodeverk)('NOR', kodeverkTyper.LANDKODER);
  return formaterLand(landNavn, intl);
};

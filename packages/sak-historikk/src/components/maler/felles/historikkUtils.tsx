import React from 'react';
import { IntlShape } from 'react-intl';

import {
  HistorikkinnslagDel, HistorikkInnslagOpplysning, HistorikkinnslagEndretFelt, Kodeverk,
} from '@fpsak-frontend/types';

import historikkResultatTypeCodes from '../../../kodeverk/historikkResultatTypeCodes';
import historikkEndretFeltVerdiTypeCodes from '../../../kodeverk/historikkEndretFeltVerdiTypeCodes';
import historikkEndretFeltTypeCodes from '../../../kodeverk/historikkEndretFeltTypeCodes';
import historikkOpplysningTypeCodes from '../../../kodeverk/historikkOpplysningTypeCodes';
import historikkSoeknadsperiodeTypeCodes from '../../../kodeverk/historikkSoeknadsperiodeTypeCodes';

export const findIdForOpplysningCode = (opplysning: HistorikkInnslagOpplysning): string => {
  if (!opplysning) {
    return null;
  }
  const typeKode = opplysning.opplysningType.kode;
  const opplysningCode = historikkOpplysningTypeCodes[typeKode];
  if (!opplysningCode) {
    return (`OpplysningTypeCode ${typeKode} finnes ikke-LEGG DET INN`);
  }
  return opplysningCode.feltId;
};

export const findIdForSoeknadsperiodeCode = (soeknadsperiode: HistorikkinnslagDel['soeknadsperiode']): string => {
  if (!soeknadsperiode) {
    return null;
  }
  const typeKode = soeknadsperiode.soeknadsperiodeType.kode;
  const soeknadsperiodeCode = historikkSoeknadsperiodeTypeCodes[typeKode];
  if (!soeknadsperiodeCode) {
    return (`SoeknadsperiodeTypeCode ${typeKode} finnes ikke-LEGG DET INN`);
  }
  return soeknadsperiodeCode.feltId;
};

export const findResultatText = (resultat: string, intl: IntlShape): string => {
  if (!resultat) {
    return null;
  }
  const resultatCode = historikkResultatTypeCodes[resultat];
  if (!resultatCode) {
    return (`ResultatTypeCode ${resultat} finnes ikke-LEGG DET INN`);
  }
  const fieldId = resultatCode.feltId;
  return intl.formatMessage({ id: fieldId }, { b: (chunks) => <b>{chunks}</b>, br: <br /> }) as string;
};

export const findHendelseText = (hendelse: HistorikkinnslagDel['hendelse'], getKodeverknavn: (kodeverk: Kodeverk) => string): string => {
  if (!hendelse) {
    return undefined;
  }
  if (hendelse.verdi === null) {
    return getKodeverknavn(hendelse.navn);
  }
  return `${getKodeverknavn(hendelse.navn)} ${hendelse.verdi}`;
};

const convertToBoolean = (verdi: boolean): string => (verdi === true ? 'Ja' : 'Nei');

export const findEndretFeltVerdi = (endretFelt: HistorikkinnslagEndretFelt, verdi: string | number | boolean, intl: IntlShape): string | number => {
  if (verdi === null) {
    return null;
  }
  if (typeof (verdi) === 'boolean') {
    return convertToBoolean(verdi);
  }
  if (endretFelt.klTilVerdi !== null) {
    const verdiCode = historikkEndretFeltVerdiTypeCodes[verdi];
    if (!verdiCode) {
      return (`EndretFeltVerdiTypeCode ${verdi} finnes ikke-LEGG DET INN`);
    }
    return intl.formatMessage({ id: verdiCode.verdiId });
  }
  return verdi;
};

export const findEndretFeltNavn = (endretFelt: HistorikkinnslagEndretFelt, intl: IntlShape): string => {
  const navnCode = endretFelt.endretFeltNavn.kode;
  const endretFeltNavnType = historikkEndretFeltTypeCodes[navnCode];
  if (!endretFeltNavnType) {
    return (`EndretFeltTypeCode ${navnCode} finnes ikke-LEGG DET INN`);
  }
  const fieldId = endretFeltNavnType.feltId;
  return endretFelt.navnVerdi !== null ? intl.formatMessage({ id: fieldId }, {
    value: endretFelt.navnVerdi,
  }) : intl.formatMessage({ id: fieldId });
};

import type { ReactElement } from 'react';

import type { KodeverkMedNavn, UttakPeriodeType } from '@navikt/fp-types';

export const mapUttakPeriodeTyper = (uttakPeriodeTyper: KodeverkMedNavn<'UttakPeriodeType'>[]): ReactElement[] =>
  uttakPeriodeTyper
    .filter(({ kode }) => gyldigeUttakperioder.has(kode))
    .map(({ kode, navn }) => (
      <option value={kode} key={kode}>
        {navn}
      </option>
    ));

export const mapMorsAktiviteter = (aktiviteter: KodeverkMedNavn<'MorsAktivitet'>[]): ReactElement[] =>
  aktiviteter.map(({ kode, navn }) => (
    <option value={kode} key={kode}>
      {navn}
    </option>
  ));

const gyldigeUttakperioder = new Set<UttakPeriodeType>([
  'FELLESPERIODE',
  'FEDREKVOTE',
  'FORELDREPENGER_FØR_FØDSEL',
  'FORELDREPENGER',
  'MØDREKVOTE',
]);

export const PERIODS_WITH_NO_MORS_AKTIVITET = new Set<UttakPeriodeType>([
  'FEDREKVOTE',
  'FORELDREPENGER_FØR_FØDSEL',
  'MØDREKVOTE',
]);

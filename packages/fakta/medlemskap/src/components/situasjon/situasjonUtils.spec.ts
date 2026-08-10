import { createIntl } from '@navikt/ft-utils';
import { expect } from 'vitest';

import { alleKodeverk } from '@navikt/fp-storybook-utils';
import type { Medlemskap, Personadresse, UtlandsoppholdPeriode } from '@navikt/fp-types';

import { formaterUtenlandsopphold, getSisteBostedsLand, getSistePersonstatus, getSisteRegion } from './situasjonUtils';

import messages from '../../../i18n/nb_NO.json';

const defaultMedlemskapProps: Medlemskap = {
  regioner: [],
  personstatuser: [],
  medlemskapsperioder: [],
  adresser: [],
  oppholdstillatelser: [],
  avvik: [],
  oppgittUtlandsopphold: {
    oppholdNestePeriode: false,
    oppholdSistePeriode: false,
    utlandsoppholdEtter: [],
    utlandsoppholdFør: [],
  },
};

const intl = createIntl(messages);
const kodeverk = alleKodeverk;

describe('situasjonUtils', () => {
  describe('getSisteRegion', () => {
    it('skal returnere region for siste aktuelle regions periode', () => {
      const medlemskap: Medlemskap = {
        ...defaultMedlemskapProps,
        regioner: [
          { fom: '2022-06-02', tom: '2025-02-01', type: 'ANNET' },
          { fom: '2022-07-01', tom: '2025-02-01', type: 'EOS' },
        ],
      };
      expect(getSisteRegion(medlemskap, kodeverk, intl)).toBe('EU/EØS');
    });

    it('skal ikke endre rekkefølgen på regioner som sendes inn', () => {
      const regioner: Medlemskap['regioner'] = [
        { fom: '2022-06-02', tom: '2025-02-01', type: 'ANNET' },
        { fom: '2022-07-01', tom: '2025-02-01', type: 'EOS' },
      ];
      const medlemskap: Medlemskap = {
        ...defaultMedlemskapProps,
        regioner,
      };

      getSisteRegion(medlemskap, kodeverk, intl);

      expect(regioner).toEqual([
        { fom: '2022-06-02', tom: '2025-02-01', type: 'ANNET' },
        { fom: '2022-07-01', tom: '2025-02-01', type: 'EOS' },
      ]);
    });
  });

  describe('getSistePersonstatus', () => {
    it('skal returnere personstatus for siste aktuelle personstatus', () => {
      const medlemskap: Medlemskap = {
        ...defaultMedlemskapProps,
        personstatuser: [
          { fom: '2022-06-02', tom: '2025-02-01', type: 'DØD' },
          { fom: '2022-07-01', tom: '2025-02-01', type: 'UTVA' },
        ],
      };
      expect(getSistePersonstatus(medlemskap, kodeverk, intl)).toBe('Utflyttet');
    });

    it('skal ikke endre rekkefølgen på personstatuser som sendes inn', () => {
      const personstatuser: Medlemskap['personstatuser'] = [
        { fom: '2022-06-02', tom: '2025-02-01', type: 'DØD' },
        { fom: '2022-07-01', tom: '2025-02-01', type: 'UTVA' },
      ];
      const medlemskap: Medlemskap = {
        ...defaultMedlemskapProps,
        personstatuser,
      };

      getSistePersonstatus(medlemskap, kodeverk, intl);

      expect(personstatuser).toEqual([
        { fom: '2022-06-02', tom: '2025-02-01', type: 'DØD' },
        { fom: '2022-07-01', tom: '2025-02-01', type: 'UTVA' },
      ]);
    });
  });

  describe('getSisteBostedsLand', () => {
    it('skal returnere land for siste aktuelle bostedsadresse', () => {
      const medlemskap: Medlemskap = {
        ...defaultMedlemskapProps,
        adresser: [
          {
            fom: '2022-06-02',
            tom: '2025-02-01',
            adresseType: 'BOSTEDSADRESSE',
            land: 'Norge',
          },
          {
            fom: '2022-07-01',
            tom: '2025-02-01',
            adresseType: 'BOSTEDSADRESSE',
            land: 'Finland',
          },
          {
            fom: '2022-07-01',
            tom: '2025-02-01',
            adresseType: 'POSTADRESSE',
            land: 'USA',
          },
        ] satisfies Personadresse[],
      };
      expect(getSisteBostedsLand(medlemskap, intl)).toBe('I utlandet');
    });
  });

  describe('formaterUtenlandsopphold', () => {
    it('skal formatere ingen utelandsopphold', () => {
      expect(formaterUtenlandsopphold([], kodeverk, intl)).toBe('I Norge');
    });

    it('skal formatere et utelandsopphold', () => {
      const utenlandsopphold = [
        {
          fom: '2022-07-01',
          tom: '2025-02-01',
          landNavn: 'Finland',
          landkode: 'FIN',
        } as UtlandsoppholdPeriode,
      ];
      expect(formaterUtenlandsopphold(utenlandsopphold, kodeverk, intl)).toBe('I Finland');
    });

    it('skal formatere flere utelandsopphold', () => {
      const utenlandsopphold = [
        {
          fom: '2023-07-01',
          tom: '2023-09-01',
          landNavn: 'Danmark',
          landkode: 'DNK',
        } as UtlandsoppholdPeriode,
        {
          fom: '2024-07-01',
          tom: '2024-10-01',
          landNavn: 'Finland',
          landkode: 'FIN',
        } as UtlandsoppholdPeriode,
      ];
      expect(formaterUtenlandsopphold(utenlandsopphold, kodeverk, intl)).toBe('I flere land');
    });
  });
});

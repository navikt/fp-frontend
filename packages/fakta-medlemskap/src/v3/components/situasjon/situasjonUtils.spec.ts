import { MedlemskapV3 } from '@navikt/fp-types';
import {
  formaterUtenlandsopphold,
  getSisteBostedsLand,
  getSistePersonstatus,
  getSisteRegion,
  sorterPerioder,
} from './situasjonUtils';
import { opplysningAdresseType } from '@navikt/fp-kodeverk';
import { expect } from 'vitest';
import { createIntl } from '@navikt/ft-utils';
import messages from '../../../../i18n/nb_NO.json';

const defaultMedlemskapProps: MedlemskapV3 = {
  regioner: [],
  personstatuser: [],
  medlemskapsperiode: [],
  adresser: [],
  utenlandsopphold: [],
  oppholdstillatelser: [],
  manuellBehandling: { avvik: [] },
};

const intl = createIntl(messages);

describe('situasjonUtils', () => {
  describe('sortByDate', () => {
    it('skal returnere sortert liste av perioder med nyeste perioder først', () => {
      const perioder = [
        { fom: '2021-03-01', tom: '2021-06-01' },
        { fom: '2022-02-02', tom: '2024-09-01' },
        { fom: '2022-06-02', tom: '2025-02-01' },
        { fom: '2022-07-01', tom: '2025-02-01' },
      ];
      expect(perioder.sort(sorterPerioder)).toStrictEqual([
        { fom: '2022-07-01', tom: '2025-02-01' },
        { fom: '2022-06-02', tom: '2025-02-01' },
        { fom: '2022-02-02', tom: '2024-09-01' },
        { fom: '2021-03-01', tom: '2021-06-01' },
      ]);
    });
  });

  describe('getSisteRegion', () => {
    it('skal returnere region for siste aktuelle regions periode', () => {
      const medlemskap: MedlemskapV3 = {
        ...defaultMedlemskapProps,
        regioner: [
          { fom: '2022-06-02', tom: '2025-02-01', type: 'ANNET' },
          { fom: '2022-07-01', tom: '2025-02-01', type: 'EOS' },
        ],
      };
      expect(getSisteRegion(medlemskap)).toBe('EU/EØS');
    });
  });

  describe('getSistePersonstatus', () => {
    it('skal returnere personstatus for siste aktuelle personstatus', () => {
      const medlemskap: MedlemskapV3 = {
        ...defaultMedlemskapProps,
        personstatuser: [
          { fom: '2022-06-02', tom: '2025-02-01', type: 'DØD' },
          { fom: '2022-07-01', tom: '2025-02-01', type: 'BOSA' },
        ],
      };
      expect(getSistePersonstatus(medlemskap)).toBe('Bosatt');
    });
  });

  describe('getSisteBostedsLand', () => {
    it('skal returnere land for siste aktuelle bostedsadresse', () => {
      const medlemskap: MedlemskapV3 = {
        ...defaultMedlemskapProps,
        adresser: [
          {
            fom: '2022-06-02',
            tom: '2025-02-01',
            adresse: { adresseType: opplysningAdresseType.BOSTEDSADRESSE, land: 'NOR' },
          },
          {
            fom: '2022-07-01',
            tom: '2025-02-01',
            adresse: { adresseType: opplysningAdresseType.BOSTEDSADRESSE, land: 'FIN' },
          },
          {
            fom: '2022-07-01',
            tom: '2025-02-01',
            adresse: { adresseType: opplysningAdresseType.POSTADRESSE, land: 'USA' },
          },
        ],
      };
      expect(getSisteBostedsLand(medlemskap, intl)).toBe('I Finland');
    });
  });

  describe('formaterUtenlandsopphold', () => {
    it('skal formatere ingen utelandsopphold', () => {
      expect(formaterUtenlandsopphold([], intl)).toBe('I Norge');
    });

    it('skal formatere et utelandsopphold', () => {
      const utenlandsopphold = [
        {
          fom: '2022-07-01',
          tom: '2025-02-01',
          landNavn: 'FINLAND',
        },
      ];
      expect(formaterUtenlandsopphold(utenlandsopphold, intl)).toBe('I Finland');
    });

    it('skal formatere flere utelandsopphold', () => {
      const utenlandsopphold = [
        {
          fom: '2023-07-01',
          tom: '2023-09-01',
          landNavn: 'DANMARK',
        },
        {
          fom: '2024-07-01',
          tom: '2024-10-01',
          landNavn: 'FINLAND',
        },
      ];
      expect(formaterUtenlandsopphold(utenlandsopphold, intl)).toBe('I flere land');
    });
  });
});

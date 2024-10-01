import { AlleKodeverk, Medlemskap } from '@navikt/fp-types';
import { formaterUtenlandsopphold, getSisteBostedsLand, getSistePersonstatus, getSisteRegion } from './situasjonUtils';
import { AdresseType } from '@navikt/fp-kodeverk';
import { expect } from 'vitest';
import { createIntl } from '@navikt/ft-utils';
import messages from '../../../i18n/nb_NO.json';
import { alleKodeverk } from '@navikt/fp-storybook-utils';

const defaultMedlemskapProps: Medlemskap = {
  regioner: [],
  personstatuser: [],
  medlemskapsperioder: [],
  adresser: [],
  utenlandsopphold: [],
  oppholdstillatelser: [],
  avvik: [],
  manuellBehandlingResultat: null,
  legacyManuellBehandling: null,
  annenpart: null,
};

const intl = createIntl(messages);
const kodeverk = alleKodeverk as unknown as AlleKodeverk;

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
      expect(getSistePersonstatus(medlemskap, kodeverk, intl)).toBe('Utvandret');
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
            adresse: { adresseType: AdresseType.BOSTEDSADRESSE, land: 'Norge' },
          },
          {
            fom: '2022-07-01',
            tom: '2025-02-01',
            adresse: { adresseType: AdresseType.BOSTEDSADRESSE, land: 'Finland' },
          },
          {
            fom: '2022-07-01',
            tom: '2025-02-01',
            adresse: { adresseType: AdresseType.POSTADRESSE, land: 'USA' },
          },
        ],
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
        },
      ];
      expect(formaterUtenlandsopphold(utenlandsopphold, kodeverk, intl)).toBe('I Finland');
    });

    it('skal formatere flere utelandsopphold', () => {
      const utenlandsopphold = [
        {
          fom: '2023-07-01',
          tom: '2023-09-01',
          landNavn: 'Danmark',
        },
        {
          fom: '2024-07-01',
          tom: '2024-10-01',
          landNavn: 'Finland',
        },
      ];
      expect(formaterUtenlandsopphold(utenlandsopphold, kodeverk, intl)).toBe('I flere land');
    });
  });
});

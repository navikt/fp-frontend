import { FagsakStatus, BehandlingStatus, BehandlingType } from '@navikt/ft-kodeverk';

import { NavAnsatt } from '@navikt/fp-types';

import {
  kanOverstyreAccess,
  writeAccess,
} from './access';

const forEachFagsakAndBehandlingStatus = (callback: (fagsakStatus: string, behandlingStatus: string) => void) => (
  Object.values(FagsakStatus).forEach((fagsakStatus) => Object.values(BehandlingStatus)
    .forEach((behandlingStatus) => callback(fagsakStatus, behandlingStatus)))
);

const getTestName = (accessName: string, expected: boolean, fagsakStatus: string, behandlingStatus: string): string => (
  `skal${expected ? '' : ' ikke'} ha ${accessName} når fagsakStatus er '${fagsakStatus}' og behandlingStatus er '${behandlingStatus}'`
);

describe('access', () => {
  const saksbehandlerAnsatt = { kanSaksbehandle: true } as NavAnsatt;
  const veilederAnsatt = { kanVeilede: true } as NavAnsatt;

  describe('writeAccess', () => {
    const validFagsakStatuser = [FagsakStatus.OPPRETTET, FagsakStatus.UNDER_BEHANDLING];
    const validFagsakStatus = validFagsakStatuser[0];

    const validBehandlingStatuser = [BehandlingStatus.OPPRETTET, BehandlingStatus.BEHANDLING_UTREDES];
    const validBehandlingStatus = validBehandlingStatuser[0];
    const validBehandlingTyper = BehandlingType.FORSTEGANGSSOKNAD;

    it('saksbehandler skal ha skrivetilgang', () => {
      const accessForSaksbehandler = writeAccess(saksbehandlerAnsatt, validFagsakStatus, validBehandlingStatus, validBehandlingTyper);

      expect(accessForSaksbehandler).toHaveProperty('employeeHasAccess', true);
      expect(accessForSaksbehandler).toHaveProperty('isEnabled', true);
    });

    it('veileder skal ikke ha aktivert skrivetilgang', () => {
      const accessForVeileder = writeAccess(veilederAnsatt, validFagsakStatus, validBehandlingStatus, validBehandlingTyper);

      expect(accessForVeileder).toHaveProperty('employeeHasAccess', true);
      expect(accessForVeileder).toHaveProperty('isEnabled', false);
    });

    forEachFagsakAndBehandlingStatus((fagsakStatus: string, behandlingStatus: string) => {
      const expected = validFagsakStatuser.some((fs) => fs === fagsakStatus) && validBehandlingStatuser.some((bs) => bs === behandlingStatus);
      it(`${getTestName('skrivetilgang', expected, fagsakStatus, behandlingStatus)}`, () => {
        const access = writeAccess(saksbehandlerAnsatt, fagsakStatus, behandlingStatus,
          validBehandlingTyper);

        expect(access).toHaveProperty('isEnabled', expected);
      });
    });
  });

  describe('kanOverstyreAccess', () => {
    const validFagsakStatuser = [FagsakStatus.UNDER_BEHANDLING];
    const validFagsakStatus = validFagsakStatuser[0];

    const validBehandlingStatuser = [BehandlingStatus.BEHANDLING_UTREDES];
    const validBehandlingStatus = validBehandlingStatuser[0];
    const validBehandlingTyper = BehandlingType.FORSTEGANGSSOKNAD;

    const saksbehandlerOgOverstyrerAnsatt = { ...saksbehandlerAnsatt, kanOverstyre: true };
    const veilederOgOverstyrerAnsatt = { ...veilederAnsatt, kanOverstyre: false };

    it('saksbehandler med overstyrer-rolle skal ha tilgang til å overstyre', () => {
      const accessForSaksbehandler = kanOverstyreAccess(saksbehandlerOgOverstyrerAnsatt, validFagsakStatus, validBehandlingStatus,
        validBehandlingTyper);

      expect(accessForSaksbehandler).toHaveProperty('employeeHasAccess', true);
      expect(accessForSaksbehandler).toHaveProperty('isEnabled', true);
    });

    it('saksbehandler uten overstyrer-rolle skal ikke ha tilgang til å overstyre', () => {
      const accessForSaksbehandler = kanOverstyreAccess(saksbehandlerAnsatt, validFagsakStatus, validBehandlingStatus, validBehandlingTyper);

      expect(accessForSaksbehandler).toHaveProperty('employeeHasAccess', false);
      expect(accessForSaksbehandler).toHaveProperty('isEnabled', false);
    });

    it('veileder skal ikke ha aktivert tilgang til å overstyre', () => {
      const accessForVeileder = kanOverstyreAccess(veilederAnsatt, validFagsakStatus, validBehandlingStatus, validBehandlingTyper);

      expect(accessForVeileder).toHaveProperty('employeeHasAccess', true);
      expect(accessForVeileder).toHaveProperty('isEnabled', false);

      const accessForVeilederOverstyrer = kanOverstyreAccess(veilederOgOverstyrerAnsatt, validFagsakStatus, validBehandlingStatus,
        validBehandlingTyper);

      expect(accessForVeilederOverstyrer).toHaveProperty('employeeHasAccess', true);
      expect(accessForVeilederOverstyrer).toHaveProperty('isEnabled', false);
    });

    forEachFagsakAndBehandlingStatus((fagsakStatus, behandlingStatus) => {
      const expected = validFagsakStatuser.some((fs) => fs === fagsakStatus) && validBehandlingStatuser.some((bs) => bs === behandlingStatus);
      it(getTestName('tilgang til å overstyre', expected, fagsakStatus, behandlingStatus), () => {
        const access = kanOverstyreAccess(saksbehandlerOgOverstyrerAnsatt, fagsakStatus, behandlingStatus,
          validBehandlingTyper);

        expect(access).toHaveProperty('isEnabled', expected);
      });
    });
  });
});

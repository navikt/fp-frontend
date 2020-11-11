import { expect } from 'chai';

import fagsakStatusCode from '@fpsak-frontend/kodeverk/src/fagsakStatus';
import behandlingStatusCode from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import BehandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import { NavAnsatt } from '@fpsak-frontend/types';

import {
  kanOverstyreAccess,
  writeAccess,
} from './access';

const forEachFagsakAndBehandlingStatus = (callback) => (
  Object.values(fagsakStatusCode).forEach((fagsakStatus) => Object.values(behandlingStatusCode)
    .forEach((behandlingStatus) => callback(fagsakStatus, behandlingStatus)))
);

const getTestName = (accessName, expected, fagsakStatus, behandlingStatus) => (
  `skal${expected ? '' : ' ikke'} ha ${accessName} når fagsakStatus er '${fagsakStatus}' og behandlingStatus er '${behandlingStatus}'`
);

describe('access', () => {
  const saksbehandlerAnsatt = { kanSaksbehandle: true } as NavAnsatt;
  const veilederAnsatt = { kanVeilede: true } as NavAnsatt;

  describe('writeAccess', () => {
    const validFagsakStatuser = [fagsakStatusCode.OPPRETTET, fagsakStatusCode.UNDER_BEHANDLING];
    const validFagsakStatus = { kode: validFagsakStatuser[0], kodeverk: '' };

    const validBehandlingStatuser = [behandlingStatusCode.OPPRETTET, behandlingStatusCode.BEHANDLING_UTREDES];
    const validBehandlingStatus = { kode: validBehandlingStatuser[0], kodeverk: '' };
    const validBehandlingTyper = { kode: BehandlingType.FORSTEGANGSSOKNAD, kodeverk: '' };

    it('saksbehandler skal ha skrivetilgang', () => {
      const accessForSaksbehandler = writeAccess(saksbehandlerAnsatt, validFagsakStatus, validBehandlingStatus, validBehandlingTyper);

      expect(accessForSaksbehandler).to.have.property('employeeHasAccess', true);
      expect(accessForSaksbehandler).to.have.property('isEnabled', true);
    });

    it('veileder skal ikke ha aktivert skrivetilgang', () => {
      const accessForVeileder = writeAccess(veilederAnsatt, validFagsakStatus, validBehandlingStatus, validBehandlingTyper);

      expect(accessForVeileder).to.have.property('employeeHasAccess', true);
      expect(accessForVeileder).to.have.property('isEnabled', false);
    });

    forEachFagsakAndBehandlingStatus((fagsakStatus, behandlingStatus) => {
      const expected = validFagsakStatuser.includes(fagsakStatus) && validBehandlingStatuser.includes(behandlingStatus);
      it(getTestName('skrivetilgang', expected, fagsakStatus, behandlingStatus), () => {
        const access = writeAccess(saksbehandlerAnsatt, { kode: fagsakStatus, kodeverk: '' }, { kode: behandlingStatus, kodeverk: '' },
          validBehandlingTyper);

        expect(access).to.have.property('isEnabled', expected);
      });
    });
  });

  describe('kanOverstyreAccess', () => {
    const validFagsakStatuser = [fagsakStatusCode.UNDER_BEHANDLING];
    const validFagsakStatus = { kode: validFagsakStatuser[0], kodeverk: '' };

    const validBehandlingStatuser = [behandlingStatusCode.BEHANDLING_UTREDES];
    const validBehandlingStatus = { kode: validBehandlingStatuser[0], kodeverk: '' };
    const validBehandlingTyper = { kode: BehandlingType.FORSTEGANGSSOKNAD, kodeverk: '' };

    const saksbehandlerOgOverstyrerAnsatt = { ...saksbehandlerAnsatt, kanOverstyre: true };
    const veilederOgOverstyrerAnsatt = { ...veilederAnsatt, kanOverstyre: false };

    it('saksbehandler med overstyrer-rolle skal ha tilgang til å overstyre', () => {
      const accessForSaksbehandler = kanOverstyreAccess(saksbehandlerOgOverstyrerAnsatt, validFagsakStatus, validBehandlingStatus,
        validBehandlingTyper);

      expect(accessForSaksbehandler).to.have.property('employeeHasAccess', true);
      expect(accessForSaksbehandler).to.have.property('isEnabled', true);
    });

    it('saksbehandler uten overstyrer-rolle skal ikke ha tilgang til å overstyre', () => {
      const accessForSaksbehandler = kanOverstyreAccess(saksbehandlerAnsatt, validFagsakStatus, validBehandlingStatus, validBehandlingTyper);

      expect(accessForSaksbehandler).to.have.property('employeeHasAccess', false);
      expect(accessForSaksbehandler).to.have.property('isEnabled', false);
    });

    it('veileder skal ikke ha aktivert tilgang til å overstyre', () => {
      const accessForVeileder = kanOverstyreAccess(veilederAnsatt, validFagsakStatus, validBehandlingStatus, validBehandlingTyper);

      expect(accessForVeileder).to.have.property('employeeHasAccess', true);
      expect(accessForVeileder).to.have.property('isEnabled', false);

      const accessForVeilederOverstyrer = kanOverstyreAccess(veilederOgOverstyrerAnsatt, validFagsakStatus, validBehandlingStatus,
        validBehandlingTyper);

      expect(accessForVeilederOverstyrer).to.have.property('employeeHasAccess', true);
      expect(accessForVeilederOverstyrer).to.have.property('isEnabled', false);
    });

    forEachFagsakAndBehandlingStatus((fagsakStatus, behandlingStatus) => {
      const expected = validFagsakStatuser.includes(fagsakStatus) && validBehandlingStatuser.includes(behandlingStatus);
      it(getTestName('tilgang til å overstyre', expected, fagsakStatus, behandlingStatus), () => {
        const access = kanOverstyreAccess(saksbehandlerOgOverstyrerAnsatt, { kode: fagsakStatus, kodeverk: '' }, { kode: behandlingStatus, kodeverk: '' },
          validBehandlingTyper);

        expect(access).to.have.property('isEnabled', expected);
      });
    });
  });
});

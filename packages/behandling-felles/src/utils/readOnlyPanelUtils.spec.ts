import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import { Behandling } from '@fpsak-frontend/types';

import { erReadOnly, harBehandlingReadOnlyStatus } from './readOnlyPanelUtils';

describe('<readOnlyUtils>', () => {
  const behandling = {
    uuid: '1',
    versjon: 1,
    status: {
      kode: behandlingStatus.BEHANDLING_UTREDES,
      kodeverk: 'BEHANDLING_STATUS',
    },
    type: {
      kode: behandlingType.FORSTEGANGSSOKNAD,
      kodeverk: 'BEHANDLING_TYPE',
    },
    behandlingPaaVent: false,
    behandlingHenlagt: false,
  };

  const aksjonspunkter = [{
    status: {
      kode: aksjonspunktStatus.OPPRETTET,
      kodeverk: 'AKSJONSPUNKT_STATUS',
    },
    definisjon: {
      kode: aksjonspunktCodes.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
      kodeverk: 'AKSJONSPUNKT_KODE',
    },
    kanLoses: true,
    erAktivt: true,
    toTrinnsBehandling: true,
    toTrinnsBehandlingGodkjent: false,
  }];

  const vilkar = [{
    vilkarType: { kode: vilkarType.FODSELSVILKARET_MOR, kodeverk: 'test' },
    vilkarStatus: { kode: vilkarUtfallType.OPPFYLT, kodeverk: 'test' },
    overstyrbar: true,
    merknadParametere: {},
  }];

  const rettigheter = {
    writeAccess: {
      isEnabled: true,
      employeeHasAccess: true,
    },
    kanOverstyreAccess: {
      isEnabled: true,
      employeeHasAccess: true,
    },
  };

  it('skal behandling readonly-status', () => {
    const behandlingMedReadOnly = {
      ...behandling,
      taskStatus: {
        readOnly: true,
      },
    };
    const status = harBehandlingReadOnlyStatus(behandlingMedReadOnly as Behandling);
    expect(status).toBe(true);
  });

  it('skal ikke behandling readonly-status', () => {
    const behandlingMedReadOnly = {
      ...behandling,
      taskStatus: {
        readOnly: false,
      },
    };
    const status = harBehandlingReadOnlyStatus(behandlingMedReadOnly as Behandling);
    expect(status).toBe(false);
  });

  it('skal ikke være readonly', () => {
    const hasFetchError = false;
    const readOnly = erReadOnly(behandling as Behandling, aksjonspunkter, vilkar, rettigheter, hasFetchError);

    expect(readOnly).toBe(false);
  });

  it('skal være readonly når en ikke har rettighet', () => {
    const nyRettigheter = {
      ...rettigheter,
      writeAccess: {
        isEnabled: false,
        employeeHasAccess: true,
      },
    };
    const hasFetchError = false;
    const readOnly = erReadOnly(behandling as Behandling, aksjonspunkter, vilkar, nyRettigheter, hasFetchError);

    expect(readOnly).toBe(true);
  });

  it('skal være readonly når en har fetch error', () => {
    const hasFetchError = true;
    const readOnly = erReadOnly(behandling as Behandling, aksjonspunkter, vilkar, rettigheter, hasFetchError);

    expect(readOnly).toBe(true);
  });

  it('skal være readonly når en har tastStatus.readOnly', () => {
    const behandlingMedReadOnly = {
      ...behandling,
      taskStatus: {
        readOnly: true,
      },
    };
    const hasFetchError = false;
    const readOnly = erReadOnly(behandlingMedReadOnly as Behandling, aksjonspunkter, vilkar, rettigheter, hasFetchError);

    expect(readOnly).toBe(true);
  });

  it('skal være readonly når en har minst ett ikke aktivt aksjonspunkt', () => {
    const nyeAksjonspunkter = [{
      ...aksjonspunkter[0],
      erAktivt: false,
    }];
    const hasFetchError = false;
    const readOnly = erReadOnly(behandling as Behandling, nyeAksjonspunkter, vilkar, rettigheter, hasFetchError);

    expect(readOnly).toBe(true);
  });

  it('skal være readonly når en har minst ett ikke overstyrbart vilkar', () => {
    const nyeVilkar = [{
      ...vilkar[0],
      overstyrbar: false,
    }];
    const hasFetchError = false;
    const readOnly = erReadOnly(behandling as Behandling, aksjonspunkter, nyeVilkar, rettigheter, hasFetchError);

    expect(readOnly).toBe(true);
  });
});

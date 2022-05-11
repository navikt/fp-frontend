import { AksjonspunktStatus, BehandlingType, BehandlingStatus } from '@navikt/ft-kodeverk';
import { Behandling } from '@navikt/ft-types';
import AksjonspunktCode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import { erReadOnly, harBehandlingReadOnlyStatus } from './readOnlyPanelUtils';

describe('<readOnlyUtils>', () => {
  const behandling = {
    uuid: '1',
    versjon: 1,
    status: BehandlingStatus.BEHANDLING_UTREDES,
    type: BehandlingType.FORSTEGANGSSOKNAD,
    behandlingPaaVent: false,
    behandlingHenlagt: false,
  };

  const aksjonspunkter = [{
    status: AksjonspunktStatus.OPPRETTET,
    definisjon: AksjonspunktCode.FORESLA_VEDTAK,
    kanLoses: true,
    erAktivt: true,
    toTrinnsBehandling: true,
    toTrinnsBehandlingGodkjent: false,
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
    const readOnly = erReadOnly(behandling as Behandling, aksjonspunkter, rettigheter, hasFetchError);

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
    const readOnly = erReadOnly(behandling as Behandling, aksjonspunkter, nyRettigheter, hasFetchError);

    expect(readOnly).toBe(true);
  });

  it('skal være readonly når en har fetch error', () => {
    const hasFetchError = true;
    const readOnly = erReadOnly(behandling as Behandling, aksjonspunkter, rettigheter, hasFetchError);

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
    const readOnly = erReadOnly(behandlingMedReadOnly as Behandling, aksjonspunkter, rettigheter, hasFetchError);

    expect(readOnly).toBe(true);
  });

  it('skal være readonly når en har minst ett ikke aktivt aksjonspunkt', () => {
    const nyeAksjonspunkter = [{
      ...aksjonspunkter[0],
      erAktivt: false,
    }];
    const hasFetchError = false;
    const readOnly = erReadOnly(behandling as Behandling, nyeAksjonspunkter, rettigheter, hasFetchError);

    expect(readOnly).toBe(true);
  });
});

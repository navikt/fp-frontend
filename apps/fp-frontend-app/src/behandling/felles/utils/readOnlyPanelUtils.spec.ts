import { BehandlingStatus, BehandlingType, VilkarType, VilkarUtfallType } from '@navikt/fp-kodeverk';
import type { Behandling, Vilkar } from '@navikt/fp-types';

import { erReadOnly, harBehandlingReadOnlyStatus } from './readOnlyPanelUtils';

describe('readOnlyUtils', () => {
  const behandling = {
    uuid: '1',
    versjon: 1,
    status: BehandlingStatus.BEHANDLING_UTREDES,
    type: BehandlingType.FORSTEGANGSSOKNAD,
    behandlingPåVent: false,
    behandlingHenlagt: false,
  } as Behandling;

  const vilkar: Vilkar[] = [
    {
      vilkarType: VilkarType.FODSELSVILKARET_MOR,
      vilkarStatus: VilkarUtfallType.OPPFYLT,
      overstyrbar: true,
    },
  ];

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
    const readOnly = erReadOnly(behandling, vilkar, rettigheter, hasFetchError);

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
    const readOnly = erReadOnly(behandling, vilkar, nyRettigheter, hasFetchError);

    expect(readOnly).toBe(true);
  });

  it('skal være readonly når en har fetch error', () => {
    const hasFetchError = true;
    const readOnly = erReadOnly(behandling, vilkar, rettigheter, hasFetchError);

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
    const readOnly = erReadOnly(behandlingMedReadOnly as Behandling, vilkar, rettigheter, hasFetchError);

    expect(readOnly).toBe(true);
  });

  it('skal være readonly når en har minst ett ikke overstyrbart vilkar', () => {
    const nyeVilkar = [
      {
        ...vilkar[0],
        overstyrbar: false,
      },
    ];
    const hasFetchError = false;
    const readOnly = erReadOnly(behandling, nyeVilkar, rettigheter, hasFetchError);

    expect(readOnly).toBe(true);
  });
});

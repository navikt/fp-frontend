import { BehandlingStatusEnum, BehandlingTypeEnum, VilkarType, VilkarUtfallType } from '@navikt/fp-kodeverk';
import type { Behandling, Vilkar } from '@navikt/fp-types';

import { erReadOnly, harBehandlingReadOnlyStatus } from './readOnlyPanelUtils';

describe('readOnlyUtils', () => {
  const behandling = {
    uuid: '1',
    versjon: 1,
    status: BehandlingStatusEnum.BEHANDLING_UTREDES,
    type: BehandlingTypeEnum.FORSTEGANGSSOKNAD,
    behandlingPåVent: false,
    behandlingHenlagt: false,
  } as Behandling;

  const vilkår: Vilkar[] = [
    {
      vilkarType: VilkarType.FODSELSVILKARET_MOR,
      vilkarStatus: VilkarUtfallType.OPPFYLT,
      overstyrbar: true,
      avslagKode: null,
      lovReferanse: null,
      evaluering: null,
      input: null,
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
    const readOnly = erReadOnly(behandling, vilkår, rettigheter, hasFetchError);

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
    const readOnly = erReadOnly(behandling, vilkår, nyRettigheter, hasFetchError);

    expect(readOnly).toBe(true);
  });

  it('skal være readonly når en har fetch error', () => {
    const hasFetchError = true;
    const readOnly = erReadOnly(behandling, vilkår, rettigheter, hasFetchError);

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
    const readOnly = erReadOnly(behandlingMedReadOnly as Behandling, vilkår, rettigheter, hasFetchError);

    expect(readOnly).toBe(true);
  });

  it('skal være readonly når en har minst ett ikke overstyrbart vilkar', () => {
    const nyeVilkår = [
      {
        ...vilkår[0],
        overstyrbar: false,
      },
    ];
    const hasFetchError = false;
    const readOnly = erReadOnly(behandling, nyeVilkår, rettigheter, hasFetchError);

    expect(readOnly).toBe(true);
  });
});

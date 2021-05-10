import React, { FunctionComponent } from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import aksjonspunktType from '@fpsak-frontend/kodeverk/src/aksjonspunktType';
import {
  AksessRettigheter, Aksjonspunkt, Behandling, Vilkar,
} from '@fpsak-frontend/types';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';

import useStandardProsessPanelProps from './useStandardProsessPanelProps';

const HookWrapper: FunctionComponent<{ hook: () => any }> = ({
  hook,
// @ts-ignore
}) => <div hook={hook()} />;

let realUseContext: any;
let useContextMock: any;

const fagsak = {
  saksnummer: '1234',
};
const behandling = {
  uuid: '1',
  versjon: 2,
  status: {
    kode: behandlingStatus.OPPRETTET,
    kodeverk: '',
  },
  behandlingPaaVent: false,
} as Behandling;
const rettigheter = {
  writeAccess: {
    isEnabled: true,
  },
} as AksessRettigheter;

describe('useStandardProsessPanelProps.spec', () => {
  beforeEach(() => {
    realUseContext = React.useContext;
    useContextMock = jest.fn();
    React.useContext = useContextMock;
  });

  afterEach(() => {
    React.useContext = realUseContext;
  });

  it('skal kalkulere data som skal brukes av prosess-paneler', () => {
    const aksjonspunkter = [{
      definisjon: {
        kode: aksjonspunktCodes.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR,
        kodeverk: '',
      },
      status: {
        kode: aksjonspunktStatus.OPPRETTET,
        kodeverk: '',
      },
      kanLoses: true,
      erAktivt: true,
    }, {
      definisjon: {
        kode: aksjonspunktCodes.AVKLAR_AKTIVITETER,
        kodeverk: '',
      },
      status: {
        kode: aksjonspunktStatus.OPPRETTET,
        kodeverk: '',
      },
      kanLoses: false,
      erAktivt: true,
    }] as Aksjonspunkt[];
    const vilkar = [{
      vilkarType: {
        kode: vilkarType.MEDLEMSKAPSVILKÅRET_LØPENDE,
        kodeverk: '',
      },
      vilkarStatus: {
        kode: vilkarUtfallType.IKKE_VURDERT,
        kodeverk: '',
      },
      overstyrbar: true,
    }, {
      vilkarType: {
        kode: vilkarType.ADOPSJONSVILKARET,
        kodeverk: '',
      },
    }] as Vilkar[];

    const data = {
      aksjonspunkter,
      vilkar,
    };
    const aksjonspunktKoder = [aksjonspunktCodes.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR];
    const vilkarKoder = [vilkarType.MEDLEMSKAPSVILKÅRET_LØPENDE];

    useContextMock.mockReturnValue({
      behandling, rettigheter, alleKodeverk: { test: '' }, hasFetchError: false,
    });

    const wrapper = shallow(<HookWrapper hook={() => useStandardProsessPanelProps(
      data,
      aksjonspunktKoder,
      vilkarKoder,
    )}
    />);

    // @ts-ignore
    const { hook } = wrapper.find('div').props();

    expect(hook.behandling).toBe(behandling);
    expect(hook.isAksjonspunktOpen).toBe(true);
    expect(hook.aksjonspunkter).toEqual([aksjonspunkter[0]]);
    expect(hook.vilkar).toEqual([vilkar[0]]);
    expect(hook.alleKodeverk).toEqual({ test: '' });
    expect(hook.alleMerknaderFraBeslutter).toEqual({});
    expect(hook.isReadOnly).toBe(false);
    expect(hook.readOnlySubmitButton).toBe(false);
    expect(hook.status).toEqual(vilkarUtfallType.IKKE_VURDERT);
  });

  it('skal har status oppfylt og være readonly', () => {
    const aksjonspunkter = [{
      definisjon: {
        kode: aksjonspunktCodes.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR,
        kodeverk: '',
      },
      status: {
        kode: aksjonspunktStatus.OPPRETTET,
        kodeverk: '',
      },
      kanLoses: false,
      erAktivt: true,
    }] as Aksjonspunkt[];
    const vilkar = [{
      vilkarType: {
        kode: vilkarType.MEDLEMSKAPSVILKÅRET_LØPENDE,
        kodeverk: '',
      },
      vilkarStatus: {
        kode: vilkarUtfallType.OPPFYLT,
        kodeverk: '',
      },
      overstyrbar: false,
    }] as Vilkar[];

    const data = {
      aksjonspunkter,
      vilkar,
    };
    const aksjonspunktKoder = [aksjonspunktCodes.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR];
    const vilkarKoder = [vilkarType.MEDLEMSKAPSVILKÅRET_LØPENDE];

    useContextMock.mockReturnValue({
      behandling, rettigheter, alleKodeverk: { test: '' }, hasFetchError: false,
    });

    const wrapper = shallow(<HookWrapper hook={() => useStandardProsessPanelProps(
      data,
      aksjonspunktKoder,
      vilkarKoder,
    )}
    />);

    // @ts-ignore
    const { hook } = wrapper.find('div').props();

    expect(hook.isReadOnly).toBe(true);
    expect(hook.readOnlySubmitButton).toBe(true);
    expect(hook.status).toEqual(vilkarUtfallType.OPPFYLT);
  });

  it('skal lagre aksjonspunkt', () => {
    const aksjonspunkter = [{
      definisjon: {
        kode: aksjonspunktCodes.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR,
        kodeverk: '',
      },
      status: {
        kode: aksjonspunktStatus.OPPRETTET,
        kodeverk: '',
      },
      kanLoses: true,
      erAktivt: true,
    }] as Aksjonspunkt[];
    const vilkar = [{
      vilkarType: {
        kode: vilkarType.MEDLEMSKAPSVILKÅRET_LØPENDE,
        kodeverk: '',
      },
      vilkarStatus: {
        kode: vilkarUtfallType.IKKE_VURDERT,
        kodeverk: '',
      },
      overstyrbar: false,
    }] as Vilkar[];

    const data = {
      aksjonspunkter,
      vilkar,
    };
    const aksjonspunktKoder = [aksjonspunktCodes.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR];
    const vilkarKoder = [vilkarType.MEDLEMSKAPSVILKÅRET_LØPENDE];

    const lagreAksjonspunkter = sinon.stub().resolves('');
    const oppdaterProsessStegOgFaktaPanelIUrl = sinon.spy();

    useContextMock.mockReturnValue({
      fagsak, behandling, rettigheter, alleKodeverk: { test: '' }, hasFetchError: false, lagreAksjonspunkter, oppdaterProsessStegOgFaktaPanelIUrl,
    });

    const wrapper = shallow(<HookWrapper hook={() => useStandardProsessPanelProps(
      data,
      aksjonspunktKoder,
      vilkarKoder,
    )}
    />);

    // @ts-ignore
    const { hook } = wrapper.find('div').props();

    const aksjonspunktModeller = [{
      kode: aksjonspunktCodes.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR,
    }];
    hook.submitCallback(aksjonspunktModeller);

    expect(lagreAksjonspunkter.callCount).toEqual(1);
    const { args } = lagreAksjonspunkter.getCalls()[0];
    expect(args).toHaveLength(2);
    expect(args[0]).toEqual({
      saksnummer: fagsak.saksnummer,
      behandlingUuid: behandling.uuid,
      behandlingVersjon: behandling.versjon,
      bekreftedeAksjonspunktDtoer: [{
        '@type': '6012',
        kode: '6012',
      }],
    });
    expect(args[1]).toBe(true);
  });

  it('skal lagre overstyrt aksjonspunkt', () => {
    const aksjonspunkter = [{
      definisjon: {
        kode: aksjonspunktCodes.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR,
        kodeverk: '',
      },
      status: {
        kode: aksjonspunktStatus.OPPRETTET,
        kodeverk: '',
      },
      aksjonspunktType: {
        kode: aksjonspunktType.OVERSTYRING,
        kodeverk: '',
      },
      kanLoses: true,
      erAktivt: true,
    }] as Aksjonspunkt[];
    const vilkar = [{
      vilkarType: {
        kode: vilkarType.MEDLEMSKAPSVILKÅRET_LØPENDE,
        kodeverk: '',
      },
      vilkarStatus: {
        kode: vilkarUtfallType.IKKE_VURDERT,
        kodeverk: '',
      },
      overstyrbar: false,
    }] as Vilkar[];

    const data = {
      aksjonspunkter,
      vilkar,
    };
    const aksjonspunktKoder = [aksjonspunktCodes.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR];
    const vilkarKoder = [vilkarType.MEDLEMSKAPSVILKÅRET_LØPENDE];

    const lagreOverstyrteAksjonspunkter = sinon.stub().resolves('');
    const oppdaterProsessStegOgFaktaPanelIUrl = sinon.spy();

    useContextMock.mockReturnValue({
      fagsak, behandling, rettigheter, alleKodeverk: { test: '' }, hasFetchError: false, lagreOverstyrteAksjonspunkter, oppdaterProsessStegOgFaktaPanelIUrl,
    });

    const wrapper = shallow(<HookWrapper hook={() => useStandardProsessPanelProps(
      data,
      aksjonspunktKoder,
      vilkarKoder,
    )}
    />);

    // @ts-ignore
    const { hook } = wrapper.find('div').props();

    const aksjonspunktModeller = [{
      kode: aksjonspunktCodes.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR,
    }];
    hook.submitCallback(aksjonspunktModeller);

    expect(lagreOverstyrteAksjonspunkter.callCount).toEqual(1);
    const { args } = lagreOverstyrteAksjonspunkter.getCalls()[0];
    expect(args).toHaveLength(2);
    expect(args[0]).toEqual({
      saksnummer: fagsak.saksnummer,
      behandlingUuid: behandling.uuid,
      behandlingVersjon: behandling.versjon,
      overstyrteAksjonspunktDtoer: [{
        '@type': '6012',
        kode: '6012',
      }],
    });
    expect(args[1]).toBe(true);
  });
});

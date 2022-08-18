import React, { FunctionComponent } from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Aksjonspunkt, Behandling } from '@navikt/ft-types';
import {
  VilkarUtfallType, AksjonspunktStatus, BehandlingStatus, VilkarType,
} from '@navikt/ft-kodeverk';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { Vilkar, AksessRettigheter } from '@fpsak-frontend/types';

import useStandardFaktaPanelProps from './useStandardFaktaPanelProps';

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
  status: BehandlingStatus.OPPRETTET,
  behandlingPaaVent: false,
} as Behandling;
const rettigheter = {
  writeAccess: {
    isEnabled: true,
  },
} as AksessRettigheter;

describe('useStandardFaktaPanelProps', () => {
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
      definisjon: aksjonspunktCodes.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR,
      status: AksjonspunktStatus.OPPRETTET,
      kanLoses: true,
      erAktivt: true,
    }, {
      definisjon: aksjonspunktCodes.AVKLAR_AKTIVITETER,
      status: AksjonspunktStatus.OPPRETTET,
      kanLoses: false,
      erAktivt: true,
    }] as Aksjonspunkt[];
    const vilkar = [{
      vilkarType: VilkarType.MEDLEMSKAPSVILKÅRET_LØPENDE,
      vilkarStatus: VilkarUtfallType.IKKE_VURDERT,
      overstyrbar: true,
    }, {
      vilkarType: VilkarType.ADOPSJONSVILKARET,
    }] as Vilkar[];

    const data = {
      aksjonspunkter,
      vilkar,
    };
    const aksjonspunktKoder = [aksjonspunktCodes.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR];
    const vilkarKoder = [VilkarType.MEDLEMSKAPSVILKÅRET_LØPENDE];

    useContextMock.mockReturnValue({
      behandling, rettigheter, alleKodeverk: { test: '' }, hasFetchError: false,
    });

    const wrapper = shallow(<HookWrapper hook={() => useStandardFaktaPanelProps(
      data,
      aksjonspunktKoder,
      vilkarKoder,
    )}
    />);

    // @ts-ignore
    const { hook } = wrapper.find('div').props();

    expect(hook.behandling).toBe(behandling);
    expect(hook.submittable).toBe(true);
    expect(hook.harApneAksjonspunkter).toBe(true);
    expect(hook.alleKodeverk).toEqual({ test: '' });
    expect(hook.aksjonspunkter).toEqual([aksjonspunkter[0]]);
    expect(hook.readOnly).toBe(false);
    expect(hook.alleMerknaderFraBeslutter).toEqual({});
  });

  it('skal være readonly', () => {
    const aksjonspunkter = [{
      definisjon: aksjonspunktCodes.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR,
      status: AksjonspunktStatus.UTFORT,
      kanLoses: false,
      erAktivt: false,
    }] as Aksjonspunkt[];
    const vilkar = [{
      vilkarType: VilkarType.MEDLEMSKAPSVILKÅRET_LØPENDE,
      vilkarStatus: VilkarUtfallType.OPPFYLT,
      overstyrbar: false,
    }] as Vilkar[];

    const data = {
      aksjonspunkter,
      vilkar,
    };
    const aksjonspunktKoder = [aksjonspunktCodes.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR];
    const vilkarKoder = [VilkarType.MEDLEMSKAPSVILKÅRET_LØPENDE];

    useContextMock.mockReturnValue({
      behandling, rettigheter, alleKodeverk: { test: '' }, hasFetchError: false,
    });

    const wrapper = shallow(<HookWrapper hook={() => useStandardFaktaPanelProps(
      data,
      aksjonspunktKoder,
      vilkarKoder,
    )}
    />);

    // @ts-ignore
    const { hook } = wrapper.find('div').props();

    expect(hook.readOnly).toBe(true);
  });

  it('skal lagre aksjonspunkt', () => {
    const aksjonspunkter = [{
      definisjon: aksjonspunktCodes.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR,
      status: AksjonspunktStatus.OPPRETTET,
      kanLoses: true,
      erAktivt: true,
    }] as Aksjonspunkt[];
    const vilkar = [{
      vilkarType: VilkarType.MEDLEMSKAPSVILKÅRET_LØPENDE,
      vilkarStatus: VilkarUtfallType.IKKE_VURDERT,
      overstyrbar: false,
    }] as Vilkar[];

    const data = {
      aksjonspunkter,
      vilkar,
    };
    const aksjonspunktKoder = [aksjonspunktCodes.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR];
    const vilkarKoder = [VilkarType.MEDLEMSKAPSVILKÅRET_LØPENDE];

    const lagreAksjonspunkter = sinon.stub().resolves('');
    const oppdaterProsessStegOgFaktaPanelIUrl = sinon.spy();

    useContextMock.mockReturnValue({
      fagsak, behandling, rettigheter, alleKodeverk: { test: '' }, hasFetchError: false, lagreAksjonspunkter, oppdaterProsessStegOgFaktaPanelIUrl,
    });

    const wrapper = shallow(<HookWrapper hook={() => useStandardFaktaPanelProps(
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
      definisjon: aksjonspunktCodes.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR,
      status: AksjonspunktStatus.OPPRETTET,
      kanLoses: true,
      erAktivt: true,
    }] as Aksjonspunkt[];
    const vilkar = [{
      vilkarType: VilkarType.MEDLEMSKAPSVILKÅRET_LØPENDE,
      vilkarStatus: VilkarUtfallType.IKKE_VURDERT,
      overstyrbar: false,
    }] as Vilkar[];

    const data = {
      aksjonspunkter,
      vilkar,
    };
    const aksjonspunktKoder = [aksjonspunktCodes.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR];
    const overstyringApCodes = [aksjonspunktCodes.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR];

    const lagreOverstyrteAksjonspunkter = sinon.stub().resolves('');
    const oppdaterProsessStegOgFaktaPanelIUrl = sinon.spy();

    useContextMock.mockReturnValue({
      fagsak, behandling, rettigheter, alleKodeverk: { test: '' }, hasFetchError: false, lagreOverstyrteAksjonspunkter, oppdaterProsessStegOgFaktaPanelIUrl,
    });

    const wrapper = shallow(<HookWrapper hook={() => useStandardFaktaPanelProps(
      data,
      aksjonspunktKoder,
      overstyringApCodes,
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

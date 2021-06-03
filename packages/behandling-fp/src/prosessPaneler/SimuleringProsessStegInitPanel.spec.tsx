import React from 'react';
import { shallow } from 'enzyme';

import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import AvregningProsessIndex from '@fpsak-frontend/prosess-avregning';
import { ProsessDefaultInitPanel, ProsessDefaultInitPanelProps, ProsessPanelInitProps } from '@fpsak-frontend/behandling-felles';
import {
  Behandling, Fagsak, SimuleringResultat, StandardProsessPanelProps,
} from '@fpsak-frontend/types';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';

import { requestFpApi, FpBehandlingApiKeys } from '../data/fpBehandlingApi';
import SimuleringProsessStegInitPanel from './SimuleringProsessStegInitPanel';

jest.mock('@fpsak-frontend/behandling-felles', () => {
  const felles = jest.requireActual('@fpsak-frontend/behandling-felles');
  return {
    ...felles,
    useStandardProsessPanelProps: () => ({
      behandling: {
        uuid: 'test-uuid',
        versjon: 1,
      },
    }),
  };
});

describe('<SimuleringProsessStegInitPanel>', () => {
  type INIT_DATA = {
    simuleringResultat?: SimuleringResultat;
  }

  const behandling = {
    uuid: '1',
    versjon: 1,
  } as Behandling;

  it('skal vise komponent og vise det som oppfylt', () => {
    const wrapper = shallow(<SimuleringProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      menyData={[{
        id: ProsessStegCode.VEDTAK,
        harApentAksjonspunkt: false,
        status: vilkarUtfallType.IKKE_VURDERT,
        harHentetInitData: true,
      }]}
      fagsak={{} as Fagsak}
      behandling={behandling}
    />);

    const panel = wrapper.find<Required<ProsessDefaultInitPanelProps<INIT_DATA, any>> & ProsessPanelInitProps>(ProsessDefaultInitPanel);

    const simuleringResultat = {} as SimuleringResultat;

    expect(panel.props().skalPanelVisesIMeny({} as StandardProsessPanelProps, RestApiState.SUCCESS)).toBe(true);
    expect(panel.props().hentOverstyrtStatus({ simuleringResultat } as INIT_DATA, {} as StandardProsessPanelProps)).toBe(vilkarUtfallType.OPPFYLT);
    expect(panel.props().renderPanel({}, {}).type).toEqual(AvregningProsessIndex);
  });

  it('skal ikke vise komponent og vise det som oppfylt', () => {
    const wrapper = shallow(<SimuleringProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      menyData={[{
        id: ProsessStegCode.VEDTAK,
        harApentAksjonspunkt: true,
        status: vilkarUtfallType.IKKE_VURDERT,
        harHentetInitData: true,
      }]}
      fagsak={{} as Fagsak}
      behandling={behandling}
    />);

    const panel = wrapper.find<Required<ProsessDefaultInitPanelProps<INIT_DATA, any>> & ProsessPanelInitProps>(ProsessDefaultInitPanel);

    expect(panel.props().skalPanelVisesIMeny({} as StandardProsessPanelProps, RestApiState.SUCCESS)).toBe(false);
    expect(panel.props().hentOverstyrtStatus({}, {} as StandardProsessPanelProps)).toBe(vilkarUtfallType.IKKE_VURDERT);
    expect(panel.props().renderPanel({}, {}).type).toEqual(AvregningProsessIndex);
  });

  it('skal vise forhåndsvisning av melding', () => {
    requestFpApi.mock(FpBehandlingApiKeys.PREVIEW_TILBAKEKREVING_MESSAGE.name, {});

    const wrapper = shallow(<SimuleringProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      menyData={[{
        id: ProsessStegCode.VEDTAK,
        harApentAksjonspunkt: true,
        status: vilkarUtfallType.IKKE_VURDERT,
        harHentetInitData: true,
      }]}
      fagsak={{
        saksnummer: '123',
        fagsakYtelseType: {
          kode: fagsakYtelseType.FORELDREPENGER,
          kodeverk: '',
        },
      } as Fagsak}
      behandling={behandling}
    />);

    const panel = wrapper.find<ProsessDefaultInitPanelProps<INIT_DATA, any> & ProsessPanelInitProps>(ProsessDefaultInitPanel);

    panel.props().renderPanel({}, {}).props.previewFptilbakeCallback('testMottaker', 'testBrevmalkode', 'testFritekst');

    const response = requestFpApi.getRequestMockData(FpBehandlingApiKeys.PREVIEW_TILBAKEKREVING_MESSAGE.name);
    expect(response).toHaveLength(1);
    expect(response[0].params).toEqual({
      behandlingUuid: 'test-uuid',
      fagsakYtelseType: {
        kode: fagsakYtelseType.FORELDREPENGER,
        kodeverk: '',
      },
      varseltekst: 'testFritekst',
      mottaker: 'testMottaker',
      brevmalkode: 'testBrevmalkode',
      saksnummer: '123',
    });
  });
});

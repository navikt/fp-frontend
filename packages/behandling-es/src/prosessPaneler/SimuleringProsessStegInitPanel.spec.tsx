import React from 'react';
import { shallow } from 'enzyme';

import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import { prosessStegCodes } from '@fpsak-frontend/konstanter';
import AvregningProsessIndex from '@fpsak-frontend/prosess-avregning';
import { ProsessDefaultInitPanel, ProsessDefaultInitPanelProps } from '@fpsak-frontend/behandling-felles-ny';
import { Fagsak, SimuleringResultat, StandardProsessPanelProps } from '@fpsak-frontend/types';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';

import { EsBehandlingApiKeys, requestEsApi } from '../data/esBehandlingApi';
import SimuleringProsessStegInitPanel from './SimuleringProsessStegInitPanel';

jest.mock('@fpsak-frontend/behandling-felles-ny', () => {
  const felles = jest.requireActual('@fpsak-frontend/behandling-felles-ny');
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

  it('skal vise komponent og vise det som oppfylt', () => {
    const wrapper = shallow(<SimuleringProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      menyData={[{
        id: prosessStegCodes.VEDTAK,
        harApentAksjonspunkt: false,
        status: vilkarUtfallType.IKKE_VURDERT,
        harHentetInitData: true,
      }]}
      fagsak={{} as Fagsak}
    />);

    const panel = wrapper.find<ProsessDefaultInitPanelProps<INIT_DATA, any>>(ProsessDefaultInitPanel);

    const simuleringResultat = {} as SimuleringResultat;

    expect(panel.props().skalPanelVisesIMeny({} as StandardProsessPanelProps, RestApiState.SUCCESS)).toBe(true);
    expect(panel.props().hentOverstyrtStatus({ simuleringResultat } as INIT_DATA & StandardProsessPanelProps)).toBe(vilkarUtfallType.OPPFYLT);
    expect(panel.props().renderPanel({}).type).toEqual(AvregningProsessIndex);
  });

  it('skal ikke vise komponent og vise det som oppfylt', () => {
    const wrapper = shallow(<SimuleringProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      menyData={[{
        id: prosessStegCodes.VEDTAK,
        harApentAksjonspunkt: true,
        status: vilkarUtfallType.IKKE_VURDERT,
        harHentetInitData: true,
      }]}
      fagsak={{} as Fagsak}
    />);

    const panel = wrapper.find<ProsessDefaultInitPanelProps<INIT_DATA, any>>(ProsessDefaultInitPanel);

    expect(panel.props().skalPanelVisesIMeny({} as StandardProsessPanelProps, RestApiState.SUCCESS)).toBe(false);
    expect(panel.props().hentOverstyrtStatus({} as StandardProsessPanelProps)).toBe(vilkarUtfallType.IKKE_VURDERT);
    expect(panel.props().renderPanel({}).type).toEqual(AvregningProsessIndex);
  });

  it('skal vise forhåndsvisning av melding', () => {
    requestEsApi.mock(EsBehandlingApiKeys.PREVIEW_TILBAKEKREVING_MESSAGE, {});

    const wrapper = shallow(<SimuleringProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      menyData={[{
        id: prosessStegCodes.VEDTAK,
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
    />);

    const panel = wrapper.find<ProsessDefaultInitPanelProps<INIT_DATA, any>>(ProsessDefaultInitPanel);

    panel.props().renderPanel({}).props.previewFptilbakeCallback('testMottaker', 'testBrevmalkode', 'testFritekst');

    const response = requestEsApi.getRequestMockData(EsBehandlingApiKeys.PREVIEW_TILBAKEKREVING_MESSAGE);
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

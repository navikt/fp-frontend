import React from 'react';
import { shallow } from 'enzyme';

import FormkravProsessIndex from '@fpsak-frontend/prosess-formkrav';
import { ProsessDefaultInitPanel, ProsessDefaultInitPanelProps, ProsessPanelInitProps } from '@fpsak-frontend/behandling-felles';
import { Behandling, StandardProsessPanelProps } from '@fpsak-frontend/types';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';

import FormKravFamOgPensjonProsessStegInitPanel from './FormKravFamOgPensjonProsessStegInitPanel';

describe('<FormKravFamOgPensjonProsessStegInitPanel>', () => {
  it('skal rendre komponent og filtrere avslutte behandlinger', () => {
    const alleBehandlinger = [{
      uuid: 'test',
      type: behandlingType.FORSTEGANGSSOKNAD,
      status: behandlingStatus.AVSLUTTET,
      opprettet: '2020-01-01',
    }, {
      id: 2,
      uuid: 'test',
      type: behandlingType.KLAGE,
      status: behandlingStatus.AVSLUTTET,
      opprettet: '2020-01-01',
    }] as Behandling[];

    const wrapper = shallow(<FormKravFamOgPensjonProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      alleBehandlinger={alleBehandlinger}
      behandling={alleBehandlinger[0]}
    />);

    const panel = wrapper.find<ProsessDefaultInitPanelProps<any, any> & ProsessPanelInitProps>(ProsessDefaultInitPanel);

    expect(panel.props().skalPanelVisesIMeny({} as StandardProsessPanelProps, RestApiState.SUCCESS)).toBe(true);

    const innerElement = panel.renderProp('renderPanel')({}, {});

    const prosessPanel = innerElement.find(FormkravProsessIndex);
    expect(prosessPanel).toHaveLength(1);
    expect(prosessPanel.props().avsluttedeBehandlinger).toEqual([alleBehandlinger[0]]);
  });
});

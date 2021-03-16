import React from 'react';
import { shallow } from 'enzyme';

import FormkravProsessIndex from '@fpsak-frontend/prosess-formkrav';
import { ProsessDefaultInitPanel, ProsessDefaultInitPanelProps } from '@fpsak-frontend/behandling-felles-ny';
import { StandardProsessPanelProps } from '@fpsak-frontend/types';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';

import FormKravFamOgPensjonProsessStegInitPanel from './FormKravFamOgPensjonProsessStegInitPanel';

describe('<FormKravFamOgPensjonProsessStegInitPanel>', () => {
  it('skal rendre komponent og filtrere avslutte behandlinger', () => {
    const alleBehandlinger = [{
      id: 1,
      uuid: 'test',
      type: {
        kode: behandlingType.FORSTEGANGSSOKNAD,
        kodeverk: '',
      },
      status: {
        kode: behandlingStatus.AVSLUTTET,
        kodeverk: '',
      },
      opprettet: '2020-01-01',
    }, {
      id: 2,
      uuid: 'test',
      type: {
        kode: behandlingType.KLAGE,
        kodeverk: '',
      },
      status: {
        kode: behandlingStatus.AVSLUTTET,
        kodeverk: '',
      },
      opprettet: '2020-01-01',
    }];

    const wrapper = shallow(<FormKravFamOgPensjonProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      alleBehandlinger={alleBehandlinger}
    />);

    const panel = wrapper.find<ProsessDefaultInitPanelProps<any, any>>(ProsessDefaultInitPanel);

    expect(panel.props().skalPanelVisesIMeny({} as StandardProsessPanelProps, RestApiState.SUCCESS)).toBe(true);

    const innerElement = panel.renderProp('renderPanel')({});

    const prosessPanel = innerElement.find(FormkravProsessIndex);
    expect(prosessPanel).toHaveLength(1);
    expect(prosessPanel.props().avsluttedeBehandlinger).toEqual([alleBehandlinger[0]]);
  });
});

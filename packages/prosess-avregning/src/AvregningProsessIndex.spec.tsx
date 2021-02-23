import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { Aksjonspunkt, Behandling, Fagsak } from '@fpsak-frontend/types';

import AvregningPanel from './components/AvregningPanel';
import AvregningProsessIndex from './AvregningProsessIndex';

describe('<AvregningProsessIndex>', () => {
  const fagsak = {
    saksnummerString: '123',
    sakstype: {
      kode: fagsakYtelseType.FORELDREPENGER,
      kodeverk: '',
    },
  } as Fagsak;

  const behandling = {
    id: 1,
    versjon: 1,
    sprakkode: {
      kode: 'NO',
    },
  } as Behandling;

  const aksjonspunkter = [{
    definisjon: {
      kode: aksjonspunktCodes.VURDER_FEILUTBETALING,
    },
    begrunnelse: 'test',
  }] as Aksjonspunkt[];

  it('skal rendre komponent korrekt', () => {
    const wrapper = shallow(<AvregningProsessIndex
      fagsak={fagsak}
      behandling={behandling}
      aksjonspunkter={aksjonspunkter}
      submitCallback={sinon.spy()}
      isReadOnly={false}
      readOnlySubmitButton={false}
      isAksjonspunktOpen
      previewFptilbakeCallback={sinon.spy()}
      alleKodeverk={{}}
      status=""
      vilkar={[]}
    />);
    expect(wrapper.find(AvregningPanel)).toHaveLength(1);
  });
});

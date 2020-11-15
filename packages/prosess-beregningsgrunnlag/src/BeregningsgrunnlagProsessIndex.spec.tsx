import sinon from 'sinon';
import { expect } from 'chai';
import venteArsakType from '@fpsak-frontend/kodeverk/src/venteArsakType';
import React from 'react';
import Behandling from '@fpsak-frontend/types/src/behandlingTsType';
import BeregningsgrunnlagProsessIndex from './BeregningsgrunnlagProsessIndex';
import shallowWithIntl from '../i18n/intl-enzyme-test-helper-prosess-beregningsgrunnlag';

const behandling = {
  id: 1,
  versjon: 1,
  venteArsakKode: venteArsakType.VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG,
  sprakkode: {
    kode: '-',
    kodeverk: 'SPRAAK_KODE',
  },
};
describe('<BeregningsgrunnlagProsessIndex>', () => {
  it('skal teste at BeregningsgrunnlagProsessIndex rendrer beregningFP', () => {
    const wrapper = shallowWithIntl(<BeregningsgrunnlagProsessIndex
      behandling={behandling as Behandling}
      beregningsgrunnlag={{}}
      aksjonspunkter={[]}
      submitCallback={sinon.spy()}
      isReadOnly={false}
      readOnlySubmitButton={false}
      isAksjonspunktOpen={false}
      vilkar={[]}
      status=""
      alleKodeverk={{}}
    />);
    const beregningFp = wrapper.find('BeregningFP');
    expect(beregningFp.length).to.equal(1);
  });
});

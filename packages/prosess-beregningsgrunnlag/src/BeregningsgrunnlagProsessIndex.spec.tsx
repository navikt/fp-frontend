import React from 'react';
import sinon from 'sinon';

import Behandling from '@fpsak-frontend/types/src/behandlingTsType';
import { shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { AlleKodeverk } from '@fpsak-frontend/types';

import BeregningsgrunnlagProsessIndex from './BeregningsgrunnlagProsessIndex';
import messages from '../i18n/nb_NO.json';

const behandling = {
  id: 1,
  versjon: 1,
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
      alleKodeverk={{} as AlleKodeverk}
      arbeidsgiverOpplysningerPerId={{}}
      alleMerknaderFraBeslutter={{}}
      setFormData={() => undefined}
    />, messages);
    const beregningFp = wrapper.find('BeregningFP');
    expect(beregningFp.length).toBe(1);
  });
});

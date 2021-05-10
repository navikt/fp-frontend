import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import PeriodeController from './PeriodeController';
import PeriodeInformasjon from './PeriodeInformasjon';

import TilbakekrevingTimelineData from './TilbakekrevingTimelineData';

describe('<TilbakekrevingTimelineData>', () => {
  it('skal rendre komponent korrekt', () => {
    const wrapper = shallow(<TilbakekrevingTimelineData
      periode={{
        fom: '2019-10-10',
        tom: '2019-11-10',
        belop: 1212,
        foreldelseVurderingType: {
          kode: '',
          kodeverk: '',
        },
        begrunnelse: 'Test',
        feilutbetaling: 12,
        foreldet: '',
      }}
      callbackForward={sinon.spy()}
      callbackBackward={sinon.spy()}
      readOnly={false}
      oppdaterSplittedePerioder={sinon.spy()}
      behandlingUuid="1"
      beregnBelop={() => undefined}
    />);

    expect(wrapper.find(PeriodeController)).toHaveLength(1);
    expect(wrapper.find(PeriodeInformasjon)).toHaveLength(1);
  });
});

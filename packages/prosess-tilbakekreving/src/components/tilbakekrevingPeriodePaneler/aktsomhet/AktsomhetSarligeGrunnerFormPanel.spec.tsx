import React from 'react';
import { shallow } from 'enzyme';

import { CheckboxField, TextAreaField } from '@fpsak-frontend/form';

import sarligGrunn from '../../../kodeverk/sarligGrunn';
import AktsomhetSarligeGrunnerFormPanel from './AktsomhetSarligeGrunnerFormPanel';

describe('<AktsomhetSarligeGrunnerFormPanel>', () => {
  it('skal vise alle særlige grunner', () => {
    const sarligGrunnTyper = [{
      kode: sarligGrunn.GRAD_AV_UAKTSOMHET,
      navn: 'grad av uaktsomhet',
      kodeverk: '',
    }, {
      kode: sarligGrunn.HELT_ELLER_DELVIS_NAVS_FEIL,
      navn: 'navs feil',
      kodeverk: '',
    }];
    const wrapper = shallow(<AktsomhetSarligeGrunnerFormPanel
      harGrunnerTilReduksjon
      readOnly={false}
      handletUaktsomhetGrad=""
      erSerligGrunnAnnetValgt={false}
      sarligGrunnTyper={sarligGrunnTyper}
      harMerEnnEnYtelse
      feilutbetalingBelop={10}
    />);

    expect(wrapper.find(CheckboxField)).toHaveLength(2);
  });

  it('skal vise tekstfelt for annet-begrunnelse når annet er valgt som særlig grunn', () => {
    const sarligGrunnTyper = [{
      kode: sarligGrunn.ANNET,
      navn: 'annet',
      kodeverk: '',
    }, {
      kode: sarligGrunn.HELT_ELLER_DELVIS_NAVS_FEIL,
      navn: 'navs feil',
      kodeverk: '',
    }];
    const wrapper = shallow(<AktsomhetSarligeGrunnerFormPanel
      harGrunnerTilReduksjon
      readOnly={false}
      handletUaktsomhetGrad=""
      erSerligGrunnAnnetValgt
      sarligGrunnTyper={sarligGrunnTyper}
      harMerEnnEnYtelse
      feilutbetalingBelop={10}
    />);

    expect(wrapper.find(TextAreaField)).toHaveLength(1);
  });
});

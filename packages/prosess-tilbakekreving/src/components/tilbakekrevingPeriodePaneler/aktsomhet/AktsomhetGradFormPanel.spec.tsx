import React from 'react';
import { shallow } from 'enzyme';

import sarligGrunn from '../../../kodeverk/sarligGrunn';
import aktsomhet from '../../../kodeverk/aktsomhet';
import AktsomhetGradFormPanel from './AktsomhetGradFormPanel';
import AktsomhetGradForsettFormPanel from './AktsomhetGradForsettFormPanel';
import AktsomhetGradUaktsomhetFormPanel from './AktsomhetGradUaktsomhetFormPanel';

describe('<AktsomhetGradFormPanel>', () => {
  const sarligGrunnTyper = [{
    kode: sarligGrunn.GRAD_AV_UAKTSOMHET,
    navn: 'grad av uaktsomhet',
    kodeverk: '',
  }, {
    kode: sarligGrunn.HELT_ELLER_DELVIS_NAVS_FEIL,
    navn: 'navs feil',
    kodeverk: '',
  }];

  it('skal vise panel for å forsett når denne radio-knappen er valgt', () => {
    const wrapper = shallow(<AktsomhetGradFormPanel
      harGrunnerTilReduksjon
      readOnly={false}
      handletUaktsomhetGrad={aktsomhet.FORSETT}
      erSerligGrunnAnnetValgt
      sarligGrunnTyper={sarligGrunnTyper}
      harMerEnnEnYtelse
      feilutbetalingBelop={100}
      erTotalBelopUnder4Rettsgebyr={false}
    />);

    expect(wrapper.find(AktsomhetGradForsettFormPanel)).toHaveLength(1);
    expect(wrapper.find(AktsomhetGradUaktsomhetFormPanel)).toHaveLength(0);
  });

  it('skal vise panel for å grovt uaktsomt når denne radio-knappen er valgt', () => {
    const wrapper = shallow(<AktsomhetGradFormPanel
      harGrunnerTilReduksjon
      readOnly={false}
      handletUaktsomhetGrad={aktsomhet.GROVT_UAKTSOM}
      erSerligGrunnAnnetValgt
      sarligGrunnTyper={sarligGrunnTyper}
      harMerEnnEnYtelse
      feilutbetalingBelop={100}
      erTotalBelopUnder4Rettsgebyr={false}
    />);

    expect(wrapper.find(AktsomhetGradForsettFormPanel)).toHaveLength(0);
    expect(wrapper.find(AktsomhetGradUaktsomhetFormPanel)).toHaveLength(1);
  });
});

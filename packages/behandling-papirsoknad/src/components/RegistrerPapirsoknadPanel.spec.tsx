import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import fagsakStatus from '@fpsak-frontend/kodeverk/src/fagsakStatus';
import { SoknadData } from '@fpsak-frontend/papirsoknad-felles';
import EngangsstonadPapirsoknadIndex from '@fpsak-frontend/papirsoknad-es';
import ForeldrepengerPapirsoknadIndex from '@fpsak-frontend/papirsoknad-fp';
import SvangerskapspengerPapirsoknadIndex from '@fpsak-frontend/papirsoknad-svp';
import { AlleKodeverk, Fagsak } from '@fpsak-frontend/types';

import RegistrerPapirsoknadPanel from './RegistrerPapirsoknadPanel';
import SoknadTypePickerForm from './SoknadTypePickerForm';

const fagsak = {
  saksnummer: '123456',
  fagsakYtelseType: fagsakYtelseType.FORELDREPENGER,
  status: fagsakStatus.UNDER_BEHANDLING,
} as Fagsak;

describe('<RegistrerPapirsoknadPanel>', () => {
  it('skal vise aksjonspunkt-hjelpetekst og form for engangsstønad', () => {
    const wrapper = shallow(<RegistrerPapirsoknadPanel
      fagsak={fagsak}
      fagsakPersonnummer="12343541"
      kodeverk={{} as AlleKodeverk}
      readOnly={false}
      soknadData={new SoknadData('ES', 'TEST', 'TEST')}
      setSoknadData={sinon.spy()}
      lagreUfullstendig={sinon.spy()}
      lagreFullstendig={sinon.spy()}
    />);
    expect(wrapper.find(AksjonspunktHelpTextHTML)).toHaveLength(1);
    expect(wrapper.find(SoknadTypePickerForm)).toHaveLength(1);
    expect(wrapper.find(EngangsstonadPapirsoknadIndex)).toHaveLength(1);
    expect(wrapper.find(ForeldrepengerPapirsoknadIndex)).toHaveLength(0);
    expect(wrapper.find(SvangerskapspengerPapirsoknadIndex)).toHaveLength(0);
  });

  it('skal vise foreldrepenger-form', () => {
    const wrapper = shallow(<RegistrerPapirsoknadPanel
      fagsak={fagsak}
      fagsakPersonnummer="12343541"
      kodeverk={{} as AlleKodeverk}
      readOnly
      soknadData={new SoknadData(fagsakYtelseType.FORELDREPENGER, 'TEST', 'TEST')}
      setSoknadData={sinon.spy()}
      lagreUfullstendig={sinon.spy()}
      lagreFullstendig={sinon.spy()}
    />);
    expect(wrapper.find(ForeldrepengerPapirsoknadIndex)).toHaveLength(1);
    expect(wrapper.find(EngangsstonadPapirsoknadIndex)).toHaveLength(0);
    expect(wrapper.find(SvangerskapspengerPapirsoknadIndex)).toHaveLength(0);
  });

  it('skal vise svangerskapspenger-form', () => {
    const wrapper = shallow(<RegistrerPapirsoknadPanel
      fagsak={{
        ...fagsak,
        fagsakYtelseType: fagsakYtelseType.SVANGERSKAPSPENGER,
      }}
      fagsakPersonnummer="12343541"
      kodeverk={{} as AlleKodeverk}
      readOnly
      soknadData={new SoknadData(fagsakYtelseType.SVANGERSKAPSPENGER, 'TEST', 'TEST')}
      setSoknadData={sinon.spy()}
      lagreUfullstendig={sinon.spy()}
      lagreFullstendig={sinon.spy()}
    />);
    expect(wrapper.find(ForeldrepengerPapirsoknadIndex)).toHaveLength(0);
    expect(wrapper.find(EngangsstonadPapirsoknadIndex)).toHaveLength(0);
    expect(wrapper.find(SvangerskapspengerPapirsoknadIndex)).toHaveLength(1);
  });
});

import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import { intlWithMessages } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import { isRequiredMessage } from '@fpsak-frontend/utils';
import { Aksjonspunkt, Behandlingsresultat } from '@fpsak-frontend/types';

import VilkarResultPicker from './VilkarResultPicker';
import * as useIntl from '../useIntl';

describe('<VilkarResultPicker>', () => {
  const avslagsarsaker = [{ kode: 'TEST', navn: 'test', kodeverk: '' }];

  let contextStub;
  beforeEach(() => {
    contextStub = sinon.stub(useIntl, 'default').callsFake(() => intlWithMessages());
  });

  afterEach(() => {
    contextStub.restore();
  });

  it('skal vise komponent med radioknapper', () => {
    const wrapper = shallow(<VilkarResultPicker
      avslagsarsaker={avslagsarsaker}
      erVilkarOk
      readOnly={false}
      customVilkarIkkeOppfyltText="Ikke oppfylt"
      customVilkarOppfyltText="Oppfylt"
    />);
    expect(wrapper.find('RadioOption')).to.have.length(2);
  });

  it('skal kunne overstyre vilkårtekster', () => {
    const textId = 'Test';
    const wrapper = shallow(<VilkarResultPicker
      avslagsarsaker={avslagsarsaker}
      erVilkarOk={false}
      customVilkarIkkeOppfyltText={textId}
      customVilkarOppfyltText="Oppfylt"
      readOnly={false}
    />);

    // @ts-ignore fiks
    expect(wrapper.find('RadioOption').at(1).prop('label')).to.equal(textId);
  });

  it('skal ikke vise nedtrekksliste når vilkårsresultat ikke er valgt', () => {
    const wrapper = shallow(<VilkarResultPicker
      avslagsarsaker={avslagsarsaker}
      erVilkarOk
      readOnly={false}
      customVilkarIkkeOppfyltText="Ikke oppfylt"
      customVilkarOppfyltText="Oppfylt"
    />);

    expect(wrapper.find('SelectField')).to.have.length(0);
  });

  it('skal ikke vise nedtrekksliste når vilkårsresultat er OK', () => {
    const wrapper = shallow(<VilkarResultPicker
      avslagsarsaker={avslagsarsaker}
      erVilkarOk
      readOnly={false}
      customVilkarIkkeOppfyltText="Ikke oppfylt"
      customVilkarOppfyltText="Oppfylt"
    />);

    expect(wrapper.find('SelectField')).to.have.length(0);
  });

  it('skal vise nedtrekksliste når vilkårsresultat er valgt', () => {
    const wrapper = shallow(<VilkarResultPicker
      avslagsarsaker={avslagsarsaker}
      erVilkarOk={false}
      readOnly={false}
      customVilkarIkkeOppfyltText="Ikke oppfylt"
      customVilkarOppfyltText="Oppfylt"
    />);

    const select = wrapper.find('SelectField');
    expect(select).to.have.length(1);
    expect(select.prop('label')).to.eql('Avslagsårsak');
    expect(select.prop('placeholder')).to.eql('Velg årsak');
    expect(select.prop('selectValues')).to.have.length(1);
  });

  it('skal feile validering når en har valgt å avvise vilkår men ikke valgt avslagsårsak', () => {
    const erVilkarOk = false;
    const avslagCode = undefined;
    const errors = VilkarResultPicker.validate(erVilkarOk, avslagCode);

    expect(errors.avslagCode).to.eql(isRequiredMessage());
  });

  it('skal ikke feile validering når en har valgt både å avvise vilkår og avslagsårsak', () => {
    const erVilkarOk = false;
    const avslagCode = 'VALGT_KODE';
    const errors = VilkarResultPicker.validate(erVilkarOk, avslagCode);

    expect(errors).to.eql({});
  });

  it('skal sette opp initielle verdier', () => {
    const behandlingsresultat = {
      avslagsarsak: {
        kode: 'Avslagskoden',
        kodeverk: '',
      },
    } as Behandlingsresultat;
    const aksjonspunkter = [{
      status: {
        kode: aksjonspunktStatus.UTFORT,
      },
      vilkarType: {
        kode: vilkarType.FODSELSVILKARET_MOR,
      },
    }] as Aksjonspunkt[];
    const intielleVerdier = VilkarResultPicker.buildInitialValues(behandlingsresultat, aksjonspunkter, vilkarUtfallType.IKKE_OPPFYLT);

    expect(intielleVerdier).to.eql({
      avslagCode: 'Avslagskoden',
      erVilkarOk: false,
    });
  });
});

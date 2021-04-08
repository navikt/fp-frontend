import React from 'react';
import { shallow } from 'enzyme';

import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import { isRequiredMessage } from '@fpsak-frontend/utils';
import { Aksjonspunkt, Behandlingsresultat } from '@fpsak-frontend/types';

import VilkarResultPicker from './VilkarResultPicker';

jest.mock('react-intl', () => {
  const reactIntl = jest.requireActual('react-intl');
  const meldinger = jest.requireActual('../../i18n/nb_NO.json');
  const intlTestHelper = jest.requireActual('@fpsak-frontend/utils-test/src/intl-enzyme-test-helper');
  return {
    ...reactIntl,
    useIntl: () => intlTestHelper.getIntlMock(meldinger),
  };
});

describe('<VilkarResultPicker>', () => {
  const avslagsarsaker = [{ kode: 'TEST', navn: 'test', kodeverk: '' }];

  it('skal vise komponent med radioknapper', () => {
    const wrapper = shallow(<VilkarResultPicker
      avslagsarsaker={avslagsarsaker}
      erVilkarOk
      readOnly={false}
      customVilkarIkkeOppfyltText="Ikke oppfylt"
      customVilkarOppfyltText="Oppfylt"
    />);
    expect(wrapper.find('RadioOption')).toHaveLength(2);
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
    expect(wrapper.find('RadioOption').at(1).prop('label')).toBe(textId);
  });

  it('skal ikke vise nedtrekksliste når vilkårsresultat ikke er valgt', () => {
    const wrapper = shallow(<VilkarResultPicker
      avslagsarsaker={avslagsarsaker}
      erVilkarOk
      readOnly={false}
      customVilkarIkkeOppfyltText="Ikke oppfylt"
      customVilkarOppfyltText="Oppfylt"
    />);

    expect(wrapper.find('SelectField')).toHaveLength(0);
  });

  it('skal ikke vise nedtrekksliste når vilkårsresultat er OK', () => {
    const wrapper = shallow(<VilkarResultPicker
      avslagsarsaker={avslagsarsaker}
      erVilkarOk
      readOnly={false}
      customVilkarIkkeOppfyltText="Ikke oppfylt"
      customVilkarOppfyltText="Oppfylt"
    />);

    expect(wrapper.find('SelectField')).toHaveLength(0);
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
    expect(select).toHaveLength(1);
    expect(select.prop('label')).toEqual('Avslagsårsak');
    expect(select.prop('placeholder')).toEqual('Velg årsak');
    expect(select.prop('selectValues')).toHaveLength(1);
  });

  it('skal feile validering når en har valgt å avvise vilkår men ikke valgt avslagsårsak', () => {
    const erVilkarOk = false;
    const avslagCode = undefined;
    const errors = VilkarResultPicker.validate(erVilkarOk, avslagCode);

    expect(errors.avslagCode).toEqual(isRequiredMessage());
  });

  it('skal ikke feile validering når en har valgt både å avvise vilkår og avslagsårsak', () => {
    const erVilkarOk = false;
    const avslagCode = 'VALGT_KODE';
    const errors = VilkarResultPicker.validate(erVilkarOk, avslagCode);

    expect(errors).toEqual({});
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

    expect(intielleVerdier).toEqual({
      avslagCode: 'Avslagskoden',
      erVilkarOk: false,
    });
  });
});

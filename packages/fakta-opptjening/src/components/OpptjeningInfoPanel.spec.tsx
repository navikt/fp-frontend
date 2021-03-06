import React from 'react';
import { shallow } from 'enzyme';

import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import {
  Aksjonspunkt, AlleKodeverk, FastsattOpptjening, OpptjeningAktivitet,
} from '@fpsak-frontend/types';

import { buildInitialValues, OpptjeningInfoPanel } from './OpptjeningInfoPanel';
import OpptjeningFaktaForm from './OpptjeningFaktaForm';

describe('<OpptjeningInfoPanel>', () => {
  it('skal vise opptjeningspanel', () => {
    const wrapper = shallow(<OpptjeningInfoPanel
      {...reduxFormPropsMock}
      hasOpenAksjonspunkter
      readOnly={false}
      fastsattOpptjening={{
        opptjeningFom: '2017-01-01',
        opptjeningTom: '2017-10-01',
        opptjeningperiode: {
          måneder: 1,
          dager: 1,
        },
      }}
      alleMerknaderFraBeslutter={{}}
      alleKodeverk={{} as AlleKodeverk}
      opptjeningAktiviteter={[]}
      aksjonspunkter={[]}
      submitCallback={() => undefined}
      onSubmit={() => undefined}
      arbeidsgiverOpplysningerPerId={{}}
    />);

    const opptjeningForm = wrapper.find(OpptjeningFaktaForm);
    expect(opptjeningForm).toHaveLength(1);
    expect(opptjeningForm.prop('readOnly')).toBe(false);
  });

  it('skal ikke bruke aktiviteter som er utenfor opptjeningperioden', () => {
    const opptjeningActivities = [{
      opptjeningFom: '2017-06-01',
      opptjeningTom: '2017-12-31',
      begrunnelse: 'test1',
    }, {
      opptjeningFom: '2018-10-02',
      opptjeningTom: '2019-06-01',
      begrunnelse: 'test2',
    }, {
      opptjeningFom: '2017-12-15',
      opptjeningTom: '2018-11-01',
      begrunnelse: 'test3',
    }, {
      opptjeningFom: '2017-12-15',
      opptjeningTom: '2018-01-01',
      begrunnelse: 'test4',
    }, {
      opptjeningFom: '2018-10-01',
      opptjeningTom: '2018-12-01',
      begrunnelse: 'test5',
    }] as OpptjeningAktivitet[];
    const fastsattOpptjening = {
      opptjeningFom: '2018-01-01',
      opptjeningTom: '2018-10-01',
    } as FastsattOpptjening;
    const aksjonspunkter = { definisjon: { kode: '5058' }, erAktivt: true, toTrinnsBehandling: false } as Aksjonspunkt;

    const initialValues = buildInitialValues.resultFunc(opptjeningActivities, fastsattOpptjening, [aksjonspunkter]);
    expect(initialValues).toEqual({
      aksjonspunkt: [],
      fastsattOpptjening: {
        opptjeningFom: '2018-01-01',
        opptjeningTom: '2018-10-01',
      },
      opptjeningActivities: [{
        opptjeningFom: '2018-01-01',
        opptjeningTom: '2018-10-01',
        begrunnelse: 'test3',
        originalFom: '2017-12-15',
        originalTom: '2018-11-01',
        id: 1,
      }, {
        opptjeningFom: '2018-01-01',
        opptjeningTom: '2018-01-01',
        begrunnelse: 'test4',
        originalFom: '2017-12-15',
        originalTom: '2018-01-01',
        id: 2,
      }, {
        opptjeningFom: '2018-10-01',
        opptjeningTom: '2018-10-01',
        begrunnelse: 'test5',
        originalFom: '2018-10-01',
        originalTom: '2018-12-01',
        id: 3,
      }],
    });
  });
  it('skal ikke bruke aktiviteter som er utenfor opptjeningperioden og vise korrekt aksjonspunkt', () => {
    const opptjeningActivities = [{
      opptjeningFom: '2017-06-01',
      opptjeningTom: '2017-12-31',
      begrunnelse: 'test1',
    }, {
      opptjeningFom: '2018-10-02',
      opptjeningTom: '2019-06-01',
      begrunnelse: 'test2',
    }, {
      opptjeningFom: '2017-12-15',
      opptjeningTom: '2018-11-01',
      begrunnelse: 'test3',
    }, {
      opptjeningFom: '2017-12-15',
      opptjeningTom: '2018-01-01',
      begrunnelse: 'test4',
    }, {
      opptjeningFom: '2018-10-01',
      opptjeningTom: '2018-12-01',
      begrunnelse: 'test5',
    }] as OpptjeningAktivitet[];
    const fastsattOpptjening = {
      opptjeningFom: '2018-01-01',
      opptjeningTom: '2018-10-01',
    } as FastsattOpptjening;
    const aksjonspunkter = [{ definisjon: { kode: '5051' }, erAktivt: true, toTrinnsBehandling: false },
      { definisjon: { kode: '5080' }, erAktivt: true, toTrinnsBehandling: false }];

    const initialValues = buildInitialValues.resultFunc(opptjeningActivities, fastsattOpptjening, aksjonspunkter as Aksjonspunkt[]);
    expect(initialValues).toEqual({
      aksjonspunkt: [{
        definisjon: {
          kode: '5051',
        },
        erAktivt: true,
        toTrinnsBehandling: false,
      }],
      fastsattOpptjening: {
        opptjeningFom: '2018-01-01',
        opptjeningTom: '2018-10-01',
      },
      opptjeningActivities: [{
        opptjeningFom: '2018-01-01',
        opptjeningTom: '2018-10-01',
        begrunnelse: 'test3',
        originalFom: '2017-12-15',
        originalTom: '2018-11-01',
        id: 1,
      }, {
        opptjeningFom: '2018-01-01',
        opptjeningTom: '2018-01-01',
        begrunnelse: 'test4',
        originalFom: '2017-12-15',
        originalTom: '2018-01-01',
        id: 2,
      }, {
        opptjeningFom: '2018-10-01',
        opptjeningTom: '2018-10-01',
        begrunnelse: 'test5',
        originalFom: '2018-10-01',
        originalTom: '2018-12-01',
        id: 3,
      }],
    });
  });
});

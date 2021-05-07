import React from 'react';
import { shallow } from 'enzyme';

import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { RadioGroupField, RadioOption, TextAreaField } from '@fpsak-frontend/form';
import { Aksjonspunkt, Risikoklassifisering } from '@fpsak-frontend/types';

import faresignalVurdering from '../kodeverk/faresignalVurdering';

import {
  AvklarFaresignalerForm, begrunnelseFieldName, buildInitialValues, vurderingerHovedkategori, ikkeReelleVurderingerUnderkategori,
} from './AvklarFaresignalerForm';

const mockAksjonspunkt = (status: string, begrunnelse?: string): Aksjonspunkt => ({
  definisjon: {
    kode: '5095',
    kodeverk: '',
  },
  status: {
    kode: status,
    kodeverk: '',
  },
  begrunnelse,
  kanLoses: true,
  erAktivt: true,
});

const mockRisikoklassifisering = (kode: string): Risikoklassifisering => ({
  kontrollresultat: {
    kode: 'HOY',
    kodeverk: 'Kontrollresultat',
  },
  faresignalVurdering: {
    kode,
    kodeverk: 'Faresignalvurdering',
  },
  medlFaresignaler: undefined,
  iayFaresignaler: undefined,
});

const faresignalVurderinger = [{
  kode: faresignalVurdering.INNVIRKNING,
  navn: 'Innvirkning',
  kodeverk: 'FARESIGNAL',
}, {
  kode: faresignalVurdering.INGEN_INNVIRKNING,
  navn: 'Ingen innvirkning',
  kodeverk: 'FARESIGNAL',
}, {
  kode: 'UNDERARSAK',
  navn: 'Eksempel på underårsak',
  kodeverk: 'FARESIGNAL',
}];

describe('<AvklarFaresignalerForm>', () => {
  it('skal teste at komponent mountes korrekt med inputfelter', () => {
    const wrapper = shallow(<AvklarFaresignalerForm
      readOnly
      aksjonspunkt={mockAksjonspunkt('UTFO', undefined)}
      submitCallback={() => Promise.resolve(undefined)}
      risikoklassifisering={{} as Risikoklassifisering}
      faresignalVurderinger={faresignalVurderinger}
      onSubmit={() => undefined}
      harValgtReelle={false}
      {...reduxFormPropsMock}
    />);
    expect(wrapper.find(TextAreaField)).toHaveLength(1);
    expect(wrapper.find(RadioOption)).toHaveLength(2);
    expect(wrapper.find(RadioGroupField)).toHaveLength(1);
  });

  it('skal teste at komponent gir inputfelter korrekte verdier', () => {
    const wrapper = shallow(<AvklarFaresignalerForm
      readOnly
      aksjonspunkt={mockAksjonspunkt('UTFO', undefined)}
      submitCallback={() => Promise.resolve(undefined)}
      risikoklassifisering={{} as Risikoklassifisering}
      faresignalVurderinger={faresignalVurderinger}
      onSubmit={() => undefined}
      harValgtReelle={false}
      {...reduxFormPropsMock}
    />);

    const textArea = wrapper.find(TextAreaField);
    expect(textArea.props().readOnly).toBe(true);

    const radioGroup = wrapper.find(RadioGroupField);
    expect(radioGroup.props().readOnly).toBe(true);
    expect(radioGroup.prop('isEdited')).toBe(true);
  });

  it('skal vise ekstra radioknapper når en har valgt faresignal ikke reell', () => {
    const wrapper = shallow(<AvklarFaresignalerForm
      readOnly
      aksjonspunkt={mockAksjonspunkt('UTFO', undefined)}
      submitCallback={() => Promise.resolve(undefined)}
      risikoklassifisering={{} as Risikoklassifisering}
      faresignalVurderinger={faresignalVurderinger}
      onSubmit={() => undefined}
      harValgtReelle
      {...reduxFormPropsMock}
    />);

    const radioGroup = wrapper.find(RadioGroupField);
    expect(radioGroup).toHaveLength(2);

    const radioOptionsGroup1 = radioGroup.at(0).find(RadioOption);
    expect(radioOptionsGroup1).toHaveLength(3);
    expect(radioOptionsGroup1.at(0).prop('label')).toBe('Innvirkning');
    expect(radioOptionsGroup1.at(2).prop('label')).toBe('Ingen innvirkning');

    const radioOptionsGroup2 = radioGroup.at(1).find(RadioOption);
    expect(radioOptionsGroup2).toHaveLength(1);
    expect(radioOptionsGroup2.prop('label')).toBe('Eksempel på underårsak');
  });

  it('skal teste at buildInitialValues gir korrekte verdier når vurdering er en underårsak til Innvirkning', () => {
    const expectedInitialValues = {
      [begrunnelseFieldName]: 'Dette er en begrunnelse',
      [vurderingerHovedkategori]: faresignalVurdering.INNVIRKNING,
      [ikkeReelleVurderingerUnderkategori]: 'EKSEMPEL_PA_UNDERARSAK',
    };
    const actualValues = buildInitialValues.resultFunc(mockRisikoklassifisering('EKSEMPEL_PA_UNDERARSAK'),
      mockAksjonspunkt('UTFO', 'Dette er en begrunnelse'));

    expect(actualValues).toEqual(expectedInitialValues);
  });

  it('skal teste at buildInitialValues gir korrekte verdier når vurdering er Ingen Innvirkning', () => {
    const expectedInitialValues = {
      [begrunnelseFieldName]: 'Dette er en begrunnelse',
      [vurderingerHovedkategori]: faresignalVurdering.INGEN_INNVIRKNING,
      [ikkeReelleVurderingerUnderkategori]: undefined,
    };
    const actualValues = buildInitialValues.resultFunc(mockRisikoklassifisering(faresignalVurdering.INGEN_INNVIRKNING),
      mockAksjonspunkt('UTFO', 'Dette er en begrunnelse'));

    expect(actualValues).toEqual(expectedInitialValues);
  });
});

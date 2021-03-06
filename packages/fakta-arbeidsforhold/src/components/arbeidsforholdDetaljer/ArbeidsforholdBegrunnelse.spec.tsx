import React from 'react';
import { shallow } from 'enzyme';
import TextAreaField from '@fpsak-frontend/form/src/TextAreaField';
import { ArbeidsforholdBegrunnelse } from './ArbeidsforholdBegrunnelse';

describe('<ArbeidsforholdBegrunnelse>', () => {
  it('skal ikke vise begrunnelsesfelt når ikke dirty, uten begrunnelse, og ikke avslå ytelse', () => {
    const wrapper = shallow(<ArbeidsforholdBegrunnelse
      readOnly={false}
      formName=""
      isDirty={false}
      harBegrunnelse={false}
      skalAvslaaYtelse={false}
    />);
    expect(wrapper.find(TextAreaField)).toHaveLength(0);
  });
  it('skal ikke vise begrunnelsesfelt når ikke dirty, uten begrunnelse, og avslå ytelse', () => {
    const wrapper = shallow(<ArbeidsforholdBegrunnelse
      readOnly={false}
      formName=""
      isDirty={false}
      harBegrunnelse={false}
      skalAvslaaYtelse
    />);
    expect(wrapper.find(TextAreaField)).toHaveLength(0);
  });
  it('skal ikke vise begrunnelsesfelt når dirty, uten begrunnelse, og avslå ytelse', () => {
    const wrapper = shallow(<ArbeidsforholdBegrunnelse
      readOnly={false}
      formName=""
      isDirty
      harBegrunnelse={false}
      skalAvslaaYtelse
    />);
    expect(wrapper.find(TextAreaField)).toHaveLength(0);
  });
  it('skal ikke vise begrunnelsesfelt når dirty, med begrunnelse, og avslå ytelse', () => {
    const wrapper = shallow(<ArbeidsforholdBegrunnelse
      readOnly={false}
      formName=""
      isDirty
      harBegrunnelse
      skalAvslaaYtelse
    />);
    expect(wrapper.find(TextAreaField)).toHaveLength(0);
  });
  it('skal vise begrunnelsesfelt når dirty, med begrunnelse, og ikke avslå ytelse', () => {
    const wrapper = shallow(<ArbeidsforholdBegrunnelse
      readOnly={false}
      formName=""
      isDirty
      harBegrunnelse
      skalAvslaaYtelse={false}
    />);
    expect(wrapper.find(TextAreaField)).toHaveLength(1);
  });
  it('skal vise begrunnelsesfelt når dirty, uten begrunnelse, og ikke avslå ytelse', () => {
    const wrapper = shallow(<ArbeidsforholdBegrunnelse
      readOnly={false}
      formName=""
      isDirty
      harBegrunnelse={false}
      skalAvslaaYtelse={false}
    />);
    expect(wrapper.find(TextAreaField)).toHaveLength(1);
  });
  it('skal vise begrunnelsesfelt når ikke dirty, med begrunnelse, og ikke avslå ytelse', () => {
    const wrapper = shallow(<ArbeidsforholdBegrunnelse
      readOnly={false}
      formName=""
      isDirty={false}
      harBegrunnelse
      skalAvslaaYtelse={false}
    />);
    expect(wrapper.find(TextAreaField)).toHaveLength(1);
  });
});

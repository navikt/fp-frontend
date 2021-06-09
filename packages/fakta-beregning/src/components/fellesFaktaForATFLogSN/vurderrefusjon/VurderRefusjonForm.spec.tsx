import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';
import { RadioGroupField, RadioOption } from '@fpsak-frontend/form';
import faktaOmBeregningTilfelle from '@fpsak-frontend/kodeverk/src/faktaOmBeregningTilfelle';

import { FaktaOmBeregning } from '@fpsak-frontend/types';
import VurderRefusjonForm, { lagFieldName } from './VurderRefusjonForm';

const {
  VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT,
} = faktaOmBeregningTilfelle;

describe('<VurderRefusjonForm>', () => {
  it('skal vise eitt sett med radioknapper om ein arbeidsgiver', () => {
    const senRefusjonkravListe = [
      { arbeidsgiverVisningsnavn: 'Arbeidsgiveren (8279312213) AS', arbeidsgiverId: '8279312213' },
    ];
    const fakta = {
      andelerForFaktaOmBeregning: [],
      refusjonskravSomKommerForSentListe: senRefusjonkravListe,
    } as FaktaOmBeregning;
    const wrapper = shallow(<VurderRefusjonForm
      readOnly={false}
      isAksjonspunktClosed={false}
      faktaOmBeregning={fakta}
    />);
    const formattedMessage = wrapper.find(FormattedMessage);
    expect(formattedMessage).toHaveLength(1);
    const radioGroup = wrapper.find(RadioGroupField);
    expect(radioGroup).toHaveLength(1);
    const buttons = radioGroup.find(RadioOption);
    expect(buttons).toHaveLength(2);
  });

  it('skal vise to sett med radioknapper om to arbeidsgivere', () => {
    const senRefusjonkravListe = [
      { arbeidsgiverVisningsnavn: 'Arbeidsgiveren (8279312213) AS', arbeidsgiverId: '8279312213' },
      { arbeidsgiverVisningsnavn: 'Arbeidsgiverto (45345345345) AS', arbeidsgiverId: '45345345345' },
    ];
    const fakta = {
      andelerForFaktaOmBeregning: [],
      refusjonskravSomKommerForSentListe: senRefusjonkravListe,
    } as FaktaOmBeregning;
    const wrapper = shallow(<VurderRefusjonForm
      readOnly={false}
      isAksjonspunktClosed={false}
      faktaOmBeregning={fakta}
    />);
    const formattedMessage = wrapper.find(FormattedMessage);
    expect(formattedMessage).toHaveLength(2);
    const radioGroup = wrapper.find(RadioGroupField);
    expect(radioGroup).toHaveLength(2);
  });

  it('skal bygge initial values', () => {
    const senRefusjonkravListe = [
      { arbeidsgiverVisningsnavn: 'Arbeidsgiveren (8279312213) AS', erRefusjonskravGyldig: true, arbeidsgiverId: '8279312213' },
      { arbeidsgiverVisningsnavn: 'Arbeidsgiverto (45345345345) AS', erRefusjonskravGyldig: false, arbeidsgiverId: '45345345345' },
    ];
    const initialValues = VurderRefusjonForm.buildInitialValues([VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT], senRefusjonkravListe);
    expect(initialValues[lagFieldName('8279312213')]).toBe(true);
    expect(initialValues[lagFieldName('45345345345')]).toBe(false);
  });

  it('skal bygge transform values', () => {
    const senRefusjonkravListe = [
      { arbeidsgiverId: '8279312213', arbeidsgiverVisningsnavn: 'Arbeidsgiveren (8279312213) AS', erRefusjonskravGyldig: true },
      { arbeidsgiverId: '45345345345', arbeidsgiverVisningsnavn: 'Arbeidsgiverto (45345345345) AS', erRefusjonskravGyldig: false },
    ];
    const values = { vurderRefusjonValues: {} };
    values.vurderRefusjonValues[lagFieldName('8279312213')] = false;
    values.vurderRefusjonValues[lagFieldName('45345345345')] = true;
    const transformedValues = VurderRefusjonForm.transformValues(senRefusjonkravListe)(values);
    expect(transformedValues.refusjonskravGyldighet.length).toBe(2);
    expect(transformedValues.refusjonskravGyldighet[0].arbeidsgiverId).toBe('8279312213');
    expect(transformedValues.refusjonskravGyldighet[0].skalUtvideGyldighet).toBe(false);
    expect(transformedValues.refusjonskravGyldighet[1].arbeidsgiverId).toBe('45345345345');
    expect(transformedValues.refusjonskravGyldighet[1].skalUtvideGyldighet).toBe(true);
  });
});

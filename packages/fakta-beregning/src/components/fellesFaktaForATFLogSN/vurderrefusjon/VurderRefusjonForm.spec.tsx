import React from 'react';
import { expect } from 'chai';
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
    expect(formattedMessage).has.length(1);
    const radioGroup = wrapper.find(RadioGroupField);
    expect(radioGroup).has.length(1);
    const buttons = radioGroup.find(RadioOption);
    expect(buttons).has.length(2);
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
    expect(formattedMessage).has.length(2);
    const radioGroup = wrapper.find(RadioGroupField);
    expect(radioGroup).has.length(2);
  });

  it('skal bygge initial values', () => {
    const senRefusjonkravListe = [
      { arbeidsgiverVisningsnavn: 'Arbeidsgiveren (8279312213) AS', erRefusjonskravGyldig: true, arbeidsgiverId: '8279312213' },
      { arbeidsgiverVisningsnavn: 'Arbeidsgiverto (45345345345) AS', erRefusjonskravGyldig: false, arbeidsgiverId: '8279312213' },
    ];
    const initialValues = VurderRefusjonForm.buildInitialValues([VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT], senRefusjonkravListe);
    expect(initialValues[lagFieldName('Arbeidsgiveren (8279312213) AS')]).to.equal(true);
    expect(initialValues[lagFieldName('Arbeidsgiverto (45345345345) AS')]).to.equal(false);
  });

  it('skal bygge transform values', () => {
    const senRefusjonkravListe = [
      { arbeidsgiverId: '8279312213', arbeidsgiverVisningsnavn: 'Arbeidsgiveren (8279312213) AS', erRefusjonskravGyldig: true },
      { arbeidsgiverId: '45345345345', arbeidsgiverVisningsnavn: 'Arbeidsgiverto (45345345345) AS', erRefusjonskravGyldig: false },
    ];
    const values = {};
    values[lagFieldName('Arbeidsgiveren (8279312213) AS')] = false;
    values[lagFieldName('Arbeidsgiverto (45345345345) AS')] = true;
    const transformedValues = VurderRefusjonForm.transformValues(senRefusjonkravListe)(values);
    expect(transformedValues.refusjonskravGyldighet.length).to.equal(2);
    expect(transformedValues.refusjonskravGyldighet[0].arbeidsgiverId).to.equal('8279312213');
    expect(transformedValues.refusjonskravGyldighet[0].skalUtvideGyldighet).to.equal(false);
    expect(transformedValues.refusjonskravGyldighet[1].arbeidsgiverId).to.equal('45345345345');
    expect(transformedValues.refusjonskravGyldighet[1].skalUtvideGyldighet).to.equal(true);
  });
});

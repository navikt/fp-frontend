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

const lagAGOpplysning = (identifikator, navn) => ({
  erPrivatPerson: false,
  identifikator,
  navn,
});

describe('<VurderRefusjonForm>', () => {
  it('skal vise eitt sett med radioknapper om ein arbeidsgiver', () => {
    const senRefusjonkravListe = [
      { arbeidsgiverId: '8279312213' },
    ];
    const agOpplysning = {
      8279312213: lagAGOpplysning(8279312213, 'Arbeidsgiveren'),
    };

    const fakta = {
      andelerForFaktaOmBeregning: [],
      refusjonskravSomKommerForSentListe: senRefusjonkravListe,
    } as FaktaOmBeregning;
    const wrapper = shallow(<VurderRefusjonForm
      readOnly={false}
      isAksjonspunktClosed={false}
      faktaOmBeregning={fakta}
      arbeidsgiverOpplysningerPerId={agOpplysning}
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
      { arbeidsgiverId: '8279312213' },
      { arbeidsgiverId: '45345345345' },
    ];
    const agOpplysning = {
      8279312213: lagAGOpplysning(8279312213, 'Arbeidsgiveren'),
      45345345345: lagAGOpplysning(45345345345, 'Arbeidsgiverto'),
    };

    const fakta = {
      andelerForFaktaOmBeregning: [],
      refusjonskravSomKommerForSentListe: senRefusjonkravListe,
    } as FaktaOmBeregning;
    const wrapper = shallow(<VurderRefusjonForm
      readOnly={false}
      isAksjonspunktClosed={false}
      faktaOmBeregning={fakta}
      arbeidsgiverOpplysningerPerId={agOpplysning}
    />);
    const formattedMessage = wrapper.find(FormattedMessage);
    expect(formattedMessage).has.length(2);
    const radioGroup = wrapper.find(RadioGroupField);
    expect(radioGroup).has.length(2);
  });

  it('skal bygge initial values', () => {
    const senRefusjonkravListe = [
      { erRefusjonskravGyldig: true, arbeidsgiverId: '8279312213' },
      { erRefusjonskravGyldig: false, arbeidsgiverId: '45345345345' },
    ];
    const initialValues = VurderRefusjonForm.buildInitialValues([VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT], senRefusjonkravListe);
    expect(initialValues[lagFieldName('8279312213')]).to.equal(true);
    expect(initialValues[lagFieldName('45345345345')]).to.equal(false);
  });

  it('skal bygge transform values', () => {
    const senRefusjonkravListe = [
      { arbeidsgiverId: '8279312213', erRefusjonskravGyldig: true },
      { arbeidsgiverId: '45345345345', erRefusjonskravGyldig: false },
    ];
    const values = {};
    values[lagFieldName('8279312213')] = false;
    values[lagFieldName('45345345345')] = true;
    const transformedValues = VurderRefusjonForm.transformValues(senRefusjonkravListe)(values);
    expect(transformedValues.refusjonskravGyldighet.length).to.equal(2);
    expect(transformedValues.refusjonskravGyldighet[0].arbeidsgiverId).to.equal('8279312213');
    expect(transformedValues.refusjonskravGyldighet[0].skalUtvideGyldighet).to.equal(false);
    expect(transformedValues.refusjonskravGyldighet[1].arbeidsgiverId).to.equal('45345345345');
    expect(transformedValues.refusjonskravGyldighet[1].skalUtvideGyldighet).to.equal(true);
  });
});

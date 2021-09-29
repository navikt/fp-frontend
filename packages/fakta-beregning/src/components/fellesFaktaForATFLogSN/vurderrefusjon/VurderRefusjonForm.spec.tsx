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

const agOpplysninger = {
  8279312213: {
    identifikator: '8279312213',
    navn: 'Arbeidsgiveren AS',
    erPrivatPerson: false,
  },
  45345345345: {
    identifikator: '45345345345',
    navn: 'ArbeidsgiverTo AS',
    erPrivatPerson: false,
  },
};

describe('<VurderRefusjonForm>', () => {
  it('skal vise eitt sett med radioknapper om ein arbeidsgiver', () => {
    const senRefusjonkravListe = [
      { arbeidsgiverIdent: '8279312213' },
    ];
    const fakta = {
      andelerForFaktaOmBeregning: [],
      refusjonskravSomKommerForSentListe: senRefusjonkravListe,
    } as FaktaOmBeregning;
    const wrapper = shallow(<VurderRefusjonForm
      readOnly={false}
      arbeidsgiverOpplysningerPerId={agOpplysninger}
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
      { arbeidsgiverIdent: '8279312213' },
      { arbeidsgiverIdent: '45345345345' },
    ];
    const fakta = {
      andelerForFaktaOmBeregning: [],
      refusjonskravSomKommerForSentListe: senRefusjonkravListe,
    } as FaktaOmBeregning;
    const wrapper = shallow(<VurderRefusjonForm
      readOnly={false}
      arbeidsgiverOpplysningerPerId={agOpplysninger}
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
      { erRefusjonskravGyldig: true, arbeidsgiverIdent: '8279312213' },
      { erRefusjonskravGyldig: false, arbeidsgiverIdent: '45345345345' },
    ];
    const initialValues = VurderRefusjonForm.buildInitialValues([VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT], senRefusjonkravListe);
    expect(initialValues[lagFieldName('8279312213')]).toBe(true);
    expect(initialValues[lagFieldName('45345345345')]).toBe(false);
  });

  it('skal bygge transform values', () => {
    const senRefusjonkravListe = [
      { arbeidsgiverIdent: '8279312213', erRefusjonskravGyldig: true },
      { arbeidsgiverIdent: '45345345345', erRefusjonskravGyldig: false },
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

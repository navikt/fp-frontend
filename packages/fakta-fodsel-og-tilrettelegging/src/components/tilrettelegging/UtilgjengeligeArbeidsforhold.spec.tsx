import React from 'react';

import { Element, Normaltekst } from 'nav-frontend-typografi';

import { shallow } from 'enzyme';
import { ArbeidsforholdFodselOgTilrettelegging } from '@fpsak-frontend/types';
import UtilgjengeligeArbeidsforhold from './UtilgjengeligeArbeidsforhold';

const arbeidsforhold = [
  {
    internArbeidsforholdReferanse: '0f70f2f2-79f8-4cc0-8929-be25ef2be878',
    arbeidsgiverReferanse: '910909088',
    begrunnelse: null,
    opplysningerOmRisiko: null,
    opplysningerOmTilrettelegging: null,
    skalBrukes: true,
    kanTilrettelegges: false,
    tilretteleggingBehovFom: '2019-09-15',
    tilretteleggingDatoer: [],
    tilretteleggingId: 1000303,
  },
  {
    internArbeidsforholdReferanse: 'fb74d757-6bd3-4ed3-a1f4-c2424ebb64d5',
    arbeidsgiverReferanse: '910909088',
    begrunnelse: null,
    opplysningerOmRisiko: null,
    opplysningerOmTilrettelegging: null,
    skalBrukes: true,
    kanTilrettelegges: false,
    tilretteleggingBehovFom: '2019-09-15',
    tilretteleggingDatoer: [],
    tilretteleggingId: 1000304,
  },
] as ArbeidsforholdFodselOgTilrettelegging[];

const arbeidsgiverOpplysningerPerId = {
  910909088: {
    erPrivatPerson: true,
    identifikator: '910909088',
    navn: 'Hurrlum Mekaniske',
  },
};

describe('<UtilgjengeligeArbeidsforhold>', () => {
  it('skal vise inputfelt som kan editeres når overstyrer velger å overstyre', () => {
    const wrapper = shallow(<UtilgjengeligeArbeidsforhold
      arbeidsforholdSomIkkeKanTilrettelegges={arbeidsforhold}
      arbeidsgiverOpplysningerPrId={arbeidsgiverOpplysningerPerId}
    />);

    const elementer = wrapper.find(Element);
    expect(elementer).toHaveLength(2);

    const normaltekster = wrapper.find(Normaltekst);
    expect(normaltekster).toHaveLength(4);
  });
});

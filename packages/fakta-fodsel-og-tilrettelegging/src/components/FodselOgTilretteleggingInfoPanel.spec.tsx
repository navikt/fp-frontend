import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import tilretteleggingType from '@fpsak-frontend/kodeverk/src/tilretteleggingType';

import FodselOgTilretteleggingInfoPanel from './FodselOgTilretteleggingInfoPanel';
import FodselOgTilretteleggingFaktaForm from './FodselOgTilretteleggingFaktaForm';
import FodselOgTilrettelegging from '../types/fodselOgTilretteleggingTsType';

const svangerskapspengerTilrettelegging: Partial<FodselOgTilrettelegging> = {
  termindato: '2020-02-27',
  arbeidsforholdListe: [{
    tilretteleggingId: 1008653,
    tilretteleggingBehovFom: '2019-10-01',
    tilretteleggingDatoer: [{
      fom: '2019-10-01',
      type: {
        kode: tilretteleggingType.INGEN_TILRETTELEGGING,
        kodeverk: 'test',
      },
    }],
    arbeidsgiverReferanse: '1',
    uttakArbeidType: {
      kode: 'FRILANS',
      kodeverk: 'UTTAK_ARBEID_TYPE',
    },
    skalBrukes: true,
    velferdspermisjoner: [],
  }],
};

const arbeidsgiverOpplysningerPerId = {
  1: {
    erPrivatPerson: true,
    identifikator: '910909088',
    navn: 'Frilanser, samlet aktivitet',
  },
};

describe('<FodselOgTilretteleggingInfoPanel>', () => {
  it('skal vise panel', () => {
    const wrapper = shallow(<FodselOgTilretteleggingInfoPanel
      behandlingId={1}
      behandlingVersjon={1}
      svangerskapspengerTilrettelegging={svangerskapspengerTilrettelegging as FodselOgTilrettelegging}
      aksjonspunkter={[]}
      iayArbeidsforhold={[]}
      readOnly
      hasOpenAksjonspunkter={false}
      submitCallback={sinon.spy()}
      submittable
      erOverstyrer
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      uttakArbeidTyper={[]}
    />);

    const faktaForm = wrapper.find(FodselOgTilretteleggingFaktaForm);
    expect(faktaForm).to.have.length(1);
  });
});

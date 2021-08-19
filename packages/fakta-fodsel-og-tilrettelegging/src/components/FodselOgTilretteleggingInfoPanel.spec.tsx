import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import tilretteleggingType from '@fpsak-frontend/kodeverk/src/tilretteleggingType';
import { FodselOgTilrettelegging } from '@fpsak-frontend/types';
import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import messages from '../../i18n/nb_NO.json';
import FodselOgTilretteleggingInfoPanel from './FodselOgTilretteleggingInfoPanel';
import FodselOgTilretteleggingFaktaForm from './FodselOgTilretteleggingFaktaForm';

const intlMock = getIntlMock(messages);

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
    kanTilrettelegges: true,
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
      intl={intlMock}
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
    expect(faktaForm).toHaveLength(1);
  });
});

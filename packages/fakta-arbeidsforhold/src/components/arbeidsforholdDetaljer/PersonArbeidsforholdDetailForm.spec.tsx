import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { TextAreaField } from '@fpsak-frontend/form';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { Arbeidsforhold } from '@fpsak-frontend/types';

import PersonNyttEllerErstattArbeidsforholdPanel from './PersonNyttEllerErstattArbeidsforholdPanel';
import { PersonArbeidsforholdDetailForm } from './PersonArbeidsforholdDetailForm';
import LeggTilArbeidsforholdFelter from './LeggTilArbeidsforholdFelter';
import arbeidsforholdHandling from '../../kodeverk/arbeidsforholdHandling';

describe('<PersonArbeidsforholdDetailForm>', () => {
  const arbeidsforhold = {
    id: '1',
    arbeidsforholdId: '1231-2345',
    navn: 'Svendsen Eksos',
    arbeidsgiverIdentifikator: '1234567',
    arbeidsgiverIdentifiktorGUI: '1234567',
    fomDato: '2018-01-01',
    tomDato: '2018-10-10',
    kilde: {
      navn: 'INNTEKT',
    },
    mottattDatoInntektsmelding: undefined,
    brukArbeidsforholdet: true,
    erNyttArbeidsforhold: undefined,
    erstatterArbeidsforholdId: undefined,
    tilVurdering: true,
  } as Arbeidsforhold;

  it('skal ikke vise tekstfelt for begrunnelse når form ikke er dirty og begrunnelse ikke har verdi', () => {
    const wrapper = shallow(<PersonArbeidsforholdDetailForm
      {...reduxFormPropsMock}
      cancelArbeidsforhold={sinon.spy()}
      arbeidsforholdHandlingVerdi={arbeidsforholdHandling.AKTIVT_ARBEIDSFORHOLD}
      isErstattArbeidsforhold
      hasReceivedInntektsmelding
      harErstattetEttEllerFlere
      readOnly={false}
      vurderOmSkalErstattes={false}
      aktivtArbeidsforholdTillatUtenIM={false}
      arbeidsforhold={arbeidsforhold}
      skalKunneLeggeTilNyeArbeidsforhold={false}
      initialValues={{
        erEndret: false,
        tilVurdering: true,
        replaceOptions: [],
      }}
      behandlingId={1}
      behandlingVersjon={1}
      alleKodeverk={{}}
    />);
    expect(wrapper.find(TextAreaField)).has.length(0);
  });
  it('skal vise panel for å velge nytt eller erstatte når behandling er i bruk og en har gamle arbeidsforhold for samme org', () => {
    const wrapper = shallow(<PersonArbeidsforholdDetailForm
      {...reduxFormPropsMock}
      cancelArbeidsforhold={sinon.spy()}
      arbeidsforholdHandlingVerdi={arbeidsforholdHandling.AKTIVT_ARBEIDSFORHOLD}
      isErstattArbeidsforhold
      hasReceivedInntektsmelding
      harErstattetEttEllerFlere={false}
      readOnly={false}
      vurderOmSkalErstattes
      aktivtArbeidsforholdTillatUtenIM={false}
      arbeidsforhold={arbeidsforhold}
      skalKunneLeggeTilNyeArbeidsforhold={false}
      initialValues={{
        erEndret: false,
        tilVurdering: true,
        replaceOptions: [{ id: '2' } as Arbeidsforhold],
      }}
      behandlingId={1}
      behandlingVersjon={1}
      alleKodeverk={{}}
    />);
    const panel = wrapper.find(PersonNyttEllerErstattArbeidsforholdPanel);
    expect(panel).to.be.length(1);
  });
  it('skal ikke vise panel for å velge nytt eller erstatte når behandling ikke er i bruk', () => {
    const wrapper = shallow(<PersonArbeidsforholdDetailForm
      {...reduxFormPropsMock}
      cancelArbeidsforhold={sinon.spy()}
      arbeidsforholdHandlingVerdi={arbeidsforholdHandling.AKTIVT_ARBEIDSFORHOLD}
      isErstattArbeidsforhold
      hasReceivedInntektsmelding
      harErstattetEttEllerFlere
      readOnly={false}
      vurderOmSkalErstattes={false}
      aktivtArbeidsforholdTillatUtenIM={false}
      arbeidsforhold={arbeidsforhold}
      skalKunneLeggeTilNyeArbeidsforhold={false}
      initialValues={{
        erEndret: false,
        tilVurdering: true,
        replaceOptions: [{ id: '2' } as Arbeidsforhold],
      }}
      behandlingId={1}
      behandlingVersjon={1}
      alleKodeverk={{}}
    />);
    const panel = wrapper.find(PersonNyttEllerErstattArbeidsforholdPanel);
    expect(panel).to.be.length(0);
  });
  it('skal ikke vise panel for å velge nytt eller erstatte når behandling ikke har gamle arbeidsforhold for samme org', () => {
    const wrapper = shallow(<PersonArbeidsforholdDetailForm
      {...reduxFormPropsMock}
      cancelArbeidsforhold={sinon.spy()}
      arbeidsforholdHandlingVerdi={arbeidsforholdHandling.AKTIVT_ARBEIDSFORHOLD}
      isErstattArbeidsforhold
      hasReceivedInntektsmelding
      harErstattetEttEllerFlere
      readOnly={false}
      vurderOmSkalErstattes={false}
      aktivtArbeidsforholdTillatUtenIM={false}
      arbeidsforhold={arbeidsforhold}
      skalKunneLeggeTilNyeArbeidsforhold={false}
      initialValues={{
        erEndret: false,
        tilVurdering: true,
        replaceOptions: [],
      }}
      behandlingId={1}
      behandlingVersjon={1}
      alleKodeverk={{}}
    />);
    const panel = wrapper.find(PersonNyttEllerErstattArbeidsforholdPanel);
    expect(panel).to.be.length(0);
  });
  it('skal vise tekst for å erstatte alle tidligere arbeidsforhold når behandling er i bruk og flagget harErstattetEttEllerFlere er satt', () => {
    const wrapper = shallow(<PersonArbeidsforholdDetailForm
      {...reduxFormPropsMock}
      cancelArbeidsforhold={sinon.spy()}
      arbeidsforholdHandlingVerdi={arbeidsforholdHandling.AKTIVT_ARBEIDSFORHOLD}
      isErstattArbeidsforhold
      hasReceivedInntektsmelding
      harErstattetEttEllerFlere
      readOnly={false}
      vurderOmSkalErstattes={false}
      aktivtArbeidsforholdTillatUtenIM={false}
      arbeidsforhold={arbeidsforhold}
      skalKunneLeggeTilNyeArbeidsforhold={false}
      initialValues={{
        erEndret: false,
        tilVurdering: true,
        replaceOptions: [],
      }}
      behandlingId={1}
      behandlingVersjon={1}
      alleKodeverk={{}}
    />);

    expect(wrapper.find('[id="PersonArbeidsforholdDetailForm.ErstatteTidligereArbeidsforhod"]')).has.length(1);
  });
  it('skal ikke vise tekst for å erstatte alle tidligere arbeidsforhold når behandling ikke er i bruk', () => {
    const wrapper = shallow(<PersonArbeidsforholdDetailForm
      {...reduxFormPropsMock}
      cancelArbeidsforhold={sinon.spy()}
      arbeidsforholdHandlingVerdi={arbeidsforholdHandling.FJERN_ARBEIDSFORHOLD}
      isErstattArbeidsforhold
      hasReceivedInntektsmelding
      harErstattetEttEllerFlere
      readOnly={false}
      vurderOmSkalErstattes={false}
      aktivtArbeidsforholdTillatUtenIM={false}
      arbeidsforhold={arbeidsforhold}
      skalKunneLeggeTilNyeArbeidsforhold={false}
      initialValues={{
        erEndret: false,
        tilVurdering: true,
        replaceOptions: [],
      }}
      behandlingId={1}
      behandlingVersjon={1}
      alleKodeverk={{}}
    />);

    expect(wrapper.find('[id="PersonArbeidsforholdDetailForm.ErstatteTidligereArbeidsforhod"]')).has.length(0);
  });
  it('skal ikke vise tekst for å erstatte alle tidligere arbeidsforhold når flagget harErstattetEttEllerFlere ikke er satt', () => {
    const wrapper = shallow(<PersonArbeidsforholdDetailForm
      {...reduxFormPropsMock}
      cancelArbeidsforhold={sinon.spy()}
      arbeidsforholdHandlingVerdi={arbeidsforholdHandling.AKTIVT_ARBEIDSFORHOLD}
      isErstattArbeidsforhold
      hasReceivedInntektsmelding
      harErstattetEttEllerFlere={false}
      readOnly={false}
      vurderOmSkalErstattes={false}
      aktivtArbeidsforholdTillatUtenIM={false}
      arbeidsforhold={arbeidsforhold}
      skalKunneLeggeTilNyeArbeidsforhold={false}
      initialValues={{
        erEndret: false,
        tilVurdering: true,
        replaceOptions: [],
      }}
      behandlingId={1}
      behandlingVersjon={1}
      alleKodeverk={{}}
    />);
    expect(wrapper.find('[id="PersonArbeidsforholdDetailForm.ErstatteTidligereArbeidsforhod"]')).has.length(0);
  });
  it('skal vise LeggTilArbeidsforholdFelter ', () => {
    const wrapper = shallow(<PersonArbeidsforholdDetailForm
      {...reduxFormPropsMock}
      cancelArbeidsforhold={sinon.spy()}
      arbeidsforholdHandlingVerdi={arbeidsforholdHandling.AKTIVT_ARBEIDSFORHOLD}
      isErstattArbeidsforhold
      hasReceivedInntektsmelding={false}
      harErstattetEttEllerFlere
      readOnly={false}
      vurderOmSkalErstattes={false}
      aktivtArbeidsforholdTillatUtenIM={false}
      arbeidsforhold={arbeidsforhold}
      skalKunneLeggeTilNyeArbeidsforhold
      initialValues={{
        erEndret: false,
        tilVurdering: true,
        replaceOptions: [],
      }}
      behandlingId={1}
      behandlingVersjon={1}
      alleKodeverk={{}}
    />);
    const radiogroup = wrapper.find(LeggTilArbeidsforholdFelter);
    expect(radiogroup).has.length(1);
  });
  it('skal ikke vise LeggTilArbeidsforholdFelter ', () => {
    const wrapper = shallow(<PersonArbeidsforholdDetailForm
      {...reduxFormPropsMock}
      cancelArbeidsforhold={sinon.spy()}
      arbeidsforholdHandlingVerdi={arbeidsforholdHandling.AKTIVT_ARBEIDSFORHOLD}
      isErstattArbeidsforhold
      hasReceivedInntektsmelding={false}
      harErstattetEttEllerFlere
      readOnly={false}
      vurderOmSkalErstattes={false}
      aktivtArbeidsforholdTillatUtenIM={false}
      arbeidsforhold={arbeidsforhold}
      skalKunneLeggeTilNyeArbeidsforhold={false}
      initialValues={{
        erEndret: false,
        tilVurdering: true,
        replaceOptions: [],
      }}
      behandlingId={1}
      behandlingVersjon={1}
      alleKodeverk={{}}
    />);
    const radiogroup = wrapper.find(LeggTilArbeidsforholdFelter);
    expect(radiogroup).has.length(0);
  });
  it('skal ikke vise tekst for å erstatte alle tidligere arbeidsforhold eller NyttEllerErstattPanel når handlingen er undefined', () => {
    const wrapper = shallow(<PersonArbeidsforholdDetailForm
      {...reduxFormPropsMock}
      cancelArbeidsforhold={sinon.spy()}
      arbeidsforholdHandlingVerdi={undefined}
      isErstattArbeidsforhold
      hasReceivedInntektsmelding={false}
      harErstattetEttEllerFlere
      readOnly={false}
      vurderOmSkalErstattes={false}
      aktivtArbeidsforholdTillatUtenIM
      arbeidsforhold={arbeidsforhold}
      skalKunneLeggeTilNyeArbeidsforhold={false}
      initialValues={{
        erEndret: false,
        tilVurdering: true,
        replaceOptions: [],
      }}
      behandlingId={1}
      behandlingVersjon={1}
      alleKodeverk={{}}
    />);
    expect(wrapper.find('[id="PersonArbeidsforholdDetailForm.ErstatteTidligereArbeidsforhod"]')).has.length(0);
    expect(wrapper.find(PersonNyttEllerErstattArbeidsforholdPanel)).has.length(0);
  });
});

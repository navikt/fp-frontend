import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { TextAreaField } from '@fpsak-frontend/form';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { Arbeidsforhold } from '@fpsak-frontend/types';
import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import PersonNyttEllerErstattArbeidsforholdPanel from './PersonNyttEllerErstattArbeidsforholdPanel';
import { PersonArbeidsforholdDetailForm } from './PersonArbeidsforholdDetailForm';
import LeggTilArbeidsforholdFelter from './LeggTilArbeidsforholdFelter';
import ArbeidsforholdHandling from '../../kodeverk/arbeidsforholdHandling';
import CustomArbeidsforhold from '../../typer/CustomArbeidsforholdTsType';
import messages from '../../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

describe('<PersonArbeidsforholdDetailForm>', () => {
  const arbeidsgiverOpplysningerPerId = {
    1234567: {
      erPrivatPerson: false,
      identifikator: '1234567',
      navn: 'Svendsen Eksos',
    },
  };

  const arbeidsforhold = {
    id: '1',
    arbeidsforholdId: '1231-2345',
    arbeidsgiverReferanse: '1234567',
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
      intl={intlMock}
      cancelArbeidsforhold={sinon.spy()}
      arbeidsforholdHandlingVerdi={ArbeidsforholdHandling.AKTIVT_ARBEIDSFORHOLD}
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
      } as CustomArbeidsforhold}
      alleKodeverk={{}}
      updateArbeidsforhold={() => undefined}
      onSubmit={() => undefined}
      validate={() => undefined}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />);
    expect(wrapper.find(TextAreaField)).toHaveLength(0);
  });
  it('skal vise panel for å velge nytt eller erstatte når behandling er i bruk og en har gamle arbeidsforhold for samme org', () => {
    const wrapper = shallow(<PersonArbeidsforholdDetailForm
      {...reduxFormPropsMock}
      intl={intlMock}
      cancelArbeidsforhold={sinon.spy()}
      arbeidsforholdHandlingVerdi={ArbeidsforholdHandling.AKTIVT_ARBEIDSFORHOLD}
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
      } as CustomArbeidsforhold}
      alleKodeverk={{}}
      updateArbeidsforhold={() => undefined}
      onSubmit={() => undefined}
      validate={() => undefined}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />);
    const panel = wrapper.find(PersonNyttEllerErstattArbeidsforholdPanel);
    expect(panel).toHaveLength(1);
  });
  it('skal ikke vise panel for å velge nytt eller erstatte når behandling ikke er i bruk', () => {
    const wrapper = shallow(<PersonArbeidsforholdDetailForm
      {...reduxFormPropsMock}
      intl={intlMock}
      cancelArbeidsforhold={sinon.spy()}
      arbeidsforholdHandlingVerdi={ArbeidsforholdHandling.AKTIVT_ARBEIDSFORHOLD}
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
      } as CustomArbeidsforhold}
      alleKodeverk={{}}
      updateArbeidsforhold={() => undefined}
      onSubmit={() => undefined}
      validate={() => undefined}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />);
    const panel = wrapper.find(PersonNyttEllerErstattArbeidsforholdPanel);
    expect(panel).toHaveLength(0);
  });
  it('skal ikke vise panel for å velge nytt eller erstatte når behandling ikke har gamle arbeidsforhold for samme org', () => {
    const wrapper = shallow(<PersonArbeidsforholdDetailForm
      {...reduxFormPropsMock}
      intl={intlMock}
      cancelArbeidsforhold={sinon.spy()}
      arbeidsforholdHandlingVerdi={ArbeidsforholdHandling.AKTIVT_ARBEIDSFORHOLD}
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
      } as CustomArbeidsforhold}
      alleKodeverk={{}}
      updateArbeidsforhold={() => undefined}
      onSubmit={() => undefined}
      validate={() => undefined}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />);
    const panel = wrapper.find(PersonNyttEllerErstattArbeidsforholdPanel);
    expect(panel).toHaveLength(0);
  });
  it('skal vise tekst for å erstatte alle tidligere arbeidsforhold når behandling er i bruk og flagget harErstattetEttEllerFlere er satt', () => {
    const wrapper = shallow(<PersonArbeidsforholdDetailForm
      {...reduxFormPropsMock}
      intl={intlMock}
      cancelArbeidsforhold={sinon.spy()}
      arbeidsforholdHandlingVerdi={ArbeidsforholdHandling.AKTIVT_ARBEIDSFORHOLD}
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
      } as CustomArbeidsforhold}
      alleKodeverk={{}}
      updateArbeidsforhold={() => undefined}
      onSubmit={() => undefined}
      validate={() => undefined}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />);

    expect(wrapper.find('[id="PersonArbeidsforholdDetailForm.ErstatteTidligereArbeidsforhod"]')).toHaveLength(1);
  });
  it('skal ikke vise tekst for å erstatte alle tidligere arbeidsforhold når behandling ikke er i bruk', () => {
    const wrapper = shallow(<PersonArbeidsforholdDetailForm
      {...reduxFormPropsMock}
      intl={intlMock}
      cancelArbeidsforhold={sinon.spy()}
      arbeidsforholdHandlingVerdi={ArbeidsforholdHandling.FJERN_ARBEIDSFORHOLD}
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
      } as CustomArbeidsforhold}
      alleKodeverk={{}}
      updateArbeidsforhold={() => undefined}
      onSubmit={() => undefined}
      validate={() => undefined}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />);

    expect(wrapper.find('[id="PersonArbeidsforholdDetailForm.ErstatteTidligereArbeidsforhod"]')).toHaveLength(0);
  });
  it('skal ikke vise tekst for å erstatte alle tidligere arbeidsforhold når flagget harErstattetEttEllerFlere ikke er satt', () => {
    const wrapper = shallow(<PersonArbeidsforholdDetailForm
      {...reduxFormPropsMock}
      intl={intlMock}
      cancelArbeidsforhold={sinon.spy()}
      arbeidsforholdHandlingVerdi={ArbeidsforholdHandling.AKTIVT_ARBEIDSFORHOLD}
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
      } as CustomArbeidsforhold}
      alleKodeverk={{}}
      updateArbeidsforhold={() => undefined}
      onSubmit={() => undefined}
      validate={() => undefined}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />);
    expect(wrapper.find('[id="PersonArbeidsforholdDetailForm.ErstatteTidligereArbeidsforhod"]')).toHaveLength(0);
  });
  it('skal vise LeggTilArbeidsforholdFelter', () => {
    const wrapper = shallow(<PersonArbeidsforholdDetailForm
      {...reduxFormPropsMock}
      intl={intlMock}
      cancelArbeidsforhold={sinon.spy()}
      arbeidsforholdHandlingVerdi={ArbeidsforholdHandling.AKTIVT_ARBEIDSFORHOLD}
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
      } as CustomArbeidsforhold}
      alleKodeverk={{}}
      updateArbeidsforhold={() => undefined}
      onSubmit={() => undefined}
      validate={() => undefined}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />);
    const radiogroup = wrapper.find(LeggTilArbeidsforholdFelter);
    expect(radiogroup).toHaveLength(1);
  });
  it('skal ikke vise LeggTilArbeidsforholdFelter', () => {
    const wrapper = shallow(<PersonArbeidsforholdDetailForm
      {...reduxFormPropsMock}
      intl={intlMock}
      cancelArbeidsforhold={sinon.spy()}
      arbeidsforholdHandlingVerdi={ArbeidsforholdHandling.AKTIVT_ARBEIDSFORHOLD}
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
      } as CustomArbeidsforhold}
      alleKodeverk={{}}
      updateArbeidsforhold={() => undefined}
      onSubmit={() => undefined}
      validate={() => undefined}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />);
    const radiogroup = wrapper.find(LeggTilArbeidsforholdFelter);
    expect(radiogroup).toHaveLength(0);
  });
  it('skal ikke vise tekst for å erstatte alle tidligere arbeidsforhold eller NyttEllerErstattPanel når handlingen er undefined', () => {
    const wrapper = shallow(<PersonArbeidsforholdDetailForm
      {...reduxFormPropsMock}
      intl={intlMock}
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
      } as CustomArbeidsforhold}
      alleKodeverk={{}}
      updateArbeidsforhold={() => undefined}
      onSubmit={() => undefined}
      validate={() => undefined}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />);
    expect(wrapper.find('[id="PersonArbeidsforholdDetailForm.ErstatteTidligereArbeidsforhod"]')).toHaveLength(0);
    expect(wrapper.find(PersonNyttEllerErstattArbeidsforholdPanel)).toHaveLength(0);
  });
});

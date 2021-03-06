import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { AlleKodeverk, Arbeidsforhold } from '@fpsak-frontend/types';

import { PersonAksjonspunktTextImpl } from './PersonAksjonspunktText';

describe('<PersonAksjonspunktText>', () => {
  const arbeidsforholdTemplate = {
    id: '1',
    kilde: {
      navn: 'Aa-reg',
    },
    arbeidsgiverReferanse: '123423',
    fomDato: '2018-10-10',
    tilVurdering: true,
    lagtTilAvSaksbehandler: false,
    permisjoner: [],
    kanOppretteNyttArbforFraIM: false,
  };

  const alleKodeverk = {
    [kodeverkTyper.PERMISJONSBESKRIVELSE_TYPE]: [{
      kode: 'PERMISJON',
      kodeverk: '',
      navn: 'Permisjon',
    }],
  } as AlleKodeverk;

  it('skal ikke vise hjelpetekst når en ikke har arbeidsforhold', () => {
    const wrapper = shallow(<PersonAksjonspunktTextImpl
      arbeidsforhold={undefined}
      alleKodeverk={alleKodeverk}
    />);
    expect(wrapper.find(FormattedMessage)).toHaveLength(0);
  });

  it('skal ikke vise hjelpetekst når arbeidsforholdet ikke skal vurderes', () => {
    const wrapper = shallow(<PersonAksjonspunktTextImpl
      arbeidsforhold={{
        ...arbeidsforholdTemplate,
        tilVurdering: false,
      } as Arbeidsforhold}
      alleKodeverk={alleKodeverk}
    />);
    expect(wrapper.find(FormattedMessage)).toHaveLength(0);
  });

  it('skal vise hjelpetekst når det ikke er mottatt inntekstmelding for arbeidsforholdet', () => {
    const wrapper = shallow(<PersonAksjonspunktTextImpl
      arbeidsforhold={{
        ...arbeidsforholdTemplate,
        mottattDatoInntektsmelding: undefined,
      } as Arbeidsforhold}
      alleKodeverk={alleKodeverk}
    />);
    const component = wrapper.find(FormattedMessage);
    expect(component.props().id).toEqual('PersonAksjonspunktText.AvklarManglendeInntektsmelding');
  });

  it('skal vise hjelpetekst når en kan erstatte gamle arbeidsforhold eller markere arbeidsforholdet som nytt', () => {
    // Dette er arbeidsforhold med samme orgnr og arbeidsforholdId som det som blir editert.
    const gamleArbeidsforhold = [{ id: 2 }];

    const wrapper = shallow(<PersonAksjonspunktTextImpl
      arbeidsforhold={{
        ...arbeidsforholdTemplate,
        mottattDatoInntektsmelding: '2018-01-01',
        replaceOptions: gamleArbeidsforhold,
      } as Arbeidsforhold}
      alleKodeverk={alleKodeverk}
    />);
    const component = wrapper.find(FormattedMessage);
    expect(component.props().id).toEqual('PersonAksjonspunktText.AvklarErstatteTidligere');
  });

  it('skal vise hjelpetekst når flagget harErstattetEttEllerFlere er satt', () => {
    const wrapper = shallow(<PersonAksjonspunktTextImpl
      arbeidsforhold={{
        ...arbeidsforholdTemplate,
        mottattDatoInntektsmelding: '2018-01-01',
        replaceOptions: [],
        harErstattetEttEllerFlere: true,
      } as Arbeidsforhold}
      alleKodeverk={alleKodeverk}
    />);
    const component = wrapper.find(FormattedMessage);
    expect(component.props().id).toEqual('PersonAksjonspunktText.AvklarErstatteAlle');
  });

  it('skal vise hjelpetekst når flagget ikkeRegistrertIAaRegister er satt', () => {
    const gamleArbeidsforhold = [{}];
    const wrapper = shallow(<PersonAksjonspunktTextImpl
      arbeidsforhold={{
        ...arbeidsforholdTemplate,
        mottattDatoInntektsmelding: '2018-01-01',
        replaceOptions: { gamleArbeidsforhold },
        harErstattetEttEllerFlere: false,
        ikkeRegistrertIAaRegister: true,
      } as Arbeidsforhold}
      alleKodeverk={alleKodeverk}
    />);
    const component = wrapper.find(FormattedMessage);
    expect(component.props().id).toEqual('PersonAksjonspunktText.AvklarIkkeRegistrertIAa');
  });

  it('skal ikke vise hjelpetekst når inntektsmelding er mottatt og det ikke er gamle arbeidsforhold og flagg ikke er satt', () => {
    const gamleArbeidsforhold = [{}];
    const wrapper = shallow(<PersonAksjonspunktTextImpl
      arbeidsforhold={{
        ...arbeidsforholdTemplate,
        mottattDatoInntektsmelding: '2018-01-01',
        replaceOptions: { gamleArbeidsforhold },
        harErstattetEttEllerFlere: false,
        ikkeRegistrertIAaRegister: false,
      } as Arbeidsforhold}
      alleKodeverk={alleKodeverk}
    />);
    const component = wrapper.find(FormattedMessage);
    expect(Object.keys(component)).toHaveLength(0);
  });

  it('skal vise hjelpetekst for å legge til arbeidsforhold', () => {
    const gamleArbeidsforhold = [{}];
    const wrapper = shallow(<PersonAksjonspunktTextImpl
      arbeidsforhold={{
        ...arbeidsforholdTemplate,
        lagtTilAvSaksbehandler: true,
        mottattDatoInntektsmelding: '2018-01-01',
        replaceOptions: { gamleArbeidsforhold },
        harErstattetEttEllerFlere: false,
        ikkeRegistrertIAaRegister: true,
      } as Arbeidsforhold}
      alleKodeverk={alleKodeverk}
    />);
    const component = wrapper.find(FormattedMessage);
    expect(component.props().id).toEqual('PersonAksjonspunktText.LeggTilArbeidsforhold');
  });

  it('skal vise hjelpetekst for arbeidsforhold med en permisjon og ikke mottat IM', () => {
    const wrapper = shallow(<PersonAksjonspunktTextImpl
      arbeidsforhold={{
        ...arbeidsforholdTemplate,
        mottattDatoInntektsmelding: undefined,
        permisjoner: [
          {
            type: {
              kode: 'PERMISJON',
              kodeverk: '',
            },
            permisjonFom: '2018-10-01',
            permisjonTom: undefined,
            permisjonsprosent: 100,
          },
        ],
      } as Arbeidsforhold}
      alleKodeverk={alleKodeverk}
    />);
    const component = wrapper.find(FormattedMessage);
    expect(component.props().id).toEqual('PersonAksjonspunktText.SokerHarPermisjonOgIkkeMottattIM');
    // @ts-ignore
    expect(component.props().values.permisjonFom).toEqual('01.10.2018');
    // @ts-ignore
    expect(component.props().values.permisjonTom).toEqual('');
  });

  it('skal vise hjelpetekst for arbeidsforhold med en permisjon og mottat IM', () => {
    const wrapper = shallow(<PersonAksjonspunktTextImpl
      arbeidsforhold={{
        ...arbeidsforholdTemplate,
        mottattDatoInntektsmelding: '2019-01-01',
        permisjoner: [
          {
            type: {
              kode: 'PERMISJON',
              kodeverk: '',
            },
            permisjonFom: '2018-10-01',
            permisjonTom: undefined,
            permisjonsprosent: 100,
          },
        ],
      } as Arbeidsforhold}
      alleKodeverk={alleKodeverk}
    />);
    const component = wrapper.find(FormattedMessage);
    expect(component.props().id).toEqual('PersonAksjonspunktText.SokerHarPermisjonOgMottattIM');
    // @ts-ignore
    expect(component.props().values.permisjonFom).toEqual('01.10.2018');
    // @ts-ignore
    expect(component.props().values.permisjonTom).toEqual('');
  });

  it('skal vise hjelpetekst for arbeidsforhold med flere permisjoner', () => {
    const wrapper = shallow(<PersonAksjonspunktTextImpl
      arbeidsforhold={{
        ...arbeidsforholdTemplate,
        mottattDatoInntektsmelding: '2019-01-01',
        permisjoner: [
          {
            type: {
              kode: 'PERMISJON',
              kodeverk: '',
            },
            permisjonFom: '2015-01-01',
            permisjonTom: '2016-01-01',
            permisjonsprosent: 100,
          },
          {
            type: {
              kode: 'PERMISJON',
              kodeverk: '',
            },
            permisjonFom: '2018-10-10',
            permisjonTom: undefined,
            permisjonsprosent: 100,
            permisjonsÅrsak: 'aarsak',
          },
        ],
      } as Arbeidsforhold}
      alleKodeverk={alleKodeverk}
    />);
    const component = wrapper.find(FormattedMessage);
    expect(component.props().id).toEqual('PersonAksjonspunktText.SokerHarFlerePermisjoner');
    expect(component.props().values).toBeUndefined();
  });
});

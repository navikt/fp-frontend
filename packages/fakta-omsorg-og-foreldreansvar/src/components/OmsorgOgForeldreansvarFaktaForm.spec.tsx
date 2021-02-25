import React from 'react';

import opplysningAdresseType from '@fpsak-frontend/kodeverk/src/opplysningAdresseType';
import relatertYtelseType from '@fpsak-frontend/kodeverk/src/relatertYtelseType';
import opplysningsKilde from '@fpsak-frontend/kodeverk/src/opplysningsKilde';
import navBrukerKjonn from '@fpsak-frontend/kodeverk/src/navBrukerKjonn';
import soknadType from '@fpsak-frontend/kodeverk/src/soknadType';
import { AksjonspunktHelpTextTemp } from '@fpsak-frontend/shared-components';
import { SelectField } from '@fpsak-frontend/form';
import { FamilieHendelse, Soknad } from '@fpsak-frontend/types';

import OmsorgOgForeldreansvarFaktaForm from './OmsorgOgForeldreansvarFaktaForm';
import shallowWithIntl, { intlMock } from '../../i18n/intl-enzyme-test-helper-fakta-omsorg-og-foreldreansvar';

describe('<OmsorgOgForeldreansvarFaktaForm>', () => {
  const relatertYtelseTypeListe = Object.values(relatertYtelseType).map((type) => ({
    kode: type,
    kodeverk: '',
    navn: '',
  }));

  const getKodeverknavn = (kodeverk: any) => {
    if (kodeverk.kode === opplysningsKilde.SAKSBEHANDLER) {
      return 'test';
    }
    if (kodeverk.kode === 'FAR_SOKER_TYPE') {
      return 'far søker type';
    }
    return '';
  };

  it('skal vise hjelpetekster', () => {
    const wrapper = shallowWithIntl(<OmsorgOgForeldreansvarFaktaForm.WrappedComponent
      intl={intlMock}
      readOnly={false}
      vilkarTypes={[]}
      erAksjonspunktForeldreansvar={false}
      hasOpenAksjonspunkter
      antallBarn={1}
      vilkarType="test"
      relatertYtelseTypes={relatertYtelseTypeListe}
      editedStatus={{
        omsorgsovertakelseDato: false,
        antallBarnOmsorgOgForeldreansvar: false,
        vilkarType: false,
        fodselsdatoer: {},
      }}
      behandlingId={1}
      behandlingVersjon={1}
      alleMerknaderFraBeslutter={{}}
      soknad={{} as Soknad}
      gjeldendeFamiliehendelse={{} as FamilieHendelse}
      personopplysninger={{}}
    />);

    const helpText = wrapper.find(AksjonspunktHelpTextTemp);
    expect(helpText).toHaveLength(1);
    expect(helpText.children()).toHaveLength(2);
    expect(helpText.childAt(0).props().id).toEqual('OmsorgOgForeldreansvarFaktaForm.CheckInformation');
    expect(helpText.childAt(1).props().id).toEqual('OmsorgOgForeldreansvarFaktaForm.ChooseVilkar');
  });

  it('skal vise vilkår i select', () => {
    const wrapper = shallowWithIntl(<OmsorgOgForeldreansvarFaktaForm.WrappedComponent
      intl={intlMock}
      readOnly={false}
      vilkarTypes={[{ kode: 'kode1', navn: 'navn1', kodeverk: '' }]}
      erAksjonspunktForeldreansvar={false}
      hasOpenAksjonspunkter
      antallBarn={1}
      vilkarType="test"
      relatertYtelseTypes={relatertYtelseTypeListe}
      editedStatus={{
        omsorgsovertakelseDato: false,
        antallBarnOmsorgOgForeldreansvar: false,
        vilkarType: false,
        fodselsdatoer: {},
      }}
      behandlingId={1}
      behandlingVersjon={1}
      alleMerknaderFraBeslutter={{}}
      soknad={{} as Soknad}
      gjeldendeFamiliehendelse={{} as FamilieHendelse}
      personopplysninger={{}}
    />);

    const select = wrapper.find(SelectField);
    expect(select).toHaveLength(1);
    expect(select.prop('selectValues')).toHaveLength(1);
    expect(select.prop('selectValues')[0].props.value).toEqual('kode1');
    expect(select.prop('selectValues')[0].props.children).toEqual('navn1');
  });

  it('skal ikke vise vilkår i select ved readonly', () => {
    const wrapper = shallowWithIntl(<OmsorgOgForeldreansvarFaktaForm.WrappedComponent
      intl={intlMock}
      readOnly
      vilkarTypes={[{ kode: 'kode1', navn: 'navn1', kodeverk: '' }]}
      erAksjonspunktForeldreansvar={false}
      hasOpenAksjonspunkter
      antallBarn={1}
      vilkarType="kode1"
      relatertYtelseTypes={relatertYtelseTypeListe}
      editedStatus={{
        omsorgsovertakelseDato: false,
        antallBarnOmsorgOgForeldreansvar: false,
        vilkarType: false,
        fodselsdatoer: {},
      }}
      behandlingId={1}
      behandlingVersjon={1}
      alleMerknaderFraBeslutter={{}}
      soknad={{} as Soknad}
      gjeldendeFamiliehendelse={{} as FamilieHendelse}
      personopplysninger={{}}
    />);

    const select = wrapper.find(SelectField);
    expect(select).toHaveLength(0);
    const element = wrapper.find('Element');
    expect(element).toHaveLength(1);
    expect(element.childAt(0).text()).toEqual('navn1');
  });

  it('skal vise riktig hjelpetekster for foreldreansvar', () => {
    const wrapper = shallowWithIntl(<OmsorgOgForeldreansvarFaktaForm.WrappedComponent
      intl={intlMock}
      readOnly={false}
      vilkarTypes={[]}
      erAksjonspunktForeldreansvar
      hasOpenAksjonspunkter
      antallBarn={1}
      vilkarType="test"
      relatertYtelseTypes={relatertYtelseTypeListe}
      editedStatus={{
        omsorgsovertakelseDato: false,
        antallBarnOmsorgOgForeldreansvar: false,
        vilkarType: false,
        fodselsdatoer: {},
      }}
      behandlingId={1}
      behandlingVersjon={1}
      alleMerknaderFraBeslutter={{}}
      soknad={{} as Soknad}
      gjeldendeFamiliehendelse={{} as FamilieHendelse}
      personopplysninger={{}}
    />);

    const helpText = wrapper.find(AksjonspunktHelpTextTemp);
    expect(helpText).toHaveLength(1);
    expect(helpText.children()).toHaveLength(1);
    expect(helpText.childAt(0).props().id).toEqual('OmsorgOgForeldreansvarFaktaForm.CheckInformationForeldreansvar');
  });

  it('skal gi feilmelding når antall barn er mindre enn 1', () => {
    const model = {
      originalAntallBarn: 1,
      antallBarn: 0,
    };

    const result = OmsorgOgForeldreansvarFaktaForm.validate(intlMock, model);
    expect(result).toEqual({
      antallBarn: 'Antall barn må være mindre eller lik antall barn det søkes for',
    });
  });

  it('skal gi feilmelding når antall barn er større enn originalt antall barn', () => {
    const model = {
      originalAntallBarn: 2,
      antallBarn: 3,
    };

    const result = OmsorgOgForeldreansvarFaktaForm.validate(intlMock, model);
    expect(result).toEqual({
      antallBarn: 'Antall barn må være mindre eller lik antall barn det søkes for',
    });
  });

  it('skal gi feilmelding når antall barn ikke er et gyldig tall', () => {
    const model = {
      originalAntallBarn: 2,
      antallBarn: 'test',
    };

    // @ts-ignore
    const result = OmsorgOgForeldreansvarFaktaForm.validate(intlMock, model);
    expect(result).toEqual({
      antallBarn: 'Feltet kan kun inneholde tall',
    });
  });

  it('skal ikke gi feilmelding når antall barn og originalt antall er likt', () => {
    const model = {
      originalAntallBarn: 2,
      antallBarn: 2,
    };

    const result = OmsorgOgForeldreansvarFaktaForm.validate(intlMock, model);
    expect(result).toEqual({});
  });

  it('skal sette opp initielle verdier når en ikke har avklarte data', () => {
    const soknad = {
      omsorgsovertakelseDato: '10-10-2017',
      farSokerType: {
        kode: 'FAR_SOKER_TYPE',
        kodeverk: '',
      },
      antallBarn: 2,
      fodselsdatoer: {
        1: '10-10-2017',
        2: '10-10-2017',
      } as { [key: number]: string },
      soknadType: {
        kode: soknadType.FODSEL,
        kodeverk: '',
      },
    } as Soknad;
    const familiehendelse = {} as FamilieHendelse;
    const personopplysning = {
      aktoerId: '1',
      navn: 'Petra Tester',
      adresser: [{
        adresselinje1: 'Vei 1',
        postNummer: '1000',
        poststed: 'Oslo',
        adresseType: {
          kode: opplysningAdresseType.POSTADRESSE,
          kodeverk: '',
        },
      }],
      navBrukerKjonn: {
        kode: navBrukerKjonn.KVINNE,
        kodeverk: '',
      },
      personstatus: {
        kode: 'DØD',
        kodeverk: '',
      },
    };

    const initialValues = OmsorgOgForeldreansvarFaktaForm.buildInitialValues(soknad, familiehendelse, personopplysning, undefined, getKodeverknavn);
    expect(initialValues).toEqual({
      omsorgsovertakelseDato: '10-10-2017',
      foreldreansvarDato: undefined,
      barn: [{
        opplysningsKilde: opplysningsKilde.SAKSBEHANDLER,
        fodselsdato: '10-10-2017',
        nummer: 1,
      }, {
        opplysningsKilde: opplysningsKilde.SAKSBEHANDLER,
        fodselsdato: '10-10-2017',
        nummer: 2,
      }],
      foreldre: [{
        dodsdato: undefined,
        originalDodsdato: undefined,
        erMor: true,
        erDod: true,
        adresse: 'Vei 1, 1000 Oslo',
        navn: 'Petra Tester',
        opplysningsKilde: undefined,
        aktorId: '1',
      }],
      ytelser: undefined,
      antallBarn: 2,
      vilkarType: '',
      farSokerType: 'far søker type',
      originalAntallBarn: 2,
    });
  });

  it('skal sette opp barn som en kombinasjon av bekreftet data fra TPS og data fra søknad', () => {
    const soknad = {
      omsorgsovertakelseDato: '10-10-2017',
      farSokerType: {
        kode: 'FAR_SOKER_TYPE',
      },
      antallBarn: 2,
      soknadType: {
        kode: soknadType.FODSEL,
      },
      fodselsdatoer: {
        1: '10-10-2017',
        3: '10-10-2017',
      } as { [key: number]: string },
    } as Soknad;
    const familiehendelse = {} as FamilieHendelse;
    const personopplysning = {
      aktoerId: '1',
      navn: 'Petra Tester',
      navBrukerKjonn: {
        kode: navBrukerKjonn.KVINNE,
        kodeverk: '',
      },
      personstatus: {
        kode: 'DØD',
        kodeverk: '',
      },
      barnSoktFor: [{
        aktoerId: '1',
        nummer: 1,
        navn: 'Barn nr 1',
        fodselsdato: '10-10-2017',
        dodsdato: undefined,
      }, {
        aktoerId: '2',
        nummer: 2,
        navn: 'Barn nr 2',
        fodselsdato: '05-05-2011',
        dodsdato: undefined,
        opplysningsKilde: {
          kode: opplysningsKilde.TPS,
          kodeverk: '',
        },
      }],
    };

    const initialValues = OmsorgOgForeldreansvarFaktaForm.buildInitialValues(soknad, familiehendelse, personopplysning, undefined, getKodeverknavn);

    expect(initialValues).toEqual({
      omsorgsovertakelseDato: '10-10-2017',
      foreldreansvarDato: undefined,
      barn: [{
        aktorId: '1',
        opplysningsKilde: undefined,
        fodselsdato: '10-10-2017',
        dodsdato: undefined,
        navn: 'Barn nr 1',
        nummer: 1,
      }, {
        opplysningsKilde: opplysningsKilde.SAKSBEHANDLER,
        fodselsdato: '10-10-2017',
        nummer: 3,
      }],
      foreldre: [{
        dodsdato: undefined,
        originalDodsdato: undefined,
        erMor: true,
        erDod: true,
        adresse: undefined,
        navn: 'Petra Tester',
        opplysningsKilde: undefined,
        aktorId: '1',
      }],
      ytelser: undefined,
      antallBarn: 2,
      vilkarType: '',
      farSokerType: 'far søker type',
      originalAntallBarn: 2,
    });
  });
});

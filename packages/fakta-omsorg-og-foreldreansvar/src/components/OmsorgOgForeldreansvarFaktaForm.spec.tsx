import React from 'react';

import relatertYtelseType from '@fpsak-frontend/kodeverk/src/relatertYtelseType';
import opplysningsKilde from '@fpsak-frontend/kodeverk/src/opplysningsKilde';
import soknadType from '@fpsak-frontend/kodeverk/src/soknadType';
import { AksjonspunktHelpTextTemp } from '@fpsak-frontend/shared-components';
import { SelectField } from '@fpsak-frontend/form';
import { FamilieHendelse, Personoversikt, Soknad } from '@fpsak-frontend/types';
import { shallowWithIntl, getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import OmsorgOgForeldreansvarFaktaForm from './OmsorgOgForeldreansvarFaktaForm';
import messages from '../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

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
      vilkarType="test"
      relatertYtelseTypes={relatertYtelseTypeListe}
      editedStatus={{
        omsorgsovertakelseDato: false,
        antallBarnOmsorgOgForeldreansvar: false,
        vilkarType: false,
      }}
      alleMerknaderFraBeslutter={{}}
      soknad={{} as Soknad}
      gjeldendeFamiliehendelse={{} as FamilieHendelse}
      personoversikt={{} as Personoversikt}
    />, messages);

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
      vilkarType="test"
      relatertYtelseTypes={relatertYtelseTypeListe}
      editedStatus={{
        omsorgsovertakelseDato: false,
        antallBarnOmsorgOgForeldreansvar: false,
        vilkarType: false,
      }}
      alleMerknaderFraBeslutter={{}}
      soknad={{} as Soknad}
      gjeldendeFamiliehendelse={{} as FamilieHendelse}
      personoversikt={{} as Personoversikt}
    />, messages);

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
      vilkarType="kode1"
      relatertYtelseTypes={relatertYtelseTypeListe}
      editedStatus={{
        omsorgsovertakelseDato: false,
        antallBarnOmsorgOgForeldreansvar: false,
        vilkarType: false,
      }}
      alleMerknaderFraBeslutter={{}}
      soknad={{} as Soknad}
      gjeldendeFamiliehendelse={{} as FamilieHendelse}
      personoversikt={{} as Personoversikt}
    />, messages);

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
      vilkarType="test"
      relatertYtelseTypes={relatertYtelseTypeListe}
      editedStatus={{
        omsorgsovertakelseDato: false,
        antallBarnOmsorgOgForeldreansvar: false,
        vilkarType: false,
      }}
      alleMerknaderFraBeslutter={{}}
      soknad={{} as Soknad}
      gjeldendeFamiliehendelse={{} as FamilieHendelse}
      personoversikt={{} as Personoversikt}
    />, messages);

    const helpText = wrapper.find(AksjonspunktHelpTextTemp);
    expect(helpText).toHaveLength(1);
    expect(helpText.children()).toHaveLength(1);
    expect(helpText.childAt(0).props().id).toEqual('OmsorgOgForeldreansvarFaktaForm.CheckInformationForeldreansvar');
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

    const initialValues = OmsorgOgForeldreansvarFaktaForm.buildInitialValues(soknad, familiehendelse, undefined, getKodeverknavn);
    expect(initialValues).toEqual({
      omsorgsovertakelseDato: '10-10-2017',
      foreldreansvarDato: undefined,
      ytelser: undefined,
      vilkarType: '',
      farSokerType: 'far søker type',
    });
  });
});

import React from 'react';
import { FormattedMessage } from 'react-intl';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { Soknad, Ytelsefordeling } from '@fpsak-frontend/types';
import { shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import OmsorgFaktaForm from './OmsorgFaktaForm';
import messages from '../../i18n/nb_NO.json';

jest.mock('react-intl', () => {
  const reactIntl = jest.requireActual('react-intl');
  const tekster = jest.requireActual('../../i18n/nb_NO.json');
  const intlTestHelper = jest.requireActual('@fpsak-frontend/utils-test/src/intl-enzyme-test-helper');
  return {
    ...reactIntl,
    useIntl: () => intlTestHelper.getIntlMock(tekster),
  };
});

describe('<OmsorgFaktaForm>', () => {
  const aleneomsorgAp = {
    id: 1,
    definisjon: aksjonspunktCodes.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG,
    status: 'OPPRETTET',
    toTrinnsBehandling: false,
    toTrinnsBehandlingGodkjent: false,
    kanLoses: true,
    erAktivt: false,
  };
  const omsorgAp = {
    id: 2,
    definisjon: aksjonspunktCodes.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG,
    status: 'OPPRETTET',
    toTrinnsBehandling: false,
    toTrinnsBehandlingGodkjent: false,
    kanLoses: true,
    erAktivt: false,
  };

  it('skal vise tekst for aleneomsorg', () => {
    const wrapper = shallowWithIntl(<OmsorgFaktaForm.WrappedComponent
      readOnly={false}
      omsorg={false}
      className="defaultAleneOmsorgFakta"
      aksjonspunkter={[aleneomsorgAp]}
      oppgittOmsorgSoknad={false}
      oppgittAleneomsorgSoknad
      alleMerknaderFraBeslutter={{}}
      ytelsefordeling={{} as Ytelsefordeling}
      soknad={{} as Soknad}
    />, messages);

    const formattedMessage = wrapper.find(FormattedMessage);
    expect(formattedMessage).toHaveLength(1);
    expect(formattedMessage.first().prop('id')).toEqual('OmsorgFaktaForm.OppgittAleneomsorg');
  });

  it('skal vise tekst for omsorg', () => {
    const wrapper = shallowWithIntl(<OmsorgFaktaForm.WrappedComponent
      readOnly={false}
      omsorg={false}
      className="defaultAleneOmsorgFakta"
      aksjonspunkter={[omsorgAp]}
      oppgittOmsorgSoknad={false}
      oppgittAleneomsorgSoknad
      alleMerknaderFraBeslutter={{}}
      ytelsefordeling={{} as Ytelsefordeling}
      soknad={{} as Soknad}
    />, messages);

    const formattedMessage = wrapper.find(FormattedMessage);
    expect(formattedMessage).toHaveLength(1);
    expect(formattedMessage.first().prop('id')).toEqual('OmsorgFaktaForm.OppgittIkkeOmsorg');
  });

  it('skal vise form - med <IkkeOmsorgPeriodeField>', () => {
    const wrapper = shallowWithIntl(<OmsorgFaktaForm.WrappedComponent
      readOnly={false}
      omsorg={false}
      className="defaultAleneOmsorgFakta"
      aksjonspunkter={[aleneomsorgAp, omsorgAp]}
      oppgittOmsorgSoknad={false}
      oppgittAleneomsorgSoknad
      alleMerknaderFraBeslutter={{}}
      ytelsefordeling={{} as Ytelsefordeling}
      soknad={{} as Soknad}
    />, messages);

    const radioGroup = wrapper.find('RadioGroupField');
    expect(radioGroup).toHaveLength(2);
    expect(radioGroup.first().prop('name')).toEqual('aleneomsorg');
    expect(radioGroup.last().prop('name')).toEqual('omsorg');

    const radioFieldsGroup1 = radioGroup.first().find('RadioOption');
    expect(radioFieldsGroup1).toHaveLength(2);
    expect(radioFieldsGroup1.first().prop('value')).toEqual(true);
    // @ts-ignore Fiks
    expect(radioFieldsGroup1.first().prop('label').id).toEqual('OmsorgFaktaForm.HarAleneomsorg');
    expect(radioFieldsGroup1.last().prop('value')).toEqual(false);
    // @ts-ignore Fiks
    expect(radioFieldsGroup1.last().prop('label').props.id).toEqual('OmsorgFaktaForm.HarIkkeAleneomsorg');

    const radioFieldsGroup2 = radioGroup.last().find('RadioOption');
    expect(radioFieldsGroup2).toHaveLength(2);
    expect(radioFieldsGroup2.first().prop('value')).toEqual(true);
    // @ts-ignore Fiks
    expect(radioFieldsGroup2.first().prop('label').id).toEqual('OmsorgFaktaForm.HarOmsorg');
    expect(radioFieldsGroup2.last().prop('value')).toEqual(false);
    // @ts-ignore Fiks
    expect(radioFieldsGroup2.last().prop('label').props.id).toEqual('OmsorgFaktaForm.HarIkkeOmsorg');
    expect(wrapper.find('FieldArray')).toHaveLength(1);
  });

  it('skal vise form - uten <IkkeOmsorgPeriodeField>', () => {
    const wrapper = shallowWithIntl(<OmsorgFaktaForm.WrappedComponent
      readOnly={false}
      omsorg
      aksjonspunkter={[aleneomsorgAp, omsorgAp]}
      className="defaultAleneOmsorgFakta"
      oppgittOmsorgSoknad
      oppgittAleneomsorgSoknad
      alleMerknaderFraBeslutter={{}}
      ytelsefordeling={{} as Ytelsefordeling}
      soknad={{} as Soknad}
    />, messages);
    expect(wrapper.find('RadioGroupField')).toHaveLength(2);
    expect(wrapper.find('FieldArray')).toHaveLength(0);
  });

  it('skal sette opp initielle verdier fra behandling', () => {
    const ytelseFordeling = {
      aleneOmsorgPerioder: null,
      ikkeOmsorgPerioder: null,
    } as Ytelsefordeling;

    const aksjonspunkter = [
      aleneomsorgAp,
    ];
    const initialValues = OmsorgFaktaForm.buildInitialValues(ytelseFordeling, aksjonspunkter);

    expect(initialValues).toEqual({
      aleneomsorg: null,
      omsorg: null,
      ikkeOmsorgPerioder: [{
        periodeFom: undefined,
        periodeTom: undefined,
      }],
    });
  });
});

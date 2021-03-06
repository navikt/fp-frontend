import React from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { Aksjonspunkt } from '@fpsak-frontend/types';
import { shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import StatusForBorgerFaktaPanel, { PeriodeMedId } from './StatusForBorgerFaktaPanel';
import messages from '../../../i18n/nb_NO.json';

jest.mock('react-intl', () => {
  const reactIntl = jest.requireActual('react-intl');
  const meldinger = jest.requireActual('../../../i18n/nb_NO.json');
  const intlTestHelper = jest.requireActual('@fpsak-frontend/utils-test/src/intl-enzyme-test-helper');
  return {
    ...reactIntl,
    useIntl: () => intlTestHelper.getIntlMock(meldinger),
  };
});

describe('<StatusForBorgerFaktaPanel>', () => {
  it('skal vise radioknapper for vurdering av oppholdsrett', () => {
    const wrapper = shallowWithIntl(<StatusForBorgerFaktaPanel.WrappedComponent
      id="1"
      apKode={aksjonspunktCodes.AVKLAR_OPPHOLDSRETT}
      erEosBorger
      readOnly={false}
      isBorgerAksjonspunktClosed={false}
      alleMerknaderFraBeslutter={{}}
    />, messages);
    const groups = wrapper.find('RadioGroupField');
    expect(groups).toHaveLength(2);

    const radioFieldsGroup1 = groups.first().find('RadioOption');
    expect(radioFieldsGroup1).toHaveLength(2);
    // @ts-ignore
    expect(radioFieldsGroup1.first().prop('label').id).toEqual('StatusForBorgerFaktaPanel.CitizenEEA');
    // @ts-ignore
    expect(radioFieldsGroup1.last().prop('label').id).toEqual('StatusForBorgerFaktaPanel.CitizenOutsideEEA');
    const radioFieldsGroup2 = groups.last().find('RadioOption');
    expect(radioFieldsGroup2).toHaveLength(2);
    // @ts-ignore
    expect(radioFieldsGroup2.first().prop('label').id).toEqual('StatusForBorgerFaktaPanel.HarOppholdsrett');
    // @ts-ignore
    expect(radioFieldsGroup2.last().prop('label').props.id).toEqual('StatusForBorgerFaktaPanel.HarIkkeOppholdsrett');
  });

  it('skal vise radioknapper for vurdering av lovlig opphold', () => {
    const wrapper = shallowWithIntl(<StatusForBorgerFaktaPanel.WrappedComponent
      id="1"
      apKode={aksjonspunktCodes.AVKLAR_LOVLIG_OPPHOLD}
      erEosBorger={false}
      readOnly={false}
      isBorgerAksjonspunktClosed={false}
      alleMerknaderFraBeslutter={{}}
    />, messages);

    const groups = wrapper.find('RadioGroupField');
    expect(groups).toHaveLength(2);
    const radioFieldsGroup1 = groups.first().find('RadioOption');
    expect(radioFieldsGroup1).toHaveLength(2);
    // @ts-ignore
    expect(radioFieldsGroup1.first().prop('label').id).toEqual('StatusForBorgerFaktaPanel.CitizenEEA');
    // @ts-ignore
    expect(radioFieldsGroup1.last().prop('label').id).toEqual('StatusForBorgerFaktaPanel.CitizenOutsideEEA');
    const radioFieldsGroup2 = groups.last().find('RadioOption');
    expect(radioFieldsGroup2).toHaveLength(2);
    // @ts-ignore
    expect(radioFieldsGroup2.first().prop('label').id).toEqual('StatusForBorgerFaktaPanel.HarLovligOpphold');
  });

  it('skal sette initielle verdi når det er EØS borger og ingen vurdering er lagret', () => {
    const periode = {
      aksjonspunkter: [aksjonspunktCodes.AVKLAR_OPPHOLDSRETT],
    };
    const aksjonspunkt = {
      definisjon: {
        kode: aksjonspunktCodes.AVKLAR_OPPHOLDSRETT,
        kodeverk: '',
      },
      status: {
        kode: 'UTFO',
        kodeverk: '',
      },
    } as Aksjonspunkt;
    const initialValues = StatusForBorgerFaktaPanel.buildInitialValues(periode as PeriodeMedId, [aksjonspunkt]);

    expect(initialValues).toEqual({
      apKode: aksjonspunktCodes.AVKLAR_OPPHOLDSRETT,
      erEosBorger: true,
      oppholdsrettVurdering: undefined,
      lovligOppholdVurdering: undefined,
      isBorgerAksjonspunktClosed: true,
    });
  });

  it('skal sette initielle verdi når det er EØS borger og vurdering er lagret', () => {
    const periode = {
      aksjonspunkter: [],
      erEosBorger: true,
      oppholdsrettVurdering: true,
    };

    const aksjonspunkter = [];

    const initialValues = StatusForBorgerFaktaPanel.buildInitialValues(periode as PeriodeMedId, aksjonspunkter);

    expect(initialValues).toEqual({
      apKode: undefined,
      erEosBorger: true,
      oppholdsrettVurdering: true,
      lovligOppholdVurdering: undefined,
      isBorgerAksjonspunktClosed: false,
    });
  });

  it('skal sette initielle verdi når regionkode ikke finnes men en har oppholdsrett-aksjonspunkt', () => {
    const periode = {
      aksjonspunkter: [aksjonspunktCodes.AVKLAR_OPPHOLDSRETT],
    };
    const aksjonspunkt = {
      definisjon: {
        kode: aksjonspunktCodes.AVKLAR_OPPHOLDSRETT,
        kodeverk: '',
      },
      status: {
        kode: 'UTFO',
        kodeverk: '',
      },
    } as Aksjonspunkt;

    const initialValues = StatusForBorgerFaktaPanel.buildInitialValues(periode as PeriodeMedId, [aksjonspunkt]);

    expect(initialValues).toEqual({
      apKode: aksjonspunktCodes.AVKLAR_OPPHOLDSRETT,
      erEosBorger: true,
      oppholdsrettVurdering: undefined,
      lovligOppholdVurdering: undefined,
      isBorgerAksjonspunktClosed: true,
    });
  });

  it('skal sette initielle verdi når det ikke er EØS borger', () => {
    const periode = {
      aksjonspunkter: [aksjonspunktCodes.AVKLAR_OPPHOLDSRETT],
      erEosBorger: false,
      lovligOppholdVurdering: false,
    };
    const aksjonspunkter = [];

    const initialValues = StatusForBorgerFaktaPanel.buildInitialValues(periode as PeriodeMedId, aksjonspunkter);

    expect(initialValues).toEqual({
      apKode: undefined,
      erEosBorger: false,
      oppholdsrettVurdering: undefined,
      lovligOppholdVurdering: false,
      isBorgerAksjonspunktClosed: false,
    });
  });
});

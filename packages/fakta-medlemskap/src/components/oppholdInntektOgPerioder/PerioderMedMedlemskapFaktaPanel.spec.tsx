import React from 'react';
import { FormattedMessage } from 'react-intl';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import {
  Aksjonspunkt, AlleKodeverk, Medlemskap, Soknad,
} from '@fpsak-frontend/types';
import { shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import PerioderMedMedlemskapFaktaPanel, { PerioderMedMedlemskapFaktaPanelImpl as UndecoratedForm, PeriodeMedId } from './PerioderMedMedlemskapFaktaPanel';
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

describe('<PerioderMedMedlemskapFaktaPanel>', () => {
  it('skal vise periode og manuelle-vurderingstyper i form', () => {
    const periods = [{
      fom: '2016-01-15',
      tom: '2016-10-15',
      dekning: 'testdekning',
      status: 'testStatus',
      beslutningsdato: '2016-10-16',
    }];
    const manuelleVurderingstyper = [{
      kode: 'test1',
      navn: 'navn1',
      kodeverk: '',
    }, {
      kode: 'test2',
      navn: 'navn2',
      kodeverk: '',
    }];

    const wrapper = shallowWithIntl(<UndecoratedForm
      id="1"
      hasPeriodeAksjonspunkt
      isPeriodAksjonspunktClosed={false}
      fixedMedlemskapPerioder={periods}
      readOnly={false}
      vurderingTypes={manuelleVurderingstyper}
      alleMerknaderFraBeslutter={{}}
      alleKodeverk={{} as AlleKodeverk}
    />, messages);

    const table = wrapper.find('Table');
    expect(table).toHaveLength(1);
    const tableRows = table.find('TableRow');
    expect(tableRows).toHaveLength(1);
    const tableColumns = table.find('TableColumn');
    expect(tableColumns).toHaveLength(4);
    expect(tableColumns.at(1).html()).toEqual('<td class="columnStyle">testdekning</td>');
    expect(tableColumns.at(2).html()).toEqual('<td class="columnStyle">testStatus</td>');

    const radiofields = wrapper.find('RadioOption');
    expect(radiofields).toHaveLength(2);
    expect(radiofields.first().prop('value')).toEqual('test1');
    expect(radiofields.first().prop('label')).toEqual('navn1');
    expect(radiofields.last().prop('value')).toEqual('test2');
    expect(radiofields.last().prop('label')).toEqual('navn2');
  });

  it('skal vise fødselsdato når en har dette', () => {
    const periods = [{
      fom: '2016-01-15',
      tom: '2016-10-15',
      dekning: 'testdekning',
      status: 'testStatus',
      beslutningsdato: '2016-10-16',
    }];

    const wrapper = shallowWithIntl(<UndecoratedForm
      id="1"
      hasPeriodeAksjonspunkt
      isPeriodAksjonspunktClosed={false}
      fixedMedlemskapPerioder={periods}
      readOnly={false}
      fodselsdato="2016-10-16"
      vurderingTypes={[]}
      alleMerknaderFraBeslutter={{}}
      alleKodeverk={{} as AlleKodeverk}
    />, messages);

    const message = wrapper.find(FormattedMessage);
    expect(message).toHaveLength(1);
    expect(message.prop('id')).toEqual('PerioderMedMedlemskapFaktaPanel.Fodselsdato');
    expect(message.prop('values')).toEqual({ dato: '16.10.2016' });
  });

  it('skal vise termindato når en har dette', () => {
    const periods = [{
      fom: '2016-01-15',
      tom: '2016-10-15',
      dekning: 'testdekning',
      status: 'testStatus',
      beslutningsdato: '2016-10-16',
    }];

    const wrapper = shallowWithIntl(<UndecoratedForm
      id="1"
      hasPeriodeAksjonspunkt
      isPeriodAksjonspunktClosed={false}
      fixedMedlemskapPerioder={periods}
      termindato="2016-10-16"
      readOnly={false}
      vurderingTypes={[]}
      alleMerknaderFraBeslutter={{}}
      alleKodeverk={{} as AlleKodeverk}
    />, messages);

    const message = wrapper.find(FormattedMessage);
    expect(message).toHaveLength(1);
    expect(message.prop('id')).toEqual('PerioderMedMedlemskapFaktaPanel.Termindato');
    expect(message.prop('values')).toEqual({ dato: '16.10.2016' });
  });

  it('skal vise omsorgsovertakelsedato når en har dette', () => {
    const periods = [{
      fom: '2016-01-15',
      tom: '2016-10-15',
      dekning: 'testdekning',
      status: 'testStatus',
      beslutningsdato: '2016-10-16',
    }];

    const wrapper = shallowWithIntl(<UndecoratedForm
      id="1"
      hasPeriodeAksjonspunkt
      isPeriodAksjonspunktClosed={false}
      fixedMedlemskapPerioder={periods}
      omsorgsovertakelseDato="2016-10-16"
      readOnly={false}
      vurderingTypes={[]}
      alleMerknaderFraBeslutter={{}}
      alleKodeverk={{} as AlleKodeverk}
    />, messages);

    const message = wrapper.find(FormattedMessage);
    expect(message).toHaveLength(1);
    expect(message.prop('id')).toEqual('PerioderMedMedlemskapFaktaPanel.Omsorgsovertakelse');
    expect(message.prop('values')).toEqual({ dato: '16.10.2016' });
  });

  it('skal vise tabell med medlemskapsperioder', () => {
    const perioder = [{
      fom: '2017-08-01',
      tom: '2017-08-31',
      dekning: 'testDekning',
      status: 'testStatus',
      beslutningsdato: '2017-06-01',
    }];

    const wrapper = shallowWithIntl(<UndecoratedForm
      id="1"
      hasPeriodeAksjonspunkt
      isPeriodAksjonspunktClosed={false}
      readOnly={false}
      fixedMedlemskapPerioder={perioder}
      vurderingTypes={[]}
      alleMerknaderFraBeslutter={{}}
      alleKodeverk={{} as AlleKodeverk}
    />, messages);

    const table = wrapper.find('Table');
    expect(table).toHaveLength(1);
    expect(table.find('TableRow')).toHaveLength(1);
  });

  it('skal ikke vise tabell når det ikke finnes medlemskapsperioder', () => {
    const medlemskapPerioder: any = [];

    const wrapper = shallowWithIntl(<UndecoratedForm
      id="1"
      hasPeriodeAksjonspunkt
      isPeriodAksjonspunktClosed={false}
      fixedMedlemskapPerioder={medlemskapPerioder}
      readOnly={false}
      vurderingTypes={[]}
      alleMerknaderFraBeslutter={{}}
      alleKodeverk={{} as AlleKodeverk}
    />, messages);

    const table = wrapper.find('Table');
    expect(table).toHaveLength(0);
  });

  it('skal sette opp initielle verdier og sorterte perioder etter periodestart', () => {
    const periode = {
      aksjonspunkter: [aksjonspunktCodes.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE],
      medlemskapManuellVurderingType: {
        kode: 'manuellType',
        kodeverk: '',
      },
    };
    const medlemskapPerioder = [
      {
        fom: '2016-01-15',
        tom: '2016-10-15',
        dekningType: {
          kode: 'DEK_TYPE',
          kodeverk: '',
        },
        medlemskapType: {
          kode: 'M_STATUS',
          kodeverk: '',
        },
        beslutningsdato: '2016-10-16',
      }, {
        fom: '2017-01-15',
        tom: '2017-10-15',
        dekningType: {
          kode: 'DEK_TYPE2',
          kodeverk: '',
        },
        medlemskapType: {
          kode: 'M_STATUS2',
          kodeverk: '',
        },
        beslutningsdato: '2017-10-16',
      },
    ];

    const soknad = {
      fodselsdatoer: {
        1: '2017-10-15',
      },
    };

    const aksjonspunkt = {
      definisjon: {
        kode: aksjonspunktCodes.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE,
        kodeverk: '',
      },
      status: {
        kode: aksjonspunktStatus.OPPRETTET,
        kodeverk: '',
      },
    } as Aksjonspunkt;
    const getKodeverknavn = (kodeverk: any) => {
      if (kodeverk.kode === 'DEK_TYPE') {
        return 'testdekning';
      }
      if (kodeverk.kode === 'DEK_TYPE2') {
        return 'testdekning2017';
      }
      if (kodeverk.kode === 'M_STATUS') {
        return 'testStatus';
      }
      if (kodeverk.kode === 'M_STATUS2') {
        return 'testStatus2017';
      }
      return '';
    };
    const initialValues = PerioderMedMedlemskapFaktaPanel.buildInitialValues(
      periode as PeriodeMedId,
      medlemskapPerioder as Medlemskap['medlemskapPerioder'],
      // @ts-ignore
      soknad as Soknad,
      [aksjonspunkt],
      getKodeverknavn,
    );

    expect(initialValues).toEqual({
      fixedMedlemskapPerioder: [{
        fom: '2016-01-15',
        tom: '2016-10-15',
        dekning: 'testdekning',
        status: 'testStatus',
        beslutningsdato: '2016-10-16',
      }, {
        fom: '2017-01-15',
        tom: '2017-10-15',
        dekning: 'testdekning2017',
        status: 'testStatus2017',
        beslutningsdato: '2017-10-16',
      }],
      isPeriodAksjonspunktClosed: false,
      medlemskapManuellVurderingType: {
        kode: 'manuellType',
        kodeverk: '',
      },
      fodselsdato: '2017-10-15',
      termindato: undefined,
      omsorgsovertakelseDato: undefined,
      hasPeriodeAksjonspunkt: true,
    });
  });
});

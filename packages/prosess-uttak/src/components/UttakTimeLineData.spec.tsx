import React from 'react';
import sinon from 'sinon';
import { FormattedMessage } from 'react-intl';
import { Column } from 'nav-frontend-grid';

import { AksjonspunktHelpTextTemp } from '@fpsak-frontend/shared-components';
import { getIntlMock, shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { TimeLineButton, TimeLineDataContainer } from '@fpsak-frontend/tidslinje';
import {
  AktivitetIdentifikator, AktivitetSaldo, UttakStonadskontoer, Stonadskonto,
} from '@fpsak-frontend/types';

import { kalkulerTrekkdager, UttakTimeLineData } from './UttakTimeLineData';
import DelOppPeriodeModal from './DelOppPeriodeModal';
import UttakActivity from './UttakActivity';
import messages from '../../i18n/nb_NO.json';
import { PeriodeMedClassName } from './Uttak';

const intlMock = getIntlMock(messages);

describe('<UttakTimeLineData>', () => {
  const selectedItem = {
    id: 1,
    fom: '',
    tom: '',
    periodeResultatType: {
      kode: '',
      kodeverk: '',
    },
    periodeResultatÅrsak: {
      kode: '',
      kodeverk: '',
    },
    aktiviteter: [{
      stønadskontoType: {
        kode: '',
        kodeverk: '',
      },
    }],
  } as PeriodeMedClassName;
  const selectedItem2 = {
    id: 1,
    fom: '',
    tom: '',
    periodeResultatType: {
      kode: 'MANUELL_BEHANDLING',
      kodeverk: '',
    },
    periodeResultatÅrsak: {
      kode: '4002',
    },
    manuellBehandlingÅrsak: {
      kode: '5001',
      kodeverk: '',
    },
    periodeType: {
      kode: 'MØDREKVOTE',
    },
    aktiviteter: [{
    }],
  } as PeriodeMedClassName;

  const stonadskonto = {
    stonadskontoer: {
      MØDREKVOTE: {
        aktivitetSaldoDtoList: [{
          aktivitetIdentifikator: {
            arbeidsgiverReferanse: '123',
          },
          saldo: 0,
        }, {
          aktivitetIdentifikator: {
            arbeidsgiverReferanse: '445',
          },
          saldo: 4,
        }],
      } as Stonadskonto,
    } as { [key: string]: Stonadskonto },
  } as UttakStonadskontoer;

  const stonadskontoFlerGarTom = {
    stonadskontoer: {
      MØDREKVOTE: {
        aktivitetSaldoDtoList: [{
          aktivitetIdentifikator: {
            arbeidsgiverReferanse: '123',
          } as AktivitetIdentifikator,
          saldo: 0,
        }, {
          aktivitetIdentifikator: {
            arbeidsgiverReferanse: '445',
          } as AktivitetIdentifikator,
          saldo: 4,
        }, {
          aktivitetIdentifikator: {
            arbeidsgiverReferanse: '756',
          } as AktivitetIdentifikator,
          saldo: 0,
        }] as AktivitetSaldo[],
      } as Stonadskonto,
    } as { [key: string]: Stonadskonto },
  } as UttakStonadskontoer;

  const kodeverk = {
    BehandlingStatus: [{
      kode: 'AVSLU',
      navn: 'Avsluttet',
      kodeverk: 'BEHANDLING_STATUS',
    }],
  };

  const arbeidsgiverOpplysningerPerId = {
    910909088: {
      erPrivatPerson: false,
      identifikator: '910909088',
      navn: 'BEDRIFT AS',
    },
    123: {
      erPrivatPerson: false,
      identifikator: '123',
      navn: 'UNIVERSITETET I OSLO',
    },
    445: {
      erPrivatPerson: false,
      identifikator: '445',
      navn: 'STATOIL',
    },
    756: {
      erPrivatPerson: false,
      identifikator: '756',
      navn: 'MYS',
    },
  };

  it('skal rendre UttakTimeLineData, ikke deloppperiode, ikke readonly', () => {
    const wrapper = shallowWithIntl(<UttakTimeLineData
      intl={intlMock}
      readOnly={false}
      callbackForward={sinon.spy()}
      callbackBackward={sinon.spy()}
      callbackSetSelected={sinon.spy()}
      selectedItemData={selectedItem}
      callbackUpdateActivity={sinon.spy()}
      callbackCancelSelectedActivity={sinon.spy()}
      uttaksresultatActivity={[]}
      reduxFormChange={sinon.spy}
      behandlingFormPrefix=""
      formName=""
      activityPanelName=""
      harSoktOmFlerbarnsdager={false}
      alleKodeverk={kodeverk}
      behandlingVersjon={1}
      behandlingId={1}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />, messages);
    wrapper.setState({ showDelPeriodeModal: false });
    const modal = wrapper.find(DelOppPeriodeModal);
    expect(modal).toHaveLength(0);
    const message = wrapper.find(FormattedMessage);
    expect(message).toHaveLength(2);
    expect(message.first().prop('id')).toEqual('UttakTimeLineData.PeriodeData.Detaljer');
    expect(message.at(1).prop('id')).toEqual('UttakTimeLineData.PeriodeData.DelOppPerioden');
    expect(wrapper.find(UttakActivity)).toHaveLength(1);
    expect(wrapper.find(TimeLineButton)).toHaveLength(2);
    expect(wrapper.find(TimeLineDataContainer)).toHaveLength(1);
    expect(wrapper.find(Column)).toHaveLength(3);
  });

  it('skal rendre UttakTimeLineData med modal og lukke modal', () => {
    const wrapper = shallowWithIntl(<UttakTimeLineData
      intl={intlMock}
      readOnly={false}
      callbackForward={sinon.spy()}
      callbackBackward={sinon.spy()}
      callbackSetSelected={sinon.spy()}
      selectedItemData={selectedItem}
      callbackUpdateActivity={sinon.spy()}
      callbackCancelSelectedActivity={sinon.spy()}
      reduxFormChange={sinon.spy}
      uttaksresultatActivity={[]}
      behandlingFormPrefix=""
      formName=""
      activityPanelName=""
      harSoktOmFlerbarnsdager={false}
      alleKodeverk={kodeverk}
      behandlingVersjon={1}
      behandlingId={1}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />, messages);
    wrapper.setState({ showDelPeriodeModal: true });
    expect(wrapper.state('showDelPeriodeModal')).toBe(true);
    const modal = wrapper.find(DelOppPeriodeModal);
    expect(modal).toHaveLength(1);
    expect(modal.first().prop('showModal')).toEqual(true);

    modal.prop('cancelEvent')();
    wrapper.update();
    expect(wrapper.state('showDelPeriodeModal')).toBe(false);
    expect(modal.prop('periodeData')).toEqual(selectedItem);
  });

  it('skal rendre UttakTimeLineData readOnly', () => {
    const wrapper = shallowWithIntl(<UttakTimeLineData
      intl={intlMock}
      readOnly
      callbackForward={sinon.spy()}
      callbackBackward={sinon.spy()}
      callbackSetSelected={sinon.spy()}
      selectedItemData={selectedItem}
      callbackUpdateActivity={sinon.spy()}
      callbackCancelSelectedActivity={sinon.spy()}
      reduxFormChange={sinon.spy}
      uttaksresultatActivity={[]}
      behandlingFormPrefix=""
      formName=""
      activityPanelName=""
      harSoktOmFlerbarnsdager={false}
      alleKodeverk={kodeverk}
      behandlingVersjon={1}
      behandlingId={1}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />, messages);
    wrapper.setState({ showDelPeriodeModal: false });
    const modal = wrapper.find(DelOppPeriodeModal);
    expect(modal).toHaveLength(0);
    const message = wrapper.find(FormattedMessage);
    expect(message).toHaveLength(1);
    expect(message.first().prop('id')).toEqual('UttakTimeLineData.PeriodeData.Detaljer');
    const uttakActivity = wrapper.find(UttakActivity);
    expect(uttakActivity).toHaveLength(1);
    const image = wrapper.find(TimeLineButton);
    expect(image).toHaveLength(2);
  });

  it('skal rendre naviagtion', () => {
    const callbackForward = sinon.spy();
    const callbackBackward = sinon.spy();
    const wrapper = shallowWithIntl(<UttakTimeLineData
      intl={intlMock}
      readOnly={false}
      callbackForward={callbackForward}
      callbackBackward={callbackBackward}
      callbackSetSelected={sinon.spy()}
      selectedItemData={selectedItem}
      callbackUpdateActivity={sinon.spy()}
      callbackCancelSelectedActivity={sinon.spy()}
      uttaksresultatActivity={[]}
      reduxFormChange={sinon.spy}
      behandlingFormPrefix=""
      formName=""
      activityPanelName=""
      harSoktOmFlerbarnsdager={false}
      alleKodeverk={kodeverk}
      behandlingVersjon={1}
      behandlingId={1}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />, messages);
    const buttons = wrapper.find(TimeLineButton);
    expect(buttons).toHaveLength(2);
    expect(buttons.at(0).prop('callback')).toEqual(callbackBackward);
    expect(buttons.at(0).prop('text').length).toBeGreaterThan(3);
    expect(buttons.at(1).prop('callback')).toEqual(callbackForward);
    expect(buttons.at(1).prop('text').length).toBeGreaterThan(3);
  });

  it('skal rendre UttakActivity i UttakTimeLineData', () => {
    const callbackCancelSelectedActivity = sinon.spy();
    const callbackUpdateActivity = sinon.spy();
    const wrapper = shallowWithIntl(<UttakTimeLineData
      isApOpen
      readOnly={false}
      intl={intlMock}
      callbackForward={sinon.spy()}
      callbackBackward={sinon.spy()}
      callbackSetSelected={sinon.spy()}
      selectedItemData={selectedItem}
      callbackUpdateActivity={callbackUpdateActivity}
      callbackCancelSelectedActivity={callbackCancelSelectedActivity}
      uttaksresultatActivity={[]}
      reduxFormChange={sinon.spy}
      behandlingFormPrefix=""
      formName=""
      activityPanelName=""
      harSoktOmFlerbarnsdager={false}
      alleKodeverk={kodeverk}
      behandlingVersjon={1}
      behandlingId={1}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />, messages);
    const uttakActivity = wrapper.find(UttakActivity);
    expect(uttakActivity).toHaveLength(1);
    expect(uttakActivity.first().prop('cancelSelectedActivity')).toEqual(callbackCancelSelectedActivity);
    expect(uttakActivity.first().prop('updateActivity')).toEqual(callbackUpdateActivity);
    expect(uttakActivity.first().prop('selectedItemData')).toEqual(selectedItem);
    expect(uttakActivity.first().prop('readOnly')).toEqual(false);
  });

  it('skal rendre uttakpanel med aksjonspunkt og korrekt tekst om man går tom för en aktivitets dager', () => {
    const callbackCancelSelectedActivity = sinon.spy();
    const callbackUpdateActivity = sinon.spy();
    const wrapper = shallowWithIntl(<UttakTimeLineData
      intl={intlMock}
      isApOpen
      readOnly={false}
      callbackForward={sinon.spy()}
      callbackBackward={sinon.spy()}
      callbackSetSelected={sinon.spy()}
      selectedItemData={selectedItem2}
      callbackUpdateActivity={callbackUpdateActivity}
      callbackCancelSelectedActivity={callbackCancelSelectedActivity}
      uttaksresultatActivity={[]}
      reduxFormChange={sinon.spy}
      behandlingFormPrefix=""
      formName=""
      activityPanelName=""
      harSoktOmFlerbarnsdager={false}
      stonadskonto={stonadskonto}
      alleKodeverk={kodeverk}
      behandlingVersjon={1}
      behandlingId={1}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />, messages);
    const uttak = wrapper.find(AksjonspunktHelpTextTemp);
    expect(uttak).toHaveLength(1);
    const formattedMessage = uttak.find(FormattedMessage);
    expect(formattedMessage).toHaveLength(1);
    expect(formattedMessage.prop('id')).toEqual('UttakPanel.manuellBehandlingÅrsakEnskiltArbeidsforhold');
    expect(formattedMessage).toHaveLength(1);
  });

  it('skal rendre uttakpanel med aksjonspunkt og korrekt tekst om man går tom för flere aktiviteters dager', () => {
    const callbackCancelSelectedActivity = sinon.spy();
    const callbackUpdateActivity = sinon.spy();
    const wrapper = shallowWithIntl(<UttakTimeLineData
      intl={intlMock}
      isApOpen
      readOnly={false}
      callbackForward={sinon.spy()}
      callbackBackward={sinon.spy()}
      callbackSetSelected={sinon.spy()}
      selectedItemData={selectedItem2}
      callbackUpdateActivity={callbackUpdateActivity}
      callbackCancelSelectedActivity={callbackCancelSelectedActivity}
      uttaksresultatActivity={[]}
      reduxFormChange={sinon.spy}
      behandlingFormPrefix=""
      formName=""
      activityPanelName=""
      harSoktOmFlerbarnsdager={false}
      stonadskonto={stonadskontoFlerGarTom}
      alleKodeverk={kodeverk}
      behandlingVersjon={1}
      behandlingId={1}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />, messages);
    const uttak = wrapper.find(AksjonspunktHelpTextTemp);
    expect(uttak).toHaveLength(1);
    const formattedMessage = uttak.find(FormattedMessage);
    expect(formattedMessage.prop('id')).toEqual('UttakPanel.manuellBehandlingÅrsakArbeidsforhold');
    expect(formattedMessage).toHaveLength(1);
  });

  it('skal sette trekkdagene lik virkedagene for periode som ikke har gradering eller samtidig uttak', () => {
    const aktivitet = {
      gradering: false,
      prosentArbeid: undefined,
    };
    const virkedager = 8;
    const samtidigUttak = false;
    const samtidigUttaksprosent = undefined;

    const trekkdagerForAktivitet = kalkulerTrekkdager(aktivitet, virkedager, samtidigUttak, samtidigUttaksprosent);

    expect(trekkdagerForAktivitet).toEqual({
      weeks: 1,
      days: 3.0,
      trekkdagerDesimaler: 8,
    });
  });

  it('skal sette trekkdagene lik virkedagene * (100 - prosentArbeid) når en har gradering', () => {
    const aktivitet = {
      gradering: true,
      prosentArbeid: 40,
    };
    const virkedager = 8;
    const samtidigUttak = false;
    const samtidigUttaksprosent = undefined;

    const trekkdagerForAktivitet = kalkulerTrekkdager(aktivitet, virkedager, samtidigUttak, samtidigUttaksprosent);

    expect(trekkdagerForAktivitet).toEqual({
      weeks: 0,
      days: 4.8,
      trekkdagerDesimaler: 4.8,
    });
  });

  it('skal sette trekkdagene lik virkedagene * (samtidigUttaksprosent / 100) når en har samtidig uttak', () => {
    const aktivitet = {
      gradering: false,
      prosentArbeid: undefined,
    };
    const virkedager = 8;
    const samtidigUttak = true;
    const samtidigUttaksprosent = 50;

    const trekkdagerForAktivitet = kalkulerTrekkdager(aktivitet, virkedager, samtidigUttak, samtidigUttaksprosent);

    expect(trekkdagerForAktivitet).toEqual({
      weeks: 0,
      days: 4.0,
      trekkdagerDesimaler: 4,
    });
  });
});

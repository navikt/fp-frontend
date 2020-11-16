import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { FormattedMessage } from 'react-intl';
import { Column } from 'nav-frontend-grid';

import { AksjonspunktHelpTextTemp } from '@fpsak-frontend/shared-components';
import { intlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { TimeLineButton, TimeLineDataContainer } from '@fpsak-frontend/tidslinje';
import {
  Arbeidsgiver, AktivitetIdentifikator, AktivitetSaldo, UttakStonadskontoer, Stonadskonto,
} from '@fpsak-frontend/types';

import { kalkulerTrekkdager, UttakTimeLineData } from './UttakTimeLineData';
import DelOppPeriodeModal from './DelOppPeriodeModal';
import UttakActivity from './UttakActivity';
import shallowWithIntl from '../../i18n/intl-enzyme-test-helper-proses-uttak';
import { PeriodeMedClassName } from './Uttak';

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
            arbeidsgiver: {
              navn: 'UNIVERSITETET I OSLO',
            },
          },
          saldo: 0,
        }, {
          aktivitetIdentifikator: {
            arbeidsgiver: {
              navn: 'STATOIL',
            },
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
            arbeidsgiver: {
              navn: 'UNIVERSITETET I OSLO',
            } as Arbeidsgiver,
          } as AktivitetIdentifikator,
          saldo: 0,
        }, {
          aktivitetIdentifikator: {
            arbeidsgiver: {
              navn: 'STATOIL',
            } as Arbeidsgiver,
          } as AktivitetIdentifikator,
          saldo: 4,
        }, {
          aktivitetIdentifikator: {
            arbeidsgiver: {
              navn: 'MYS',
            } as Arbeidsgiver,
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
    />);
    wrapper.setState({ showDelPeriodeModal: false });
    const modal = wrapper.find(DelOppPeriodeModal);
    expect(modal).to.have.length(0);
    const message = wrapper.find(FormattedMessage);
    expect(message).to.have.length(2);
    expect(message.first().prop('id')).to.eql('UttakTimeLineData.PeriodeData.Detaljer');
    expect(message.at(1).prop('id')).to.eql('UttakTimeLineData.PeriodeData.DelOppPerioden');
    expect(wrapper.find(UttakActivity)).to.have.length(1);
    expect(wrapper.find(TimeLineButton)).to.have.length(2);
    expect(wrapper.find(TimeLineDataContainer)).to.have.length(1);
    expect(wrapper.find(Column)).to.have.length(3);
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
    />);
    wrapper.setState({ showDelPeriodeModal: true });
    expect(wrapper.state('showDelPeriodeModal')).is.true;
    const modal = wrapper.find(DelOppPeriodeModal);
    expect(modal).to.have.length(1);
    expect(modal.first().prop('showModal')).to.eql(true);

    modal.prop('cancelEvent')();
    wrapper.update();
    expect(wrapper.state('showDelPeriodeModal')).is.false;
    expect(modal.prop('periodeData')).to.eql(selectedItem);
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
    />);
    wrapper.setState({ showDelPeriodeModal: false });
    const modal = wrapper.find(DelOppPeriodeModal);
    expect(modal).to.have.length(0);
    const message = wrapper.find(FormattedMessage);
    expect(message).to.have.length(1);
    expect(message.first().prop('id')).to.eql('UttakTimeLineData.PeriodeData.Detaljer');
    const uttakActivity = wrapper.find(UttakActivity);
    expect(uttakActivity).to.have.length(1);
    const image = wrapper.find(TimeLineButton);
    expect(image).to.have.length(2);
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
    />);
    const buttons = wrapper.find(TimeLineButton);
    expect(buttons).to.have.length(2);
    expect(buttons.at(0).prop('callback')).to.eql(callbackBackward);
    expect(buttons.at(0).prop('text')).to.have.length.above(3);
    expect(buttons.at(1).prop('callback')).to.eql(callbackForward);
    expect(buttons.at(1).prop('text')).to.have.length.above(3);
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
    />);
    const uttakActivity = wrapper.find(UttakActivity);
    expect(uttakActivity).to.have.length(1);
    expect(uttakActivity.first().prop('cancelSelectedActivity')).to.eql(callbackCancelSelectedActivity);
    expect(uttakActivity.first().prop('updateActivity')).to.eql(callbackUpdateActivity);
    expect(uttakActivity.first().prop('selectedItemData')).to.eql(selectedItem);
    expect(uttakActivity.first().prop('readOnly')).to.eql(false);
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
    />);
    const uttak = wrapper.find(AksjonspunktHelpTextTemp);
    expect(uttak).has.length(1);
    const formattedMessage = uttak.find(FormattedMessage);
    expect(formattedMessage).has.length(1);
    expect(formattedMessage.prop('id')).to.eql('UttakPanel.manuellBehandlingÅrsakEnskiltArbeidsforhold');
    expect(formattedMessage).has.length(1);
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
    />);
    const uttak = wrapper.find(AksjonspunktHelpTextTemp);
    expect(uttak).has.length(1);
    const formattedMessage = uttak.find(FormattedMessage);
    expect(formattedMessage.prop('id')).to.eql('UttakPanel.manuellBehandlingÅrsakArbeidsforhold');
    expect(formattedMessage).has.length(1);
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

    expect(trekkdagerForAktivitet).is.eql({
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

    expect(trekkdagerForAktivitet).is.eql({
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

    expect(trekkdagerForAktivitet).is.eql({
      weeks: 0,
      days: 4.0,
      trekkdagerDesimaler: 4,
    });
  });
});

import React from 'react';
import { FormattedMessage } from 'react-intl';

import { UttakStonadskontoer, Stonadskonto } from '@fpsak-frontend/types';
import { shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import TimeLineInfo from './TimeLineInfo';
import messages from '../../../i18n/nb_NO.json';

const stonadskonto = {
  FORELDREPENGER_FØR_FØDSEL: {
    saldo: 30,
    maxDager: 30,
    aktivitetSaldoDtoList: [
    ],
  } as Stonadskonto,
  FELLESPERIODE: {
    saldo: 30,
    maxDager: 30,
    aktivitetSaldoDtoList: [
    ],
  } as Stonadskonto,
  MØDREKVOTE: {
    saldo: 40,
    maxDager: 30,
    aktivitetSaldoDtoList: [
    ],
  } as Stonadskonto,
  FEDREKVOTE: {
    saldo: 20,
    maxDager: 30,
    aktivitetSaldoDtoList: [
    ],
  } as Stonadskonto,
} as UttakStonadskontoer['stonadskontoer'];

const arbeidsgiverOpplysningerPerId = {
  910909088: {
    erPrivatPerson: false,
    identifikator: '910909088',
    navn: 'BEDRIFT AS',
  },
};

describe('<TimeLineInfo>', () => {
  it('skal vise max-uker tilgjengelig lik summen av alle kontoers max dager delt på fem', () => {
    const wrapper = shallowWithIntl(<TimeLineInfo
      stonadskonto={stonadskonto}
      maksDatoUttak="2018-12-01"
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />, messages);

    const fMessages = wrapper.find(FormattedMessage);
    expect(fMessages).toHaveLength(3);
    // @ts-ignore
    expect(fMessages.at(1).props().values.ukerVerdi).toBe(24);
  });

  it('skal vise tabell med disponible dager', () => {
    const wrapper = shallowWithIntl(<TimeLineInfo
      stonadskonto={stonadskonto}
      maksDatoUttak="2018-12-01"
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />, messages);

    const konto = {
      kontonavn: 'FELLESPERIODE',
      kontoinfo: {
        saldo: 40,
        maxDager: 40,
        stonadskontotype: 'FELLESPERIODE',
        aktivitetSaldoDtoList: [{
          aktivitetIdentifikator: {
            arbeidsforholdId: '123',
            arbeidsgiver: {
              navn: 'Statoil',
              identifikator: '987',
            },
            uttakArbeidType: 'FRILANS',
          },
        },
        ],
      },
    };

    wrapper.setState({ aktiv: 1, visKonto: konto });
    const fMessages = wrapper.find(FormattedMessage);
    expect(fMessages).toHaveLength(3);
    // @ts-ignore
    expect(fMessages.at(2).prop('values').dato).toBe('01.12.2018');
    // @ts-ignore
    expect(fMessages.at(1).prop('values').ukerVerdi).toBe(24);
  });

  it('skal vise tabs', () => {
    const wrapper = shallowWithIntl(<TimeLineInfo
      stonadskonto={stonadskonto}
      maksDatoUttak="2018-12-01"
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />, messages);
    wrapper.setState({ aktiv: 1 });
    const timelineTab = wrapper.find('TimeLineTab');
    expect(timelineTab).toHaveLength(4);
    expect(timelineTab.at(0).prop('aktiv')).toBe(false);
    expect(timelineTab.at(1).prop('aktiv')).toBe(true);
    expect(timelineTab.at(2).prop('aktiv')).toBe(false);
    expect(timelineTab.at(3).prop('aktiv')).toBe(false);
  });
});

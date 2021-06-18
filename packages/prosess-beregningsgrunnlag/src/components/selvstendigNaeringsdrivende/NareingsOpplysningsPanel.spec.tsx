import React from 'react';
import { FormattedMessage } from 'react-intl';

import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import { formatCurrencyNoKr } from '@fpsak-frontend/utils';
import { getIntlMock, shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import {BeregningsgrunnlagAndel, Næring} from '@fpsak-frontend/types';
import messages from '../../../i18n/nb_NO.json';
import NaeringsopplysningsPanel from './NaeringsOpplysningsPanel';
import NæringAksjonspunktTsType from "../../types/NæringAksjonspunktTsType";

const intlMock = getIntlMock(messages);

const andelerForstePeriode = {
  aktivitetStatus:
    {
      kode: aktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
      kodeverk: 'AKTIVITET_STATUS',
    },
  næringer: [{
    begrunnelse: 'Endringsbeskrivelse',
    endringsdato: '2019-11-22',
    erNyIArbeidslivet: false,
    erNyoppstartet: true,
    erVarigEndret: true,
    kanRegnskapsførerKontaktes: false,
    oppgittInntekt: 1500000,
    oppstartsdato: '2019-09-16',
    orgnr: '910909088',
    regnskapsførerNavn: 'Regnar Regnskap',
    regnskapsførerTlf: '99999999',
    virksomhetType:
    {
      kode: 'ANNEN',
      kodeverk: 'VIRKSOMHET_TYPE',
    },
  }],
} as BeregningsgrunnlagAndel;

const agOpp = {
  910909088: {
    identifikator: '910909088',
    navn: 'Test',
    erPrivatPerson: false,
  },
};

describe('NaeringsopplysningsPanel', () => {
  it('Skal teste at komponenten renderer riktige verdier', () => {
    const wrapper = shallowWithIntl(<NaeringsopplysningsPanel.WrappedComponent
      alleAndelerIForstePeriode={[andelerForstePeriode]}
      arbeidsgiverOpplysningerPerId={agOpp}
      intl={intlMock}
    />, messages);
    const formattedMessages = wrapper.find(FormattedMessage);
    expect(formattedMessages).toHaveLength(3);
    expect(formattedMessages.first().props().id).toBe('Beregningsgrunnlag.NaeringsOpplysningsPanel.Overskrift');
    expect(formattedMessages.at(1).props().id).toBe('Beregningsgrunnlag.NaeringsOpplysningsPanel.OppgittAar');
    expect(formattedMessages.at(2).props().id).toBe('Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.ANNEN');
    const næringer = andelerForstePeriode.næringer as Næring[];
    const allMessages = wrapper.find('Normaltekst');
    expect(allMessages).toHaveLength(5);
    expect(allMessages.at(1).childAt(0).text()).toBe(formatCurrencyNoKr(næringer[0].oppgittInntekt));
    expect(allMessages.at(2).childAt(0).text()).toBe(næringer[0].orgnr);
    const lesMer = wrapper.find('Lesmerpanel');
    expect(lesMer.length).toBe(1);
  });
});

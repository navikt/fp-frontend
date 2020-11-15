import React from 'react';
import { expect } from 'chai';
import { intlMock, shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { formatCurrencyNoKr } from '@fpsak-frontend/utils';
import GrunnlagForAarsinntektPanelFL from './GrunnlagForAarsinntektPanelFL';

const andel = {
  aktivitetStatus: {
    kode: aktivitetStatus.FRILANSER,
    kodeverk: 'test',
  },
  elementNavn: 'arbeidsgiver 1',
  beregnetPrAar: 200000,
  overstyrtPrAar: 100,
  beregningsgrunnlagFom: '2019-06-01',
  arbeidsforhold: {
    startdato: null,
  },
};

describe('<GrunnlagForAarsinntektPanelFL>', () => {
  it('Skal teste tabellen får korrekt antall rader UTEN arbeidsforhold startdato', () => {
    const wrapper = shallowWithIntl(<GrunnlagForAarsinntektPanelFL
      {...reduxFormPropsMock}
      intl={intlMock}
      alleAndeler={[andel]}
      isKombinasjonsstatus={false}
    />);
    const rows = wrapper.find('Row');

    expect(rows).to.have.length(2);

    const ledeText = rows.at(1).find('FormattedMessage');
    const mndAndelFL = rows.at(1).find('Normaltekst');
    const aarAndelFL = rows.at(1).find('Element');
    expect(ledeText.get(0).props.id).to.equal('Beregningsgrunnlag.AarsinntektPanel.InnrapportertFrilans');
    expect(mndAndelFL.at(1).childAt(0).text()).to.equal(formatCurrencyNoKr((andel.beregnetPrAar / 12)));
    expect(aarAndelFL.childAt(0).text()).to.equal(formatCurrencyNoKr(andel.beregnetPrAar));
  });
  it('Skal teste tabellen får korrekt antall rader ved arbeidsforhold startdato', () => {
    andel.arbeidsforhold.startdato = '2011-12-12';
    const wrapper = shallowWithIntl(<GrunnlagForAarsinntektPanelFL
      {...reduxFormPropsMock}
      intl={intlMock}
      alleAndeler={[andel]}
      isKombinasjonsstatus={false}
    />);
    const rows = wrapper.find('Row');
    const ledeTextStart = rows.at(0).find('FormattedMessage');
    const ledeTextStartDato = rows.at(0).find('DateLabel');

    expect(rows).to.have.length(3);
    expect(ledeTextStart.get(0).props.id).to.equal('Beregningsgrunnlag.AarsinntektPanel.FrilansStartDato2');
    expect(ledeTextStartDato.get(0).props.dateString).to.equal('12.12.2011', 'dateString');

    const ledeText = rows.at(2).find('FormattedMessage');
    const mndAndelFL = rows.at(2).find('Normaltekst');
    const aarAndelFL = rows.at(2).find('Element');

    expect(ledeText.get(0).props.id).to.equal('Beregningsgrunnlag.AarsinntektPanel.InnrapportertFrilans');
    expect(mndAndelFL.at(1).childAt(0).text()).to.equal(formatCurrencyNoKr((andel.beregnetPrAar / 12)));
    expect(aarAndelFL.childAt(0).text()).to.equal(formatCurrencyNoKr(andel.beregnetPrAar));
  });
});

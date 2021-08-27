import React from 'react';
import Panel from 'nav-frontend-paneler';

import { getIntlMock, shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import { formatCurrencyNoKr } from '@fpsak-frontend/utils';

import Vilkar from '@fpsak-frontend/types/src/vilkarTsType';
import { FormattedMessage } from 'react-intl';
import BeregningsresutatPanel from './BeregningsResultatPanel';
import messages from '../../../i18n/nb_NO.json';
import BeregningsresultatPeriodeTabellType, { AvkortetRadType, BruttoRadType, RedusertRadType } from '../../types/BeregningsresultatPeriodeTabellType';

const intlMock = getIntlMock(messages);

const tableData = {

  avkortetRad: { ledetekst: <FormattedMessage id="Beregningsgrunnlag.BeregningTable.Avkortet6g" />, verdi: '380' } as AvkortetRadType,
  redusertRad: {
    ledetekst: <FormattedMessage id="Beregningsgrunnlag.BeregningTable.RedusertProsent" values={{ redusert: 80 }} />,
    verdi: '350',
  } as RedusertRadType,
  bruttoRad: { ledetekst: <FormattedMessage id="Beregningsgrunnlag.BeregningTable.BruttoTotalt" />, verdi: '400' } as BruttoRadType,
  dagsatser: { verdi: '100', grunnlag: '400' },
  headers: [],
  rowsAndeler: [{ ledetekst: <FormattedMessage id="Beregningsgrunnlag.BeregningTable.MåFastsettes" />, verdi: 130250, skalFastsetteGrunnlag: false }],
  rowsForklaringer: [],
} as BeregningsresultatPeriodeTabellType;
const vilkaarBG = {
  vilkarStatus: {
    kode: vilkarUtfallType.IKKE_VURDERT,
    kodeverk: 'VILKAR_UTFALL_TYPE',
  },
  vilkarType: {
    kode: 'FP_VK_41',
    kodeverk: 'vilkarType',
  },
};
describe('BeregningsresultatPanel', () => {
  it('Skal teste om tabellen får korrekt antall rader ved vilkarStatus:IKKE VURDERT', () => {
    tableData.rowsAndeler[0].skalFastsetteGrunnlag = true;
    const wrapper = shallowWithIntl(<BeregningsresutatPanel.WrappedComponent
      intl={intlMock}
      periodeResultatTabeller={[tableData]}
      vilkaarBG={vilkaarBG as Vilkar}
      grunnbeløp={98866}
    />, messages);
    const panel = wrapper.find(Panel);
    const rows = panel.find('Row');
    expect(rows).toHaveLength(3);
    const andelRow = rows.first();
    const andelVerdi = andelRow.find(FormattedMessage).at(0).props().id;
    expect(andelVerdi).toBe('Beregningsgrunnlag.BeregningTable.MåFastsettes');
    const sumRow = rows.last();
    const sumText = sumRow.find(FormattedMessage).props().id;
    expect(sumText).toBe('Beregningsgrunnlag.BeregningTable.Dagsats.ikkeFastsatt');
  });
  it('Skal teste om tabellen får korrekt antall rader ved vilkarStatus:OPPFYLT', () => {
    vilkaarBG.vilkarStatus.kode = vilkarUtfallType.OPPFYLT;
    vilkaarBG.vilkarStatus.kodeverk = 'VILKAR_UTFALL_TYPE';
    const wrapper = shallowWithIntl(<BeregningsresutatPanel.WrappedComponent
      intl={intlMock}
      periodeResultatTabeller={[tableData]}
      vilkaarBG={vilkaarBG as Vilkar}
      grunnbeløp={98866}
    />, messages);

    const panel = wrapper.find(Panel);
    const rows = panel.find('Row');
    expect(rows).toHaveLength(5);

    const andelRow = rows.first();

    const andelText = andelRow.find(FormattedMessage).at(0).props().id;
    const andelVerdi = andelRow.find('Normaltekst').at(1).childAt(0).text();
    expect(andelText).toBe('Beregningsgrunnlag.BeregningTable.MåFastsettes');
    expect(formatCurrencyNoKr(andelVerdi)).toBe(formatCurrencyNoKr(tableData.rowsAndeler[0].verdi));
    const sumRow = rows.last();
    const sumText = sumRow.find(FormattedMessage).props().id;
    // @ts-ignore
    const sumTextTall = sumRow.find(FormattedMessage).props().values.dagSats;
    const sumVerdi = sumRow.find('Normaltekst').last().childAt(0).text();
    expect(sumText).toBe('Beregningsgrunnlag.BeregningTable.DagsatsNy');
    expect(sumTextTall).toBe(formatCurrencyNoKr(400));
    expect(sumVerdi).toBe(formatCurrencyNoKr(tableData.dagsatser.verdi));
  });
});

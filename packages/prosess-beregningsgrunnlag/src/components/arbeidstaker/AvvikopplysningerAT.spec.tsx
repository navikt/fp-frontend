import React from 'react';
import { FormattedMessage } from 'react-intl';
import { FlexRow } from '@navikt/fp-react-components';

import { shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { SammenligningsgrunlagProp } from '@fpsak-frontend/types';
import RelevanteStatuserProp from '../../types/RelevanteStatuserTsType';
import AvviksopplysningerAT from './AvvikopplysningerAT';
import messages from '../../../i18n/nb_NO.json';

const beregnetAarsinntekt = 360000;
const sammenligningsgrunnlag = (kode) => ({
  sammenligningsgrunnlagFom: '2018-09-01',
  sammenligningsgrunnlagTom: '2019-10-31',
  rapportertPrAar: 330000,
  avvikPromille: 275,
  avvikProsent: 27.5,
  sammenligningsgrunnlagType: kode,
  differanseBeregnet: 12100,
});

describe('<AvvikopplysningerAT>', () => {
  it('Skal teste tabellen får korrekte rader med innhold når kombinasjonsstatus=KOMBINERT_AT_SN', () => {
    const sammenligningsgrunnlagPrStatus = sammenligningsgrunnlag('SAMMENLIGNING_ATFL_SN') as SammenligningsgrunlagProp;
    const wrapper = shallowWithIntl(<AvviksopplysningerAT
      beregnetAarsinntekt={beregnetAarsinntekt}
      sammenligningsgrunnlagPrStatus={[sammenligningsgrunnlagPrStatus]}
      relevanteStatuser={{ isKombinasjonsstatus: true, isArbeidstaker: true, isSelvstendigNaeringsdrivende: true } as RelevanteStatuserProp}
    />, messages);
    const rows = wrapper.find(FlexRow);
    expect(rows).toHaveLength(1);
    const infoText = rows.first().find(FormattedMessage);
    expect(infoText.first().prop('id')).toEqual('Beregningsgrunnlag.Avviksopplysninger.AT.KobinasjonsStatusATSN');
  });
  it('Skal teste tabellen får korrekte rader med innhold når kombinasjonsstatus=KOMBINERT_AT_FL_SN', () => {
    const sammenligningsgrunnlagPrStatus = sammenligningsgrunnlag('SAMMENLIGNING_ATFL_SN') as SammenligningsgrunlagProp;
    const wrapper = shallowWithIntl(<AvviksopplysningerAT
      beregnetAarsinntekt={beregnetAarsinntekt}
      sammenligningsgrunnlagPrStatus={[sammenligningsgrunnlagPrStatus]}
      relevanteStatuser={{
        isKombinasjonsstatus: true, isArbeidstaker: true, isSelvstendigNaeringsdrivende: true, isFrilanser: true,
      } as RelevanteStatuserProp}
    />, messages);
    const rows = wrapper.find(FlexRow);
    expect(rows).toHaveLength(1);
    const infoText = rows.first().find(FormattedMessage);
    expect(infoText.first().prop('id')).toEqual('Beregningsgrunnlag.Avviksopplysninger.AT.KobinasjonsStatusATFLSN');
  });
  it('Skal teste at avvikoplysningerATFLSN rendres', () => {
    const sammenligningsgrunnlagPrStatus = sammenligningsgrunnlag('SAMMENLIGNING_AT') as SammenligningsgrunlagProp;
    const wrapper = shallowWithIntl(<AvviksopplysningerAT
      beregnetAarsinntekt={beregnetAarsinntekt}
      sammenligningsgrunnlagPrStatus={[sammenligningsgrunnlagPrStatus]}
      relevanteStatuser={{ isKombinasjonsstatus: false } as RelevanteStatuserProp}
    />, messages);
    const panel = wrapper.find('AvvikopplysningerATFLSN');
    expect(panel.length).toBe(1);
    const expectedProps = {
      beregnetAarsinntekt,
      avvikProsentAvrundet: 27.5,
      differanseBeregnet: 12100,
      relevanteStatuser: { isKombinasjonsstatus: false },
      visPanel: { visAT: true, visFL: false, visSN: false },
      sammenligningsgrunnlagSum: 330000,
    };
    expect(panel.props()).toEqual(expectedProps);
  });

  it('Skal teste tabellen rendres med feil status:SAMMENLIGNING_FL', () => {
    const sammenligningsgrunnlagPrStatus = sammenligningsgrunnlag('SAMMENLIGNING_FL') as SammenligningsgrunlagProp;
    const wrapper = shallowWithIntl(<AvviksopplysningerAT
      beregnetAarsinntekt={beregnetAarsinntekt}
      sammenligningsgrunnlagPrStatus={[sammenligningsgrunnlagPrStatus]}
      relevanteStatuser={{ isKombinasjonsstatus: false, isFrilanser: true } as RelevanteStatuserProp}
    />, messages);
    const rows = wrapper.find(FlexRow);
    expect(rows.length).toBe(0);
  });
});

import React from 'react';
import { FormattedMessage } from 'react-intl';
import Panel from 'nav-frontend-paneler';

import { shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import sammenligningType from '@fpsak-frontend/kodeverk/src/sammenligningType';
import { SammenligningsgrunlagProp } from '@fpsak-frontend/types';
import AvviksopplysningerPanel from './AvvikopplysningerPanel';
import AvviksopplysningerSN from '../selvstendigNaeringsdrivende/AvvikopplysningerSN';
import AvviksopplysningerFL from '../frilanser/AvvikopplysningerFL';
import AvviksopplysningerAT from '../arbeidstaker/AvvikopplysningerAT';
import RelevanteStatuserProp from '../../types/RelevanteStatuserTsType';
import messages from '../../../i18n/nb_NO.json';

const sammenligningsgrunnlag = (kode) => ({
  sammenligningsgrunnlagFom: '2018-09-01',
  sammenligningsgrunnlagTom: '2019-10-31',
  rapportertPrAar: 330000,
  avvikPromille: 275,
  avvikProsent: 27.5,
  sammenligningsgrunnlagType: kode,
  differanseBeregnet: 12100,
});
const relevanteStatuser = {
  isArbeidstaker: true,
  isSelvstendigNaeringsdrivende: false,
  isKombinasjonsstatus: true,
  isFrilanser: false,
  isAAP: false,
  isDagpenger: false,
  isMilitaer: false,
};
const allePerioder = [
  {
    beregningsgrunnlagPrStatusOgAndel: [
      {
        beregnetPrAar: 360000,
        aktivitetStatus: 'AT',
      }],
  }];
describe('<Avviksopplysninger>', () => {
  it('Skal teste at riktig componenter blir renderet når ATFLSN', () => {
    const sammenligningsgrunnlagPrStatus = sammenligningsgrunnlag(sammenligningType.ATFLSN) as SammenligningsgrunlagProp;
    const wrapper = shallowWithIntl(<AvviksopplysningerPanel
      relevanteStatuser={relevanteStatuser as RelevanteStatuserProp}
      sammenligningsgrunnlagPrStatus={[sammenligningsgrunnlagPrStatus]}
      allePerioder={allePerioder}
      gjelderBesteberegning={false}
    />, messages);
    const panel = wrapper.find(Panel);
    const headerTitle = panel.find(FormattedMessage).first();
    expect(headerTitle.props().id).toBe('Beregningsgrunnlag.Avviksopplysninger.ApplicationInformation');
    const avvikPanelAT = wrapper.find(AvviksopplysningerAT);
    expect(avvikPanelAT.props().sammenligningsgrunnlagPrStatus[0]).toBe(sammenligningsgrunnlagPrStatus);
    expect(wrapper.find('AvviksopplysningerFL')).toHaveLength(0);
    expect(wrapper.find('AvviksopplysningerSN')).toHaveLength(0);
  });
  it('Skal teste at riktig componenter blir renderet når AT', () => {
    const sammenligningsgrunnlagPrStatus = sammenligningsgrunnlag(sammenligningType.AT) as SammenligningsgrunlagProp;
    const wrapper = shallowWithIntl(<AvviksopplysningerPanel
      relevanteStatuser={relevanteStatuser as RelevanteStatuserProp}
      sammenligningsgrunnlagPrStatus={[sammenligningsgrunnlagPrStatus]}
      allePerioder={allePerioder}
      gjelderBesteberegning={false}
    />, messages);
    const panel = wrapper.find(Panel);
    const headerTitle = panel.find(FormattedMessage).first();
    expect(headerTitle.props().id).toBe('Beregningsgrunnlag.Avviksopplysninger.ApplicationInformation');
    const avvikPanelAT = wrapper.find(AvviksopplysningerAT);
    expect(avvikPanelAT.props().sammenligningsgrunnlagPrStatus[0]).toBe(sammenligningsgrunnlagPrStatus);
    expect(wrapper.find('AvviksopplysningerFL')).toHaveLength(0);
    expect(wrapper.find('AvviksopplysningerSN')).toHaveLength(0);
  });
  it('Skal teste at riktig componenter blir renderet når SN', () => {
    const sammenligningsgrunnlagPrStatus = sammenligningsgrunnlag(sammenligningType.SN) as SammenligningsgrunlagProp;
    relevanteStatuser.isArbeidstaker = false;
    relevanteStatuser.isSelvstendigNaeringsdrivende = true;
    const snPeriode = {
      aktivitetStatus: aktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
      næringer: [
        {
          erVarigEndret: false,
          erNyoppstartet: false,
        },
      ],
      erNyIArbeidslivet: true,
      beregnetPrAar: 0,
    };
    const perioderMedSNAndel = allePerioder;
    perioderMedSNAndel[0].beregningsgrunnlagPrStatusOgAndel[0] = snPeriode;
    const wrapper = shallowWithIntl(<AvviksopplysningerPanel
      sammenligningsgrunnlagPrStatus={[sammenligningsgrunnlagPrStatus]}
      relevanteStatuser={relevanteStatuser as RelevanteStatuserProp}
      allePerioder={perioderMedSNAndel}
      gjelderBesteberegning={false}
    />, messages);
    const panel = wrapper.find(Panel);
    const headerTitle = panel.find(FormattedMessage).first();
    expect(headerTitle.props().id).toBe('Beregningsgrunnlag.Avviksopplysninger.ApplicationInformation');
    const avvikPanelSN = wrapper.find(AvviksopplysningerSN);
    expect(avvikPanelSN.props().sammenligningsgrunnlagPrStatus[0]).toBe(sammenligningsgrunnlagPrStatus);
    expect(wrapper.find('AvviksopplysningerAT')).toHaveLength(0);
    expect(wrapper.find('AvviksopplysningerFL')).toHaveLength(0);
  });
  it('Skal teste at riktig componenter blir renderet når FL', () => {
    const sammenligningsgrunnlagPrStatus = sammenligningsgrunnlag(sammenligningType.FL) as SammenligningsgrunlagProp;
    relevanteStatuser.isArbeidstaker = false;
    relevanteStatuser.isSelvstendigNaeringsdrivende = false;
    relevanteStatuser.isFrilanser = true;
    const wrapper = shallowWithIntl(<AvviksopplysningerPanel
      relevanteStatuser={relevanteStatuser as RelevanteStatuserProp}
      sammenligningsgrunnlagPrStatus={[sammenligningsgrunnlagPrStatus]}
      allePerioder={allePerioder}
      gjelderBesteberegning={false}
    />, messages);
    const panel = wrapper.find(Panel);
    const headerTitle = panel.find(FormattedMessage).first();
    expect(headerTitle.props().id).toBe('Beregningsgrunnlag.Avviksopplysninger.ApplicationInformation');
    const avvikPanelFL = wrapper.find(AvviksopplysningerFL);
    expect(avvikPanelFL.props().sammenligningsgrunnlagPrStatus[0]).toBe(sammenligningsgrunnlagPrStatus);
    expect(wrapper.find('AvviksopplysningerAT')).toHaveLength(0);
    expect(wrapper.find('AvviksopplysningerSN')).toHaveLength(0);
  });
  it('Skal teste at riktig componenter blir renderet når isAAP', () => {
    relevanteStatuser.isArbeidstaker = false;
    relevanteStatuser.isSelvstendigNaeringsdrivende = false;
    relevanteStatuser.isFrilanser = false;
    relevanteStatuser.isAAP = true;
    const wrapper = shallowWithIntl(<AvviksopplysningerPanel
      relevanteStatuser={relevanteStatuser as RelevanteStatuserProp}
      sammenligningsgrunnlagPrStatus={[]}
      allePerioder={allePerioder}
      gjelderBesteberegning={false}
    />, messages);
    const panel = wrapper.find(Panel);
    const headerTitle = panel.find(FormattedMessage).first();
    expect(headerTitle.props().id).toBe('Beregningsgrunnlag.Avviksopplysninger.ApplicationInformation');
    const rows = wrapper.find('Row');
    expect(rows).toHaveLength(1);
    const formatedText = rows.first().find(FormattedMessage);
    expect(formatedText.first().prop('id')).toEqual('Beregningsgrunnlag.Avviksopplysninger.AAP');
    expect(wrapper.find('AvviksopplysningerAT')).toHaveLength(0);
    expect(wrapper.find('AvviksopplysningerSN')).toHaveLength(0);
    expect(wrapper.find('AvviksopplysningerFL')).toHaveLength(0);
  });
  it('Skal teste at riktig componenter blir renderet når isDagpenger', () => {
    relevanteStatuser.isArbeidstaker = false;
    relevanteStatuser.isSelvstendigNaeringsdrivende = false;
    relevanteStatuser.isFrilanser = false;
    relevanteStatuser.isAAP = false;
    relevanteStatuser.isDagpenger = true;
    const wrapper = shallowWithIntl(<AvviksopplysningerPanel
      relevanteStatuser={relevanteStatuser as RelevanteStatuserProp}
      sammenligningsgrunnlagPrStatus={[]}
      allePerioder={allePerioder}
      gjelderBesteberegning={false}
    />, messages);
    const panel = wrapper.find(Panel);
    const headerTitle = panel.find(FormattedMessage).first();
    expect(headerTitle.props().id).toBe('Beregningsgrunnlag.Avviksopplysninger.ApplicationInformation');
    const rows = wrapper.find('Row');
    expect(rows).toHaveLength(1);
    const formatedText = rows.first().find(FormattedMessage);
    expect(formatedText.first().prop('id')).toEqual('Beregningsgrunnlag.Avviksopplysninger.Dagpenger');
    expect(wrapper.find('AvviksopplysningerAT')).toHaveLength(0);
    expect(wrapper.find('AvviksopplysningerSN')).toHaveLength(0);
    expect(wrapper.find('AvviksopplysningerFL')).toHaveLength(0);
  });
  it('Skal teste at riktig componenter blir renderet når isMilitaer', () => {
    relevanteStatuser.isArbeidstaker = false;
    relevanteStatuser.isSelvstendigNaeringsdrivende = false;
    relevanteStatuser.isFrilanser = false;
    relevanteStatuser.isAAP = false;
    relevanteStatuser.isMilitaer = true;
    const wrapper = shallowWithIntl(<AvviksopplysningerPanel
      relevanteStatuser={relevanteStatuser as RelevanteStatuserProp}
      sammenligningsgrunnlagPrStatus={[]}
      allePerioder={allePerioder}
      gjelderBesteberegning={false}
    />, messages);
    const panel = wrapper.find(Panel);
    const formatedText = panel.find(FormattedMessage);
    const headerTitle = formatedText.first();
    expect(headerTitle.props().id).toBe('Beregningsgrunnlag.Avviksopplysninger.ApplicationInformation');
    expect(formatedText.last().prop('id')).toEqual('Beregningsgrunnlag.Avviksopplysninger.Miletar');
    expect(wrapper.find('AvviksopplysningerAT')).toHaveLength(0);
    expect(wrapper.find('AvviksopplysningerSN')).toHaveLength(0);
    expect(wrapper.find('AvviksopplysningerFL')).toHaveLength(0);
  });
  it('Skal teste at riktig componenter blir renderet når besteberegning', () => {
    relevanteStatuser.isArbeidstaker = false;
    relevanteStatuser.isSelvstendigNaeringsdrivende = false;
    relevanteStatuser.isFrilanser = false;
    relevanteStatuser.isAAP = false;
    relevanteStatuser.isMilitaer = false;
    const wrapper = shallowWithIntl(<AvviksopplysningerPanel
      relevanteStatuser={relevanteStatuser as RelevanteStatuserProp}
      sammenligningsgrunnlagPrStatus={[]}
      allePerioder={allePerioder}
      gjelderBesteberegning
    />, messages);
    const panel = wrapper.find(Panel);
    const formatedText = panel.find(FormattedMessage);
    const headerTitle = formatedText.first();
    expect(headerTitle.props().id).toBe('Beregningsgrunnlag.Avviksopplysninger.ApplicationInformation');
    expect(formatedText.last().prop('id')).toEqual('Beregningsgrunnlag.Avviksopplysninger.Besteberegning');
    expect(wrapper.find('AvviksopplysningerAT')).toHaveLength(0);
    expect(wrapper.find('AvviksopplysningerSN')).toHaveLength(0);
    expect(wrapper.find('AvviksopplysningerFL')).toHaveLength(0);
  });
});

import React from 'react';
import { FormattedMessage } from 'react-intl';

import { intlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { formatCurrencyNoKr } from '@fpsak-frontend/utils';

import inntektAktivitetType from '@fpsak-frontend/kodeverk/src/inntektAktivitetType';
import shallowWithIntl from '../../../i18n/intl-enzyme-test-helper-prosess-beregningsgrunnlag';
import { SammenligningsgrunnlagAOrdningenImpl } from './SammenligningsgrunnlagAOrdningen';

const inntektsgrunnlagAT = {
  måneder: [
    {
      fom: '2020-01-01',
      tom: '2020-01-31',
      inntekter: [
        {
          inntektAktivitetType: {
            kode: inntektAktivitetType.ARBEID,
            kodeverk: 'INNTEKTTYPE',
          },
          beløp: 5000,
        },
      ],
    },
    {
      fom: '2020-02-01',
      tom: '2020-02-28',
      inntekter: [
        {
          inntektAktivitetType: {
            kode: inntektAktivitetType.ARBEID,
            kodeverk: 'INNTEKTTYPE',
          },
          beløp: 5000,
        },
      ],
    },
  ],
};

const inntektsgrunnlagATFL = {
  måneder: [
    {
      fom: '2020-01-01',
      tom: '2020-01-31',
      inntekter: [
        {
          inntektAktivitetType: {
            kode: inntektAktivitetType.ARBEID,
            kodeverk: 'INNTEKTTYPE',
          },
          beløp: 5000,
        },
      ],
    },
    {
      fom: '2020-02-01',
      tom: '2020-02-28',
      inntekter: [
        {
          inntektAktivitetType: {
            kode: inntektAktivitetType.FRILANS,
            kodeverk: 'INNTEKTTYPE',
          },
          beløp: 5000,
        },
      ],
    },
  ],
};

const skjeringstidspunktDato = '2019-09-16';

describe('<SammenligningsgrunnlagFraAOrdningen>', () => {
  it('Skal se at panelet ikke rendrer ved manglende SammenligningsgrunnlagInntekt', () => {
    const wrapper = shallowWithIntl(<SammenligningsgrunnlagAOrdningenImpl
      sammenligningsGrunnlagInntekter={{}}
      skjeringstidspunktDato={skjeringstidspunktDato}
      intl={intlMock}
    />);
    const rows = wrapper.find('FlexRow');
    expect(rows).toHaveLength(0);
  });
  it('Skal se at panelet ikke rendrer ved SammenligningsgrunnlagInntekt og SN', () => {
    const wrapper = shallowWithIntl(<SammenligningsgrunnlagAOrdningenImpl
      sammenligningsGrunnlagInntekter={inntektsgrunnlagAT}
      skjeringstidspunktDato={skjeringstidspunktDato}
      intl={intlMock}
    />);
    const rows = wrapper.find('FlexRow');
    expect(rows).toHaveLength(0);
  });
  it('Skal se at panelet rendrer korrekt SammenligningsgrunnlagInntekt ved kun AT', () => {
    const wrapper = shallowWithIntl(<SammenligningsgrunnlagAOrdningenImpl
      sammenligningsGrunnlagInntekter={inntektsgrunnlagAT}
      skjeringstidspunktDato={skjeringstidspunktDato}
      intl={intlMock}
    />);

    const lesmer = wrapper.find('Lesmerpanel');
    expect(lesmer).toHaveLength(1);
    const arbeidTittel = wrapper.find(FormattedMessage).first();
    expect(arbeidTittel.props().id).toBe('Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Arbeid');
    const sumTitle = wrapper.find(FormattedMessage).at(1);
    expect(sumTitle.props().id).toBe('Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.SumTittel');
    const sumATAndeler = wrapper.find('Element').at(0);
    expect(sumATAndeler.children().at(0).text()).toBe(formatCurrencyNoKr(10000));
    const xyz = wrapper.find('FlexibleXYPlot');
    expect(xyz).toHaveLength(12);
  });

  it('Skal se at panelet rendrer korrekt SammenligningsgrunnlagInntekt ved kun AT_FL', () => {
    const wrapper = shallowWithIntl(<SammenligningsgrunnlagAOrdningenImpl
      sammenligningsGrunnlagInntekter={inntektsgrunnlagATFL}
      skjeringstidspunktDato={skjeringstidspunktDato}
      intl={intlMock}
    />);

    const lesmer = wrapper.find('Lesmerpanel');
    expect(lesmer).toHaveLength(1);
    const ArbeidTittel = wrapper.find(FormattedMessage).first();
    expect(ArbeidTittel.props().id).toBe('Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Arbeid');
    const frilansTittel = wrapper.find(FormattedMessage).at(1);
    expect(frilansTittel.props().id).toBe('Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Frilans');
    const sumTitle = wrapper.find(FormattedMessage).at(2);
    expect(sumTitle.props().id).toBe('Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.SumTittel');
    const sumATAndeler = wrapper.find('Element').at(0);
    expect(sumATAndeler.children().at(0).text()).toBe(formatCurrencyNoKr(5000));
    const sumFLAndeler = wrapper.find('Element').at(1);
    expect(sumFLAndeler.children().at(0).text()).toBe(formatCurrencyNoKr(5000));
    const xyz = wrapper.find('FlexibleXYPlot');
    expect(xyz).toHaveLength(12);
  });
});

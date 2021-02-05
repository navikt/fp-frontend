import React from 'react';

import { intlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { formatCurrencyNoKr } from '@fpsak-frontend/utils';

import { RelevanteStatuserProp } from '@fpsak-frontend/types';
import { shallow } from 'enzyme';
import { SammenligningsgrunnlagAOrdningenImpl } from './SammenligningsgrunnlagAOrdningen';

const relevanteStatuser = {
  isArbeidstaker: true,
  isFrilanser: true,
  isSelvstendigNaeringsdrivende: false,
  isKombinasjonsstatus: true,
};

const inntektsgrunnlagAT = {
  måneder: [
    {
      fom: '2020-01-01',
      tom: '2020-01-31',
      inntekter: [
        {
          aktivitetStatus: {
            kode: 'AT',
            kodeverk: 'AKTIVITET_STATUS',
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
          aktivitetStatus: {
            kode: 'AT',
            kodeverk: 'AKTIVITET_STATUS',
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
          aktivitetStatus: {
            kode: 'AT',
            kodeverk: 'AKTIVITET_STATUS',
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
          aktivitetStatus: {
            kode: 'FL',
            kodeverk: 'AKTIVITET_STATUS',
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
    const wrapper = shallow(<SammenligningsgrunnlagAOrdningenImpl
      relevanteStatuser={relevanteStatuser as RelevanteStatuserProp}
      sammenligningsGrunnlagInntekter={{}}
      skjeringstidspunktDato={skjeringstidspunktDato}
      intl={intlMock}
    />);
    const rows = wrapper.find('FlexRow');
    expect(rows).toHaveLength(0);
  });
  it('Skal se at panelet ikke rendrer ved SammenligningsgrunnlagInntekt og SN', () => {
    relevanteStatuser.isSelvstendigNaeringsdrivende = true;
    const wrapper = shallow(<SammenligningsgrunnlagAOrdningenImpl
      relevanteStatuser={relevanteStatuser as RelevanteStatuserProp}
      sammenligningsGrunnlagInntekter={inntektsgrunnlagAT}
      skjeringstidspunktDato={skjeringstidspunktDato}
      intl={intlMock}
    />);
    const rows = wrapper.find('FlexRow');
    expect(rows).toHaveLength(0);
  });
  it('Skal se at panelet rendrer korrekt SammenligningsgrunnlagInntekt ved kun AT', () => {
    relevanteStatuser.isSelvstendigNaeringsdrivende = false;
    const wrapper = shallow(<SammenligningsgrunnlagAOrdningenImpl
      relevanteStatuser={relevanteStatuser as RelevanteStatuserProp}
      sammenligningsGrunnlagInntekter={inntektsgrunnlagAT}
      skjeringstidspunktDato={skjeringstidspunktDato}
      intl={intlMock}
    />);

    const lesmer = wrapper.find('Lesmerpanel');
    expect(lesmer).toHaveLength(1);
    const underTekster = wrapper.find('Undertekst');
    expect(underTekster.at(0).children().at(0).text()).toBe('Arbeid');
    const sumTitle = wrapper.find('FormattedMessage').first();
    expect(sumTitle.props().id).toBe('Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.SumTittel');
    const sumATAndeler = wrapper.find('Element').at(0);
    expect(sumATAndeler.children().at(0).text()).toBe(formatCurrencyNoKr(10000));
    const sumFLAndeler = wrapper.find('Element').at(1);
    expect(sumFLAndeler.children().at(0).text()).toBe(formatCurrencyNoKr(0));
    const xyz = wrapper.find('FlexibleXYPlot');
    expect(xyz).toHaveLength(12);
  });

  it('Skal se at panelet rendrer korrekt SammenligningsgrunnlagInntekt ved kun AT_FL', () => {
    relevanteStatuser.isSelvstendigNaeringsdrivende = false;
    const wrapper = shallow(<SammenligningsgrunnlagAOrdningenImpl
      relevanteStatuser={relevanteStatuser as RelevanteStatuserProp}
      sammenligningsGrunnlagInntekter={inntektsgrunnlagATFL}
      skjeringstidspunktDato={skjeringstidspunktDato}
      intl={intlMock}
    />);

    const lesmer = wrapper.find('Lesmerpanel');
    expect(lesmer).toHaveLength(1);
    const underTekster = wrapper.find('Undertekst');
    expect(underTekster.at(0).children().at(0).text()).toBe('Arbeid');
    const sumTitle = wrapper.find('FormattedMessage').first();
    expect(sumTitle.props().id).toBe('Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.SumTittel');
    const sumATAndeler = wrapper.find('Element').at(0);
    expect(sumATAndeler.children().at(0).text()).toBe(formatCurrencyNoKr(5000));
    const sumFLAndeler = wrapper.find('Element').at(1);
    expect(sumFLAndeler.children().at(0).text()).toBe(formatCurrencyNoKr(5000));
    const xyz = wrapper.find('FlexibleXYPlot');
    expect(xyz).toHaveLength(12);
  });
});

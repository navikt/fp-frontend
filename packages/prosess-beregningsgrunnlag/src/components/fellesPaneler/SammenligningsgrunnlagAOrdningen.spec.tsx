import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Normaltekst } from 'nav-frontend-typografi';

import { getIntlMock, shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { formatCurrencyNoKr } from '@fpsak-frontend/utils';

import inntektAktivitetType from '@fpsak-frontend/kodeverk/src/inntektAktivitetType';
import messages from '../../../i18n/nb_NO.json';
import { SammenligningsgrunnlagAOrdningenImpl } from './SammenligningsgrunnlagAOrdningen';

const intlMock = getIntlMock(messages);

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
    />, messages);
    const rows = wrapper.find('FlexRow');
    expect(rows).toHaveLength(0);
  });
  it('Skal se at panelet ikke rendrer ved SammenligningsgrunnlagInntekt og SN', () => {
    const wrapper = shallowWithIntl(<SammenligningsgrunnlagAOrdningenImpl
      sammenligningsGrunnlagInntekter={inntektsgrunnlagAT}
      skjeringstidspunktDato={skjeringstidspunktDato}
      intl={intlMock}
    />, messages);
    const rows = wrapper.find('FlexRow');
    expect(rows).toHaveLength(0);
  });
  it('Skal se at panelet rendrer korrekt SammenligningsgrunnlagInntekt ved kun AT', () => {
    const wrapper = shallowWithIntl(<SammenligningsgrunnlagAOrdningenImpl
      sammenligningsGrunnlagInntekter={inntektsgrunnlagAT}
      skjeringstidspunktDato={skjeringstidspunktDato}
      intl={intlMock}
    />, messages);
    const lesmer = wrapper.find('Lesmerpanel');
    expect(lesmer).toHaveLength(1);
    const sumTitle = wrapper.find(FormattedMessage).first();
    expect(sumTitle.props().id).toBe('Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.SumTittel');
    const arbeidTittel = wrapper.find(FormattedMessage).last();
    expect(arbeidTittel.props().id).toBe('Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Arbeid');
    const sumATAndeler = wrapper.find(Normaltekst).last();
    expect(sumATAndeler.children().at(0).text()).toBe(formatCurrencyNoKr(10000));
  });

  it('Skal se at panelet rendrer korrekt SammenligningsgrunnlagInntekt ved kun AT_FL', () => {
    const wrapper = shallowWithIntl(<SammenligningsgrunnlagAOrdningenImpl
      sammenligningsGrunnlagInntekter={inntektsgrunnlagATFL}
      skjeringstidspunktDato={skjeringstidspunktDato}
      intl={intlMock}
    />, messages);
    const lesmer = wrapper.find('Lesmerpanel');
    expect(lesmer).toHaveLength(1);
    const sumTitle = wrapper.find(FormattedMessage).first();
    expect(sumTitle.props().id).toBe('Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.SumTittel');
    const ArbeidTittel = wrapper.find(FormattedMessage).at(1);
    expect(ArbeidTittel.props().id).toBe('Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Arbeid');
    const frilansTittel = wrapper.find(FormattedMessage).at(2);
    expect(frilansTittel.props().id).toBe('Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Frilans');
    const sumATAndeler = wrapper.find(Normaltekst).at(2);
    expect(sumATAndeler.children().at(0).text()).toBe(formatCurrencyNoKr(5000));
    const sumFLAndeler = wrapper.find(Normaltekst).at(4);
    expect(sumFLAndeler.children().at(0).text()).toBe(formatCurrencyNoKr(5000));
  });
});

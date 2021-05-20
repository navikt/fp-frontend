import { shallow } from 'enzyme';
import React from 'react';
import {
  BeregningsgrunnlagAndel,
  BeregningsgrunnlagPeriodeProp,
  BesteberegningInntekt,
  Månedsgrunnlag,
} from '@fpsak-frontend/types';
import { Row } from 'nav-frontend-grid';
import { Normaltekst } from 'nav-frontend-typografi';
import { FormattedMessage } from 'react-intl';
import BesteberegningResultatGrunnlagPanel from './BesteberegningResultatGrunnlagPanel';

const lagAndel = (beregnet: number, overstyrt: number): BeregningsgrunnlagAndel => ({
  beregnetPrAar: beregnet,
  overstyrtPrAar: overstyrt,
} as BeregningsgrunnlagAndel);

const lagPeriode = (andeler: BeregningsgrunnlagAndel[]) => ({
  beregningsgrunnlagPrStatusOgAndel: andeler,
} as BeregningsgrunnlagPeriodeProp);

const lagMåned = (inntekter: BesteberegningInntekt[]):Månedsgrunnlag => ({
  inntekter,
} as Månedsgrunnlag);

const lagInntekt = (inntekt: number): BesteberegningInntekt => ({
  inntekt,
} as BesteberegningInntekt);

describe('<BesteberegningResultatGrunnlagPanel>', () => {
  it('Skal bruke beregning etter første ledd uten overstyring', () => {
    const måneder = [];
    måneder.push(lagMåned([lagInntekt(500)]));
    måneder.push(lagMåned([lagInntekt(500)]));
    måneder.push(lagMåned([lagInntekt(500)]));
    måneder.push(lagMåned([lagInntekt(500)]));
    måneder.push(lagMåned([lagInntekt(500)]));
    måneder.push(lagMåned([lagInntekt(500)]));
    const periode = lagPeriode([lagAndel(7000, null)]);
    const wrapper = shallow(<BesteberegningResultatGrunnlagPanel
      periode={periode}
      besteMåneder={måneder}
    />);
    const rows = wrapper.find(Row);
    const tekst = wrapper.find(Normaltekst);
    expect(rows).toHaveLength(2);
    expect(tekst).toHaveLength(4);
    expect(tekst.at(1).childAt(0).text()).toEqual('7 000');
    expect(tekst.at(2).childAt(0).text()).toEqual('6 000');
    const formMessage = tekst.at(3).find(FormattedMessage);
    expect(formMessage.prop('id')).toEqual('ResultatGrunnlag.Kap8GirBesteBeregning');
  });
  it('Skal bruke beregning etter første ledd med overstyring', () => {
    const måneder = [];
    måneder.push(lagMåned([lagInntekt(500)]));
    måneder.push(lagMåned([lagInntekt(500)]));
    måneder.push(lagMåned([lagInntekt(500)]));
    måneder.push(lagMåned([lagInntekt(500)]));
    måneder.push(lagMåned([lagInntekt(500)]));
    måneder.push(lagMåned([lagInntekt(500)]));
    const periode = lagPeriode([lagAndel(7000, 10000)]);
    const wrapper = shallow(<BesteberegningResultatGrunnlagPanel
      periode={periode}
      besteMåneder={måneder}
    />);
    const rows = wrapper.find(Row);
    const tekst = wrapper.find(Normaltekst);
    expect(rows).toHaveLength(2);
    expect(tekst).toHaveLength(4);
    expect(tekst.at(1).childAt(0).text()).toEqual('10 000');
    expect(tekst.at(2).childAt(0).text()).toEqual('6 000');
    const formMessage = tekst.at(3).find(FormattedMessage);
    expect(formMessage.prop('id')).toEqual('ResultatGrunnlag.Kap8GirBesteBeregning');
  });
  it('Skal bruke beregning etter tredje ledd med overstyring', () => {
    const måneder = [];
    måneder.push(lagMåned([lagInntekt(5000)]));
    måneder.push(lagMåned([lagInntekt(5000)]));
    måneder.push(lagMåned([lagInntekt(5000)]));
    måneder.push(lagMåned([lagInntekt(5000)]));
    måneder.push(lagMåned([lagInntekt(5000)]));
    måneder.push(lagMåned([lagInntekt(5000)]));
    const periode = lagPeriode([lagAndel(7000, 8000)]);
    const wrapper = shallow(<BesteberegningResultatGrunnlagPanel
      periode={periode}
      besteMåneder={måneder}
    />);
    const rows = wrapper.find(Row);
    const tekst = wrapper.find(Normaltekst);
    expect(rows).toHaveLength(2);
    expect(tekst).toHaveLength(4);
    expect(tekst.at(1).childAt(0).text()).toEqual('8 000');
    expect(tekst.at(2).childAt(0).text()).toEqual('60 000');
    const formMessage = tekst.at(3).find(FormattedMessage);
    expect(formMessage.prop('id')).toEqual('ResultatGrunnlag.Kap1473GirBesteBeregning');
  });
});

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import faktaOmBeregningTilfelle from '@fpsak-frontend/kodeverk/src/faktaOmBeregningTilfelle';
import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import inntektskategorier from '@fpsak-frontend/kodeverk/src/inntektskategorier';
import NyoppstartetFLForm, { erNyoppstartetFLField } from './NyoppstartetFLForm';
import { InntektTransformed } from '../../andelFieldValueTs';

describe('<NyoppstartetFLForm>', () => {
  it('skal teste at korrekt antall radioknapper vises med korrekte props', () => {
    const wrapper = shallow(<NyoppstartetFLForm
      readOnly={false}
      isAksjonspunktClosed={false}
    />);
    const radios = wrapper.find('RadioOption');
    expect(radios).to.have.length(2);
    expect(radios.last().prop('disabled')).is.eql(false);
  });

  const faktaOmBeregning = {
    faktaOmBeregningTilfeller: [{ kode: faktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL, kodeverk: 'test' }],
    andelerForFaktaOmBeregning: [],
  };

  it('skal teste at transformValues gir korrekt output', () => {
    const values = { };
    values[erNyoppstartetFLField] = true;
    const transformedObject = NyoppstartetFLForm.transformValues(values, null, faktaOmBeregning, []);
    expect(transformedObject.vurderNyoppstartetFL.erNyoppstartetFL).to.equal(true);
  });

  const frilansAndelInntekt = {
    andelsnr: 1,
    fastsattBelop: 10000,
    inntektskategori: inntektskategorier.FRILANSER,
    nyAndel: false,
    lagtTilAvSaksbehandler: false,
    aktivitetStatus: aktivitetStatus.FRILANSER,
  };

  const arbeidstakerInntekt = {
    andelsnr: 2,
    fastsattBelop: 20000,
    inntektskategori: inntektskategorier.ARBEIDSTAKER,
    nyAndel: false,
    lagtTilAvSaksbehandler: false,
    aktivitetStatus: aktivitetStatus.ARBEIDSTAKER,
  };

  it('skal teste transform values med inntekter', () => {
    const values = { };
    values[erNyoppstartetFLField] = true;
    const inntekterPrMnd = [
      frilansAndelInntekt as InntektTransformed,
      arbeidstakerInntekt as InntektTransformed,
    ];
    const fastsatteAndeler = [];
    const transformedObject = NyoppstartetFLForm.transformValues(values, inntekterPrMnd, faktaOmBeregning, fastsatteAndeler);
    expect(transformedObject.vurderNyoppstartetFL.erNyoppstartetFL).to.equal(true);
    expect(transformedObject.faktaOmBeregningTilfeller.length).to.equal(2);
    expect(transformedObject.faktaOmBeregningTilfeller.includes(faktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL)).to.equal(true);
    expect(transformedObject.faktaOmBeregningTilfeller.includes(faktaOmBeregningTilfelle.FASTSETT_MAANEDSINNTEKT_FL)).to.equal(true);
    expect(transformedObject.fastsettMaanedsinntektFL.maanedsinntekt).to.equal(10000);
    expect(fastsatteAndeler.length).to.equal(1);
  });

  it('skal teste at buildInitialValues gir korrekt output med gyldig beregningsgrunnlag', () => {
    const gyldigBG = {
      beregningsgrunnlagPeriode: [
        {
          beregningsgrunnlagPrStatusOgAndel: [
            {
              aktivitetStatus: {
                kode: aktivitetStatus.FRILANSER,
                kodeverk: 'test',
              },
              erNyoppstartet: true,
            },
          ],
        },
      ],
    };
    const initialValues = NyoppstartetFLForm.buildInitialValues(gyldigBG);
    expect(initialValues[erNyoppstartetFLField]).to.equal(true);
  });
});

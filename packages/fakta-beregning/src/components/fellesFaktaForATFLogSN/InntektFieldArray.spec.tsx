import React from 'react';
import { intlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import faktaOmBeregningTilfelle from '@fpsak-frontend/kodeverk/src/faktaOmBeregningTilfelle';
import aktivitetStatuser from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { isRequiredMessage } from '@fpsak-frontend/utils';
import { metaMock, MockFieldsWithContent } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { Table } from '@fpsak-frontend/shared-components';
import { FaktaOmBeregning } from '@fpsak-frontend/types';
import Beregningsgrunnlag from '@fpsak-frontend/types/src/beregningsgrunnlagTsType';
import { lagStateMedAksjonspunkterOgBeregningsgrunnlag } from '../beregning-test-helper';
import { besteberegningField } from './besteberegningFodendeKvinne/VurderBesteberegningForm';
import { AndelRow } from './InntektFieldArrayRow';
import SummaryRow from './SummaryRow';
import { InntektFieldArrayImpl, leggTilDagpengerOmBesteberegning, mapStateToProps } from './InntektFieldArray';
import { formNameVurderFaktaBeregning } from '../BeregningFormUtils';
import shallowWithIntl from '../../../i18n/intl-enzyme-test-helper-fakta-beregning';

const aksjonspunkter = [
  {
    definisjon: { kode: aksjonspunktCodes.VURDER_FAKTA_FOR_ATFL_SN },
    status: { kode: 'OPPR' },
  },
];

const behandlingId = 1000051;
const behandlingVersjon = 1;

const alleKodeverk = {
  [kodeverkTyper.AKTIVITET_STATUS]: [
    {
      kode: aktivitetStatuser.MILITAER_ELLER_SIVIL,
      navn: 'Militær og siviltjeneste',
      kodeverk: 'test',
    }, {
      kode: aktivitetStatuser.ARBEIDSTAKER,
      navn: 'Arbeidstaker',
      kodeverk: 'test',
    }, {
      kode: aktivitetStatuser.FRILANSER,
      navn: 'Frilanser',
      kodeverk: 'test',
    },
    {
      kode: aktivitetStatuser.DAGPENGER,
      navn: 'Dagpenger',
      kodeverk: 'test',
    },
    {
      kode: aktivitetStatuser.SELVSTENDIG_NAERINGSDRIVENDE,
      navn: 'Selvstendig næringsdrivende',
      kodeverk: 'test',
    },
    {
      kode: aktivitetStatuser.BRUKERS_ANDEL,
      navn: 'Brukers andel',
      kodeverk: 'test',
    },
  ],
};

const andelField = {
  nyAndel: false,
  andel: 'Sopra Steria AS (233647823)',
  andelsnr: 1,
  fastsattBelop: '0',
  lagtTilAvSaksbehandler: false,
  inntektskategori: 'ARBEIDSTAKER',
  arbeidsgiverId: '233647823',
  arbeidsperiodeFom: '01.01.2018',
  arbeidsperiodeTom: null,
  refusjonskrav: '10 000',
};

const ownProps = {
  behandlingId, behandlingVersjon, alleKodeverk, isAksjonspunktClosed: false, skalKunneLeggeTilDagpengerManuelt: false,
};

describe('<InntektFieldArray>', () => {
  it('skal mappe state til props for ikkje kun ytelse', () => {
    const fields = new MockFieldsWithContent('fieldArrayName', [andelField]);

    const faktaOmBeregning = {
      faktaOmBeregningTilfeller: [{ kode: faktaOmBeregningTilfelle.VURDER_BESTEBEREGNING }],
    };
    const bg = {
      beregningsgrunnlagPeriode: [
        {},
      ],
      faktaOmBeregning,
    };
    const state = lagStateMedAksjonspunkterOgBeregningsgrunnlag(aksjonspunkter, bg, formNameVurderFaktaBeregning);
    const props = mapStateToProps(state, { ...ownProps, beregningsgrunnlag: bg, fields });
    expect(props.isBeregningFormDirty).toEqual(false);
    expect(props.erKunYtelse).toEqual(false);
  });

  it('skal mappe state til props for kun ytelse', () => {
    const fields = new MockFieldsWithContent('fieldArrayName', [andelField]);

    const faktaOmBeregning = {
      faktaOmBeregningTilfeller: [{ kode: faktaOmBeregningTilfelle.FASTSETT_BG_KUN_YTELSE, kodeverk: 'test' }],
      andelerForFaktaOmBeregning: [],
    };
    const bg = {
      beregningsgrunnlagPeriode: [
        {},
      ],
      faktaOmBeregning,
    };
    const state = lagStateMedAksjonspunkterOgBeregningsgrunnlag(aksjonspunkter, bg, formNameVurderFaktaBeregning);
    const props = mapStateToProps(state, { ...ownProps, beregningsgrunnlag: bg, fields });
    expect(props.erKunYtelse).toEqual(true);
  });

  const faktaOmBeregning = {
    faktaOmBeregningTilfeller: [{ kode: faktaOmBeregningTilfelle.VURDER_BESTEBEREGNING, kodeverk: 'test' }],
    andelerForFaktaOmBeregning: [],
  } as FaktaOmBeregning;
  const initial = {
    fieldArrayName: null,
  };
  initial.fieldArrayName = [andelField];
  initial[besteberegningField] = true;
  const bg = {
    beregningsgrunnlagPeriode: [
      {},
    ],
    faktaOmBeregning,
  };
  const state = lagStateMedAksjonspunkterOgBeregningsgrunnlag(aksjonspunkter, bg, formNameVurderFaktaBeregning, initial, initial);
  const props = mapStateToProps(state, { ...ownProps, beregningsgrunnlag: bg, fields: new MockFieldsWithContent('fieldArrayName', [andelField]) });

  it('skal vise komponent', () => {
    const fields = new MockFieldsWithContent('fieldArrayName', [andelField]);
    const wrapper = shallowWithIntl(<InntektFieldArrayImpl
      intl={intlMock}
      fields={fields}
      meta={metaMock}
      readOnly={false}
      beregningsgrunnlag={bg}
      {...ownProps}
      {...props}
    />);
    const table = wrapper.find(Table);
    expect(table.length).toEqual(1);
    const andelRows = table.find(AndelRow);
    expect(andelRows.length).toEqual(1);
    const summaryRow = table.find(SummaryRow);
    expect(summaryRow.length).toEqual(1);
  });

  it('skal ikkje vise SN om den ikkje skal redigeres', () => {
    const SNandel = {
      nyAndel: false,
      andel: 'Selvstendig næringsdrivende',
      andelsnr: 2,
      fastsattBelop: null,
      lagtTilAvSaksbehandler: false,
      aktivitetStatus: aktivitetStatuser.SELVSTENDIG_NAERINGSDRIVENDE,
    };
    const fields = new MockFieldsWithContent('fieldArrayName', [andelField, SNandel]);
    const wrapper = shallowWithIntl(<InntektFieldArrayImpl
      intl={intlMock}
      fields={fields}
      meta={metaMock}
      readOnly={false}
      beregningsgrunnlag={bg}
      {...ownProps}
      {...props}
    />);
    const table = wrapper.find(Table);
    expect(table.length).toEqual(1);
    const andelRows = table.find(AndelRow);
    expect(andelRows.length).toEqual(2);
    const summaryRow = table.find(SummaryRow);
    expect(summaryRow.length).toEqual(1);
  });

  it('skal vise SN om den skal redigeres', () => {
    const SNandel = {
      nyAndel: false,
      andel: 'Selvstendig næringsdrivende',
      andelsnr: 2,
      fastsattBelop: null,
      lagtTilAvSaksbehandler: false,
      aktivitetStatus: aktivitetStatuser.SELVSTENDIG_NAERINGSDRIVENDE,
    };
    const fields = new MockFieldsWithContent('fieldArrayName', [andelField, SNandel]);
    const wrapper = shallowWithIntl(<InntektFieldArrayImpl
      intl={intlMock}
      fields={fields}
      meta={metaMock}
      readOnly={false}
      beregningsgrunnlag={bg}
      {...props}
      {...ownProps}
    />);
    const table = wrapper.find(Table);
    expect(table.length).toEqual(1);
    const andelRows = table.find(AndelRow);
    expect(andelRows.length).toEqual(2);
    const summaryRow = table.find(SummaryRow);
    expect(summaryRow.length).toEqual(1);
  });

  it('skal legge til dagpengeandel', () => {
    const newbg = {
      beregningsgrunnlagPeriode: [],
      faktaOmBeregning,
    } as Beregningsgrunnlag;
    const fields = new MockFieldsWithContent('fieldArrayName', [andelField]);
    const values = { [besteberegningField]: true };
    const newstate = lagStateMedAksjonspunkterOgBeregningsgrunnlag(aksjonspunkter, newbg, formNameVurderFaktaBeregning, values);
    const newprops = mapStateToProps(newstate, { ...ownProps, beregningsgrunnlag: newbg, fields });
    const wrapper = shallowWithIntl(<InntektFieldArrayImpl
      intl={intlMock}
      fields={fields}
      meta={metaMock}
      readOnly={false}
      beregningsgrunnlag={newbg}
      {...ownProps}
      {...newprops}
    />);
    const table = wrapper.find(Table);
    expect(table.length).toEqual(1);
    const andelRows = table.find(AndelRow);
    expect(andelRows.length).toEqual(2);
    const summaryRow = table.find(SummaryRow);
    expect(summaryRow.length).toEqual(1);
  });

  it('skal fjerne dagpengeandel om dagpenger og lagt til manuelt', () => {
    const newfields = new MockFieldsWithContent('fieldArrayName', [{ aktivitetStatus: aktivitetStatuser.DAGPENGER, lagtTilAvSaksbehandler: true }]);
    leggTilDagpengerOmBesteberegning(newfields, false, alleKodeverk[kodeverkTyper.AKTIVITET_STATUS], false);
    expect(newfields.length).toBe(0);
  });

  it('skal ikkje fjerne dagpengeandel om dagpenger og ikkje lagt til manuelt', () => {
    const newfields = new MockFieldsWithContent('fieldArrayName', [{ aktivitetStatus: aktivitetStatuser.DAGPENGER, lagtTilAvSaksbehandler: false }]);
    leggTilDagpengerOmBesteberegning(newfields, false, alleKodeverk[kodeverkTyper.AKTIVITET_STATUS], false);
    expect(newfields.length).toBe(1);
  });

  it('skal validere eksisterende andeler uten errors', () => {
    const skalFastsetteInntekt = () => true;
    const values = [];
    const andel2 = {
      fastsattBelop: '10 000',
      aktivitetstatus: 'ARBEIDSTAKER',
      andel: 'Visningsnavn for virksomhet',
      inntektskategori: 'ARBEIDSTAKER',
    };
    values.push(andel2);
    const errors = InntektFieldArrayImpl.validate(values, false, skalFastsetteInntekt);
    expect(errors).toBe(null);
  });

  it('skal returnerer errors for fastsattbeløp når ikkje oppgitt', () => {
    const skalFastsetteInntekt = () => true;
    const values = [];
    const andel2 = {
      refusjonskrav: '10 000',
      fastsattBelop: '',
      aktivitetstatus: 'ARBEIDSTAKER',
      andel: 'Visningsnavn for virksomhet',
      inntektskategori: 'ARBEIDSTAKER',
    };
    values.push(andel2);
    const errors = InntektFieldArrayImpl.validate(values, false, skalFastsetteInntekt);
    expect(errors[0].fastsattBelop).toBe(isRequiredMessage());
  });

  it('skal ikkje returnerer errors når man ikkje skal redigere inntekt', () => {
    const skalFastsetteInntekt = () => false;
    const values = [];
    const andel2 = {
      refusjonskrav: '10 000',
      fastsattBelop: '',
      aktivitetstatus: 'ARBEIDSTAKER',
      andel: 'Visningsnavn for virksomhet',
      inntektskategori: 'ARBEIDSTAKER',
    };
    values.push(andel2);
    const errors = InntektFieldArrayImpl.validate(values, false, skalFastsetteInntekt);
    expect(errors).toBe(null);
  });

  it('skal gi error om inntektkategori ikkje er oppgitt', () => {
    const skalFastsetteInntekt = () => true;
    const values = [];
    const andel2 = {
      refusjonskrav: '10 000',
      fastsattBelop: '100 000',
      aktivitetstatus: 'ARBEIDSTAKER',
      andel: 'Visningsnavn for virksomhet',
      inntektskategori: '',
    };
    values.push(andel2);
    const errors = InntektFieldArrayImpl.validate(values, false, skalFastsetteInntekt);
    expect(errors[0].inntektskategori).toBe(isRequiredMessage());
  });

  it('skal gi error om andel ikkje er valgt for nye andeler', () => {
    const skalFastsetteInntekt = () => true;
    const values = [];
    const andel2 = {
      refusjonskrav: '10 000',
      fastsattBelop: '100 000',
      aktivitetstatus: 'ARBEIDSTAKER',
      andel: '',
      inntektskategori: 'ARBEIDSTAKER',
      nyAndel: true,
    };
    values.push(andel2);
    const errors = InntektFieldArrayImpl.validate(values, false, skalFastsetteInntekt);
    expect(errors[0].andel).toBe(isRequiredMessage());
  });

  it('skal ikkje bygge initial values om ingen andeler', () => {
    const iv = InntektFieldArrayImpl.buildInitialValues([], {}, {});
    expect(Object.keys(iv)).toHaveLength(0);
  });
});

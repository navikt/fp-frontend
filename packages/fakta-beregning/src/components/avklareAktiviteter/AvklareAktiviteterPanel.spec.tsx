import React from 'react';
import { expect } from 'chai';

import { intlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import opptjeningAktivitetType from '@fpsak-frontend/kodeverk/src/opptjeningAktivitetType';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { AksjonspunktHelpTextTemp, OverstyringKnapp } from '@fpsak-frontend/shared-components';

import sinon from 'sinon';
import { lagStateMedAksjonspunkterOgBeregningsgrunnlag } from '../beregning-test-helper';
import shallowWithIntl from '../../../i18n/intl-enzyme-test-helper-fakta-beregning';
import {
  AvklareAktiviteterPanelImpl,
  BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME,
  buildInitialValuesAvklarAktiviteter,
  erAvklartAktivitetEndret,
  MANUELL_OVERSTYRING_FIELD,
  transformValues,
} from './AvklareAktiviteterPanel';
import VurderAktiviteterPanel from './VurderAktiviteterPanel';
import { formNameAvklarAktiviteter } from '../BeregningFormUtils';

const {
  AVKLAR_AKTIVITETER,
  OVERSTYRING_AV_BEREGNINGSAKTIVITETER,
} = aksjonspunktCodes;

const behandlingProps = {
  behandlingId: 1000051,
  behandlingVersjon: 1,
};

const alleKodeverk = {
  [kodeverkTyper.OPPTJENING_AKTIVITET_TYPE]: [{
    kode: opptjeningAktivitetType.ARBEID,
    kodeverk: 'test',
    navn: 'Arbeid',
  }, {
    kode: opptjeningAktivitetType.FRILANS,
    kodeverk: 'test',
    navn: 'Frilans',
  }, {
    kode: opptjeningAktivitetType.DAGPENGER,
    kodeverk: 'test',
    navn: 'Dagpenger',
  }, {
    kode: opptjeningAktivitetType.NARING,
    kodeverk: 'test',
    navn: 'Næring',
  }],
};

const apsAvklarAktiviteter = [{
  definisjon: { kode: AVKLAR_AKTIVITETER, kodeverk: 'test' }, status: { kode: 'OPPR', kodeverk: 'test' }, erAktivt: true, kanLoses: true,
}];

const lagStateMedAvklarAktitiveter = (avklarAktiviteter, values = {}, initial = {}, aksjonspunkter = apsAvklarAktiviteter) => {
  const faktaOmBeregning = {
    avklarAktiviteter,
  };
  return lagStateMedAksjonspunkterOgBeregningsgrunnlag(aksjonspunkter, { faktaOmBeregning }, formNameAvklarAktiviteter, values, initial);
};

const aktivitet1 = {
  arbeidsgiverNavn: 'Arbeidsgiveren',
  arbeidsgiverId: '384723894723',
  fom: '2019-01-01',
  tom: null,
  skalBrukes: null,
  arbeidsforholdType: { kode: 'ARBEID', navn: 'Arbeid', kodeverk: 'OPPTJENING_AKTIVITET_TYPE' },
};

const aktivitet2 = {
  arbeidsgiverNavn: 'Arbeidsgiveren2',
  arbeidsgiverId: '334534623342',
  arbeidsforholdId: 'efj8343f34f',
  fom: '2019-01-01',
  tom: '2019-02-02',
  skalBrukes: true,
  arbeidsforholdType: { kode: 'ARBEID', navn: 'Arbeid', kodeverk: 'OPPTJENING_AKTIVITET_TYPE' },
};

const aktivitet3 = {
  arbeidsgiverNavn: 'Arbeidsgiveren3',
  aktørIdString: '324234234234',
  arbeidsgiverId: '1960-01-01',
  arbeidsforholdId: 'efj8343f34f',
  fom: '2019-01-01',
  tom: '2019-02-02',
  skalBrukes: false,
  arbeidsforholdType: { kode: 'ARBEID', navn: 'Arbeid', kodeverk: 'OPPTJENING_AKTIVITET_TYPE' },
};

const aktivitetAAP = {
  arbeidsgiverNavn: null,
  arbeidsgiverId: null,
  arbeidsforholdType: { kode: 'AAP', navn: 'Arbeidsavklaringspenger', kodeverk: 'OPPTJENING_AKTIVITET_TYPE' },
  fom: '2019-01-01',
  tom: '2020-02-02',
  skalBrukes: null,
};

const aktiviteter = [
  aktivitet1,
  aktivitet2,
  aktivitet3,
  aktivitetAAP,
];

const id1 = '3847238947232019-01-01';
const id2 = '334534623342efj8343f34f2019-01-01';
const id3 = '1960-01-01efj8343f34f2019-01-01';
const idAAP = 'AAP2019-01-01';

describe('<AvklareAktiviteterPanel>', () => {
  it('skal vise VurderAktiviteterPanel panel', () => {
    const avklarAktiviteter = {
      aktiviteterTomDatoMapping: [
        { tom: '2019-02-02', aktiviteter },
      ],
    };
    const aksjonspunkter = [{
      definisjon: { kode: AVKLAR_AKTIVITETER, kodeverk: 'test' },
      status: { kode: 'OPPR', kodeverk: 'test' },
      kanLoses: true,
      erAktivt: true,
    }];
    const wrapper = shallowWithIntl(<AvklareAktiviteterPanelImpl
      {...reduxFormPropsMock}
      intl={intlMock}
      readOnly={false}
      isAksjonspunktClosed={false}
      hasBegrunnelse={false}
      submittable
      helpText={[]}
      harAndreAksjonspunkterIPanel={false}
      kanOverstyre={false}
      aksjonspunkter={aksjonspunkter}
      erOverstyrt={false}
      behandlingId={1}
      behandlingVersjon={1}
      submitCallback={sinon.spy()}
      onSubmit={() => undefined}
      erBgOverstyrt={false}
      behandlingFormPrefix="test"
      alleKodeverk={alleKodeverk}
      reduxFormInitialize={() => {}}
      beregningsgrunnlag={{ faktaOmBeregning: { avklarAktiviteter, andelerForFaktaOmBeregning: [] } }}
      {...behandlingProps}
    />);
    const vurderAktivitetPanel = wrapper.find(VurderAktiviteterPanel);
    expect(vurderAktivitetPanel).has.length(1);
  });

  it('skal ikkje vise VurderAktiviteterPanel panel', () => {
    const avklarAktiviteter = {
      aktiviteterTomDatoMapping: null,
    };
    const aksjonspunkter = [];
    const wrapper = shallowWithIntl(<AvklareAktiviteterPanelImpl
      {...reduxFormPropsMock}
      intl={intlMock}
      readOnly={false}
      isAksjonspunktClosed={false}
      hasBegrunnelse={false}
      submittable
      helpText={[]}
      harAndreAksjonspunkterIPanel={false}
      kanOverstyre={false}
      aksjonspunkter={aksjonspunkter}
      erOverstyrt={false}
      erBgOverstyrt={false}
      behandlingFormPrefix="test"
      alleKodeverk={alleKodeverk}
      behandlingId={1}
      behandlingVersjon={1}
      submitCallback={sinon.spy()}
      onSubmit={() => undefined}
      beregningsgrunnlag={{ faktaOmBeregning: { avklarAktiviteter, andelerForFaktaOmBeregning: [] } }}
      reduxFormInitialize={() => {}}
      {...behandlingProps}
    />);
    const radio = wrapper.find(VurderAktiviteterPanel);
    expect(radio).has.length(0);
  });

  it('skal vise overstyringsknapp', () => {
    const avklarAktiviteter = {
      aktiviteterTomDatoMapping: [
        { tom: '2019-02-02', aktiviteter },
      ],
    };
    const aksjonspunkter = [{
      definisjon: { kode: OVERSTYRING_AV_BEREGNINGSAKTIVITETER, kodeverk: 'test' }, status: { kode: 'OPPR', kodeverk: 'test' }, erAktivt: true, kanLoses: true,
    }];

    const wrapper = shallowWithIntl(<AvklareAktiviteterPanelImpl
      {...reduxFormPropsMock}
      intl={intlMock}
      readOnly={false}
      isAksjonspunktClosed={false}
      hasBegrunnelse={false}
      submittable
      helpText={[]}
      harAndreAksjonspunkterIPanel={false}
      kanOverstyre
      aksjonspunkter={aksjonspunkter}
      erOverstyrt={false}
      erBgOverstyrt={false}
      behandlingFormPrefix="test"
      alleKodeverk={alleKodeverk}
      behandlingId={1}
      behandlingVersjon={1}
      submitCallback={sinon.spy()}
      onSubmit={() => undefined}
      beregningsgrunnlag={{ faktaOmBeregning: { avklarAktiviteter, andelerForFaktaOmBeregning: [] } }}
      reduxFormInitialize={() => {}}
      {...behandlingProps}
    />);
    expect(wrapper.find(OverstyringKnapp)).has.length(1);
  });

  it('skal ikkje vise AksjonspunktHelpText ved overstyring', () => {
    const avklarAktiviteter = {
      aktiviteterTomDatoMapping: [
        { tom: '2019-02-02', aktiviteter },
      ],
    };
    const aksjonspunkter = [{
      definisjon: { kode: OVERSTYRING_AV_BEREGNINGSAKTIVITETER, kodeverk: 'test' }, status: { kode: 'OPPR', kodeverk: 'test' }, erAktivt: true, kanLoses: true,
    }];

    const wrapper = shallowWithIntl(<AvklareAktiviteterPanelImpl
      {...reduxFormPropsMock}
      intl={intlMock}
      readOnly={false}
      isAksjonspunktClosed={false}
      beregningsgrunnlag={{ faktaOmBeregning: { avklarAktiviteter, andelerForFaktaOmBeregning: [] } }}
      hasBegrunnelse={false}
      submittable
      helpText={[]}
      harAndreAksjonspunkterIPanel={false}
      kanOverstyre
      behandlingId={1}
      behandlingVersjon={1}
      submitCallback={sinon.spy()}
      onSubmit={() => undefined}
      aksjonspunkter={aksjonspunkter}
      erOverstyrt
      erBgOverstyrt={false}
      behandlingFormPrefix="test"
      alleKodeverk={alleKodeverk}
      reduxFormInitialize={() => {}}
      {...behandlingProps}
    />);
    const helptext = wrapper.find(AksjonspunktHelpTextTemp);
    expect(helptext).has.length(0);
  });

  it('skal teste at initial values blir bygget', () => {
    const avklarAktiviteter = {
      aktiviteterTomDatoMapping: [
        { tom: '2019-02-02', aktiviteter },
      ],
    };

    const initialValues = buildInitialValuesAvklarAktiviteter({
      alleKodeverk,
      aksjonspunkter: apsAvklarAktiviteter,
      readOnly: false,
      submittable: true,
      behandlingId: 1,
      behandlingVersjon: 1,
      harAndreAksjonspunkterIPanel: false,
      submitCallback: null,
      reduxFormInitialize: null,
      beregningsgrunnlag: { faktaOmBeregning: { avklarAktiviteter, andelerForFaktaOmBeregning: [] } },
    });
    expect(initialValues !== null).to.equal(true);
    expect(initialValues[MANUELL_OVERSTYRING_FIELD]).to.equal(false);
  });

  it('skal teste at initial values blir bygget uten aksjonspunkt', () => {
    const avklarAktiviteter = {
      aktiviteterTomDatoMapping: [
        { tom: '2019-02-02', aktiviteter },
      ],
    };
    const aps = [];
    const initialValues = buildInitialValuesAvklarAktiviteter({
      alleKodeverk,
      aksjonspunkter: aps,
      readOnly: false,
      submittable: true,
      behandlingId: 1,
      behandlingVersjon: 1,
      harAndreAksjonspunkterIPanel: false,
      submitCallback: null,
      reduxFormInitialize: null,
      beregningsgrunnlag: { faktaOmBeregning: { avklarAktiviteter, andelerForFaktaOmBeregning: [] } },
    });
    expect(initialValues !== null).to.equal(true);
    expect(initialValues[MANUELL_OVERSTYRING_FIELD]).to.equal(false);
  });

  it('skal teste at initial values blir bygget med overstyrt aksjonspunkt', () => {
    const avklarAktiviteter = {
      aktiviteterTomDatoMapping: [
        { tom: '2019-02-02', aktiviteter },
      ],
    };
    const aps = [{
      definisjon: { kode: OVERSTYRING_AV_BEREGNINGSAKTIVITETER, kodeverk: 'test' }, status: { kode: 'OPPR', kodeverk: 'test' }, erAktivt: true, kanLoses: true,
    }];
    const initialValues = buildInitialValuesAvklarAktiviteter({
      alleKodeverk,
      aksjonspunkter: aps,
      readOnly: false,
      submittable: true,
      behandlingId: 1,
      behandlingVersjon: 1,
      harAndreAksjonspunkterIPanel: false,
      submitCallback: null,
      reduxFormInitialize: null,
      beregningsgrunnlag: { faktaOmBeregning: { avklarAktiviteter, andelerForFaktaOmBeregning: [] } },
    });
    expect(initialValues !== null).to.equal(true);
    expect(initialValues[MANUELL_OVERSTYRING_FIELD]).to.equal(true);
  });

  it('skal transform values for avklar aktiviteter aksjonspunkt', () => {
    const avklarAktiviteter = {
      aktiviteterTomDatoMapping: [
        { tom: '2019-02-02', aktiviteter },
      ],
    };
    const values = {
      avklarAktiviteter,
      aksjonspunkter: apsAvklarAktiviteter,
    };
    values[id1] = { skalBrukes: false };
    values[id2] = { skalBrukes: true };
    values[id3] = { skalBrukes: true };
    values[idAAP] = { skalBrukes: true };
    const transformed = transformValues(values);
    expect(transformed[0].beregningsaktivitetLagreDtoList.length).to.equal(1);
    expect(transformed[0].beregningsaktivitetLagreDtoList[0].oppdragsgiverOrg).to.equal(aktivitet1.arbeidsgiverId);
  });

  it('skal transform values om for valgt overstyring', () => {
    const avklarAktiviteter = {
      aktiviteterTomDatoMapping: [
        { tom: '2019-02-02', aktiviteter },
      ],
    };
    const aps = [];
    const values = {
      avklarAktiviteter,
      aksjonspunkter: aps,
    };
    values[id1] = { skalBrukes: null };
    values[id2] = { skalBrukes: true };
    values[id3] = { skalBrukes: false };
    values[idAAP] = { skalBrukes: true };
    values[BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME] = 'begrunnelse';
    values[MANUELL_OVERSTYRING_FIELD] = true;
    const transformed = transformValues(values);
    expect(transformed[0].beregningsaktivitetLagreDtoList.length).to.equal(1);
    expect(transformed[0].beregningsaktivitetLagreDtoList[0].arbeidsgiverIdentifikator).to.equal(aktivitet3.aktørIdString);
    expect(transformed[0].begrunnelse).to.equal('begrunnelse');
    expect(transformed[0].kode).to.equal(OVERSTYRING_AV_BEREGNINGSAKTIVITETER);
  });

  it('skal returnere true for endret begrunnelse', () => {
    const avklarAktiviteter = {
      aktiviteterTomDatoMapping: [
        { tom: '2019-02-02', aktiviteter },
      ],
      skjæringstidspunkt: '2019-02-02',
    };
    const values = {
      avklarAktiviteter: null,
    };
    values[id1] = { skalBrukes: null };
    values[id2] = { skalBrukes: true };
    values[id3] = { skalBrukes: false };
    values[idAAP] = { skalBrukes: null };
    values[BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME] = 'sefiojsiejfise';
    values.avklarAktiviteter = avklarAktiviteter;
    const initial = {
      avklarAktiviteter: null,
    };
    initial[id1] = { skalBrukes: null };
    initial[id2] = { skalBrukes: true };
    initial[id3] = { skalBrukes: false };
    initial[idAAP] = { skalBrukes: null };
    initial[BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME] = '53451221412412';
    initial.avklarAktiviteter = avklarAktiviteter;
    const state = lagStateMedAvklarAktitiveter(avklarAktiviteter, values, initial);
    const erAvklartOgIkkeEndret = erAvklartAktivitetEndret(state, {
      ...behandlingProps,
      aksjonspunkter: apsAvklarAktiviteter,
      beregningsgrunnlag: { faktaOmBeregning: { avklarAktiviteter } },
    });
    expect(erAvklartOgIkkeEndret).to.equal(true);
  });

  it('skal returnere true for ikkje endret begrunnelse og endret verdi', () => {
    const avklarAktiviteter = {
      aktiviteterTomDatoMapping: [
        { tom: '2019-02-02', aktiviteter },
      ],
      skjæringstidspunkt: '2019-02-02',
    };
    const values = {
      avklarAktiviteter: null,
    };
    values[id1] = { skalBrukes: null };
    values[id2] = { skalBrukes: false };
    values[id3] = { skalBrukes: false };
    values[idAAP] = { skalBrukes: null };
    values[BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME] = 'sefiojsiejfise';
    values.avklarAktiviteter = avklarAktiviteter;
    const initial = {
      avklarAktiviteter: null,
    };
    initial[id1] = { skalBrukes: null };
    initial[id2] = { skalBrukes: true };
    initial[id3] = { skalBrukes: false };
    initial[idAAP] = { skalBrukes: null };
    initial[BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME] = 'sefiojsiejfise';
    initial.avklarAktiviteter = avklarAktiviteter;
    const state = lagStateMedAvklarAktitiveter(avklarAktiviteter, values, initial);
    const erAvklartOgIkkeEndret = erAvklartAktivitetEndret(state, {
      ...behandlingProps,
      aksjonspunkter: apsAvklarAktiviteter,
      beregningsgrunnlag: { faktaOmBeregning: { avklarAktiviteter } },
    });
    expect(erAvklartOgIkkeEndret).to.equal(true);
  });

  it('skal returnere true for endret begrunnelse og endret verdi', () => {
    const avklarAktiviteter = {
      aktiviteterTomDatoMapping: [
        { tom: '2019-02-02', aktiviteter },
      ],
      skjæringstidspunkt: '2019-02-02',
    };
    const values = {
      avklarAktiviteter: null,
    };
    values[id1] = { skalBrukes: null };
    values[id2] = { skalBrukes: false };
    values[id3] = { skalBrukes: false };
    values[idAAP] = { skalBrukes: null };
    values[BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME] = 'sefiojsiejfise';
    values.avklarAktiviteter = avklarAktiviteter;
    const initial = {
      avklarAktiviteter: null,
    };
    initial[id1] = { skalBrukes: null };
    initial[id2] = { skalBrukes: true };
    initial[id3] = { skalBrukes: false };
    initial[idAAP] = { skalBrukes: null };
    initial[BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME] = '345346123112';
    initial.avklarAktiviteter = avklarAktiviteter;
    const state = lagStateMedAvklarAktitiveter(avklarAktiviteter, values, initial);
    const erAvklartOgIkkeEndret = erAvklartAktivitetEndret(state, {
      ...behandlingProps,
      aksjonspunkter: apsAvklarAktiviteter,
      beregningsgrunnlag: { faktaOmBeregning: { avklarAktiviteter } },
    });
    expect(erAvklartOgIkkeEndret).to.equal(true);
  });

  it('skal returnere false for ikkje endret begrunnelse og ikkje endret verdi', () => {
    const avklarAktiviteter = {
      aktiviteterTomDatoMapping: [
        { tom: '2019-02-02', aktiviteter },
      ],
    };
    const values = {
      avklarAktiviteter: null,
    };
    values[id1] = { skalBrukes: null };
    values[id2] = { skalBrukes: true };
    values[id3] = { skalBrukes: false };
    values[idAAP] = { skalBrukes: null };
    values[BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME] = 'sefiojsiejfise';
    values.avklarAktiviteter = avklarAktiviteter;
    const state = lagStateMedAvklarAktitiveter(avklarAktiviteter, values, values);
    const erAvklartOgIkkeEndret = erAvklartAktivitetEndret(state, {
      ...behandlingProps,
      aksjonspunkter: apsAvklarAktiviteter,
      beregningsgrunnlag: { faktaOmBeregning: { avklarAktiviteter } },
    });
    expect(erAvklartOgIkkeEndret).to.equal(false);
  });
});

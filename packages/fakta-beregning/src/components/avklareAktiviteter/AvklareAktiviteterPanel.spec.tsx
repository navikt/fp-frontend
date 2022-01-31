import React from 'react';

import { shallowWithIntl, getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import opptjeningAktivitetType from '@fpsak-frontend/kodeverk/src/opptjeningAktivitetType';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { AksjonspunktHelpTextTemp, OverstyringKnapp } from '@fpsak-frontend/shared-components';
import { FaktaOmBeregning, AlleKodeverk, Beregningsgrunnlag } from '@fpsak-frontend/types';

import sinon from 'sinon';
import messages from '../../../i18n/nb_NO.json';
import {
  AvklareAktiviteterPanelImpl,
  BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME,
  buildInitialValuesAvklarAktiviteter,
  erAvklartAktivitetEndret,
  MANUELL_OVERSTYRING_FIELD,
  transformValues,
} from './AvklareAktiviteterPanel';
import VurderAktiviteterPanel from './VurderAktiviteterPanel';

const intlMock = getIntlMock(messages);

const {
  AVKLAR_AKTIVITETER,
  OVERSTYRING_AV_BEREGNINGSAKTIVITETER,
} = aksjonspunktCodes;

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
} as AlleKodeverk;

const apsAvklarAktiviteter = [{
  definisjon: AVKLAR_AKTIVITETER, status: 'OPPR', erAktivt: true, kanLoses: true,
}];

const aktivitet1 = {
  arbeidsgiverIdent: '384723894723',
  fom: '2019-01-01',
  tom: null,
  skalBrukes: null,
  arbeidsforholdType: 'ARBEID',
};

const aktivitet2 = {
  arbeidsgiverIdent: '334534623342',
  arbeidsforholdId: 'efj8343f34f',
  fom: '2019-01-01',
  tom: '2019-02-02',
  skalBrukes: true,
  arbeidsforholdType: 'ARBEID',
};

const aktivitet3 = {
  aktørIdString: '324234234234',
  arbeidsgiverIdent: '324234234234',
  arbeidsforholdId: 'efj8343f34f',
  fom: '2019-01-01',
  tom: '2019-02-02',
  skalBrukes: false,
  arbeidsforholdType: 'ARBEID',
};

const aktivitetAAP = {
  arbeidsgiverIdent: null,
  arbeidsforholdType: 'AAP',
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
const id3 = '324234234234efj8343f34f2019-01-01';
const idAAP = 'AAP2019-01-01';

const agOpplysninger = {
  324234234234: {
    identifikator: '324234234234',
    navn: 'Arbeidsgiveren3',
    erPrivatPerson: true,
    fødselsdato: '1960-01-01',
  },
  334534623342: {
    identifikator: '334534623342',
    navn: 'Arbeidsgiveren2',
    erPrivatPerson: false,
  },
  384723894723: {
    identifikator: '384723894723',
    navn: 'Arbeidsgiveren',
    erPrivatPerson: false,
  },
};

describe('<AvklareAktiviteterPanel>', () => {
  it('skal vise VurderAktiviteterPanel panel', () => {
    const avklarAktiviteter = {
      aktiviteterTomDatoMapping: [
        { tom: '2019-02-02', aktiviteter },
      ],
    };
    const aksjonspunkter = [{
      definisjon: AVKLAR_AKTIVITETER,
      status: 'OPPR',
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
      submitCallback={sinon.spy()}
      onSubmit={() => undefined}
      erBgOverstyrt={false}
      alleKodeverk={alleKodeverk}
      reduxFormInitialize={sinon.spy()}
      beregningsgrunnlag={{ faktaOmBeregning: { avklarAktiviteter, andelerForFaktaOmBeregning: [] } as FaktaOmBeregning } as Beregningsgrunnlag}
      arbeidsgiverOpplysningerPerId={agOpplysninger}
      erOverstyrer={false}
      validate={sinon.spy()}
    />, messages);
    const vurderAktivitetPanel = wrapper.find(VurderAktiviteterPanel);
    expect(vurderAktivitetPanel).toHaveLength(1);
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
      alleKodeverk={alleKodeverk}
      submitCallback={sinon.spy()}
      onSubmit={() => undefined}
      beregningsgrunnlag={{ faktaOmBeregning: { avklarAktiviteter, andelerForFaktaOmBeregning: [] } as FaktaOmBeregning } as Beregningsgrunnlag}
      reduxFormInitialize={sinon.spy()}
      arbeidsgiverOpplysningerPerId={agOpplysninger}
      erOverstyrer={false}
      validate={sinon.spy()}
    />, messages);
    const radio = wrapper.find(VurderAktiviteterPanel);
    expect(radio).toHaveLength(0);
  });

  it('skal vise overstyringsknapp', () => {
    const avklarAktiviteter = {
      aktiviteterTomDatoMapping: [
        { tom: '2019-02-02', aktiviteter },
      ],
    };
    const aksjonspunkter = [{
      definisjon: OVERSTYRING_AV_BEREGNINGSAKTIVITETER, status: 'OPPR', erAktivt: true, kanLoses: true,
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
      alleKodeverk={alleKodeverk}
      submitCallback={sinon.spy()}
      onSubmit={() => undefined}
      beregningsgrunnlag={{ faktaOmBeregning: { avklarAktiviteter, andelerForFaktaOmBeregning: [] } as FaktaOmBeregning } as Beregningsgrunnlag}
      reduxFormInitialize={sinon.spy()}
      arbeidsgiverOpplysningerPerId={agOpplysninger}
      erOverstyrer={false}
      validate={sinon.spy()}
    />, messages);
    expect(wrapper.find(OverstyringKnapp)).toHaveLength(1);
  });

  it('skal ikkje vise AksjonspunktHelpText ved overstyring', () => {
    const avklarAktiviteter = {
      aktiviteterTomDatoMapping: [
        { tom: '2019-02-02', aktiviteter },
      ],
    };
    const aksjonspunkter = [{
      definisjon: OVERSTYRING_AV_BEREGNINGSAKTIVITETER, status: 'OPPR', erAktivt: true, kanLoses: true,
    }];

    const wrapper = shallowWithIntl(<AvklareAktiviteterPanelImpl
      {...reduxFormPropsMock}
      intl={intlMock}
      readOnly={false}
      isAksjonspunktClosed={false}
      beregningsgrunnlag={{ faktaOmBeregning: { avklarAktiviteter, andelerForFaktaOmBeregning: [] } as FaktaOmBeregning } as Beregningsgrunnlag}
      hasBegrunnelse={false}
      submittable
      helpText={[]}
      harAndreAksjonspunkterIPanel={false}
      kanOverstyre
      submitCallback={sinon.spy()}
      onSubmit={() => undefined}
      aksjonspunkter={aksjonspunkter}
      erOverstyrt
      erBgOverstyrt={false}
      alleKodeverk={alleKodeverk}
      reduxFormInitialize={sinon.spy()}
      arbeidsgiverOpplysningerPerId={agOpplysninger}
      erOverstyrer={false}
      validate={sinon.spy()}
    />, messages);
    const helptext = wrapper.find(AksjonspunktHelpTextTemp);
    expect(helptext).toHaveLength(0);
  });

  it('skal teste at initial values blir bygget', () => {
    const avklarAktiviteter = {
      aktiviteterTomDatoMapping: [
        { tom: '2019-02-02', aktiviteter },
      ],
    };

    const initialValues = buildInitialValuesAvklarAktiviteter({
      alleKodeverk,
      arbeidsgiverOpplysningerPerId: agOpplysninger,
      aksjonspunkter: apsAvklarAktiviteter,
      readOnly: false,
      submittable: true,
      harAndreAksjonspunkterIPanel: false,
      submitCallback: null,
      erOverstyrer: false,
      beregningsgrunnlag: { faktaOmBeregning: { avklarAktiviteter, andelerForFaktaOmBeregning: [] } as FaktaOmBeregning } as Beregningsgrunnlag,
    });
    expect(initialValues !== null).toBe(true);
    expect(initialValues[MANUELL_OVERSTYRING_FIELD]).toBe(false);
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
      arbeidsgiverOpplysningerPerId: agOpplysninger,
      aksjonspunkter: aps,
      readOnly: false,
      submittable: true,
      harAndreAksjonspunkterIPanel: false,
      submitCallback: null,
      erOverstyrer: false,
      beregningsgrunnlag: { faktaOmBeregning: { avklarAktiviteter, andelerForFaktaOmBeregning: [] } as FaktaOmBeregning } as Beregningsgrunnlag,
    });
    expect(initialValues !== null).toBe(true);
    expect(initialValues[MANUELL_OVERSTYRING_FIELD]).toBe(false);
  });

  it('skal teste at initial values blir bygget med overstyrt aksjonspunkt', () => {
    const avklarAktiviteter = {
      aktiviteterTomDatoMapping: [
        { tom: '2019-02-02', aktiviteter },
      ],
    };
    const aps = [{
      definisjon: OVERSTYRING_AV_BEREGNINGSAKTIVITETER, status: 'OPPR', erAktivt: true, kanLoses: true,
    }];
    const initialValues = buildInitialValuesAvklarAktiviteter({
      alleKodeverk,
      arbeidsgiverOpplysningerPerId: agOpplysninger,
      aksjonspunkter: aps,
      readOnly: false,
      submittable: true,
      harAndreAksjonspunkterIPanel: false,
      submitCallback: null,
      erOverstyrer: false,
      beregningsgrunnlag: { faktaOmBeregning: { avklarAktiviteter, andelerForFaktaOmBeregning: [] } as FaktaOmBeregning } as Beregningsgrunnlag,
    });
    expect(initialValues !== null).toBe(true);
    expect(initialValues[MANUELL_OVERSTYRING_FIELD]).toBe(true);
  });

  it('skal transform values for avklar aktiviteter aksjonspunkt', () => {
    const avklarAktiviteter = {
      aktiviteterTomDatoMapping: [
        { tom: '2019-02-02', aktiviteter },
      ],
    };
    const values = {
      avklarAktiviteter,
      aktiviteterValues: {},
      aksjonspunkter: apsAvklarAktiviteter,
    };
    values.aktiviteterValues[id1] = { skalBrukes: false };
    values.aktiviteterValues[id2] = { skalBrukes: true };
    values.aktiviteterValues[id3] = { skalBrukes: true };
    values.aktiviteterValues[idAAP] = { skalBrukes: true };
    const transformed = transformValues(values);
    expect(transformed.beregningsaktivitetLagreDtoList.length).toBe(1);
    expect(transformed.beregningsaktivitetLagreDtoList[0].oppdragsgiverOrg).toBe(aktivitet1.arbeidsgiverIdent);
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
      aktiviteterValues: {},
      aksjonspunkter: aps,
    };
    values.aktiviteterValues[id1] = { skalBrukes: null };
    values.aktiviteterValues[id2] = { skalBrukes: true };
    values.aktiviteterValues[id3] = { skalBrukes: false };
    values.aktiviteterValues[idAAP] = { skalBrukes: true };
    values[BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME] = 'begrunnelse';
    values[MANUELL_OVERSTYRING_FIELD] = true;
    const transformed = transformValues(values);
    expect(transformed.beregningsaktivitetLagreDtoList.length).toBe(1);
    expect(transformed.beregningsaktivitetLagreDtoList[0].arbeidsgiverIdentifikator).toBe(aktivitet3.aktørIdString);
    expect(transformed.begrunnelse).toBe('begrunnelse');
    expect(transformed.kode).toBe(OVERSTYRING_AV_BEREGNINGSAKTIVITETER);
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
      aktiviteterValues: {},
    };
    values.aktiviteterValues[id1] = { skalBrukes: null };
    values.aktiviteterValues[id2] = { skalBrukes: true };
    values.aktiviteterValues[id3] = { skalBrukes: false };
    values.aktiviteterValues[idAAP] = { skalBrukes: null };
    values[BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME] = 'sefiojsiejfise';
    values.avklarAktiviteter = avklarAktiviteter;
    const initial = {
      avklarAktiviteter: null,
      aktiviteterValues: {},
    };
    initial.aktiviteterValues[id1] = { skalBrukes: null };
    initial.aktiviteterValues[id2] = { skalBrukes: true };
    initial.aktiviteterValues[id3] = { skalBrukes: false };
    initial.aktiviteterValues[idAAP] = { skalBrukes: null };
    initial[BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME] = '53451221412412';
    initial.avklarAktiviteter = avklarAktiviteter;
    const erAvklartOgIkkeEndret = erAvklartAktivitetEndret.resultFunc(
      apsAvklarAktiviteter,
      false,
      avklarAktiviteter,
      values,
      initial,
    );
    expect(erAvklartOgIkkeEndret).toBe(true);
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
      aktiviteterValues: {},
    };
    values.aktiviteterValues[id1] = { skalBrukes: null };
    values.aktiviteterValues[id2] = { skalBrukes: false };
    values.aktiviteterValues[id3] = { skalBrukes: false };
    values.aktiviteterValues[idAAP] = { skalBrukes: null };
    values[BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME] = 'sefiojsiejfise';
    values.avklarAktiviteter = avklarAktiviteter;
    const initial = {
      avklarAktiviteter: null,
      aktiviteterValues: {},
    };
    initial.aktiviteterValues[id1] = { skalBrukes: null };
    initial.aktiviteterValues[id2] = { skalBrukes: true };
    initial.aktiviteterValues[id3] = { skalBrukes: false };
    initial.aktiviteterValues[idAAP] = { skalBrukes: null };
    initial[BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME] = 'sefiojsiejfise';
    initial.avklarAktiviteter = avklarAktiviteter;
    const erAvklartOgIkkeEndret = erAvklartAktivitetEndret.resultFunc(
      apsAvklarAktiviteter,
      false,
      avklarAktiviteter,
      values,
      initial,
    );
    expect(erAvklartOgIkkeEndret).toBe(true);
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
      aktiviteterValues: {},
    };
    values.aktiviteterValues[id1] = { skalBrukes: null };
    values.aktiviteterValues[id2] = { skalBrukes: false };
    values.aktiviteterValues[id3] = { skalBrukes: false };
    values.aktiviteterValues[idAAP] = { skalBrukes: null };
    values[BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME] = 'sefiojsiejfise';
    values.avklarAktiviteter = avklarAktiviteter;
    const initial = {
      avklarAktiviteter: null,
      aktiviteterValues: {},
    };
    initial.aktiviteterValues[id1] = { skalBrukes: null };
    initial.aktiviteterValues[id2] = { skalBrukes: true };
    initial.aktiviteterValues[id3] = { skalBrukes: false };
    initial.aktiviteterValues[idAAP] = { skalBrukes: null };
    initial[BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME] = '345346123112';
    initial.avklarAktiviteter = avklarAktiviteter;
    const erAvklartOgIkkeEndret = erAvklartAktivitetEndret.resultFunc(
      apsAvklarAktiviteter,
      false,
      avklarAktiviteter,
      values,
      initial,
    );
    expect(erAvklartOgIkkeEndret).toBe(true);
  });

  it('skal returnere false for ikkje endret begrunnelse og ikkje endret verdi', () => {
    const avklarAktiviteter = {
      aktiviteterTomDatoMapping: [
        { tom: '2019-02-02', aktiviteter },
      ],
    };
    const values = {
      avklarAktiviteter: null,
      aktiviteterValues: {},
    };
    values.aktiviteterValues[id1] = { skalBrukes: null };
    values.aktiviteterValues[id2] = { skalBrukes: true };
    values.aktiviteterValues[id3] = { skalBrukes: false };
    values.aktiviteterValues[idAAP] = { skalBrukes: null };
    values[BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME] = 'sefiojsiejfise';
    values.avklarAktiviteter = avklarAktiviteter;
    const erAvklartOgIkkeEndret = erAvklartAktivitetEndret.resultFunc(
      apsAvklarAktiviteter,
      false,
      avklarAktiviteter,
      values,
      values,
    );
    expect(erAvklartOgIkkeEndret).toBe(false);
  });
});

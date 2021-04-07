import React from 'react';

import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import Aksjonspunkt from '@fpsak-frontend/types/src/aksjonspunktTsType';
import { BeregningsgrunnlagAndel } from '@fpsak-frontend/types';
import shallowWithIntl from '../../../i18n/intl-enzyme-test-helper-prosess-beregningsgrunnlag';
import messages from '../../../i18n/nb_NO.json';
import { FastsettSNImpl, begrunnelseFieldname, fastsettInntektFieldname } from './FastsettSN';

const intlMock = getIntlMock(messages);

const mockAksjonspunktMedKodeOgStatus = (apKode, begrunnelse) => ({
  definisjon: {
    kode: apKode,
    kodeverk: 'AKSJONSPUNKT_DEFINISJON',
  },
  status: {
    kode: 'OPPR',
    kodeverk: 'AKSJONSPUNKT_STATUS',
  },
  kanLoses: true,
  erAktivt: true,
  begrunnelse,
});

const lagAndel = (status, fastsattBelop) => ({
  aktivitetStatus: {
    kode: status,
    kodeverk: 'test',
  },
  beregnetPrAar: 200000,
  overstyrtPrAar: fastsattBelop,
  beregningsperiodeFom: '2015-01-01',
  beregningsperiodeTom: '2017-01-01',
} as BeregningsgrunnlagAndel);

describe('<FastsettSN>', () => {
  it('Skal teste at det rendres riktig antall rader', () => {
    const aksjonspunkter = [mockAksjonspunktMedKodeOgStatus(
      aksjonspunktCodes.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE,
      'Ok.',
    ) as Aksjonspunkt];
    const wrapper = shallowWithIntl(<FastsettSNImpl
      readOnly={false}
      isAksjonspunktClosed={false}
      erNyArbLivet
      gjeldendeAksjonspunkter={aksjonspunkter}
      endretTekst={{}}
      intl={intlMock}
    />);

    const rows = wrapper.find('Row');
    expect(rows.length).toBe(2);
  });
  it('Skal teste at buildInitialValues bygges korrekt når tidligere fastsatt', () => {
    const andeler = [lagAndel(aktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE, 300000), lagAndel(aktivitetStatus.ARBEIDSTAKER, 250000)];
    const aksjonspunkter = [mockAksjonspunktMedKodeOgStatus(aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
      'Ok.') as Aksjonspunkt];

    const actualValues = FastsettSNImpl.buildInitialValuesNyIArbeidslivet(andeler, aksjonspunkter);

    const expectedValues = {
      [fastsettInntektFieldname]: '300 000',
      [begrunnelseFieldname]: 'Ok.',
    };

    expect(actualValues).toEqual(expectedValues);
  });

  it('Skal teste at buildInitialValues bygges korrekt når ikke tidligere fastsatt', () => {
    const andeler = [lagAndel(aktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE, null), lagAndel(aktivitetStatus.ARBEIDSTAKER, 250000)];
    const aksjonspunkter = [mockAksjonspunktMedKodeOgStatus(aksjonspunktCodes.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE, null)];

    const actualValues = FastsettSNImpl.buildInitialValuesNyIArbeidslivet(andeler, aksjonspunkter);

    const expectedValues = {
      [fastsettInntektFieldname]: undefined,
      [begrunnelseFieldname]: '',
    };

    expect(actualValues).toEqual(expectedValues);
  });

  it('Skal teste at buildInitialValues bygges korrekt når ikke tidligere fastsatt på sn ny i arbliv', () => {
    const andeler = [lagAndel(aktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE, null), lagAndel(aktivitetStatus.ARBEIDSTAKER, 250000)];
    const aksjonspunkter = [mockAksjonspunktMedKodeOgStatus(aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET, null)];

    const actualValues = FastsettSNImpl.buildInitialValuesNyIArbeidslivet(andeler, aksjonspunkter);
    const expectedValues = {
      [fastsettInntektFieldname]: undefined,
      [begrunnelseFieldname]: '',
    };

    expect(actualValues).toEqual(expectedValues);
  });

  it('Skal teste at buildInitialValues bygges korrekt når ikke tidligere fastsatt på sn ny i arbliv - OK', () => {
    const andeler = [lagAndel(aktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE, 500000), lagAndel(aktivitetStatus.ARBEIDSTAKER, 250000)];
    const aksjonspunkter = [mockAksjonspunktMedKodeOgStatus(aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET, 'Ok!!!')];

    const actualValues = FastsettSNImpl.buildInitialValuesNyIArbeidslivet(andeler, aksjonspunkter);

    const expectedValues = {
      [fastsettInntektFieldname]: '500 000',
      [begrunnelseFieldname]: 'Ok!!!',
    };

    expect(actualValues).toEqual(expectedValues);
  });
});

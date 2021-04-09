import React from 'react';

import { shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import Aksjonspunkt from '@fpsak-frontend/types/src/aksjonspunktTsType';

import AksjonspunktBehandlerSN from './AksjonspunktsbehandlerSN';
import VurderOgFastsettSN from './VurderOgFastsettSN';
import messages from '../../../i18n/nb_NO.json';

const {
  FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
  FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
} = aksjonspunktCodes;

const mockAksjonspunktMedKodeOgStatus = (apKode, begrunnelse, status) => ({
  definisjon: {
    kode: apKode,
  },
  status: {
    kode: status,
  },
  begrunnelse,
  kanLoses: true,
  erAktivt: true,
} as Aksjonspunkt);

describe('<AksjonspunktsbehandlerSN>', () => {
  it('Skal teste at riktige kompoenten renderes med riktig props', () => {
    const snNyIArb = mockAksjonspunktMedKodeOgStatus(FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET, undefined, 'OPPR');

    const wrapper = shallowWithIntl(<AksjonspunktBehandlerSN
      readOnly={false}
      aksjonspunkter={[snNyIArb]}
      behandlingId={1}
      behandlingVersjon={1}
    />, messages);
    const compVurderOgFastsettSN2 = wrapper.find(VurderOgFastsettSN);
    expect(compVurderOgFastsettSN2).toHaveLength(1);
  });
  it('Skal teste at kompoenten IKKE renderes med manglende props', () => {
    const snNyIArb = mockAksjonspunktMedKodeOgStatus(FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD, undefined, 'OPPR');

    const wrapper = shallowWithIntl(<AksjonspunktBehandlerSN
      readOnly={false}
      aksjonspunkter={[snNyIArb]}
      behandlingId={1}
      behandlingVersjon={1}
    />, messages);
    const compVurderOgFastsettSN2 = wrapper.find(VurderOgFastsettSN);
    expect(compVurderOgFastsettSN2).toHaveLength(0);
  });
});

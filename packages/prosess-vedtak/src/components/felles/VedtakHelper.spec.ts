import { expect } from 'chai';

import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import { Vilkar } from '@fpsak-frontend/types';

import { hasIkkeOppfyltSoknadsfristvilkar } from './VedtakHelper';

describe('<VedtakHelper>', () => {
  it('hasIkkeOppfyltSoknadsfristvilkar skal returnere true når søknadfristvilkår ikkje er oppfylt', () => {
    const vilkarListe = [{
      vilkarType: {
        kode: vilkarType.SOKNADFRISTVILKARET,
        kodeverk: '',
      },
      vilkarStatus: {
        kode: vilkarUtfallType.IKKE_OPPFYLT,
        kodeverk: '',
      },
      lovReferanse: '§ 22-13, 2. ledd',
    }] as Vilkar[];

    const hasIkkeOppfylt = hasIkkeOppfyltSoknadsfristvilkar(vilkarListe);

    expect(hasIkkeOppfylt).to.eql(true);
  });
});

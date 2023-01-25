import vilkarType from '@navikt/fp-kodeverk/src/vilkarType';
import vilkarUtfallType from '@navikt/fp-kodeverk/src/vilkarUtfallType';
import { Vilkar } from '@navikt/fp-types';

import { hasIkkeOppfyltSoknadsfristvilkar } from './VedtakHelper';

describe('<VedtakHelper>', () => {
  it('hasIkkeOppfyltSoknadsfristvilkar skal returnere true når søknadfristvilkår ikkje er oppfylt', () => {
    const vilkarListe = [{
      vilkarType: vilkarType.SOKNADFRISTVILKARET,
      vilkarStatus: vilkarUtfallType.IKKE_OPPFYLT,
      lovReferanse: '§ 22-13, 2. ledd',
    }] as Vilkar[];

    const hasIkkeOppfylt = hasIkkeOppfyltSoknadsfristvilkar(vilkarListe);

    expect(hasIkkeOppfylt).toEqual(true);
  });
});

import { lagVilkår } from '@navikt/fp-storybook-utils';

import { hasIkkeOppfyltSoknadsfristvilkar } from './VedtakHelper';

describe('VedtakHelper', () => {
  it('hasIkkeOppfyltSoknadsfristvilkar skal returnere true når søknadfristvilkår ikkje er oppfylt', () => {
    const vilkarListe = [
      lagVilkår('FP_VK_3', {
        vilkarStatus: 'IKKE_OPPFYLT',
      }),
    ];

    const hasIkkeOppfylt = hasIkkeOppfyltSoknadsfristvilkar(vilkarListe);

    expect(hasIkkeOppfylt).toEqual(true);
  });
});

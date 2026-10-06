import { FaktaPanelCode } from '@navikt/fp-konstanter';

import messages from '../../i18n/nb_NO.json';

// DEFAULT er ikkje ein reell faktapanel-tittel, men ein markør brukt i skjermlenkeCodes for
// å seie at ei skjermlenke ikkje har noko faktapanel. Han blir aldri sendt til FaktaPanelTittel.
const IKKE_EIT_REELT_FAKTAPANEL = new Set<FaktaPanelCode>([FaktaPanelCode.DEFAULT]);

describe('FaktaPanelTittel', () => {
  it('skal ha en i18n-melding for alle faktapanel-koder', () => {
    const manglendeKoder = Object.values(FaktaPanelCode)
      .filter(kode => !IKKE_EIT_REELT_FAKTAPANEL.has(kode))
      .filter(kode => !(`FaktaPanelTittel.${kode}` in messages));

    expect(manglendeKoder).toEqual([]);
  });
});

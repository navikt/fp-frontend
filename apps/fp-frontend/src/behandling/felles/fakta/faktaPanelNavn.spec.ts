import { FaktaPanelCode } from '@navikt/fp-konstanter';

import { FAKTA_PANEL_TITTEL_MESSAGE_ID } from './faktaPanelNavn';

import messages from '../../../../i18n/nb_NO.json';

const KODER_UTEN_MENYTEKST = new Set<FaktaPanelCode>([
  FaktaPanelCode.ADOPSJONSVILKARET,
  FaktaPanelCode.DEFAULT,
  FaktaPanelCode.OMSORGSVILKARET,
]);

describe('faktaPanelNavn', () => {
  it('skal ha en intl-melding for alle faktapanelkoder med menynavn', () => {
    const manglendeKoder = Object.values(FaktaPanelCode)
      .filter(kode => !KODER_UTEN_MENYTEKST.has(kode))
      .filter(kode => {
        const messageId = FAKTA_PANEL_TITTEL_MESSAGE_ID[kode];
        return !messageId || !(messageId in messages);
      });

    expect(manglendeKoder).toEqual([]);
  });
});

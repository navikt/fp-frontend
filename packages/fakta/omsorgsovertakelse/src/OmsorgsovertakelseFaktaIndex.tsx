import { FormattedMessage, RawIntlProvider } from 'react-intl';

import { VStack } from '@navikt/ds-react';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';
import { createIntl } from '@navikt/ft-utils';

import { FaktaFraFReg } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { OmsorgsovertakelseDto } from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

import { FaktaSammenligning } from './components/FaktaSammenligning';
import { LegacyAksjonspunktVisning } from './components/LegacyAksjonspunktVisning';
import { VurderOmsorgsovertakelseVilkåretForm } from './components/VurderOmsorgsovertakelseVilkåretForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  omsorgsovertakelse: OmsorgsovertakelseDto;
}

export const OmsorgsovertakelseFaktaIndex = ({ omsorgsovertakelse }: Props) => {
  const { harÅpentAksjonspunkt, aksjonspunkterForPanel } = usePanelDataContext();
  const harOmsorgsovertakelseAP = aksjonspunkterForPanel.some(
    ap => ap.definisjon === AksjonspunktKode.VURDER_OMSORGSOVERTAKELSEVILKÅRET,
  );
  return (
    <RawIntlProvider value={intl}>
      <VStack gap="space-16">
        {harÅpentAksjonspunkt && (
          <AksjonspunktHelpTextHTML>
            <FormattedMessage id="OmsorgsovertakelseFaktaIndex.AksjonspunktTekst" />
          </AksjonspunktHelpTextHTML>
        )}

        <FaktaSammenligning omsorgsovertakelse={omsorgsovertakelse} />
        <FaktaFraFReg barna={omsorgsovertakelse.register.barn} />

        {harOmsorgsovertakelseAP && <VurderOmsorgsovertakelseVilkåretForm omsorgsovertakelse={omsorgsovertakelse} />}
        {aksjonspunkterForPanel.length > 0 && !harOmsorgsovertakelseAP && <LegacyAksjonspunktVisning />}
      </VStack>
    </RawIntlProvider>
  );
};

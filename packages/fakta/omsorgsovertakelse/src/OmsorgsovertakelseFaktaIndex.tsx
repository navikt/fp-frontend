import { FormattedMessage, RawIntlProvider } from 'react-intl';

import { VStack } from '@navikt/ds-react';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';
import { createIntl } from '@navikt/ft-utils';

import { FaktaFraFReg } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { OmsorgsovertakelseDto } from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

import { FaktaSammenligning } from './components/FaktaSammenligning';
import { VurderOmsorgsovertakelseVilkåretForm } from './components/VurderOmsorgsovertakelseVilkåretForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  omsorgsovertakelse: OmsorgsovertakelseDto;
}

export const OmsorgsovertakelseFaktaIndex = ({ omsorgsovertakelse }: Props) => {
  const { harÅpentAksjonspunkt, aksjonspunkterForPanel } = usePanelDataContext();

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

        {aksjonspunkterForPanel.some(ap => ap.definisjon === AksjonspunktKode.VURDER_OMSORGSOVERTAKELSEVILKÅRET) && (
          <VurderOmsorgsovertakelseVilkåretForm omsorgsovertakelse={omsorgsovertakelse} />
        )}
      </VStack>
    </RawIntlProvider>
  );
};

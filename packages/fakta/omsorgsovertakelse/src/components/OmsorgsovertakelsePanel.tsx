import { VStack } from '@navikt/ds-react';

import { FaktaFraFReg, FaktaPanelTittel } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { OmsorgsovertakelseDto } from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

import { AksjonspunktTekst } from './AksjonspunktTekst';
import { FaktaSammenligning } from './FaktaSammenligning';
import { LegacyAksjonspunktVisning } from './LegacyAksjonspunktVisning';
import { VurderOmsorgsovertakelseVilkåretForm } from './VurderOmsorgsovertakelseVilkåretForm';

interface Props {
  omsorgsovertakelse: OmsorgsovertakelseDto;
}

export const OmsorgsovertakelsePanel = ({ omsorgsovertakelse }: Props) => {
  const { harÅpentAksjonspunkt, aksjonspunkterForPanel } = usePanelDataContext();
  const harOmsorgsovertakelseAP = aksjonspunkterForPanel.some(
    ap => ap.definisjon === AksjonspunktKode.VURDER_OMSORGSOVERTAKELSEVILKÅRET,
  );
  return (
    <VStack gap="space-16">
      <FaktaPanelTittel />
      {harÅpentAksjonspunkt && <AksjonspunktTekst omsorgsovertakelse={omsorgsovertakelse} />}

      <FaktaSammenligning omsorgsovertakelse={omsorgsovertakelse} />
      <FaktaFraFReg barna={omsorgsovertakelse.register.barn} />

      {harOmsorgsovertakelseAP && <VurderOmsorgsovertakelseVilkåretForm omsorgsovertakelse={omsorgsovertakelse} />}
      {aksjonspunkterForPanel.length > 0 && !harOmsorgsovertakelseAP && <LegacyAksjonspunktVisning />}
    </VStack>
  );
};

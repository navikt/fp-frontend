import { VStack } from '@navikt/ds-react';

import { InngangsvilkarDefaultInitWrapper } from '../../felles/prosess/InngangsvilkarDefaultInitWrapper';
import { MedlemskapInngangsvilkarInitPanel } from '../../fellesPaneler/prosess/inngangsvilkarPaneler/MedlemskapInngangsvilkarInitPanel';
import { OmsorgsovertakelseInngangsvilkårInitPanel } from '../../fellesPaneler/prosess/inngangsvilkarPaneler/OmsorgsovertakelseInngangsvilkårInitPanel';
import { FodselInngangsvilkarInitPanel } from './inngangsvilkarPaneler/FodselInngangsvilkarInitPanel';
import { MedlemskapForutgaendeInngangsvilkarInitPanel } from './inngangsvilkarPaneler/MedlemskapForutgaendeInngangsvilkarInitPanel';

interface Props {
  faktaPanelMedÅpentApInfo?: { urlCode: string; text: string };
}

export const InngangsvilkarEsProsessStegInitPanel = ({ faktaPanelMedÅpentApInfo }: Props) => (
  <InngangsvilkarDefaultInitWrapper faktaPanelMedÅpentApInfo={faktaPanelMedÅpentApInfo}>
    <VStack gap="space-32">
      <FodselInngangsvilkarInitPanel />
      <OmsorgsovertakelseInngangsvilkårInitPanel />
      <MedlemskapInngangsvilkarInitPanel />
      <MedlemskapForutgaendeInngangsvilkarInitPanel />
    </VStack>
  </InngangsvilkarDefaultInitWrapper>
);

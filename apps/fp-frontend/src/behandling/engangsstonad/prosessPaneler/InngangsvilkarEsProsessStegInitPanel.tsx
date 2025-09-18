import { VStack } from '@navikt/ds-react';

import { InngangsvilkarDefaultInitWrapper } from '../../felles/prosess/InngangsvilkarDefaultInitWrapper';
import { ForeldreansvarInngangsvilkarInitPanel } from '../../fellesPaneler/prosess/inngangsvilkarPaneler/ForeldreansvarInngangsvilkarInitPanel';
import { MedlemskapInngangsvilkarInitPanel } from '../../fellesPaneler/prosess/inngangsvilkarPaneler/MedlemskapInngangsvilkarInitPanel';
import { AdopsjonInngangsvilkarInitPanel } from './inngangsvilkarPaneler/AdopsjonInngangsvilkarInitPanel';
import { FodselInngangsvilkarInitPanel } from './inngangsvilkarPaneler/FodselInngangsvilkarInitPanel';
import { MedlemskapForutgaendeInngangsvilkarInitPanel } from './inngangsvilkarPaneler/MedlemskapForutgaendeInngangsvilkarInitPanel';
import { OmsorgInngangsvilkarInitPanel } from './inngangsvilkarPaneler/OmsorgInngangsvilkarInitPanel';

interface Props {
  faktaPanelMedÅpentApInfo?: { urlCode: string; text: string };
}

export const InngangsvilkarEsProsessStegInitPanel = ({ faktaPanelMedÅpentApInfo }: Props) => (
  <InngangsvilkarDefaultInitWrapper faktaPanelMedÅpentApInfo={faktaPanelMedÅpentApInfo}>
    <VStack gap="space-32">
      <FodselInngangsvilkarInitPanel />
      <AdopsjonInngangsvilkarInitPanel />
      <OmsorgInngangsvilkarInitPanel />
      <MedlemskapInngangsvilkarInitPanel />
      <MedlemskapForutgaendeInngangsvilkarInitPanel />
      <ForeldreansvarInngangsvilkarInitPanel />
    </VStack>
  </InngangsvilkarDefaultInitWrapper>
);

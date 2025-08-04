import { HGrid, VStack } from '@navikt/ds-react';

import { InngangsvilkarDefaultInitWrapper } from '../../felles/prosess/InngangsvilkarDefaultInitWrapper';
import { ForeldreansvarInngangsvilkarInitPanel } from '../../fellesPaneler/prosess/inngangsvilkarPaneler/ForeldreansvarInngangsvilkarInitPanel';
import { MedlemskapInngangsvilkarInitPanel } from '../../fellesPaneler/prosess/inngangsvilkarPaneler/MedlemskapInngangsvilkarInitPanel';
import { AdopsjonInngangsvilkarFpInitPanel } from './inngangsvilkarPaneler/AdopsjonInngangsvilkarFpInitPanel';
import { FodselInngangsvilkarFpInitPanel } from './inngangsvilkarPaneler/FodselInngangsvilkarFpInitPanel';
import { OmsorgInngangsvilkarFpInitPanel } from './inngangsvilkarPaneler/OmsorgInngangsvilkarFpInitPanel';
import { OpptjeningInngangsvilkarFpInitPanel } from './inngangsvilkarPaneler/OpptjeningInngangsvilkarFpInitPanel';

interface Props {
  faktaPanelMedÅpentApInfo?: { urlCode: string; text: string };
}

export const InngangsvilkarFpProsessStegInitPanel = ({ faktaPanelMedÅpentApInfo }: Props) => {
  return (
    <InngangsvilkarDefaultInitWrapper faktaPanelMedÅpentApInfo={faktaPanelMedÅpentApInfo}>
      <HGrid columns={2} gap="space-32">
        <VStack gap="space-32">
          <FodselInngangsvilkarFpInitPanel />
          <AdopsjonInngangsvilkarFpInitPanel />
          <OmsorgInngangsvilkarFpInitPanel />
          <MedlemskapInngangsvilkarInitPanel />
          <ForeldreansvarInngangsvilkarInitPanel />
        </VStack>
        <OpptjeningInngangsvilkarFpInitPanel />
      </HGrid>
    </InngangsvilkarDefaultInitWrapper>
  );
};

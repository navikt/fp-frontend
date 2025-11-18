import { HGrid, VStack } from '@navikt/ds-react';

import { InngangsvilkarDefaultInitWrapper } from '../../felles/prosess/InngangsvilkarDefaultInitWrapper';
import { MedlemskapInngangsvilkarInitPanel } from '../../fellesPaneler/prosess/inngangsvilkarPaneler/MedlemskapInngangsvilkarInitPanel';
import { OpptjeningInngangsvilkarInitPanel } from '../../fellesPaneler/prosess/inngangsvilkarPaneler/OpptjeningInngangsvilkarInitPanel';
import { FodselInngangsvilkarFpInitPanel } from './inngangsvilkarPaneler/FodselInngangsvilkarFpInitPanel';

interface Props {
  faktaPanelMedÅpentApInfo?: { urlCode: string; text: string };
}

export const InngangsvilkarFpProsessStegInitPanel = ({ faktaPanelMedÅpentApInfo }: Props) => {
  return (
    <InngangsvilkarDefaultInitWrapper faktaPanelMedÅpentApInfo={faktaPanelMedÅpentApInfo}>
      <HGrid columns={2} gap="space-32">
        <VStack gap="space-32">
          <FodselInngangsvilkarFpInitPanel />
          <MedlemskapInngangsvilkarInitPanel />
        </VStack>
        <OpptjeningInngangsvilkarInitPanel />
      </HGrid>
    </InngangsvilkarDefaultInitWrapper>
  );
};

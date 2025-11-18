import { HGrid, VStack } from '@navikt/ds-react';

import { InngangsvilkarDefaultInitWrapper } from '../../felles/prosess/InngangsvilkarDefaultInitWrapper';
import { MedlemskapInngangsvilkarInitPanel } from '../../fellesPaneler/prosess/inngangsvilkarPaneler/MedlemskapInngangsvilkarInitPanel';
import { OpptjeningInngangsvilkarInitPanel } from '../../fellesPaneler/prosess/inngangsvilkarPaneler/OpptjeningInngangsvilkarInitPanel';
import { SvangerskapInngangsvilkarInitPanel } from './inngangsvilkarPaneler/SvangerskapInngangsvilkarInitPanel';

interface Props {
  faktaPanelMedÅpentApInfo?: { urlCode: string; text: string };
}

export const InngangsvilkarSvpProsessStegInitPanel = ({ faktaPanelMedÅpentApInfo }: Props) => (
  <InngangsvilkarDefaultInitWrapper faktaPanelMedÅpentApInfo={faktaPanelMedÅpentApInfo}>
    <HGrid columns={2} gap="space-32">
      <VStack gap="space-32">
        <SvangerskapInngangsvilkarInitPanel />
        <MedlemskapInngangsvilkarInitPanel />
      </VStack>
      <OpptjeningInngangsvilkarInitPanel />
    </HGrid>
  </InngangsvilkarDefaultInitWrapper>
);

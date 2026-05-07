import { FormattedMessage } from 'react-intl';

import { VStack } from '@navikt/ds-react';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';
import { isAksjonspunktOpen } from '@navikt/ft-utils';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { Ytelsefordeling } from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

import { DekningradAP } from './dekningsgrad/DekningradAP';
import { DekningradOverstyring } from './dekningsgrad/DekningradOverstyring';
import { InnhentDokOpptjeningUtlandAP } from './InnhentDokOpptjeningUtlandAP';
import { StartdatoOverstyring } from './StartdatoOverstyring';

interface Props {
  ytelsefordeling?: Ytelsefordeling;
  utlandDokStatus?: {
    dokStatus?: string;
  };
  kanOverstyreAccess: boolean;
}

export const SakenFaktaPanel = ({ ytelsefordeling, utlandDokStatus, kanOverstyreAccess }: Props) => {
  const { aksjonspunkterForPanel, fagsak } = usePanelDataContext();

  const automatiskMarkeringAvUtenlandssakAp = aksjonspunkterForPanel.find(
    ap => ap.definisjon === AksjonspunktKode.AUTOMATISK_MARKERING_AV_UTENLANDSSAK,
  );
  const avklarDekningsgradAP = aksjonspunkterForPanel.find(
    ap => ap.definisjon === AksjonspunktKode.AVKLAR_DEKNINGSGRAD,
  );
  const overstyrDekningsgradAp = aksjonspunkterForPanel.find(
    ap => ap.definisjon === AksjonspunktKode.OVERSTYRING_AV_DEKNINGSGRAD,
  );
  const overstyrStartdatoAp = aksjonspunkterForPanel.find(
    ap => ap.definisjon === AksjonspunktKode.OVERSTYRING_AV_AVKLART_STARTDATO,
  );

  return (
    <VStack gap="space-32" maxWidth="700px">
      {isAksjonspunktOpen(automatiskMarkeringAvUtenlandssakAp) && (
        <AksjonspunktHelpTextHTML>
          <FormattedMessage id="SakenFaktaPanel.OpptjeningUtland" />
        </AksjonspunktHelpTextHTML>
      )}
      {isAksjonspunktOpen(avklarDekningsgradAP) && (
        <AksjonspunktHelpTextHTML>
          <FormattedMessage id="SakenFaktaPanel.AvklarDekningsgrad" />
        </AksjonspunktHelpTextHTML>
      )}

      {ytelsefordeling && avklarDekningsgradAP && (
        <DekningradAP ytelseFordeling={ytelsefordeling} aksjonspunkt={avklarDekningsgradAP} />
      )}
      {automatiskMarkeringAvUtenlandssakAp && (
        <InnhentDokOpptjeningUtlandAP
          dokStatus={utlandDokStatus?.dokStatus}
          aksjonspunkt={automatiskMarkeringAvUtenlandssakAp}
        />
      )}
      {fagsak.fagsakYtelseType === 'FP' && !!ytelsefordeling && (
        <StartdatoOverstyring ytelseFordeling={ytelsefordeling} aksjonspunkt={overstyrStartdatoAp} />
      )}
      {ytelsefordeling && !avklarDekningsgradAP && fagsak.fagsakYtelseType === 'FP' && (
        <DekningradOverstyring
          ytelseFordeling={ytelsefordeling}
          aksjonspunkt={overstyrDekningsgradAp}
          kanOverstyreAccess={kanOverstyreAccess}
        />
      )}
    </VStack>
  );
};

import { useIntl } from 'react-intl';

import { useQuery } from '@tanstack/react-query';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { OpptjeningVilkarProsessIndex } from '@navikt/fp-prosess-vilkar-opptjening';
import type { VilkårType } from '@navikt/fp-types';

import { getBehandlingApi } from '../../../../data/behandlingApi';
import { useInngangsvilkårPanelPrioritet } from '../../../felles/prioritet/usePanelPrioritet';
import {
  InngangsvilkarDefaultInitPanel,
  InngangsvilkarOverstyringDefaultInitPanel,
} from '../../../felles/prosess/InngangsvilkarDefaultInitPanel';
import { OverstyringPanelDef } from '../../../felles/prosess/OverstyringPanelDef';
import { skalViseProsessPanel } from '../../../felles/prosess/skalViseProsessPanel';
import { useStandardProsessPanelProps } from '../../../felles/prosess/useStandardProsessPanelProps';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.VURDER_OPPTJENINGSVILKÅRET];

const VILKAR_KODER = ['FP_VK_21', 'FP_VK_23'] satisfies VilkårType[];

const PANEL_ID = 'OPPTJENINGSVILKARET';

export const OpptjeningInngangsvilkarInitPanel = () => {
  const intl = useIntl();

  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, VILKAR_KODER);
  const harIngenAksjonspunkt = standardPanelProps.aksjonspunkterForPanel.length === 0;
  const skalPanelVisesIMeny = skalViseProsessPanel(
    standardPanelProps.aksjonspunkterForPanel,
    VILKAR_KODER,
    standardPanelProps.vilkårForPanel,
  );

  const prioriter = useInngangsvilkårPanelPrioritet({ panelKode: PANEL_ID, skalVisesIMeny: skalPanelVisesIMeny });

  const api = getBehandlingApi(standardPanelProps.behandling);

  const { data: opptjening } = useQuery(
    prioriter(api.opptjeningOptions(standardPanelProps.behandling, !harIngenAksjonspunkt)),
  );

  return harIngenAksjonspunkt ? (
    <InngangsvilkarOverstyringDefaultInitPanel
      standardPanelProps={standardPanelProps}
      vilkårKoder={VILKAR_KODER}
      inngangsvilkårPanelKode={PANEL_ID}
      hentInngangsvilkårPanelTekst={intl.formatMessage({ id: 'OpptjeningVilkarView.VurderOmSøkerHarRett' })}
      overstyringApKode={AksjonspunktKode.OVERSTYRING_AV_OPPTJENINGSVILKÅRET}
    >
      <OverstyringPanelDef vilkårKoder={VILKAR_KODER} panelTekstKode="Inngangsvilkar.Opptjeningsvilkaret" />
    </InngangsvilkarOverstyringDefaultInitPanel>
  ) : (
    <InngangsvilkarDefaultInitPanel
      standardPanelProps={standardPanelProps}
      vilkårKoder={VILKAR_KODER}
      inngangsvilkårPanelKode={PANEL_ID}
      hentInngangsvilkårPanelTekst={intl.formatMessage({ id: 'OpptjeningVilkarView.VurderOmSøkerHarRett' })}
    >
      <>
        {opptjening && (
          <OpptjeningVilkarProsessIndex
            fastsattOpptjening={opptjening.fastsattOpptjening}
            status={standardPanelProps.status}
          />
        )}
      </>
    </InngangsvilkarDefaultInitPanel>
  );
};

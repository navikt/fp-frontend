import { useIntl } from 'react-intl';

import { useQuery } from '@tanstack/react-query';

import { OpptjeningVilkarProsessIndex } from '@navikt/fp-prosess-vilkar-opptjening';
import type { AksjonspunktKode, VilkårType } from '@navikt/fp-types';

import { useBehandlingApi } from '../../../../data/behandlingApi';
import {
  InngangsvilkarDefaultInitPanel,
  InngangsvilkarOverstyringDefaultInitPanel,
} from '../../../felles/prosess/InngangsvilkarDefaultInitPanel';
import { OverstyringPanelDef } from '../../../felles/prosess/OverstyringPanelDef';
import { useStandardProsessPanelProps } from '../../../felles/prosess/useStandardProsessPanelProps';

const AKSJONSPUNKT_KODER: AksjonspunktKode[] = ['5089'];

const VILKAR_KODER: VilkårType[] = ['FP_VK_21', 'FP_VK_23'];

export const OpptjeningInngangsvilkarFpInitPanel = () => {
  const intl = useIntl();

  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, VILKAR_KODER);

  const harIngenAksjonspunkt = standardPanelProps.aksjonspunkterForPanel.length === 0;

  const api = useBehandlingApi(standardPanelProps.behandling);

  const { data: opptjening } = useQuery(api.opptjeningOptions(standardPanelProps.behandling, !harIngenAksjonspunkt));

  return harIngenAksjonspunkt ? (
    <InngangsvilkarOverstyringDefaultInitPanel
      standardPanelProps={standardPanelProps}
      vilkårKoder={VILKAR_KODER}
      inngangsvilkårPanelKode="OPPTJENINGSVILKARET"
      hentInngangsvilkårPanelTekst={intl.formatMessage({ id: 'OpptjeningVilkarView.VurderOmSøkerHarRett' })}
      overstyringApKode="6011"
    >
      <OverstyringPanelDef
        vilkår={standardPanelProps.vilkårForPanel}
        vilkårKoder={VILKAR_KODER}
        panelTekstKode="Inngangsvilkar.Opptjeningsvilkaret"
      />
    </InngangsvilkarOverstyringDefaultInitPanel>
  ) : (
    <InngangsvilkarDefaultInitPanel
      standardPanelProps={standardPanelProps}
      vilkårKoder={VILKAR_KODER}
      inngangsvilkårPanelKode="OPPTJENINGSVILKARET"
      hentInngangsvilkårPanelTekst={intl.formatMessage({ id: 'OpptjeningVilkarView.VurderOmSøkerHarRett' })}
    >
      <>
        {opptjening && (
          <OpptjeningVilkarProsessIndex
            lovReferanse={standardPanelProps.vilkårForPanel[0]!.lovReferanse ?? undefined}
            status={standardPanelProps.status}
            opptjening={opptjening}
          />
        )}
      </>
    </InngangsvilkarDefaultInitPanel>
  );
};

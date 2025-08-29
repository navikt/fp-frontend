import { use } from 'react';
import { useIntl } from 'react-intl';

import { useQuery } from '@tanstack/react-query';

import { AksjonspunktKode, VilkarType } from '@navikt/fp-kodeverk';
import { OpptjeningVilkarProsessIndex } from '@navikt/fp-prosess-vilkar-opptjening';

import { useBehandlingApi } from '../../../../data/behandlingApi';
import { BehandlingDataContext } from '../../../felles/context/BehandlingDataContext';
import {
  InngangsvilkarDefaultInitPanel,
  InngangsvilkarOverstyringDefaultInitPanel,
} from '../../../felles/prosess/InngangsvilkarDefaultInitPanel';
import { OverstyringPanelDef } from '../../../felles/prosess/OverstyringPanelDef';
import { useStandardProsessPanelProps } from '../../../felles/prosess/useStandardProsessPanelProps';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.VURDER_OPPTJENINGSVILKARET];

const VILKAR_KODER = [VilkarType.OPPTJENINGSPERIODE, VilkarType.OPPTJENINGSVILKARET];

export const OpptjeningInngangsvilkarInitPanel = () => {
  const intl = useIntl();

  const { behandling } = use(BehandlingDataContext);

  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, VILKAR_KODER);
  const harIngenAksjonspunkt = standardPanelProps.aksjonspunkterForPanel.length === 0;

  const api = useBehandlingApi(behandling);

  const { data: opptjening } = useQuery(api.opptjeningOptions(behandling, !harIngenAksjonspunkt));

  return harIngenAksjonspunkt ? (
    <InngangsvilkarOverstyringDefaultInitPanel
      standardPanelProps={standardPanelProps}
      vilkårKoder={VILKAR_KODER}
      inngangsvilkårPanelKode="OPPTJENINGSVILKARET"
      hentInngangsvilkårPanelTekst={intl.formatMessage({ id: 'OpptjeningVilkarView.VurderOmSøkerHarRett' })}
      overstyringApKode={AksjonspunktKode.OVERSTYRING_AV_OPPTJENINGSVILKARET}
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
            erSvpFagsak
            lovReferanse={standardPanelProps.vilkårForPanel[0].lovReferanse ?? undefined}
            opptjening={opptjening}
            readOnlySubmitButton={standardPanelProps.readOnlySubmitButton}
            status={standardPanelProps.status}
          />
        )}
      </>
    </InngangsvilkarDefaultInitPanel>
  );
};

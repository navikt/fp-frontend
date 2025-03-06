import { use } from 'react';
import { useIntl } from 'react-intl';

import { useQuery } from '@tanstack/react-query';

import { AksjonspunktKode, VilkarType } from '@navikt/fp-kodeverk';
import { OpptjeningVilkarProsessIndex } from '@navikt/fp-prosess-vilkar-opptjening';

import { useBehandlingApi } from '../../../../data/behandlingApi';
import {
  InngangsvilkarDefaultInitPanel,
  InngangsvilkarOverstyringDefaultInitPanel,
} from '../../../felles/prosess/InngangsvilkarDefaultInitPanel';
import { OverstyringPanelDef } from '../../../felles/prosess/OverstyringPanelDef';
import { useStandardProsessPanelProps } from '../../../felles/prosess/useStandardProsessPanelProps';
import { BehandlingDataContext } from '../../../felles/utils/behandlingDataContext';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.VURDER_OPPTJENINGSVILKARET];

const VILKAR_KODER = [VilkarType.OPPTJENINGSPERIODE, VilkarType.OPPTJENINGSVILKARET];

export const OpptjeningInngangsvilkarInitPanel = () => {
  const intl = useIntl();

  const { behandling } = use(BehandlingDataContext);

  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, VILKAR_KODER);

  const api = useBehandlingApi(behandling);

  const { data: opptjening } = useQuery(api.opptjeningOptions(behandling));

  return standardPanelProps.aksjonspunkter.length === 0 ? (
    <InngangsvilkarOverstyringDefaultInitPanel
      standardPanelProps={standardPanelProps}
      vilkarKoder={VILKAR_KODER}
      inngangsvilkarPanelKode="OPPTJENINGSVILKARET"
      hentInngangsvilkarPanelTekst={intl.formatMessage({ id: 'OpptjeningVilkarView.VurderOmSøkerHarRett' })}
      overstyringApKode={AksjonspunktKode.OVERSTYRING_AV_OPPTJENINGSVILKARET}
    >
      <OverstyringPanelDef
        vilkar={standardPanelProps.vilkar}
        vilkarKoder={VILKAR_KODER}
        panelTekstKode="Inngangsvilkar.Opptjeningsvilkaret"
      />
    </InngangsvilkarOverstyringDefaultInitPanel>
  ) : (
    <InngangsvilkarDefaultInitPanel
      standardPanelProps={standardPanelProps}
      vilkarKoder={VILKAR_KODER}
      inngangsvilkarPanelKode="OPPTJENINGSVILKARET"
      hentInngangsvilkarPanelTekst={intl.formatMessage({ id: 'OpptjeningVilkarView.VurderOmSøkerHarRett' })}
    >
      <>
        {opptjening && (
          <OpptjeningVilkarProsessIndex
            erSvpFagsak
            lovReferanse={standardPanelProps.vilkar[0].lovReferanse}
            opptjening={opptjening}
            readOnlySubmitButton={standardPanelProps.readOnlySubmitButton}
            status={standardPanelProps.status}
          />
        )}
      </>
    </InngangsvilkarDefaultInitPanel>
  );
};

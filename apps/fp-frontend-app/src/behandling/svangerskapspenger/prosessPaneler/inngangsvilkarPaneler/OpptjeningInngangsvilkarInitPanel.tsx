import { use } from 'react';
import { useIntl } from 'react-intl';

import { useQuery } from '@tanstack/react-query';

import { AksjonspunktKode, VilkarType } from '@navikt/fp-kodeverk';
import { OpptjeningVilkarProsessIndex } from '@navikt/fp-prosess-vilkar-opptjening';
import { PanelOverstyringProvider } from '@navikt/fp-utils';

import { useBehandlingApi } from '../../../../data/behandlingApi';
import { InngangsvilkarDefaultInitPanel } from '../../../felles/prosess/InngangsvilkarDefaultInitPanel';
import { OverstyringPanelDef } from '../../../felles/prosess/OverstyringPanelDef';
import { useStandardProsessPanelProps } from '../../../felles/prosess/useStandardProsessPanelProps';
import type { InngangsvilkarPanelInitProps } from '../../../felles/typer/inngangsvilkarPanelInitProps';
import { BehandlingDataContext } from '../../../felles/utils/behandlingDataContext';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.VURDER_OPPTJENINGSVILKARET];

const VILKAR_KODER = [VilkarType.OPPTJENINGSPERIODE, VilkarType.OPPTJENINGSVILKARET];

export const OpptjeningInngangsvilkarInitPanel = (props: InngangsvilkarPanelInitProps) => {
  const intl = useIntl();

  const { behandling, rettigheter } = use(BehandlingDataContext);

  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, VILKAR_KODER);

  const api = useBehandlingApi(behandling);

  const { data: opptjening } = useQuery(api.opptjeningOptions(behandling));

  return (
    <InngangsvilkarDefaultInitPanel
      {...props}
      standardPanelProps={standardPanelProps}
      behandlingVersjon={behandling.versjon}
      vilkarKoder={VILKAR_KODER}
      inngangsvilkarPanelKode="OPPTJENINGSVILKARET"
      hentInngangsvilkarPanelTekst={intl.formatMessage({ id: 'OpptjeningVilkarView.VurderOmSøkerHarRett' })}
      renderPanel={({ erOverstyrt, toggleOverstyring }) => (
        <>
          {standardPanelProps.aksjonspunkter.length === 0 && (
            <PanelOverstyringProvider
              overstyringApKode={AksjonspunktKode.OVERSTYRING_AV_OPPTJENINGSVILKARET}
              kanOverstyreAccess={rettigheter.kanOverstyreAccess}
              overrideReadOnly={
                standardPanelProps.isReadOnly ||
                (props.harInngangsvilkarApentAksjonspunkt && !(standardPanelProps.isAksjonspunktOpen || erOverstyrt))
              }
              toggleOverstyring={toggleOverstyring}
            >
              <OverstyringPanelDef
                vilkar={standardPanelProps.vilkar}
                vilkarKoder={VILKAR_KODER}
                panelTekstKode="Inngangsvilkar.Opptjeningsvilkaret"
              />
            </PanelOverstyringProvider>
          )}
          {standardPanelProps.aksjonspunkter.length > 0 && opptjening && (
            <OpptjeningVilkarProsessIndex
              erSvpFagsak
              lovReferanse={standardPanelProps.vilkar[0].lovReferanse}
              opptjening={opptjening}
              readOnlySubmitButton={standardPanelProps.readOnlySubmitButton}
              status={standardPanelProps.status}
            />
          )}
        </>
      )}
    />
  );
};

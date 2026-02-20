import { type ReactElement } from 'react';

import { ProsessStegCode } from '@navikt/fp-konstanter';
import type { Behandling, BehandlingFpSak, VilkårUtfallType } from '@navikt/fp-types';
import { MellomlagretFormDataProvider, PanelDataProvider, usePanelOverstyring } from '@navikt/fp-utils';

import { useBehandlingDataContext } from '../context/BehandlingDataContext';
import { ProsessPanelWrapper } from './ProsessPanelWrapper';
import { useProsessMenyRegistrerer } from './useProsessMenyRegistrerer';
import type { StandardProsessPanelProps } from './useStandardProsessPanelProps';

interface Props<T extends Behandling> {
  skalPanelVisesIMeny: boolean;
  overstyrtStatus?: VilkårUtfallType;
  prosessPanelKode: ProsessStegCode;
  prosessPanelMenyTekst: string;
  skalMarkeresSomAktiv?: boolean;
  standardPanelProps: StandardProsessPanelProps<T>;
  children: ReactElement;
}

export const ProsessDefaultInitPanel = <T extends Behandling = BehandlingFpSak>(props: Props<T>) => {
  return <ProsessPanel<T> {...props} harÅpentAksjonspunkt={props.standardPanelProps.harÅpentAksjonspunkt} />;
};

export const ProsessDefaultInitOverstyringPanel = <T extends Behandling = BehandlingFpSak>(props: Props<T>) => {
  const { erOverstyrt } = usePanelOverstyring();

  const harÅpentAksjonspunkt = erOverstyrt || props.standardPanelProps.harÅpentAksjonspunkt;

  return <ProsessPanel {...props} harÅpentAksjonspunkt={harÅpentAksjonspunkt} />;
};

interface ProsessPanel {
  harÅpentAksjonspunkt: boolean;
}

const ProsessPanel = <T extends Behandling>({
  overstyrtStatus,
  skalMarkeresSomAktiv,
  skalPanelVisesIMeny,
  prosessPanelKode,
  prosessPanelMenyTekst,
  standardPanelProps,
  harÅpentAksjonspunkt,
  children,
}: Props<T> & ProsessPanel) => {
  const { behandling, fagsak, alleKodeverk } = useBehandlingDataContext<T>();

  const status = overstyrtStatus ?? standardPanelProps.status;

  const markertSomAktiv = !!skalMarkeresSomAktiv && !behandling.behandlingHenlagt;

  const erPanelValgt = useProsessMenyRegistrerer(
    prosessPanelKode,
    prosessPanelMenyTekst,
    skalPanelVisesIMeny,
    harÅpentAksjonspunkt,
    status,
    markertSomAktiv || harÅpentAksjonspunkt,
  );

  const skalVisePanel = erPanelValgt && (harÅpentAksjonspunkt || status !== 'IKKE_VURDERT');

  return (
    <MellomlagretFormDataProvider behandling={behandling}>
      <ProsessPanelWrapper
        erPanelValgt={erPanelValgt}
        harÅpentAksjonspunkt={standardPanelProps.harÅpentAksjonspunkt}
        status={status}
      >
        {skalVisePanel ? (
          <PanelDataProvider
            fagsak={fagsak}
            behandling={behandling}
            alleKodeverk={alleKodeverk}
            alleMerknaderFraBeslutter={standardPanelProps.alleMerknaderFraBeslutter}
            aksjonspunkterForPanel={standardPanelProps.aksjonspunkterForPanel}
            vilkårForPanel={standardPanelProps.vilkårForPanel}
            harÅpentAksjonspunkt={standardPanelProps.harÅpentAksjonspunkt}
            isReadOnly={standardPanelProps.isReadOnly}
            isSubmittable={standardPanelProps.isSubmittable}
            submitCallback={standardPanelProps.submitCallback}
          >
            {children}
          </PanelDataProvider>
        ) : null}
      </ProsessPanelWrapper>
    </MellomlagretFormDataProvider>
  );
};

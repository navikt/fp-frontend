import { type ReactElement, use } from 'react';

import { VilkarUtfallType } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { MellomlagretFormDataProvider, PanelDataProvider, usePanelOverstyring } from '@navikt/fp-utils';

import { BehandlingDataContext } from '../context/BehandlingDataContext';
import { ProsessPanelWrapper } from './ProsessPanelWrapper';
import { useProsessMenyRegistrerer } from './useProsessMenyRegistrerer';
import type { StandardProsessPanelProps } from './useStandardProsessPanelProps';

interface Props {
  skalPanelVisesIMeny: boolean;
  overstyrtStatus?: string;
  prosessPanelKode: ProsessStegCode;
  prosessPanelMenyTekst: string;
  skalMarkeresSomAktiv?: boolean;
  standardPanelProps: StandardProsessPanelProps;
  children: ReactElement;
}

export const ProsessDefaultInitPanel = (props: Props) => {
  const { standardPanelProps } = props;
  const harÅpentAksjonspunkt = standardPanelProps.harÅpentAksjonspunkt;

  return <ProsessPanel {...props} harÅpentAksjonspunkt={harÅpentAksjonspunkt} />;
};

export const ProsessDefaultInitOverstyringPanel = (props: Props) => {
  const { erOverstyrt } = usePanelOverstyring();

  const { standardPanelProps } = props;
  const harÅpentAksjonspunkt = erOverstyrt || standardPanelProps.harÅpentAksjonspunkt;

  return <ProsessPanel {...props} harÅpentAksjonspunkt={harÅpentAksjonspunkt} />;
};

interface ProsessPanel {
  harÅpentAksjonspunkt: boolean;
}

const ProsessPanel = ({
  overstyrtStatus,
  skalMarkeresSomAktiv,
  skalPanelVisesIMeny,
  prosessPanelKode,
  prosessPanelMenyTekst,
  standardPanelProps,
  harÅpentAksjonspunkt,
  children,
}: Props & ProsessPanel) => {
  const { behandling, fagsak, alleKodeverk } = use(BehandlingDataContext);

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

  const skalVisePanel = erPanelValgt && (harÅpentAksjonspunkt || status !== VilkarUtfallType.IKKE_VURDERT);

  return (
    <MellomlagretFormDataProvider behandling={behandling}>
      <ProsessPanelWrapper
        erPanelValgt={erPanelValgt}
        erAksjonspunktOpent={standardPanelProps.harÅpentAksjonspunkt}
        status={status}
      >
        {skalVisePanel ? (
          <PanelDataProvider
            behandling={behandling}
            fagsak={fagsak}
            aksjonspunkterForPanel={standardPanelProps.aksjonspunkterForPanel}
            harÅpentAksjonspunkt={standardPanelProps.harÅpentAksjonspunkt}
            alleKodeverk={alleKodeverk}
            submitCallback={standardPanelProps.submitCallback}
            isReadOnly={standardPanelProps.isReadOnly}
            alleMerknaderFraBeslutter={standardPanelProps.alleMerknaderFraBeslutter}
          >
            {children}
          </PanelDataProvider>
        ) : null}
      </ProsessPanelWrapper>
    </MellomlagretFormDataProvider>
  );
};

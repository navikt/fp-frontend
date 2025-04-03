import { type ReactElement, use } from 'react';

import { VilkarUtfallType } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { MellomlagretFormDataProvider, PanelDataProvider, usePanelOverstyring } from '@navikt/fp-utils';

import type { StandardProsessPanelProps } from '../typer/standardProsessPanelPropsTsType';
import { BehandlingDataContext } from '../utils/behandlingDataContext';
import { ProsessPanelWrapper } from './ProsessPanelWrapper';
import { useProsessMenyRegistrerer } from './useProsessMenyRegistrerer';

export type Props = {
  skalPanelVisesIMeny: boolean;
  overstyrtStatus?: string;
  prosessPanelKode: ProsessStegCode;
  prosessPanelMenyTekst: string;
  skalMarkeresSomAktiv?: boolean;
  standardPanelProps: StandardProsessPanelProps;
  children: ReactElement;
};

export const ProsessDefaultInitPanel = (props: Props) => {
  const { standardPanelProps } = props;
  const harApentAksjonspunkt = standardPanelProps.isAksjonspunktOpen;

  return <ProsessPanel {...props} harApentAksjonspunkt={harApentAksjonspunkt} />;
};

export const ProsessDefaultInitOverstyringPanel = (props: Props) => {
  const { erOverstyrt } = usePanelOverstyring();

  const { standardPanelProps } = props;
  const harApentAksjonspunkt = erOverstyrt ?? standardPanelProps.isAksjonspunktOpen;

  return <ProsessPanel {...props} harApentAksjonspunkt={harApentAksjonspunkt} />;
};

export type ProsessPanel = {
  harApentAksjonspunkt: boolean;
};

const ProsessPanel = ({
  overstyrtStatus,
  skalMarkeresSomAktiv,
  skalPanelVisesIMeny,
  prosessPanelKode,
  prosessPanelMenyTekst,
  standardPanelProps,
  harApentAksjonspunkt,
  children,
}: Props & ProsessPanel) => {
  const { behandling, fagsak, alleKodeverk } = use(BehandlingDataContext);

  const status = overstyrtStatus ?? standardPanelProps.status;

  const markertSomAktiv = !!skalMarkeresSomAktiv && !behandling.behandlingHenlagt;

  const erPanelValgt = useProsessMenyRegistrerer(
    prosessPanelKode,
    prosessPanelMenyTekst,
    skalPanelVisesIMeny,
    harApentAksjonspunkt,
    status,
    markertSomAktiv || harApentAksjonspunkt,
  );

  const skalVisePanel = erPanelValgt && (harApentAksjonspunkt || status !== VilkarUtfallType.IKKE_VURDERT);

  return (
    <MellomlagretFormDataProvider behandling={behandling}>
      <ProsessPanelWrapper
        erPanelValgt={erPanelValgt}
        erAksjonspunktOpent={standardPanelProps.isAksjonspunktOpen}
        status={status}
      >
        {skalVisePanel ? (
          <PanelDataProvider
            behandling={behandling}
            fagsak={fagsak}
            aksjonspunkterForPanel={standardPanelProps.aksjonspunkter}
            harÅpneAksjonspunkter={standardPanelProps.isAksjonspunktOpen}
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

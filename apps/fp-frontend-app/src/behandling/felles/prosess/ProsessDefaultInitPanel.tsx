import { type ReactElement, use } from 'react';

import { VilkarUtfallType } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { FormDataProvider, PanelDataProvider, usePanelOverstyring } from '@navikt/fp-utils';

import type { ProsessPanelInitProps } from '../typer/prosessPanelInitProps';
import type { StandardProsessPanelProps } from '../typer/standardProsessPanelPropsTsType';
import { BehandlingDataContext } from '../utils/behandlingDataContext';
import { ProsessPanelWrapper } from './ProsessPanelWrapper';
import { useProsessMenyRegistrerer } from './useProsessMenyRegistrerer';

export type Props = {
  skalPanelVisesIMeny: boolean;
  hentOverstyrtStatus?: string;
  prosessPanelKode: ProsessStegCode;
  prosessPanelMenyTekst: string;
  hentSkalMarkeresSomAktiv?: boolean;
  standardPanelProps: StandardProsessPanelProps;
  children: ReactElement;
};

export const ProsessDefaultInitPanel = (props: Props & ProsessPanelInitProps) => {
  const { standardPanelProps } = props;
  const harApentAksjonspunkt = standardPanelProps.isAksjonspunktOpen;

  return <ProsessPanel {...props} harApentAksjonspunkt={harApentAksjonspunkt} />;
};

export const ProsessDefaultInitOverstyringPanel = (props: Props & ProsessPanelInitProps) => {
  const { erOverstyrt } = usePanelOverstyring();

  const { standardPanelProps } = props;
  const harApentAksjonspunkt = erOverstyrt || standardPanelProps.isAksjonspunktOpen;

  return <ProsessPanel {...props} harApentAksjonspunkt={harApentAksjonspunkt} />;
};

export type ProsessPanel = {
  harApentAksjonspunkt: boolean;
};

const ProsessPanel = ({
  valgtProsessSteg,
  hentOverstyrtStatus,
  registrerProsessPanel,
  hentSkalMarkeresSomAktiv,
  skalPanelVisesIMeny,
  prosessPanelKode,
  prosessPanelMenyTekst,
  standardPanelProps,
  harApentAksjonspunkt,
  children,
}: Props & ProsessPanel & ProsessPanelInitProps) => {
  const { behandling, fagsak, alleKodeverk } = use(BehandlingDataContext);

  const status = hentOverstyrtStatus ?? standardPanelProps.status;

  const skalMarkeresSomAktiv = !!hentSkalMarkeresSomAktiv && !behandling.behandlingHenlagt;

  const erPanelValgt = useProsessMenyRegistrerer(
    registrerProsessPanel,
    prosessPanelKode,
    prosessPanelMenyTekst,
    skalPanelVisesIMeny,
    harApentAksjonspunkt,
    status,
    skalMarkeresSomAktiv || harApentAksjonspunkt,
    valgtProsessSteg,
  );

  const skalVisePanel = erPanelValgt && (harApentAksjonspunkt || status !== VilkarUtfallType.IKKE_VURDERT);

  return (
    <FormDataProvider behandling={behandling}>
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
    </FormDataProvider>
  );
};

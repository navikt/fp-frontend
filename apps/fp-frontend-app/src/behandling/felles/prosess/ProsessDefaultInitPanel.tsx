import { ReactElement, use } from 'react';

import { VilkarUtfallType } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { StandardProsessPanelProps } from '@navikt/fp-types';
import { FormDataProvider, PanelProvider, usePanelOverstyring } from '@navikt/fp-utils';

import { ProsessPanelInitProps } from '../typer/prosessPanelInitProps';
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
  const { behandling } = use(BehandlingDataContext);

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
<<<<<<< Updated upstream
    <FormDataProvider behandling={behandling}>
      <ProsessPanelWrapper
        erPanelValgt={erPanelValgt}
        erAksjonspunktOpent={standardPanelProps.isAksjonspunktOpen}
        status={status}
      >
        {skalVisePanel ? children : null}
      </ProsessPanelWrapper>
    </FormDataProvider>
=======
    <ProsessPanelWrapper
      erPanelValgt={erPanelValgt}
      erAksjonspunktOpent={standardPanelProps.isAksjonspunktOpen}
      status={status}
    >
      <FormDataProvider behandling={behandling}>
        {skalVisePanel ? (
          <PanelProvider
            behandling={behandling}
            fagsak={standardPanelProps.fagsak}
            aksjonspunkterForPanel={standardPanelProps.aksjonspunkter}
            harÅpneAksjonspunkter={standardPanelProps.isAksjonspunktOpen}
            alleKodeverk={standardPanelProps.alleKodeverk}
            submitCallback={standardPanelProps.submitCallback}
            isReadOnly={standardPanelProps.isReadOnly}
            alleMerknaderFraBeslutter={standardPanelProps.alleMerknaderFraBeslutter}
          >
            {children}
          </PanelProvider>
        ) : null}
      </FormDataProvider>
    </ProsessPanelWrapper>
>>>>>>> Stashed changes
  );
};

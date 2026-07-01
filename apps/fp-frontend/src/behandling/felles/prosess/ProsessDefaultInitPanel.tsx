import { type ReactElement } from 'react';

import { ProsessStegCode } from '@navikt/fp-konstanter';
import type { Behandling, BehandlingFpSak, VilkårUtfallType } from '@navikt/fp-types';
import { MellomlagretFormDataProvider, usePanelOverstyring } from '@navikt/fp-utils';

import { BehandlingPanelDataProvider } from '../panelData/BehandlingPanelDataProvider';
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

interface ProsessPanelInterneProps {
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
}: Props<T> & ProsessPanelInterneProps) => {
  const { behandling } = standardPanelProps;

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
      <ProsessPanelWrapper erPanelValgt={erPanelValgt} harÅpentAksjonspunkt={harÅpentAksjonspunkt} status={status}>
        {skalVisePanel ? (
          <BehandlingPanelDataProvider panelData={{ ...standardPanelProps, harÅpentAksjonspunkt }}>
            {children}
          </BehandlingPanelDataProvider>
        ) : null}
      </ProsessPanelWrapper>
    </MellomlagretFormDataProvider>
  );
};

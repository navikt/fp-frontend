import { ReactElement, use } from 'react';

import { VilkarUtfallType } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { StandardProsessPanelProps } from '@navikt/fp-types';
import { FormDataProvider } from '@navikt/fp-utils';

import { ProsessPanelInitProps } from '../typer/prosessPanelInitProps';
import { BehandlingDataContext } from '../utils/behandlingDataContext';
import { ProsessPanelWrapper } from './ProsessPanelWrapper';
import { useProsessMenyRegistrerer } from './useProsessMenyRegistrerer';

export type Props = {
  skalPanelVisesIMeny: boolean;
  hentOverstyrtStatus?: string;
  prosessPanelKode: ProsessStegCode;
  prosessPanelMenyTekst: string;
  erOverstyrt?: boolean;
  hentSkalMarkeresSomAktiv?: boolean;
  standardPanelProps: StandardProsessPanelProps;
  children: ReactElement;
};

export const ProsessDefaultInitPanel = ({
  valgtProsessSteg,
  registrerProsessPanel,
  skalPanelVisesIMeny,
  prosessPanelKode,
  prosessPanelMenyTekst,
  hentOverstyrtStatus,
  erOverstyrt = false,
  hentSkalMarkeresSomAktiv,
  standardPanelProps,
  children,
}: Props & ProsessPanelInitProps) => {
  const status = hentOverstyrtStatus ?? standardPanelProps.status;

  const { behandling } = use(BehandlingDataContext);

  const skalMarkeresSomAktiv = hentSkalMarkeresSomAktiv && !behandling.behandlingHenlagt;

  const harApentAksjonspunkt = erOverstyrt || standardPanelProps.isAksjonspunktOpen;

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
        {skalVisePanel ? children : null}
      </ProsessPanelWrapper>
    </FormDataProvider>
  );
};

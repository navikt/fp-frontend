import { ReactElement } from 'react';

import { VilkarUtfallType } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { StandardProsessPanelProps } from '@navikt/fp-types';

import { ProsessPanelInitProps } from '../typer/prosessPanelInitProps';
import { ProsessPanelWrapper } from './ProsessPanelWrapperNew';
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
  behandling,
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

  const skalHenteData = erPanelValgt && (harApentAksjonspunkt || status !== VilkarUtfallType.IKKE_VURDERT);

  return (
    <ProsessPanelWrapper
      erPanelValgt={erPanelValgt}
      erAksjonspunktOpent={standardPanelProps.isAksjonspunktOpen}
      status={status}
    >
      {skalHenteData ? children : null}
    </ProsessPanelWrapper>
  );
};

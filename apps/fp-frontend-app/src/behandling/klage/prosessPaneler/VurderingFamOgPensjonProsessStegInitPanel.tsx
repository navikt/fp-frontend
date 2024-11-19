import React from 'react';
import { useIntl } from 'react-intl';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { Fagsak } from '@navikt/fp-types';

import { ProsessPanelInitProps } from '../../felles/typer/prosessPanelInitProps';
import { VurderingFellesProsessStegInitPanel } from './VurderingFellesProsessStegInitPanel';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.BEHANDLE_KLAGE_NFP];

interface Props {
  fagsak: Fagsak;
  setSkalOppdatereEtterBekreftelseAvAp: (skalHenteFagsak: boolean) => void;
  opneSokeside: () => void;
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  hentOgSettBehandling: (keepData?: boolean) => void;
}

export const VurderingFamOgPensjonProsessStegInitPanel = ({
  fagsak,
  setSkalOppdatereEtterBekreftelseAvAp,
  opneSokeside,
  oppdaterProsessStegOgFaktaPanelIUrl,
  hentOgSettBehandling,
  ...props
}: Props & ProsessPanelInitProps) => (
  <VurderingFellesProsessStegInitPanel
    {...props}
    fagsak={fagsak}
    setSkalOppdatereEtterBekreftelseAvAp={setSkalOppdatereEtterBekreftelseAvAp}
    opneSokeside={opneSokeside}
    oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    prosessPanelKode={ProsessStegCode.KLAGE_NAV_FAMILIE_OG_PENSJON}
    prosessPanelMenyTekst={useIntl().formatMessage({ id: 'Behandlingspunkt.CheckKlageNFP' })}
    hentOgSettBehandling={hentOgSettBehandling}
  />
);

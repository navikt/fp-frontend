import React from 'react';
import { useIntl } from 'react-intl';

import { ProsessStegCode } from '@navikt/fp-konstanter';
import { Fagsak } from '@navikt/fp-types';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import { ProsessPanelInitProps } from '../../felles/typer/prosessPanelInitProps';
import { VurderingFellesProsessStegInitPanel } from './VurderingFellesProsessStegInitPanel';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.BEHANDLE_KLAGE_NK];

interface Props {
  fagsak: Fagsak;
  hentOgSettBehandling: (keepData?: boolean) => void;
}

export const VurderingKlageInstansProsessStegInitPanel = ({
  fagsak,
  hentOgSettBehandling,
  ...props
}: Props & ProsessPanelInitProps) => (
  <VurderingFellesProsessStegInitPanel
    {...props}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    fagsak={fagsak}
    prosessPanelKode={ProsessStegCode.KLAGE_NAV_KLAGEINSTANS}
    prosessPanelMenyTekst={useIntl().formatMessage({ id: 'Behandlingspunkt.CheckKlageNK' })}
    hentOgSettBehandling={hentOgSettBehandling}
  />
);

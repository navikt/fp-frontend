import React from 'react';
import { useIntl } from 'react-intl';

import { VilkarUtfallType } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { AnkeProsessIndex } from '@navikt/fp-prosess-anke';
import { AnkeVurdering } from '@navikt/fp-types';

import { BehandlingApiKeys } from '../../../data/behandlingContextApi';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { ProsessPanelInitProps } from '../../felles/typer/prosessPanelInitProps';

const ENDEPUNKTER_PANEL_DATA = [BehandlingApiKeys.ANKE_VURDERING];
type EndepunktPanelData = {
  ankeVurdering: AnkeVurdering;
};

interface Props {
  alleBehandlinger: {
    uuid: string;
    type: string;
    avsluttet?: string;
    opprettet: string;
    status: string;
  }[];
}

export const AnkeBehandlingProsessStegInitPanel = ({ alleBehandlinger, ...props }: Props & ProsessPanelInitProps) => {
  const intl = useIntl();
  const { behandling } = props;
  return (
    <ProsessDefaultInitPanel<EndepunktPanelData>
      {...props}
      panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
      prosessPanelKode={ProsessStegCode.ANKEBEHANDLING}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.Ankebehandling' })}
      skalPanelVisesIMeny={() => true}
      hentOverstyrtStatus={() =>
        behandling.behandlingsresultat?.type ? VilkarUtfallType.OPPFYLT : VilkarUtfallType.IKKE_VURDERT
      }
      renderPanel={data => <AnkeProsessIndex behandlinger={alleBehandlinger} {...data} />}
    />
  );
};

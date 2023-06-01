import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { VilkarUtfallType } from '@navikt/ft-kodeverk';

import { AnkeProsessIndex } from '@navikt/fp-prosess-anke';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { AnkeVurdering } from '@navikt/fp-types';

import ProsessDefaultInitPanel from '../../felles/prosess/ProsessDefaultInitPanel';
import ProsessPanelInitProps from '../../felles/typer/prosessPanelInitProps';
import { BehandlingApiKeys } from '../../../data/behandlingContextApi';

const ENDEPUNKTER_PANEL_DATA = [BehandlingApiKeys.ANKE_VURDERING];
type EndepunktPanelData = {
  ankeVurdering: AnkeVurdering;
};

interface OwnProps {
  alleBehandlinger: {
    uuid: string;
    type: string;
    avsluttet?: string;
  }[];
}

const AnkeBehandlingProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  alleBehandlinger,
  ...props
}) => {
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

export default AnkeBehandlingProsessStegInitPanel;

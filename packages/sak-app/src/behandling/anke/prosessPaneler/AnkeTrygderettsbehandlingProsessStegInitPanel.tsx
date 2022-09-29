import React, {
  FunctionComponent,
} from 'react';
import { useIntl } from 'react-intl';
import { VilkarUtfallType } from '@navikt/ft-kodeverk';

import AnkeTrygderettsbehandlingProsessIndex from '@fpsak-frontend/prosess-anke-trygderettsbehandling';
import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import { AnkeVurdering } from '@fpsak-frontend/types';

import ProsessDefaultInitPanel from '../../felles/prosess/ProsessDefaultInitPanel';
import ProsessPanelInitProps from '../../felles/typer/prosessPanelInitProps';
import { requestAnkeApi, AnkeBehandlingApiKeys } from '../data/ankeBehandlingApi';

const ENDEPUNKTER_INIT_DATA = [AnkeBehandlingApiKeys.ANKE_VURDERING];
type EndepunktInitData = {
  ankeVurdering: AnkeVurdering;
}

const AnkeTrygderettsbehandlingProsessStegInitPanel: FunctionComponent<ProsessPanelInitProps> = ({
  ...props
}) => {
  const intl = useIntl();
  return (
    <ProsessDefaultInitPanel<EndepunktInitData>
      {...props}
      requestApi={requestAnkeApi}
      initEndepunkter={ENDEPUNKTER_INIT_DATA}
      prosessPanelKode={ProsessStegCode.ANKE_MERKNADER}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.AnkeMerknader' })}
      skalPanelVisesIMeny={() => true}
      hentOverstyrtStatus={(data) => (data.ankeVurdering?.ankeVurderingResultat ? VilkarUtfallType.OPPFYLT : VilkarUtfallType.IKKE_VURDERT)}
      renderPanel={(data) => (
        <AnkeTrygderettsbehandlingProsessIndex
          // @ts-ignore
          {...data}
        />
      )}
    />
  );
};

export default AnkeTrygderettsbehandlingProsessStegInitPanel;

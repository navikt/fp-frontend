import { useNavigate } from 'react-router-dom';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import type { BehandlingFpTilbake } from '@navikt/fp-types';

import { useFagsakApi } from '../../data/fagsakApi';
import { useBehandlingDataContext } from '../felles/context/BehandlingDataContext';
import { FaktaMeny } from '../felles/fakta/FaktaMeny';
import { BehandlingPaVent } from '../felles/modaler/paVent/BehandlingPaVent';
import { ProsessMeny } from '../felles/prosess/ProsessMeny';
import { VergeFaktaInitPanel } from '../fellesPaneler/fakta/VergeFaktaInitPanel';
import { FeilutbetalingFaktaInitPanel } from './faktaPaneler/FeilutbetalingFaktaInitPanel';
import { ForeldelseProsessInitPanel } from './prosessPaneler/ForeldelseProsessInitPanel';
import { TilbakekrevingProsessInitPanel } from './prosessPaneler/TilbakekrevingProsessInitPanel';
import { VedtakTilbakekrevingProsessInitPanel } from './prosessPaneler/VedtakTilbakekrevingProsessInitPanel';

interface Props {
  valgtProsessSteg?: string;
  valgtFaktaSteg?: string;
}

const TilbakekrevingPaneler = ({ valgtProsessSteg, valgtFaktaSteg }: Props) => {
  const { behandling } = useBehandlingDataContext<BehandlingFpTilbake>();

  const api = useFagsakApi();
  const { data: tilbakekrevingKodeverk } = useQuery(api.fptilbake.kodeverkOptions());

  const navigate = useNavigate();

  if (!tilbakekrevingKodeverk) {
    return <LoadingPanel />;
  }

  return (
    <>
      <BehandlingPaVent
        key={behandling.versjon}
        behandling={behandling}
        opneSokeside={() => void navigate('/')}
        kodeverk={tilbakekrevingKodeverk}
        erTilbakekreving
      />
      <ProsessMeny valgtProsessSteg={valgtProsessSteg} valgtFaktaSteg={valgtFaktaSteg}>
        <ForeldelseProsessInitPanel tilbakekrevingKodeverk={tilbakekrevingKodeverk} />
        <TilbakekrevingProsessInitPanel tilbakekrevingKodeverk={tilbakekrevingKodeverk} />
        <VedtakTilbakekrevingProsessInitPanel tilbakekrevingKodeverk={tilbakekrevingKodeverk} />
      </ProsessMeny>
      <FaktaMeny valgtFaktaSteg={valgtFaktaSteg} valgtProsessSteg={valgtProsessSteg}>
        <FeilutbetalingFaktaInitPanel tilbakekrevingKodeverk={tilbakekrevingKodeverk} />
        <VergeFaktaInitPanel />
      </FaktaMeny>
    </>
  );
};

// Default export grunna React.lazy
// eslint-disable-next-line import/no-default-export
export default TilbakekrevingPaneler;

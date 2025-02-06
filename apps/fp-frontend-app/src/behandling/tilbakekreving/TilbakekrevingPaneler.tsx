import { use } from 'react';
import { useNavigate } from 'react-router';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { useFagsakApi } from '../../data/fagsakApi';
import { BehandlingContainer } from '../felles/BehandlingContainer';
import { BehandlingPaVent } from '../felles/modaler/paVent/BehandlingPaVent';
import type { FaktaPanelInitProps } from '../felles/typer/faktaPanelInitProps';
import type { ProsessPanelInitProps } from '../felles/typer/prosessPanelInitProps';
import { BehandlingDataContext } from '../felles/utils/behandlingDataContext';
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
  const { behandling } = use(BehandlingDataContext);

  const api = useFagsakApi();
  const { data: tilbakekrevingKodeverk } = useQuery(api.fptilbake.kodeverkOptions());

  const navigate = useNavigate();

  if (!tilbakekrevingKodeverk) {
    return <LoadingPanel />;
  }

  const hentFaktaPaneler = (props: FaktaPanelInitProps) => {
    return (
      <>
        <FeilutbetalingFaktaInitPanel tilbakekrevingKodeverk={tilbakekrevingKodeverk} {...props} />
        <VergeFaktaInitPanel {...props} />
      </>
    );
  };

  const hentProsessPaneler = (props: ProsessPanelInitProps) => {
    return (
      <>
        <ForeldelseProsessInitPanel {...props} tilbakekrevingKodeverk={tilbakekrevingKodeverk} />
        <TilbakekrevingProsessInitPanel {...props} tilbakekrevingKodeverk={tilbakekrevingKodeverk} />
        <VedtakTilbakekrevingProsessInitPanel {...props} tilbakekrevingKodeverk={tilbakekrevingKodeverk} />
      </>
    );
  };

  return (
    <>
      <BehandlingPaVent
        key={behandling.versjon}
        behandling={behandling}
        opneSokeside={() => navigate('/')}
        kodeverk={tilbakekrevingKodeverk}
        erTilbakekreving
      />
      <BehandlingContainer
        valgtProsessSteg={valgtProsessSteg}
        valgtFaktaSteg={valgtFaktaSteg}
        hentFaktaPaneler={hentFaktaPaneler}
        hentProsessPaneler={hentProsessPaneler}
      />
    </>
  );
};

export default TilbakekrevingPaneler;

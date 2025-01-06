import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { BehandlingStatus, BehandlingType } from '@navikt/fp-kodeverk';
import { Behandling, BehandlingAppKontekst, Fagsak } from '@navikt/fp-types';

import { useFagsakApi } from '../../data/fagsakApi';
import { BehandlingContainer } from '../felles/BehandlingContainer';
import { BehandlingPaVent } from '../felles/modaler/paVent/BehandlingPaVent';
import { FaktaPanelInitProps } from '../felles/typer/faktaPanelInitProps';
import { ProsessPanelInitProps } from '../felles/typer/prosessPanelInitProps';
import { VergeFaktaInitPanel } from '../fellesPaneler/fakta/VergeFaktaInitPanel';
import { FeilutbetalingFaktaInitPanel } from './faktaPaneler/FeilutbetalingFaktaInitPanel';
import { ForeldelseProsessInitPanel } from './prosessPaneler/ForeldelseProsessInitPanel';
import { TilbakekrevingProsessInitPanel } from './prosessPaneler/TilbakekrevingProsessInitPanel';
import { VedtakTilbakekrevingProsessInitPanel } from './prosessPaneler/VedtakTilbakekrevingProsessInitPanel';

interface Props {
  behandling: Behandling;
  fagsak: Fagsak;
  valgtProsessSteg?: string;
  valgtFaktaSteg?: string;
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  opneSokeside: () => void;
  alleBehandlinger: BehandlingAppKontekst[];
}

const TilbakekrevingPaneler = ({
  behandling,
  fagsak,
  valgtProsessSteg,
  valgtFaktaSteg,
  oppdaterProsessStegOgFaktaPanelIUrl,
  opneSokeside,
  alleBehandlinger,
}: Props) => {
  const api = useFagsakApi();

  const { data: tilbakekrevingKodeverk } = useQuery(api.fptilbake.kodeverkOptions());

  const fagsakBehandlingerInfo = alleBehandlinger.filter(b => !b.behandlingHenlagt);

  const harApenRevurdering = fagsakBehandlingerInfo.some(
    b => b.type === BehandlingType.REVURDERING && b.status !== BehandlingStatus.AVSLUTTET,
  );

  if (!tilbakekrevingKodeverk) {
    return <LoadingPanel />;
  }

  const hentFaktaPaneler = (props: FaktaPanelInitProps) => {
    return (
      <>
        <FeilutbetalingFaktaInitPanel
          tilbakekrevingKodeverk={tilbakekrevingKodeverk}
          fagsakYtelseTypeKode={fagsak.fagsakYtelseType}
          {...props}
        />
        <VergeFaktaInitPanel {...props} />
      </>
    );
  };

  const hentProsessPaneler = (props: ProsessPanelInitProps) => {
    return (
      <>
        <ForeldelseProsessInitPanel
          {...props}
          relasjonsRolleType={fagsak.relasjonsRolleType}
          tilbakekrevingKodeverk={tilbakekrevingKodeverk}
        />
        <TilbakekrevingProsessInitPanel
          {...props}
          relasjonsRolleType={fagsak.relasjonsRolleType}
          tilbakekrevingKodeverk={tilbakekrevingKodeverk}
        />
        <VedtakTilbakekrevingProsessInitPanel
          {...props}
          harApenRevurdering={harApenRevurdering}
          opneSokeside={opneSokeside}
          tilbakekrevingKodeverk={tilbakekrevingKodeverk}
        />
      </>
    );
  };

  return (
    <>
      <BehandlingPaVent
        key={behandling.versjon}
        behandling={behandling}
        opneSokeside={opneSokeside}
        kodeverk={tilbakekrevingKodeverk}
        erTilbakekreving
      />
      <BehandlingContainer
        behandling={behandling}
        valgtProsessSteg={valgtProsessSteg}
        valgtFaktaSteg={valgtFaktaSteg}
        oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
        hentFaktaPaneler={hentFaktaPaneler}
        hentProsessPaneler={hentProsessPaneler}
      />
    </>
  );
};

export default TilbakekrevingPaneler;

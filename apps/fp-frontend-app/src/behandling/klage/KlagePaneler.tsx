import { BehandlingContainer } from '../felles/BehandlingContainer';
import type { FaktaPanelInitProps } from '../felles/typer/faktaPanelInitProps';
import type { ProsessPanelInitProps } from '../felles/typer/prosessPanelInitProps';
import { VergeFaktaInitPanel } from '../fellesPaneler/fakta/VergeFaktaInitPanel';
import { FormKravFamOgPensjonProsessStegInitPanel } from './prosessPaneler/FormKravFamOgPensjonProsessStegInitPanel';
import { FormKravKlageInstansProsessStegInitPanel } from './prosessPaneler/FormKravKlageInstansProsessStegInitPanel';
import { KlageresultatProsessStegInitPanel } from './prosessPaneler/KlageresultatProsessStegInitPanel';
import { VurderingFamOgPensjonProsessStegInitPanel } from './prosessPaneler/VurderingFamOgPensjonProsessStegInitPanel';
import { VurderingKlageInstansProsessStegInitPanel } from './prosessPaneler/VurderingKlageInstansProsessStegInitPanel';

interface Props {
  valgtProsessSteg?: string;
  valgtFaktaSteg?: string;
}

const KlagePaneler = ({ valgtProsessSteg, valgtFaktaSteg }: Props) => {
  const hentFaktaPaneler = (props: FaktaPanelInitProps) => <VergeFaktaInitPanel {...props} />;
  const hentProsessPaneler = (props: ProsessPanelInitProps) => (
    <>
      <FormKravFamOgPensjonProsessStegInitPanel {...props} />
      <VurderingFamOgPensjonProsessStegInitPanel {...props} />
      <FormKravKlageInstansProsessStegInitPanel {...props} />
      <VurderingKlageInstansProsessStegInitPanel {...props} />
      <KlageresultatProsessStegInitPanel {...props} />
    </>
  );

  return (
    <BehandlingContainer
      valgtProsessSteg={valgtProsessSteg}
      valgtFaktaSteg={valgtFaktaSteg}
      hentFaktaPaneler={hentFaktaPaneler}
      hentProsessPaneler={hentProsessPaneler}
    />
  );
};

// Default export grunna React.lazy
// eslint-disable-next-line import/no-default-export
export default KlagePaneler;

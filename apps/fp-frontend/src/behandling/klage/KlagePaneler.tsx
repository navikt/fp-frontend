import { FaktaMeny } from '../felles/fakta/FaktaMeny';
import { ProsessMeny } from '../felles/prosess/ProsessMeny';
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

const KlagePaneler = ({ valgtProsessSteg, valgtFaktaSteg }: Props) => (
  <>
    <ProsessMeny valgtProsessSteg={valgtProsessSteg} valgtFaktaSteg={valgtFaktaSteg}>
      <FormKravFamOgPensjonProsessStegInitPanel />
      <VurderingFamOgPensjonProsessStegInitPanel />
      <FormKravKlageInstansProsessStegInitPanel />
      <VurderingKlageInstansProsessStegInitPanel />
      <KlageresultatProsessStegInitPanel />
    </ProsessMeny>
    <FaktaMeny valgtFaktaSteg={valgtFaktaSteg} valgtProsessSteg={valgtProsessSteg}>
      <VergeFaktaInitPanel />
    </FaktaMeny>
  </>
);

// Default export grunna React.lazy
// eslint-disable-next-line import/no-default-export
export default KlagePaneler;

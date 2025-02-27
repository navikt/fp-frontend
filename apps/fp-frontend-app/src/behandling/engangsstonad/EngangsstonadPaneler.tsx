import { useState } from 'react';

import type { ArbeidsgiverOpplysningerPerId, Personoversikt } from '@navikt/fp-types';

import { FaktaMeny } from '../felles/fakta/FaktaMeny';
import type { FaktaPanelInfo } from '../felles/fakta/useFaktaMenyData';
import { ProsessMeny } from '../felles/prosess/ProsessMeny';
import { AdopsjonsvilkaretFaktaInitPanel } from '../fellesPaneler/fakta/AdopsjonsvilkaretFaktaInitPanel';
import { FodselvilkaretFaktaInitPanel } from '../fellesPaneler/fakta/FodselvilkaretFaktaInitPanel';
import { MedlemskapsvilkaretFaktaInitPanel } from '../fellesPaneler/fakta/MedlemskapsvilkaretFaktaInitPanel';
import { OmsorgOgForeldreansvarFaktaInitPanel } from '../fellesPaneler/fakta/OmsorgOgForeldreansvarFaktaInitPanel';
import { SakenFaktaInitPanel } from '../fellesPaneler/fakta/SakenFaktaInitPanel';
import { VergeFaktaInitPanel } from '../fellesPaneler/fakta/VergeFaktaInitPanel';
import { YtelserFaktaInitPanel } from '../fellesPaneler/fakta/YtelserFaktaInitPanel';
import { OpplysningspliktProsessStegInitPanel } from '../fellesPaneler/prosess/OpplysningspliktProsessStegInitPanel';
import { SimuleringProsessStegInitPanel } from '../fellesPaneler/prosess/SimuleringProsessStegInitPanel';
import { VarselProsessStegInitPanel } from '../fellesPaneler/prosess/VarselProsessStegInitPanel';
import { BeregningEsProsessStegInitPanel } from './prosessPaneler/BeregningEsProsessStegInitPanel';
import { InngangsvilkarEsProsessStegInitPanel } from './prosessPaneler/InngangsvilkarEsProsessStegInitPanel';
import { SoknadsfristEsProsessStegInitPanel } from './prosessPaneler/SoknadsfristEsProsessStegInitPanel';
import { VedtakEsProsessStegInitPanel } from './prosessPaneler/VedtakEsProsessStegInitPanel';

interface Props {
  valgtProsessSteg: string | undefined;
  valgtFaktaSteg: string | undefined;
  arbeidsgivere: ArbeidsgiverOpplysningerPerId;
  personoversikt: Personoversikt;
}

const EngangsstonadPaneler = ({ valgtProsessSteg, valgtFaktaSteg, arbeidsgivere, personoversikt }: Props) => {
  const [åpentFaktaPanelInfo, setÅpentFaktaPanelInfo] = useState<FaktaPanelInfo>();
  const emptyArbeidsgiverOpplysningerPerId = {};

  return (
    <>
      <ProsessMeny valgtProsessSteg={valgtProsessSteg} valgtFaktaSteg={valgtFaktaSteg}>
        <VarselProsessStegInitPanel />
        <OpplysningspliktProsessStegInitPanel arbeidsgiverOpplysningerPerId={arbeidsgivere} />
        <InngangsvilkarEsProsessStegInitPanel åpentFaktaPanelInfo={åpentFaktaPanelInfo} />
        <SoknadsfristEsProsessStegInitPanel />
        <BeregningEsProsessStegInitPanel />
        <SimuleringProsessStegInitPanel arbeidsgiverOpplysningerPerId={emptyArbeidsgiverOpplysningerPerId} />
        <VedtakEsProsessStegInitPanel />
      </ProsessMeny>
      <FaktaMeny
        valgtFaktaSteg={valgtFaktaSteg}
        valgtProsessSteg={valgtProsessSteg}
        setÅpentFaktaPanelInfo={setÅpentFaktaPanelInfo}
      >
        <SakenFaktaInitPanel />
        <YtelserFaktaInitPanel />
        <VergeFaktaInitPanel />
        <OmsorgOgForeldreansvarFaktaInitPanel personoversikt={personoversikt} />
        <AdopsjonsvilkaretFaktaInitPanel />
        <FodselvilkaretFaktaInitPanel />
        <MedlemskapsvilkaretFaktaInitPanel />
      </FaktaMeny>
    </>
  );
};

// Default export grunna React.lazy
// eslint-disable-next-line import/no-default-export
export default EngangsstonadPaneler;

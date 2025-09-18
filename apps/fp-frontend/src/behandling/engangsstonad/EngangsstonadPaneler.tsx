import { useState } from 'react';

import type { ArbeidsgiverOpplysningerPerId, Personoversikt } from '@navikt/fp-types';

import { FaktaMeny } from '../felles/fakta/FaktaMeny.tsx';
import type { FaktaPanelMedÅpentApInfo } from '../felles/fakta/useFaktaPanelMenyData.ts';
import { ProsessMeny } from '../felles/prosess/ProsessMeny.tsx';
import { AdopsjonsvilkaretFaktaInitPanel } from '../fellesPaneler/fakta/AdopsjonsvilkaretFaktaInitPanel.tsx';
import { FodselvilkaretFaktaInitPanel } from '../fellesPaneler/fakta/FodselvilkaretFaktaInitPanel.tsx';
import { MedlemskapsvilkaretFaktaInitPanel } from '../fellesPaneler/fakta/MedlemskapsvilkaretFaktaInitPanel.tsx';
import { OmsorgOgForeldreansvarFaktaInitPanel } from '../fellesPaneler/fakta/OmsorgOgForeldreansvarFaktaInitPanel.tsx';
import { SakenFaktaInitPanel } from '../fellesPaneler/fakta/SakenFaktaInitPanel.tsx';
import { VergeFaktaInitPanel } from '../fellesPaneler/fakta/VergeFaktaInitPanel.tsx';
import { YtelserFaktaInitPanel } from '../fellesPaneler/fakta/YtelserFaktaInitPanel.tsx';
import { OpplysningspliktProsessStegInitPanel } from '../fellesPaneler/prosess/OpplysningspliktProsessStegInitPanel.tsx';
import { SimuleringProsessStegInitPanel } from '../fellesPaneler/prosess/SimuleringProsessStegInitPanel.tsx';
import { VarselProsessStegInitPanel } from '../fellesPaneler/prosess/VarselProsessStegInitPanel.tsx';
import { VedtakProsessStegInitPanel } from '../fellesPaneler/prosess/VedtakProsessStegInitPanel.tsx';
import { BeregningEsProsessStegInitPanel } from './prosessPaneler/BeregningEsProsessStegInitPanel.tsx';
import { InngangsvilkarEsProsessStegInitPanel } from './prosessPaneler/InngangsvilkarEsProsessStegInitPanel.tsx';
import { SoknadsfristEsProsessStegInitPanel } from './prosessPaneler/SoknadsfristEsProsessStegInitPanel.tsx';

interface Props {
  valgtProsessSteg: string | undefined;
  valgtFaktaSteg: string | undefined;
  arbeidsgivere: ArbeidsgiverOpplysningerPerId;
  personoversikt: Personoversikt;
}

const EngangsstonadPaneler = ({ valgtProsessSteg, valgtFaktaSteg, arbeidsgivere, personoversikt }: Props) => {
  const [faktaPanelMedÅpentApInfo, setFaktaPanelMedÅpentApInfo] = useState<FaktaPanelMedÅpentApInfo>();
  const emptyArbeidsgiverOpplysningerPerId = {};

  return (
    <>
      <ProsessMeny valgtProsessSteg={valgtProsessSteg} valgtFaktaSteg={valgtFaktaSteg}>
        <VarselProsessStegInitPanel />
        <OpplysningspliktProsessStegInitPanel arbeidsgiverOpplysningerPerId={arbeidsgivere} />
        <InngangsvilkarEsProsessStegInitPanel faktaPanelMedÅpentApInfo={faktaPanelMedÅpentApInfo} />
        <SoknadsfristEsProsessStegInitPanel />
        <BeregningEsProsessStegInitPanel />
        <SimuleringProsessStegInitPanel arbeidsgiverOpplysningerPerId={emptyArbeidsgiverOpplysningerPerId} />
        <VedtakProsessStegInitPanel erEngangsstønad />
      </ProsessMeny>
      <FaktaMeny
        valgtFaktaSteg={valgtFaktaSteg}
        valgtProsessSteg={valgtProsessSteg}
        setFaktaPanelMedÅpentApInfo={setFaktaPanelMedÅpentApInfo}
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

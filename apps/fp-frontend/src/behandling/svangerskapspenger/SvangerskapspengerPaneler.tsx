import { useState } from 'react';

import type { ArbeidsgiverOpplysningerPerId, Personoversikt } from '@navikt/fp-types';

import { FaktaMeny } from '../felles/fakta/FaktaMeny.tsx';
import type { FaktaPanelMedÅpentApInfo } from '../felles/fakta/useFaktaPanelMenyData.ts';
import { ProsessMeny } from '../felles/prosess/ProsessMeny.tsx';
import { ArbeidOgInntektFaktaInitPanel } from '../fellesPaneler/fakta/ArbeidOgInntektFaktaInitPanel.tsx';
import { ArbeidsforholdFaktaInitPanel } from '../fellesPaneler/fakta/ArbeidsforholdFaktaInitPanel.tsx';
import { BeregningFaktaInitPanel } from '../fellesPaneler/fakta/BeregningFaktaInitPanel.tsx';
import { FordelingFaktaInitPanel } from '../fellesPaneler/fakta/FordelingFaktaInitPanel.tsx';
import { InntektsmeldingerFaktaInitPanel } from '../fellesPaneler/fakta/InntektsmeldingerFaktaInitPanel.tsx';
import { MedlemskapsvilkaretFaktaInitPanel } from '../fellesPaneler/fakta/MedlemskapsvilkaretFaktaInitPanel.tsx';
import { OpptjeningsvilkaretFaktaInitPanel } from '../fellesPaneler/fakta/OpptjeningsvilkaretFaktaInitPanel.tsx';
import { PermisjonFaktaInitPanel } from '../fellesPaneler/fakta/PermisjonFaktaInitPanel.tsx';
import { SakenFaktaInitPanel } from '../fellesPaneler/fakta/SakenFaktaInitPanel.tsx';
import { VergeFaktaInitPanel } from '../fellesPaneler/fakta/VergeFaktaInitPanel.tsx';
import { YtelserFaktaInitPanel } from '../fellesPaneler/fakta/YtelserFaktaInitPanel.tsx';
import { BeregningsgrunnlagProsessStegInitPanel } from '../fellesPaneler/prosess/BeregningsgrunnlagProsessStegInitPanel.tsx';
import { FortsattMedlemskapProsessStegInitPanel } from '../fellesPaneler/prosess/FortsattMedlemskapProsessStegInitPanel.tsx';
import { OpplysningspliktProsessStegInitPanel } from '../fellesPaneler/prosess/OpplysningspliktProsessStegInitPanel.tsx';
import { SimuleringProsessStegInitPanel } from '../fellesPaneler/prosess/SimuleringProsessStegInitPanel.tsx';
import { SoknadsfristProsessStegInitPanel } from '../fellesPaneler/prosess/SoknadsfristProsessStegInitPanel.tsx';
import { VedtakProsessStegInitPanel } from '../fellesPaneler/prosess/VedtakProsessStegInitPanel.tsx';
import { FodselOgTilretteleggingFaktaInitPanel } from './faktaPaneler/FodselOgTilretteleggingFaktaInitPanel.tsx';
import { InngangsvilkarSvpProsessStegInitPanel } from './prosessPaneler/InngangsvilkarSvpProsessStegInitPanel.tsx';
import { TilkjentYtelseProsessStegInitPanel } from './prosessPaneler/TilkjentYtelseProsessStegInitPanel.tsx';

interface Props {
  valgtProsessSteg: string | undefined;
  valgtFaktaSteg: string | undefined;
  arbeidsgivere: ArbeidsgiverOpplysningerPerId;
  personoversikt: Personoversikt;
}

const SvangerskapspengerPaneler = ({ valgtProsessSteg, valgtFaktaSteg, arbeidsgivere, personoversikt }: Props) => {
  const [faktaPanelMedÅpentApInfo, setFaktaPanelMedÅpentApInfo] = useState<FaktaPanelMedÅpentApInfo>();

  return (
    <>
      <ProsessMeny valgtProsessSteg={valgtProsessSteg} valgtFaktaSteg={valgtFaktaSteg}>
        <OpplysningspliktProsessStegInitPanel arbeidsgiverOpplysningerPerId={arbeidsgivere} />
        <InngangsvilkarSvpProsessStegInitPanel faktaPanelMedÅpentApInfo={faktaPanelMedÅpentApInfo} />
        <BeregningsgrunnlagProsessStegInitPanel arbeidsgiverOpplysningerPerId={arbeidsgivere} />
        <SoknadsfristProsessStegInitPanel />
        <FortsattMedlemskapProsessStegInitPanel />
        <TilkjentYtelseProsessStegInitPanel
          arbeidsgiverOpplysningerPerId={arbeidsgivere}
          personoversikt={personoversikt}
        />
        <SimuleringProsessStegInitPanel arbeidsgiverOpplysningerPerId={arbeidsgivere} />
        <VedtakProsessStegInitPanel />
      </ProsessMeny>
      <FaktaMeny
        valgtFaktaSteg={valgtFaktaSteg}
        valgtProsessSteg={valgtProsessSteg}
        setFaktaPanelMedÅpentApInfo={setFaktaPanelMedÅpentApInfo}
      >
        <SakenFaktaInitPanel />
        <ArbeidOgInntektFaktaInitPanel arbeidsgiverOpplysningerPerId={arbeidsgivere} />
        <InntektsmeldingerFaktaInitPanel arbeidsgiverOpplysningerPerId={arbeidsgivere} />
        <ArbeidsforholdFaktaInitPanel arbeidsgiverOpplysningerPerId={arbeidsgivere} />
        <YtelserFaktaInitPanel />
        <VergeFaktaInitPanel />
        <FodselOgTilretteleggingFaktaInitPanel arbeidsgiverOpplysningerPerId={arbeidsgivere} />
        <MedlemskapsvilkaretFaktaInitPanel />
        <OpptjeningsvilkaretFaktaInitPanel arbeidsgiverOpplysningerPerId={arbeidsgivere} />
        <PermisjonFaktaInitPanel arbeidsgiverOpplysningerPerId={arbeidsgivere} />
        <BeregningFaktaInitPanel arbeidsgiverOpplysningerPerId={arbeidsgivere} />
        <FordelingFaktaInitPanel arbeidsgiverOpplysningerPerId={arbeidsgivere} />
      </FaktaMeny>
    </>
  );
};

// Default export grunna React.lazy
// eslint-disable-next-line import/no-default-export
export default SvangerskapspengerPaneler;

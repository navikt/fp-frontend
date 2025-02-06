import type { ArbeidsgiverOpplysningerPerId, Personoversikt } from '@navikt/fp-types';

import { BehandlingContainer } from '../felles/BehandlingContainer';
import type { FaktaPanelInitProps } from '../felles/typer/faktaPanelInitProps';
import type { ProsessPanelExtraInitProps, ProsessPanelInitProps } from '../felles/typer/prosessPanelInitProps';
import { ArbeidOgInntektFaktaInitPanel } from '../fellesPaneler/fakta/ArbeidOgInntektFaktaInitPanel';
import { ArbeidsforholdFaktaInitPanel } from '../fellesPaneler/fakta/ArbeidsforholdFaktaInitPanel';
import { BeregningFaktaInitPanel } from '../fellesPaneler/fakta/BeregningFaktaInitPanel';
import { FordelingFaktaInitPanel } from '../fellesPaneler/fakta/FordelingFaktaInitPanel';
import { InntektsmeldingerFaktaInitPanel } from '../fellesPaneler/fakta/InntektsmeldingerFaktaInitPanel';
import { MedlemskapsvilkaretFaktaInitPanel } from '../fellesPaneler/fakta/MedlemskapsvilkaretFaktaInitPanel';
import { OpptjeningsvilkaretFaktaInitPanel } from '../fellesPaneler/fakta/OpptjeningsvilkaretFaktaInitPanel';
import { PermisjonFaktaInitPanel } from '../fellesPaneler/fakta/PermisjonFaktaInitPanel';
import { SakenFaktaInitPanel } from '../fellesPaneler/fakta/SakenFaktaInitPanel';
import { VergeFaktaInitPanel } from '../fellesPaneler/fakta/VergeFaktaInitPanel';
import { YtelserFaktaInitPanel } from '../fellesPaneler/fakta/YtelserFaktaInitPanel';
import { BeregningsgrunnlagProsessStegInitPanel } from '../fellesPaneler/prosess/BeregningsgrunnlagProsessStegInitPanel';
import { FortsattMedlemskapProsessStegInitPanel } from '../fellesPaneler/prosess/FortsattMedlemskapProsessStegInitPanel';
import { OpplysningspliktProsessStegInitPanel } from '../fellesPaneler/prosess/OpplysningspliktProsessStegInitPanel';
import { SimuleringProsessStegInitPanel } from '../fellesPaneler/prosess/SimuleringProsessStegInitPanel';
import { SoknadsfristProsessStegInitPanel } from '../fellesPaneler/prosess/SoknadsfristProsessStegInitPanel';
import { FodselOgTilretteleggingFaktaInitPanel } from './faktaPaneler/FodselOgTilretteleggingFaktaInitPanel';
import { InngangsvilkarSvpProsessStegInitPanel } from './prosessPaneler/InngangsvilkarSvpProsessStegInitPanel';
import { TilkjentYtelseProsessStegInitPanel } from './prosessPaneler/TilkjentYtelseProsessStegInitPanel';
import { VedtakSvpProsessStegInitPanel } from './prosessPaneler/VedtakSvpProsessStegInitPanel';

interface Props {
  valgtProsessSteg?: string;
  valgtFaktaSteg?: string;
  arbeidsgivere: ArbeidsgiverOpplysningerPerId;
  personoversikt: Personoversikt;
}

const SvangerskapspengerPaneler = ({ valgtProsessSteg, valgtFaktaSteg, arbeidsgivere, personoversikt }: Props) => {
  const hentProsessPaneler = (props: ProsessPanelInitProps, ekstraProps: ProsessPanelExtraInitProps) => (
    <>
      <OpplysningspliktProsessStegInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
      <InngangsvilkarSvpProsessStegInitPanel {...props} />
      <BeregningsgrunnlagProsessStegInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
      <SoknadsfristProsessStegInitPanel {...props} />
      <FortsattMedlemskapProsessStegInitPanel {...props} />
      <TilkjentYtelseProsessStegInitPanel
        {...props}
        arbeidsgiverOpplysningerPerId={arbeidsgivere}
        personoversikt={personoversikt}
      />
      <SimuleringProsessStegInitPanel
        {...props}
        menyData={ekstraProps.allMenyData}
        arbeidsgiverOpplysningerPerId={arbeidsgivere}
      />
      <VedtakSvpProsessStegInitPanel {...props} />
    </>
  );

  const hentFaktaPaneler = (props: FaktaPanelInitProps) => (
    <>
      <SakenFaktaInitPanel {...props} />
      <ArbeidOgInntektFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
      <InntektsmeldingerFaktaInitPanel arbeidsgiverOpplysningerPerId={arbeidsgivere} {...props} />
      <ArbeidsforholdFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
      <YtelserFaktaInitPanel {...props} />
      <VergeFaktaInitPanel {...props} />
      <FodselOgTilretteleggingFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
      <MedlemskapsvilkaretFaktaInitPanel {...props} />
      <OpptjeningsvilkaretFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
      <PermisjonFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
      <BeregningFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
      <FordelingFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
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
export default SvangerskapspengerPaneler;

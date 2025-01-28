import { ArbeidsgiverOpplysningerPerId, Personoversikt } from '@navikt/fp-types';

import { BehandlingContainer } from '../felles/BehandlingContainer';
import { FaktaPanelInitProps } from '../felles/typer/faktaPanelInitProps';
import { ProsessPanelExtraInitProps, ProsessPanelInitProps } from '../felles/typer/prosessPanelInitProps';
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
  valgtProsessSteg?: string;
  valgtFaktaSteg?: string;
  arbeidsgivere: ArbeidsgiverOpplysningerPerId;
  personoversikt: Personoversikt;
}

const EngangsstonadPaneler = ({ valgtProsessSteg, valgtFaktaSteg, arbeidsgivere, personoversikt }: Props) => {
  const emptyArbeidsgiverOpplysningerPerId = {};

  const hentProsessPaneler = (props: ProsessPanelInitProps, ekstraProps: ProsessPanelExtraInitProps) => (
    <>
      <VarselProsessStegInitPanel {...props} />
      <OpplysningspliktProsessStegInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
      <InngangsvilkarEsProsessStegInitPanel {...props} apentFaktaPanelInfo={ekstraProps.apentFaktaPanelInfo} />
      <SoknadsfristEsProsessStegInitPanel {...props} />
      <BeregningEsProsessStegInitPanel {...props} />
      <SimuleringProsessStegInitPanel
        {...props}
        menyData={ekstraProps.allMenyData}
        arbeidsgiverOpplysningerPerId={emptyArbeidsgiverOpplysningerPerId}
      />
      <VedtakEsProsessStegInitPanel {...props} />
    </>
  );

  const hentFaktaPaneler = (props: FaktaPanelInitProps) => (
    <>
      <SakenFaktaInitPanel {...props} />
      <YtelserFaktaInitPanel {...props} />
      <VergeFaktaInitPanel {...props} />
      <OmsorgOgForeldreansvarFaktaInitPanel {...props} personoversikt={personoversikt} />
      <AdopsjonsvilkaretFaktaInitPanel {...props} />
      <FodselvilkaretFaktaInitPanel {...props} />
      <MedlemskapsvilkaretFaktaInitPanel {...props} />
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

export default EngangsstonadPaneler;

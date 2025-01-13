import {
  AksessRettigheter,
  ArbeidsgiverOpplysningerPerId,
  Behandling,
  BehandlingAppKontekst,
  Fagsak,
  Personoversikt,
} from '@navikt/fp-types';

import { BehandlingContainer } from '../felles/BehandlingContainer';
import { FaktaPanelInitProps } from '../felles/typer/faktaPanelInitProps';
import { ProsessPanelExtraInitProps, ProsessPanelInitProps } from '../felles/typer/prosessPanelInitProps';
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
  alleBehandlinger: BehandlingAppKontekst[];
  behandling: Behandling;
  fagsak: Fagsak;
  valgtProsessSteg?: string;
  valgtFaktaSteg?: string;
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  opneSokeside: () => void;
  toggleOppdateringAvFagsakOgBehandling: (skalHenteFagsak: boolean) => void;
  arbeidsgivere: ArbeidsgiverOpplysningerPerId;
  personoversikt: Personoversikt;
  rettigheter: AksessRettigheter;
  hentOgSettBehandling: (keepData?: boolean) => void;
}

const SvangerskapspengerPaneler = ({
  alleBehandlinger,
  behandling,
  fagsak,
  valgtProsessSteg,
  valgtFaktaSteg,
  oppdaterProsessStegOgFaktaPanelIUrl,
  opneSokeside,
  toggleOppdateringAvFagsakOgBehandling,
  arbeidsgivere,
  personoversikt,
  rettigheter,
  hentOgSettBehandling,
}: Props) => (
  <BehandlingContainer
    behandling={behandling}
    valgtProsessSteg={valgtProsessSteg}
    valgtFaktaSteg={valgtFaktaSteg}
    oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
    hentFaktaPaneler={(props: FaktaPanelInitProps) => (
      <>
        <SakenFaktaInitPanel {...props} fagsak={fagsak} rettigheter={rettigheter} />
        <ArbeidOgInntektFaktaInitPanel
          {...props}
          saksnummer={fagsak.saksnummer}
          behandlingUuid={behandling.uuid}
          rettigheter={rettigheter}
          arbeidsgiverOpplysningerPerId={arbeidsgivere}
          hentOgSettBehandling={hentOgSettBehandling}
        />
        <InntektsmeldingerFaktaInitPanel
          fagsak={fagsak}
          alleBehandlinger={alleBehandlinger}
          arbeidsgiverOpplysningerPerId={arbeidsgivere}
          {...props}
        />
        <ArbeidsforholdFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
        <YtelserFaktaInitPanel {...props} />
        <VergeFaktaInitPanel {...props} />
        <FodselOgTilretteleggingFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
        <MedlemskapsvilkaretFaktaInitPanel {...props} fagsak={fagsak} />
        <OpptjeningsvilkaretFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
        <PermisjonFaktaInitPanel
          {...props}
          saksnummer={fagsak.saksnummer}
          arbeidsgiverOpplysningerPerId={arbeidsgivere}
        />
        <BeregningFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} rettigheter={rettigheter} />
        <FordelingFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
      </>
    )}
    hentProsessPaneler={(props: ProsessPanelInitProps, ekstraProps: ProsessPanelExtraInitProps) => (
      <>
        <OpplysningspliktProsessStegInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
        <InngangsvilkarSvpProsessStegInitPanel
          {...props}
          rettigheter={rettigheter}
          oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
        />
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
          fagsak={fagsak}
          menyData={ekstraProps.allMenyData}
          arbeidsgiverOpplysningerPerId={arbeidsgivere}
        />
        <VedtakSvpProsessStegInitPanel
          {...props}
          fagsak={fagsak}
          opneSokeside={opneSokeside}
          toggleOppdatereFagsakContext={toggleOppdateringAvFagsakOgBehandling}
        />
      </>
    )}
  />
);

export default SvangerskapspengerPaneler;

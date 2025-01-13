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
import { AdopsjonsvilkaretFaktaInitPanel } from '../fellesPaneler/fakta/AdopsjonsvilkaretFaktaInitPanel';
import { ArbeidOgInntektFaktaInitPanel } from '../fellesPaneler/fakta/ArbeidOgInntektFaktaInitPanel';
import { ArbeidsforholdFaktaInitPanel } from '../fellesPaneler/fakta/ArbeidsforholdFaktaInitPanel';
import { BeregningFaktaInitPanel } from '../fellesPaneler/fakta/BeregningFaktaInitPanel';
import { FodselvilkaretFaktaInitPanel } from '../fellesPaneler/fakta/FodselvilkaretFaktaInitPanel';
import { FordelingFaktaInitPanel } from '../fellesPaneler/fakta/FordelingFaktaInitPanel';
import { InntektsmeldingerFaktaInitPanel } from '../fellesPaneler/fakta/InntektsmeldingerFaktaInitPanel';
import { MedlemskapsvilkaretFaktaInitPanel } from '../fellesPaneler/fakta/MedlemskapsvilkaretFaktaInitPanel';
import { OmsorgOgForeldreansvarFaktaInitPanel } from '../fellesPaneler/fakta/OmsorgOgForeldreansvarFaktaInitPanel';
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
import { VarselProsessStegInitPanel } from '../fellesPaneler/prosess/VarselProsessStegInitPanel';
import { BesteberegningFaktaInitPanel } from './faktaPaneler/BesteberegningFaktaInitPanel';
import { OmsorgFaktaInitPanel } from './faktaPaneler/OmsorgFaktaInitPanel';
import { OmsorgOgRettFaktaInitPanel } from './faktaPaneler/OmsorgOgRettFaktaInitPanel';
import { UttakDokumentasjonFaktaInitPanel } from './faktaPaneler/UttakDokumentasjonFaktaInitPanel';
import { UttakFaktaInitPanel } from './faktaPaneler/UttakFaktaInitPanel';
import { InngangsvilkarFpProsessStegInitPanel } from './prosessPaneler/InngangsvilkarFpProsessStegInitPanel';
import { TilkjentYtelseFpProsessStegInitPanel } from './prosessPaneler/TilkjentYtelseFpProsessStegInitPanel';
import { UttakProsessStegInitPanel } from './prosessPaneler/UttakProsessStegInitPanel';
import { VedtakFpProsessStegInitPanel } from './prosessPaneler/VedtakFpProsessStegInitPanel';

interface Props {
  alleBehandlinger: BehandlingAppKontekst[];
  behandling: Behandling;
  fagsak: Fagsak;
  valgtProsessSteg?: string;
  valgtFaktaSteg?: string;
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  opneSokeside: () => void;
  setSkalOppdatereEtterBekreftelseAvAp: (skalHenteFagsak: boolean) => void;
  arbeidsgivere: ArbeidsgiverOpplysningerPerId;
  personoversikt: Personoversikt;
  rettigheter: AksessRettigheter;
  hentOgSettBehandling: () => void;
}

const ForeldrepengerPaneler = ({
  alleBehandlinger,
  behandling,
  fagsak,
  valgtProsessSteg,
  valgtFaktaSteg,
  oppdaterProsessStegOgFaktaPanelIUrl,
  opneSokeside,
  setSkalOppdatereEtterBekreftelseAvAp,
  arbeidsgivere,
  personoversikt,
  rettigheter,
  hentOgSettBehandling,
}: Props) => {
  return (
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
          <OmsorgOgForeldreansvarFaktaInitPanel {...props} personoversikt={personoversikt} />
          <AdopsjonsvilkaretFaktaInitPanel {...props} fagsak={fagsak} />
          <FodselvilkaretFaktaInitPanel {...props} />
          <MedlemskapsvilkaretFaktaInitPanel {...props} fagsak={fagsak} />
          <OpptjeningsvilkaretFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
          <PermisjonFaktaInitPanel
            {...props}
            saksnummer={fagsak.saksnummer}
            arbeidsgiverOpplysningerPerId={arbeidsgivere}
          />
          <BeregningFaktaInitPanel {...props} rettigheter={rettigheter} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
          <BesteberegningFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
          <FordelingFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
          <OmsorgOgRettFaktaInitPanel {...props} personoversikt={personoversikt} />
          <OmsorgFaktaInitPanel {...props} personoversikt={personoversikt} />
          <UttakFaktaInitPanel
            {...props}
            rettigheter={rettigheter}
            arbeidsgiverOpplysningerPerId={arbeidsgivere}
            fagsak={fagsak}
          />
          <UttakDokumentasjonFaktaInitPanel {...props} />
        </>
      )}
      hentProsessPaneler={(props: ProsessPanelInitProps, ekstraProps: ProsessPanelExtraInitProps) => (
        <>
          <VarselProsessStegInitPanel
            {...props}
            fagsak={fagsak}
            opneSokeside={opneSokeside}
            setSkalOppdatereEtterBekreftelseAvAp={setSkalOppdatereEtterBekreftelseAvAp}
          />
          <OpplysningspliktProsessStegInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
          <InngangsvilkarFpProsessStegInitPanel
            {...props}
            rettigheter={rettigheter}
            oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
            apentFaktaPanelInfo={ekstraProps.apentFaktaPanelInfo}
          />
          <BeregningsgrunnlagProsessStegInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
          <SoknadsfristProsessStegInitPanel {...props} />
          <FortsattMedlemskapProsessStegInitPanel {...props} />
          <UttakProsessStegInitPanel
            {...props}
            arbeidsgiverOpplysningerPerId={arbeidsgivere}
            personoversikt={personoversikt}
            rettigheter={rettigheter}
          />
          <TilkjentYtelseFpProsessStegInitPanel
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
          <VedtakFpProsessStegInitPanel
            {...props}
            fagsak={fagsak}
            opneSokeside={opneSokeside}
            setSkalOppdatereEtterBekreftelseAvAp={setSkalOppdatereEtterBekreftelseAvAp}
          />
        </>
      )}
    />
  );
};

export default ForeldrepengerPaneler;

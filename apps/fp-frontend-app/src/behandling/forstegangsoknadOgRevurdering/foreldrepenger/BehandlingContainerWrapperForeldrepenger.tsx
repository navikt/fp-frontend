import React, { FunctionComponent, useCallback } from 'react';

import {
  AksessRettigheter, ArbeidsgiverOpplysningerPerId, Behandling, Fagsak, Personoversikt,
} from '@navikt/fp-types';

import BehandlingContainer from '../../felles/BehandlingContainer';
import { requestFpApi } from './data/fpBehandlingApi';
import SakenFaktaInitPanel from '../paneler/fakta/SakenFaktaInitPanel';
import ArbeidsforholdFaktaInitPanel from '../paneler/fakta/ArbeidsforholdFaktaInitPanel';
import ArbeidOgInntektFaktaInitPanel from '../paneler/fakta/ArbeidOgInntektFaktaInitPanel';
import YtelserFaktaInitPanel from '../paneler/fakta/YtelserFaktaInitPanel';
import VergeFaktaInitPanel from '../paneler/fakta/VergeFaktaInitPanel';
import OmsorgvilkaretFaktaInitPanel from '../paneler/fakta/OmsorgvilkaretFaktaInitPanel';
import FordelingFaktaInitPanel from '../paneler/fakta/FordelingFaktaInitPanel';
import FodselvilkaretFaktaInitPanel from '../paneler/fakta/FodselvilkaretFaktaInitPanel';
import BesteberegningFaktaInitPanel from './faktaPaneler/BesteberegningFaktaInitPanel';
import AdopsjonsvilkaretFaktaInitPanel from '../paneler/fakta/AdopsjonsvilkaretFaktaInitPanel';
import MedlemskapsvilkaretFaktaInitPanel from '../paneler/fakta/MedlemskapsvilkaretFaktaInitPanel';
import OpptjeningsvilkaretFaktaInitPanel from '../paneler/fakta/OpptjeningsvilkaretFaktaInitPanel';
import BeregningFaktaInitPanel from '../paneler/fakta/BeregningFaktaInitPanel';
import OmsorgFaktaInitPanel from './faktaPaneler/OmsorgFaktaInitPanel';
import UttakFaktaInitPanel from './faktaPaneler/UttakFaktaInitPanel';
import PermisjonFaktaInitPanel from '../paneler/fakta/PermisjonFaktaInitPanel';
import VarselProsessStegInitPanel from '../paneler/prosess/VarselProsessStegInitPanel';
import OpplysningspliktProsessStegInitPanel from '../paneler/prosess/OpplysningspliktProsessStegInitPanel';
import InngangsvilkarFpProsessStegInitPanel from './prosessPaneler/InngangsvilkarFpProsessStegInitPanel';
import FortsattMedlemskapProsessStegInitPanel from '../paneler/prosess/FortsattMedlemskapProsessStegInitPanel';
import BeregningsgrunnlagProsessStegInitPanel from '../paneler/prosess/BeregningsgrunnlagProsessStegInitPanel';
import UttakProsessStegInitPanel from './prosessPaneler/UttakProsessStegInitPanel';
import TilkjentYtelseFpProsessStegInitPanel from './prosessPaneler/TilkjentYtelseFpProsessStegInitPanel';
import SimuleringProsessStegInitPanel from '../paneler/prosess/SimuleringProsessStegInitPanel';
import VedtakFpProsessStegInitPanel from './prosessPaneler/VedtakFpProsessStegInitPanel';
import SoknadsfristProsessStegInitPanel from '../paneler/prosess/SoknadsfristProsessStegInitPanel';
import OmsorgOgRettFaktaInitPanel from './faktaPaneler/OmsorgOgRettFaktaInitPanel';
import UttakDokumentasjonFaktaInitPanel from './faktaPaneler/UttakDokumentasjonFaktaInitPanel';
import { BehandlingEventHandler } from '../../felles/typer/standardBehandlingProps';

interface OwnProps {
  behandling: Behandling;
  fagsak: Fagsak;
  valgtProsessSteg?: string;
  valgtFaktaSteg?: string;
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  opneSokeside: () => void;
  toggleOppdateringAvFagsakOgBehandling: (skalHenteFagsak: boolean) => void,
  arbeidsgivere: ArbeidsgiverOpplysningerPerId;
  personoversikt: Personoversikt;
  rettigheter: AksessRettigheter;
  hentBehandling: (keepData: boolean) => Promise<Behandling>
  behandlingEventHandler: BehandlingEventHandler;
}

const BehandlingContainerWrapperForeldrepenger: FunctionComponent<OwnProps> = ({
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
  hentBehandling,
  behandlingEventHandler,
}) => {
  const faktaPaneler = useCallback((props) => (
    <>
      <SakenFaktaInitPanel {...props} fagsak={fagsak} />
      <ArbeidOgInntektFaktaInitPanel
        {...props}
        saksnummer={fagsak.saksnummer}
        behandlingUuid={behandling.uuid}
        rettigheter={rettigheter}
        arbeidsgiverOpplysningerPerId={arbeidsgivere}
        settBehandlingPåVentCallback={behandlingEventHandler.settBehandlingPaVent}
        hentBehandling={hentBehandling}
      />
      <ArbeidsforholdFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
      <YtelserFaktaInitPanel {...props} />
      <VergeFaktaInitPanel {...props} />
      <OmsorgvilkaretFaktaInitPanel {...props} personoversikt={personoversikt} />
      <AdopsjonsvilkaretFaktaInitPanel {...props} fagsak={fagsak} />
      <FodselvilkaretFaktaInitPanel {...props} />
      <MedlemskapsvilkaretFaktaInitPanel {...props} />
      <OpptjeningsvilkaretFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
      <PermisjonFaktaInitPanel {...props} saksnummer={fagsak.saksnummer} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
      <BeregningFaktaInitPanel {...props} rettigheter={rettigheter} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
      <BesteberegningFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
      <FordelingFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
      <OmsorgOgRettFaktaInitPanel {...props} personoversikt={personoversikt} />
      <OmsorgFaktaInitPanel {...props} personoversikt={personoversikt} />
      <UttakFaktaInitPanel {...props} rettigheter={rettigheter} arbeidsgiverOpplysningerPerId={arbeidsgivere} fagsak={fagsak} />
      <UttakDokumentasjonFaktaInitPanel {...props} />
    </>
  ), [personoversikt, fagsak, behandling, rettigheter, arbeidsgivere, behandlingEventHandler, hentBehandling]);

  const prosessPaneler = useCallback((props, ekstraProps) => (
    <>
      <VarselProsessStegInitPanel
        {...props}
        fagsak={fagsak}
        opneSokeside={opneSokeside}
        toggleSkalOppdatereFagsakContext={toggleOppdateringAvFagsakOgBehandling}
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
      <FortsattMedlemskapProsessStegInitPanel {...props} rettigheter={rettigheter} />
      <UttakProsessStegInitPanel
        {...props}
        arbeidsgiverOpplysningerPerId={arbeidsgivere}
        personoversikt={personoversikt}
        rettigheter={rettigheter}
      />
      <TilkjentYtelseFpProsessStegInitPanel
        {...props}
        fagsak={fagsak}
        arbeidsgiverOpplysningerPerId={arbeidsgivere}
        personoversikt={personoversikt}
      />
      <SimuleringProsessStegInitPanel {...props} fagsak={fagsak} menyData={ekstraProps.allMenyData} />
      <VedtakFpProsessStegInitPanel
        {...props}
        fagsak={fagsak}
        opneSokeside={opneSokeside}
        toggleOppdatereFagsakContext={toggleOppdateringAvFagsakOgBehandling}
      />
    </>
  ), [fagsak, opneSokeside, toggleOppdateringAvFagsakOgBehandling, arbeidsgivere, rettigheter, personoversikt, oppdaterProsessStegOgFaktaPanelIUrl]);

  return (
    <BehandlingContainer
      behandling={behandling}
      valgtProsessSteg={valgtProsessSteg}
      valgtFaktaSteg={valgtFaktaSteg}
      oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
      requestApi={requestFpApi}
      hentFaktaPaneler={faktaPaneler}
      hentProsessPaneler={prosessPaneler}
    />
  );
};

export default BehandlingContainerWrapperForeldrepenger;

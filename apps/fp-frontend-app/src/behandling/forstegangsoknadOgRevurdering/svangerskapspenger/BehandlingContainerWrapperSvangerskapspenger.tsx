import React, { FunctionComponent, useCallback } from 'react';

import { AksessRettigheter, ArbeidsgiverOpplysningerPerId, Behandling, Fagsak, Personoversikt } from '@navikt/fp-types';

import BehandlingContainer from '../../felles/BehandlingContainer';
import { requestSvpApi } from './data/svpBehandlingApi';
import SakenFaktaInitPanel from '../paneler/fakta/SakenFaktaInitPanel';
import ArbeidsforholdFaktaInitPanel from '../paneler/fakta/ArbeidsforholdFaktaInitPanel';
import ArbeidOgInntektFaktaInitPanel from '../paneler/fakta/ArbeidOgInntektFaktaInitPanel';
import YtelserFaktaInitPanel from '../paneler/fakta/YtelserFaktaInitPanel';
import VergeFaktaInitPanel from '../../felles/fakta/paneler/VergeFaktaInitPanel';
import FodseltilretteleggingFaktaInitPanel from './faktaPaneler/FodseltilretteleggingFaktaInitPanel';
import MedlemskapsvilkaretFaktaInitPanel from '../paneler/fakta/MedlemskapsvilkaretFaktaInitPanel';
import OpptjeningsvilkaretFaktaInitPanel from '../paneler/fakta/OpptjeningsvilkaretFaktaInitPanel';
import BeregningFaktaInitPanel from '../paneler/fakta/BeregningFaktaInitPanel';
import FordelingFaktaInitPanel from '../paneler/fakta/FordelingFaktaInitPanel';
import OpplysningspliktProsessStegInitPanel from '../paneler/prosess/OpplysningspliktProsessStegInitPanel';
import InngangsvilkarSvpProsessStegInitPanel from './prosessPaneler/InngangsvilkarSvpProsessStegInitPanel';
import BeregningsgrunnlagProsessStegInitPanel from '../paneler/prosess/BeregningsgrunnlagProsessStegInitPanel';
import SoknadsfristProsessStegInitPanel from '../paneler/prosess/SoknadsfristProsessStegInitPanel';
import FortsattMedlemskapProsessStegInitPanel from '../paneler/prosess/FortsattMedlemskapProsessStegInitPanel';
import TilkjentYtelseProsessStegInitPanel from './prosessPaneler/TilkjentYtelseProsessStegInitPanel';
import SimuleringProsessStegInitPanel from '../paneler/prosess/SimuleringProsessStegInitPanel';
import VedtakSvpProsessStegInitPanel from './prosessPaneler/VedtakSvpProsessStegInitPanel';
import PermisjonFaktaInitPanel from '../paneler/fakta/PermisjonFaktaInitPanel';
import { BehandlingEventHandler } from '../../felles/typer/standardBehandlingProps';
import ProsessPanelInitProps, { ProsessPanelExtraInitProps } from '../../felles/typer/prosessPanelInitProps';
import FaktaPanelInitProps from '../../felles/typer/faktaPanelInitProps';

interface OwnProps {
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
  hentBehandling: (keepData: boolean) => Promise<Behandling | undefined>;
  behandlingEventHandler: BehandlingEventHandler;
}

const BehandlingContainerWrapperSvangerskapspenger: FunctionComponent<OwnProps> = ({
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
  const faktaPaneler = useCallback(
    (props: FaktaPanelInitProps) => (
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
        <FodseltilretteleggingFaktaInitPanel
          {...props}
          arbeidsgiverOpplysningerPerId={arbeidsgivere}
          rettigheter={rettigheter}
        />
        <MedlemskapsvilkaretFaktaInitPanel {...props} />
        <OpptjeningsvilkaretFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
        <PermisjonFaktaInitPanel
          {...props}
          saksnummer={fagsak.saksnummer}
          arbeidsgiverOpplysningerPerId={arbeidsgivere}
        />
        <BeregningFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} rettigheter={rettigheter} />
        <FordelingFaktaInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
      </>
    ),
    [personoversikt, behandling, rettigheter, fagsak, arbeidsgivere, behandlingEventHandler, hentBehandling],
  );

  const prosessPaneler = useCallback(
    (props: ProsessPanelInitProps, ekstraProps: ProsessPanelExtraInitProps) => (
      <>
        <OpplysningspliktProsessStegInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
        <InngangsvilkarSvpProsessStegInitPanel
          {...props}
          rettigheter={rettigheter}
          oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
        />
        <BeregningsgrunnlagProsessStegInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
        <SoknadsfristProsessStegInitPanel {...props} />
        <FortsattMedlemskapProsessStegInitPanel {...props} rettigheter={rettigheter} />
        <TilkjentYtelseProsessStegInitPanel
          {...props}
          fagsak={fagsak}
          arbeidsgiverOpplysningerPerId={arbeidsgivere}
          personoversikt={personoversikt}
        />
        <SimuleringProsessStegInitPanel {...props} fagsak={fagsak} menyData={ekstraProps.allMenyData} />
        <VedtakSvpProsessStegInitPanel
          {...props}
          fagsak={fagsak}
          opneSokeside={opneSokeside}
          toggleOppdatereFagsakContext={toggleOppdateringAvFagsakOgBehandling}
        />
      </>
    ),
    [
      personoversikt,
      fagsak,
      opneSokeside,
      toggleOppdateringAvFagsakOgBehandling,
      arbeidsgivere,
      rettigheter,
      oppdaterProsessStegOgFaktaPanelIUrl,
    ],
  );

  return (
    <BehandlingContainer
      behandling={behandling}
      valgtProsessSteg={valgtProsessSteg}
      valgtFaktaSteg={valgtFaktaSteg}
      oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
      requestApi={requestSvpApi}
      hentFaktaPaneler={faktaPaneler}
      hentProsessPaneler={prosessPaneler}
    />
  );
};

export default BehandlingContainerWrapperSvangerskapspenger;

import React, { FunctionComponent, useCallback } from 'react';

import { AksessRettigheter, ArbeidsgiverOpplysningerPerId, Behandling, Fagsak, Personoversikt } from '@navikt/fp-types';

import BehandlingContainer from '../../felles/BehandlingContainer';
import { requestEsApi } from './data/esBehandlingApi';
import SakenFaktaInitPanel from '../paneler/fakta/SakenFaktaInitPanel';
import YtelserFaktaInitPanel from '../paneler/fakta/YtelserFaktaInitPanel';
import VergeFaktaInitPanel from '../paneler/fakta/VergeFaktaInitPanel';
import OmsorgvilkaretFaktaInitPanel from '../paneler/fakta/OmsorgvilkaretFaktaInitPanel';
import AdopsjonsvilkaretFaktaInitPanel from '../paneler/fakta/AdopsjonsvilkaretFaktaInitPanel';
import FodselvilkaretFaktaInitPanel from '../paneler/fakta/FodselvilkaretFaktaInitPanel';
import MedlemskapsvilkaretFaktaInitPanel from '../paneler/fakta/MedlemskapsvilkaretFaktaInitPanel';
import VarselProsessStegInitPanel from '../paneler/prosess/VarselProsessStegInitPanel';
import InngangsvilkarProsessStegInitPanel from './prosessPaneler/InngangsvilkarEsProsessStegInitPanel';
import OpplysningspliktProsessStegInitPanel from '../paneler/prosess/OpplysningspliktProsessStegInitPanel';
import BeregningEsProsessStegInitPanel from './prosessPaneler/BeregningEsProsessStegInitPanel';
import SimuleringProsessStegInitPanel from '../paneler/prosess/SimuleringProsessStegInitPanel';
import VedtakEsProsessStegInitPanel from './prosessPaneler/VedtakEsProsessStegInitPanel';
import SoknadsfristEsProsessStegInitPanel from './prosessPaneler/SoknadsfristEsProsessStegInitPanel';

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
}

const BehandlingContainerWrapperEngangsstonad: FunctionComponent<OwnProps> = ({
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
}) => {
  const faktaPaneler = useCallback(
    props => (
      <>
        <SakenFaktaInitPanel {...props} fagsak={fagsak} />
        <YtelserFaktaInitPanel {...props} />
        <VergeFaktaInitPanel {...props} />
        <OmsorgvilkaretFaktaInitPanel {...props} personoversikt={personoversikt} />
        <AdopsjonsvilkaretFaktaInitPanel {...props} fagsak={fagsak} />
        <FodselvilkaretFaktaInitPanel {...props} />
        <MedlemskapsvilkaretFaktaInitPanel {...props} />
      </>
    ),
    [personoversikt, fagsak],
  );

  const prosessPaneler = useCallback(
    (props, ekstraProps) => (
      <>
        <VarselProsessStegInitPanel
          {...props}
          fagsak={fagsak}
          opneSokeside={opneSokeside}
          toggleSkalOppdatereFagsakContext={toggleOppdateringAvFagsakOgBehandling}
        />
        <OpplysningspliktProsessStegInitPanel {...props} arbeidsgiverOpplysningerPerId={arbeidsgivere} />
        <InngangsvilkarProsessStegInitPanel
          {...props}
          rettigheter={rettigheter}
          oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
          apentFaktaPanelInfo={ekstraProps.apentFaktaPanelInfo}
        />
        <SoknadsfristEsProsessStegInitPanel {...props} rettigheter={rettigheter} />
        <BeregningEsProsessStegInitPanel {...props} rettigheter={rettigheter} />
        <SimuleringProsessStegInitPanel {...props} fagsak={fagsak} menyData={ekstraProps.allMenyData} />
        <VedtakEsProsessStegInitPanel
          {...props}
          fagsak={fagsak}
          opneSokeside={opneSokeside}
          toggleOppdatereFagsakContext={toggleOppdateringAvFagsakOgBehandling}
        />
      </>
    ),
    [
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
      requestApi={requestEsApi}
      hentFaktaPaneler={faktaPaneler}
      hentProsessPaneler={prosessPaneler}
    />
  );
};

export default BehandlingContainerWrapperEngangsstonad;

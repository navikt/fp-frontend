import React, { FunctionComponent, useState } from 'react';

import {
  Rettigheter, BehandlingPaVent, SettPaVentParams,
} from '@fpsak-frontend/behandling-felles';
import {
  KodeverkMedNavn, Behandling, Fagsak, FagsakPerson, ArbeidsgiverOpplysningerPerId, Personoversikt,
} from '@fpsak-frontend/types';

import ForeldrepengerProsess from './ForeldrepengerProsess';
import ForeldrepengerFakta from './ForeldrepengerFakta';
import FetchedData from '../types/fetchedDataTsType';

interface OwnProps {
  fetchedData: FetchedData;
  fagsak: Fagsak;
  fagsakPerson: FagsakPerson;
  behandling: Behandling;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  rettigheter: Rettigheter;
  valgtProsessSteg?: string;
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  valgtFaktaSteg?: string;
  oppdaterBehandlingVersjon: (versjon: number) => void;
  settPaVent: (params: SettPaVentParams) => Promise<any>;
  hentBehandling: ({ behandlingId: number }, keepData: boolean) => Promise<any>;
  opneSokeside: () => void;
  hasFetchError: boolean;
  setBehandling: (behandling: Behandling) => void;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  personoversikt: Personoversikt;
}

interface FaktaPanelInfo {
  urlCode: string;
  textCode: string;
}

const ForeldrepengerPaneler: FunctionComponent<OwnProps> = ({
  fetchedData,
  fagsak,
  fagsakPerson,
  behandling,
  alleKodeverk,
  rettigheter,
  valgtProsessSteg,
  oppdaterProsessStegOgFaktaPanelIUrl,
  valgtFaktaSteg,
  oppdaterBehandlingVersjon,
  settPaVent,
  hentBehandling,
  opneSokeside,
  hasFetchError,
  setBehandling,
  arbeidsgiverOpplysningerPerId,
  personoversikt,
}) => {
  const [apentFaktaPanelInfo, setApentFaktaPanel] = useState<FaktaPanelInfo>();

  return (
    <>
      <BehandlingPaVent
        behandling={behandling}
        aksjonspunkter={fetchedData.aksjonspunkter}
        kodeverk={alleKodeverk}
        settPaVent={settPaVent}
        hentBehandling={hentBehandling}
      />
      <ForeldrepengerProsess
        data={fetchedData}
        fagsak={fagsak}
        fagsakPerson={fagsakPerson}
        behandling={behandling}
        alleKodeverk={alleKodeverk}
        rettigheter={rettigheter}
        valgtProsessSteg={valgtProsessSteg}
        valgtFaktaSteg={valgtFaktaSteg}
        oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
        oppdaterBehandlingVersjon={oppdaterBehandlingVersjon}
        opneSokeside={opneSokeside}
        hasFetchError={hasFetchError}
        apentFaktaPanelInfo={apentFaktaPanelInfo}
        setBehandling={setBehandling}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        personoversikt={personoversikt}
      />
      <ForeldrepengerFakta
        behandling={behandling}
        data={fetchedData}
        fagsak={fagsak}
        fagsakPerson={fagsakPerson}
        alleKodeverk={alleKodeverk}
        rettigheter={rettigheter}
        hasFetchError={hasFetchError}
        valgtFaktaSteg={valgtFaktaSteg}
        valgtProsessSteg={valgtProsessSteg}
        oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
        setApentFaktaPanel={setApentFaktaPanel}
        setBehandling={setBehandling}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        personoversikt={personoversikt}
      />
    </>
  );
};

export default ForeldrepengerPaneler;

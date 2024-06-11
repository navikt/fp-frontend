import React, { FunctionComponent, useCallback } from 'react';

import { AksessRettigheter, ArbeidsgiverOpplysningerPerId, Behandling, Fagsak, Personoversikt } from '@navikt/fp-types';

import BehandlingContainer from '../felles/BehandlingContainer';
import SakenFaktaInitPanel from '../fellesPaneler/fakta/SakenFaktaInitPanel';
import YtelserFaktaInitPanel from '../fellesPaneler/fakta/YtelserFaktaInitPanel';
import VergeFaktaInitPanel from '../fellesPaneler/fakta/VergeFaktaInitPanel';
import OmsorgvilkaretFaktaInitPanel from '../fellesPaneler/fakta/OmsorgvilkaretFaktaInitPanel';
import AdopsjonsvilkaretFaktaInitPanel from '../fellesPaneler/fakta/AdopsjonsvilkaretFaktaInitPanel';
import FodselvilkaretFaktaInitPanel from '../fellesPaneler/fakta/FodselvilkaretFaktaInitPanel';
import MedlemskapsvilkaretFaktaInitPanel from '../fellesPaneler/fakta/MedlemskapsvilkaretFaktaInitPanel';
import VarselProsessStegInitPanel from '../fellesPaneler/prosess/VarselProsessStegInitPanel';
import InngangsvilkarProsessStegInitPanel from './prosessPaneler/InngangsvilkarEsProsessStegInitPanel';
import OpplysningspliktProsessStegInitPanel from '../fellesPaneler/prosess/OpplysningspliktProsessStegInitPanel';
import BeregningEsProsessStegInitPanel from './prosessPaneler/BeregningEsProsessStegInitPanel';
import SimuleringProsessStegInitPanel from '../fellesPaneler/prosess/SimuleringProsessStegInitPanel';
import VedtakEsProsessStegInitPanel from './prosessPaneler/VedtakEsProsessStegInitPanel';
import SoknadsfristEsProsessStegInitPanel from './prosessPaneler/SoknadsfristEsProsessStegInitPanel';
import FaktaPanelInitProps from '../felles/typer/faktaPanelInitProps';
import ProsessPanelInitProps, { ProsessPanelExtraInitProps } from '../felles/typer/prosessPanelInitProps';

interface OwnProps {
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
}

const EngangsstonadPaneler: FunctionComponent<OwnProps> = ({
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
}) => {
  const faktaPaneler = useCallback(
    (props: FaktaPanelInitProps) => (
      <>
        <SakenFaktaInitPanel {...props} fagsak={fagsak} rettigheter={rettigheter} />
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
  const emptyArbeidsgiverOpplysningerPerId = {};

  const prosessPaneler = useCallback(
    (props: ProsessPanelInitProps, ekstraProps: ProsessPanelExtraInitProps) => (
      <>
        <VarselProsessStegInitPanel
          {...props}
          fagsak={fagsak}
          opneSokeside={opneSokeside}
          setSkalOppdatereEtterBekreftelseAvAp={setSkalOppdatereEtterBekreftelseAvAp}
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
        <SimuleringProsessStegInitPanel
          {...props}
          fagsak={fagsak}
          menyData={ekstraProps.allMenyData}
          arbeidsgiverOpplysningerPerId={emptyArbeidsgiverOpplysningerPerId}
        />
        <VedtakEsProsessStegInitPanel
          {...props}
          fagsak={fagsak}
          opneSokeside={opneSokeside}
          setSkalOppdatereEtterBekreftelseAvAp={setSkalOppdatereEtterBekreftelseAvAp}
        />
      </>
    ),
    [
      fagsak,
      opneSokeside,
      setSkalOppdatereEtterBekreftelseAvAp,
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
      hentFaktaPaneler={faktaPaneler}
      hentProsessPaneler={prosessPaneler}
    />
  );
};

export default EngangsstonadPaneler;

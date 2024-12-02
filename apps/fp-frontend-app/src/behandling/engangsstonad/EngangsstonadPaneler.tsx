import React, { useCallback } from 'react';

import { AksessRettigheter, ArbeidsgiverOpplysningerPerId, Behandling, Fagsak, Personoversikt } from '@navikt/fp-types';

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

const EngangsstonadPaneler = ({
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
}: Props) => {
  const faktaPaneler = useCallback(
    (props: FaktaPanelInitProps) => (
      <>
        <SakenFaktaInitPanel {...props} fagsak={fagsak} rettigheter={rettigheter} />
        <YtelserFaktaInitPanel {...props} />
        <VergeFaktaInitPanel {...props} />
        <OmsorgOgForeldreansvarFaktaInitPanel {...props} personoversikt={personoversikt} />
        <AdopsjonsvilkaretFaktaInitPanel {...props} fagsak={fagsak} />
        <FodselvilkaretFaktaInitPanel {...props} />
        <MedlemskapsvilkaretFaktaInitPanel {...props} fagsak={fagsak} />
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
        <InngangsvilkarEsProsessStegInitPanel
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

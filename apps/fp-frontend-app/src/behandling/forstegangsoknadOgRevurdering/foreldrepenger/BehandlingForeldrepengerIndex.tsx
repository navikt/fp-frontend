import React, { FunctionComponent } from 'react';

import { ArbeidsgiverOpplysningerWrapper, Personoversikt } from '@navikt/fp-types';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { RestApiState } from '@navikt/fp-rest-api-hooks';

import StandardBehandlingProps from '../../felles/typer/standardBehandlingProps';
import BehandlingPaVent from '../../felles/modaler/paVent/BehandlingPaVent';
import StandardPropsProvider from '../../felles/utils/standardPropsStateContext';
import { useInitRequestApi, useLagreAksjonspunkt } from '../../felles/utils/indexHooks';
import BehandlingContainerWrapperForeldrepenger from './BehandlingContainerWrapperForeldrepenger';
import { BehandlingApiKeys, restBehandlingApiHooks } from '../../../data/behandlingContextApi';

const endepunkterSomSkalHentesEnGang = [
  { key: BehandlingApiKeys.ARBEIDSGIVERE_OVERSIKT },
  { key: BehandlingApiKeys.BEHANDLING_PERSONOVERSIKT },
];

const BehandlingForeldrepengerIndex: FunctionComponent<StandardBehandlingProps> = ({
  setBehandling,
  behandling,
  kodeverk,
  fagsak,
  rettigheter,
  oppdaterProsessStegOgFaktaPanelIUrl,
  valgtProsessSteg,
  valgtFaktaSteg,
  opneSokeside,
  setRequestPendingMessage,
  hentOgSettBehandling,
}) => {
  useInitRequestApi(setRequestPendingMessage);

  const { lagreAksjonspunkter, lagreOverstyrteAksjonspunkter } = useLagreAksjonspunkt(setBehandling);

  const { data: opplysningsdata, state: opplysningsdataState } = restBehandlingApiHooks.useMultipleRestApi<
    {
      arbeidsgivereOversikt: ArbeidsgiverOpplysningerWrapper;
      behandlingPersonoversikt: Personoversikt;
    },
    void
  >(endepunkterSomSkalHentesEnGang, {
    updateTriggers: [behandling?.versjon],
    suspendRequest: !behandling,
  });

  if (!behandling || opplysningsdataState !== RestApiState.SUCCESS || !opplysningsdata) {
    return <LoadingPanel />;
  }

  const {
    arbeidsgivereOversikt: { arbeidsgivere },
    behandlingPersonoversikt: personoversikt,
  } = opplysningsdata;

  return (
    <>
      <BehandlingPaVent behandling={behandling} setBehandling={setBehandling} kodeverk={kodeverk} />
      <StandardPropsProvider
        behandling={behandling}
        fagsak={fagsak}
        rettigheter={rettigheter}
        hasFetchError={false}
        alleKodeverk={kodeverk}
        lagreAksjonspunkter={lagreAksjonspunkter}
        lagreOverstyrteAksjonspunkter={lagreOverstyrteAksjonspunkter}
        oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
      >
        <BehandlingContainerWrapperForeldrepenger
          behandling={behandling}
          fagsak={fagsak}
          valgtProsessSteg={valgtProsessSteg}
          valgtFaktaSteg={valgtFaktaSteg}
          oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
          opneSokeside={opneSokeside}
          arbeidsgivere={arbeidsgivere}
          personoversikt={personoversikt}
          rettigheter={rettigheter}
          hentOgSettBehandling={hentOgSettBehandling}
        />
      </StandardPropsProvider>
    </>
  );
};

export default BehandlingForeldrepengerIndex;

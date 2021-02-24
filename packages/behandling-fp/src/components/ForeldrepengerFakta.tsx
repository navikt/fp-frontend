import React, { FunctionComponent } from 'react';
import { injectIntl, WrappedComponentProps } from 'react-intl';

import {
  Rettigheter, SideMenuWrapper, faktaHooks, useSetBehandlingVedEndring,
} from '@fpsak-frontend/behandling-felles';
import ac from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import {
  KodeverkMedNavn, Behandling, Fagsak, FagsakPerson, ArbeidsgiverOpplysningerPerId, Personoversikt,
} from '@fpsak-frontend/types';
import { LoadingPanel } from '@fpsak-frontend/shared-components';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';

import faktaPanelDefinisjoner from '../panelDefinisjoner/faktaFpPanelDefinisjoner';
import FetchedData from '../types/fetchedDataTsType';
import { restApiFpHooks, FpBehandlingApiKeys } from '../data/fpBehandlingApi';

const overstyringApCodes = [ac.OVERSTYR_AVKLAR_STARTDATO, ac.OVERSTYR_AVKLAR_FAKTA_UTTAK, ac.OVERSTYR_AVKLAR_STARTDATO, ac.MANUELL_AVKLAR_FAKTA_UTTAK,
  ac.OVERSTYRING_AV_BEREGNINGSAKTIVITETER, ac.OVERSTYRING_AV_BEREGNINGSGRUNNLAG, ac.MANUELL_MARKERING_AV_UTLAND_SAKSTYPE];

interface OwnProps {
  data: FetchedData;
  fagsak: Fagsak;
  fagsakPerson: FagsakPerson;
  behandling: Behandling;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  rettigheter: Rettigheter;
  hasFetchError: boolean;
  oppdaterProsessStegOgFaktaPanelIUrl: (prosessPanel?: string, faktanavn?: string) => void;
  valgtFaktaSteg?: string;
  valgtProsessSteg?: string;
  setApentFaktaPanel: (faktaPanelInfo: { urlCode: string; textCode: string}) => void;
  setBehandling: (behandling: Behandling) => void;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  personoversikt: Personoversikt;
}

const ForeldrepengerFakta: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  intl,
  data,
  behandling,
  fagsak,
  fagsakPerson,
  rettigheter,
  alleKodeverk,
  oppdaterProsessStegOgFaktaPanelIUrl,
  valgtFaktaSteg,
  valgtProsessSteg,
  hasFetchError,
  setApentFaktaPanel,
  setBehandling,
  arbeidsgiverOpplysningerPerId,
  personoversikt,
}) => {
  const {
    aksjonspunkter, soknad, vilkar, inntektArbeidYtelse, ytelsefordeling, beregningsgrunnlag, uttakKontrollerAktivitetskrav,
  } = data;

  const { startRequest: lagreAksjonspunkter, data: apBehandlingRes } = restApiFpHooks.useRestApiRunner<Behandling>(FpBehandlingApiKeys.SAVE_AKSJONSPUNKT);
  useSetBehandlingVedEndring(apBehandlingRes, setBehandling);

  const { startRequest: lagreOverstyrteAksjonspunkter, data: apOverstyrtBehandlingRes } = restApiFpHooks
    .useRestApiRunner<Behandling>(FpBehandlingApiKeys.SAVE_OVERSTYRT_AKSJONSPUNKT);
  useSetBehandlingVedEndring(apOverstyrtBehandlingRes, setBehandling);

  const dataTilUtledingAvFpPaneler = {
    fagsak,
    fagsakPerson,
    behandling,
    soknad,
    vilkar,
    inntektArbeidYtelse,
    ytelsefordeling,
    beregningsgrunnlag,
    hasFetchError,
    arbeidsgiverOpplysningerPerId,
    uttakKontrollerAktivitetskrav,
    personoversikt,
  };

  const [faktaPaneler, valgtPanel, sidemenyPaneler] = faktaHooks
    .useFaktaPaneler(faktaPanelDefinisjoner, dataTilUtledingAvFpPaneler, behandling, rettigheter, aksjonspunkter, valgtFaktaSteg, intl);

  faktaHooks.useFaktaAksjonspunktNotifikator(faktaPaneler, setApentFaktaPanel, behandling.versjon);

  const [velgFaktaPanelCallback, bekreftAksjonspunktCallback] = faktaHooks
    .useCallbacks(faktaPaneler, fagsak, behandling, oppdaterProsessStegOgFaktaPanelIUrl, valgtProsessSteg, overstyringApCodes,
      lagreAksjonspunkter, lagreOverstyrteAksjonspunkter);

  const endepunkter = valgtPanel ? valgtPanel.getPanelDef().getEndepunkter().map((e) => ({ key: e })) : [];
  const { data: faktaData, state } = restApiFpHooks.useMultipleRestApi<FetchedData>(endepunkter, {
    updateTriggers: [behandling.versjon, valgtPanel],
    suspendRequest: !valgtPanel,
    isCachingOn: true,
  });

  if (sidemenyPaneler.length > 0) {
    const isLoading = state === RestApiState.NOT_STARTED || state === RestApiState.LOADING;
    return (
      <SideMenuWrapper paneler={sidemenyPaneler} onClick={velgFaktaPanelCallback}>
        {valgtPanel && isLoading && (
          <LoadingPanel />
        )}
        {valgtPanel && !isLoading && valgtPanel.getPanelDef().getKomponent({
          ...faktaData,
          behandling,
          alleKodeverk,
          submitCallback: bekreftAksjonspunktCallback,
          ...valgtPanel.getKomponentData(rettigheter, dataTilUtledingAvFpPaneler, hasFetchError),
        })}
      </SideMenuWrapper>
    );
  }
  return null;
};

export default injectIntl(ForeldrepengerFakta);

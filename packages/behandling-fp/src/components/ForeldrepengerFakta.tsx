import React, { FunctionComponent } from 'react';
import { Dispatch } from 'redux';

import { injectIntl, WrappedComponentProps } from 'react-intl';
import {
  FagsakInfo, Behandling, FaktaPanel, Kodeverk, NavAnsatt, DataFetcherBehandlingDataV2, faktaHooks,
} from '@fpsak-frontend/behandling-felles';
import ac from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import fpBehandlingApi from '../data/fpBehandlingApi';
import faktaPanelDefinisjoner from '../panelDefinisjoner/faktaFpPanelDefinisjoner';
import FetchedData from '../types/fetchedDataTsType';

const overstyringApCodes = [ac.OVERSTYR_AVKLAR_STARTDATO, ac.OVERSTYR_AVKLAR_FAKTA_UTTAK, ac.OVERSTYR_AVKLAR_STARTDATO, ac.MANUELL_AVKLAR_FAKTA_UTTAK,
  ac.OVERSTYRING_AV_BEREGNINGSAKTIVITETER, ac.OVERSTYRING_AV_BEREGNINGSGRUNNLAG];

interface OwnProps {
  data: FetchedData;
  fagsak: FagsakInfo;
  behandling: Behandling;
  alleKodeverk: {[key: string]: Kodeverk[]};
  navAnsatt: NavAnsatt;
  hasFetchError: boolean;
  oppdaterProsessStegOgFaktaPanelIUrl: (prosessPanel?: string, faktanavn?: string) => void;
  valgtFaktaSteg?: string;
  valgtProsessSteg?: string;
  setApentFaktaPanel: (faktaPanelInfo: { urlCode: string; textCode: string}) => void;
  dispatch: Dispatch;
}

const ForeldrepengerFakta: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  intl,
  data,
  behandling,
  fagsak,
  navAnsatt,
  alleKodeverk,
  oppdaterProsessStegOgFaktaPanelIUrl,
  valgtFaktaSteg,
  valgtProsessSteg,
  hasFetchError,
  setApentFaktaPanel,
  dispatch,
}) => {
  const {
    aksjonspunkter, soknad, vilkar, personopplysninger, inntektArbeidYtelse, ytelsefordeling, beregningsgrunnlag,
  } = data;

  const dataTilUtledingAvFpPaneler = {
    fagsak, behandling, soknad, vilkar, personopplysninger, inntektArbeidYtelse, ytelsefordeling, beregningsgrunnlag, hasFetchError,
  };

  const [faktaPaneler, valgtPanel, formaterteFaktaPaneler] = faktaHooks
    .useFaktaPaneler(faktaPanelDefinisjoner, dataTilUtledingAvFpPaneler, fagsak, behandling, navAnsatt, aksjonspunkter, hasFetchError, valgtFaktaSteg, intl);

  faktaHooks.useFaktaAksjonspunktNotifikator(faktaPaneler, setApentFaktaPanel, behandling.versjon);

  const [velgFaktaPanelCallback, bekreftAksjonspunktCallback] = faktaHooks
    .useCallbacks(faktaPaneler, fagsak, behandling, oppdaterProsessStegOgFaktaPanelIUrl, valgtProsessSteg, overstyringApCodes, fpBehandlingApi, dispatch);

  if (valgtPanel) {
    return (
      <FaktaPanel paneler={formaterteFaktaPaneler} onClick={velgFaktaPanelCallback}>
        <DataFetcherBehandlingDataV2
          key={valgtPanel.urlCode}
          behandlingVersion={behandling.versjon}
          endpoints={valgtPanel.endpoints}
          render={(dataProps) => valgtPanel.renderComponent({
            ...dataProps,
            behandling,
            alleKodeverk,
            submitCallback: bekreftAksjonspunktCallback,
            ...valgtPanel.komponentData,
          })}
        />
      </FaktaPanel>
    );
  }
  return null;
};

export default injectIntl(ForeldrepengerFakta);

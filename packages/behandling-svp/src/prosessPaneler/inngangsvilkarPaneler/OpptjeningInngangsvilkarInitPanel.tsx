import React, {
  FunctionComponent,
} from 'react';

import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import {
  AksessRettigheter, Aksjonspunkt, Vilkar,
} from '@fpsak-frontend/types';
import { InngangsvilkarDefaultInitPanel, OverstyringPanelDef, InngangsvilkarPanelInitProps } from '@fpsak-frontend/behandling-felles';
import { VerticalSpacer } from '@fpsak-frontend/shared-components';

import { requestSvpApi, SvpBehandlingApiKeys } from '../../data/svpBehandlingApi';

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.OVERSTYRING_AV_OPPTJENINGSVILKARET];

const VILKAR_KODER = [vilkarType.OPPTJENINGSPERIODE, vilkarType.OPPTJENINGSVILKARET];

const ENDEPUNKTER_INIT_DATA = [SvpBehandlingApiKeys.AKSJONSPUNKTER, SvpBehandlingApiKeys.VILKAR];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

interface OwnProps {
  behandlingVersjon?: number;
  rettigheter: AksessRettigheter;
}

const OpptjeningInngangsvilkarInitPanel: FunctionComponent<OwnProps & InngangsvilkarPanelInitProps> = ({
  behandlingVersjon,
  rettigheter,
  ...props
}) => (
  <InngangsvilkarDefaultInitPanel<EndepunktInitData>
    {...props}
    behandlingVersjon={behandlingVersjon}
    requestApi={requestSvpApi}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    vilkarKoder={VILKAR_KODER}
    inngangsvilkarPanelKode="OPPTJENINGSVILKARET"
    hentInngangsvilkarPanelTekst={() => ''}
    renderPanel={(data, erOverstyrt, toggleOverstyring) => (
      <>
        <OverstyringPanelDef
          behandling={data.behandling}
          aksjonspunkter={data.aksjonspunkter}
          aksjonspunktKode={aksjonspunktCodes.OVERSTYRING_AV_OPPTJENINGSVILKARET}
          vilkar={data.vilkar}
          vilkarKoder={VILKAR_KODER}
          panelTekstKode="Inngangsvilkar.Opptjeningsvilkaret"
          erMedlemskapsPanel={false}
          toggleOverstyring={toggleOverstyring}
          erOverstyrt={erOverstyrt}
          overrideReadOnly={data.isReadOnly || (props.harInngangsvilkarApentAksjonspunkt && !(data.isAksjonspunktOpen || erOverstyrt))}
          kanOverstyreAccess={rettigheter.kanOverstyreAccess}
        />
        <VerticalSpacer thirtyTwoPx />
      </>
    )}
  />
);

export default OpptjeningInngangsvilkarInitPanel;

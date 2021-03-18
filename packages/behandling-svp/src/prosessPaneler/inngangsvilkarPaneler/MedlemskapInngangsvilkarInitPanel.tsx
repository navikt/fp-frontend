import React, {
  FunctionComponent,
} from 'react';

import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import {
  AksessRettigheter, Aksjonspunkt, Medlemskap, Vilkar,
} from '@fpsak-frontend/types';
import {
  InngangsvilkarDefaultInitPanel, OverstyringPanelDef, InngangsvilkarPanelInitProps,
} from '@fpsak-frontend/behandling-felles-ny';

import { requestSvpApi, SvpBehandlingApiKeys } from '../../data/svpBehandlingApi';

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.OVERSTYR_MEDLEMSKAPSVILKAR];

const VILKAR_KODER = [vilkarType.MEDLEMSKAPSVILKARET];

const ENDEPUNKTER_INIT_DATA = [SvpBehandlingApiKeys.AKSJONSPUNKTER, SvpBehandlingApiKeys.VILKAR];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

const ENDEPUNKTER_PANEL_DATA = [SvpBehandlingApiKeys.MEDLEMSKAP];
type EndepunktPanelData = {
  medlemskap: Medlemskap;
}

interface OwnProps {
  behandlingVersjon?: number;
  rettigheter: AksessRettigheter;
}

const MedlemskapInngangsvilkarInitPanel: FunctionComponent<OwnProps & InngangsvilkarPanelInitProps> = ({
  behandlingVersjon,
  rettigheter,
  ...props
}) => (
  <InngangsvilkarDefaultInitPanel<EndepunktInitData, EndepunktPanelData>
    {...props}
    behandlingVersjon={behandlingVersjon}
    requestApi={requestSvpApi}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    vilkarKoder={VILKAR_KODER}
    inngangsvilkarPanelKode="MEDLEMSKAP"
    hentInngangsvilkarPanelTekst={() => ''}
    renderPanel={(data, erOverstyrt, toggleOverstyring) => (
      <>
        <OverstyringPanelDef
          behandling={data.behandling}
          aksjonspunkter={data.aksjonspunkter}
          aksjonspunktKoder={AKSJONSPUNKT_KODER}
          vilkar={data.vilkar}
          vilkarKoder={VILKAR_KODER}
          panelTekstKode="Inngangsvilkar.Medlemskapsvilkaret"
          erMedlemskapsPanel
          medlemskap={data.medlemskap}
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

export default MedlemskapInngangsvilkarInitPanel;

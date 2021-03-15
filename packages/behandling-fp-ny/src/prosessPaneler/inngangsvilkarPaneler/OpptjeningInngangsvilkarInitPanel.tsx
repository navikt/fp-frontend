import React, {
  FunctionComponent,
} from 'react';

import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import OpptjeningVilkarProsessIndex from '@fpsak-frontend/prosess-vilkar-opptjening';
import {
  AksessRettigheter, Aksjonspunkt, Opptjening, Vilkar,
} from '@fpsak-frontend/types';
import { InngangsvilkarDefaultInitPanel, OverstyringPanelDef, InngangsvilkarPanelInitProps } from '@fpsak-frontend/behandling-felles-ny';

import getPackageIntl from '../../../i18n/getPackageIntl';
import { FpBehandlingApiKeys, requestFpApi } from '../../data/fpBehandlingApi';

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.VURDER_OPPTJENINGSVILKARET];

const VILKAR_KODER = [vilkarType.OPPTJENINGSPERIODE, vilkarType.OPPTJENINGSVILKARET];

const ENDEPUNKTER_INIT_DATA = [FpBehandlingApiKeys.AKSJONSPUNKTER, FpBehandlingApiKeys.VILKAR];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

const ENDEPUNKTER_PANEL_DATA = [FpBehandlingApiKeys.OPPTJENING];
type EndepunktPanelData = {
  opptjening: Opptjening;
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
  <InngangsvilkarDefaultInitPanel<EndepunktInitData, EndepunktPanelData>
    {...props}
    behandlingVersjon={behandlingVersjon}
    requestApi={requestFpApi}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    vilkarKoder={VILKAR_KODER}
    inngangsvilkarPanelKode="OPPTJENINGSVILKARET"
    hentInngangsvilkarPanelTekst={() => getPackageIntl().formatMessage({ id: 'OpptjeningVilkarView.VurderOmSøkerHarRett' })}
    renderPanel={(data, erOverstyrt, toggleOverstyring) => (
      <>
        {data.aksjonspunkter.length === 0 && (
          <OverstyringPanelDef
            behandling={data.behandling}
            aksjonspunkter={data.aksjonspunkter}
            aksjonspunktKoder={[aksjonspunktCodes.OVERSTYRING_AV_OPPTJENINGSVILKARET]}
            vilkar={data.vilkar}
            vilkarKoder={VILKAR_KODER}
            panelTekstKode="Inngangsvilkar.Opptjeningsvilkaret"
            erMedlemskapsPanel={false}
            toggleOverstyring={toggleOverstyring}
            erOverstyrt={erOverstyrt}
            overrideReadOnly={data.isReadOnly || (props.harInngangsvilkarApentAksjonspunkt && !(data.isAksjonspunktOpen || erOverstyrt))}
            kanOverstyreAccess={rettigheter.kanOverstyreAccess}
          />
        )}
        {data.aksjonspunkter.length > 0 && (
          <>
            <OpptjeningVilkarProsessIndex
              lovReferanse={data.vilkar[0].lovReferanse}
              {...data}
            />
            <VerticalSpacer thirtyTwoPx />
          </>
        )}
      </>
    )}
  />
);

export default OpptjeningInngangsvilkarInitPanel;

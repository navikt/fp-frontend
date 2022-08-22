import React, {
  FunctionComponent,
} from 'react';
import { useIntl } from 'react-intl';

import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import OpptjeningVilkarProsessIndex from '@fpsak-frontend/prosess-vilkar-opptjening';
import {
  AksessRettigheter, Aksjonspunkt, Opptjening, Vilkar,
} from '@fpsak-frontend/types';

import InngangsvilkarPanelInitProps from '../../../../felles/types/inngangsvilkarPanelInitProps';
import { BehandlingFellesApiKeys } from '../../../../felles/data/behandlingFellesApi';
import InngangsvilkarDefaultInitPanel from '../../../../felles/components/prosess/InngangsvilkarDefaultInitPanel';
import OverstyringPanelDef from '../../../../felles/components/prosess/OverstyringPanelDef';

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.VURDER_OPPTJENINGSVILKARET];

const VILKAR_KODER = [vilkarType.OPPTJENINGSPERIODE, vilkarType.OPPTJENINGSVILKARET];

const ENDEPUNKTER_INIT_DATA = [BehandlingFellesApiKeys.AKSJONSPUNKTER, BehandlingFellesApiKeys.VILKAR];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

const ENDEPUNKTER_PANEL_DATA = [BehandlingFellesApiKeys.OPPTJENING];
type EndepunktPanelData = {
  opptjening: Opptjening;
}

interface OwnProps {
  behandlingVersjon: number;
  rettigheter: AksessRettigheter;
}

const OpptjeningInngangsvilkarFpInitPanel: FunctionComponent<OwnProps & InngangsvilkarPanelInitProps> = ({
  behandlingVersjon,
  rettigheter,
  ...props
}) => (
  <InngangsvilkarDefaultInitPanel<EndepunktInitData, EndepunktPanelData>
    {...props}
    behandlingVersjon={behandlingVersjon}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    vilkarKoder={VILKAR_KODER}
    inngangsvilkarPanelKode="OPPTJENINGSVILKARET"
    hentInngangsvilkarPanelTekst={() => useIntl().formatMessage({ id: 'OpptjeningVilkarView.VurderOmSøkerHarRett' })}
    renderPanel={(data, erOverstyrt, toggleOverstyring) => (
      <>
        {data.aksjonspunkter.length === 0 && (
          <OverstyringPanelDef
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

export default OpptjeningInngangsvilkarFpInitPanel;

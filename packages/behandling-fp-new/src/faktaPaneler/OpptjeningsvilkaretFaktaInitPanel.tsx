import React, {
  FunctionComponent,
} from 'react';

import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import OpptjeningFaktaIndex from '@fpsak-frontend/fakta-opptjening';
import { faktaPanelCodes } from '@fpsak-frontend/konstanter';
import {
  Aksjonspunkt, ArbeidsgiverOpplysningerPerId, Opptjening, Vilkar,
} from '@fpsak-frontend/types';
import { FaktaVanligOppforselInitPanel, FaktaPanelInitProps } from '@fpsak-frontend/behandling-felles-ny';

import getPackageIntl from '../../i18n/getPackageIntl';
import { FpBehandlingApiKeys, restApiFpHooks } from '../data/fpBehandlingApi';

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.VURDER_PERIODER_MED_OPPTJENING];

const ENDEPUNKTER_INIT_DATA = [FpBehandlingApiKeys.AKSJONSPUNKTER, FpBehandlingApiKeys.VILKAR];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

const ENDEPUNKTER_PANEL_DATA = [FpBehandlingApiKeys.OPPTJENING, FpBehandlingApiKeys.UTLAND_DOK_STATUS];
type EndepunktPanelData = {
  opptjening?: Opptjening;
  utlandDokStatus?: {
    dokStatus: string;
  };
}

interface OwnProps {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

/**
 * OpptjeningsvilkaretFaktaInitPanel
 */
const OpptjeningsvilkaretFaktaInitPanel: FunctionComponent<OwnProps & FaktaPanelInitProps> = ({
  arbeidsgiverOpplysningerPerId,
  ...props
}) => (
  <FaktaVanligOppforselInitPanel<EndepunktInitData, EndepunktPanelData>
    {...props}
    useMultipleRestApi={restApiFpHooks.useMultipleRestApi}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    faktaPanelKode={faktaPanelCodes.OPPTJENINGSVILKARET}
    faktaPanelTekst={getPackageIntl().formatMessage({ id: 'OpptjeningInfoPanel.KontrollerFaktaForOpptjening' })}
    skalVisesFn={(initData) => initData
      && initData.vilkar.some((v) => v.vilkarType.kode === vilkarType.OPPTJENINGSVILKARET)
      && initData.vilkar.some((v) => v.vilkarType.kode === vilkarType.MEDLEMSKAPSVILKARET && v.vilkarStatus.kode === vilkarUtfallType.OPPFYLT)}
    render={(data) => <OpptjeningFaktaIndex arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId} {...data} />}
  />
);

export default OpptjeningsvilkaretFaktaInitPanel;

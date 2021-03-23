import React, {
  FunctionComponent,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import MedlemskapFaktaIndex from '@fpsak-frontend/fakta-medlemskap';
import { faktaPanelCodes } from '@fpsak-frontend/konstanter';
import {
  AksessRettigheter,
  Aksjonspunkt, ArbeidsgiverOpplysningerPerId, InntektArbeidYtelse, Medlemskap, Soknad,
} from '@fpsak-frontend/types';
import { FaktaDefaultInitPanel, FaktaPanelInitProps, harBehandlingReadOnlyStatus } from '@fpsak-frontend/behandling-felles';

import getPackageIntl from '../../i18n/getPackageIntl';
import { requestSvpApi, SvpBehandlingApiKeys } from '../data/svpBehandlingApi';

const AKSJONSPUNKT_KODER = [
  aksjonspunktCodes.AVKLAR_STARTDATO_FOR_FORELDREPENGERPERIODEN,
  aksjonspunktCodes.AVKLAR_OM_BRUKER_ER_BOSATT,
  aksjonspunktCodes.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE,
  aksjonspunktCodes.AVKLAR_OPPHOLDSRETT,
  aksjonspunktCodes.AVKLAR_LOVLIG_OPPHOLD,
  aksjonspunktCodes.AVKLAR_FORTSATT_MEDLEMSKAP,
  aksjonspunktCodes.OVERSTYR_AVKLAR_STARTDATO,
];

const OVERSTYRING_AP_CODES = [aksjonspunktCodes.OVERSTYR_AVKLAR_STARTDATO];

const ENDEPUNKTER_INIT_DATA = [SvpBehandlingApiKeys.AKSJONSPUNKTER, SvpBehandlingApiKeys.SOKNAD];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  soknad: Soknad;
}

const ENDEPUNKTER_PANEL_DATA = [SvpBehandlingApiKeys.INNTEKT_ARBEID_YTELSE, SvpBehandlingApiKeys.MEDLEMSKAP];
type EndepunktPanelData = {
  inntektArbeidYtelse: InntektArbeidYtelse;
  medlemskap: Medlemskap;
}

interface OwnProps {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  rettigheter: AksessRettigheter;
  hasFetchError: boolean;
}

/**
 * MedlemskapsvilkaretFaktaInitPanel
 */
const MedlemskapsvilkaretFaktaInitPanel: FunctionComponent<OwnProps & FaktaPanelInitProps> = ({
  arbeidsgiverOpplysningerPerId,
  rettigheter,
  hasFetchError,
  ...props
}) => (
  <FaktaDefaultInitPanel<EndepunktInitData, EndepunktPanelData>
    {...props}
    requestApi={requestSvpApi}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    overstyringApKoder={OVERSTYRING_AP_CODES}
    faktaPanelKode={faktaPanelCodes.MEDLEMSKAPSVILKARET}
    faktaPanelMenyTekst={getPackageIntl().formatMessage({ id: 'MedlemskapInfoPanel.Medlemskap' })}
    skalPanelVisesIMeny={(initData) => !!initData?.soknad}
    renderPanel={(data) => (
      <MedlemskapFaktaIndex
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        isForeldrepengerFagsak={false}
        readOnlyForStartdatoForForeldrepenger={!rettigheter.writeAccess.isEnabled
          || hasFetchError
          || data.behandling.behandlingPaaVent
          || harBehandlingReadOnlyStatus(data.behandling)}
        {...data}
      />
    )}
  />
);

export default MedlemskapsvilkaretFaktaInitPanel;

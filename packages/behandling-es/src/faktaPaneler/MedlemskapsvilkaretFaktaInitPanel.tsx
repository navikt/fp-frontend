import React, {
  FunctionComponent,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import MedlemskapFaktaIndex from '@fpsak-frontend/fakta-medlemskap';
import { FaktaPanelCode } from '@fpsak-frontend/konstanter';
import {
  AksessRettigheter,
  Aksjonspunkt, ArbeidsgiverOpplysningerPerId, InntektArbeidYtelse, Medlemskap, Soknad,
} from '@fpsak-frontend/types';
import { FaktaDefaultInitPanel, FaktaPanelInitProps, harBehandlingReadOnlyStatus } from '@fpsak-frontend/behandling-felles';
import { createIntl } from '@fpsak-frontend/utils';

import messages from '../../i18n/nb_NO.json';
import { EsBehandlingApiKeys, requestEsApi } from '../data/esBehandlingApi';

const intl = createIntl(messages);

const AKSJONSPUNKT_KODER = [
  aksjonspunktCodes.AVKLAR_OM_BRUKER_ER_BOSATT,
  aksjonspunktCodes.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE,
  aksjonspunktCodes.AVKLAR_OPPHOLDSRETT,
  aksjonspunktCodes.AVKLAR_LOVLIG_OPPHOLD,
  aksjonspunktCodes.AVKLAR_FORTSATT_MEDLEMSKAP,
  aksjonspunktCodes.OVERSTYR_AVKLAR_STARTDATO,
];

const OVERSTYRING_AP_CODES = [aksjonspunktCodes.OVERSTYR_AVKLAR_STARTDATO];

const ENDEPUNKTER_INIT_DATA = [EsBehandlingApiKeys.AKSJONSPUNKTER, EsBehandlingApiKeys.SOKNAD];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  soknad: Soknad;
}

const ENDEPUNKTER_PANEL_DATA = [EsBehandlingApiKeys.INNTEKT_ARBEID_YTELSE, EsBehandlingApiKeys.MEDLEMSKAP];
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
    requestApi={requestEsApi}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    overstyringApKoder={OVERSTYRING_AP_CODES}
    faktaPanelKode={FaktaPanelCode.MEDLEMSKAPSVILKARET}
    faktaPanelMenyTekst={intl.formatMessage({ id: 'MedlemskapInfoPanel.Medlemskap' })}
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

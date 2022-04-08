import React, {
  FunctionComponent,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import FodselOgTilretteleggingFaktaIndex from '@fpsak-frontend/fakta-fodsel-og-tilrettelegging';
import { FaktaPanelCode } from '@fpsak-frontend/konstanter';
import {
  AksessRettigheter, Aksjonspunkt, ArbeidsgiverOpplysningerPerId, FodselOgTilrettelegging, InntektArbeidYtelse,
} from '@fpsak-frontend/types';
import { FaktaDefaultInitPanel, FaktaPanelInitProps } from '@fpsak-frontend/behandling-felles';
import { createIntl } from '@navikt/ft-utils';

import messages from '../../i18n/nb_NO.json';
import { requestSvpApi, SvpBehandlingApiKeys } from '../data/svpBehandlingApi';

const intl = createIntl(messages);

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.FODSELTILRETTELEGGING];

const OVERSTYRING_AP_CODES = [aksjonspunktCodes.OVERSTYR_AVKLAR_STARTDATO];

const ENDEPUNKTER_INIT_DATA = [SvpBehandlingApiKeys.AKSJONSPUNKTER];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
}

const ENDEPUNKTER_PANEL_DATA = [SvpBehandlingApiKeys.INNTEKT_ARBEID_YTELSE, SvpBehandlingApiKeys.SVANGERSKAPSPENGER_TILRETTELEGGING];
type EndepunktPanelData = {
  inntektArbeidYtelse: InntektArbeidYtelse;
  svangerskapspengerTilrettelegging: FodselOgTilrettelegging;
}

interface OwnProps {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  rettigheter: AksessRettigheter;
}

/**
 * FodseltilretteleggingFaktaInitPanel
 */
const FodseltilretteleggingFaktaInitPanel: FunctionComponent<OwnProps & FaktaPanelInitProps> = ({
  arbeidsgiverOpplysningerPerId,
  rettigheter,
  ...props
}) => (
  <FaktaDefaultInitPanel<EndepunktInitData, EndepunktPanelData>
    {...props}
    requestApi={requestSvpApi}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    overstyringApKoder={OVERSTYRING_AP_CODES}
    faktaPanelKode={FaktaPanelCode.FODSELTILRETTELEGGING}
    faktaPanelMenyTekst={intl.formatMessage({ id: 'FodselOgTilretteleggingInfoPanel.FaktaFodselOgTilrettelegging' })}
    skalPanelVisesIMeny={(initData) => !!initData.aksjonspunkter
      && !!initData.aksjonspunkter.some((ap) => AKSJONSPUNKT_KODER.some((kode) => kode === ap.definisjon))}
    renderPanel={(data) => (
      <FodselOgTilretteleggingFaktaIndex
        erOverstyrer={rettigheter.kanOverstyreAccess.isEnabled}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        {...data}
      />
    )}
  />
);

export default FodseltilretteleggingFaktaInitPanel;

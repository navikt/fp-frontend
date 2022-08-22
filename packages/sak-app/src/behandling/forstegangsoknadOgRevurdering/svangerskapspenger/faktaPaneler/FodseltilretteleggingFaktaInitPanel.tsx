import React, {
  FunctionComponent,
} from 'react';
import { useIntl } from 'react-intl';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import FodselOgTilretteleggingFaktaIndex from '@fpsak-frontend/fakta-fodsel-og-tilrettelegging';
import { FaktaPanelCode } from '@fpsak-frontend/konstanter';
import {
  AksessRettigheter, Aksjonspunkt, ArbeidsgiverOpplysningerPerId, FodselOgTilrettelegging, InntektArbeidYtelse,
} from '@fpsak-frontend/types';

import FaktaPanelInitProps from '../../../felles/types/faktaPanelInitProps';
import { BehandlingFellesApiKeys } from '../../../felles/data/behandlingFellesApi';
import FaktaDefaultInitPanel from '../../../felles/components/fakta/FaktaDefaultInitPanel';
import { SvpBehandlingApiKeys } from '../data/svpBehandlingApi';

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.FODSELTILRETTELEGGING];

const OVERSTYRING_AP_CODES = [aksjonspunktCodes.OVERSTYR_AVKLAR_STARTDATO];

const ENDEPUNKTER_INIT_DATA = [BehandlingFellesApiKeys.AKSJONSPUNKTER];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
}

const ENDEPUNKTER_PANEL_DATA = [BehandlingFellesApiKeys.INNTEKT_ARBEID_YTELSE, SvpBehandlingApiKeys.SVANGERSKAPSPENGER_TILRETTELEGGING];
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
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    overstyringApKoder={OVERSTYRING_AP_CODES}
    faktaPanelKode={FaktaPanelCode.FODSELTILRETTELEGGING}
    faktaPanelMenyTekst={useIntl().formatMessage({ id: 'FodselOgTilretteleggingInfoPanel.FaktaFodselOgTilrettelegging' })}
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

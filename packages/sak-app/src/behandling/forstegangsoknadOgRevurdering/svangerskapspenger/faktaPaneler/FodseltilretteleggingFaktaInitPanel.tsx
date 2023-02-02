import React, {
  FunctionComponent,
} from 'react';
import { useIntl } from 'react-intl';

import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import FodselOgTilretteleggingFaktaIndex from '@navikt/fp-fakta-fodsel-og-tilrettelegging';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import {
  AksessRettigheter,
  ArbeidOgInntektsmelding,
  ArbeidsgiverOpplysningerPerId,
  FodselOgTilrettelegging,
} from '@navikt/fp-types';

import FaktaPanelInitProps from '../../../felles/typer/faktaPanelInitProps';
import { BehandlingFellesApiKeys } from '../../../felles/data/behandlingFellesApi';
import FaktaDefaultInitPanel from '../../../felles/fakta/FaktaDefaultInitPanel';
import { SvpBehandlingApiKeys } from '../data/svpBehandlingApi';

const AKSJONSPUNKT_KODER = [AksjonspunktCode.FODSELTILRETTELEGGING];

const OVERSTYRING_AP_CODES = [AksjonspunktCode.OVERSTYR_AVKLAR_STARTDATO];

const ENDEPUNKTER_PANEL_DATA = [BehandlingFellesApiKeys.ARBEID_OG_INNTEKT, SvpBehandlingApiKeys.SVANGERSKAPSPENGER_TILRETTELEGGING];
type EndepunktPanelData = {
  arbeidOgInntekt: ArbeidOgInntektsmelding;
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
  <FaktaDefaultInitPanel<EndepunktPanelData>
    {...props}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    overstyringApKoder={OVERSTYRING_AP_CODES}
    faktaPanelKode={FaktaPanelCode.FODSELTILRETTELEGGING}
    faktaPanelMenyTekst={useIntl().formatMessage({ id: 'FodselOgTilretteleggingInfoPanel.FaktaFodselOgTilrettelegging' })}
    skalPanelVisesIMeny={() => !!props.behandling.aksjonspunkt
      && !!props.behandling.aksjonspunkt.some((ap) => AKSJONSPUNKT_KODER.some((kode) => kode === ap.definisjon))}
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

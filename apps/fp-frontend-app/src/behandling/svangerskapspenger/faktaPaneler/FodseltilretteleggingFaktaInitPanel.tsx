import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';

import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import { TilretteleggingFaktaIndex } from '@navikt/fp-fakta-tilrettelegging';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { ArbeidOgInntektsmelding, ArbeidsgiverOpplysningerPerId, FodselOgTilrettelegging } from '@navikt/fp-types';

import FaktaPanelInitProps from '../../felles/typer/faktaPanelInitProps';
import FaktaDefaultInitPanel from '../../felles/fakta/FaktaDefaultInitPanel';
import { BehandlingApiKeys } from '../../../data/behandlingContextApi';

const AKSJONSPUNKT_KODER = [AksjonspunktCode.FODSELTILRETTELEGGING];

const OVERSTYRING_AP_CODES = [AksjonspunktCode.OVERSTYR_AVKLAR_STARTDATO];

const ENDEPUNKTER_PANEL_DATA = [
  BehandlingApiKeys.ARBEID_OG_INNTEKT,
  BehandlingApiKeys.SVANGERSKAPSPENGER_TILRETTELEGGING,
];
type EndepunktPanelData = {
  arbeidOgInntekt: ArbeidOgInntektsmelding;
  svangerskapspengerTilrettelegging: FodselOgTilrettelegging;
};

interface OwnProps {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

/**
 * FodseltilretteleggingFaktaInitPanel
 */
const FodseltilretteleggingFaktaInitPanel: FunctionComponent<OwnProps & FaktaPanelInitProps> = ({
  arbeidsgiverOpplysningerPerId,
  ...props
}) => (
  <FaktaDefaultInitPanel<EndepunktPanelData>
    {...props}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    overstyringApKoder={OVERSTYRING_AP_CODES}
    faktaPanelKode={FaktaPanelCode.FODSELTILRETTELEGGING}
    faktaPanelMenyTekst={useIntl().formatMessage({
      id: 'FodselOgTilretteleggingInfoPanel.FaktaFodselOgTilrettelegging',
    })}
    skalPanelVisesIMeny={() => true}
    renderPanel={data => (
      <TilretteleggingFaktaIndex
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        {...data}
        readOnly={
          data.readOnly ||
          !props.behandling.aksjonspunkt.some((ap: { definisjon: any }) =>
            AKSJONSPUNKT_KODER.some(kode => kode === ap.definisjon),
          )
        }
      />
    )}
  />
);

export default FodseltilretteleggingFaktaInitPanel;

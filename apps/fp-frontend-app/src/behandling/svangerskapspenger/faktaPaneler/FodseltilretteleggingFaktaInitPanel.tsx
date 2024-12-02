import React from 'react';
import { useIntl } from 'react-intl';

import { TilretteleggingFaktaIndex } from '@navikt/fp-fakta-tilrettelegging';
import { AksjonspunktKode, hasAksjonspunkt } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { ArbeidOgInntektsmelding, ArbeidsgiverOpplysningerPerId, FodselOgTilrettelegging } from '@navikt/fp-types';

import { BehandlingApiKeys } from '../../../data/behandlingContextApi';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { FaktaPanelInitProps } from '../../felles/typer/faktaPanelInitProps';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.FODSELTILRETTELEGGING];

const OVERSTYRING_AP_CODES = [AksjonspunktKode.OVERSTYR_AVKLAR_STARTDATO];

const ENDEPUNKTER_PANEL_DATA = [
  BehandlingApiKeys.ARBEID_OG_INNTEKT,
  BehandlingApiKeys.SVANGERSKAPSPENGER_TILRETTELEGGING,
];
type EndepunktPanelData = {
  arbeidOgInntekt: ArbeidOgInntektsmelding;
  svangerskapspengerTilrettelegging: FodselOgTilrettelegging;
};

interface Props {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const FodseltilretteleggingFaktaInitPanel = ({
  arbeidsgiverOpplysningerPerId,
  ...props
}: Props & FaktaPanelInitProps) => (
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
          data.readOnly || !AKSJONSPUNKT_KODER.some(kode => hasAksjonspunkt(kode, props.behandling.aksjonspunkt))
        }
      />
    )}
  />
);

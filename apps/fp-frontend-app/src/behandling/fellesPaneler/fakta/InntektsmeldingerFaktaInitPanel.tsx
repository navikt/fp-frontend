import FaktaPanelInitProps from '../../felles/typer/faktaPanelInitProps';
import FaktaDefaultInitPanel from '../../felles/fakta/FaktaDefaultInitPanel';
import React from 'react';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { useIntl } from 'react-intl';
import { BehandlingApiKeys } from '../../../data/behandlingContextApi';
import { InntektsmeldingFaktaIndex } from '@navikt/fp-fakta-inntektsmelding';
import {
  ArbeidsgiverOpplysningerPerId,
  Behandling,
  BehandlingAppKontekst,
  Fagsak,
  Inntektsmelding,
} from '@navikt/fp-types';

const ENDEPUNKTER_PANEL_DATA = [BehandlingApiKeys.INNTEKTSMELDINGER];
type EndepunktPanelData = {
  inntektsmeldinger: Inntektsmelding[];
};

type OwnProps = {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  behandling: Behandling;
  alleBehandlinger: BehandlingAppKontekst[];
  fagsak: Fagsak;
};

export const InntektsmeldingerFaktaInitPanel = ({
  arbeidsgiverOpplysningerPerId,
  fagsak,
  alleBehandlinger,
  ...props
}: FaktaPanelInitProps & OwnProps) => (
  <FaktaDefaultInitPanel<EndepunktPanelData>
    {...props}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    faktaPanelKode={FaktaPanelCode.INNTEKTSMELDINGER}
    faktaPanelMenyTekst={useIntl().formatMessage({ id: 'InntektsmeldingerInfoPanel.Title' })}
    skalPanelVisesIMeny={() => true}
    renderPanel={data => (
      <InntektsmeldingFaktaIndex
        {...data}
        fagsak={fagsak}
        alleBehandlinger={alleBehandlinger}
        behandling={props.behandling}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      />
    )}
  />
);

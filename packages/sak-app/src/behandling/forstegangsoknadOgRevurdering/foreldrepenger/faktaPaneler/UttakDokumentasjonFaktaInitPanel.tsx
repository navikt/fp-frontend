import React, {
  FunctionComponent,
} from 'react';
import { useIntl } from 'react-intl';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import UttakDokumentasjonFaktaIndex from '@fpsak-frontend/fakta-uttaksdokumentasjon';
import { DokumentasjonVurderingBehov } from '@fpsak-frontend/types';

import { FaktaPanelCode } from '@fpsak-frontend/konstanter';

import FaktaPanelInitProps from '../../../felles/typer/faktaPanelInitProps';
import FaktaDefaultInitPanel from '../../../felles/fakta/FaktaDefaultInitPanel';
import { FpBehandlingApiKeys, requestFpApi } from '../data/fpBehandlingApi';

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.VURDER_UTTAK_DOKUMENTASJON];

const ENDEPUNKTER_PANEL_DATA = [FpBehandlingApiKeys.DOKUMENTASJON_VURDERING_BEHOV];
type EndepunktPanelData = {
  dokumentasjonVurderingBehov: DokumentasjonVurderingBehov[];
}

/**
 * UttakDokumentasjonFaktaInitPanel
 */
const UttakDokumentasjonFaktaInitPanel: FunctionComponent<FaktaPanelInitProps> = (props) => (
  <FaktaDefaultInitPanel<Record<string, never>, EndepunktPanelData>
    {...props}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    faktaPanelKode={FaktaPanelCode.UTTAK_DOKUMENTASJON}
    faktaPanelMenyTekst={useIntl().formatMessage({ id: 'UttakDokumentasjonFaktaInitPanel.FaktaUttakDokumentasjon' })}
    skalPanelVisesIMeny={() => requestFpApi.hasPath(FpBehandlingApiKeys.DOKUMENTASJON_VURDERING_BEHOV.name)}
    renderPanel={(data) => (
      <UttakDokumentasjonFaktaIndex
        {...data}
      />
    )}
  />
);

export default UttakDokumentasjonFaktaInitPanel;

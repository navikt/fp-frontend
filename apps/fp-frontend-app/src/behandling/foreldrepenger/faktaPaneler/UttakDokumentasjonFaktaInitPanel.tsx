import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';

import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import { UttakDokumentasjonFaktaIndex } from '@navikt/fp-fakta-uttaksdokumentasjon';
import { DokumentasjonVurderingBehov } from '@navikt/fp-types';

import { FaktaPanelCode } from '@navikt/fp-konstanter';

import FaktaPanelInitProps from '../../felles/typer/faktaPanelInitProps';
import FaktaDefaultInitPanel from '../../felles/fakta/FaktaDefaultInitPanel';
import { BehandlingApiKeys, requestBehandlingApi } from '../../../data/behandlingContextApi';

const AKSJONSPUNKT_KODER = [AksjonspunktCode.VURDER_UTTAK_DOKUMENTASJON];

const ENDEPUNKTER_PANEL_DATA = [BehandlingApiKeys.DOKUMENTASJON_VURDERING_BEHOV];
type EndepunktPanelData = {
  dokumentasjonVurderingBehov: DokumentasjonVurderingBehov[];
};

/**
 * UttakDokumentasjonFaktaInitPanel
 */
const UttakDokumentasjonFaktaInitPanel: FunctionComponent<FaktaPanelInitProps> = props => (
  <FaktaDefaultInitPanel<EndepunktPanelData>
    {...props}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    faktaPanelKode={FaktaPanelCode.UTTAK_DOKUMENTASJON}
    faktaPanelMenyTekst={useIntl().formatMessage({ id: 'UttakDokumentasjonFaktaInitPanel.FaktaUttakDokumentasjon' })}
    skalPanelVisesIMeny={() => requestBehandlingApi.hasPath(BehandlingApiKeys.DOKUMENTASJON_VURDERING_BEHOV)}
    renderPanel={data => <UttakDokumentasjonFaktaIndex {...data} />}
  />
);

export default UttakDokumentasjonFaktaInitPanel;

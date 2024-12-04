import React from 'react';
import { useIntl } from 'react-intl';

import { UttakDokumentasjonFaktaIndex } from '@navikt/fp-fakta-uttaksdokumentasjon';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { DokumentasjonVurderingBehov } from '@navikt/fp-types';

import { BehandlingApiKeys, requestBehandlingApi } from '../../../data/behandlingContextApi';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { FaktaPanelInitProps } from '../../felles/typer/faktaPanelInitProps';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.VURDER_UTTAK_DOKUMENTASJON];

const ENDEPUNKTER_PANEL_DATA = [BehandlingApiKeys.DOKUMENTASJON_VURDERING_BEHOV];

type EndepunktPanelData = {
  dokumentasjonVurderingBehov: DokumentasjonVurderingBehov[];
};

export const UttakDokumentasjonFaktaInitPanel = (props: FaktaPanelInitProps) => (
  <FaktaDefaultInitPanel<EndepunktPanelData>
    {...props}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    faktaPanelKode={FaktaPanelCode.UTTAK_DOKUMENTASJON}
    faktaPanelMenyTekst={useIntl().formatMessage({ id: 'FaktaInitPanel.Title.UttakDokumentasjon' })}
    skalPanelVisesIMeny={() => requestBehandlingApi.hasPath(BehandlingApiKeys.DOKUMENTASJON_VURDERING_BEHOV.name)}
    renderPanel={data => <UttakDokumentasjonFaktaIndex {...data} />}
  />
);

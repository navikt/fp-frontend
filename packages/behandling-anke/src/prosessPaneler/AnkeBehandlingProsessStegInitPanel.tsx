import React, {
  FunctionComponent,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { AnkeProsessDataIndex, ProsessDataAnke } from '@fpsak-frontend/prosess-anke';
import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import {
  Aksjonspunkt, AlleKodeverk, Behandling, Fagsak, Kodeverk,
} from '@fpsak-frontend/types';
import { ProsessDefaultInitPanel, ProsessPanelInitProps } from '@fpsak-frontend/behandling-felles';
import { createIntl } from '@fpsak-frontend/utils';

import messages from '../../i18n/nb_NO.json';
import { requestAnkeApi, AnkeBehandlingApiKeys } from '../data/ankeBehandlingApi';

const intl = createIntl(messages);

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.MANUELL_VURDERING_AV_ANKE];

const ENDEPUNKTER_INIT_DATA = [AnkeBehandlingApiKeys.AKSJONSPUNKTER];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
}

interface OwnProps {
  behandlingData: {
    fagsak: Fagsak;
    behandling: Behandling;
    alleKodeverk: AlleKodeverk;
  };
  alleBehandlinger: {
    id: number;
    type: Kodeverk;
    avsluttet?: string;
  }[];
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  lagreAksjonspunkter: (params?: any, keepData?: boolean) => Promise<Behandling>
}

const AnkeBehandlingProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  behandlingData,
  alleBehandlinger,
  oppdaterProsessStegOgFaktaPanelIUrl,
  lagreAksjonspunkter,
  ...props
}) => (
  <ProsessDefaultInitPanel<EndepunktInitData>
    {...props}
    requestApi={requestAnkeApi}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    prosessPanelKode={ProsessStegCode.ANKEBEHANDLING}
    prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.Ankebehandling' })}
    skalPanelVisesIMeny={() => true}
    renderPanel={(data) => {
      const prosessData = new ProsessDataAnke(requestAnkeApi, behandlingData)
        .medRestEndepunkter(AnkeBehandlingApiKeys.ANKE_VURDERING, AnkeBehandlingApiKeys.PREVIEW_MESSAGE,
          AnkeBehandlingApiKeys.SAVE_ANKE_VURDERING)
        .medAksjonspunkter(data.aksjonspunkter, AKSJONSPUNKT_KODER)
        .medLagring(oppdaterProsessStegOgFaktaPanelIUrl, lagreAksjonspunkter);
      return (
        <AnkeProsessDataIndex
          behandlinger={alleBehandlinger}
          prosessData={prosessData}
          isReadOnly={data.isReadOnly}
          readOnlySubmitButton={data.readOnlySubmitButton}
          formData={data.formData}
          setFormData={data.setFormData}
        />
      );
    }}
  />
);

export default AnkeBehandlingProsessStegInitPanel;

import React, {
  FunctionComponent, useMemo,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import FormkravProsessIndex from '@fpsak-frontend/prosess-formkrav';
import { prosessStegCodes } from '@fpsak-frontend/konstanter';
import {
  Aksjonspunkt, KlageVurdering, Kodeverk,
} from '@fpsak-frontend/types';
import { ProsessDefaultInitPanel, ProsessPanelInitProps } from '@fpsak-frontend/behandling-felles';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import { createIntl } from '@fpsak-frontend/utils';

import messages from '../../i18n/nb_NO.json';
import { KlageBehandlingApiKeys, requestKlageApi } from '../data/klageBehandlingApi';

const intl = createIntl(messages);

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.VURDERING_AV_FORMKRAV_KLAGE_KA];

const ENDEPUNKTER_INIT_DATA = [KlageBehandlingApiKeys.AKSJONSPUNKTER];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
}

const ENDEPUNKTER_PANEL_DATA = [KlageBehandlingApiKeys.KLAGE_VURDERING];
type EndepunktPanelData = {
  klageVurdering?: KlageVurdering;
}

interface OwnProps {
  alleBehandlinger: {
    id: number;
    uuid: string;
    type: Kodeverk;
    status: Kodeverk;
    opprettet: string;
    avsluttet?: string;
  }[];
}

const FormKravKlageInstansProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  alleBehandlinger,
  ...props
}) => {
  const avsluttedeBehandlinger = useMemo(() => alleBehandlinger
    .filter((b) => b.status.kode === behandlingStatus.AVSLUTTET)
    .filter((b) => b.type.kode !== behandlingType.KLAGE && b.type.kode !== behandlingType.ANKE), [alleBehandlinger]);

  return (
    <ProsessDefaultInitPanel<EndepunktInitData, EndepunktPanelData>
      {...props}
      requestApi={requestKlageApi}
      initEndepunkter={ENDEPUNKTER_INIT_DATA}
      panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      prosessPanelKode={prosessStegCodes.FORMKRAV_KLAGE_NAV_KLAGEINSTANS}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.FormkravKlageKA' })}
      skalPanelVisesIMeny={() => true}
      renderPanel={(data) => (
        <FormkravProsessIndex
          avsluttedeBehandlinger={avsluttedeBehandlinger}
          {...data}
        />
      )}
    />
  );
};

export default FormKravKlageInstansProsessStegInitPanel;

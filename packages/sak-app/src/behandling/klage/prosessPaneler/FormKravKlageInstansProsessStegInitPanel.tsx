import React, {
  FunctionComponent, useMemo,
} from 'react';
import { useIntl } from 'react-intl';
import { BehandlingStatus, BehandlingType } from '@navikt/ft-kodeverk';

import FormkravProsessIndex from '@fpsak-frontend/prosess-formkrav';
import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import { KlageVurdering } from '@fpsak-frontend/types';

import { isKlageAvvist } from '@fpsak-frontend/kodeverk/src/behandlingResultatType';
import AksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import ProsessDefaultInitPanel from '../../felles/prosess/ProsessDefaultInitPanel';
import ProsessPanelInitProps from '../../felles/typer/prosessPanelInitProps';
import { KlageBehandlingApiKeys, requestKlageApi } from '../data/klageBehandlingApi';

const AKSJONSPUNKT_KODER = [AksjonspunktCodes.VURDER_FORMKRAV_NK];

const ENDEPUNKTER_PANEL_DATA = [KlageBehandlingApiKeys.KLAGE_VURDERING];
type EndepunktPanelData = {
  klageVurdering?: KlageVurdering;
}

interface OwnProps {
  alleBehandlinger: {
    uuid: string;
    type: string;
    status: string;
    opprettet: string;
    avsluttet?: string;
    resultatType?: string;
  }[];
}

const FormKravKlageInstansProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  alleBehandlinger,
  ...props
}) => {
  const intl = useIntl();
  const avsluttedeBehandlinger = useMemo(() => alleBehandlinger
    .filter((b) => b.status === BehandlingStatus.AVSLUTTET)
    .filter((b) => (b.type !== BehandlingType.KLAGE || isKlageAvvist(b.resultatType)) && b.type !== BehandlingType.ANKE), [alleBehandlinger]);

  return (
    <ProsessDefaultInitPanel<EndepunktPanelData>
      {...props}
      requestApi={requestKlageApi}
      panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      prosessPanelKode={ProsessStegCode.FORMKRAV_KLAGE_NAV_KLAGEINSTANS}
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

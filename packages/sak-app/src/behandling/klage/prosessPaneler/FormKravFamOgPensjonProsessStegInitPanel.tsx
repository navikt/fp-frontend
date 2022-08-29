import React, {
  FunctionComponent, useMemo,
} from 'react';
import { useIntl } from 'react-intl';
import { Aksjonspunkt } from '@navikt/ft-types';
import { BehandlingStatus, BehandlingType } from '@navikt/ft-kodeverk';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import FormkravProsessIndex from '@fpsak-frontend/prosess-formkrav';
import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import { KlageVurdering } from '@fpsak-frontend/types';

import ProsessDefaultInitPanel from '../../felles/prosess/ProsessDefaultInitPanel';
import ProsessPanelInitProps from '../../felles/typer/prosessPanelInitProps';
import { BehandlingFellesApiKeys } from '../../felles/data/behandlingFellesApi';
import { KlageBehandlingApiKeys, requestKlageApi } from '../data/klageBehandlingApi';

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.VURDERING_AV_FORMKRAV_KLAGE_NFP];

const ENDEPUNKTER_INIT_DATA = [BehandlingFellesApiKeys.AKSJONSPUNKTER];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
}

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
  }[];
}

const FormKravFamOgPensjonProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  alleBehandlinger,
  ...props
}) => {
  const intl = useIntl();

  const avsluttedeBehandlinger = useMemo(() => alleBehandlinger
    .filter((b) => b.status === BehandlingStatus.AVSLUTTET)
    .filter((b) => b.type !== BehandlingType.KLAGE && b.type !== BehandlingType.ANKE), [alleBehandlinger]);

  return (
    <ProsessDefaultInitPanel<EndepunktInitData, EndepunktPanelData>
      {...props}
      requestApi={requestKlageApi}
      initEndepunkter={ENDEPUNKTER_INIT_DATA}
      panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      prosessPanelKode={ProsessStegCode.FORMKRAV_KLAGE_NAV_FAMILIE_OG_PENSJON}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.FormkravKlageNFP' })}
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

export default FormKravFamOgPensjonProsessStegInitPanel;

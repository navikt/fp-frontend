import React, { FunctionComponent, useMemo } from 'react';
import { useIntl } from 'react-intl';
import { BehandlingStatus, BehandlingType } from '@navikt/ft-kodeverk';

import { AksjonspunktCode, isKlageAvvist } from '@navikt/fp-kodeverk';
import { FormkravProsessIndex } from '@navikt/fp-prosess-formkrav';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { KlageVurdering } from '@navikt/fp-types';

import ProsessDefaultInitPanel from '../../felles/prosess/ProsessDefaultInitPanel';
import ProsessPanelInitProps from '../../felles/typer/prosessPanelInitProps';
import { BehandlingApiKeys, restBehandlingApiHooks } from '../../../data/behandlingContextApi';

const AKSJONSPUNKT_KODER = [AksjonspunktCode.VURDERING_AV_FORMKRAV_KLAGE_NFP];

const ENDEPUNKTER_PANEL_DATA = [BehandlingApiKeys.KLAGE_VURDERING];
type EndepunktPanelData = {
  klageVurdering?: KlageVurdering;
};

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

const FormKravFamOgPensjonProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  alleBehandlinger,
  ...props
}) => {
  const intl = useIntl();

  const avsluttedeBehandlinger = useMemo(
    () =>
      alleBehandlinger
        .filter(b => b.status === BehandlingStatus.AVSLUTTET)
        .filter(
          b => (b.type !== BehandlingType.KLAGE || isKlageAvvist(b.resultatType)) && b.type !== BehandlingType.ANKE,
        ),
    [alleBehandlinger],
  );

  const { startRequest: lagreFormkravVurdering } = restBehandlingApiHooks.useRestApiRunner(
    BehandlingApiKeys.SAVE_FORMKRAV_VURDERING,
  );

  return (
    <ProsessDefaultInitPanel<EndepunktPanelData>
      {...props}
      panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      prosessPanelKode={ProsessStegCode.FORMKRAV_KLAGE_NAV_FAMILIE_OG_PENSJON}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.FormkravKlageNFP' })}
      skalPanelVisesIMeny={() => true}
      renderPanel={data => (
        <FormkravProsessIndex
          avsluttedeBehandlinger={avsluttedeBehandlinger}
          lagreFormkravVurdering={lagreFormkravVurdering}
          {...data}
        />
      )}
    />
  );
};

export default FormKravFamOgPensjonProsessStegInitPanel;

import React, { useMemo } from 'react';
import { useIntl } from 'react-intl';

import { AksjonspunktKode, BehandlingStatus, BehandlingType, isKlageAvvist } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { FormkravMellomlagretDataType, FormkravProsessIndex } from '@navikt/fp-prosess-formkrav';
import { KlageVurdering } from '@navikt/fp-types';

import { BehandlingApiKeys, restBehandlingApiHooks } from '../../../data/behandlingContextApi';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { ProsessPanelInitProps } from '../../felles/typer/prosessPanelInitProps';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.VURDER_FORMKRAV_NK];

const ENDEPUNKTER_PANEL_DATA = [BehandlingApiKeys.KLAGE_VURDERING];
type EndepunktPanelData = {
  klageVurdering?: KlageVurdering;
};

interface Props {
  alleBehandlinger: {
    uuid: string;
    type: string;
    status: string;
    opprettet: string;
    avsluttet?: string;
    resultatType?: string;
  }[];
  hentOgSettBehandling: (keepData?: boolean) => void;
}

export const FormKravKlageInstansProsessStegInitPanel = ({
  alleBehandlinger,
  hentOgSettBehandling,
  ...props
}: Props & ProsessPanelInitProps) => {
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

  const lagreFormkravOgHentBehandlingPåNytt = (data: FormkravMellomlagretDataType) =>
    lagreFormkravVurdering(data).then(() => hentOgSettBehandling(true));

  return (
    <ProsessDefaultInitPanel<EndepunktPanelData>
      {...props}
      panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      prosessPanelKode={ProsessStegCode.FORMKRAV_KLAGE_NAV_KLAGEINSTANS}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.FormkravKlageKA' })}
      skalPanelVisesIMeny={() => true}
      renderPanel={data => (
        <FormkravProsessIndex
          avsluttedeBehandlinger={avsluttedeBehandlinger}
          lagreFormkravVurdering={lagreFormkravOgHentBehandlingPåNytt}
          {...data}
        />
      )}
    />
  );
};

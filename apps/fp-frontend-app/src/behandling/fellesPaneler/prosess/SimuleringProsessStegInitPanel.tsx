import React, { useCallback } from 'react';
import { useIntl } from 'react-intl';

import { AksjonspunktKode, VilkarUtfallType } from '@navikt/fp-kodeverk';
import { SimuleringProsessIndex } from '@navikt/fp-prosess-simulering';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import {
  Behandling,
  Fagsak,
  SimuleringResultat,
  TilbakekrevingValg,
  ArbeidsgiverOpplysningerPerId,
} from '@navikt/fp-types';
import { forhandsvisDokument } from '@navikt/ft-utils';

import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { ProsessPanelMenyData } from '../../felles/typer/prosessPanelMenyData';
import { ProsessPanelInitProps } from '../../felles/typer/prosessPanelInitProps';
import { BehandlingApiKeys, requestBehandlingApi, restBehandlingApiHooks } from '../../../data/behandlingContextApi';

const getForhandsvisFptilbakeCallback =
  (
    forhandsvisTilbakekrevingMelding: (params?: any, keepData?: boolean) => Promise<Behandling | undefined>,
    fagsak: Fagsak,
    behandling: Behandling,
  ) =>
  (mottaker: string, fritekst: string) => {
    const data = {
      behandlingUuid: behandling.uuid,
      fagsakYtelseType: fagsak.fagsakYtelseType,
      varseltekst: fritekst,
    };
    return forhandsvisTilbakekrevingMelding(data).then(response => forhandsvisDokument(response));
  };

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.VURDER_FEILUTBETALING,
  AksjonspunktKode.KONTROLLER_STOR_ETTERBETALING_SØKER,
];

const ENDEPUNKTER_PANEL_DATA = [BehandlingApiKeys.TILBAKEKREVINGVALG, BehandlingApiKeys.SIMULERING_RESULTAT];
type EndepunktPanelData = {
  tilbakekrevingvalg?: TilbakekrevingValg;
  simuleringResultat?: SimuleringResultat;
};

interface Props {
  menyData: ProsessPanelMenyData[];
  fagsak: Fagsak;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const SimuleringProsessStegInitPanel = ({
  menyData,
  fagsak,
  arbeidsgiverOpplysningerPerId,
  ...props
}: Props & ProsessPanelInitProps) => {
  const { startRequest: forhandsvisTilbakekrevingMelding } = restBehandlingApiHooks.useRestApiRunner(
    BehandlingApiKeys.PREVIEW_TILBAKEKREVING_MESSAGE,
  );

  const standardPanelProps = useStandardProsessPanelProps();

  const previewFptilbakeCallback = useCallback(
    getForhandsvisFptilbakeCallback(forhandsvisTilbakekrevingMelding, fagsak, standardPanelProps.behandling),
    [standardPanelProps.behandling.versjon],
  );

  return (
    <ProsessDefaultInitPanel<EndepunktPanelData>
      {...props}
      panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      prosessPanelKode={ProsessStegCode.SIMULERING}
      prosessPanelMenyTekst={useIntl().formatMessage({ id: 'Behandlingspunkt.Avregning' })}
      skalPanelVisesIMeny={() => {
        const harVedtakspanel = menyData.some(
          d =>
            d.id === ProsessStegCode.VEDTAK && (d.status !== VilkarUtfallType.IKKE_VURDERT || d.harApentAksjonspunkt),
        );
        return requestBehandlingApi.hasPath(BehandlingApiKeys.SIMULERING_RESULTAT.name) || !harVedtakspanel;
      }}
      hentOverstyrtStatus={() =>
        requestBehandlingApi.hasPath(BehandlingApiKeys.SIMULERING_RESULTAT.name)
          ? VilkarUtfallType.OPPFYLT
          : VilkarUtfallType.IKKE_VURDERT
      }
      renderPanel={data => (
        <SimuleringProsessIndex
          previewFptilbakeCallback={previewFptilbakeCallback}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          {...data}
        />
      )}
    />
  );
};

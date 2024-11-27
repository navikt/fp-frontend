import React from 'react';
import { useIntl } from 'react-intl';

import {
  DetaljerteFeilutbetalingsperioder,
  FeilutbetalingPerioderWrapper,
  ForeldelseAksjonspunktCodes,
  TilbakekrevingProsessIndex,
} from '@navikt/ft-prosess-tilbakekreving';

import { isAksjonspunktOpen, KodeverkType,VilkarUtfallType } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { Aksjonspunkt, AlleKodeverkTilbakekreving,VilkarsVurdertePerioderWrapper } from '@navikt/fp-types';

import { BehandlingApiKeys, restBehandlingApiHooks } from '../../../data/behandlingContextApi';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { ProsessPanelInitProps } from '../../felles/typer/prosessPanelInitProps';

import '@navikt/ft-prosess-tilbakekreving/dist/style.css';

const AKSJONSPUNKT_KODER = [ForeldelseAksjonspunktCodes.VURDER_TILBAKEKREVING];

const ENDEPUNKTER_PANEL_DATA = [
  BehandlingApiKeys.VILKARVURDERINGSPERIODER,
  BehandlingApiKeys.VILKARVURDERING,
  BehandlingApiKeys.PERIODER_FORELDELSE,
];
type EndepunktPanelData = {
  vilkarvurderingsperioder: DetaljerteFeilutbetalingsperioder;
  vilkarvurdering: VilkarsVurdertePerioderWrapper;
  perioderForeldelse: FeilutbetalingPerioderWrapper;
};

const finnTilbakekrevingStatus = (aksjonspunkter: Aksjonspunkt[]): string => {
  if (aksjonspunkter.length > 0) {
    return aksjonspunkter.some(ap => isAksjonspunktOpen(ap.status))
      ? VilkarUtfallType.IKKE_VURDERT
      : VilkarUtfallType.OPPFYLT;
  }
  return VilkarUtfallType.IKKE_VURDERT;
};

interface Props {
  relasjonsRolleType: string;
  tilbakekrevingKodeverk: AlleKodeverkTilbakekreving;
}

export const TilbakekrevingProsessInitPanel = ({ ...props }: Props & ProsessPanelInitProps) => {
  const intl = useIntl();

  const { startRequest: beregnBelop } = restBehandlingApiHooks.useRestApiRunner(BehandlingApiKeys.BEREGNE_BELØP);

  return (
    <ProsessDefaultInitPanel<EndepunktPanelData>
      {...props}
      panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      prosessPanelKode={ProsessStegCode.TILBAKEKREVING}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.Tilbakekreving' })}
      skalPanelVisesIMeny={() => true}
      hentOverstyrtStatus={data => finnTilbakekrevingStatus(data.aksjonspunkter)}
      renderPanel={data => (
        <TilbakekrevingProsessIndex
          kodeverkSamlingFpTilbake={props.tilbakekrevingKodeverk}
          beregnBelop={beregnBelop}
          relasjonsRolleType={props.relasjonsRolleType}
          relasjonsRolleTypeKodeverk={data.alleKodeverk[KodeverkType.RELASJONSROLLE_TYPE]}
          {...data}
        />
      )}
    />
  );
};

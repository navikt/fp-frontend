import React, {
  FunctionComponent, useCallback, useMemo,
} from 'react';

import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import {
  Aksjonspunkt,
  AlleKodeverkTilbakekreving,
  Behandling,
  DetaljerteFeilutbetalingsperioder,
  FeilutbetalingPerioderWrapper,
  VilkarsVurdertePerioderWrapper,
} from '@navikt/ft-types';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import TilbakekrevingProsessIndex, { VilkarsVurderingAp, ForeldelseAksjonspunktCodes } from '@navikt/ft-prosess-tilbakekreving';
import { isAksjonspunktOpen } from '@navikt/ft-kodeverk';

import { restApiTilbakekrevingHooks, TilbakekrevingBehandlingApiKeys } from '../../data/tilbakekrevingBehandlingApi';
import getAlleMerknaderFraBeslutter from '../../felles/util/getAlleMerknaderFraBeslutter';

const ENDEPUNKTER_PANEL_DATA = [
  TilbakekrevingBehandlingApiKeys.VILKARVURDERINGSPERIODER,
  TilbakekrevingBehandlingApiKeys.VILKARVURDERING,
];
type EndepunktPanelData = {
  vilkarvurderingsperioder: DetaljerteFeilutbetalingsperioder;
  vilkarvurdering: VilkarsVurdertePerioderWrapper;
}

interface OwnProps {
  behandling: Behandling;
  perioderForeldelse: FeilutbetalingPerioderWrapper;
  aksjonspunkter: Aksjonspunkt[];
  navBrukerKjonn: string;
  alleKodeverk: AlleKodeverkTilbakekreving;
  bekreftAksjonspunkter: (aksjonspunktData: VilkarsVurderingAp) => Promise<void>;
  erReadOnlyFn: (aksjonspunkter: Aksjonspunkt[]) => boolean;
  formData?: any;
  setFormData: (data: any) => void;
}

const TilbakekrevingProsessInitPanel: FunctionComponent<OwnProps> = ({
  behandling,
  perioderForeldelse,
  aksjonspunkter,
  navBrukerKjonn,
  alleKodeverk,
  bekreftAksjonspunkter,
  erReadOnlyFn,
  formData,
  setFormData,
}) => {
  const { startRequest: beregnBelop } = restApiTilbakekrevingHooks.useRestApiRunner(TilbakekrevingBehandlingApiKeys.BEREGNE_BELØP);

  const formaterteEndepunkter = ENDEPUNKTER_PANEL_DATA.map((e) => ({ key: e }));
  const { data: initData, state } = restApiTilbakekrevingHooks
    .useMultipleRestApi<EndepunktPanelData, any>(formaterteEndepunkter, {
      updateTriggers: [behandling.versjon],
      isCachingOn: true,
    });

  const setFormDataTilbakekreving = useCallback((data: any) => setFormData((oldData) => ({
    ...oldData,
    [ProsessStegCode.TILBAKEKREVING]: data,
  })), [setFormData]);

  const aksjonspunkterForTilbakekreving = useMemo(() => (aksjonspunkter
    ? aksjonspunkter.filter((ap) => ForeldelseAksjonspunktCodes.VURDER_TILBAKEKREVING === ap.definisjon) : []),
  [aksjonspunkter]);

  const alleMerknaderFraBeslutter = useMemo(() => getAlleMerknaderFraBeslutter(behandling, aksjonspunkterForTilbakekreving),
    [behandling, aksjonspunkterForTilbakekreving]);
  const isReadOnly = useMemo(() => erReadOnlyFn(aksjonspunkterForTilbakekreving), [aksjonspunkterForTilbakekreving]);

  if (state !== RestApiState.SUCCESS) {
    return <LoadingPanel />;
  }

  return (
    <TilbakekrevingProsessIndex
      behandling={behandling}
      perioderForeldelse={perioderForeldelse}
      vilkarvurderingsperioder={initData.vilkarvurderingsperioder}
      vilkarvurdering={initData.vilkarvurdering}
      submitCallback={bekreftAksjonspunkter}
      isReadOnly={isReadOnly}
      navBrukerKjonn={navBrukerKjonn}
      alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
      tilbakekrevingKodeverk={alleKodeverk}
      beregnBelop={beregnBelop}
      formData={formData[ProsessStegCode.TILBAKEKREVING]}
      setFormData={setFormDataTilbakekreving}
      alleKodeverk={{} as any}
      status=""
      readOnlySubmitButton={false}
      aksjonspunkter={aksjonspunkterForTilbakekreving}
      vilkar={[]}
      isAksjonspunktOpen={aksjonspunkterForTilbakekreving.some((ap) => isAksjonspunktOpen(ap.status) && ap.kanLoses)}
    />
  );
};

export default TilbakekrevingProsessInitPanel;

import React, {
  FunctionComponent, useCallback, useMemo,
} from 'react';

import { ProsessStegCode } from '@navikt/fp-konstanter';
import {
  Aksjonspunkt,
  DetaljerteFeilutbetalingsperioder,
  FeilutbetalingPerioderWrapper,
  VilkarsVurdertePerioderWrapper,
} from '@navikt/ft-types';
import { RestApiState } from '@navikt/fp-rest-api-hooks';
import { Behandling, AlleKodeverkTilbakekreving } from '@navikt/fp-types';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { TilbakekrevingProsessIndex, VilkarsVurderingAp, ForeldelseAksjonspunktCodes } from '@navikt/ft-prosess-tilbakekreving';

import { restApiTilbakekrevingHooks, TilbakekrevingBehandlingApiKeys } from '../../data/tilbakekrevingBehandlingApi';
import getAlleMerknaderFraBeslutter from '../../felles/util/getAlleMerknaderFraBeslutter';

import '@navikt/ft-prosess-tilbakekreving/dist/style.css';

const ENDEPUNKTER_PANEL_DATA = [
  TilbakekrevingBehandlingApiKeys.VILKARVURDERINGSPERIODER,
  TilbakekrevingBehandlingApiKeys.VILKARVURDERING,
  TilbakekrevingBehandlingApiKeys.PERIODER_FORELDELSE,
];
type EndepunktPanelData = {
  vilkarvurderingsperioder: DetaljerteFeilutbetalingsperioder;
  vilkarvurdering: VilkarsVurdertePerioderWrapper;
  perioderForeldelse: FeilutbetalingPerioderWrapper;
}

interface OwnProps {
  behandling: Behandling;
  navBrukerKjonn: string;
  alleKodeverk: AlleKodeverkTilbakekreving;
  bekreftAksjonspunkter: (aksjonspunktData: VilkarsVurderingAp) => Promise<void>;
  erReadOnlyFn: (aksjonspunkter: Aksjonspunkt[]) => boolean;
  formData?: any;
  setFormData: (data: any) => void;
}

const TilbakekrevingProsessInitPanel: FunctionComponent<OwnProps> = ({
  behandling,
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

  const aksjonspunkter = behandling.aksjonspunkt || [];

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
      perioderForeldelse={initData.perioderForeldelse}
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
    />
  );
};

export default TilbakekrevingProsessInitPanel;

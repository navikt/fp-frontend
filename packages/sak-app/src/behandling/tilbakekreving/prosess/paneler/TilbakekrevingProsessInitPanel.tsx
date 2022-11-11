import React, {
  FunctionComponent, useCallback, useMemo,
} from 'react';

import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import {
  Aksjonspunkt,
  AlleKodeverkTilbakekreving,
  DetaljerteFeilutbetalingsperioder,
  FeilutbetalingPerioderWrapper,
  VilkarsVurdertePerioderWrapper,
} from '@navikt/ft-types';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import { Behandling } from '@fpsak-frontend/types';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { VilkarsVurderingAp, ForeldelseAksjonspunktCodes } from '@navikt/ft-prosess-tilbakekreving';

import DynamicLoader from '../../../felles/DynamicLoader';
import { restApiTilbakekrevingHooks, TilbakekrevingBehandlingApiKeys } from '../../data/tilbakekrevingBehandlingApi';
import getAlleMerknaderFraBeslutter from '../../felles/util/getAlleMerknaderFraBeslutter';

// TODO Denne burde ligga sånn til at den kun blir importert når denne pakka dynamisk blir importert
import '@navikt/ft-prosess-tilbakekreving/dist/style.css';

const ProsessTilbakekreving = React.lazy(() => import('@navikt/ft-prosess-tilbakekreving'));
// eslint-disable-next-line import/no-unresolved
const ProsessTilbakekrveingMF = process.env.NODE_ENV !== 'development' ? undefined
  // eslint-disable-next-line import/no-unresolved
  : () => import('ft_prosess_tilbakekreving/TilbakekrevingProsessIndex');

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
    <DynamicLoader<React.ComponentProps<typeof ProsessTilbakekreving>>
      packageCompFn={() => import('@navikt/ft-prosess-tilbakekreving')}
      federatedCompFn={ProsessTilbakekrveingMF}
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

import React, {
  FunctionComponent, useCallback, useState, useMemo,
} from 'react';
import { useIntl } from 'react-intl';
import { WarningModal, LoadingPanel } from '@navikt/ft-ui-komponenter';
import { BehandlingArsakType, isAksjonspunktOpen } from '@navikt/ft-kodeverk';
import {
  Aksjonspunkt, AlleKodeverkTilbakekreving, Behandling, BeregningsresultatTilbakekreving,
} from '@navikt/ft-types';
import { forhandsvisDokument } from '@navikt/ft-utils';

import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import {
  VedtakAksjonspunktCode, ForeslaVedtakTilbakekrevingAp, ForhandsvisData,
} from '@navikt/ft-prosess-tilbakekreving-vedtak';
import { DynamicLoader } from '@fpsak-frontend/behandling-felles';

import { restApiTilbakekrevingHooks, TilbakekrevingBehandlingApiKeys } from '../../data/tilbakekrevingBehandlingApi';
import FatterVedtakStatusModal from '../../felles/komponenter/FatterVedtakStatusModal';

// TODO Denne burde ligga sånn til at den kun blir importert når denne pakka dynamisk blir importert
import '@navikt/ft-prosess-tilbakekreving-vedtak/dist/style.css';

const ProsessVedtak = React.lazy(() => import('@navikt/ft-prosess-tilbakekreving-vedtak'));
// eslint-disable-next-line import/no-unresolved
const ProsessVedtakMF = process.env.NODE_ENV !== 'development' ? undefined
  // eslint-disable-next-line import/no-unresolved
  : React.lazy(() => import('ft_prosess_tilbakekreving_vedtak/VedtakProsessIndex')) as typeof ProsessVedtak;

class VedtakPanel extends DynamicLoader<React.ComponentProps<typeof ProsessVedtak>> {
  render() {
    return super.doRender(ProsessVedtak, ProsessVedtakMF);
  }
}

const tilbakekrevingÅrsakTyperKlage = [
  BehandlingArsakType.RE_KLAGE_KA,
  BehandlingArsakType.RE_KLAGE_NFP,
];

const erTilbakekrevingÅrsakKlage = (årsak: string): boolean => årsak
  && tilbakekrevingÅrsakTyperKlage.some((å) => å === årsak);

const getLagringSideeffekter = (
  toggleFatterVedtakModal: (skalViseModal: boolean) => void,
  toggleOppdatereFagsakContext: (skalOppdatereFagsak: boolean) => void,
) => () => {
  toggleOppdatereFagsakContext(false);

  // Returner funksjon som blir kjørt etter lagring av aksjonspunkt(er)
  return () => {
    toggleFatterVedtakModal(true);
  };
};

interface OwnProps {
  behandling: Behandling;
  beregningsresultat: BeregningsresultatTilbakekreving;
  aksjonspunkter?: Aksjonspunkt[];
  harApenRevurdering: boolean;
  bekreftAksjonspunkterMedSideeffekter: (
    lagringSideEffectsCallback?: (aksjonspunktModeller: any) => () => void,
  ) => (aksjonspunkter: ForeslaVedtakTilbakekrevingAp) => Promise<any>;
  opneSokeside: () => void;
  toggleOppdatereFagsakContext: (skalOppdatereFagsak: boolean) => void;
  erReadOnlyFn: (aksjonspunkter: Aksjonspunkt[]) => boolean;
  alleKodeverk: AlleKodeverkTilbakekreving;
  formData?: any;
  setFormData: (data: any) => void;
}

const VedtakTilbakekrevingProsessInitPanel: FunctionComponent<OwnProps> = ({
  behandling,
  beregningsresultat,
  aksjonspunkter,
  harApenRevurdering,
  bekreftAksjonspunkterMedSideeffekter,
  opneSokeside,
  toggleOppdatereFagsakContext,
  erReadOnlyFn,
  alleKodeverk,
  formData,
  setFormData,
}) => {
  const intl = useIntl();
  const [visApenRevurderingModal, toggleApenRevurderingModal] = useState(harApenRevurdering);
  const lukkApenRevurderingModal = useCallback(() => toggleApenRevurderingModal(false), []);

  const [visFatterVedtakModal, toggleFatterVedtakModal] = useState(false);

  const lagringSideeffekterCallback = getLagringSideeffekter(toggleFatterVedtakModal, toggleOppdatereFagsakContext);

  const { startRequest: forhandsvisVedtaksbrev } = restApiTilbakekrevingHooks.useRestApiRunner(TilbakekrevingBehandlingApiKeys.PREVIEW_VEDTAKSBREV);
  const fetchPreviewVedtaksbrev = useCallback((param: ForhandsvisData) => forhandsvisVedtaksbrev(param).then((response) => forhandsvisDokument(response)), []);

  const { data: vedtaksbrev, state } = restApiTilbakekrevingHooks.useRestApi(TilbakekrevingBehandlingApiKeys.VEDTAKSBREV);

  const aksjonspunkterForVedtak = useMemo(() => (
    aksjonspunkter.filter((ap) => VedtakAksjonspunktCode.FORESLA_VEDTAK === ap.definisjon)),
  [aksjonspunkter]);

  const isReadOnly = useMemo(() => erReadOnlyFn(aksjonspunkterForVedtak), [aksjonspunkterForVedtak]);

  const setFormDataVedtak = useCallback((data: any) => setFormData((oldData) => ({
    ...oldData,
    [ProsessStegCode.VEDTAK]: data,
  })), [setFormData]);

  if (state !== RestApiState.SUCCESS) {
    return <LoadingPanel />;
  }

  const erRevurderingTilbakekrevingKlage = behandling.førsteÅrsak && erTilbakekrevingÅrsakKlage(behandling.førsteÅrsak.behandlingArsakType);
  const erRevurderingTilbakekrevingFeilBeløpBortfalt = behandling.førsteÅrsak
    && BehandlingArsakType.RE_FEILUTBETALT_BELØP_REDUSERT === behandling.førsteÅrsak.behandlingArsakType;
  return (
    <>
      <FatterVedtakStatusModal
        visModal={visFatterVedtakModal}
        lukkModal={() => { toggleFatterVedtakModal(false); opneSokeside(); }}
        tekst={intl.formatMessage({ id: 'FatterTilbakekrevingVedtakStatusModal.Sendt' })}
      />
      {visApenRevurderingModal && (
        <WarningModal
          headerText={intl.formatMessage({ id: 'BehandlingTilbakekrevingIndex.ApenRevurderingHeader' })}
          bodyText={intl.formatMessage({ id: 'BehandlingTilbakekrevingIndex.ApenRevurdering' })}
          showModal
          submit={lukkApenRevurderingModal}
        />
      )}
      <VedtakPanel
        behandling={behandling}
        beregningsresultat={beregningsresultat}
        isReadOnly={isReadOnly}
        submitCallback={bekreftAksjonspunkterMedSideeffekter(lagringSideeffekterCallback)}
        vedtaksbrev={vedtaksbrev}
        tilbakekrevingKodeverk={alleKodeverk}
        fetchPreviewVedtaksbrev={fetchPreviewVedtaksbrev}
        erRevurderingTilbakekrevingKlage={erRevurderingTilbakekrevingKlage}
        erRevurderingTilbakekrevingFeilBeløpBortfalt={erRevurderingTilbakekrevingFeilBeløpBortfalt}
        formData={formData[ProsessStegCode.VEDTAK]}
        setFormData={setFormDataVedtak}
        alleKodeverk={{} as any}
        alleMerknaderFraBeslutter={{}}
        status=""
        readOnlySubmitButton={false}
        aksjonspunkter={aksjonspunkterForVedtak}
        vilkar={[]}
        isAksjonspunktOpen={aksjonspunkterForVedtak.some((ap) => isAksjonspunktOpen(ap.status) && ap.kanLoses)}
      />
    </>
  );
};

export default VedtakTilbakekrevingProsessInitPanel;

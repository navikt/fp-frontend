import React, {
  FunctionComponent, useCallback, useState, useMemo,
} from 'react';
import { useIntl } from 'react-intl';
import { WarningModal, LoadingPanel } from '@navikt/ft-ui-komponenter';
import { BehandlingArsakType } from '@navikt/ft-kodeverk';
import {
  Aksjonspunkt, BeregningsresultatTilbakekreving, Vedtaksbrev,
} from '@navikt/ft-types';
import { forhandsvisDokument } from '@navikt/ft-utils';

import { RestApiState } from '@navikt/fp-rest-api-hooks';
import { AlleKodeverkTilbakekreving, Behandling } from '@navikt/fp-types';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import {
  VedtakTilbakekrevingProsessIndex, VedtakAksjonspunktCode, ForeslaVedtakTilbakekrevingAp, ForhandsvisData,
} from '@navikt/ft-prosess-tilbakekreving-vedtak';

import { restApiTilbakekrevingHooks, TilbakekrevingBehandlingApiKeys } from '../../data/tilbakekrevingBehandlingApi';
import FatterVedtakStatusModal from '../../felles/komponenter/FatterVedtakStatusModal';

import '@navikt/ft-prosess-tilbakekreving-vedtak/dist/style.css';

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

const ENDEPUNKTER_PANEL_DATA = [
  TilbakekrevingBehandlingApiKeys.VEDTAKSBREV,
  TilbakekrevingBehandlingApiKeys.BEREGNINGSRESULTAT,
];
type EndepunktPanelData = {
  vedtaksbrev: Vedtaksbrev;
  beregningsresultat: BeregningsresultatTilbakekreving;
}

interface OwnProps {
  behandling: Behandling;
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

  const formaterteEndepunkter = ENDEPUNKTER_PANEL_DATA.map((e) => ({ key: e }));
  const { data: panelData, state } = restApiTilbakekrevingHooks
    .useMultipleRestApi<EndepunktPanelData, any>(formaterteEndepunkter, {
      updateTriggers: [behandling.versjon],
      isCachingOn: true,
    });

  const aksjonspunkter = behandling.aksjonspunkt || [];

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
      <VedtakTilbakekrevingProsessIndex
        behandling={behandling}
        beregningsresultat={panelData.beregningsresultat}
        isReadOnly={isReadOnly}
        submitCallback={bekreftAksjonspunkterMedSideeffekter(lagringSideeffekterCallback)}
        vedtaksbrev={panelData.vedtaksbrev}
        tilbakekrevingKodeverk={alleKodeverk}
        fetchPreviewVedtaksbrev={fetchPreviewVedtaksbrev}
        erRevurderingTilbakekrevingKlage={erRevurderingTilbakekrevingKlage}
        erRevurderingTilbakekrevingFeilBeløpBortfalt={erRevurderingTilbakekrevingFeilBeløpBortfalt}
        formData={formData[ProsessStegCode.VEDTAK]}
        setFormData={setFormDataVedtak}
      />
    </>
  );
};

export default VedtakTilbakekrevingProsessInitPanel;

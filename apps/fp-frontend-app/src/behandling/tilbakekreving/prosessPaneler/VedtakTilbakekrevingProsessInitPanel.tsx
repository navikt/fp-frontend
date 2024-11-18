import React, { FunctionComponent, useCallback, useState } from 'react';
import { useIntl } from 'react-intl';
import { ProsessStegCode } from '@navikt/fp-konstanter';

import { BehandlingArsakType, VilkarUtfallType, VedtakResultatType } from '@navikt/fp-kodeverk';
import { BeregningsresultatTilbakekreving, AlleKodeverkTilbakekreving, Behandlingsresultat } from '@navikt/fp-types';
import { WarningModal } from '@navikt/ft-ui-komponenter';
import {
  VedtakTilbakekrevingProsessIndex,
  VedtakAksjonspunktCode,
  ForhandsvisData,
  Vedtaksbrev,
} from '@navikt/ft-prosess-tilbakekreving-vedtak';
import { forhandsvisDokument } from '@navikt/ft-utils';
import ProsessDefaultInitPanel from '../../felles/prosess/ProsessDefaultInitPanel';
import ProsessPanelInitProps from '../../felles/typer/prosessPanelInitProps';
import { BehandlingApiKeys, restBehandlingApiHooks } from '../../../data/behandlingContextApi';
import FatterVedtakStatusModal from '../../felles/modaler/vedtak/FatterVedtakStatusModal';

import '@navikt/ft-prosess-tilbakekreving-vedtak/dist/style.css';

const AKSJONSPUNKT_KODER = [VedtakAksjonspunktCode.FORESLA_VEDTAK];

const ENDEPUNKTER_PANEL_DATA = [BehandlingApiKeys.VEDTAKSBREV, BehandlingApiKeys.BEREGNINGSRESULTAT];
type EndepunktPanelData = {
  vedtaksbrev: Vedtaksbrev;
  beregningsresultat: BeregningsresultatTilbakekreving;
};

const tilbakekrevingÅrsakTyperKlage = [BehandlingArsakType.RE_KLAGE_KA, BehandlingArsakType.RE_KLAGE_NFP];

const erTilbakekrevingÅrsakKlage = (årsak: string): boolean =>
  !!årsak && tilbakekrevingÅrsakTyperKlage.some(å => å === årsak);

const getVedtakStatus = (beregningsresultat?: Behandlingsresultat): string => {
  if (!beregningsresultat) {
    return VilkarUtfallType.IKKE_VURDERT;
  }
  const { type } = beregningsresultat;

  if (type === VedtakResultatType.INGEN_TILBAKEBETALING) {
    return VilkarUtfallType.IKKE_OPPFYLT;
  }

  return type === VedtakResultatType.DELVIS_TILBAKEBETALING || type === VedtakResultatType.FULL_TILBAKEBETALING
    ? VilkarUtfallType.OPPFYLT
    : VilkarUtfallType.IKKE_VURDERT;
};

const getLagringSideeffekter =
  (toggleFatterVedtakModal: (skalFatterModal: boolean) => void) =>
  () =>
  // Returner funksjon som blir kjørt etter lagring av aksjonspunkt(er)
  () => {
    toggleFatterVedtakModal(true);
  };
interface OwnProps {
  tilbakekrevingKodeverk: AlleKodeverkTilbakekreving;
  opneSokeside: () => void;
  harApenRevurdering: boolean;
}

const VedtakTilbakekrevingProsessInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  tilbakekrevingKodeverk,
  opneSokeside,
  harApenRevurdering,
  ...props
}) => {
  const intl = useIntl();

  const [visApenRevurderingModal, setVisApenRevurderingModal] = useState(harApenRevurdering);
  const lukkApenRevurderingModal = useCallback(() => setVisApenRevurderingModal(false), []);
  const [visFatterVedtakModal, setVisFatterVedtakModal] = useState(false);

  const lagringSideEffekter = getLagringSideeffekter(setVisFatterVedtakModal);

  const { startRequest: forhandsvisVedtaksbrev } = restBehandlingApiHooks.useRestApiRunner(
    BehandlingApiKeys.PREVIEW_VEDTAKSBREV,
  );
  const fetchPreviewVedtaksbrev = useCallback(
    (param: ForhandsvisData) => forhandsvisVedtaksbrev(param).then(forhandsvisDokument),
    [],
  );

  const { behandling } = props;
  const erRevurderingTilbakekrevingKlage =
    behandling.førsteÅrsak && erTilbakekrevingÅrsakKlage(behandling.førsteÅrsak.behandlingArsakType);
  const erRevurderingTilbakekrevingFeilBeløpBortfalt =
    behandling.førsteÅrsak &&
    BehandlingArsakType.RE_FEILUTBETALT_BELØP_REDUSERT === behandling.førsteÅrsak.behandlingArsakType;

  return (
    <>
      <FatterVedtakStatusModal
        visModal={visFatterVedtakModal}
        lukkModal={() => {
          setVisFatterVedtakModal(false);
          opneSokeside();
        }}
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
      <ProsessDefaultInitPanel<EndepunktPanelData>
        {...props}
        panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
        aksjonspunktKoder={AKSJONSPUNKT_KODER}
        prosessPanelKode={ProsessStegCode.VEDTAK}
        prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.Vedtak' })}
        skalPanelVisesIMeny={() => true}
        lagringSideEffekter={lagringSideEffekter}
        hentOverstyrtStatus={data => getVedtakStatus(data.behandling.behandlingsresultat)}
        renderPanel={data => (
          <VedtakTilbakekrevingProsessIndex
            kodeverkSamlingFpTilbake={tilbakekrevingKodeverk}
            fetchPreviewVedtaksbrev={fetchPreviewVedtaksbrev}
            erRevurderingTilbakekrevingKlage={erRevurderingTilbakekrevingKlage || false}
            erRevurderingTilbakekrevingFeilBeløpBortfalt={erRevurderingTilbakekrevingFeilBeløpBortfalt || false}
            {...data}
          />
        )}
      />
    </>
  );
};

export default VedtakTilbakekrevingProsessInitPanel;

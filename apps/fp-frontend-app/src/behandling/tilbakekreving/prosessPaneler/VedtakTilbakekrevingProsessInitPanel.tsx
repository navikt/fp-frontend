import React, { FunctionComponent, useCallback, useState } from 'react';
import { useIntl } from 'react-intl';
import { BehandlingArsakType, VilkarUtfallType } from '@navikt/ft-kodeverk';
import { BeregningsresultatTilbakekreving, Vedtaksbrev } from '@navikt/ft-types';
import { ProsessStegCode } from '@navikt/fp-konstanter';

import { vedtakResultatType as VedtakResultatType } from '@navikt/fp-kodeverk';
import { AlleKodeverkTilbakekreving, Behandlingsresultat } from '@navikt/fp-types';
import { WarningModal } from '@navikt/ft-ui-komponenter';
import {
  VedtakTilbakekrevingProsessIndex,
  VedtakAksjonspunktCode,
  ForhandsvisData,
} from '@navikt/ft-prosess-tilbakekreving-vedtak';
import { forhandsvisDokument } from '@navikt/ft-utils';
import ProsessDefaultInitPanel from '../../felles/prosess/ProsessDefaultInitPanel';
import ProsessPanelInitProps from '../../felles/typer/prosessPanelInitProps';
import { BehandlingApiKeys, restBehandlingApiHooks } from '../../../data/behandlingContextApi';
import FatterVedtakStatusModal from '../../felles/modaler/vedtak/FatterVedtakStatusModal';

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

  const [visApenRevurderingModal, toggleApenRevurderingModal] = useState(harApenRevurdering);
  const lukkApenRevurderingModal = useCallback(() => toggleApenRevurderingModal(false), []);

  const [visFatterVedtakModal, toggleFatterVedtakModal] = useState(false);

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
          toggleFatterVedtakModal(false);
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

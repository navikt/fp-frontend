import { useState } from 'react';
import { useIntl } from 'react-intl';

import {
  ForhandsvisData,
  VedtakAksjonspunktCode,
  VedtakTilbakekrevingProsessIndex,
} from '@navikt/ft-prosess-tilbakekreving-vedtak';
import { LoadingPanel, WarningModal } from '@navikt/ft-ui-komponenter';
import { forhandsvisDokument } from '@navikt/ft-utils';
import { useMutation, useQuery } from '@tanstack/react-query';

import { BehandlingArsakType, VedtakResultatType, VilkarUtfallType } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { AlleKodeverkTilbakekreving, Behandlingsresultat } from '@navikt/fp-types';

import { forhåndsvisVedtaksbrev, useBehandlingApi } from '../../../data/behandlingApi';
import { FatterVedtakStatusModal } from '../../felles/modaler/vedtak/FatterVedtakStatusModal';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';
import { ProsessPanelInitProps } from '../../felles/typer/prosessPanelInitProps';

import '@navikt/ft-prosess-tilbakekreving-vedtak/dist/style.css';

const AKSJONSPUNKT_KODER = [VedtakAksjonspunktCode.FORESLA_VEDTAK];

const tilbakekrevingÅrsakTyperKlage = [BehandlingArsakType.RE_KLAGE_KA, BehandlingArsakType.RE_KLAGE_NFP];

interface Props {
  tilbakekrevingKodeverk: AlleKodeverkTilbakekreving;
  opneSokeside: () => void;
  harApenRevurdering: boolean;
}

export const VedtakTilbakekrevingProsessInitPanel = ({
  tilbakekrevingKodeverk,
  opneSokeside,
  harApenRevurdering,
  ...props
}: Props & ProsessPanelInitProps) => {
  const intl = useIntl();

  const [visApenRevurderingModal, setVisApenRevurderingModal] = useState(harApenRevurdering);
  const [visFatterVedtakModal, setVisFatterVedtakModal] = useState(false);

  const lagringSideEffekter = getLagringSideeffekter(setVisFatterVedtakModal);
  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, [], lagringSideEffekter);

  const { behandling } = props;
  const erRevurderingTilbakekrevingKlage =
    behandling.førsteÅrsak && erTilbakekrevingÅrsakKlage(behandling.førsteÅrsak.behandlingArsakType);
  const erRevurderingTilbakekrevingFeilBeløpBortfalt =
    behandling.førsteÅrsak &&
    BehandlingArsakType.RE_FEILUTBETALT_BELØP_REDUSERT === behandling.førsteÅrsak.behandlingArsakType;

  const api = useBehandlingApi(behandling);

  const { data: beregningsresultat } = useQuery(api.tilbakekreving.beregningsresultatOptions(behandling));
  const { data: vedtaksbrev } = useQuery(api.tilbakekreving.vedtaksbrevOptions(behandling));

  const { mutateAsync: forhandsvisVedtaksbrev } = useMutation({
    mutationFn: (values: ForhandsvisData) => forhåndsvisVedtaksbrev(values),
    onSuccess: forhandsvisDokument,
  });

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
          submit={() => setVisApenRevurderingModal(false)}
        />
      )}
      <ProsessDefaultInitPanel
        {...props}
        standardPanelProps={standardPanelProps}
        prosessPanelKode={ProsessStegCode.VEDTAK}
        prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.Vedtak' })}
        skalPanelVisesIMeny
        hentOverstyrtStatus={getVedtakStatus(props.behandling.behandlingsresultat)}
      >
        {beregningsresultat && vedtaksbrev ? (
          <VedtakTilbakekrevingProsessIndex
            beregningsresultat={beregningsresultat}
            vedtaksbrev={vedtaksbrev}
            kodeverkSamlingFpTilbake={tilbakekrevingKodeverk}
            fetchPreviewVedtaksbrev={forhandsvisVedtaksbrev}
            erRevurderingTilbakekrevingKlage={erRevurderingTilbakekrevingKlage || false}
            erRevurderingTilbakekrevingFeilBeløpBortfalt={erRevurderingTilbakekrevingFeilBeløpBortfalt || false}
            {...standardPanelProps}
          />
        ) : (
          <LoadingPanel />
        )}
      </ProsessDefaultInitPanel>
    </>
  );
};

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

import { type ComponentProps, useState } from 'react';
import { useIntl } from 'react-intl';
import { useNavigate } from 'react-router-dom';

import {
  type ForhandsvisData,
  VedtakAksjonspunktCode,
  VedtakTilbakekrevingProsessIndex,
} from '@navikt/ft-prosess-tilbakekreving-vedtak';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { forhandsvisDokument } from '@navikt/ft-utils';
import { useMutation, useQuery } from '@tanstack/react-query';

import { ProsessStegCode } from '@navikt/fp-konstanter';
import type {
  AlleKodeverkTilbakekreving,
  BehandlingÅrsakTypeFpTilbake,
  BehandlingFpTilbake,
  BehandlingsresultatDtoFpTilbake,
  VilkarUtfallType,
} from '@navikt/fp-types';
import { useMellomlagretFormData } from '@navikt/fp-utils';

import { forhåndsvisVedtaksbrev, useBehandlingApi } from '../../../data/behandlingApi';
import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { FatterVedtakStatusModal } from '../../felles/modaler/vedtak/FatterVedtakStatusModal';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';
import { ÅpenRevurderingModal } from '../modaler/ÅpenRevurderingModal';

import '@navikt/ft-prosess-tilbakekreving-vedtak/dist/style.css';

const AKSJONSPUNKT_KODER = [VedtakAksjonspunktCode.FORESLA_VEDTAK];

const tilbakekrevingÅrsakTyperKlage: BehandlingÅrsakTypeFpTilbake[] = ['RE_KLAGE_KA', 'RE_KLAGE_NFP'];
interface Props {
  tilbakekrevingKodeverk: AlleKodeverkTilbakekreving;
}

export const VedtakTilbakekrevingProsessInitPanel = ({ tilbakekrevingKodeverk }: Props) => {
  const intl = useIntl();

  const { behandling, alleBehandlinger } = useBehandlingDataContext<BehandlingFpTilbake>();

  const fagsakBehandlingerInfo = alleBehandlinger.filter(b => !b.behandlingHenlagt);

  const harÅpenRevurdering = fagsakBehandlingerInfo.some(b => b.type === 'BT-004' && b.status !== 'AVSLU');

  const [visFatterVedtakModal, setVisFatterVedtakModal] = useState(false);

  const lagringSideEffekter = getLagringSideeffekter(setVisFatterVedtakModal);
  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, [], lagringSideEffekter);

  const erRevurderingTilbakekrevingKlage =
    behandling.førsteÅrsak && erTilbakekrevingÅrsakKlage(behandling.førsteÅrsak.behandlingArsakType);
  const erRevurderingTilbakekrevingFeilBeløpBortfalt =
    behandling.førsteÅrsak?.behandlingArsakType === 'RE_FEILUTBETALT_BELØP_REDUSERT';

  const api = useBehandlingApi(behandling);

  const { data: beregningsresultat } = useQuery(api.tilbakekreving.beregningsresultatOptions(behandling));
  const { data: vedtaksbrev } = useQuery(api.tilbakekreving.vedtaksbrevOptions(behandling));

  const { mutateAsync: forhandsvisVedtaksbrev } = useMutation({
    mutationFn: (values: ForhandsvisData) => forhåndsvisVedtaksbrev(values),
    onSuccess: forhandsvisDokument,
  });

  const navigate = useNavigate();

  return (
    <>
      <FatterVedtakStatusModal
        visModal={visFatterVedtakModal}
        lukkModal={() => {
          setVisFatterVedtakModal(false);
          void navigate('/');
        }}
        tekst={intl.formatMessage({ id: 'FatterTilbakekrevingVedtakStatusModal.Sendt' })}
      />

      <ÅpenRevurderingModal harÅpenRevurdering={harÅpenRevurdering} />

      <ProsessDefaultInitPanel
        standardPanelProps={standardPanelProps}
        prosessPanelKode={ProsessStegCode.VEDTAK}
        prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.Vedtak' })}
        skalPanelVisesIMeny
        overstyrtStatus={getVedtakStatus(behandling.behandlingsresultat)}
      >
        {beregningsresultat && vedtaksbrev ? (
          <Wrapper
            beregningsresultat={beregningsresultat}
            vedtaksbrev={vedtaksbrev}
            kodeverkSamlingFpTilbake={tilbakekrevingKodeverk}
            fetchPreviewVedtaksbrev={forhandsvisVedtaksbrev}
            erRevurderingTilbakekrevingKlage={erRevurderingTilbakekrevingKlage ?? false}
            erRevurderingTilbakekrevingFeilBeløpBortfalt={erRevurderingTilbakekrevingFeilBeløpBortfalt}
            {...standardPanelProps}
            behandlingUuid={behandling.uuid}
          />
        ) : (
          <LoadingPanel />
        )}
      </ProsessDefaultInitPanel>
    </>
  );
};

const Wrapper = (props: Omit<ComponentProps<typeof VedtakTilbakekrevingProsessIndex>, 'formData' | 'setFormData'>) => {
  const { mellomlagretFormData, setMellomlagretFormData } =
    useMellomlagretFormData<React.ComponentProps<typeof VedtakTilbakekrevingProsessIndex>['formData']>();
  return (
    <VedtakTilbakekrevingProsessIndex
      {...props}
      formData={mellomlagretFormData}
      setFormData={setMellomlagretFormData}
    />
  );
};

const erTilbakekrevingÅrsakKlage = (årsak: BehandlingÅrsakTypeFpTilbake): boolean =>
  tilbakekrevingÅrsakTyperKlage.some(å => å === årsak);

const getVedtakStatus = (beregningsresultat?: BehandlingsresultatDtoFpTilbake): VilkarUtfallType => {
  if (!beregningsresultat) {
    return 'IKKE_VURDERT';
  }
  const { type } = beregningsresultat;

  if (type === 'INGEN_TILBAKEBETALING') {
    return 'IKKE_OPPFYLT';
  }

  return type === 'DELVIS_TILBAKEBETALING' || type === 'FULL_TILBAKEBETALING' ? 'OPPFYLT' : 'IKKE_VURDERT';
};

const getLagringSideeffekter =
  (toggleFatterVedtakModal: (skalFatterModal: boolean) => void) =>
  () =>
  // Returner funksjon som blir kjørt etter lagring av aksjonspunkt(er)
  () => {
    toggleFatterVedtakModal(true);
  };

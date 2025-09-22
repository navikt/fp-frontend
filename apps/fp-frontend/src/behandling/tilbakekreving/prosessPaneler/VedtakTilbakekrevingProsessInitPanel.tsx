import { type ComponentProps, use, useState } from 'react';
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

import {
  type BehandlingArsakType,
  BehandlingArsakTypeEnum,
  BehandlingResultatTypeTilbakekreving,
  BehandlingStatusEnum,
  BehandlingTypeEnum,
  VilkarUtfallType,
} from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import type { AlleKodeverkTilbakekreving, Behandlingsresultat } from '@navikt/fp-types';
import { useMellomlagretFormData } from '@navikt/fp-utils';

import { forhåndsvisVedtaksbrev, useBehandlingApi } from '../../../data/behandlingApi';
import { BehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { FatterVedtakStatusModal } from '../../felles/modaler/vedtak/FatterVedtakStatusModal';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';
import { ÅpenRevurderingModal } from '../modaler/ÅpenRevurderingModal';

import '@navikt/ft-prosess-tilbakekreving-vedtak/dist/style.css';

const AKSJONSPUNKT_KODER = [VedtakAksjonspunktCode.FORESLA_VEDTAK];

const tilbakekrevingÅrsakTyperKlage = [BehandlingArsakTypeEnum.RE_KLAGE_KA, BehandlingArsakTypeEnum.RE_KLAGE_NFP];

interface Props {
  tilbakekrevingKodeverk: AlleKodeverkTilbakekreving;
}

export const VedtakTilbakekrevingProsessInitPanel = ({ tilbakekrevingKodeverk }: Props) => {
  const intl = useIntl();

  const { behandling, alleBehandlinger } = use(BehandlingDataContext);

  const fagsakBehandlingerInfo = alleBehandlinger.filter(b => !b.behandlingHenlagt);

  const harÅpenRevurdering = fagsakBehandlingerInfo.some(
    b => b.type === BehandlingTypeEnum.REVURDERING && b.status !== BehandlingStatusEnum.AVSLUTTET,
  );

  const [visFatterVedtakModal, setVisFatterVedtakModal] = useState(false);

  const lagringSideEffekter = getLagringSideeffekter(setVisFatterVedtakModal);
  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, [], lagringSideEffekter);

  const erRevurderingTilbakekrevingKlage =
    behandling.førsteÅrsak && erTilbakekrevingÅrsakKlage(behandling.førsteÅrsak.behandlingArsakType);
  const erRevurderingTilbakekrevingFeilBeløpBortfalt =
    behandling.førsteÅrsak &&
    BehandlingArsakTypeEnum.RE_FEILUTBETALT_BELØP_REDUSERT === behandling.førsteÅrsak.behandlingArsakType;

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
          navigate('/');
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
            // @ts-expect-error Johannes ser på denne - mismatch mellom type i ft-repo og generert type
            beregningsresultat={beregningsresultat}
            vedtaksbrev={vedtaksbrev}
            kodeverkSamlingFpTilbake={tilbakekrevingKodeverk}
            // @ts-expect-error Johannes ser på denne - oppdater function i ft-repo
            fetchPreviewVedtaksbrev={forhandsvisVedtaksbrev}
            behandlingUuid={behandling.uuid}
            erRevurderingTilbakekrevingKlage={erRevurderingTilbakekrevingKlage ?? false}
            erRevurderingTilbakekrevingFeilBeløpBortfalt={erRevurderingTilbakekrevingFeilBeløpBortfalt ?? false}
            {...standardPanelProps}
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

const erTilbakekrevingÅrsakKlage = (årsak: BehandlingArsakType): boolean =>
  !!årsak && tilbakekrevingÅrsakTyperKlage.some(å => å === årsak);

const getVedtakStatus = (beregningsresultat?: Behandlingsresultat): string => {
  if (!beregningsresultat) {
    return VilkarUtfallType.IKKE_VURDERT;
  }
  const { type } = beregningsresultat;

  if (type === BehandlingResultatTypeTilbakekreving.INGEN_TILBAKEBETALING) {
    return VilkarUtfallType.IKKE_OPPFYLT;
  }

  return type === BehandlingResultatTypeTilbakekreving.DELVIS_TILBAKEBETALING ||
    type === BehandlingResultatTypeTilbakekreving.FULL_TILBAKEBETALING
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

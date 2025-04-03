import { use, useCallback, useState } from 'react';
import { useIntl } from 'react-intl';
import { useNavigate } from 'react-router';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { forhandsvisDokument } from '@navikt/ft-utils';
import { useMutation, useQuery } from '@tanstack/react-query';

import { AksjonspunktKode, AksjonspunktStatus, isAvslag, VilkarUtfallType } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { VedtakProsessIndex } from '@navikt/fp-prosess-vedtak';
import type { Aksjonspunkt, Behandlingsresultat, ForhåndsvisMeldingParams, Vilkar } from '@navikt/fp-types';
import type { ProsessAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';

import { forhåndsvisMelding, useBehandlingApi } from '../../../data/behandlingApi';
import { FatterVedtakStatusModal } from '../../felles/modaler/vedtak/FatterVedtakStatusModal';
import { IverksetterVedtakStatusModal } from '../../felles/modaler/vedtak/IverksetterVedtakStatusModal';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';
import { BehandlingDataContext } from '../../felles/utils/behandlingDataContext';

const IVERKSETTER_VEDTAK_AKSJONSPUNKT_KODER = [
  AksjonspunktKode.FATTER_VEDTAK,
  AksjonspunktKode.FORESLA_VEDTAK_MANUELT,
  AksjonspunktKode.VURDERE_ANNEN_YTELSE,
  AksjonspunktKode.VURDERE_DOKUMENT,
  AksjonspunktKode.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST,
  AksjonspunktKode.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING,
];

const AKSJONSPUNKT_KODER = [...IVERKSETTER_VEDTAK_AKSJONSPUNKT_KODER, AksjonspunktKode.FORESLA_VEDTAK];

export const VedtakEsProsessStegInitPanel = () => {
  const intl = useIntl();

  const { behandling, setSkalOppdatereEtterBekreftelseAvAp, fagsak } = use(BehandlingDataContext);

  const [visIverksetterVedtakModal, toggleIverksetterVedtakModal] = useState(false);
  const [visFatterVedtakModal, toggleFatterVedtakModal] = useState(false);
  const lagringSideEffekter = getLagringSideeffekter(
    toggleIverksetterVedtakModal,
    toggleFatterVedtakModal,
    setSkalOppdatereEtterBekreftelseAvAp,
  );

  const navigate = useNavigate();

  const lukkIverksetterModal = useCallback(() => {
    toggleIverksetterVedtakModal(false);
    navigate('/');
  }, []);
  const lukkFatterModal = useCallback(() => {
    toggleFatterVedtakModal(false);
    navigate('/');
  }, []);

  const { vilkår } = behandling;

  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, [], lagringSideEffekter);

  const api = useBehandlingApi(behandling);

  const { data: beregningDagytelseOriginalBehandling, isFetching: isBogFetching } = useQuery(
    api.beregningDagytelseOriginalBehandlingOptions(behandling),
  );
  const { data: beregningsresultatEngangsstønad, isFetching: isBeFetching } = useQuery(
    api.es.beregningsresultatEngangsstønadOptions(behandling),
  );
  const { data: simuleringResultat, isFetching: isSrFetching } = useQuery(api.simuleringResultatOptions(behandling));
  const { data: tilbakekrevingValg, isFetching: isTvFetching } = useQuery(api.tilbakekrevingValgOptions(behandling));
  const { data: oppgaver, isFetching: isOFetching } = useQuery(api.oppgaverOptions(behandling));

  const { mutateAsync: hentBrevOverstyring } = useMutation({
    mutationFn: () => api.hentBrevOverstyring(),
  });

  const { mutateAsync: mellomlagreBrevOverstyring } = useMutation({
    mutationFn: (redigertInnhold: string | null) =>
      api.mellomlagreBrevOverstyring({ behandlingUuid: behandling.uuid, redigertInnhold }),
  });

  const { mutate: forhåndsvis } = useMutation({
    mutationFn: (values: ForhåndsvisMeldingParams) =>
      forhåndsvisMelding({
        ...values,
        behandlingUuid: behandling.uuid,
        fagsakYtelseType: fagsak.fagsakYtelseType,
      }),
    onSuccess: forhandsvisDokument,
  });

  const { aksjonspunkter } = standardPanelProps;

  const isNotFetching = !isBogFetching && !isBeFetching && !isSrFetching && !isTvFetching && !isOFetching;

  return (
    <ProsessDefaultInitPanel
      standardPanelProps={standardPanelProps}
      prosessPanelKode={ProsessStegCode.VEDTAK}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.Vedtak' })}
      skalPanelVisesIMeny
      overstyrtStatus={findStatusForVedtak(
        vilkår || [],
        behandling.aksjonspunkt || [],
        aksjonspunkter,
        behandling.behandlingsresultat,
      )}
      skalMarkeresSomAktiv={
        !behandling.behandlingHenlagt &&
        findStatusForVedtak(
          vilkår || [],
          behandling.aksjonspunkt || [],
          aksjonspunkter,
          behandling.behandlingsresultat,
        ) !== VilkarUtfallType.IKKE_VURDERT
      }
    >
      <>
        <IverksetterVedtakStatusModal
          visModal={visIverksetterVedtakModal}
          lukkModal={lukkIverksetterModal}
          behandlingsresultat={standardPanelProps.behandling.behandlingsresultat}
        />
        <FatterVedtakStatusModal
          visModal={visFatterVedtakModal}
          lukkModal={lukkFatterModal}
          tekst={intl.formatMessage({ id: 'FatterVedtakStatusModal.SendtBeslutter' })}
        />
        {isNotFetching ? (
          <VedtakProsessIndex
            previewCallback={forhåndsvis}
            beregningsresultatOriginalBehandling={beregningDagytelseOriginalBehandling}
            beregningresultatEngangsstonad={beregningsresultatEngangsstønad}
            simuleringResultat={simuleringResultat}
            tilbakekrevingvalg={tilbakekrevingValg}
            vilkar={vilkår}
            oppgaver={oppgaver}
            hentBrevOverstyring={hentBrevOverstyring}
            mellomlagreBrevOverstyring={mellomlagreBrevOverstyring}
          />
        ) : (
          <LoadingPanel />
        )}
      </>
    </ProsessDefaultInitPanel>
  );
};

const hasOnlyClosedAps = (aksjonspunkter: Aksjonspunkt[], vedtakAksjonspunkter: Aksjonspunkt[]): boolean =>
  aksjonspunkter
    .filter(ap => !vedtakAksjonspunkter.some(vap => vap.definisjon === ap.definisjon))
    .every(ap => ap.status !== AksjonspunktStatus.OPPRETTET);

const hasAksjonspunkt = (ap: Aksjonspunkt): boolean =>
  ap.definisjon === AksjonspunktKode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG ||
  ap.definisjon === AksjonspunktKode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG ||
  ap.definisjon === AksjonspunktKode.VURDER_SOKNADSFRIST_FORELDREPENGER;

const isAksjonspunktOpenAndOfType = (ap: Aksjonspunkt): boolean =>
  hasAksjonspunkt(ap) && ap.status === AksjonspunktStatus.OPPRETTET;

const findStatusForVedtak = (
  vilkar: Vilkar[],
  aksjonspunkter: Aksjonspunkt[],
  vedtakAksjonspunkter: Aksjonspunkt[],
  behandlingsresultat?: Behandlingsresultat,
): string => {
  if (vilkar.length === 0) {
    return VilkarUtfallType.IKKE_VURDERT;
  }

  if (
    hasOnlyClosedAps(aksjonspunkter, vedtakAksjonspunkter) &&
    vilkar.some(v => v.vilkarStatus === VilkarUtfallType.IKKE_OPPFYLT)
  ) {
    return VilkarUtfallType.IKKE_OPPFYLT;
  }

  if (
    vilkar.some(v => v.vilkarStatus === VilkarUtfallType.IKKE_VURDERT) ||
    aksjonspunkter.some(isAksjonspunktOpenAndOfType)
  ) {
    return VilkarUtfallType.IKKE_VURDERT;
  }

  if (!hasOnlyClosedAps(aksjonspunkter, vedtakAksjonspunkter)) {
    return VilkarUtfallType.IKKE_VURDERT;
  }

  if (behandlingsresultat && isAvslag(behandlingsresultat.type)) {
    return VilkarUtfallType.IKKE_OPPFYLT;
  }
  return VilkarUtfallType.OPPFYLT;
};

const getLagringSideeffekter =
  (
    toggleIverksetterVedtakModal: (visIverksetterModal: boolean) => void,
    toggleFatterVedtakModal: (skalFatterModal: boolean) => void,
    setSkalOppdatereEtterBekreftelseAvAp: (skalHenteFagsak: boolean) => void,
  ) =>
  (aksjonspunkter: ProsessAksjonspunkt[]) => {
    setSkalOppdatereEtterBekreftelseAvAp(false);

    // Returner funksjon som blir kjørt etter lagring av aksjonspunkt(er)
    return () => {
      const skalTilTotrinnskontroll = aksjonspunkter.some(
        ap =>
          ap.kode === AksjonspunktKode.FORESLA_VEDTAK ||
          ('skalBrukeOverstyrendeFritekstBrev' in ap && ap.skalBrukeOverstyrendeFritekstBrev),
      );
      if (skalTilTotrinnskontroll) {
        toggleFatterVedtakModal(true);
      } else {
        toggleIverksetterVedtakModal(true);
      }
    };
  };

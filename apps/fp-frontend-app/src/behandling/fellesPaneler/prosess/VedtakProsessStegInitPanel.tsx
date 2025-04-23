import { use, useCallback, useState } from 'react';
import { useIntl } from 'react-intl';
import { useNavigate } from 'react-router';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { forhandsvisDokument } from '@navikt/ft-utils';
import { useMutation, useQuery } from '@tanstack/react-query';

import { AksjonspunktKode, AksjonspunktStatus, isAvslag, VilkarUtfallType } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { VedtakEditeringProvider, VedtakProsessIndex } from '@navikt/fp-prosess-vedtak';
import type { Aksjonspunkt, Beregningsgrunnlag, ForhåndsvisMeldingParams, OppgaveId, Vilkar } from '@navikt/fp-types';
import type { ProsessAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';

import { forhåndsvisMelding, useBehandlingApi } from '../../../data/behandlingApi';
import { FatterVedtakStatusModal } from '../../felles/modaler/vedtak/FatterVedtakStatusModal';
import { IverksetterVedtakStatusModal } from '../../felles/modaler/vedtak/IverksetterVedtakStatusModal';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';
import type { StandardProsessPanelProps } from '../../felles/typer/standardProsessPanelPropsTsType.ts';
import { BehandlingDataContext } from '../../felles/utils/behandlingDataContext';

const IVERKSETTER_VEDTAK_AKSJONSPUNKT_KODER = [
  AksjonspunktKode.FATTER_VEDTAK,
  AksjonspunktKode.FORESLA_VEDTAK_MANUELT,
  AksjonspunktKode.VURDERE_ANNEN_YTELSE,
  AksjonspunktKode.VURDERE_DOKUMENT,
  AksjonspunktKode.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST,
  AksjonspunktKode.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING,
];

const BEREGNINGSGRUNNLAG_FRITEKSTFELT_I_VEDTAK_AKSJONSPUNKT = [
  AksjonspunktKode.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE,
  AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
  AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
];

interface Props {
  aksjonspunktKoder?: AksjonspunktKode[];
  erEngangsstønad?: boolean;
}

export const VedtakProsessStegInitPanel = ({ aksjonspunktKoder = [], erEngangsstønad = false }: Props) => {
  const intl = useIntl();
  const navigate = useNavigate();

  const [visIverksetterVedtakModal, setVisIverksetterVedtakModal] = useState(false);
  const [visFatterVedtakModal, setVisFatterVedtakModal] = useState(false);

  const AKSJONSPUNKT_KODER = [
    ...IVERKSETTER_VEDTAK_AKSJONSPUNKT_KODER,
    ...aksjonspunktKoder,
    AksjonspunktKode.FORESLA_VEDTAK,
  ];

  const { setSkalOppdatereEtterBekreftelseAvAp } = use(BehandlingDataContext);

  const lagringSideEffekter = getLagringSideeffekter(
    setVisIverksetterVedtakModal,
    setVisFatterVedtakModal,
    setSkalOppdatereEtterBekreftelseAvAp,
  );

  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, [], lagringSideEffekter);
  const { behandling } = standardPanelProps;

  const statusForVedtak = finnStatusForVedtak(standardPanelProps);

  const api = useBehandlingApi(behandling);

  const { data: beregningsresultatDagytelse, isFetching: isBdFetching } = useQuery(
    api.beregningsresultatDagytelseOptions(behandling, !erEngangsstønad),
  );
  const { data: beregningsresultatEngangsstønad, isFetching: isBeFetching } = useQuery(
    api.es.beregningsresultatEngangsstønadOptions(behandling, erEngangsstønad),
  );
  const { data: tilbakekrevingValg, isFetching: isTvFetching } = useQuery(api.tilbakekrevingValgOptions(behandling));
  const { data: beregningsgrunnlag, isFetching: isBgFetching } = useQuery(
    api.beregningsgrunnlagOptions(behandling, !erEngangsstønad),
  );
  const { data: simuleringResultat, isFetching: isSrFetching } = useQuery(api.simuleringResultatOptions(behandling));
  const { data: beregningDagytelseOriginalBehandling, isFetching: isBdobFetching } = useQuery(
    api.beregningDagytelseOriginalBehandlingOptions(behandling),
  );
  const {
    data: oppgaver,
    isFetching: isOFetching,
    refetch: refetchOppgaver,
  } = useQuery(api.oppgaverOptions(behandling));

  const { mutateAsync: hentBrevOverstyring, isPending } = useMutation({
    mutationFn: () => api.hentBrevOverstyring(),
  });

  const { mutateAsync: mellomlagreBrevOverstyring } = useMutation({
    mutationFn: (redigertInnhold: string | null) =>
      api.mellomlagreBrevOverstyring({ behandlingUuid: behandling.uuid, redigertInnhold }),
  });

  const { mutate: forhandsvis } = useMutation({
    mutationFn: (values: ForhåndsvisMeldingParams) =>
      forhåndsvisMelding({
        ...values,
        behandlingUuid: behandling.uuid,
        fagsakYtelseType: standardPanelProps.fagsak.fagsakYtelseType,
      }),
    onSuccess: forhandsvisDokument,
  });

  const { mutateAsync: ferdigstillOppgave } = useMutation({
    mutationFn: (values: OppgaveId) => api.ferdigstillOppgave(values),
    onSuccess: () => refetchOppgaver(),
  });

  const lukkIverksetterModal = useCallback(() => {
    setVisIverksetterVedtakModal(false);
    navigate('/');
  }, []);

  const lukkFatterModal = useCallback(() => {
    setVisFatterVedtakModal(false);
    navigate('/');
  }, []);

  const isNotFetching =
    !isBdFetching &&
    !isBeFetching &&
    !isTvFetching &&
    !isBgFetching &&
    !isSrFetching &&
    !isBdobFetching &&
    !isOFetching;

  return (
    <VedtakEditeringProvider
      behandling={behandling}
      hentBrevOverstyring={hentBrevOverstyring}
      hentBrevOverstyringIsPending={isPending}
      mellomlagreBrevOverstyring={mellomlagreBrevOverstyring}
    >
      <ProsessDefaultInitPanel
        standardPanelProps={standardPanelProps}
        prosessPanelKode={ProsessStegCode.VEDTAK}
        prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.Vedtak' })}
        skalPanelVisesIMeny
        overstyrtStatus={statusForVedtak}
        skalMarkeresSomAktiv={!behandling.behandlingHenlagt && statusForVedtak !== VilkarUtfallType.IKKE_VURDERT}
      >
        <>
          <IverksetterVedtakStatusModal
            visModal={visIverksetterVedtakModal}
            lukkModal={lukkIverksetterModal}
            behandlingsresultat={behandling.behandlingsresultat}
          />
          <FatterVedtakStatusModal
            visModal={visFatterVedtakModal}
            lukkModal={lukkFatterModal}
            tekst={intl.formatMessage({ id: 'FatterVedtakStatusModal.SendtBeslutter' })}
          />
          {isNotFetching ? (
            <VedtakProsessIndex
              beregningsresultat={erEngangsstønad ? beregningsresultatEngangsstønad : beregningsresultatDagytelse}
              originaltBeregningsresultat={
                beregningDagytelseOriginalBehandling?.[
                  erEngangsstønad ? 'beregningsresultat-engangsstonad' : 'beregningsresultat-foreldrepenger'
                ]
              }
              tilbakekrevingvalg={tilbakekrevingValg}
              simuleringResultat={simuleringResultat}
              vilkar={standardPanelProps.vilkar}
              previewCallback={forhandsvis}
              beregningErManueltFastsatt={skalSkriveFritekstGrunnetFastsettingAvBeregning(
                erEngangsstønad,
                behandling.aksjonspunkt,
                beregningsgrunnlag,
              )}
              oppgaver={oppgaver}
              ferdigstillOppgave={ferdigstillOppgave}
            />
          ) : (
            <LoadingPanel />
          )}
        </>
      </ProsessDefaultInitPanel>
    </VedtakEditeringProvider>
  );
};

const harKunLukkedeAksjonspunkt = (aksjonspunkter: Aksjonspunkt[], vedtakAksjonspunkter: Aksjonspunkt[]): boolean => {
  return aksjonspunkter
    .filter(ap => !vedtakAksjonspunkter.some(vap => vap.definisjon === ap.definisjon))
    .every(ap => ap.status !== AksjonspunktStatus.OPPRETTET);
};

const harRelevantAksjonspunktDefinisjon = (ap: Aksjonspunkt): boolean => {
  return (
    ap.definisjon === AksjonspunktKode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG ||
    ap.definisjon === AksjonspunktKode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG ||
    ap.definisjon === AksjonspunktKode.VURDER_SOKNADSFRIST_FORELDREPENGER
  );
};

const harRelevantAksjonspunkt = (aksjonspunkter: Aksjonspunkt[]): boolean => {
  return aksjonspunkter.some(ap => harRelevantAksjonspunktDefinisjon(ap) && ap.status === AksjonspunktStatus.OPPRETTET);
};

const harVilkarMedStatus = (vilkar: Vilkar[], status: VilkarUtfallType): boolean => {
  return vilkar.some(v => v.vilkarStatus === status);
};

const finnStatusForVedtak = (standardPanelProps: StandardProsessPanelProps): string => {
  const { vilkar } = standardPanelProps;
  if (vilkar.length === 0) {
    return VilkarUtfallType.IKKE_VURDERT;
  }

  const aksjonspunkter = standardPanelProps.behandling.aksjonspunkt;
  const vedtakAksjonspunkter = standardPanelProps.aksjonspunkter;

  if (
    harKunLukkedeAksjonspunkt(aksjonspunkter, vedtakAksjonspunkter) &&
    harVilkarMedStatus(vilkar, VilkarUtfallType.IKKE_OPPFYLT)
  ) {
    return VilkarUtfallType.IKKE_OPPFYLT;
  }

  if (harVilkarMedStatus(vilkar, VilkarUtfallType.IKKE_VURDERT) || harRelevantAksjonspunkt(aksjonspunkter)) {
    return VilkarUtfallType.IKKE_VURDERT;
  }

  if (!harKunLukkedeAksjonspunkt(aksjonspunkter, vedtakAksjonspunkter)) {
    return VilkarUtfallType.IKKE_VURDERT;
  }

  const behandlingsresultat = standardPanelProps.behandling.behandlingsresultat;

  if (behandlingsresultat && isAvslag(behandlingsresultat.type)) {
    return VilkarUtfallType.IKKE_OPPFYLT;
  }

  return VilkarUtfallType.OPPFYLT;
};

const getLagringSideeffekter =
  (
    setVisIverksetterVedtakModal: (visIverksetterModal: boolean) => void,
    setVisFatterVedtakModal: (skalFatterModal: boolean) => void,
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
        setVisFatterVedtakModal(true);
      } else {
        setVisIverksetterVedtakModal(true);
      }
    };
  };

const skalSkriveFritekstGrunnetFastsettingAvBeregning = (
  erEngangsstønad: boolean,
  aksjonspunkter: Aksjonspunkt[],
  beregningsgrunnlag?: Beregningsgrunnlag,
): boolean => {
  if (erEngangsstønad || !beregningsgrunnlag || !aksjonspunkter) {
    return false;
  }
  const behandlingHarLøstBGAP = aksjonspunkter.find(
    ap =>
      BEREGNINGSGRUNNLAG_FRITEKSTFELT_I_VEDTAK_AKSJONSPUNKT.some(k => k === ap.definisjon) &&
      ap.status === AksjonspunktStatus.UTFORT,
  );
  const førstePeriode = beregningsgrunnlag.beregningsgrunnlagPeriode[0];
  const andelSomErManueltFastsatt = førstePeriode.beregningsgrunnlagPrStatusOgAndel?.find(
    andel => andel.overstyrtPrAar ?? andel.overstyrtPrAar === 0,
  );
  return !!behandlingHarLøstBGAP || !!andelSomErManueltFastsatt;
};

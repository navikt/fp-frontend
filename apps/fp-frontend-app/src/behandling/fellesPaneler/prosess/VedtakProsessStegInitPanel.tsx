import { use, useCallback, useState } from 'react';
import { useIntl } from 'react-intl';
import { useNavigate } from 'react-router';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { forhandsvisDokument } from '@navikt/ft-utils';
import { useMutation, useQuery } from '@tanstack/react-query';

import {
  AksjonspunktKode,
  AksjonspunktStatus,
  FagsakYtelseType,
  isAvslag,
  VilkarUtfallType,
} from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { VedtakEditeringProvider, VedtakProsessIndex } from '@navikt/fp-prosess-vedtak';
import type {
  Aksjonspunkt,
  Behandling,
  Behandlingsresultat,
  ForhåndsvisMeldingParams,
  OppgaveId,
  Vilkar,
} from '@navikt/fp-types';
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

interface Props {
  aksjonspunktKoder?: AksjonspunktKode[];
  fagsakYtelseType: FagsakYtelseType;
}

export const VedtakProsessStegInitPanel = ({ aksjonspunktKoder = [], fagsakYtelseType }: Props) => {
  const intl = useIntl();

  const { behandling, setSkalOppdatereEtterBekreftelseAvAp } = use(BehandlingDataContext);
  const { vilkår } = behandling;
  const api = useBehandlingApi(behandling);
  const navigate = useNavigate();

  const [visIverksetterVedtakModal, setVisIverksetterVedtakModal] = useState(false);
  const [visFatterVedtakModal, setVisFatterVedtakModal] = useState(false);

  const { data: beregningsresultatDagytelse, isFetching: isBdFetching } = useQuery(
    api.beregningsresultatDagytelseOptions(behandling, fagsakYtelseType !== FagsakYtelseType.ENGANGSSTONAD),
  );
  const { data: beregningsresultatEngangsstoenad, isFetching: isBeFetching } = useQuery(
    api.es.beregningsresultatEngangsstønadOptions(behandling, fagsakYtelseType === FagsakYtelseType.ENGANGSSTONAD),
  );
  const { data: tilbakekrevingValg, isFetching: isTvFetching } = useQuery(api.tilbakekrevingValgOptions(behandling));
  const { data: beregningsgrunnlag, isFetching: isBgFetching } = useQuery(
    api.beregningsgrunnlagOptions(behandling, fagsakYtelseType !== FagsakYtelseType.ENGANGSSTONAD),
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
        fagsakYtelseType: fagsakYtelseType.toString(),
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

  const AKSJONSPUNKT_KODER = [
    ...IVERKSETTER_VEDTAK_AKSJONSPUNKT_KODER,
    ...aksjonspunktKoder,
    AksjonspunktKode.FORESLA_VEDTAK,
  ];

  const lagringSideEffekter = getLagringSideeffekter(
    setVisIverksetterVedtakModal,
    setVisFatterVedtakModal,
    setSkalOppdatereEtterBekreftelseAvAp,
  );

  // TODO: Hva er forskjellen på standardPanelProps.behandling og bare behandling?
  // Hvis de er de samme så kan jeg også bruke vilkar derfra i stedet for å hente her
  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, [], lagringSideEffekter);

  const statusForVedtak = finnStatusForVedtak(vilkår ?? [], fagsakYtelseType, standardPanelProps, behandling);

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
        skalMarkeresSomAktiv={
          !erBehandlingHenlagt(fagsakYtelseType, standardPanelProps, behandling) &&
          statusForVedtak !== VilkarUtfallType.IKKE_VURDERT
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
              beregningresultatDagytelse={beregningsresultatDagytelse}
              beregningresultatEngangsstonad={beregningsresultatEngangsstoenad}
              tilbakekrevingvalg={tilbakekrevingValg}
              simuleringResultat={simuleringResultat}
              vilkar={vilkår}
              beregningsresultatOriginalBehandling={beregningDagytelseOriginalBehandling}
              previewCallback={forhandsvis}
              beregningsgrunnlag={beregningsgrunnlag}
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

const harBareLukkedeAksjonspunkt = (aksjonspunkter: Aksjonspunkt[], vedtakAksjonspunkter: Aksjonspunkt[]): boolean => {
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

const erBehandlingHenlagt = (
  fagsakYtelseType: FagsakYtelseType,
  standardPanelProps: StandardProsessPanelProps,
  behandling: Behandling,
): boolean => {
  switch (fagsakYtelseType) {
    case FagsakYtelseType.FORELDREPENGER:
    case FagsakYtelseType.SVANGERSKAPSPENGER:
      return standardPanelProps.behandling.behandlingHenlagt;
    case FagsakYtelseType.ENGANGSSTONAD:
      return behandling.behandlingHenlagt;
  }
};

// fp:
// overstyrtStatus={findStatusForVedtak(
//   vilkår ?? [],
//   behandling.aksjonspunkt ?? [], TODO: Denne
//   standardPanelProps.aksjonspunkter,
//   standardPanelProps.behandling.behandlingsresultat,
// )}
// skalMarkeresSomAktiv={
// !standardPanelProps.behandling.behandlingHenlagt &&
// findStatusForVedtak(
//   vilkår ?? [],
//   standardPanelProps.behandling.aksjonspunkt ?? [], TODO: Vs denne
//   standardPanelProps.aksjonspunkter,
//   standardPanelProps.behandling.behandlingsresultat,
// ) !== VilkarUtfallType.IKKE_VURDERT
// }

// TODO: Det er en forskjell i fp på hvilke aksjonspunkt som skal hentes, første bruker behandling, andre bruker standardPanelProps
const getAksjonspunkter = (
  fagsakYtelseType: FagsakYtelseType,
  standardPanelProps: StandardProsessPanelProps,
  behandling: Behandling,
): Aksjonspunkt[] => {
  switch (fagsakYtelseType) {
    case FagsakYtelseType.FORELDREPENGER:
      return standardPanelProps.behandling.aksjonspunkt;
    case FagsakYtelseType.SVANGERSKAPSPENGER:
    case FagsakYtelseType.ENGANGSSTONAD:
      return behandling.aksjonspunkt;
  }
};

const getVedtakAksjonspunkter = (
  fagsakYtelseType: FagsakYtelseType,
  standardPanelProps: StandardProsessPanelProps,
  behandling: Behandling,
): Aksjonspunkt[] => {
  switch (fagsakYtelseType) {
    case FagsakYtelseType.FORELDREPENGER:
    case FagsakYtelseType.SVANGERSKAPSPENGER:
      return standardPanelProps.aksjonspunkter;
    case FagsakYtelseType.ENGANGSSTONAD:
      return behandling.aksjonspunkt;
  }
};

const getBehandlingsresultat = (
  fagsakYtelseType: FagsakYtelseType,
  standardPanelProps: StandardProsessPanelProps,
  behandling: Behandling,
): Behandlingsresultat | undefined => {
  switch (fagsakYtelseType) {
    case FagsakYtelseType.FORELDREPENGER:
    case FagsakYtelseType.SVANGERSKAPSPENGER:
      return standardPanelProps.behandling.behandlingsresultat;
    case FagsakYtelseType.ENGANGSSTONAD:
      return behandling.behandlingsresultat;
  }
};

const harVilkarMedStatus = (vilkar: Vilkar[], status: string): boolean => {
  return vilkar.some(v => v.vilkarStatus === status);
};

const finnStatusForVedtak = (
  vilkar: Vilkar[],
  fagsakYtelseType: FagsakYtelseType,
  standardPanelProps: StandardProsessPanelProps,
  behandling: Behandling,
): string => {
  if (vilkar.length === 0) {
    return VilkarUtfallType.IKKE_VURDERT;
  }

  const aksjonspunkter = getAksjonspunkter(fagsakYtelseType, standardPanelProps, behandling);
  const vedtakAksjonspunkter = getVedtakAksjonspunkter(fagsakYtelseType, standardPanelProps, behandling);

  if (
    harBareLukkedeAksjonspunkt(aksjonspunkter, vedtakAksjonspunkter) &&
    harVilkarMedStatus(vilkar, VilkarUtfallType.IKKE_OPPFYLT)
  ) {
    return VilkarUtfallType.IKKE_OPPFYLT;
  }

  if (harVilkarMedStatus(vilkar, VilkarUtfallType.IKKE_VURDERT) || harRelevantAksjonspunkt(aksjonspunkter)) {
    return VilkarUtfallType.IKKE_VURDERT;
  }

  if (!harBareLukkedeAksjonspunkt(aksjonspunkter, vedtakAksjonspunkter)) {
    return VilkarUtfallType.IKKE_VURDERT;
  }

  const behandlingsresultat = getBehandlingsresultat(fagsakYtelseType, standardPanelProps, behandling);

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

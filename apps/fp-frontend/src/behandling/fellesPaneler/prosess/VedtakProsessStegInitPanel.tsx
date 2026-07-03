import { useState } from 'react';
import { useIntl } from 'react-intl';
import { useNavigate } from 'react-router';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { forhandsvisDokument } from '@navikt/ft-utils';
import { useMutation, useQuery } from '@tanstack/react-query';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { VedtakEditeringProvider, type VedtakForhåndsvisData, VedtakProsessIndex } from '@navikt/fp-prosess-vedtak';
import { type Aksjonspunkt, type BehandlingFpSak, type Vilkår, type VilkårUtfallType } from '@navikt/fp-types';
import type { ProsessAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';
import { erAksjonspunktÅpent, isAvslag } from '@navikt/fp-utils';

import { forhåndsvisMelding, getBehandlingApi, harLenke } from '../../../data/behandlingApi';
import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { FatterVedtakStatusModal } from '../../felles/modaler/vedtak/FatterVedtakStatusModal';
import { IverksetterVedtakStatusModal } from '../../felles/modaler/vedtak/IverksetterVedtakStatusModal';
import { medPrioritet } from '../../felles/prioritet/medPrioritet';
import { useSkalHenteData } from '../../felles/prioritet/PanelDataPrioritetContext';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { useErProsessPanelAktiv } from '../../felles/prosess/useProsessMenyRegistrerer';
import {
  type StandardProsessPanelProps,
  useStandardProsessPanelProps,
} from '../../felles/prosess/useStandardProsessPanelProps';

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.FATTER_VEDTAK,
  AksjonspunktKode.FORESLÅ_VEDTAK_MANUELT,
  AksjonspunktKode.VURDERE_ANNEN_YTELSE_FØR_VEDTAK,
  AksjonspunktKode.VURDERE_DOKUMENT_FØR_VEDTAK,
  AksjonspunktKode.VURDERE_INNTEKTSMELDING_FØR_VEDTAK,
  AksjonspunktKode.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST,
  AksjonspunktKode.UTGÅTT_5056,
  AksjonspunktKode.FORESLÅ_VEDTAK,
];

interface Props {
  erEngangsstønad?: boolean;
}

export const VedtakProsessStegInitPanel = ({ erEngangsstønad = false }: Props) => {
  const intl = useIntl();
  const navigate = useNavigate();

  const [visIverksetterVedtakModal, setVisIverksetterVedtakModal] = useState(false);
  const [visFatterVedtakModal, setVisFatterVedtakModal] = useState(false);

  const { setSkalOppdatereEtterBekreftelseAvAp } = useBehandlingDataContext();

  const lagringSideEffekter = getLagringSideeffekter(
    setVisIverksetterVedtakModal,
    setVisFatterVedtakModal,
    setSkalOppdatereEtterBekreftelseAvAp,
  );

  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, [], lagringSideEffekter);
  const { behandling } = standardPanelProps;

  const statusForVedtak = finnStatusForVedtak(standardPanelProps);
  const skalMarkeresSomAktiv = !behandling.behandlingHenlagt && statusForVedtak !== 'IKKE_VURDERT';

  const erAktiv = useErProsessPanelAktiv(ProsessStegCode.VEDTAK, true, skalMarkeresSomAktiv);
  const skalHenteData = useSkalHenteData(ProsessStegCode.VEDTAK, erAktiv, 'prosess');

  const api = getBehandlingApi(behandling);

  const { data: beregningsresultatDagytelse, isFetching: isBdFetching } = useQuery(
    medPrioritet(api.beregningsresultatDagytelseOptions(behandling, !erEngangsstønad), skalHenteData),
  );
  const { data: beregningsresultatEngangsstønad, isFetching: isBeFetching } = useQuery(
    medPrioritet(api.es.beregningsresultatEngangsstønadOptions(behandling, erEngangsstønad), skalHenteData),
  );
  const { data: tilbakekrevingValg, isFetching: isTvFetching } = useQuery(
    medPrioritet(api.tilbakekrevingValgOptions(behandling), skalHenteData),
  );
  const { data: beregningsgrunnlag, isFetching: isBgFetching } = useQuery(
    medPrioritet(api.beregningsgrunnlagOptions(behandling, !erEngangsstønad), skalHenteData),
  );
  const { data: simuleringResultat, isFetching: isSrFetching } = useQuery(
    medPrioritet(api.simuleringResultatOptions(behandling), skalHenteData),
  );
  const { data: beregningDagytelseOriginalBehandling, isFetching: isBdobFetching } = useQuery(
    medPrioritet(api.beregningDagytelseOriginalBehandlingOptions(behandling), skalHenteData),
  );
  const {
    data: oppgaver,
    isFetching: isOFetching,
    refetch: refetchOppgaver,
  } = useQuery(medPrioritet(api.oppgaverOptions(behandling), skalHenteData));

  const { mutateAsync: hentBrevHtml, isPending } = useMutation({
    mutationFn: () => api.hentBrevHtml(behandling.uuid),
  });

  const { mutateAsync: mellomlagreBrev } = useMutation({
    mutationFn: (redigertInnhold?: string) =>
      api.mellomlagring({ behandlingUuid: behandling.uuid, innhold: redigertInnhold }),
  });

  const { mutate: forhandsvis } = useMutation({
    mutationFn: (values: VedtakForhåndsvisData) =>
      forhåndsvisMelding({
        ...values,
        behandlingUuid: behandling.uuid,
      }),
    onSuccess: forhandsvisDokument,
  });

  const { mutateAsync: ferdigstillOppgave } = useMutation({
    mutationFn: (values: string) => api.ferdigstillOppgave(values),
    onSettled: () => refetchOppgaver(),
  });

  const lukkIverksetterModal = () => {
    setVisIverksetterVedtakModal(false);
    void navigate('/');
  };

  const lukkFatterModal = () => {
    setVisFatterVedtakModal(false);
    void navigate('/');
  };

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
      hentBrevHtml={harLenke(behandling, 'HENT_BREV_HTML') ? hentBrevHtml : undefined}
      hentBrevHtmlIsPending={isPending}
      mellomlagreBrev={mellomlagreBrev}
    >
      <ProsessDefaultInitPanel
        standardPanelProps={standardPanelProps}
        prosessPanelKode={ProsessStegCode.VEDTAK}
        prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.Vedtak' })}
        skalPanelVisesIMeny
        overstyrtStatus={statusForVedtak}
        skalMarkeresSomAktiv={skalMarkeresSomAktiv}
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
              beregningsgrunnlag={beregningsgrunnlag}
              previewCallback={forhandsvis}
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
    .every(ap => ap.status !== 'OPPR');
};

const harRelevantAksjonspunktDefinisjon = (ap: Aksjonspunkt): boolean => {
  return (
    ap.definisjon === AksjonspunktKode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG ||
    ap.definisjon === AksjonspunktKode.AVKLAR_LØPENDE_OMSORG ||
    ap.definisjon === AksjonspunktKode.MANUELL_VURDERING_AV_SØKNADSFRIST
  );
};

const harRelevantOgÅpentAksjonspunkt = (aksjonspunkter: Aksjonspunkt[]): boolean => {
  return aksjonspunkter.some(ap => harRelevantAksjonspunktDefinisjon(ap) && erAksjonspunktÅpent(ap));
};

const harVilkarMedStatus = (vilkår: Vilkår[], status: VilkårUtfallType): boolean => {
  return vilkår.some(v => v.vilkarStatus === status);
};

const finnStatusForVedtak = (standardPanelProps: StandardProsessPanelProps<BehandlingFpSak>): VilkårUtfallType => {
  const { vilkår, aksjonspunkt, behandlingsresultat } = standardPanelProps.behandling;
  if (vilkår.length === 0) {
    return 'IKKE_VURDERT';
  }

  const kunLukkedeAksjonspunkt = harKunLukkedeAksjonspunkt(aksjonspunkt, standardPanelProps.aksjonspunkterForPanel);

  if (kunLukkedeAksjonspunkt && harVilkarMedStatus(vilkår, 'IKKE_OPPFYLT')) {
    return 'IKKE_OPPFYLT';
  }

  if (harVilkarMedStatus(vilkår, 'IKKE_VURDERT') || harRelevantOgÅpentAksjonspunkt(aksjonspunkt)) {
    return 'IKKE_VURDERT';
  }

  if (!kunLukkedeAksjonspunkt) {
    return 'IKKE_VURDERT';
  }

  if (behandlingsresultat && isAvslag(behandlingsresultat.type)) {
    return 'IKKE_OPPFYLT';
  }

  return 'OPPFYLT';
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
          ap.kode === AksjonspunktKode.FORESLÅ_VEDTAK ||
          ('skalBrukeOverstyrendeFritekstBrev' in ap && ap.skalBrukeOverstyrendeFritekstBrev),
      );
      if (skalTilTotrinnskontroll) {
        setVisFatterVedtakModal(true);
      } else {
        setVisIverksetterVedtakModal(true);
      }
    };
  };

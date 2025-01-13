import { useState } from 'react';
import { useIntl } from 'react-intl';

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
import { VedtakProsessIndex } from '@navikt/fp-prosess-vedtak';
import { Aksjonspunkt, Behandlingsresultat, Fagsak, ForhåndsvisMeldingParams, Vilkar } from '@navikt/fp-types';

import { forhåndsvisMelding, useBehandlingApi } from '../../../data/behandlingApi';
import { FatterVedtakStatusModal } from '../../felles/modaler/vedtak/FatterVedtakStatusModal';
import { IverksetterVedtakStatusModal } from '../../felles/modaler/vedtak/IverksetterVedtakStatusModal';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';
import { ProsessPanelInitProps } from '../../felles/typer/prosessPanelInitProps';

const IVERKSETTER_VEDTAK_AKSJONSPUNKT_KODER = [
  AksjonspunktKode.FATTER_VEDTAK,
  AksjonspunktKode.VURDERE_ANNEN_YTELSE,
  AksjonspunktKode.VURDERE_DOKUMENT,
  AksjonspunktKode.VURDERE_INNTEKTSMELDING_KLAGE,
  AksjonspunktKode.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST,
  AksjonspunktKode.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING,
  AksjonspunktKode.FORESLA_VEDTAK_MANUELT,
];

const AKSJONSPUNKT_KODER = [...IVERKSETTER_VEDTAK_AKSJONSPUNKT_KODER, AksjonspunktKode.FORESLA_VEDTAK];

interface Props {
  setSkalOppdatereEtterBekreftelseAvAp: (skalHenteFagsak: boolean) => void;
  fagsak: Fagsak;
  opneSokeside: () => void;
}

export const VedtakFpProsessStegInitPanel = ({
  setSkalOppdatereEtterBekreftelseAvAp,
  fagsak,
  opneSokeside,
  ...props
}: Props & ProsessPanelInitProps) => {
  const intl = useIntl();
  const [visIverksetterVedtakModal, toggleIverksetterVedtakModal] = useState(false);
  const [visFatterVedtakModal, toggleFatterVedtakModal] = useState(false);
  const lagringSideEffekter = getLagringSideeffekter(
    toggleIverksetterVedtakModal,
    toggleFatterVedtakModal,
    setSkalOppdatereEtterBekreftelseAvAp,
  );

  const lukkIverksetterModal = () => {
    toggleIverksetterVedtakModal(false);
    opneSokeside();
  };
  const lukkFatterModal = () => {
    toggleFatterVedtakModal(false);
    opneSokeside();
  };

  const { vilkår } = props.behandling;

  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, [], lagringSideEffekter);

  const api = useBehandlingApi(props.behandling);

  const { data: tilbakekrevingValg } = useQuery(api.tilbakekrevingValgOptions(props.behandling));
  const { data: beregningsresultatDagytelse } = useQuery(api.beregningsresultatDagytelseOptions(props.behandling));
  const { data: beregningsgrunnlag } = useQuery(api.beregningsgrunnlagOptions(props.behandling));
  const { data: simuleringResultat } = useQuery(api.simuleringResultatOptions(props.behandling));
  const { data: beregningDagytelseOriginalBehandling } = useQuery(
    api.beregningDagytelseOriginalBehandlingOptions(props.behandling),
  );

  const { mutate: forhandsvis } = useMutation({
    mutationFn: (values: ForhåndsvisMeldingParams) =>
      forhåndsvisMelding({
        ...values,
        behandlingUuid: props.behandling.uuid,
        fagsakYtelseType: fagsak.fagsakYtelseType,
      }),
    onSuccess: forhandsvisDokument,
  });

  return (
    <ProsessDefaultInitPanel
      {...props}
      standardPanelProps={standardPanelProps}
      prosessPanelKode={ProsessStegCode.VEDTAK}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.Vedtak' })}
      skalPanelVisesIMeny
      hentOverstyrtStatus={findStatusForVedtak(
        vilkår || [],
        props.behandling.aksjonspunkt || [],
        standardPanelProps.aksjonspunkter,
        standardPanelProps.behandling.behandlingsresultat,
      )}
      hentSkalMarkeresSomAktiv={
        !standardPanelProps.behandling.behandlingHenlagt &&
        findStatusForVedtak(
          vilkår || [],
          standardPanelProps.behandling.aksjonspunkt || [],
          standardPanelProps.aksjonspunkter,
          standardPanelProps.behandling.behandlingsresultat,
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
        <VedtakProsessIndex
          tilbakekrevingvalg={tilbakekrevingValg}
          beregningsresultatOriginalBehandling={beregningDagytelseOriginalBehandling}
          simuleringResultat={simuleringResultat}
          beregningresultatDagytelse={beregningsresultatDagytelse}
          beregningsgrunnlag={beregningsgrunnlag}
          ytelseTypeKode={FagsakYtelseType.FORELDREPENGER}
          previewCallback={forhandsvis}
          {...standardPanelProps}
          aksjonspunkter={props.behandling.aksjonspunkt}
          vilkar={vilkår}
        />
      </>
    </ProsessDefaultInitPanel>
  );
};

const hasOnlyClosedAps = (aksjonspunkter: Aksjonspunkt[], vedtakAksjonspunkter: Aksjonspunkt[]): boolean =>
  aksjonspunkter
    .filter(ap => !vedtakAksjonspunkter.some(vap => vap.definisjon === ap.definisjon))
    .every(ap => ap.status !== AksjonspunktStatus.OPPRETTET);

const hasAksjonspunkt = (ap: Aksjonspunkt): boolean =>
  ap.definisjon === AksjonspunktKode.OVERSTYR_BEREGNING ||
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
  (aksjonspunktModels: { kode: string; skalBrukeOverstyrendeFritekstBrev: boolean }[]) => {
    setSkalOppdatereEtterBekreftelseAvAp(false);

    // Returner funksjon som blir kjørt etter lagring av aksjonspunkt(er)
    return () => {
      const skalTilTotrinnskontroll = aksjonspunktModels.some(
        ap => ap.kode === AksjonspunktKode.FORESLA_VEDTAK || ap.skalBrukeOverstyrendeFritekstBrev,
      );
      if (skalTilTotrinnskontroll) {
        toggleFatterVedtakModal(true);
      } else {
        toggleIverksetterVedtakModal(true);
      }
    };
  };

import React, { useCallback, useState } from 'react';
import { useIntl } from 'react-intl';

import { forhandsvisDokument } from '@navikt/ft-utils';

import {
  AksjonspunktKode,
  AksjonspunktStatus,
  FagsakYtelseType,
  isAvslag,
  VilkarUtfallType,
} from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { ForhandsvisData,VedtakProsessIndex } from '@navikt/fp-prosess-vedtak';
import {
  Aksjonspunkt,
  Behandling,
  Behandlingsresultat,
  BeregningsresultatEs,
  Fagsak,
  ForhåndsvisMeldingParams,
  SimuleringResultat,
  TilbakekrevingValg,
  Vilkar,
} from '@navikt/fp-types';

import { BehandlingApiKeys, restBehandlingApiHooks } from '../../../data/behandlingContextApi';
import { FatterVedtakStatusModal } from '../../felles/modaler/vedtak/FatterVedtakStatusModal';
import { IverksetterVedtakStatusModal } from '../../felles/modaler/vedtak/IverksetterVedtakStatusModal';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';
import { ProsessPanelInitProps } from '../../felles/typer/prosessPanelInitProps';

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

const getForhandsvisCallback =
  (
    forhandsvisMelding: (params: ForhåndsvisMeldingParams, keepData?: boolean) => Promise<unknown>,
    fagsak: Fagsak,
    behandling: Behandling,
  ) =>
  (data: ForhandsvisData) => {
    const brevData = {
      ...data,
      behandlingUuid: behandling.uuid,
      fagsakYtelseType: fagsak.fagsakYtelseType,
    };

    return forhandsvisMelding(brevData).then(response => forhandsvisDokument(response));
  };

const IVERKSETTER_VEDTAK_AKSJONSPUNKT_KODER = [
  AksjonspunktKode.FATTER_VEDTAK,
  AksjonspunktKode.FORESLA_VEDTAK_MANUELT,
  AksjonspunktKode.VURDERE_ANNEN_YTELSE,
  AksjonspunktKode.VURDERE_DOKUMENT,
  AksjonspunktKode.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST,
  AksjonspunktKode.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING,
];

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

const AKSJONSPUNKT_KODER = [...IVERKSETTER_VEDTAK_AKSJONSPUNKT_KODER, AksjonspunktKode.FORESLA_VEDTAK];

const ENDEPUNKTER_PANEL_DATA = [
  BehandlingApiKeys.TILBAKEKREVINGVALG,
  BehandlingApiKeys.BEREGNINGSRESULTAT_DAGYTELSE_ORIGINAL_BEHANDLING,
  BehandlingApiKeys.SIMULERING_RESULTAT,
  BehandlingApiKeys.BEREGNINGRESULTAT_ENGANGSSTONAD,
];
type EndepunktPanelData = {
  tilbakekrevingvalg?: TilbakekrevingValg;
  beregningsresultatOriginalBehandling?: {
    'beregningsresultat-engangsstonad'?: BeregningsresultatEs;
  };
  simuleringResultat: SimuleringResultat;
  beregningresultatEngangsstonad?: BeregningsresultatEs;
};

interface Props {
  setSkalOppdatereEtterBekreftelseAvAp: (skalHenteFagsak: boolean) => void;
  fagsak: Fagsak;
  opneSokeside: () => void;
}

export const VedtakEsProsessStegInitPanel = ({
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

  const standardPanelProps = useStandardProsessPanelProps();

  const { startRequest: forhandsvisMelding } = restBehandlingApiHooks.useRestApiRunner(
    BehandlingApiKeys.PREVIEW_MESSAGE,
  );
  const previewCallback = useCallback(
    getForhandsvisCallback(forhandsvisMelding, fagsak, standardPanelProps.behandling),
    [standardPanelProps.behandling.versjon],
  );

  const lukkIverksetterModal = useCallback(() => {
    toggleIverksetterVedtakModal(false);
    opneSokeside();
  }, []);
  const lukkFatterModal = useCallback(() => {
    toggleFatterVedtakModal(false);
    opneSokeside();
  }, []);

  const { vilkår } = props.behandling;

  return (
    <ProsessDefaultInitPanel<EndepunktPanelData>
      {...props}
      panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      prosessPanelKode={ProsessStegCode.VEDTAK}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.Vedtak' })}
      skalPanelVisesIMeny={() => true}
      hentOverstyrtStatus={standardData =>
        findStatusForVedtak(
          vilkår || [],
          props.behandling.aksjonspunkt || [],
          standardData.aksjonspunkter,
          standardData.behandling.behandlingsresultat,
        )
      }
      lagringSideEffekter={lagringSideEffekter}
      hentSkalMarkeresSomAktiv={standardData =>
        !standardData.behandling.behandlingHenlagt &&
        findStatusForVedtak(
          vilkår || [],
          props.behandling.aksjonspunkt || [],
          standardData.aksjonspunkter,
          standardData.behandling.behandlingsresultat,
        ) !== VilkarUtfallType.IKKE_VURDERT
      }
      renderPanel={data => (
        <>
          <IverksetterVedtakStatusModal
            visModal={visIverksetterVedtakModal}
            lukkModal={lukkIverksetterModal}
            behandlingsresultat={data.behandling.behandlingsresultat}
          />
          <FatterVedtakStatusModal
            visModal={visFatterVedtakModal}
            lukkModal={lukkFatterModal}
            tekst={intl.formatMessage({ id: 'FatterVedtakStatusModal.SendtBeslutter' })}
          />
          <VedtakProsessIndex
            ytelseTypeKode={FagsakYtelseType.ENGANGSSTONAD}
            previewCallback={previewCallback}
            {...data}
            aksjonspunkter={props.behandling.aksjonspunkt}
            vilkar={vilkår}
          />
        </>
      )}
    />
  );
};

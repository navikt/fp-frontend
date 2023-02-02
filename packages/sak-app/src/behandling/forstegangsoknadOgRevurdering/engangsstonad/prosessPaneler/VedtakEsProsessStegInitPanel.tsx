import React, {
  FunctionComponent, useCallback, useState,
} from 'react';
import { useIntl } from 'react-intl';

import {
  isAvslag, fagsakYtelseType, AksjonspunktCode, vilkarUtfallType, aksjonspunktStatus,
} from '@navikt/fp-kodeverk';
import VedtakProsessIndex, { ForhandsvisData } from '@navikt/fp-prosess-vedtak';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import {
  Aksjonspunkt, Behandling, Behandlingsresultat, BeregningsresultatEs, Fagsak, ForhåndsvisMeldingParams,
  Medlemskap, SimuleringResultat, TilbakekrevingValg, Vilkar,
} from '@navikt/fp-types';
import { forhandsvisDokument } from '@navikt/ft-utils';

import ProsessDefaultInitPanel from '../../../felles/prosess/ProsessDefaultInitPanel';
import IverksetterVedtakStatusModal from '../../../felles/modaler/vedtak/IverksetterVedtakStatusModal';
import FatterVedtakStatusModal from '../../../felles/modaler/vedtak/FatterVedtakStatusModal';
import ProsessPanelInitProps from '../../../felles/typer/prosessPanelInitProps';
import useStandardProsessPanelProps from '../../../felles/prosess/useStandardProsessPanelProps';
import { BehandlingFellesApiKeys } from '../../../felles/data/behandlingFellesApi';
import { restApiEsHooks, EsBehandlingApiKeys } from '../data/esBehandlingApi';

const hasOnlyClosedAps = (aksjonspunkter: Aksjonspunkt[], vedtakAksjonspunkter: Aksjonspunkt[]): boolean => aksjonspunkter
  .filter((ap) => !vedtakAksjonspunkter.some((vap) => vap.definisjon === ap.definisjon))
  .every((ap) => ap.status !== aksjonspunktStatus.OPPRETTET);

const hasAksjonspunkt = (ap: Aksjonspunkt): boolean => (ap.definisjon === AksjonspunktCode.OVERSTYR_BEREGNING
  || ap.definisjon === AksjonspunktCode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG
  || ap.definisjon === AksjonspunktCode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG
  || ap.definisjon === AksjonspunktCode.VURDER_SOKNADSFRIST_FORELDREPENGER);

const isAksjonspunktOpenAndOfType = (ap: Aksjonspunkt): boolean => hasAksjonspunkt(ap) && ap.status === aksjonspunktStatus.OPPRETTET;

const findStatusForVedtak = (
  vilkar: Vilkar[],
  aksjonspunkter: Aksjonspunkt[],
  vedtakAksjonspunkter: Aksjonspunkt[],
  behandlingsresultat?: Behandlingsresultat,
): string => {
  if (vilkar.length === 0) {
    return vilkarUtfallType.IKKE_VURDERT;
  }

  if (hasOnlyClosedAps(aksjonspunkter, vedtakAksjonspunkter) && vilkar.some((v) => v.vilkarStatus === vilkarUtfallType.IKKE_OPPFYLT)) {
    return vilkarUtfallType.IKKE_OPPFYLT;
  }

  if (vilkar.some((v) => v.vilkarStatus === vilkarUtfallType.IKKE_VURDERT) || aksjonspunkter.some(isAksjonspunktOpenAndOfType)) {
    return vilkarUtfallType.IKKE_VURDERT;
  }

  if (!hasOnlyClosedAps(aksjonspunkter, vedtakAksjonspunkter)) {
    return vilkarUtfallType.IKKE_VURDERT;
  }

  if (behandlingsresultat && isAvslag(behandlingsresultat.type)) {
    return vilkarUtfallType.IKKE_OPPFYLT;
  }
  return vilkarUtfallType.OPPFYLT;
};

const getForhandsvisCallback = (
  forhandsvisMelding: (params: ForhåndsvisMeldingParams, keepData?: boolean) => Promise<unknown>,
  fagsak: Fagsak,
  behandling: Behandling,
) => (data: ForhandsvisData) => {
  const brevData = {
    ...data,
    behandlingUuid: behandling.uuid,
    fagsakYtelseType: fagsak.fagsakYtelseType,
  };

  return forhandsvisMelding(brevData).then((response) => forhandsvisDokument(response));
};

const IVERKSETTER_VEDTAK_AKSJONSPUNKT_KODER = [
  AksjonspunktCode.FATTER_VEDTAK,
  AksjonspunktCode.VEDTAK_UTEN_TOTRINNSKONTROLL,
  AksjonspunktCode.VURDERE_ANNEN_YTELSE,
  AksjonspunktCode.VURDERE_DOKUMENT,
  AksjonspunktCode.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST,
  AksjonspunktCode.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING,
];
const FATTER_VEDTAK_AKSJONSPUNKT_KODER = [
  AksjonspunktCode.FORESLA_VEDTAK,
  AksjonspunktCode.FORESLA_VEDTAK_MANUELT,
];

const getLagringSideeffekter = (
  toggleIverksetterVedtakModal: (visIverksetterModal: boolean) => void,
  toggleFatterVedtakModal: (skalFatterModal: boolean) => void,
  toggleOppdatereFagsakContext: (skalHenteFagsak: boolean) => void,
) => (aksjonspunktModels: { kode: string }[]) => {
  toggleOppdatereFagsakContext(false);

  // Returner funksjon som blir kjørt etter lagring av aksjonspunkt(er)
  return () => {
    if (FATTER_VEDTAK_AKSJONSPUNKT_KODER.some((kode) => kode === aksjonspunktModels[0].kode)) {
      toggleFatterVedtakModal(true);
    } else {
      toggleIverksetterVedtakModal(true);
    }
  };
};

const AKSJONSPUNKT_KODER = [
  ...IVERKSETTER_VEDTAK_AKSJONSPUNKT_KODER,
  ...FATTER_VEDTAK_AKSJONSPUNKT_KODER,
];

const ENDEPUNKTER_PANEL_DATA = [
  BehandlingFellesApiKeys.TILBAKEKREVINGVALG,
  EsBehandlingApiKeys.BEREGNINGSRESULTAT_ORIGINAL_BEHANDLING,
  BehandlingFellesApiKeys.MEDLEMSKAP,
  BehandlingFellesApiKeys.SIMULERING_RESULTAT,
  EsBehandlingApiKeys.BEREGNINGRESULTAT_ENGANGSSTONAD,
];
type EndepunktPanelData = {
  tilbakekrevingvalg?: TilbakekrevingValg;
  beregningsresultatOriginalBehandling?: {
    'beregningsresultat-engangsstonad'?: BeregningsresultatEs;
  };
  medlemskap: Medlemskap;
  simuleringResultat: SimuleringResultat;
  beregningresultatEngangsstonad?: BeregningsresultatEs;
}

interface OwnProps {
  toggleOppdatereFagsakContext: (skalHenteFagsak: boolean) => void,
  fagsak: Fagsak;
  opneSokeside: () => void;
}

const VedtakEsProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  toggleOppdatereFagsakContext,
  fagsak,
  opneSokeside,
  ...props
}) => {
  const intl = useIntl();

  const [visIverksetterVedtakModal, toggleIverksetterVedtakModal] = useState(false);
  const [visFatterVedtakModal, toggleFatterVedtakModal] = useState(false);
  const lagringSideEffekter = getLagringSideeffekter(toggleIverksetterVedtakModal, toggleFatterVedtakModal,
    toggleOppdatereFagsakContext);

  const standardPanelProps = useStandardProsessPanelProps();

  const { startRequest: forhandsvisMelding } = restApiEsHooks.useRestApiRunner(BehandlingFellesApiKeys.PREVIEW_MESSAGE);
  const previewCallback = useCallback(getForhandsvisCallback(forhandsvisMelding, fagsak, standardPanelProps.behandling),
    [standardPanelProps.behandling.versjon]);

  const lukkIverksetterModal = useCallback(() => { toggleIverksetterVedtakModal(false); opneSokeside(); }, []);
  const lukkFatterModal = useCallback(() => { toggleFatterVedtakModal(false); opneSokeside(); }, []);

  const { vilkår } = props.behandling;

  return (
    <ProsessDefaultInitPanel<EndepunktPanelData>
      {...props}
      panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      prosessPanelKode={ProsessStegCode.VEDTAK}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.Vedtak' })}
      skalPanelVisesIMeny={() => true}
      hentOverstyrtStatus={(standardData) => findStatusForVedtak(
        vilkår || [], props.behandling.aksjonspunkt || [], standardData.aksjonspunkter, standardData.behandling.behandlingsresultat,
      )}
      lagringSideEffekter={lagringSideEffekter}
      hentSkalMarkeresSomAktiv={(standardData) => !standardData.behandling.behandlingHenlagt && findStatusForVedtak(
        vilkår || [], props.behandling.aksjonspunkt || [], standardData.aksjonspunkter, standardData.behandling.behandlingsresultat,
      ) !== vilkarUtfallType.IKKE_VURDERT}
      renderPanel={(data) => (
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
            ytelseTypeKode={fagsakYtelseType.ENGANGSSTONAD}
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

export default VedtakEsProsessStegInitPanel;

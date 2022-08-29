import React, {
  FunctionComponent, useCallback, useState,
} from 'react';
import { useIntl } from 'react-intl';
import { AksjonspunktStatus, VilkarUtfallType } from '@navikt/ft-kodeverk';
import {
  Aksjonspunkt, Behandling, Fagsak, Dokument,
} from '@navikt/ft-types';
import { forhandsvisDokument } from '@navikt/ft-utils';

import innsynResultatTypeKV from '@fpsak-frontend/kodeverk/src/innsynResultatType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import VedtakInnsynProsessIndex, { InnsynBrevData } from '@fpsak-frontend/prosess-vedtak-innsyn';
import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import { ForhåndsvisMeldingParams, Innsyn } from '@fpsak-frontend/types';

import ProsessDefaultInitPanel from '../../felles/prosess/ProsessDefaultInitPanel';
import IverksetterVedtakStatusModal from '../../felles/modaler/vedtak/IverksetterVedtakStatusModal';
import ProsessPanelInitProps from '../../felles/typer/prosessPanelInitProps';
import useStandardProsessPanelProps from '../../felles/prosess/useStandardProsessPanelProps';
import { BehandlingFellesApiKeys } from '../../felles/data/behandlingFellesApi';
import { restApiInnsynHooks, requestInnsynApi, InnsynBehandlingApiKeys } from '../data/innsynBehandlingApi';

const getVedtakStatus = (innsyn: Innsyn, aksjonspunkter: Aksjonspunkt[]): string => {
  const harApentAksjonpunkt = aksjonspunkter.some((ap) => ap.status === AksjonspunktStatus.OPPRETTET);
  if (aksjonspunkter.length === 0 || harApentAksjonpunkt) {
    return VilkarUtfallType.IKKE_VURDERT;
  }
  return innsyn.innsynResultatType === innsynResultatTypeKV.INNVILGET || innsyn.innsynResultatType === innsynResultatTypeKV.DELVISTINNVILGET
    ? VilkarUtfallType.OPPFYLT : VilkarUtfallType.IKKE_OPPFYLT;
};

const hentForhandsvisCallback = (
  forhandsvisMelding: (params?: ForhåndsvisMeldingParams, keepData?: boolean) => Promise<unknown>,
  fagsak: Fagsak,
  behandling: Behandling,
) => (data: InnsynBrevData) => {
  const brevData = {
    ...data,
    behandlingUuid: behandling.uuid,
    fagsakYtelseType: fagsak.fagsakYtelseType,
  };
  return forhandsvisMelding(brevData).then((response) => forhandsvisDokument(response));
};

const getLagringSideeffekter = (
  toggleIverksetterVedtakModal: (skalViseModal: boolean) => void,
  toggleOppdatereFagsakContext: (skalHenteFagsak: boolean) => void,
) => () => {
  toggleOppdatereFagsakContext(false);

  // Returner funksjon som blir kjørt etter lagring av aksjonspunkt(er)
  return () => {
    toggleIverksetterVedtakModal(true);
  };
};

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.FORESLA_VEDTAK];

const ENDEPUNKTER_INIT_DATA = [BehandlingFellesApiKeys.AKSJONSPUNKTER, InnsynBehandlingApiKeys.INNSYN];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  innsyn: Innsyn;
}

const getEndepunkterPanelData = (saksnummer: string) => [
  { key: InnsynBehandlingApiKeys.INNSYN_DOKUMENTER, params: { saksnummer } },
];

type EndepunktPanelData = {
  innsynDokumenter?: Dokument[];
}

interface OwnProps {
  fagsak: Fagsak;
  opneSokeside: () => void;
  toggleOppdatereFagsakContext: (skalHenteFagsak: boolean) => void,
}

const InnsynVedtakProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  fagsak,
  opneSokeside,
  toggleOppdatereFagsakContext,
  ...props
}) => {
  const intl = useIntl();
  const [visIverksetterVedtakModal, toggleIverksetterVedtakModal] = useState(false);
  const lagringSideeffekterCallback = getLagringSideeffekter(toggleIverksetterVedtakModal, toggleOppdatereFagsakContext);

  const standardPanelProps = useStandardProsessPanelProps();

  const { startRequest: forhandsvisMelding } = restApiInnsynHooks.useRestApiRunner(BehandlingFellesApiKeys.PREVIEW_MESSAGE);
  const previewCallback = useCallback(hentForhandsvisCallback(forhandsvisMelding, fagsak, standardPanelProps.behandling),
    [standardPanelProps.behandling.versjon]);

  return (
    <ProsessDefaultInitPanel<EndepunktInitData, EndepunktPanelData>
      {...props}
      requestApi={requestInnsynApi}
      initEndepunkter={ENDEPUNKTER_INIT_DATA}
      panelEndepunkter={getEndepunkterPanelData(fagsak.saksnummer)}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      prosessPanelKode={ProsessStegCode.VEDTAK}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.Vedtak' })}
      skalPanelVisesIMeny={() => true}
      hentOverstyrtStatus={(initData) => (initData.innsyn ? getVedtakStatus(initData.innsyn, initData.aksjonspunkter || []) : VilkarUtfallType.IKKE_VURDERT)}
      lagringSideEffekter={lagringSideeffekterCallback}
      hentSkalMarkeresSomAktiv={(initData) => (!!initData.innsyn
        && getVedtakStatus(initData.innsyn, initData.aksjonspunkter || []) !== VilkarUtfallType.IKKE_VURDERT)}
      renderPanel={(data, initData) => (
        <>
          <IverksetterVedtakStatusModal
            visModal={visIverksetterVedtakModal}
            lukkModal={() => { toggleIverksetterVedtakModal(false); opneSokeside(); }}
            behandlingsresultat={standardPanelProps.behandling.behandlingsresultat}
          />
          <VedtakInnsynProsessIndex
            saksnummer={fagsak.saksnummer}
            previewCallback={previewCallback}
            alleDokumenter={data?.innsynDokumenter}
            {...data}
            {...initData}
          />
        </>
      )}
    />
  );
};

export default InnsynVedtakProsessStegInitPanel;

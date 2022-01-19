import React, {
  FunctionComponent, useCallback, useState,
} from 'react';

import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import innsynResultatTypeKV from '@fpsak-frontend/kodeverk/src/innsynResultatType';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import VedtakInnsynProsessIndex, { InnsynBrevData } from '@fpsak-frontend/prosess-vedtak-innsyn';
import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import { createIntl, forhandsvisDokument } from '@fpsak-frontend/utils';
import {
  Aksjonspunkt, Behandling, Dokument, Fagsak, Innsyn,
} from '@fpsak-frontend/types';
import {
  IverksetterVedtakStatusModal, ProsessPanelInitProps, useStandardProsessPanelProps, ProsessDefaultInitPanel,
} from '@fpsak-frontend/behandling-felles';

import messages from '../../i18n/nb_NO.json';
import { restApiInnsynHooks, requestInnsynApi, InnsynBehandlingApiKeys } from '../data/innsynBehandlingApi';

const intl = createIntl(messages);

const getVedtakStatus = (innsyn: Innsyn, aksjonspunkter: Aksjonspunkt[]): string => {
  const harApentAksjonpunkt = aksjonspunkter.some((ap) => ap.status === aksjonspunktStatus.OPPRETTET);
  if (aksjonspunkter.length === 0 || harApentAksjonpunkt) {
    return vilkarUtfallType.IKKE_VURDERT;
  }
  return innsyn.innsynResultatType === innsynResultatTypeKV.INNVILGET || innsyn.innsynResultatType === innsynResultatTypeKV.DELVISTINNVILGET
    ? vilkarUtfallType.OPPFYLT : vilkarUtfallType.IKKE_OPPFYLT;
};

const hentForhandsvisCallback = (
  forhandsvisMelding: (params?: any, keepData?: boolean) => Promise<unknown>,
  fagsak: Fagsak,
  behandling: Behandling,
) => (data: InnsynBrevData) => {
  const brevData = {
    ...data,
    behandlingUuid: behandling.uuid,
    ytelseType: fagsak.fagsakYtelseType,
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

const ENDEPUNKTER_INIT_DATA = [InnsynBehandlingApiKeys.AKSJONSPUNKTER, InnsynBehandlingApiKeys.INNSYN];
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
  const [visIverksetterVedtakModal, toggleIverksetterVedtakModal] = useState(false);
  const lagringSideeffekterCallback = getLagringSideeffekter(toggleIverksetterVedtakModal, toggleOppdatereFagsakContext);

  const standardPanelProps = useStandardProsessPanelProps();

  const { startRequest: forhandsvisMelding } = restApiInnsynHooks.useRestApiRunner(InnsynBehandlingApiKeys.PREVIEW_MESSAGE);
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
      hentOverstyrtStatus={(initData) => (initData.innsyn ? getVedtakStatus(initData.innsyn, initData.aksjonspunkter || []) : vilkarUtfallType.IKKE_VURDERT)}
      lagringSideEffekter={lagringSideeffekterCallback}
      hentSkalMarkeresSomAktiv={(initData) => (!!initData.innsyn
        && getVedtakStatus(initData.innsyn, initData.aksjonspunkter || []) !== vilkarUtfallType.IKKE_VURDERT)}
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

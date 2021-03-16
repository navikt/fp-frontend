import React, {
  FunctionComponent, useCallback, useState,
} from 'react';

import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import innsynResultatTypeKV from '@fpsak-frontend/kodeverk/src/innsynResultatType';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import VedtakInnsynProsessIndex, { InnsynBrevData } from '@fpsak-frontend/prosess-vedtak-innsyn';
import { prosessStegCodes } from '@fpsak-frontend/konstanter';
import {
  Aksjonspunkt, Behandling, Dokument, Fagsak, Innsyn,
} from '@fpsak-frontend/types';
import {
  IverksetterVedtakStatusModal, ProsessDefaultInitPanel, ProsessPanelInitProps, useStandardProsessPanelProps,
} from '@fpsak-frontend/behandling-felles-ny';

import getPackageIntl from '../../i18n/getPackageIntl';
import { restApiInnsynHooks, requestInnsynApi, InnsynBehandlingApiKeys } from '../data/innsynBehandlingApi';

const getVedtakStatus = (innsyn: Innsyn, aksjonspunkter: Aksjonspunkt[]): string => {
  const harApentAksjonpunkt = aksjonspunkter.some((ap) => ap.status.kode === aksjonspunktStatus.OPPRETTET);
  if (aksjonspunkter.length === 0 || harApentAksjonpunkt) {
    return vilkarUtfallType.IKKE_VURDERT;
  }
  return innsyn.innsynResultatType.kode === innsynResultatTypeKV.INNVILGET ? vilkarUtfallType.OPPFYLT : vilkarUtfallType.IKKE_OPPFYLT;
};

const forhandsvis = (data) => {
  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(data);
  } else if (URL.createObjectURL) {
    window.open(URL.createObjectURL(data));
  }
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
  return forhandsvisMelding(brevData).then((response) => forhandsvis(response));
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

const ENDEPUNKTER_INIT_DATA = [InnsynBehandlingApiKeys.AKSJONSPUNKTER];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  innsyn: Innsyn;
}

const getEndepunkterPanelData = (saksnummer: string) => [
  { key: InnsynBehandlingApiKeys.INNSYN_DOKUMENTER, params: { saksnummer } },
  { key: InnsynBehandlingApiKeys.INNSYN }];

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
  const standardPanelProps = useStandardProsessPanelProps();

  const { startRequest: forhandsvisMelding } = restApiInnsynHooks.useRestApiRunner(InnsynBehandlingApiKeys.PREVIEW_MESSAGE);
  const previewCallback = useCallback(hentForhandsvisCallback(forhandsvisMelding, fagsak, standardPanelProps.behandling),
    [standardPanelProps.behandling.versjon]);

  const [visIverksetterVedtakModal, toggleIverksetterVedtakModal] = useState(false);
  const lagringSideeffekterCallback = getLagringSideeffekter(toggleIverksetterVedtakModal, toggleOppdatereFagsakContext);

  return (
    <ProsessDefaultInitPanel<EndepunktInitData, EndepunktPanelData>
      {...props}
      requestApi={requestInnsynApi}
      initEndepunkter={ENDEPUNKTER_INIT_DATA}
      panelEndepunkter={getEndepunkterPanelData(fagsak.saksnummer)}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      prosessPanelKode={prosessStegCodes.VEDTAK}
      prosessPanelMenyTekst={getPackageIntl().formatMessage({ id: 'Behandlingspunkt.Vedtak' })}
      skalPanelVisesIMeny={() => true}
      hentOverstyrtStatus={(data) => (data?.innsyn ? getVedtakStatus(data.innsyn, data.aksjonspunkter) : vilkarUtfallType.IKKE_VURDERT)}
      lagringSideEffekter={lagringSideeffekterCallback}
      renderPanel={(data) => (
        <>
          <IverksetterVedtakStatusModal
            visModal={visIverksetterVedtakModal}
            lukkModal={() => { toggleIverksetterVedtakModal(false); opneSokeside(); }}
            behandlingsresultat={standardPanelProps.behandling.behandlingsresultat}
          />
          <VedtakInnsynProsessIndex
            saksnummer={fagsak.saksnummer}
            alleDokumenter={data.innsynDokumenter}
            previewCallback={previewCallback}
            {...data}
          />
        </>
      )}
    />
  );
};

export default InnsynVedtakProsessStegInitPanel;

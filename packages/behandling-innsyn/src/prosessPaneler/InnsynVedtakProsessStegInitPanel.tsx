import React, {
  FunctionComponent, useCallback, useMemo, useState,
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
  IverksetterVedtakStatusModal, ProsessPanelInitProps, ProsessPanelWrapper, useProsessMenyRegistrerer, useStandardProsessPanelProps,
} from '@fpsak-frontend/behandling-felles-ny';
import { RestApiHooks } from '@fpsak-frontend/rest-api-hooks';

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

/**
 * Bruker ikke @ProsessDefaultInitPanel fordi en har behov for å sende alle aksjonspunkter til @VedtakInnsynProsessIndex
 */
const InnsynVedtakProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  fagsak,
  opneSokeside,
  toggleOppdatereFagsakContext,
  behandlingVersjon,
  valgtProsessSteg,
  registrerProsessPanel,
}) => {
  const restApiHooks = useMemo(() => RestApiHooks.initHooks(requestInnsynApi), [requestInnsynApi]);

  const formaterteEndepunkter = ENDEPUNKTER_INIT_DATA.map((e) => ({ key: e }));
  const { data: initData, state: initState } = restApiHooks.useMultipleRestApi<EndepunktInitData>(formaterteEndepunkter, {
    updateTriggers: [behandlingVersjon],
    isCachingOn: true,
  });

  const [visIverksetterVedtakModal, toggleIverksetterVedtakModal] = useState(false);
  const lagringSideeffekterCallback = getLagringSideeffekter(toggleIverksetterVedtakModal, toggleOppdatereFagsakContext);
  const standardPanelProps = useStandardProsessPanelProps(initData, AKSJONSPUNKT_KODER, undefined, lagringSideeffekterCallback);

  const { startRequest: forhandsvisMelding } = restApiInnsynHooks.useRestApiRunner(InnsynBehandlingApiKeys.PREVIEW_MESSAGE);
  const previewCallback = useCallback(hentForhandsvisCallback(forhandsvisMelding, fagsak, standardPanelProps.behandling),
    [standardPanelProps.behandling.versjon]);

  const status = initData?.innsyn ? getVedtakStatus(initData.innsyn, initData.aksjonspunkter) : vilkarUtfallType.IKKE_VURDERT;

  const erPanelValgt = useProsessMenyRegistrerer(
    registrerProsessPanel,
    initState,
    prosessStegCodes.VEDTAK,
    getPackageIntl().formatMessage({ id: 'Behandlingspunkt.Vedtak' }),
    valgtProsessSteg,
    true,
    standardPanelProps.isAksjonspunktOpen,
    status,
  );

  const formatertePanelEndepunkter = getEndepunkterPanelData(fagsak.saksnummer);
  const { data: panelData, state: panelDataState } = restApiHooks.useMultipleRestApi<EndepunktPanelData>(formatertePanelEndepunkter, {
    updateTriggers: [erPanelValgt, behandlingVersjon],
    suspendRequest: !erPanelValgt || formatertePanelEndepunkter.length === 0,
    isCachingOn: true,
  });

  return (
    <ProsessPanelWrapper
      erPanelValgt={erPanelValgt}
      erAksjonspunktOpent={standardPanelProps.isAksjonspunktOpen}
      status={status}
      dataState={panelDataState}
    >
      <IverksetterVedtakStatusModal
        visModal={visIverksetterVedtakModal}
        lukkModal={() => { toggleIverksetterVedtakModal(false); opneSokeside(); }}
        behandlingsresultat={standardPanelProps.behandling.behandlingsresultat}
      />
      <VedtakInnsynProsessIndex
        saksnummer={fagsak.saksnummer}
        previewCallback={previewCallback}
        alleDokumenter={panelData?.innsynDokumenter}
        {...standardPanelProps}
        {...initData}
      />
    </ProsessPanelWrapper>
  );
};

export default InnsynVedtakProsessStegInitPanel;

import React, { FunctionComponent, useCallback, useState } from 'react';
import { useIntl } from 'react-intl';
import { AksjonspunktStatus, VilkarUtfallType } from '@navikt/ft-kodeverk';
import { Dokument } from '@navikt/ft-types';
import { forhandsvisDokument } from '@navikt/ft-utils';

import { AksjonspunktCode, behandlingResultatType } from '@navikt/fp-kodeverk';
import { VedtakInnsynProsessIndex, InnsynBrevData } from '@navikt/fp-prosess-vedtak-innsyn';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { Fagsak, Behandling, ForhåndsvisMeldingParams, Innsyn } from '@navikt/fp-types';

import ProsessDefaultInitPanel from '../../felles/prosess/ProsessDefaultInitPanel';
import IverksetterVedtakStatusModal from '../../felles/modaler/vedtak/IverksetterVedtakStatusModal';
import ProsessPanelInitProps from '../../felles/typer/prosessPanelInitProps';
import useStandardProsessPanelProps from '../../felles/prosess/useStandardProsessPanelProps';
import { BehandlingFellesApiKeys } from '../../felles/data/behandlingFellesApi';
import { restApiInnsynHooks, requestInnsynApi, InnsynBehandlingApiKeys } from '../data/innsynBehandlingApi';

const getVedtakStatus = (behandling: Behandling): string => {
  const { aksjonspunkt, behandlingsresultat } = behandling;
  const harApentAksjonpunkt = aksjonspunkt.some(ap => ap.status === AksjonspunktStatus.OPPRETTET);
  if (aksjonspunkt.length === 0 || harApentAksjonpunkt) {
    return VilkarUtfallType.IKKE_VURDERT;
  }
  return behandlingsresultat?.type === behandlingResultatType.INNSYN_INNVILGET ||
    behandlingsresultat?.type === behandlingResultatType.INNSYN_DELVIS_INNVILGET
    ? VilkarUtfallType.OPPFYLT
    : VilkarUtfallType.IKKE_OPPFYLT;
};

const hentForhandsvisCallback =
  (
    forhandsvisMelding: (params?: ForhåndsvisMeldingParams, keepData?: boolean) => Promise<unknown>,
    fagsak: Fagsak,
    behandling: Behandling,
  ) =>
  (data: InnsynBrevData) => {
    const brevData = {
      ...data,
      behandlingUuid: behandling.uuid,
      fagsakYtelseType: fagsak.fagsakYtelseType,
    };
    return forhandsvisMelding(brevData).then(response => forhandsvisDokument(response));
  };

const getLagringSideeffekter =
  (
    toggleIverksetterVedtakModal: (skalViseModal: boolean) => void,
    toggleOppdatereFagsakContext: (skalHenteFagsak: boolean) => void,
  ) =>
  () => {
    toggleOppdatereFagsakContext(false);

    // Returner funksjon som blir kjørt etter lagring av aksjonspunkt(er)
    return () => {
      toggleIverksetterVedtakModal(true);
    };
  };

const AKSJONSPUNKT_KODER = [AksjonspunktCode.FORESLA_VEDTAK];

const getEndepunkterPanelData = (saksnummer: string) => [
  { key: InnsynBehandlingApiKeys.INNSYN },
  { key: InnsynBehandlingApiKeys.INNSYN_DOKUMENTER, params: { saksnummer } },
];

type EndepunktPanelData = {
  innsyn: Innsyn;
  innsynDokumenter?: Dokument[];
};

interface OwnProps {
  fagsak: Fagsak;
  opneSokeside: () => void;
  toggleOppdatereFagsakContext: (skalHenteFagsak: boolean) => void;
}

const InnsynVedtakProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  fagsak,
  opneSokeside,
  toggleOppdatereFagsakContext,
  ...props
}) => {
  const intl = useIntl();
  const [visIverksetterVedtakModal, toggleIverksetterVedtakModal] = useState(false);
  const lagringSideeffekterCallback = getLagringSideeffekter(
    toggleIverksetterVedtakModal,
    toggleOppdatereFagsakContext,
  );

  const standardPanelProps = useStandardProsessPanelProps();

  const { startRequest: forhandsvisMelding } = restApiInnsynHooks.useRestApiRunner(
    BehandlingFellesApiKeys.PREVIEW_MESSAGE,
  );
  const previewCallback = useCallback(
    hentForhandsvisCallback(forhandsvisMelding, fagsak, standardPanelProps.behandling),
    [standardPanelProps.behandling.versjon],
  );

  return (
    <ProsessDefaultInitPanel<EndepunktPanelData>
      {...props}
      requestApi={requestInnsynApi}
      panelEndepunkter={getEndepunkterPanelData(fagsak.saksnummer)}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      prosessPanelKode={ProsessStegCode.VEDTAK}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.Vedtak' })}
      skalPanelVisesIMeny={() => true}
      hentOverstyrtStatus={() => getVedtakStatus(props.behandling)}
      lagringSideEffekter={lagringSideeffekterCallback}
      hentSkalMarkeresSomAktiv={() => getVedtakStatus(props.behandling) !== VilkarUtfallType.IKKE_VURDERT}
      renderPanel={data => (
        <>
          <IverksetterVedtakStatusModal
            visModal={visIverksetterVedtakModal}
            lukkModal={() => {
              toggleIverksetterVedtakModal(false);
              opneSokeside();
            }}
            behandlingsresultat={standardPanelProps.behandling.behandlingsresultat}
          />
          <VedtakInnsynProsessIndex
            saksnummer={fagsak.saksnummer}
            previewCallback={previewCallback}
            alleDokumenter={data?.innsynDokumenter}
            {...data}
          />
        </>
      )}
    />
  );
};

export default InnsynVedtakProsessStegInitPanel;

import React, { FunctionComponent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { KodeverkType } from '@navikt/fp-kodeverk';
import { BehandlingAppKontekst } from '@navikt/fp-types';
import { MenyHenleggIndex } from '@navikt/fp-sak-meny-henlegg';

import useVisForhandsvisningAvMelding from '../../data/useVisForhandsvisningAvMelding';
import { FagsakApiKeys, restFagsakApiHooks } from '../../data/fagsakContextApi';
import MenyKodeverk from '../MenyKodeverk';
import { BehandlingApiKeys, restBehandlingApiHooks } from '../../data/behandlingContextApi';

interface OwnProps {
  behandling: BehandlingAppKontekst;
  fagsakYtelseType: string;
  lukkModal: () => void;
}

const HenleggMenyModal: FunctionComponent<OwnProps> = ({ behandling, fagsakYtelseType, lukkModal }) => {
  const alleFpSakKodeverk = restFagsakApiHooks.useGlobalStateRestApiData(FagsakApiKeys.KODEVERK);
  const alleFpTilbakeKodeverk = restFagsakApiHooks.useGlobalStateRestApiData(FagsakApiKeys.KODEVERK_FPTILBAKE);
  const menyKodeverk = new MenyKodeverk(behandling?.type)
    .medFpSakKodeverk(alleFpSakKodeverk)
    .medFpTilbakeKodeverk(alleFpTilbakeKodeverk);

  const navigate = useNavigate();
  const gåTilSokeside = useCallback(() => navigate('/'), [navigate]);

  const forhåndsvisHenleggBehandling = useVisForhandsvisningAvMelding(behandling?.type);

  const { startRequest: henleggBehandling } = restBehandlingApiHooks.useRestApiRunner(
    BehandlingApiKeys.HENLEGG_BEHANDLING,
  );

  const henleggBehandlingOgOppdaterBehandling = useCallback(
    (formValues: { årsakKode: string; begrunnelse: string; fritekst?: string }) =>
      henleggBehandling({
        ...formValues,
        behandlingUuid: behandling?.uuid,
        behandlingVersjon: behandling?.versjon,
      }),
    [behandling],
  );

  return (
    <MenyHenleggIndex
      valgtBehandling={behandling}
      forhandsvisHenleggBehandling={forhåndsvisHenleggBehandling}
      henleggBehandling={henleggBehandlingOgOppdaterBehandling}
      ytelseType={fagsakYtelseType}
      behandlingResultatTyper={menyKodeverk.getKodeverkForValgtBehandling(KodeverkType.BEHANDLING_RESULTAT_TYPE)}
      lukkModal={lukkModal}
      gaaTilSokeside={gåTilSokeside}
    />
  );
};

export default HenleggMenyModal;

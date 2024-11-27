import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { KodeverkType } from '@navikt/fp-kodeverk';
import { MenyHenleggIndex } from '@navikt/fp-sak-meny-henlegg';
import { BehandlingAppKontekst } from '@navikt/fp-types';

import { BehandlingApiKeys, restBehandlingApiHooks } from '../../data/behandlingContextApi';
import { FagsakApiKeys, restFagsakApiHooks } from '../../data/fagsakContextApi';
import { useVisForhandsvisningAvMelding } from '../../data/useVisForhandsvisningAvMelding';
import { MenyKodeverk } from '../MenyKodeverk';

interface Props {
  behandling: BehandlingAppKontekst;
  fagsakYtelseType: string;
  lukkModal: () => void;
}

export const HenleggMenyModal = ({ behandling, fagsakYtelseType, lukkModal }: Props) => {
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

import { useNavigate } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';

import { KodeverkType } from '@navikt/fp-kodeverk';
import { MenyHenleggIndex } from '@navikt/fp-sak-meny-henlegg';
import { BehandlingAppKontekst } from '@navikt/fp-types';

import { BehandlingApiKeys, restBehandlingApiHooks } from '../../data/behandlingContextApi';
import { useFagsakApi } from '../../data/fagsakApi';
import { notEmpty } from '../../data/notEmpty';
import { useVisForhandsvisningAvMelding } from '../../data/useVisForhandsvisningAvMelding';
import { MenyKodeverk } from '../MenyKodeverk';

interface Props {
  behandling: BehandlingAppKontekst;
  fagsakYtelseType: string;
  lukkModal: () => void;
}

export const HenleggMenyModal = ({ behandling, fagsakYtelseType, lukkModal }: Props) => {
  const api = useFagsakApi();

  const { data: alleFpSakKodeverk } = useQuery(api.kodeverkOptions());
  const { data: alleFpTilbakeKodeverk } = useQuery(api.fptilbake.kodeverkOptions());

  const menyKodeverk = new MenyKodeverk(behandling?.type)
    .medFpSakKodeverk(notEmpty(alleFpSakKodeverk))
    .medFpTilbakeKodeverk(notEmpty(alleFpTilbakeKodeverk));

  const navigate = useNavigate();
  const gåTilSokeside = () => navigate('/');

  const forhåndsvisHenleggBehandling = useVisForhandsvisningAvMelding(behandling);

  const { startRequest: henleggBehandling } = restBehandlingApiHooks.useRestApiRunner(
    BehandlingApiKeys.HENLEGG_BEHANDLING,
  );

  const henleggBehandlingOgOppdaterBehandling = (formValues: {
    årsakKode: string;
    begrunnelse: string;
    fritekst?: string;
  }) =>
    henleggBehandling({
      ...formValues,
      behandlingUuid: behandling?.uuid,
      behandlingVersjon: behandling?.versjon,
    });

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

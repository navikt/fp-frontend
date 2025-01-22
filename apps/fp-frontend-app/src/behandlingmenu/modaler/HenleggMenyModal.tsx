import { useNavigate } from 'react-router-dom';

import { useMutation, useQuery } from '@tanstack/react-query';

import { KodeverkType } from '@navikt/fp-kodeverk';
import { MenyHenleggIndex } from '@navikt/fp-sak-meny-henlegg';
import { Behandling, BehandlingAppKontekst } from '@navikt/fp-types';

import { useBehandlingApi } from '../../data/behandlingApi';
import { useFagsakApi } from '../../data/fagsakApi';
import { notEmpty } from '../../data/notEmpty';
import { useVisForhandsvisningAvMelding } from '../../data/useVisForhandsvisningAvMelding';
import { MenyKodeverk } from '../MenyKodeverk';

interface Props {
  behandling: Behandling;
  behandlingAppKontekst: BehandlingAppKontekst;
  fagsakYtelseType: string;
  lukkModal: () => void;
}

export const HenleggMenyModal = ({ behandling, behandlingAppKontekst, fagsakYtelseType, lukkModal }: Props) => {
  const fagsakApi = useFagsakApi();
  const behandlingApi = useBehandlingApi(behandling);

  const { data: alleFpSakKodeverk } = useQuery(fagsakApi.kodeverkOptions());
  const { data: alleFpTilbakeKodeverk } = useQuery(fagsakApi.fptilbake.kodeverkOptions());

  const { mutateAsync: henleggBehandling } = useMutation({
    mutationFn: (values: { årsakKode: string; begrunnelse: string; fritekst?: string }) =>
      behandlingApi.henleggBehandling({
        ...values,
        behandlingUuid: behandling.uuid,
        behandlingVersjon: behandling.versjon,
      }),
  });

  const menyKodeverk = new MenyKodeverk(behandling.type)
    .medFpSakKodeverk(notEmpty(alleFpSakKodeverk))
    .medFpTilbakeKodeverk(notEmpty(alleFpTilbakeKodeverk));

  const navigate = useNavigate();
  const gåTilSokeside = () => navigate('/');

  const forhåndsvisHenleggBehandling = useVisForhandsvisningAvMelding(behandlingAppKontekst);

  return (
    <MenyHenleggIndex
      valgtBehandling={behandling}
      forhandsvisHenleggBehandling={forhåndsvisHenleggBehandling}
      henleggBehandling={henleggBehandling}
      ytelseType={fagsakYtelseType}
      behandlingResultatTyper={menyKodeverk.getKodeverkForValgtBehandling(KodeverkType.BEHANDLING_RESULTAT_TYPE)}
      lukkModal={lukkModal}
      gaaTilSokeside={gåTilSokeside}
    />
  );
};

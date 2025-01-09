import { useMutation, useQueryClient } from '@tanstack/react-query';

import { KodeverkType } from '@navikt/fp-kodeverk';
import { FormValues as EndreUtlandFormValues, MenyEndreUtlandIndex } from '@navikt/fp-sak-meny-endre-utland';
import { Saksmarkering } from '@navikt/fp-types';

import { FagsakRel, useFagsakApi } from '../../data/fagsakApi';
import { useFpSakKodeverk } from '../../data/useKodeverk';

interface Props {
  saksnummer: string;
  fagsakMarkeringer: Saksmarkering[] | undefined;
  hentOgSettBehandling: () => void;
  lukkModal: () => void;
}

export const EndreFagsakMarkeringMenyModal = ({
  saksnummer,
  fagsakMarkeringer,
  hentOgSettBehandling,
  lukkModal,
}: Props) => {
  const queryClient = useQueryClient();
  const api = useFagsakApi();
  const fagsakMarkeringerKodeverk = useFpSakKodeverk(KodeverkType.FAGSAK_MARKERING).toSorted((a, b) =>
    a.navn.localeCompare(b.navn),
  );

  const { mutate: endreFagsakMarkering } = useMutation({
    mutationFn: (valuesToStore: EndreUtlandFormValues) => api.endreSakMarkering(valuesToStore),
    onSuccess: () => {
      hentOgSettBehandling();
      queryClient.invalidateQueries({
        queryKey: [FagsakRel.FETCH_FAGSAK],
      });
    },
  });

  return (
    <MenyEndreUtlandIndex
      saksnummer={saksnummer}
      fagsakMarkeringer={fagsakMarkeringer}
      endreFagsakMarkering={endreFagsakMarkering}
      lukkModal={lukkModal}
      fagsakMarkeringerKodeverk={fagsakMarkeringerKodeverk}
    />
  );
};

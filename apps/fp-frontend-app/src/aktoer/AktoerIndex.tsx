import { Link } from 'react-router-dom';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { KodeverkType } from '@navikt/fp-kodeverk';
import { AktorSakIndex } from '@navikt/fp-sak-aktor';

import { pathToFagsak } from '../app/paths';
import { useTrackRouteParam } from '../app/useTrackRouteParam';
import { aktørInfoOptions } from '../data/fagsakApi';
import { useFpSakKodeverk } from '../data/useKodeverk';

export const AktoerIndex = () => {
  const { selected: selectedAktoerId } = useTrackRouteParam<string>({
    paramName: 'aktoerId',
    parse: aktoerIdFromUrl => Number.parseInt(aktoerIdFromUrl, 10),
  });

  const { data: aktørInfo, status } = useQuery(aktørInfoOptions(selectedAktoerId));

  const fagsakStatuser = useFpSakKodeverk(KodeverkType.FAGSAK_STATUS);
  const fagsakYtelser = useFpSakKodeverk(KodeverkType.FAGSAK_YTELSE);

  if (status !== 'success') {
    return <LoadingPanel />;
  }

  return (
    <AktorSakIndex
      valgtAktorId={selectedAktoerId}
      aktorInfo={aktørInfo}
      fagsakStatuser={fagsakStatuser}
      fagsakYtelseTyper={fagsakYtelser}
      renderSomLenke={(className, fagsakKomponent, saksnummer) => (
        <Link to={pathToFagsak(saksnummer)} className={className}>
          {fagsakKomponent}
        </Link>
      )}
    />
  );
};

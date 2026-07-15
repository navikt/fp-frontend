import { Link, useParams } from 'react-router-dom';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { AktørSakIndex } from '@navikt/fp-sak-aktor';
import { ErrorPage } from '@navikt/fp-sak-infosider';

import { pathToFagsak } from '../app/paths';
import { aktørInfoOptions } from '../data/fagsakApi';
import { useFpSakKodeverk } from '../data/useKodeverk';

export const AktørIndex = () => {
  const params = useParams<{ aktoerId: string }>();
  const selectedAktoerId = params['aktoerId']!;

  const { data: aktørInfo, status } = useQuery(aktørInfoOptions(selectedAktoerId));

  const fagsakStatuser = useFpSakKodeverk('FagsakStatus');
  const fagsakYtelser = useFpSakKodeverk('FagsakYtelseType');

  if (status === 'pending') {
    return <LoadingPanel />;
  }
  if (status === 'error') {
    return <ErrorPage />;
  }

  return (
    <AktørSakIndex
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

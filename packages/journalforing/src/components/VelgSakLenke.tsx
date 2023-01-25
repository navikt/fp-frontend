import React, { FunctionComponent, useCallback } from 'react';
import { Link } from '@navikt/ds-react';

type OwnProps = Readonly<{
  saksnummer: string;
  åpneFagsak: (saksnummer: string, behandlingUuid?: string) => void;
}>;

/**
 * VelgSakLenke - Inneholder en lenke som åpner en sak i fpsak.
 */
const VelgSakLenke: FunctionComponent<OwnProps> = ({
  saksnummer,
  åpneFagsak,
}) => {
  const åpneSak = useCallback((evt) => {
    åpneFagsak(saksnummer);
    evt.preventDefault();
  }, [saksnummer]);
  return (
    <Link href="#" onClick={åpneSak} target="_blank">
      {saksnummer}
    </Link>
  );
};
export default VelgSakLenke;

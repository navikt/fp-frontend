import React, { FunctionComponent } from 'react';
import { Link } from '@navikt/ds-react';

type OwnProps = Readonly<{
  saksnummer: string;
}>;

const velgSakLenke = (saksnummer: string): string => (`/fagsak/${saksnummer}/`);

/**
 * VelgSakLenke - Inneholder en lenke som åpner en sak i fpsak.
 */
const VelgSakLenke: FunctionComponent<OwnProps> = ({
  saksnummer,
}) => {
  const lenke = velgSakLenke(saksnummer);
  return (
    <Link href={lenke} target="_blank">
      {saksnummer}
    </Link>
  );
};
export default VelgSakLenke;

import React, { FunctionComponent } from 'react';
import { Link } from '@navikt/ds-react';
import { FlexColumn, FlexRow } from '@navikt/ft-ui-komponenter';
import styles from '../journalforingPanel.less';

const velgSakLenke = (saksnummer: string): string => (`/fagsak/${saksnummer}/`);

type OwnProps = Readonly<{
  saksnummer: string;
}>;

/**
 * VelgSakLenke - Inneholder en lenke for å åpne saken i fpsak i ny fane
 */
const VelgSakLenke: FunctionComponent<OwnProps> = ({
  saksnummer,
}) => {
  const lenke = velgSakLenke(saksnummer);
  return (
    <FlexRow>
      <FlexColumn className={styles.sakLink}>
        <Link href={lenke} target="_blank">
          {saksnummer}
        </Link>
      </FlexColumn>
    </FlexRow>
  );
};
export default VelgSakLenke;

import React, { FunctionComponent } from 'react';
import { Label } from '@navikt/ds-react';
import { NewTab } from '@navikt/ds-icons';

import { FlexColumn, FlexRow } from '@navikt/ft-ui-komponenter';
import JournalDokument from '../../typer/journalDokumentTsType';
import styles from './dokumentDetaljer.less';

type OwnProps = Readonly<{
  dokumenter: JournalDokument[];
}>;

/**
 * DokumentDetaljer - Inneholder detaljer om et dokument på journalposten
 */
const DokumentDetaljer: FunctionComponent<OwnProps> = ({
  dokumenter,
}) => (
  <>
    {dokumenter.map((dok) => (
      <div className={styles.dokContainer}>
        <FlexRow>
          <FlexColumn className={styles.dokumentTittel}><Label>{dok.tittel}</Label></FlexColumn>
          <FlexColumn><a href={dok.lenke} target="_blank" rel="noreferrer"><NewTab className={styles.newTabIcon} /></a></FlexColumn>
        </FlexRow>
      </div>
    ))}
  </>
);
export default DokumentDetaljer;

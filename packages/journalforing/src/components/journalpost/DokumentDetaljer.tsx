import React, { FunctionComponent } from 'react';
import { BodyShort, Label } from '@navikt/ds-react';
import { NewTab } from '@navikt/ds-icons';

import { FlexColumn, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { FormattedMessage } from 'react-intl';
import JournalDokument from '../../typer/journalDokumentTsType';
import styles from './dokumentDetaljer.less';

type OwnProps = Readonly<{
  dokumenter: JournalDokument[];
}>;

/**
 * SakDetaljer - Inneholder detaljer om en sak som kan knyttes til journalposten
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

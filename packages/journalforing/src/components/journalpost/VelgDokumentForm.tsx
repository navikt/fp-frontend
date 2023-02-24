import React, { FunctionComponent } from 'react';
import { BodyShort, Label } from '@navikt/ds-react';
import { NewTab } from '@navikt/ds-icons';

import { FlexColumn, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { FormattedMessage } from 'react-intl';
import JournalDokument from '../../typer/journalDokumentTsType';
import styles from './velgDokumentForm.less';

type OwnProps = Readonly<{
  dokumenter: JournalDokument[];
}>;

/**
 * VelgDokumentForm - Form komponent for å velge hvilket dokument som skal vises i pdfVisning
 */
const VelgDokumentForm: FunctionComponent<OwnProps> = ({
  dokumenter,
}) => {
  if (!dokumenter || dokumenter.length < 1) {
    return (
      <>
        <FlexRow>
          <FlexColumn>
            <Label><FormattedMessage id="ValgtOppgave.Dokument.Tittel" /></Label>
          </FlexColumn>
        </FlexRow>
        <FlexRow>
          <FlexColumn>
            <BodyShort><FormattedMessage id="ValgtOppgave.Dokument.Ingen" /></BodyShort>
          </FlexColumn>
        </FlexRow>
      </>
    );
  }
  return (
    <>
      {dokumenter.map((dok) => (
        <div key={dok.dokumentId}>
          <FlexRow className={styles.dokumentRad}>
            <FlexColumn className={styles.dokumentTittel}><Label>{dok.tittel}</Label></FlexColumn>
            <FlexColumn><a href={dok.lenke} target="_blank" rel="noreferrer"><NewTab className={styles.newTabIcon} /></a></FlexColumn>
          </FlexRow>
          <VerticalSpacer eightPx />
        </div>
      ))}
    </>
  );
};
export default VelgDokumentForm;

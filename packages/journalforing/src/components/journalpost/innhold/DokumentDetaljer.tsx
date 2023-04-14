import React, { FunctionComponent, useState, useCallback } from 'react';
import { Label, Button } from '@navikt/ds-react';
import { required } from '@navikt/ft-form-validators';
import { NewTab, Edit } from '@navikt/ds-icons';
import { SelectField } from '@navikt/ft-form-hooks';
import { FlexColumn, FlexRow } from '@navikt/ft-ui-komponenter';
import JournalDokument from '../../../typer/journalDokumentTsType';
import styles from './dokumentDetaljer.module.css';
import { listeMedTittler } from '../../../kodeverk/dokumentTittel';
import { erKanalSomErÅpenForEndring } from '../../../kodeverk/journalKanal';
import Journalpost from '../../../typer/journalpostTsType';

type OwnProps = Readonly<{
  dokument: JournalDokument;
  docFieldIndex: number;
  journalpost: Journalpost;
}>;

/**
 * DokumentDetaljer - Inneholder detaljer om et dokument på journalposten
 */
const DokumentDetaljer: FunctionComponent<OwnProps> = ({ dokument, docFieldIndex, journalpost }) => {
  const [kanRedigeres, setSkalRedigeres] = useState<boolean>(!dokument.tittel);
  const tittler = listeMedTittler.map(tittel => (
    <option value={tittel} key={tittel}>
      {tittel}
    </option>
  ));

  const toggleRedigering = useCallback(() => {
    setSkalRedigeres(!kanRedigeres);
  }, [kanRedigeres]);

  return (
    <div className={styles.dokContainer}>
      <FlexRow>
        {kanRedigeres && (
          <FlexColumn className={styles.dokumentTittel}>
            <SelectField
              readOnly={false}
              name={`journalpostDokumenter.${docFieldIndex}.tittel`}
              label={undefined}
              className={styles.selectField}
              validate={[required]}
              selectValues={tittler}
            />
          </FlexColumn>
        )}
        {!kanRedigeres && (
          <FlexColumn className={styles.dokumentTittel}>
            <Label className={styles.dokLab}>{dokument.tittel}</Label>
            {erKanalSomErÅpenForEndring(journalpost.kanal) && (
              <Button
                icon={<Edit />}
                className={styles.editButton}
                onClick={toggleRedigering}
                type="button"
                variant="tertiary"
              />
            )}
          </FlexColumn>
        )}
        <FlexColumn>
          <a href={dokument.lenke} target="_blank" rel="noreferrer">
            <NewTab className={styles.newTabIcon} />
          </a>
        </FlexColumn>
      </FlexRow>
    </div>
  );
};
export default DokumentDetaljer;

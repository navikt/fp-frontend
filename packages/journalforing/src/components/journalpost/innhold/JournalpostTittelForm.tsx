import React, { FunctionComponent, useState, useCallback } from 'react';
import { Heading, Button } from '@navikt/ds-react';
import { Edit } from '@navikt/ds-icons';
import { SelectField } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { FlexColumn, FlexRow } from '@navikt/ft-ui-komponenter';
import Journalpost from '../../../typer/journalpostTsType';
import styles from './journalpostTittelForm.module.css';
import { listeMedTittler } from '../../../kodeverk/dokumentTittel';

type OwnProps = Readonly<{
  journalpost: Journalpost;
}>;

/**
 * JournalpostTittelForm - Inneholder tittel på journalpost og formkomponent for å endre denne
 */
const JournalpostTittelForm: FunctionComponent<OwnProps> = ({
  journalpost,
}) => {
  const [kanRedigereTittel, setKanRedigereTittel] = useState<boolean>(false);
  const toggleRedigering = useCallback(() => {
    setKanRedigereTittel(!kanRedigereTittel);
  }, [kanRedigereTittel]);
  const tittler = listeMedTittler.map((tittel) => (
    <option value={tittel} key={tittel}>
      {tittel}
    </option>
  ));
  return (
    <FlexRow>
      {kanRedigereTittel && (
        <FlexColumn>
          <SelectField
            readOnly={false}
            name="journalpostTittel"
            label={undefined}
            className={styles.selectField}
            validate={[required]}
            selectValues={tittler}
          />
        </FlexColumn>
      )}
      {!kanRedigereTittel && (
        <FlexColumn className={styles.tittelRad}>
          <Heading size="large">{journalpost.tittel}</Heading>
          <Button icon={<Edit />} className={styles.editButton} onClick={toggleRedigering} type="button" variant="tertiary" />
        </FlexColumn>
      )}
    </FlexRow>
  );
};
export default JournalpostTittelForm;

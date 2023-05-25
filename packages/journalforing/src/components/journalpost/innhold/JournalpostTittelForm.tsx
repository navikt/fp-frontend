import React, { FunctionComponent, useState, useCallback } from 'react';
import { Heading, Button, CheckboxGroup, Checkbox } from '@navikt/ds-react';
import { PencilIcon } from '@navikt/aksel-icons';
import { SelectField, InputField } from '@navikt/ft-form-hooks';
import { hasValidText, required } from '@navikt/ft-form-validators';
import { FlexColumn, FlexRow } from '@navikt/ft-ui-komponenter';
import Journalpost from '../../../typer/journalpostTsType';
import styles from './journalpostTittelForm.module.css';
import { listeMedTittler } from '../../../kodeverk/dokumentTittel';
import { erKanalSomErÅpenForEndring } from '../../../kodeverk/journalKanal';

type OwnProps = Readonly<{
  journalpost: Journalpost;
}>;

/**
 * JournalpostTittelForm - Inneholder tittel på journalpost og formkomponent for å endre denne
 */
const JournalpostTittelForm: FunctionComponent<OwnProps> = ({ journalpost }) => {
  const [kanRedigereTittel, setKanRedigereTittel] = useState(!journalpost.tittel);
  const [harToggletFritekst, setHarToggletFritekst] = useState(false);
  const toggleRedigering = useCallback(() => {
    setKanRedigereTittel(!kanRedigereTittel);
  }, [kanRedigereTittel]);
  const tittler = listeMedTittler.map(tittel => (
    <option value={tittel} key={tittel}>
      {tittel}
    </option>
  ));

  const endreFritekstToggle = useCallback(() => {
    setHarToggletFritekst(!harToggletFritekst);
  }, [harToggletFritekst]);
  return (
    <FlexRow>
      {kanRedigereTittel && (
        <>
          <FlexColumn className={styles.inputBoks}>
            {harToggletFritekst && (
              <InputField
                name="journalpostTittel"
                validate={[required, hasValidText]}
                readOnly={false}
                maxLength={200}
                className={styles.inputField}
              />
            )}
            {!harToggletFritekst && (
              <SelectField
                readOnly={false}
                name="journalpostTittel"
                label={undefined}
                className={styles.selectField}
                validate={[required]}
                selectValues={tittler}
              />
            )}
          </FlexColumn>
          <FlexColumn>
            <CheckboxGroup
              legend="Brukt fritekst"
              hideLegend
              onChange={endreFritekstToggle}
              value={[harToggletFritekst]}
            >
              <Checkbox value>Fritekst</Checkbox>
            </CheckboxGroup>
          </FlexColumn>
        </>
      )}
      {!kanRedigereTittel && (
        <FlexColumn className={styles.tittelRad}>
          <Heading size="large">{journalpost.tittel}</Heading>
          {erKanalSomErÅpenForEndring(journalpost.kanal) && (
            <Button
              icon={<PencilIcon aria-hidden />}
              className={styles.editButton}
              onClick={toggleRedigering}
              type="button"
              variant="tertiary"
            />
          )}
        </FlexColumn>
      )}
    </FlexRow>
  );
};
export default JournalpostTittelForm;

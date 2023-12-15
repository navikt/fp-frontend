import React, { FunctionComponent, useState, useCallback } from 'react';
import { Heading, Button, CheckboxGroup, Checkbox, HStack } from '@navikt/ds-react';
import { FormattedMessage } from 'react-intl';
import { PencilIcon } from '@navikt/aksel-icons';
import { SelectField, InputField } from '@navikt/ft-form-hooks';
import { hasValidText, required } from '@navikt/ft-form-validators';
import Journalpost from '../../../typer/journalpostTsType';
import styles from './journalpostTittelForm.module.css';
import { listeMedTittler } from '../../../kodeverk/dokumentTittel';
import { erKanalSomErÅpenForEndring } from '../../../kodeverk/journalKanal';

type OwnProps = Readonly<{
  journalpost: Journalpost;
  readOnly: boolean;
}>;

/**
 * JournalpostTittelForm - Inneholder tittel på journalpost og formkomponent for å endre denne
 */
const JournalpostTittelForm: FunctionComponent<OwnProps> = ({ journalpost, readOnly }) => {
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
    <div className={styles.container}>
      {kanRedigereTittel && (
        <>
          <HStack className={styles.inputBoks}>
            {harToggletFritekst && (
              <InputField
                name="journalpostTittel"
                validate={[required, hasValidText]}
                readOnly={readOnly}
                maxLength={200}
                className={styles.inputField}
              />
            )}
            {!harToggletFritekst && (
              <SelectField
                readOnly={readOnly}
                name="journalpostTittel"
                label={undefined}
                className={styles.selectField}
                validate={[required]}
                selectValues={tittler}
              />
            )}
          </HStack>
          <HStack>
            <CheckboxGroup
              legend="Brukt fritekst"
              hideLegend
              onChange={endreFritekstToggle}
              value={[harToggletFritekst]}
            >
              <Checkbox value>
                <FormattedMessage id="Journal.Tittel.Fritekst" />
              </Checkbox>
            </CheckboxGroup>
          </HStack>
        </>
      )}
      {!kanRedigereTittel && (
        <HStack className={styles.inputBoks}>
          <Heading size="large">{journalpost.tittel}</Heading>
          {!readOnly && erKanalSomErÅpenForEndring(journalpost.kanal) && (
            <Button icon={<PencilIcon aria-hidden />} onClick={toggleRedigering} type="button" variant="tertiary" />
          )}
        </HStack>
      )}
    </div>
  );
};
export default JournalpostTittelForm;

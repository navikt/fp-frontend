import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { PencilIcon } from '@navikt/aksel-icons';
import { Button, Checkbox, CheckboxGroup, Heading, HStack } from '@navikt/ds-react';
import { RhfSelect, RhfTextField } from '@navikt/ft-form-hooks';
import { hasValidText, required } from '@navikt/ft-form-validators';

import { listeMedTittler } from '../../../kodeverk/dokumentTittel';
import { erKanalSomErÅpenForEndring } from '../../../kodeverk/journalKanal';
import type { JournalføringFormValues } from '../../../typer/journalføringFormValues';
import type { Journalpost } from '../../../typer/journalpostTsType';

import styles from './journalpostTittelForm.module.css';

type Props = Readonly<{
  journalpost: Journalpost;
  readOnly: boolean;
}>;

/**
 * JournalpostTittelForm - Inneholder tittel på journalpost og formkomponent for å endre denne
 */
export const JournalpostTittelForm = ({ journalpost, readOnly }: Props) => {
  const [kanRedigereTittel, setKanRedigereTittel] = useState(!journalpost.tittel);
  const [harToggletFritekst, setHarToggletFritekst] = useState(false);

  const { control } = useFormContext<JournalføringFormValues>();

  return (
    <div className={styles.container}>
      {kanRedigereTittel && (
        <>
          <HStack className={styles.inputBoks}>
            {harToggletFritekst && (
              <RhfTextField
                name="journalpostTittel"
                control={control}
                validate={[required, hasValidText]}
                readOnly={readOnly}
                maxLength={200}
                className={styles.inputField}
              />
            )}
            {!harToggletFritekst && (
              <RhfSelect
                name="journalpostTittel"
                control={control}
                readOnly={readOnly}
                label={undefined}
                className={styles.selectField}
                validate={[required]}
                selectValues={listeMedTittler.map(tittel => (
                  <option value={tittel} key={tittel}>
                    {tittel}
                  </option>
                ))}
              />
            )}
          </HStack>
          <CheckboxGroup
            legend="Brukt fritekst"
            hideLegend
            onChange={() => {
              setHarToggletFritekst(!harToggletFritekst);
            }}
            value={[harToggletFritekst]}
          >
            <Checkbox value>
              <FormattedMessage id="Journal.Tittel.Fritekst" />
            </Checkbox>
          </CheckboxGroup>
        </>
      )}
      {!kanRedigereTittel && (
        <HStack className={styles.inputBoks}>
          <Heading size="large">{journalpost.tittel}</Heading>
          {!readOnly && erKanalSomErÅpenForEndring(journalpost.kanal) && (
            <Button
              icon={<PencilIcon aria-hidden />}
              onClick={() => {
                setKanRedigereTittel(!kanRedigereTittel);
              }}
              type="button"
              variant="tertiary"
            />
          )}
        </HStack>
      )}
    </div>
  );
};

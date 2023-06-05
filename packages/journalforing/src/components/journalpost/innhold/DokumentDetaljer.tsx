import React, { FunctionComponent, useState, useCallback } from 'react';
import { Label, Button, CheckboxGroup, Checkbox } from '@navikt/ds-react';
import { hasValidText, required } from '@navikt/ft-form-validators';
import { TabsAddIcon, PencilIcon } from '@navikt/aksel-icons';
import { InputField, SelectField } from '@navikt/ft-form-hooks';
import { FlexColumn, FlexRow } from '@navikt/ft-ui-komponenter';
import JournalDokument from '../../../typer/journalDokumentTsType';
import { listeMedTittler } from '../../../kodeverk/dokumentTittel';
import { erKanalSomErÅpenForEndring } from '../../../kodeverk/journalKanal';
import Journalpost from '../../../typer/journalpostTsType';

import styles from './dokumentDetaljer.module.css';

type OwnProps = Readonly<{
  dokument: JournalDokument;
  docFieldIndex: number;
  journalpost: Journalpost;
  dokumentTittelStyresAvJournalpostTittel: boolean;
}>;

/**
 * DokumentDetaljer - Inneholder detaljer om et dokument på journalposten
 */
const DokumentDetaljer: FunctionComponent<OwnProps> = ({
  dokument,
  docFieldIndex,
  journalpost,
  dokumentTittelStyresAvJournalpostTittel,
}) => {
  const [kanRedigeres, setSkalRedigeres] = useState<boolean>(!dokument.tittel);
  const [harToggletFritekst, setHarToggletFritekst] = useState(false);
  const tittler = listeMedTittler.map(tittel => (
    <option value={tittel} key={tittel}>
      {tittel}
    </option>
  ));

  const endreFritekstToggle = useCallback(() => {
    setHarToggletFritekst(!harToggletFritekst);
  }, [harToggletFritekst]);

  const toggleRedigering = useCallback(() => {
    setSkalRedigeres(!kanRedigeres);
  }, [kanRedigeres]);
  const inputFieldName = dokumentTittelStyresAvJournalpostTittel
    ? 'journalpostTittel'
    : `journalpostDokumenter.${docFieldIndex}.tittel`;
  const nyFaneKnapp = (
    <FlexColumn className={styles.dokLenke}>
      <Button
        as="a"
        href={dokument.lenke}
        target="_blank"
        rel="noreferrer"
        variant="tertiary"
        icon={<TabsAddIcon aria-hidden className={styles.newTabIcon} />}
      />
    </FlexColumn>
  );
  if (dokumentTittelStyresAvJournalpostTittel) {
    return (
      <div className={styles.dokContainer}>
        <FlexRow>
          {kanRedigeres && (
            <FlexColumn className={styles.dokumentTittel}>
              <InputField
                name={inputFieldName}
                validate={[required, hasValidText]}
                readOnly={dokumentTittelStyresAvJournalpostTittel}
                maxLength={200}
              />
            </FlexColumn>
          )}
          {nyFaneKnapp}
        </FlexRow>
      </div>
    );
  }
  return (
    <div className={styles.dokContainer}>
      <FlexRow>
        {kanRedigeres && (
          <FlexColumn className={styles.dokumentTittel}>
            <FlexColumn className={styles.input}>
              <FlexColumn className={styles.selectField}>
                {harToggletFritekst && (
                  <InputField
                    name={`journalpostDokumenter.${docFieldIndex}.tittel`}
                    validate={[required, hasValidText]}
                    readOnly={false}
                    maxLength={100}
                  />
                )}
                {!harToggletFritekst && (
                  <SelectField
                    readOnly={false}
                    name={`journalpostDokumenter.${docFieldIndex}.tittel`}
                    label={undefined}
                    validate={[required]}
                    selectValues={tittler}
                  />
                )}
              </FlexColumn>
              <FlexColumn>
                <CheckboxGroup
                  legend="Brukt fritekst"
                  hideLegend
                  className={styles.checkbox}
                  onChange={endreFritekstToggle}
                  value={[harToggletFritekst]}
                >
                  <Checkbox value>Fritekst</Checkbox>
                </CheckboxGroup>
              </FlexColumn>
            </FlexColumn>
          </FlexColumn>
        )}
        {!kanRedigeres && (
          <FlexColumn className={styles.dokumentTittel}>
            <Label className={styles.dokLab}>{dokument.tittel}</Label>
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
        <FlexColumn className={styles.dokLenke}>
          <Button
            as="a"
            href={dokument.lenke}
            target="_blank"
            rel="noreferrer"
            variant="tertiary"
            icon={<TabsAddIcon aria-hidden className={styles.newTabIcon} />}
          />
        </FlexColumn>
      </FlexRow>
    </div>
  );
};
export default DokumentDetaljer;

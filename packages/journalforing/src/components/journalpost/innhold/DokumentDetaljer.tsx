import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { ExternalLinkIcon, PencilIcon } from '@navikt/aksel-icons';
import { Button, Checkbox, CheckboxGroup, HStack, Label, Spacer } from '@navikt/ds-react';
import { RhfSelect, RhfTextField } from '@navikt/ft-form-hooks';
import { hasValidText, required } from '@navikt/ft-form-validators';

import type { JournalDokument } from '../../../typer/journalDokumentTsType';
import type { JournalføringFormValues } from '../../../typer/journalføringFormValues';
import type { Journalpost } from '../../../typer/journalpostTsType';
import { dokumentTitler } from '../../../utils/dokumentTittel';
import { erKanalSomErÅpenForEndring } from '../../../utils/journalKanalUtils';

import styles from './dokumentDetaljer.module.css';

type Props = Readonly<{
  dokument: JournalDokument;
  docFieldIndex: number;
  journalpost: Journalpost;
  dokumentTittelStyresAvJournalpostTittel: boolean;
}>;

/**
 * DokumentDetaljer - Inneholder detaljer om et dokument på journalposten
 */
export const DokumentDetaljer = ({
  dokument,
  docFieldIndex,
  journalpost,
  dokumentTittelStyresAvJournalpostTittel,
}: Props) => {
  const { control } = useFormContext<JournalføringFormValues>();
  const intl = useIntl();
  const [kanRedigeres, setKanRedigeres] = useState<boolean>(!dokument.tittel);
  const [harToggletFritekst, setHarToggletFritekst] = useState(false);

  const nyFaneKnapp = (
    <Button
      as="a"
      href={dokument.lenke}
      target="_blank"
      rel="noreferrer"
      variant="tertiary"
      title={intl.formatMessage({ id: 'DokumentDetaljer.ExternalLink' })}
      icon={<ExternalLinkIcon aria-hidden className={styles['externalLinkIcon']} />}
    />
  );
  if (dokumentTittelStyresAvJournalpostTittel) {
    return (
      <HStack className={styles['dokContainer']} gap="0 4" align="center" wrap={false}>
        <RhfTextField
          name="journalpostTittel"
          control={control}
          validate={[required, hasValidText]}
          readOnly={dokumentTittelStyresAvJournalpostTittel}
          maxLength={200}
        />
        <Spacer />
        {nyFaneKnapp}
      </HStack>
    );
  }
  return (
    <HStack className={styles['dokContainer']} gap="0 4" align="center" wrap={false}>
      {kanRedigeres && (
        <>
          {harToggletFritekst && (
            <RhfTextField
              name={`journalpostDokumenter.${docFieldIndex}.tittel`}
              control={control}
              hideLabel
              validate={[required, hasValidText]}
              readOnly={false}
              className={styles['input']}
              maxLength={100}
            />
          )}
          {!harToggletFritekst && (
            <RhfSelect
              name={`journalpostDokumenter.${docFieldIndex}.tittel`}
              control={control}
              hideLabel
              readOnly={false}
              label={undefined}
              validate={[required]}
              className={styles['input']}
              selectValues={dokumentTitler.map(tittel => (
                <option value={tittel} key={tittel}>
                  {tittel}
                </option>
              ))}
            />
          )}
          <CheckboxGroup
            legend="Brukt fritekst"
            hideLegend
            onChange={() => {
              setHarToggletFritekst(!harToggletFritekst);
            }}
            value={[harToggletFritekst]}
          >
            <Checkbox value size="small">
              <FormattedMessage id="Journal.Tittel.Fritekst" />
            </Checkbox>
          </CheckboxGroup>
        </>
      )}
      {!kanRedigeres && (
        <>
          <Label>{dokument.tittel}</Label>
          {erKanalSomErÅpenForEndring(journalpost.kanal) && (
            <Button
              icon={<PencilIcon aria-hidden />}
              className={styles['editButton']}
              onClick={() => {
                setKanRedigeres(!kanRedigeres);
              }}
              type="button"
              variant="tertiary"
            />
          )}
        </>
      )}
      <Spacer />
      {nyFaneKnapp}
    </HStack>
  );
};

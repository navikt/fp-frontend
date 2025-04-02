import { type ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Alert, BodyShort, Button, HStack, VStack } from '@navikt/ds-react';
import { RadioGroupPanel, SelectField } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';

import { FagsakYtelseType } from '@navikt/fp-kodeverk';

import { erEndeligJournalført } from '../../../kodeverk/journalpostTilstand';
import { Sakstype } from '../../../kodeverk/sakstype';
import type { JournalførSakSubmitValue } from '../../../typer/ferdigstillJournalføringSubmit';
import type { JournalFagsak } from '../../../typer/journalFagsakTsType';
import type { JournalføringFormValues } from '../../../typer/journalføringFormValues';
import type { Journalpost } from '../../../typer/journalpostTsType';

import styles from './velgSakForm.module.css';

const TOM_ARRAY: JournalFagsak[] = [];

const LAG_NY_SAK = 'LAG_NY_SAK'; // Value for en av radioknappene som skal lede til ekstra inputfelt
const LAG_GENERELL_SAK = 'LAG_GENERELL_SAK';
const radioFieldName = 'saksnummerValg';
const selectFieldName = 'ytelsetypeValg';

type RadioOption = {
  label: ReactElement;
  value: string;
};

const ytelseSelectValg: FagsakYtelseType[] = [
  FagsakYtelseType.ENGANGSSTONAD,
  FagsakYtelseType.FORELDREPENGER,
  FagsakYtelseType.SVANGERSKAPSPENGER,
];

export const transformValues = (
  values: JournalføringFormValues,
  journalpost: Journalpost,
): JournalførSakSubmitValue => {
  const saksnummerValg = values[radioFieldName];
  if (saksnummerValg === LAG_GENERELL_SAK) {
    return {
      opprettSak: {
        aktørId: journalpost.bruker.aktørId,
        sakstype: Sakstype.GENERELL,
      },
    };
  }
  if (saksnummerValg === LAG_NY_SAK) {
    const valgtYtelse = values[selectFieldName];
    if (!valgtYtelse) {
      throw Error('Kan ikke journalføre på ny sak uten ytelse');
    }
    return {
      opprettSak: {
        ytelseType: valgtYtelse,
        aktørId: journalpost.bruker.aktørId,
        sakstype: Sakstype.FAGSAK,
      },
    };
  }
  return {
    saksnummer: saksnummerValg,
  };
};

const lagRadioOptions = (journalpost: Journalpost): RadioOption[] => {
  const saker = journalpost.fagsaker || TOM_ARRAY;
  const radioOptions = saker.map(sak => ({
    label: (
      <>
        {sak.saksnummer}{' '}
        <FormattedMessage id="Journal.Sak.Ytelse" tagName="b" values={{ ytelseType: sak.ytelseType }} />
      </>
    ),
    disabled: sak.saksnummer === journalpost.eksisterendeSaksnummer,
    value: sak.saksnummer,
  }));
  radioOptions.push({ label: <FormattedMessage id="Journal.Sak.Ny" />, value: LAG_NY_SAK, disabled: !journalpost.kanOppretteSak });
  if (!erEndeligJournalført(journalpost.tilstand)) {
    // Om den allerede er journalført kan den ikke legges på generell sak
    radioOptions.push({
      label: <FormattedMessage id="Journal.Sak.Generell" />,
      value: LAG_GENERELL_SAK,
      disabled: false,
    });
  }
  return radioOptions;
};

type Props = Readonly<{
  journalpost: Journalpost;
  isSubmittable: boolean;
  avbrytVisningAvJournalpost: () => void;
  erKlarForJournalføring: boolean;
  erLokalOppgave: boolean;
  flyttTilGosys: (data: string) => void;
}>;

/**
 * VelgSakForm - Inneholder formen som lar saksbehandler velge en sak og journalføre dokumentet på, evt opprette ny sak.
 */
export const VelgSakForm = ({
  journalpost,
  isSubmittable,
  avbrytVisningAvJournalpost,
  erKlarForJournalføring,
  erLokalOppgave,
  flyttTilGosys,
}: Props) => {
  const intl = useIntl();

  const finnesSaker = journalpost.fagsaker && journalpost.fagsaker.length > 0;
  const formMethods = useFormContext<JournalføringFormValues>();
  const sakValg = formMethods.watch(radioFieldName);

  return (
    <VStack gap="4">
      {!finnesSaker && erKlarForJournalføring && (
        <BodyShort>
          <FormattedMessage id="Journal.Sak.Ingen" />
        </BodyShort>
      )}
      {erEndeligJournalført(journalpost.tilstand) && (
        <Alert variant="info">
          <FormattedMessage id="Journalpost.Søk.Forklaring" />
        </Alert>
      )}
      <VStack gap="8">
        <VStack gap="4">
          <RadioGroupPanel
            disabled={!erKlarForJournalføring}
            name={radioFieldName}
            validate={[required]}
            radios={lagRadioOptions(journalpost)}
          />
          {sakValg === LAG_NY_SAK && (
            <SelectField
              className={styles.ytelseSelect}
              name={selectFieldName}
              validate={[required]}
              label={intl.formatMessage({ id: 'Journal.Sak.VelgYtelse' })}
              selectValues={ytelseSelectValg.map(ytelseType => (
                <option key={ytelseType} value={ytelseType}>
                  <FormattedMessage id="Journal.Sak.Ytelse" values={{ ytelseType }} />
                </option>
              ))}
            />
          )}
          {sakValg === LAG_GENERELL_SAK && (
            <Alert variant="info">
              <FormattedMessage id="Journal.Sak.Generell.Info" />
            </Alert>
          )}
        </VStack>
        <HStack className={styles.knappRad} gap="4">
          <Button size="small" variant="primary" disabled={!isSubmittable} type="submit">
            <FormattedMessage
              id={erEndeligJournalført(journalpost.tilstand) ? 'Journal.Sak.AnnenSak' : 'ValgtOppgave.Journalfør'}
            />
          </Button>
          <Button size="small" variant="secondary" onClick={avbrytVisningAvJournalpost} disabled={false} type="button">
            <FormattedMessage id="ValgtOppgave.Avbryt" />
          </Button>
          {erLokalOppgave && (
            <div className={styles.colMargin}>
              <Button
                size="small"
                variant="primary"
                type="button"
                onClick={() => {
                  flyttTilGosys(journalpost.journalpostId);
                }}
              >
                <FormattedMessage id="ValgtOppgave.Flytt.Til.Gosys" />
              </Button>
            </div>
          )}
        </HStack>
      </VStack>
    </VStack>
  );
};

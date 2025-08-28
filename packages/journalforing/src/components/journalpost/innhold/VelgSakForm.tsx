import { type ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Alert, BodyShort, Button, HStack, Radio, Spacer, VStack } from '@navikt/ds-react';
import { RhfRadioGroupNew, RhfSelect } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';

import { notEmpty } from '@navikt/fp-utils';

import type { JournalførSakSubmitValue } from '../../../typer/ferdigstillJournalføringSubmit';
import type { JournalFagsak } from '../../../typer/journalFagsakTsType';
import type { JournalføringFormValues } from '../../../typer/journalføringFormValues';
import type { Journalpost } from '../../../typer/journalpostTsType';
import { erEndeligJournalført } from '../../../utils/journalpostTilstandUtils';

import styles from './velgSakForm.module.css';
import type { FagsakYtelseType } from '@navikt/fp-kodeverk';

const TOM_ARRAY: JournalFagsak[] = [];

const LAG_NY_SAK = 'LAG_NY_SAK'; // Value for en av radioknappene som skal lede til ekstra inputfelt
const LAG_GENERELL_SAK = 'LAG_GENERELL_SAK';
const radioFieldName = 'saksnummerValg';
const selectFieldName = 'ytelsetypeValg';

type RadioOption = {
  label: ReactElement;
  value: string;
  disabled: boolean;
};

const ytelseSelectValg: FagsakYtelseType[] = ['ES', 'FP', 'SVP'];

export const transformValues = (
  values: JournalføringFormValues,
  journalpost: Journalpost,
): JournalførSakSubmitValue => {
  const saksnummerValg = values[radioFieldName];
  if (saksnummerValg === LAG_GENERELL_SAK) {
    return {
      opprettSak: {
        aktørId: notEmpty(journalpost.bruker?.aktørId),
        sakstype: 'GENERELL',
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
        aktørId: notEmpty(journalpost.bruker?.aktørId),
        sakstype: 'FAGSAK',
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
  radioOptions.push({
    label: <FormattedMessage id="Journal.Sak.Ny" />,
    value: LAG_NY_SAK,
    disabled: !journalpost.kanOppretteSak,
  });
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
    <VStack gap="space-16">
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
      <VStack gap="space-32">
        <VStack gap="space-16">
          <RhfRadioGroupNew name={radioFieldName} control={formMethods.control} validate={[required]}>
            {lagRadioOptions(journalpost).map(option => (
              <Radio
                key={option.value}
                value={option.value}
                size="small"
                disabled={!erKlarForJournalføring || option.disabled}
              >
                {option.label}
              </Radio>
            ))}
          </RhfRadioGroupNew>
          {sakValg === LAG_NY_SAK && (
            <RhfSelect
              name={selectFieldName}
              control={formMethods.control}
              className={styles.ytelseSelect}
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
        <HStack gap="space-16">
          <Button size="small" variant="primary" disabled={!isSubmittable} type="submit">
            <FormattedMessage
              id={erEndeligJournalført(journalpost.tilstand) ? 'Journal.Sak.AnnenSak' : 'ValgtOppgave.Journalfør'}
            />
          </Button>
          <Button size="small" variant="secondary" onClick={avbrytVisningAvJournalpost} disabled={false} type="button">
            <FormattedMessage id="ValgtOppgave.Avbryt" />
          </Button>
          {erLokalOppgave && (
            <>
              <Spacer />
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
            </>
          )}
        </HStack>
      </VStack>
    </VStack>
  );
};

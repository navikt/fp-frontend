import { type ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage, type IntlShape, useIntl } from 'react-intl';

import { Alert, BodyShort, Button, HStack } from '@navikt/ds-react';
import { RadioGroupPanel, SelectField } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

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

export const finnYtelseTekst = (ytelseKode: string): string => {
  switch (ytelseKode) {
    case FagsakYtelseType.ENGANGSSTONAD:
      return 'Journal.Sak.Ytelse.Engangsstønad';
    case FagsakYtelseType.FORELDREPENGER:
      return 'Journal.Sak.Ytelse.Foreldrepenger';
    case FagsakYtelseType.SVANGERSKAPSPENGER:
      return 'Journal.Sak.Ytelse.Svangerskapspenger';
    default:
      return 'Journal.Sak.Ytelse.Ukjent';
  }
};

type YtelseSelectValg = {
  ytelse: string;
  beskrivelsekode: string;
};

type RadioOption = {
  label: ReactElement;
  value: string;
};

const ytelseSelectValg: YtelseSelectValg[] = [
  {
    ytelse: FagsakYtelseType.ENGANGSSTONAD,
    beskrivelsekode: finnYtelseTekst(FagsakYtelseType.ENGANGSSTONAD),
  },
  {
    ytelse: FagsakYtelseType.FORELDREPENGER,
    beskrivelsekode: finnYtelseTekst(FagsakYtelseType.FORELDREPENGER),
  },
  {
    ytelse: FagsakYtelseType.SVANGERSKAPSPENGER,
    beskrivelsekode: finnYtelseTekst(FagsakYtelseType.SVANGERSKAPSPENGER),
  },
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

const lagRadioOptions = (journalpost: Journalpost, intl: IntlShape, fetTekst: any): RadioOption[] => {
  const saker = journalpost.fagsaker || TOM_ARRAY;
  const radioOptions = saker.map(sak => ({
    label: (
      <FormattedMessage
        id="Journal.Sak.Beskrivelse"
        values={{
          b: fetTekst,
          saksnummer: sak.saksnummer,
          ytelse: intl.formatMessage({ id: finnYtelseTekst(sak.ytelseType) }),
        }}
      />
    ),
    disabled: sak.saksnummer === journalpost.eksisterendeSaksnummer,
    value: sak.saksnummer,
  }));
  radioOptions.push({ label: <FormattedMessage id="Journal.Sak.Ny" />, value: LAG_NY_SAK, disabled: false });
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
  const fetTekst = (chunks: any) => <b>{chunks}</b>;

  const formMethods = useFormContext<JournalføringFormValues>();
  const sakValg = formMethods.watch(radioFieldName);

  return (
    <>
      {!finnesSaker && erKlarForJournalføring && (
        <BodyShort>
          <FormattedMessage id="Journal.Sak.Ingen" />
        </BodyShort>
      )}
      {erEndeligJournalført(journalpost.tilstand) && (
        <>
          <VerticalSpacer eightPx />
          <Alert variant="info">
            <FormattedMessage id="Journalpost.Søk.Forklaring" />
          </Alert>
          <VerticalSpacer eightPx />
        </>
      )}
      <>
        <RadioGroupPanel
          disabled={!erKlarForJournalføring}
          name={radioFieldName}
          hideLegend
          label={intl.formatMessage({ id: 'ValgtOppgave.RelaterteSaker' })}
          validate={[required]}
          radios={lagRadioOptions(journalpost, intl, fetTekst)}
        />
        {sakValg === LAG_NY_SAK && (
          <>
            <VerticalSpacer eightPx />
            <SelectField
              className={styles.ytelseSelect}
              name={selectFieldName}
              validate={[required]}
              label={intl.formatMessage({ id: 'Journal.Sak.VelgYtelse' })}
              selectValues={ytelseSelectValg.map(valg => (
                <option key={valg.ytelse} value={valg.ytelse}>
                  <FormattedMessage id={valg.beskrivelsekode} />
                </option>
              ))}
            />
            <VerticalSpacer twentyPx />
          </>
        )}
        {sakValg === LAG_GENERELL_SAK && (
          <>
            <VerticalSpacer eightPx />
            <Alert variant="info">
              <FormattedMessage id="Journal.Sak.Generell.Info" />
            </Alert>
          </>
        )}
        <VerticalSpacer fourtyPx />
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
      </>
    </>
  );
};

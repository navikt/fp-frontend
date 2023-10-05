import React, { FunctionComponent, ReactElement, useCallback, useMemo } from 'react';
import { Alert, BodyShort, Button } from '@navikt/ds-react';
import { FlexColumn, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import { RadioGroupPanel, SelectField } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { fagsakYtelseType } from '@navikt/fp-kodeverk';
import { useFormContext } from 'react-hook-form';
import { JournalførSakSubmitValue } from '../../../typer/ferdigstillJournalføringSubmit';
import Journalpost from '../../../typer/journalpostTsType';
import JournalFagsak from '../../../typer/journalFagsakTsType';
import JournalføringFormValues from '../../../typer/journalføringFormValues';
import styles from './velgSakForm.module.css';
import Sakstype from '../../../kodeverk/sakstype';

const TOM_ARRAY: JournalFagsak[] = [];

const LAG_NY_SAK = 'LAG_NY_SAK'; // Value for en av radioknappene som skal lede til ekstra inputfelt
const LAG_GENERELL_SAK = 'LAG_GENERELL_SAK';
const radioFieldName = 'saksnummerValg';
const selectFieldName = 'ytelsetypeValg';

export const finnYtelseTekst = (ytelseKode: string): string => {
  switch (ytelseKode) {
    case fagsakYtelseType.ENGANGSSTONAD:
      return 'Journal.Sak.Ytelse.Engangsstønad';
    case fagsakYtelseType.FORELDREPENGER:
      return 'Journal.Sak.Ytelse.Foreldrepenger';
    case fagsakYtelseType.SVANGERSKAPSPENGER:
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
    ytelse: fagsakYtelseType.ENGANGSSTONAD,
    beskrivelsekode: finnYtelseTekst(fagsakYtelseType.ENGANGSSTONAD),
  },
  {
    ytelse: fagsakYtelseType.FORELDREPENGER,
    beskrivelsekode: finnYtelseTekst(fagsakYtelseType.FORELDREPENGER),
  },
  {
    ytelse: fagsakYtelseType.SVANGERSKAPSPENGER,
    beskrivelsekode: finnYtelseTekst(fagsakYtelseType.SVANGERSKAPSPENGER),
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

const lagRadioOptions = (saksliste: JournalFagsak[], intl: IntlShape, fetTekst: any): RadioOption[] => {
  const radioOptions = saksliste.map(sak => ({
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
    value: sak.saksnummer,
  }));
  radioOptions.push({ label: <FormattedMessage id="Journal.Sak.Ny" />, value: LAG_NY_SAK });
  radioOptions.push({ label: <FormattedMessage id="Journal.Sak.Generell" />, value: LAG_GENERELL_SAK });
  return radioOptions;
};

type OwnProps = Readonly<{
  journalpost: Journalpost;
  isSubmittable: boolean;
  avbrytVisningAvJournalpost: () => void;
  erKlarForJournalføring: boolean;
}>;

/**
 * VelgSakForm - Inneholder formen som lar saksbehandler velge en sak og journalføre dokumentet på, evt opprette ny sak.
 */
const VelgSakForm: FunctionComponent<OwnProps> = ({
  journalpost,
  isSubmittable,
  avbrytVisningAvJournalpost,
  erKlarForJournalføring,
}) => {
  const intl = useIntl();
  const saksliste = journalpost?.fagsaker || TOM_ARRAY;
  const finnesSaker = saksliste && saksliste.length > 0;
  const formMethods = useFormContext<JournalføringFormValues>();
  const sakValg = formMethods.watch(radioFieldName);
  const skalOppretteSak = sakValg === LAG_NY_SAK;
  const skalFørePåGenerellSak = sakValg === LAG_GENERELL_SAK;
  const fetTekst = useCallback((chunks: any) => <b>{chunks}</b>, []);
  const radioOptions = useMemo(() => lagRadioOptions(saksliste, intl, fetTekst), [saksliste]);

  return (
    <>
      {!finnesSaker && erKlarForJournalføring && (
        <BodyShort>
          <FormattedMessage id="Journal.Sak.Ingen" />
        </BodyShort>
      )}
      <>
        <FlexRow>
          <FlexColumn>
            <RadioGroupPanel
              disabled={!erKlarForJournalføring}
              name={radioFieldName}
              hideLegend
              label={intl.formatMessage({ id: 'ValgtOppgave.RelaterteSaker' })}
              validate={[required]}
              radios={radioOptions}
            />
          </FlexColumn>
        </FlexRow>
        {skalOppretteSak && (
          <>
            <VerticalSpacer eightPx />
            <FlexRow>
              <FlexColumn>
                <SelectField
                  name={selectFieldName}
                  validate={[required]}
                  label={intl.formatMessage({ id: 'Journal.Sak.VelgYtelse' })}
                  selectValues={ytelseSelectValg.map(valg => (
                    <option key={valg.ytelse} value={valg.ytelse}>
                      <FormattedMessage id={valg.beskrivelsekode} />
                    </option>
                  ))}
                />
              </FlexColumn>
            </FlexRow>
            <VerticalSpacer twentyPx />
          </>
        )}
        {skalFørePåGenerellSak && (
          <>
            <VerticalSpacer eightPx />
            <Alert variant="info">
              <FormattedMessage id="Journal.Sak.Generell.Info" />
            </Alert>
          </>
        )}
        <VerticalSpacer fourtyPx />
        <FlexRow className={styles.knappRad}>
          <FlexColumn>
            <Button size="small" variant="primary" disabled={!isSubmittable} type="submit">
              <FormattedMessage id="ValgtOppgave.Journalfør" />
            </Button>
          </FlexColumn>
          <FlexColumn>
            <Button
              size="small"
              variant="secondary"
              onClick={avbrytVisningAvJournalpost}
              disabled={false}
              type="button"
            >
              <FormattedMessage id="ValgtOppgave.Avbryt" />
            </Button>
          </FlexColumn>
        </FlexRow>
      </>
    </>
  );
};
export default VelgSakForm;

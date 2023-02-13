import React, {
  FunctionComponent, ReactElement, useCallback, useMemo,
} from 'react';
import { useForm } from 'react-hook-form';
import { BodyShort, Button } from '@navikt/ds-react';
import { FlexColumn, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import { Form, RadioGroupPanel, SelectField } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { fagsakYtelseType, fagsakStatus } from '@navikt/fp-kodeverk';
import dayjs from 'dayjs';
import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import JournalførSubmitValue from '../typer/ferdigstillJournalføringSubmit';
import OppgaveOversikt from '../typer/oppgaveOversiktTsType';
import VelgSakLenke from './VelgSakLenke';
import Journalpost from '../typer/journalpostTsType';
import JournalFagsak from '../typer/journalFagsakTsType';

const TOM_ARRAY = [];

const LAG_NY_SAK = 'LAG_NY_SAK'; // Value for en av radioknappene som skal lede til ekstra inputfelt
const radioFieldName = 'saksnummerValg';
const selectFieldName = 'ytelsetypeValg';

const finnStatusTekst = (statusKode: string): string => {
  switch (statusKode) {
    case fagsakStatus.AVSLUTTET:
      return 'Journal.Sak.Avsluttet';
    case fagsakStatus.LOPENDE:
      return 'Journal.Sak.Løpende';
    case fagsakStatus.OPPRETTET:
      return 'Journal.Sak.Opprettet';
    case fagsakStatus.UNDER_BEHANDLING:
      return 'Journal.Sak.UnderBehandling';
    default:
      return '';
  }
};

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
type FormValues = {
  saksnummerValg?: string;
  ytelseValg?: string;
};

type YtelseSelectValg = {
  ytelse: string;
  beskrivelsekode: string;
}

type RadioOption = {
  label: ReactElement;
  value: string;
}

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

const transformValues = (values: FormValues, journalpost: Journalpost, oppgave: OppgaveOversikt): JournalførSubmitValue => {
  const saksnummerValg = values[radioFieldName];
  if (saksnummerValg === LAG_NY_SAK) {
    return {
      journalpostId: journalpost.journalpostId,
      enhetId: oppgave.enhetId,
      opprettSak: {
        ytelseType: values[selectFieldName],
        aktørId: journalpost.bruker.aktørId,
      },
    };
  }
  return {
    journalpostId: journalpost.journalpostId,
    enhetId: oppgave.enhetId,
    saksnummer: saksnummerValg,
  };
};

const lagRadioOptions = (saksliste: JournalFagsak[], intl: IntlShape, fetTekst: any): RadioOption[] => {
  const radioOptions = saksliste.map((sak) => ({
    label: <FormattedMessage
      id="Journal.Sak.Beskrivelse"
      values={{
        b: fetTekst,
        saksnummer: sak.saksnummer,
        ytelse: intl.formatMessage({ id: finnYtelseTekst(sak.ytelseType) }),
        endret: dayjs(sak.sistEndret).format(DDMMYYYY_DATE_FORMAT),
        opprettet: dayjs(sak.datoOpprettet).format(DDMMYYYY_DATE_FORMAT),
        status: intl.formatMessage({ id: finnStatusTekst(sak.status) }),
      }}
    />,
    value: sak.saksnummer,
  }));
  radioOptions.push({ label: <FormattedMessage id="Journal.Sak.Ny" />, value: LAG_NY_SAK });
  return radioOptions;
};

type OwnProps = Readonly<{
  journalpost: Journalpost;
  oppgave: OppgaveOversikt;
  avbrytVisningAvJournalpost: () => void;
  submitJournalføring: (params: JournalførSubmitValue) => void;
}>;

/**
 * VelgSakForm - Inneholder formen som lar saksbehandler velge en sak og journalføre dokumentet på, evt opprette ny sak.
 */
const VelgSakForm: FunctionComponent<OwnProps> = ({
  journalpost,
  oppgave,
  avbrytVisningAvJournalpost,
  submitJournalføring,
}) => {
  const intl = useIntl();
  const saksliste = journalpost?.fagsaker || TOM_ARRAY;
  const finnesSaker = saksliste && saksliste.length > 0;
  const formMethods = useForm<FormValues>();
  const sakValg = formMethods.watch(radioFieldName);
  const skalOppretteSak = sakValg === LAG_NY_SAK;
  const fetTekst = useCallback((chunks: any) => (<b>{chunks}</b>), []);

  const submitJournal = useCallback((values: FormValues) => {
    submitJournalføring(transformValues(values, journalpost, oppgave));
  }, []);

  const radioOptions = useMemo(() => lagRadioOptions(saksliste, intl, fetTekst), [saksliste]);

  return (
    <Form<FormValues> formMethods={formMethods} onSubmit={submitJournal}>
      {!finnesSaker && (
        <BodyShort><FormattedMessage id="Journal.Sak.Ingen" /></BodyShort>
      )}
      <>
        <FlexRow>
          <FlexColumn>
            <RadioGroupPanel
              name={radioFieldName}
              hideLegend
              label={intl.formatMessage({ id: 'ValgtOppgave.RelaterteSaker' })}
              validate={[required]}
              radios={radioOptions}
            />
          </FlexColumn>
          <FlexColumn>
            {saksliste.map((sak) => (
              <VelgSakLenke saksnummer={sak.saksnummer} key={sak.saksnummer} />
            ))}
          </FlexColumn>
        </FlexRow>
        {skalOppretteSak
          && (
            <>
              <VerticalSpacer eightPx />
              <FlexRow>
                <FlexColumn>
                  <SelectField
                    name={selectFieldName}
                    validate={[required]}
                    label={intl.formatMessage({ id: 'Journal.Sak.VelgYtelse' })}
                    selectValues={ytelseSelectValg.map((valg) => (
                      <option
                        key={valg.ytelse}
                        value={valg.ytelse}
                      >
                        <FormattedMessage id={valg.beskrivelsekode} />
                      </option>
                    ))}
                  />
                </FlexColumn>
              </FlexRow>
              <VerticalSpacer twentyPx />
            </>
          )}
        <VerticalSpacer eightPx />
        <FlexRow>
          <FlexColumn>
            <Button
              size="small"
              variant="primary"
              disabled={!formMethods.formState.isDirty}
              type="submit"
            >
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
    </Form>
  );
};
export default VelgSakForm;

import React, { FunctionComponent, useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { useForm } from 'react-hook-form';
import { Button, Heading, BodyLong, Alert, Tag } from '@navikt/ds-react';

import { FlexColumn, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { Form } from '@navikt/ft-form-hooks';
import { NavAnsatt } from '@navikt/fp-types';
import VelgSakForm, { transformValues as transformValuesSak } from './innhold/VelgSakForm';
import Journalpost from '../../typer/journalpostTsType';
import JournalførSubmitValue, {
  DokumentTittelSubmitValue,
  OppdaterJournalførTittlerSubmitValue,
} from '../../typer/ferdigstillJournalføringSubmit';
import OppgaveOversikt from '../../typer/oppgaveOversiktTsType';
import SakDetaljer from './innhold/SakDetaljer';
import DokumentForm, {
  transformValues as transformValuesFlereDokumenter,
  buildInitialValues as buildInitialValuesFlereDokumenter,
} from './innhold/DokumentForm';
import BrukerAvsenderPanel from './innhold/BrukerAvsenderPanel';
import JournalføringFormValues from '../../typer/journalføringFormValues';
import OppdaterMedBruker from '../../typer/oppdaterBrukerTsType';
import JournalpostTittelForm from './innhold/JournalpostTittelForm';
import ForhåndsvisBrukerRespons from '../../typer/forhåndsvisBrukerResponsTsType';
import ReserverOppgaveType from '../../typer/reserverOppgaveType';

const dokumentTittelSkalStyresAvJournalpost = (jp: Journalpost): boolean => jp.dokumenter?.length === 1;

const buildInitialValues = (journalpost: Journalpost): JournalføringFormValues => {
  const docs = journalpost.dokumenter || [];
  return {
    saksnummerValg: undefined,
    ytelsetypeValg: undefined,
    journalpostTittel: journalpost.tittel,
    journalpostDokumenter: dokumentTittelSkalStyresAvJournalpost(journalpost)
      ? [{ dokumentId: docs[0].dokumentId, tittel: journalpost.tittel }]
      : buildInitialValuesFlereDokumenter(docs),
  };
};

const transformValuesEttDokument = (journalpost: Journalpost, tittel: string): DokumentTittelSubmitValue[] => {
  const dokumentId = journalpost.dokumenter?.at(0)?.dokumentId;
  if (!dokumentId) {
    throw new Error(`Finner ingen dokumenter på journalpost ${journalpost.journalpostId}`);
  }
  return [
    {
      dokumentId,
      tittel,
    },
  ];
};

const transformTittelValues = (
  values: JournalføringFormValues,
  journalpost: Journalpost,
): OppdaterJournalførTittlerSubmitValue | undefined => {
  const nyJournalpostTittel = journalpost.tittel !== values.journalpostTittel ? values.journalpostTittel : undefined;
  const endredeDokumenter =
    nyJournalpostTittel && dokumentTittelSkalStyresAvJournalpost(journalpost)
      ? transformValuesEttDokument(journalpost, nyJournalpostTittel)
      : transformValuesFlereDokumenter(values, journalpost.dokumenter || []);
  if (nyJournalpostTittel || endredeDokumenter.length > 0) {
    return {
      journalpostTittel: nyJournalpostTittel,
      dokumenter: endredeDokumenter,
    };
  }
  return undefined;
};

const transformValues = (
  values: JournalføringFormValues,
  journalpost: Journalpost,
  oppgave: OppgaveOversikt,
): JournalførSubmitValue => {
  if (!oppgave.enhetId) {
    throw Error('Kan ikke journalføre uten at enhet er satt');
  }
  return {
    journalpostId: journalpost.journalpostId,
    enhetId: oppgave.enhetId,
    oppgaveId: oppgave.id,
    oppdaterTitlerDto: transformTittelValues(values, journalpost),
    ...transformValuesSak(values, journalpost),
  };
};

type OwnProps = Readonly<{
  journalpost: Journalpost;
  oppgave: OppgaveOversikt;
  avbrytVisningAvJournalpost: () => void;
  submitJournalføring: (params: JournalførSubmitValue) => void;
  knyttJournalpostTilBruker: (params: OppdaterMedBruker) => void;
  forhåndsvisBruker: (fnr: string) => void;
  brukerTilForhåndsvisning?: ForhåndsvisBrukerRespons;
  lasterBruker: boolean;
  navAnsatt: NavAnsatt;
  reserverOppgave: (data: ReserverOppgaveType) => void;
}>;

/**
 * JournalpostDetaljer - Viser detaljer om valgt journalpost
 */
const JournalpostDetaljer: FunctionComponent<OwnProps> = ({
  journalpost,
  oppgave,
  avbrytVisningAvJournalpost,
  submitJournalføring,
  knyttJournalpostTilBruker,
  forhåndsvisBruker,
  brukerTilForhåndsvisning,
  lasterBruker,
  reserverOppgave,
  navAnsatt,
}) => {
  const skalKunneEndreSøker = !journalpost.bruker;
  const saker = journalpost.fagsaker || [];
  const formMethods = useForm<JournalføringFormValues>({
    defaultValues: buildInitialValues(journalpost),
  });
  const submitJournal = useCallback((values: JournalføringFormValues) => {
    submitJournalføring(transformValues(values, journalpost, oppgave));
  }, []);

  const isSubmittable = formMethods.formState.isDirty;

  const reserverOppgaveAction = useCallback(() => {
    reserverOppgave({
      oppgaveId: oppgave.id.toString(),
      versjon: oppgave.versjon,
      reserverFor: !oppgave.reservertAv ? navAnsatt.brukernavn : '',
    });
  }, []);

  return (
    <Form<JournalføringFormValues> formMethods={formMethods} onSubmit={submitJournal}>
      <JournalpostTittelForm journalpost={journalpost} />
      <VerticalSpacer eightPx />
      {oppgave.reservertAv && navAnsatt.brukernavn === oppgave.reservertAv && (
        <FlexRow>
          <FlexColumn>
            <BodyLong>
              <FormattedMessage id="Oppgavetabell.SakenErTattAv" />
              <Tag variant="info-moderate">
                <FormattedMessage id="Oppgavetabell.Meg" />
              </Tag>
              <Button variant="tertiary" size="small" onClick={reserverOppgaveAction}>
                <FormattedMessage id="Oppgavetabell.FjernMeg" />
              </Button>
            </BodyLong>
          </FlexColumn>
        </FlexRow>
      )}
      {oppgave.reservertAv && navAnsatt.brukernavn !== oppgave.reservertAv && (
        <FlexRow>
          <FlexColumn>
            <BodyLong>
              <FormattedMessage id="Oppgavetabell.SakenErTattAv" />
              <Tag variant="neutral-moderate">{oppgave.reservertAv}</Tag>
            </BodyLong>
          </FlexColumn>
        </FlexRow>
      )}
      {!oppgave.reservertAv && (
        <FlexRow>
          <FlexColumn>
            <BodyLong>
              <Button variant="tertiary" size="small" onClick={reserverOppgaveAction}>
                <FormattedMessage id="Oppgavetabell.SettPåMeg" />
              </Button>
            </BodyLong>
          </FlexColumn>
        </FlexRow>
      )}
      <VerticalSpacer sixteenPx />
      <BrukerAvsenderPanel
        journalpost={journalpost}
        hentForhåndsvisningAvSøker={forhåndsvisBruker}
        skalKunneEndreSøker={skalKunneEndreSøker}
        lasterBruker={lasterBruker}
        brukerTilForhåndsvisning={brukerTilForhåndsvisning}
        knyttSøkerTilJournalpost={knyttJournalpostTilBruker}
      />
      <VerticalSpacer twentyPx />
      {oppgave.beskrivelse && (
        <>
          <FlexRow>
            <FlexColumn>
              <Heading size="small">
                <FormattedMessage id="ValgtOppgave.Notat" />
              </Heading>
            </FlexColumn>
          </FlexRow>
          <FlexRow>
            <FlexColumn>
              <BodyLong>{oppgave.beskrivelse}</BodyLong>
            </FlexColumn>
          </FlexRow>
          <VerticalSpacer twentyPx />
        </>
      )}
      <VerticalSpacer sixteenPx />
      <FlexRow>
        <FlexColumn>
          <Heading size="small">
            <FormattedMessage id="ValgtOppgave.Dokumenter" />
          </Heading>
        </FlexColumn>
      </FlexRow>
      {journalpost.dokumenter && (
        <>
          <VerticalSpacer eightPx />
          <DokumentForm
            journalpost={journalpost}
            dokumentTittelStyresAvJournalpostTittel={dokumentTittelSkalStyresAvJournalpost(journalpost)}
          />
          <VerticalSpacer thirtyTwoPx />
        </>
      )}
      <FlexRow>
        <FlexColumn>
          <Heading size="small">
            <FormattedMessage id="ValgtOppgave.RelaterteSaker" />
          </Heading>
        </FlexColumn>
      </FlexRow>
      <VerticalSpacer eightPx />
      {skalKunneEndreSøker && (
        <Alert variant="info">
          <FormattedMessage id="ValgtOppgave.RelaterteSaker.ManglerSøker" />
        </Alert>
      )}
      {saker.map(sak => (
        <SakDetaljer sak={sak} key={sak.saksnummer} />
      ))}
      <VerticalSpacer thirtyTwoPx />
      <FlexRow>
        <FlexColumn>
          <Heading size="small">
            <FormattedMessage id="ValgtOppgave.KnyttTilSak" />
          </Heading>
        </FlexColumn>
      </FlexRow>
      <VerticalSpacer eightPx />
      <VelgSakForm
        isSubmittable={isSubmittable}
        journalpost={journalpost}
        avbrytVisningAvJournalpost={avbrytVisningAvJournalpost}
        erKlarForJournalføring={!skalKunneEndreSøker}
      />
    </Form>
  );
};
export default JournalpostDetaljer;

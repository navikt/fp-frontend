import React, { FunctionComponent, useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { useForm } from 'react-hook-form';
import { Alert, BodyLong, Heading, VStack } from '@navikt/ds-react';

import { Form } from '@navikt/ft-form-hooks';
import { NavAnsatt } from '@navikt/fp-types';
import VelgSakForm, { transformValues as transformValuesSak } from './innhold/VelgSakForm';
import Journalpost from '../../typer/journalpostTsType';
import JournalførSubmitValue, {
  DokumentTittelSubmitValue,
  OppdaterJournalførTittlerSubmitValue,
} from '../../typer/ferdigstillJournalføringSubmit';
import Oppgave from '../../typer/oppgaveTsType';
import SakDetaljer from './innhold/SakDetaljer';
import DokumentForm, {
  buildInitialValues as buildInitialValuesFlereDokumenter,
  transformValues as transformValuesFlereDokumenter,
} from './innhold/DokumentForm';
import BrukerAvsenderPanel from './innhold/BrukerAvsenderPanel';
import JournalføringFormValues from '../../typer/journalføringFormValues';
import OppdaterMedBruker from '../../typer/oppdaterBrukerTsType';
import JournalpostTittelForm from './innhold/JournalpostTittelForm';
import ForhåndsvisBrukerRespons from '../../typer/forhåndsvisBrukerResponsTsType';
import ReserverOppgaveType from '../../typer/reserverOppgaveType';
import OppgaveKilde from '../../kodeverk/oppgaveKilde';
import Reservasjonspanel from './innhold/Reservasjonspanel';
import { erEndeligJournalført } from '../../kodeverk/journalpostTilstand';
import JournalFagsak from '../../typer/journalFagsakTsType';

const dokumentTittelSkalStyresAvJournalpost = (jp: Journalpost): boolean => jp.dokumenter?.length === 1;

const finnSakMedSaksnummer = (saksnummer: string, saker: JournalFagsak[]): JournalFagsak => {
  const match = saker.find(sak => sak.saksnummer === saksnummer);
  if (!match) {
    throw new Error(`Finner ikke sak med saksnummer ${saksnummer} i listen over journalpostens saker`);
  }
  return match;
};

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
  enhet?: string,
): JournalførSubmitValue => {
  if (!enhet) {
    throw Error('Kan ikke journalføre uten at enhet er satt');
  }
  return {
    journalpostId: journalpost.journalpostId,
    enhetId: enhet,
    oppdaterTitlerDto: transformTittelValues(values, journalpost),
    ...transformValuesSak(values, journalpost),
  };
};

type OwnProps = Readonly<{
  journalpost: Journalpost;
  oppgave?: Oppgave;
  avbrytVisningAvJournalpost: () => void;
  submitJournalføring: (params: JournalførSubmitValue, erAlleredeJournalført: boolean) => void;
  knyttJournalpostTilBruker: (params: OppdaterMedBruker) => void;
  forhåndsvisBruker: (fnr: string) => void;
  brukerTilForhåndsvisning?: ForhåndsvisBrukerRespons;
  lasterBruker: boolean;
  navAnsatt: NavAnsatt;
  reserverOppgave: (data: ReserverOppgaveType) => void;
  flyttTilGosys: (data: string) => void;
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
  flyttTilGosys,
}) => {
  const skalKunneEndreSøker = !journalpost.bruker;
  const erLokalOppgave: boolean = oppgave?.kilde === OppgaveKilde.LOKAL;
  const skalBareKunneEndreSak = erEndeligJournalført(journalpost.tilstand);

  const saker = journalpost.fagsaker || [];
  const formMethods = useForm<JournalføringFormValues>({
    defaultValues: buildInitialValues(journalpost),
  });
  const submitJournal = useCallback((values: JournalføringFormValues) => {
    if (erEndeligJournalført(journalpost.tilstand)) {
      submitJournalføring(transformValues(values, journalpost, journalpost.journalførendeEnhet), true);
    } else {
      if (!oppgave) {
        throw new Error('Prøver å journalføre en journalpost uten oppgave, ugyldig tilstand!');
      }
      submitJournalføring(transformValues(values, journalpost, oppgave.enhetId), false);
    }
  }, []);

  const isSubmittable = formMethods.formState.isDirty;

  return (
    <Form<JournalføringFormValues> formMethods={formMethods} onSubmit={submitJournal}>
      <VStack gap="5">
        <JournalpostTittelForm journalpost={journalpost} readOnly={skalBareKunneEndreSak} />
        {oppgave && <Reservasjonspanel oppgave={oppgave} reserverOppgave={reserverOppgave} navAnsatt={navAnsatt} />}
        <BrukerAvsenderPanel
          journalpost={journalpost}
          hentForhåndsvisningAvSøker={forhåndsvisBruker}
          skalKunneEndreSøker={skalKunneEndreSøker}
          lasterBruker={lasterBruker}
          brukerTilForhåndsvisning={brukerTilForhåndsvisning}
          knyttSøkerTilJournalpost={knyttJournalpostTilBruker}
        />
        {oppgave?.beskrivelse && (
          <>
            <Heading size="small">
              <FormattedMessage id="ValgtOppgave.Notat" />
            </Heading>
            <BodyLong>{oppgave.beskrivelse}</BodyLong>
          </>
        )}
        <div>
          <Heading size="small">
            <FormattedMessage id="ValgtOppgave.Dokumenter" />
          </Heading>
          {journalpost.dokumenter && (
            <DokumentForm
              journalpost={journalpost}
              dokumentTittelStyresAvJournalpostTittel={dokumentTittelSkalStyresAvJournalpost(journalpost)}
            />
          )}
        </div>
        {journalpost.eksisterendeSaksnummer && (
          <div>
            <Heading size="small">
              <FormattedMessage id="ValgtOppgave.TilknyttetSak" />
            </Heading>
            <SakDetaljer
              sak={finnSakMedSaksnummer(journalpost.eksisterendeSaksnummer, saker)}
              key={journalpost.eksisterendeSaksnummer}
            />
          </div>
        )}
        <div>
          <Heading size="small">
            <FormattedMessage id="ValgtOppgave.RelaterteSaker" />
          </Heading>
          {skalKunneEndreSøker && (
            <Alert variant="info">
              <FormattedMessage id="ValgtOppgave.RelaterteSaker.ManglerSøker" />
            </Alert>
          )}
          {saker
            .filter(sak => sak.saksnummer !== journalpost.eksisterendeSaksnummer)
            .map(sak => (
              <SakDetaljer sak={sak} key={sak.saksnummer} />
            ))}
        </div>
        <div>
          <Heading size="small">
            <FormattedMessage id={skalBareKunneEndreSak ? 'Journal.Sak.AnnenSak' : 'ValgtOppgave.KnyttTilSak'} />
          </Heading>
          <VelgSakForm
            isSubmittable={isSubmittable}
            journalpost={journalpost}
            avbrytVisningAvJournalpost={avbrytVisningAvJournalpost}
            erKlarForJournalføring={!skalKunneEndreSøker}
            erLokalOppgave={erLokalOppgave}
            flyttTilGosys={flyttTilGosys}
          />
        </div>
      </VStack>
    </Form>
  );
};
export default JournalpostDetaljer;

import React, { FunctionComponent } from 'react';
import { FormattedMessage, RawIntlProvider } from 'react-intl';
import { createIntl } from '@navikt/ft-utils';

import { NavAnsatt } from '@fpsak-frontend/types';
import { Heading } from '@navikt/ds-react';
import messages from '../i18n/nb_NO.json';
import JournalforingPanel from './components/JournalforingPanel';
import OppgaveIndex from './components/OppgaveIndex';
import OppgaveOversikt from './typer/oppgaveOversiktTsType';
import OppgavePrioritet from './kodeverk/oppgavePrioritet';

const intl = createIntl(messages);

interface OwnProps {
  valgtAvdelingEnhet?: string;
  navAnsatt: NavAnsatt;
  behandlendeEnheter?: any;
}

// Tulledata
const oppgaver = [
  {
    id: 600,
    journalpostId: '12345125',
    aktørId: '9996923456799',
    fødselsnummer: '11119047182',
    opprettetDato: '2022-01-01',
    frist: '2022-02-01',
    ytelseType: 'FP',
    journalpostHarMangler: false,
    prioritet: OppgavePrioritet.NORM,
    beskrivelse: 'Inntektsmelding',
  },
  {
    id: 700,
    journalpostId: '245745871',
    aktørId: '274572457624',
    fødselsnummer: '12018847182',
    opprettetDato: '2022-01-01',
    frist: '2022-03-01',
    ytelseType: 'SVP',
    journalpostHarMangler: false,
    prioritet: OppgavePrioritet.NORM,
    beskrivelse: 'Inntektsmelding',
  },
  {
    id: 800,
    journalpostId: '345681257',
    opprettetDato: '2022-01-01',
    frist: '2022-01-01',
    ytelseType: 'FP',
    journalpostHarMangler: true,
    prioritet: OppgavePrioritet.HØY,
    beskrivelse: 'Søknad',
  },
] as OppgaveOversikt[];

/**
 * SaksbehandlerIndex
 */
const JournalforingIndex: FunctionComponent<OwnProps> = ({
  navAnsatt,
}) => {
  if (!navAnsatt) {
    return null;
  }
  return (
    <RawIntlProvider value={intl}>
      <JournalforingPanel>
        <Heading size="medium">
          <FormattedMessage id="Journalforing.Tittel" />
        </Heading>
        <OppgaveIndex oppgaver={oppgaver} />
      </JournalforingPanel>
    </RawIntlProvider>
  );
};

export default JournalforingIndex;

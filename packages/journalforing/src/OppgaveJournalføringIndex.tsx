import React, {
  FunctionComponent, useEffect, useState, useCallback,
} from 'react';
import { FormattedMessage, RawIntlProvider } from 'react-intl';
import { createIntl } from '@navikt/ft-utils';
import {
  Heading, Link, Checkbox, CheckboxGroup,
} from '@navikt/ds-react';
import { Back } from '@navikt/ds-icons';
import { NavAnsatt } from '@navikt/fp-types';
import {
  FlexColumn, FlexContainer, FlexRow, LoadingPanel, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import { RestApiState, useRestApiErrorDispatcher } from '@navikt/fp-rest-api-hooks';
import messages from '../i18n/nb_NO.json';
import JournalforingPanel from './components/JournalforingPanel';
import JournalføringIndex from './components/JournalføringIndex';
import { RestApiPathsKeys, restApiHooks, requestApi } from './data/fpfordelRestApi';
import OppgaveOversikt from './typer/oppgaveOversiktTsType';
import styles from './oppgaveJournalføringIndex.module.css';

const intl = createIntl(messages);
const TOM_ARRAY: OppgaveOversikt[] = [];

const tilatteBrukere = ['H137440', 'A138225', 'J116396', 'W119202', 'S148979', 'R107802'];

// Mildertidig intill tilganger er avklart og testing er ferdig
const harTilgangTilÅBrukeJournalføring = (navAnsatt: NavAnsatt): boolean => {
  const url = window.location.href;
  const erProd = url.includes('fpsak.intern.nav.no');
  if (!erProd) {
    return true;
  }
  return tilatteBrukere.includes(navAnsatt.brukernavn);
};

interface OwnProps {
  navAnsatt: NavAnsatt;
}

/**
 * JournalforingIndex - Toppkomponent, orkestrerer restkall for journalføring
 */
const JournalforingIndex: FunctionComponent<OwnProps> = ({
  navAnsatt,
}) => {
  const [valgtOppgave, setValgtOppgave] = useState<OppgaveOversikt | undefined>(undefined);
  const [filtrerVekkOppgaver, setFiltrerVekkOppgaver] = useState<boolean>(false);
  const avbryt = useCallback(() => {
    setValgtOppgave(undefined);
  }, [valgtOppgave]);
  const {
    startRequest: innhentAlleOppgaver,
    data: alleOppgaver = TOM_ARRAY,
    state: status,
  } = restApiHooks.useRestApiRunner(RestApiPathsKeys.ALLE_JOURNAL_OPPGAVER);
  const { addErrorMessage } = useRestApiErrorDispatcher();
  requestApi.setAddErrorMessageHandler(addErrorMessage);

  useEffect(() => {
    if (harTilgangTilÅBrukeJournalføring(navAnsatt)) {
      innhentAlleOppgaver({ ident: navAnsatt?.brukernavn });
    }
  }, []);

  if (status === RestApiState.NOT_STARTED || status === RestApiState.LOADING) {
    return <LoadingPanel />;
  }
  if (!navAnsatt || !harTilgangTilÅBrukeJournalføring(navAnsatt)) {
    return (
      <Heading size="medium">
        <FormattedMessage id="Journalforing.Tilgang" />
      </Heading>
    );
  }
  if (status !== RestApiState.SUCCESS) {
    return null;
  }

  const filtrerOppgaveliste = (valg: boolean[]) => {
    if (valg.length < 1) {
      setFiltrerVekkOppgaver(false);
    } else {
      setFiltrerVekkOppgaver(valg[0]);
    }
  };

  return (
    <RawIntlProvider value={intl}>
      <div className={styles.header}>
        {valgtOppgave
          && (
            <Link onClick={avbryt} className={styles.link}>
              <Back />
              <FormattedMessage id="Journalforing.Oversikt" />
            </Link>
          )}
        <VerticalSpacer eightPx />
        <FlexContainer>
          <FlexRow>
            <FlexColumn className={styles.tittelKol}>
              <Heading size="medium">
                <FormattedMessage id="Journalforing.Tittel" />
              </Heading>
            </FlexColumn>
            <FlexColumn className={styles.avhukingKol}>
              <CheckboxGroup
                hideLegend
                defaultChecked={false}
                legend={<FormattedMessage id="Oppgavetabell.Filtrer" />}
                onChange={filtrerOppgaveliste}
              >
                <Checkbox value><FormattedMessage id="Oppgavetabell.Filtrer" /></Checkbox>
              </CheckboxGroup>
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
      </div>
      <JournalforingPanel>
        <JournalføringIndex
          valgtOppgave={valgtOppgave}
          oppgaver={alleOppgaver}
          skjulUløseligeOppgaver={filtrerVekkOppgaver}
          innhentAlleOppgaver={innhentAlleOppgaver}
          navAnsatt={navAnsatt}
          setValgtOppgave={setValgtOppgave}
          avbrytVisningAvJournalpost={avbryt}
        />
      </JournalforingPanel>
    </RawIntlProvider>
  );
};

export default JournalforingIndex;

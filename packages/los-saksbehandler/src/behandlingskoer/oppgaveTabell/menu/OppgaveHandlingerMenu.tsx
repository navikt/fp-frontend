import React from 'react';
import { FlyttReservasjonModal, Oppgave, OppgaveReservasjonEndringDatoModal } from '@navikt/fp-los-felles';
import { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { restApiHooks, RestApiPathsKeys } from '../../../data/fplosSaksbehandlerRestApi';
import { OppgaveReservasjonForlengetModal } from './forleng/OppgaveReservasjonForlengetModal';

import {
  ArrowUndoIcon,
  CalendarIcon,
  HourglassTopFilledIcon,
  MenuElipsisVerticalCircleIcon,
  PersonHeadsetIcon,
} from '@navikt/aksel-icons';
import { ActionMenu, Button } from '@navikt/ds-react';
import styles from './oppgaveHandlingerMenu.module.css';
import { OpphevReservasjonModal } from './OpphevReservasjonModal';

interface Props {
  oppgave: Oppgave;
  hentReserverteOppgaver: (params?: void, keepData?: boolean) => void;
  setEnableTableEvents: (shouldDisable: boolean) => void;
}

export const OppgaveHandlingerMenu = ({ oppgave, hentReserverteOppgaver, setEnableTableEvents }: Props) => {
  const intl = useIntl();

  const [showOpphevReservasjonModal, setOpphevReservasjonModal] = useState(false);
  const [showForlengetReservasjonModal, setForlengetReservasjonModal] = useState(false);
  const [showReservasjonEndringDatoModal, setReservasjonEndringDatoModal] = useState(false);
  const [showFlyttReservasjonModal, setFlyttReservasjonModal] = useState(false);

  const { startRequest: endreOppgavereservasjon } = restApiHooks.useRestApiRunner(
    RestApiPathsKeys.ENDRE_OPPGAVERESERVASJON,
  );

  const { startRequest: flyttOppgavereservasjon } = restApiHooks.useRestApiRunner(RestApiPathsKeys.FLYTT_RESERVASJON);

  const {
    startRequest: hentSaksbehandler,
    state: hentSaksbehandlerState,
    data: saksbehandler,
    resetRequestData: resetHentSaksbehandler,
  } = restApiHooks.useRestApiRunner(RestApiPathsKeys.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK);

  const { startRequest: forlengOppgavereservasjon } = restApiHooks.useRestApiRunner(
    RestApiPathsKeys.FORLENG_OPPGAVERESERVASJON,
  );

  const forlengReserverasjon = () => {
    forlengOppgavereservasjon({ oppgaveId: oppgave.id }).then(() => {
      setForlengetReservasjonModal(true);
      hentReserverteOppgaver(undefined, true);
    });
  };

  return (
    <>
      <ActionMenu onOpenChange={open => setEnableTableEvents(!open)}>
        <ActionMenu.Trigger>
          <Button
            variant="tertiary-neutral"
            icon={
              <MenuElipsisVerticalCircleIcon
                className={styles.image}
                title={intl.formatMessage({ id: 'OppgaverTabell.OppgaveHandlinger' })}
              />
            }
            size="small"
          />
        </ActionMenu.Trigger>
        <ActionMenu.Content>
          <ActionMenu.Group aria-label={intl.formatMessage({ id: 'OppgaveHandlingerMenu.Meny' })}>
            <ActionMenu.Item onSelect={() => setOpphevReservasjonModal(true)} icon={<ArrowUndoIcon aria-hidden />}>
              <FormattedMessage id="OppgaveHandlingerMenu.LeggTilbake" values={{ br: <br /> }} />
            </ActionMenu.Item>
            <ActionMenu.Item onSelect={forlengReserverasjon} icon={<HourglassTopFilledIcon aria-hidden />}>
              <FormattedMessage id="OppgaveHandlingerMenu.ForlengReservasjon" values={{ br: <br /> }} />
            </ActionMenu.Item>
            <ActionMenu.Item onSelect={() => setReservasjonEndringDatoModal(true)} icon={<CalendarIcon aria-hidden />}>
              <FormattedMessage id="OppgaveHandlingerMenu.EndreReservasjon" />
            </ActionMenu.Item>
            <ActionMenu.Item onSelect={() => setFlyttReservasjonModal(true)} icon={<PersonHeadsetIcon aria-hidden />}>
              <FormattedMessage id="OppgaveHandlingerMenu.FlyttReservasjon" values={{ br: <br /> }} />
            </ActionMenu.Item>
          </ActionMenu.Group>
        </ActionMenu.Content>
      </ActionMenu>
      {showOpphevReservasjonModal && (
        <OpphevReservasjonModal
          oppgave={oppgave}
          closeModal={() => setOpphevReservasjonModal(false)}
          hentReserverteOppgaver={hentReserverteOppgaver}
        />
      )}
      {showReservasjonEndringDatoModal && (
        <OppgaveReservasjonEndringDatoModal
          closeModal={() => setReservasjonEndringDatoModal(false)}
          reserverTilDefault={oppgave.status.reservertTilTidspunkt}
          oppgaveId={oppgave.id}
          hentReserverteOppgaver={hentReserverteOppgaver}
          endreReserverasjonState={() => setForlengetReservasjonModal(true)}
          endreOppgavereservasjon={endreOppgavereservasjon}
        />
      )}
      {showForlengetReservasjonModal && (
        <OppgaveReservasjonForlengetModal oppgave={oppgave} closeModal={() => setForlengetReservasjonModal(false)} />
      )}
      {showFlyttReservasjonModal && (
        <FlyttReservasjonModal
          oppgaveId={oppgave.id}
          flyttetBegrunnelse={oppgave.status.flyttetReservasjon?.begrunnelse}
          closeModal={() => setFlyttReservasjonModal(false)}
          hentReserverteOppgaver={hentReserverteOppgaver}
          flyttOppgavereservasjon={flyttOppgavereservasjon}
          hentSaksbehandler={hentSaksbehandler}
          hentSaksbehandlerState={hentSaksbehandlerState}
          saksbehandler={saksbehandler}
          resetHentSaksbehandler={resetHentSaksbehandler}
        />
      )}
    </>
  );
};

import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import {
  ArrowUndoIcon,
  CalendarIcon,
  HourglassTopFilledIcon,
  MenuElipsisVerticalCircleIcon,
  PersonHeadsetIcon,
} from '@navikt/aksel-icons';
import { ActionMenu, Button } from '@navikt/ds-react';

import { FlyttReservasjonModal, Oppgave, OppgaveReservasjonEndringDatoModal } from '@navikt/fp-los-felles';

import { restApiHooks, RestApiPathsKeys } from '../../../data/fplosSaksbehandlerRestApi';
import { OppgaveReservasjonForlengetModal } from './forleng/OppgaveReservasjonForlengetModal';
import { OpphevReservasjonModal } from './OpphevReservasjonModal';

import styles from './oppgaveHandlingerMenu.module.css';

interface Props {
  oppgave: Oppgave;
  hentReserverteOppgaver: (params?: void, keepData?: boolean) => void;
  setEnableTableEvents: (shouldDisable: boolean) => void;
}

export const OppgaveHandlingerMenu = ({ oppgave, hentReserverteOppgaver, setEnableTableEvents }: Props) => {
  const intl = useIntl();

  const [visOpphevReservasjonModal, setVisOpphevReservasjonModal] = useState(false);
  const [visForlengetReservasjonModal, setVisForlengetReservasjonModal] = useState(false);
  const [visReservasjonEndringDatoModal, setVisReservasjonEndringDatoModal] = useState(false);
  const [visFlyttReservasjonModal, setVisFlyttReservasjonModal] = useState(false);

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
      setVisForlengetReservasjonModal(true);
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
            <ActionMenu.Item onSelect={() => setVisOpphevReservasjonModal(true)} icon={<ArrowUndoIcon aria-hidden />}>
              <FormattedMessage id="OppgaveHandlingerMenu.LeggTilbake" values={{ br: <br /> }} />
            </ActionMenu.Item>
            <ActionMenu.Item onSelect={forlengReserverasjon} icon={<HourglassTopFilledIcon aria-hidden />}>
              <FormattedMessage id="OppgaveHandlingerMenu.ForlengReservasjon" values={{ br: <br /> }} />
            </ActionMenu.Item>
            <ActionMenu.Item
              onSelect={() => setVisReservasjonEndringDatoModal(true)}
              icon={<CalendarIcon aria-hidden />}
            >
              <FormattedMessage id="OppgaveHandlingerMenu.EndreReservasjon" />
            </ActionMenu.Item>
            <ActionMenu.Item
              onSelect={() => setVisFlyttReservasjonModal(true)}
              icon={<PersonHeadsetIcon aria-hidden />}
            >
              <FormattedMessage id="OppgaveHandlingerMenu.FlyttReservasjon" values={{ br: <br /> }} />
            </ActionMenu.Item>
          </ActionMenu.Group>
        </ActionMenu.Content>
      </ActionMenu>
      {visOpphevReservasjonModal && (
        <OpphevReservasjonModal
          oppgave={oppgave}
          closeModal={() => setVisOpphevReservasjonModal(false)}
          hentReserverteOppgaver={hentReserverteOppgaver}
        />
      )}
      {visReservasjonEndringDatoModal && (
        <OppgaveReservasjonEndringDatoModal
          closeModal={() => setVisReservasjonEndringDatoModal(false)}
          reserverTilDefault={oppgave.status.reservertTilTidspunkt}
          oppgaveId={oppgave.id}
          hentReserverteOppgaver={hentReserverteOppgaver}
          endreReserverasjonState={() => setVisForlengetReservasjonModal(true)}
          endreOppgavereservasjon={endreOppgavereservasjon}
        />
      )}
      {visForlengetReservasjonModal && (
        <OppgaveReservasjonForlengetModal oppgave={oppgave} closeModal={() => setVisForlengetReservasjonModal(false)} />
      )}
      {visFlyttReservasjonModal && (
        <FlyttReservasjonModal
          oppgaveId={oppgave.id}
          flyttetBegrunnelse={oppgave.status.flyttetReservasjon?.begrunnelse}
          closeModal={() => setVisFlyttReservasjonModal(false)}
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

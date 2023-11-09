import React, { FunctionComponent, useCallback } from 'react';
import { BodyLong, Tag, Button, HStack } from '@navikt/ds-react';
import { FormattedMessage } from 'react-intl';
import { NavAnsatt } from '@navikt/fp-types';
import ReserverOppgaveType from '../../../typer/reserverOppgaveType';

import Oppgave from '../../../typer/oppgaveTsType';

type OwnProps = Readonly<{
  oppgave: Oppgave;
  navAnsatt: NavAnsatt;
  reserverOppgave: (data: ReserverOppgaveType) => void;
}>;

/**
 * Reservasjonspanel - Inneholder informasjon om hvem som har reservert saken og mulighet for å reservere saken på saksbehandler
 */
const Reservasjonspanel: FunctionComponent<OwnProps> = ({ oppgave, reserverOppgave, navAnsatt }) => {
  const reserverOppgaveAction = useCallback(() => {
    if (!oppgave) {
      throw new Error('Prøver å reservere uten å ha valgt oppgave, ugyldig tilstand.');
    }
    const reservasjonFor = !oppgave?.reservertAv ? navAnsatt.brukernavn : '';
    reserverOppgave({
      journalpostId: oppgave.journalpostId,
      reserverFor: reservasjonFor,
    });
  }, [reserverOppgave]);

  return (
    <div>
      {oppgave.reservertAv && navAnsatt.brukernavn === oppgave?.reservertAv && (
        <HStack>
          <BodyLong>
            <FormattedMessage id="Oppgavetabell.SakenErTattAv" />
            <Tag size="small" variant="info-moderate" style={{ marginLeft: '0.5rem' }}>
              <FormattedMessage id="Oppgavetabell.Meg" />
            </Tag>
            <Button variant="tertiary" size="small" onClick={reserverOppgaveAction} style={{ marginLeft: '0.5rem' }}>
              <FormattedMessage id="Oppgavetabell.FjernMeg" />
            </Button>
          </BodyLong>
        </HStack>
      )}
      {oppgave.reservertAv && navAnsatt.brukernavn !== oppgave.reservertAv && (
        <HStack>
          <BodyLong>
            <FormattedMessage id="Oppgavetabell.SakenErTattAv" />
            <Tag size="small" variant="neutral-moderate" style={{ marginLeft: '0.5rem' }}>
              {oppgave.reservertAv}
            </Tag>
          </BodyLong>
        </HStack>
      )}
      {!oppgave.reservertAv && (
        <HStack>
          <BodyLong>
            <Button variant="tertiary" size="small" onClick={reserverOppgaveAction}>
              <FormattedMessage id="Oppgavetabell.SettPåMeg" />
            </Button>
          </BodyLong>
        </HStack>
      )}
    </div>
  );
};
export default Reservasjonspanel;

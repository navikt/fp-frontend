import { FormattedMessage } from 'react-intl';

import { BodyLong, Button, Tag } from '@navikt/ds-react';

import type { NavAnsatt } from '@navikt/fp-types';

import type { Oppgave } from '../../../typer/oppgaveTsType';
import type { ReserverOppgaveType } from '../../../typer/reserverOppgaveType';

type Props = Readonly<{
  oppgave: Oppgave;
  navAnsatt: NavAnsatt;
  reserverOppgave: (data: ReserverOppgaveType) => void;
}>;

/**
 * Reservasjonspanel - Inneholder informasjon om hvem som har reservert saken og mulighet for å reservere saken på saksbehandler
 */
export const Reservasjonspanel = ({ oppgave, reserverOppgave, navAnsatt }: Props) => {
  const reserverOppgaveAction = () => {
    if (!oppgave) {
      throw new Error('Prøver å reservere uten å ha valgt oppgave, ugyldig tilstand.');
    }
    const reservasjonFor = !oppgave?.reservertAv ? navAnsatt.brukernavn : '';
    reserverOppgave({
      journalpostId: oppgave.journalpostId,
      reserverFor: reservasjonFor,
    });
  };

  return (
    <div>
      {oppgave.reservertAv && navAnsatt.brukernavn === oppgave?.reservertAv && (
        <BodyLong>
          <FormattedMessage id="Oppgavetabell.SakenErTattAv" />
          <Tag size="small" variant="info-moderate" style={{ marginLeft: '0.5rem' }}>
            <FormattedMessage id="Oppgavetabell.Meg" />
          </Tag>
          <Button variant="tertiary" size="small" onClick={reserverOppgaveAction} style={{ marginLeft: '0.5rem' }}>
            <FormattedMessage id="Oppgavetabell.FjernMeg" />
          </Button>
        </BodyLong>
      )}
      {oppgave.reservertAv && navAnsatt.brukernavn !== oppgave.reservertAv && (
        <BodyLong>
          <FormattedMessage id="Oppgavetabell.SakenErTattAv" />
          <Tag size="small" variant="neutral-moderate" style={{ marginLeft: '0.5rem' }}>
            {oppgave.reservertAv}
          </Tag>
        </BodyLong>
      )}
      {!oppgave.reservertAv && (
        <BodyLong>
          <Button variant="tertiary" size="small" onClick={reserverOppgaveAction}>
            <FormattedMessage id="Oppgavetabell.SettPåMeg" />
          </Button>
        </BodyLong>
      )}
    </div>
  );
};

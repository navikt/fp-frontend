import { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import {
  ArrowUndoIcon,
  CalendarIcon,
  HourglassTopFilledIcon,
  MenuElipsisVerticalCircleIcon,
  PersonHeadsetIcon,
} from '@navikt/aksel-icons';
import { ActionMenu, Button } from '@navikt/ds-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { FlyttReservasjonModal, type Oppgave, OppgaveReservasjonEndringDatoModal } from '@navikt/fp-los-felles';

import {
  endreReservasjonPost,
  flyttReservasjonPost,
  flyttReservasjonSaksbehandlerSøkPost,
  forlengReservasjonPost,
  LosUrl,
} from '../../../data/fplosSaksbehandlerApi';
import { OppgaveReservasjonForlengetModal } from './forleng/OppgaveReservasjonForlengetModal';
import { OpphevReservasjonModal } from './OpphevReservasjonModal';

import styles from './oppgaveHandlingerMenu.module.css';

interface Props {
  oppgave: Oppgave;
  setEnableTableEvents: (shouldDisable: boolean) => void;
}

export const OppgaveHandlingerMenu = ({ oppgave, setEnableTableEvents }: Props) => {
  const intl = useIntl();
  const queryClient = useQueryClient();

  const [visOpphevReservasjonModal, setVisOpphevReservasjonModal] = useState(false);
  const [visForlengetReservasjonModal, setVisForlengetReservasjonModal] = useState(false);
  const [visReservasjonEndringDatoModal, setVisReservasjonEndringDatoModal] = useState(false);
  const [visFlyttReservasjonModal, setVisFlyttReservasjonModal] = useState(false);

  const { mutate: endreOppgavereservasjon } = useMutation({
    mutationFn: (reserverTil: string) => endreReservasjonPost(oppgave.id, reserverTil),
    onSuccess: () => {
      setVisForlengetReservasjonModal(true);

      queryClient.invalidateQueries({
        queryKey: [LosUrl.RESERVERTE_OPPGAVER],
      });

      setVisReservasjonEndringDatoModal(false);
    },
  });

  const { mutate: flyttOppgavereservasjon } = useMutation({
    mutationFn: (values: { brukerIdent: string; begrunnelse: string }) =>
      flyttReservasjonPost(oppgave.id, values.brukerIdent, values.begrunnelse),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [LosUrl.RESERVERTE_OPPGAVER],
      });
    },
  });

  const { mutate: forlengOppgavereservasjon } = useMutation({
    mutationFn: () => forlengReservasjonPost(oppgave.id),
    onSuccess: () => {
      setVisForlengetReservasjonModal(true);
      queryClient.invalidateQueries({
        queryKey: [LosUrl.RESERVERTE_OPPGAVER],
      });
    },
  });

  const {
    mutate: hentSaksbehandler,
    data: saksbehandler,
    reset: resetHentSaksbehandler,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: (brukerIdent: string) => flyttReservasjonSaksbehandlerSøkPost(brukerIdent),
  });

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
            <ActionMenu.Item onSelect={() => forlengOppgavereservasjon()} icon={<HourglassTopFilledIcon aria-hidden />}>
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
        <OpphevReservasjonModal oppgave={oppgave} closeModal={() => setVisOpphevReservasjonModal(false)} />
      )}
      {visReservasjonEndringDatoModal && (
        <OppgaveReservasjonEndringDatoModal
          closeModal={() => setVisReservasjonEndringDatoModal(false)}
          reserverTilDefault={oppgave.status.reservertTilTidspunkt}
          endreOppgavereservasjon={endreOppgavereservasjon}
        />
      )}
      {visForlengetReservasjonModal && (
        <OppgaveReservasjonForlengetModal oppgave={oppgave} closeModal={() => setVisForlengetReservasjonModal(false)} />
      )}
      {visFlyttReservasjonModal && (
        <FlyttReservasjonModal
          flyttetBegrunnelse={oppgave.status.flyttetReservasjon?.begrunnelse}
          closeModal={() => setVisFlyttReservasjonModal(false)}
          flyttOppgavereservasjon={flyttOppgavereservasjon}
          hentSaksbehandler={hentSaksbehandler}
          hentSaksbehandlerIsPending={isPending}
          hentSaksbehandlerIsSuccess={isSuccess}
          saksbehandler={saksbehandler}
          resetHentSaksbehandler={resetHentSaksbehandler}
        />
      )}
    </>
  );
};

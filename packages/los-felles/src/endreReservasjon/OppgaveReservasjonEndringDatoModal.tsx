import React, { MouseEvent, FunctionComponent, useCallback, useMemo } from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import { useForm } from 'react-hook-form';
import dayjs from 'dayjs';
import { Panel, Button, Modal as NavModal, Heading } from '@navikt/ds-react';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { dateAfterOrEqual, dateBeforeOrEqual, hasValidDate } from '@navikt/ft-form-validators';
import { Form, Datepicker } from '@navikt/ft-form-hooks';
import { FlexColumn, FlexContainer, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import Oppgave from '../typer/oppgaveTsType';

const thirtyDaysFromNow = () => {
  const result = new Date();
  result.setDate(new Date().getDate() + 30);
  return result;
};

type FormValues = {
  reserverTil: string;
};

interface OwnProps {
  showModal: boolean;
  closeModal: (event: MouseEvent<HTMLButtonElement>) => void;
  reserverTilDefault?: string;
  oppgaveId: number;
  endreReserverasjonState: () => void;
  hentReserverteOppgaver: (params: any, keepData: boolean) => void;
  endreOppgavereservasjon: (input: { oppgaveId: number; reserverTil: string }) => Promise<Oppgave[] | undefined>;
}

/**
 * OppgaveReservasjonEndringDatoModal.
 */
const OppgaveReservasjonEndringDatoModal: FunctionComponent<OwnProps> = ({
  showModal,
  closeModal,
  reserverTilDefault,
  oppgaveId,
  hentReserverteOppgaver,
  endreReserverasjonState,
  endreOppgavereservasjon,
}) => {
  const intl = useIntl();

  const endreOppgaveReservasjonFn = useCallback(
    (reserverTil: string) =>
      endreOppgavereservasjon({ oppgaveId, reserverTil }).then(() => {
        endreReserverasjonState();
        hentReserverteOppgaver({}, true);
      }),
    [],
  );

  const defaultValues = useMemo(
    () => ({
      reserverTil: reserverTilDefault ? dayjs(reserverTilDefault).format(ISO_DATE_FORMAT) : '',
    }),
    [reserverTilDefault],
  );

  const søkFormMethods = useForm<FormValues>({
    defaultValues,
  });

  return (
    <NavModal
      open={showModal}
      closeButton={false}
      aria-label={intl.formatMessage({ id: 'OppgaveReservasjonEndringDatoModal.Header' })}
      onClose={closeModal as () => void}
    >
      <NavModal.Content>
        <Form<FormValues>
          formMethods={søkFormMethods}
          onSubmit={values => endreOppgaveReservasjonFn(values.reserverTil)}
        >
          <Panel>
            <Heading size="small">
              <FormattedMessage id="OppgaveReservasjonEndringDatoModal.Header" />
            </Heading>
            <VerticalSpacer eightPx />
            <Datepicker
              label=""
              name="reserverTil"
              validate={[hasValidDate, dateAfterOrEqual(new Date()), dateBeforeOrEqual(thirtyDaysFromNow())]}
              disabledDays={{ fromDate: new Date(), toDate: thirtyDaysFromNow() }}
              strategy="fixed"
            />
            <VerticalSpacer sixteenPx />
            <FlexContainer>
              <FlexRow>
                <FlexColumn>
                  <Button size="small" variant="secondary" autoFocus>
                    <FormattedMessage id="OppgaveReservasjonEndringDatoModal.Ok" />
                  </Button>
                </FlexColumn>
                <FlexColumn>
                  <Button size="small" variant="secondary" onClick={closeModal} type="button">
                    <FormattedMessage id="OppgaveReservasjonEndringDatoModal.Avbryt" />
                  </Button>
                </FlexColumn>
              </FlexRow>
            </FlexContainer>
          </Panel>
        </Form>
      </NavModal.Content>
    </NavModal>
  );
};

export default OppgaveReservasjonEndringDatoModal;

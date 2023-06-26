import React, { FunctionComponent, useCallback, useMemo, useState } from 'react';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import dayjs from 'dayjs';
import { Button, Chat } from '@navikt/ds-react';

import { FlexColumn, FlexContainer, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { Form, TextAreaField } from '@navikt/ft-form-hooks';
import { Saksnotat } from '@navikt/fp-types';
import { required } from '@navikt/ft-form-validators';

import styles from './notatPanel.module.css';

const formatTimestamp = (intl: IntlShape, opprettetTidspunkt: string): string => {
  const dato = intl.formatDate(opprettetTidspunkt, { day: '2-digit', month: 'long', year: 'numeric' });
  const tid = intl.formatTime(opprettetTidspunkt);
  return `${dato} kl. ${tid}`;
};

type FormValues = {
  beskrivelse: string;
};

interface OwnProps {
  saksnummer: string;
  notater: Saksnotat[];
  lagreNotat: (params: { saksnummer: string; notat: string }) => Promise<any>;
  saksbehandlerNavn: string;
}

const NotatPanel: FunctionComponent<OwnProps> = ({ saksnummer, notater, lagreNotat, saksbehandlerNavn }) => {
  const intl = useIntl();
  const formMethods = useForm<FormValues>();

  const sorterteNotater = useMemo(
    () => [...notater].sort((a, b) => dayjs(a.opprettetTidspunkt).diff(dayjs(b.opprettetTidspunkt))),
    [notater],
  );

  const [alleNotater, leggTilNotat] = useState(sorterteNotater);

  const lagre = useCallback(
    (values: FormValues) => {
      lagreNotat({ saksnummer, notat: values.beskrivelse });
      leggTilNotat(eksisterendeNotater =>
        eksisterendeNotater.concat({
          notat: values.beskrivelse,
          opprettetAv: saksbehandlerNavn,
          opprettetTidspunkt: '',
        }),
      );
      formMethods.reset();
    },
    [notater],
  );

  const [top, setTop] = useState<number>();

  return (
    <div
      className={styles.overflow}
      style={{ height: `calc(100vh - ${top}px)` }}
      ref={el => {
        if (el) {
          setTop(el.getBoundingClientRect().top);
        }
      }}
    >
      <div>
        {alleNotater.map(notat => (
          <>
            <Chat
              avatar=""
              name={notat.opprettetAv}
              timestamp={formatTimestamp(intl, notat.opprettetTidspunkt)}
              className={styles.bubble}
              position={saksbehandlerNavn === notat.opprettetAv ? 'right' : 'left'}
            >
              <Chat.Bubble>{notat.notat}</Chat.Bubble>
            </Chat>
            <VerticalSpacer sixteenPx />
          </>
        ))}
      </div>
      <Form formMethods={formMethods} onSubmit={lagre}>
        <VerticalSpacer thirtyTwoPx />
        <TextAreaField name="beskrivelse" label="" maxLength={100} validate={[required]} />
        <VerticalSpacer sixteenPx />
        <FlexContainer>
          <FlexRow spaceBetween>
            <FlexColumn>{intl.formatMessage({ id: 'NotatPanel.KunForSaksbehandler' })}</FlexColumn>
            <FlexColumn>
              <Button size="small">
                <FormattedMessage id="NotatPanel.Send" />
              </Button>
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
      </Form>
    </div>
  );
};

export default NotatPanel;

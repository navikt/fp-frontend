import React, { FunctionComponent, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import dayjs from 'dayjs';
import { Alert, BodyShort, Button, Chat } from '@navikt/ds-react';

import { FlexColumn, FlexContainer, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { Form, TextAreaField } from '@navikt/ft-form-hooks';
import { Saksnotat } from '@navikt/fp-types';
import { maxLength, required } from '@navikt/ft-form-validators';

import styles from './notatPanel.module.css';

const maxLength1000 = maxLength(1000);

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
  kanSaksbehandle: boolean;
}

const NotatPanel: FunctionComponent<OwnProps> = ({
  saksnummer,
  notater,
  lagreNotat,
  saksbehandlerNavn,
  kanSaksbehandle,
}) => {
  const intl = useIntl();
  const formMethods = useForm<FormValues>();

  const sorterteNotater = useMemo(
    () => [...notater].sort((a, b) => dayjs(a.opprettetTidspunkt).diff(dayjs(b.opprettetTidspunkt))),
    [notater],
  );

  const lagre = useCallback(
    (values: FormValues) => {
      lagreNotat({ saksnummer, notat: values.beskrivelse });

      formMethods.reset();
    },
    [notater],
  );

  const bottomEl = useRef<HTMLDivElement | null>(null);
  const [top, setTop] = useState<number>();

  // Denne for å scrolle innerste scrollbar ved bytte til notat-fane
  const isInitialMount = useRef(0);
  useEffect(() => {
    const lastChildElement = bottomEl.current?.lastElementChild;
    isInitialMount.current += 1;
    if (isInitialMount.current === 2 && lastChildElement?.scrollIntoView) {
      lastChildElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [top]);

  // Denne for å scrolle innerste scrollbar når en legger til notat
  const isInitialMount2 = useRef(true);
  useEffect(() => {
    const lastChildElement = bottomEl.current?.lastElementChild;
    if (isInitialMount2.current) {
      isInitialMount2.current = false;
    } else if (lastChildElement?.scrollIntoView) {
      lastChildElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [sorterteNotater]);

  // Denne er kun her for å få komponent-repaint ved scrolling
  const scrollReset = useCallback(() => setTop(0), []);
  useEffect(() => {
    window.addEventListener('scroll', scrollReset);
    return () => {
      window.removeEventListener('scroll', scrollReset);
    };
  }, []);

  return (
    <div
      className={styles.container}
      style={{ height: `calc(100vh - ${top}px)` }}
      ref={el => {
        if (el) {
          setTop(el.getBoundingClientRect().top);
        }
      }}
    >
      {sorterteNotater.length > 0 && (
        <div className={styles.thechats} ref={bottomEl}>
          {sorterteNotater.map((notat, index) => (
            <div key={notat.opprettetTidspunkt} className={index === 0 ? styles.marginTop : undefined}>
              <Chat
                className={styles.chat}
                name={
                  saksbehandlerNavn === notat.opprettetAv
                    ? intl.formatMessage({ id: 'NotatPanel.Du' })
                    : notat.opprettetAv
                }
                timestamp={formatTimestamp(intl, notat.opprettetTidspunkt)}
                position={saksbehandlerNavn === notat.opprettetAv ? 'right' : 'left'}
              >
                <Chat.Bubble className={saksbehandlerNavn === notat.opprettetAv ? styles.bubbleSelf : styles.bubble}>
                  {notat.notat}
                </Chat.Bubble>
                {index < sorterteNotater.length - 1 && <VerticalSpacer fourPx />}
                {index === sorterteNotater.length - 1 && <VerticalSpacer eightPx />}
              </Chat>
            </div>
          ))}
        </div>
      )}
      {sorterteNotater.length === 0 && (
        <div className={styles.textAlign}>
          <BodyShort className={styles.ingen}>
            <FormattedMessage id="NotatPanel.Ingen" />
          </BodyShort>
        </div>
      )}

      {kanSaksbehandle && (
        <div className={styles.form}>
          <Form formMethods={formMethods} onSubmit={lagre}>
            <VerticalSpacer sixteenPx />
            <TextAreaField name="beskrivelse" label="" maxLength={1000} validate={[required, maxLength1000]} />
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
          <VerticalSpacer thirtyTwoPx />
        </div>
      )}
      {!kanSaksbehandle && (
        <div className={styles.alert}>
          <Alert variant="info">
            <FormattedMessage id="NotatPanel.KunSaksbehandler" />
          </Alert>
        </div>
      )}
    </div>
  );
};

export default NotatPanel;

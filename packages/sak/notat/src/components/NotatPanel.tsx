import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, Button, Chat, HStack, VStack } from '@navikt/ds-react';
import { RhfForm, RhfTextarea } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, required } from '@navikt/ft-form-validators';
import { dateTimeFormat, sortPeriodsBy } from '@navikt/ft-utils';

import type { Saksnotat } from '@navikt/fp-types';

import styles from './notatPanel.module.css';

const maxLength1000 = maxLength(1000);

type FormValues = {
  notat: string;
};

interface Props {
  saksnummer: string;
  notater: Saksnotat[];
  lagreNotat: (params: { saksnummer: string; notat: string }) => void;
  saksbehandlerNavn: string;
  kanSaksbehandle: boolean;
}

export const NotatPanel = ({ saksnummer, notater, lagreNotat, saksbehandlerNavn, kanSaksbehandle }: Props) => {
  const intl = useIntl();
  const formMethods = useForm<FormValues>();
  const sorterteNotater = notater.toSorted(sortPeriodsBy('opprettetTidspunkt'));

  const lagre = ({ notat }: FormValues) => {
    lagreNotat({ saksnummer, notat });

    formMethods.reset();
  };

  const bottomElRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const chats = bottomElRef.current;
    if (chats) {
      chats.scrollTop = chats.scrollHeight;
    }
  }, [sorterteNotater.length]);

  return (
    <div className={styles['container']}>
      {sorterteNotater.length === 0 && (
        <BodyShort className="m-auto py-10" textColor="subtle">
          <FormattedMessage id="NotatPanel.Ingen" />
        </BodyShort>
      )}
      {sorterteNotater.length > 0 && (
        <VStack gap="space-8" asChild>
          <div className={styles['thechats']} ref={bottomElRef}>
            {sorterteNotater.map(notat => {
              const erSaksbehandler = saksbehandlerNavn === notat.opprettetAv;
              return (
                <Chat
                  className="max-w-full"
                  key={notat.opprettetTidspunkt}
                  name={erSaksbehandler ? intl.formatMessage({ id: 'NotatPanel.Du' }) : notat.opprettetAv}
                  timestamp={dateTimeFormat(notat.opprettetTidspunkt, {
                    day: 'numeric',
                    month: 'long',
                    separator: 'kl',
                  })}
                  position={erSaksbehandler ? 'right' : 'left'}
                  toptextPosition={erSaksbehandler ? 'right' : 'left'}
                  data-color={erSaksbehandler ? 'accent' : 'neutral'}
                >
                  <Chat.Bubble className="whitespace-pre-wrap max-w-3xl">{notat.notat}</Chat.Bubble>
                </Chat>
              );
            })}
          </div>
        </VStack>
      )}

      <div className={styles['form']}>
        {kanSaksbehandle && (
          <RhfForm formMethods={formMethods} onSubmit={lagre}>
            <RhfTextarea
              name="notat"
              control={formMethods.control}
              label={<FormattedMessage id="NotatPanel.Notat" />}
              hideLabel
              maxLength={1000}
              validate={[required, maxLength1000, hasValidText]}
            />
            <HStack justify="space-between" align="end">
              <BodyShort textColor="subtle">
                <FormattedMessage id="NotatPanel.KunForSaksbehandler" />
              </BodyShort>
              <Button size="small">
                <FormattedMessage id="NotatPanel.Send" />
              </Button>
            </HStack>
          </RhfForm>
        )}
        {!kanSaksbehandle && (
          <BodyShort textColor="subtle">
            <FormattedMessage id="NotatPanel.KunSaksbehandler" />
          </BodyShort>
        )}
      </div>
    </div>
  );
};

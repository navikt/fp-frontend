import React, { FunctionComponent, useCallback, useMemo } from 'react';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import dayjs from 'dayjs';
import { Button, Chat, Heading } from '@navikt/ds-react';

import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { Form, TextAreaField } from '@navikt/ft-form-hooks';
import { Fagsak } from '@navikt/fp-types';
import { required } from '@navikt/ft-form-validators';

const formatTimestamp = (intl: IntlShape, opprettetTidspunkt: string): string => {
  const dato = intl.formatDate(opprettetTidspunkt, { day: '2-digit', month: 'long', year: 'numeric' });
  const tid = intl.formatTime(opprettetTidspunkt);
  return `${dato} kl. ${tid}`;
};

type FormValues = {
  beskrivelse: string;
};

interface OwnProps {
  fagsak: Fagsak;
  lagreNotat: (beskrivelse: string) => void;
}

const NotatPanel: FunctionComponent<OwnProps> = ({ fagsak, lagreNotat }) => {
  const intl = useIntl();
  const formMethods = useForm<FormValues>();

  const lagre = useCallback((values: FormValues) => lagreNotat(values.beskrivelse), []);

  const sorterteNotater = useMemo(
    () => [...fagsak.saksnotat].sort((a, b) => dayjs(b.opprettetTidspunkt).diff(dayjs(a.opprettetTidspunkt))),
    [fagsak.saksnotat],
  );

  return (
    <>
      <Heading size="xsmall">{intl.formatMessage({ id: 'NotatPanel.Notat' })}</Heading>
      <VerticalSpacer sixteenPx />
      {sorterteNotater.map(notat => (
        <>
          <Chat avatar="EVA" name={notat.opprettetAv} timestamp={formatTimestamp(intl, notat.opprettetTidspunkt)}>
            <Chat.Bubble>{notat.notat}</Chat.Bubble>
          </Chat>
          <VerticalSpacer sixteenPx />
        </>
      ))}
      <Form formMethods={formMethods} onSubmit={lagre}>
        <VerticalSpacer thirtyTwoPx />
        <TextAreaField
          name="beskrivelse"
          label={intl.formatMessage({ id: 'NotatPanel.SkrivEtNotat' })}
          description={intl.formatMessage({ id: 'NotatPanel.ErSynlig' })}
          maxLength={100}
          validate={[required]}
        />
        <VerticalSpacer sixteenPx />
        <Button size="small">
          <FormattedMessage id="NotatPanel.LeggTilNotat" />
        </Button>
      </Form>
    </>
  );
};

export default NotatPanel;

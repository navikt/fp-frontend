import React, { FunctionComponent, useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { hasValidInteger, minLength, required } from '@navikt/ft-form-validators';
import { Form, InputField } from '@navikt/ft-form-hooks';

import { Button, Modal, Heading, VStack, HStack, Label, BodyShort } from '@navikt/ds-react';
import { FormattedMessage, useIntl } from 'react-intl';

type Formvalues = {
  journalpostId: string;
};

type OwnProps = Readonly<{
  hentJournalpost: (journalpostId: string) => void;
  lukkModal: () => void;
  erÅpen: boolean;
  harSøktOgFunnetIngenMatch: boolean;
}>;

/**
 * JournalpostSøkModal - Modal for å søke etter en journalpost ved ID
 */
const JournalpostSøkModal: FunctionComponent<OwnProps> = ({
  hentJournalpost,
  lukkModal,
  erÅpen,
  harSøktOgFunnetIngenMatch,
}) => {
  const intl = useIntl();
  const [lasterJournalpost, setLasterJournalpost] = useState(false);
  const formMethods = useForm({
    defaultValues: {} as Formvalues,
  });

  const submit = useCallback(
    (data: Formvalues) => {
      setLasterJournalpost(true);
      hentJournalpost(data.journalpostId);
      setLasterJournalpost(false);
    },
    [hentJournalpost],
  );
  const minLength9 = minLength(9);
  return (
    <Modal open={erÅpen} onClose={lukkModal} aria-label="journalpost-modal">
      <Modal.Header>
        <Heading size="medium">
          <FormattedMessage id="Journalpost.Søk.Tittel" />
        </Heading>
      </Modal.Header>
      <Modal.Body>
        <Form<Formvalues> formMethods={formMethods} onSubmit={submit}>
          <VStack gap="1" justify="start">
            <Label>
              <FormattedMessage id="Journalpost.Søk.JournalpostID" />
            </Label>
            <BodyShort>
              <FormattedMessage id="Journalpost.Søk.KunTall" />
            </BodyShort>
          </VStack>
          <HStack gap="2">
            <InputField
              name="journalpostId"
              validate={[required, hasValidInteger, minLength9]}
              size="medium"
              hideLabel
              label={intl.formatMessage({ id: 'Journalpost.Søk.JournalpostID' })}
            />
            <Button size="xsmall" loading={lasterJournalpost}>
              <FormattedMessage id="Journalpost.Søk.Finn" />
            </Button>
          </HStack>
        </Form>
        <VerticalSpacer sixteenPx />
        {harSøktOgFunnetIngenMatch && (
          <BodyShort>
            <FormattedMessage id="Journalpost.Søk.IngenTreffEllerManglerTilgang" />
          </BodyShort>
        )}
      </Modal.Body>
    </Modal>
  );
};
export default JournalpostSøkModal;

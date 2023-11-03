import React, { FunctionComponent, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { hasValidInteger, minLength, required } from '@navikt/ft-form-validators';
import { Form, InputField } from '@navikt/ft-form-hooks';

import { Button, Modal, BodyLong, Heading, HStack } from '@navikt/ds-react';
import { FormattedMessage, useIntl } from 'react-intl';

type Formvalues = {
  journalpostId: string;
};

type OwnProps = Readonly<{
  hentJournalpost: (journalpostId: string) => void;
  lukkModal: () => void;
  erÅpen: boolean;
}>;

/**
 * JournalpostSøkModal - Modal for å søke etter en journalpost ved ID
 */
const JournalpostSøkModal: FunctionComponent<OwnProps> = ({ hentJournalpost, lukkModal, erÅpen }) => {
  const intl = useIntl();
  const formMethods = useForm({
    defaultValues: {} as Formvalues,
  });
  const submit = useCallback(
    (data: Formvalues) => {
      hentJournalpost(data.journalpostId);
    },
    [hentJournalpost],
  );
  const minLength9 = minLength(9);
  return (
    <Modal open={erÅpen} onClose={lukkModal}>
      <Modal.Header>
        <Heading size="medium">
          <FormattedMessage id="Journalpost.Søk.Tittel" />
        </Heading>
      </Modal.Header>
      <Modal.Body>
        <Form<Formvalues> formMethods={formMethods} onSubmit={submit}>
          <HStack gap="1" justify="start">
            <div>
              <BodyLong>
                <FormattedMessage id="Journalpost.Søk.Label" />
              </BodyLong>
            </div>
          </HStack>
          <HStack gap="2">
            <InputField
              name="journalpostId"
              validate={[required, hasValidInteger, minLength9]}
              size="medium"
              hideLabel
              label={intl.formatMessage({ id: 'Journalpost.Søk.Label' })}
            />
            <Button>Søk</Button>
          </HStack>
        </Form>
        <VerticalSpacer sixteenPx />
        43{' '}
      </Modal.Body>
    </Modal>
  );
};
export default JournalpostSøkModal;

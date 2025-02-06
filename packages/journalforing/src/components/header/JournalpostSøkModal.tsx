import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, Button, Heading, HStack, Label, Modal, VStack } from '@navikt/ds-react';
import { Form, InputField } from '@navikt/ft-form-hooks';
import { hasValidInteger, minLength, required } from '@navikt/ft-form-validators';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

const MIN_LENGTH_9 = minLength(9);

type Formvalues = {
  journalpostId: string;
};

type Props = Readonly<{
  hentJournalpost: (journalpostId: string) => void;
  lukkModal: () => void;
  erÅpen: boolean;
  harSøktOgFunnetIngenMatch: boolean;
}>;

/**
 * JournalpostSøkModal - Modal for å søke etter en journalpost ved ID
 */
export const JournalpostSøkModal = ({ hentJournalpost, lukkModal, erÅpen, harSøktOgFunnetIngenMatch }: Props) => {
  const intl = useIntl();
  const [lasterJournalpost, setLasterJournalpost] = useState(false);

  const formMethods = useForm({
    defaultValues: {} as Formvalues,
  });

  return (
    <Modal open={erÅpen} onClose={lukkModal} aria-label="journalpost-modal">
      <Modal.Header>
        <Heading size="medium">
          <FormattedMessage id="Journalpost.Søk.Tittel" />
        </Heading>
      </Modal.Header>
      <Modal.Body>
        <Form<Formvalues>
          formMethods={formMethods}
          onSubmit={(data: Formvalues) => {
            setLasterJournalpost(true);
            hentJournalpost(data.journalpostId);
            setLasterJournalpost(false);
          }}
        >
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
              validate={[required, hasValidInteger, MIN_LENGTH_9]}
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

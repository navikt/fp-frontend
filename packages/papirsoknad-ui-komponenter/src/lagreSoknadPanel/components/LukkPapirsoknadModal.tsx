import React from 'react';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, Modal, HStack, Heading } from '@navikt/ds-react';

interface Props {
  showModal: boolean;
  handleSubmit: () => void;
  cancelEvent: () => void;
}

/**
 * LukkPapirSoknadModal
 *
 * Denne modalen vises når saksbehandler velger 'Ikke mulig å fullføre registrering av søknad'
 * og trykker på 'Lagre og start behandling'. Ved å trykke på OK blir saken sendt til behandling av avslag.
 */
export const LukkPapirsoknadModal = ({ showModal, handleSubmit, cancelEvent }: Props) => {
  const intl = useIntl();
  return (
    <Modal
      open={showModal}
      aria-label={intl.formatMessage({ id: 'ModalLukkPapirSoknad.ModalDescription' })}
      onClose={cancelEvent}
    >
      <Modal.Header>
        <HStack gap="4">
          <ExclamationmarkTriangleFillIcon
            color="var(--a-orange-500)"
            width={35}
            height={35}
            title={intl.formatMessage({ id: 'ModalLukkPapirSoknad.Avslutt' })}
          />
          <Heading size="medium" id="modal-heading">
            {intl.formatMessage({ id: 'ModalLukkPapirSoknad.Title' })}
          </Heading>
        </HStack>
      </Modal.Header>
      <Modal.Body>
        <BodyShort weight="semibold">{intl.formatMessage({ id: 'ModalLukkPapirSoknad.Opplysninger' })}</BodyShort>
        <BodyShort>{intl.formatMessage({ id: 'ModalLukkPapirSoknad.Bekreft' })}</BodyShort>
      </Modal.Body>
      <Modal.Footer>
        <Link to="/">
          <Button variant="primary" onClick={() => handleSubmit()} type="button">
            {intl.formatMessage({ id: 'ModalLukkPapirSoknad.Ok' })}
          </Button>
        </Link>
        <Button variant="secondary" onClick={cancelEvent} type="button">
          {intl.formatMessage({ id: 'ModalLukkPapirSoknad.Avbryt' })}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

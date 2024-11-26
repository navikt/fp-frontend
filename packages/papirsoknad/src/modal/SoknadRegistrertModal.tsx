import React from 'react';
import { Link } from 'react-router-dom';
import { Alert, BodyShort, Button, HStack, Modal } from '@navikt/ds-react';
import { createIntl } from '@navikt/ft-utils';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  isOpen?: boolean;
}

/**
 * SoknadRegistrertModal
 *
 * Informasjonsmodal som vises til saksbehandler når en papirsøknad har blitt registrert.
 */
export const SoknadRegistrertModal = ({ isOpen = false }: Props) => (
  <Modal
    open={isOpen}
    aria-label={intl.formatMessage({ id: 'SoknadRegistrertModal.ContentLabel' })}
    onClose={() => undefined}
  >
    <Modal.Body style={{ padding: 4 }}>
      <Alert variant="success">
        <HStack justify="space-between" gap="4" align="center">
          <div>
            <BodyShort size="small">{intl.formatMessage({ id: 'SoknadRegistrertModal.InfoTextOne' })}</BodyShort>
            <BodyShort size="small">{intl.formatMessage({ id: 'SoknadRegistrertModal.InfoTextTwo' })}</BodyShort>
          </div>
          <Link to="/">
            <Button size="small" variant="primary" type="button">
              {intl.formatMessage({ id: 'SoknadRegistrertModal.OkButtonText' })}
            </Button>
          </Link>
        </HStack>
      </Alert>
    </Modal.Body>
  </Modal>
);

import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { Label, BodyShort, Button, Modal } from '@navikt/ds-react';
import { FlexColumn, FlexContainer, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import styles from './lukkPapirsoknadModal.module.css';

interface OwnProps {
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
const LukkPapirSoknadModal: FunctionComponent<OwnProps> = ({ showModal, handleSubmit, cancelEvent }) => {
  const intl = useIntl();
  return (
    <Modal
      open={showModal}
      aria-label={intl.formatMessage({ id: 'ModalLukkPapirSoknad.ModalDescription' })}
      onClose={cancelEvent}
    >
      <Modal.Body>
        <FlexContainer>
          <FlexRow>
            <FlexColumn>
              <ExclamationmarkTriangleFillIcon
                className={styles.image}
                title={intl.formatMessage({ id: 'ModalLukkPapirSoknad.Avslutt' })}
              />
            </FlexColumn>
            <FlexColumn>
              <Label size="small">{intl.formatMessage({ id: 'ModalLukkPapirSoknad.AvslutterRegistrering' })}</Label>
              <VerticalSpacer fourPx />
              <BodyShort size="small">{intl.formatMessage({ id: 'ModalLukkPapirSoknad.BekreftAvslag' })}</BodyShort>
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
      </Modal.Body>
      <Modal.Footer>
        <Link to="/">
          <Button size="small" variant="primary" onClick={() => handleSubmit()} type="button">
            {intl.formatMessage({ id: 'ModalLukkPapirSoknad.Ok' })}
          </Button>
        </Link>
        <Button size="small" variant="secondary" onClick={cancelEvent} type="button">
          {intl.formatMessage({ id: 'ModalLukkPapirSoknad.Avbryt' })}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LukkPapirSoknadModal;

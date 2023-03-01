import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import {
  Label, BodyShort, Button, Modal,
} from '@navikt/ds-react';
import {
  FlexColumn, FlexContainer, FlexRow, Image, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';

import advarselImageUrl from '../../images/advarsel.svg';

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
const LukkPapirSoknadModal: FunctionComponent<OwnProps> = ({
  showModal,
  handleSubmit,
  cancelEvent,
}) => {
  const intl = useIntl();
  return (
    <Modal
      className={styles.modal}
      open={showModal}
      closeButton={false}
      aria-label={intl.formatMessage({ id: 'ModalLukkPapirSoknad.ModalDescription' })}
      onClose={cancelEvent}
      shouldCloseOnOverlayClick={false}
    >
      <Modal.Content>
        <FlexContainer>
          <FlexRow>
            <FlexColumn>
              <Image className={styles.image} alt={intl.formatMessage({ id: 'ModalLukkPapirSoknad.Avslutt' })} src={advarselImageUrl} />
            </FlexColumn>
            <FlexColumn>
              <Label size="small">
                {intl.formatMessage({ id: 'ModalLukkPapirSoknad.AvslutterRegistrering' })}
              </Label>
              <VerticalSpacer fourPx />
              <BodyShort size="small">
                {intl.formatMessage({ id: 'ModalLukkPapirSoknad.BekreftAvslag' })}
              </BodyShort>
            </FlexColumn>
          </FlexRow>
          <VerticalSpacer sixteenPx />
          <FlexRow>
            <FlexColumn className={styles.flowRight}>
              <Link to="/">
                <Button
                  size="small"
                  variant="primary"
                  onClick={() => handleSubmit()}
                  type="button"
                >
                  {intl.formatMessage({ id: 'ModalLukkPapirSoknad.Ok' })}
                </Button>
              </Link>
            </FlexColumn>
            <FlexColumn>
              <Button
                size="small"
                variant="secondary"
                onClick={cancelEvent}
                type="button"
              >
                {intl.formatMessage({ id: 'ModalLukkPapirSoknad.Avbryt' })}
              </Button>
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
      </Modal.Content>
    </Modal>
  );
};

export default LukkPapirSoknadModal;

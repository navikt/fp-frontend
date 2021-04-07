import React, { FunctionComponent } from 'react';
import Modal from 'nav-frontend-modal';
import { Hovedknapp, Knapp } from 'nav-frontend-knapper';
import { Normaltekst } from 'nav-frontend-typografi';

import { createIntl } from '@fpsak-frontend/utils';

import FlexColumn from './flexGrid/FlexColumn';
import FlexContainer from './flexGrid/FlexContainer';
import FlexRow from './flexGrid/FlexRow';
import VerticalSpacer from './VerticalSpacer';

import messages from '../i18n/nb_NO.json';
import styles from './okAvbrytModal.less';

const intl = createIntl(messages);

interface OwnProps {
  text: string;
  okButtonText?: string;
  showModal: boolean;
  submit: () => void;
  cancel: () => void;
}

/**
 * OkAvbrytModal
 *
 * Presentasjonskomponent. Modal som viser en valgfri tekst i tillegg til knappene OK og Avbryt.
 */
const OkAvbrytModal: FunctionComponent<OwnProps> = ({
  text,
  okButtonText,
  showModal,
  cancel,
  submit,
}) => (
  <Modal
    className={styles.modal}
    isOpen={showModal}
    closeButton
    contentLabel={text}
    onRequestClose={cancel}
    shouldCloseOnOverlayClick={false}
  >
    <Normaltekst>{text}</Normaltekst>
    <VerticalSpacer fourtyPx />
    <FlexContainer>
      <FlexRow>
        <FlexColumn>
          <Hovedknapp
            mini
            htmlType="submit"
            onClick={submit}
            autoFocus
          >
            {okButtonText || intl.formatMessage({ id: 'OkAvbrytModal.Ok' })}
          </Hovedknapp>
        </FlexColumn>
        <FlexColumn>
          <Knapp
            mini
            htmlType="reset"
            onClick={cancel}
          >
            {intl.formatMessage({ id: 'OkAvbrytModal.Avbryt' })}
          </Knapp>
        </FlexColumn>
      </FlexRow>
    </FlexContainer>
  </Modal>
);

export default OkAvbrytModal;

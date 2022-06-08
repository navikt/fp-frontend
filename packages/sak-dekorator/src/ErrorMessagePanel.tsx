import React, { FunctionComponent, useState, useCallback } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { Undertekst } from 'nav-frontend-typografi';
import Lukknapp from 'nav-frontend-lukknapp';

import { decodeHtmlEntity } from '@navikt/ft-utils';

import ErrorMessageDetailsModal from './ErrorMessageDetailsModal';
import Feilmelding from './feilmeldingTsType';

import styles from './errorMessagePanel.less';

interface OwnProps {
  errorMessages: Feilmelding[];
  removeErrorMessage: () => void;
}

/**
 * ErrorMessagePanel
 *
 * Definerer hvordan feilmeldinger vises under header.
 */
const ErrorMessagePanel: FunctionComponent<OwnProps> = ({
  errorMessages,
  removeErrorMessage,
}) => {
  const intl = useIntl();

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedErrorMsgIndex, setSelectedErrorMsgIndex] = useState<number | undefined>(undefined);

  const toggleModalOnClick = useCallback((event: React.MouseEvent | React.KeyboardEvent, index: number): void => {
    setModalOpen(!isModalOpen);
    setSelectedErrorMsgIndex(index);
    if (event) {
      event.preventDefault();
    }
  }, [isModalOpen]);

  const toggleModalOnKeyDown = useCallback((event: React.KeyboardEvent, index: number): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleModalOnClick(event, index);
    } else {
      event.preventDefault();
    }
  }, [toggleModalOnClick]);

  if (errorMessages.length === 0) {
    return null;
  }

  return (
    <div className={styles.container}>
      {errorMessages.map((message, index) => (
        <Row key={message.message}>
          <Column xs="11">
            <Undertekst className={styles.wordWrap}>
              {`${decodeHtmlEntity(message.message)} `}
            </Undertekst>
            {message.additionalInfo && (
              <Undertekst>
                <a
                  href=""
                  onClick={(event) => toggleModalOnClick(event, index)}
                  onKeyDown={(event) => toggleModalOnKeyDown(event, index)}
                  className={styles.link}
                >
                  <FormattedMessage id="ErrorMessagePanel.ErrorDetails" />
                </a>
              </Undertekst>
            )}
          </Column>
        </Row>
      ))}
      <div className={styles.lukkContainer}>
        <Lukknapp hvit onClick={removeErrorMessage}>{intl.formatMessage({ id: 'ErrorMessagePanel.Close' })}</Lukknapp>
      </div>
      {isModalOpen && (
        <ErrorMessageDetailsModal
          showModal={isModalOpen}
          closeModalFn={toggleModalOnClick as () => void}
          errorDetails={errorMessages[selectedErrorMsgIndex].additionalInfo}
        />
      )}
    </div>
  );
};

export default ErrorMessagePanel;

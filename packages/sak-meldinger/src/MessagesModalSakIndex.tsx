import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import MessagesModal from './components/MessagesModal';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  showModal: boolean;
  closeEvent: () => void;
}

const MessagesModalSakIndex: FunctionComponent<OwnProps> = ({
  showModal,
  closeEvent,
}) => (
  <RawIntlProvider value={intl}>
    <MessagesModal
      showModal={showModal}
      closeEvent={closeEvent}
    />
  </RawIntlProvider>
);

export default MessagesModalSakIndex;

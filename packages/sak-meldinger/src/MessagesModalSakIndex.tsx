import React from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { MessagesModal } from './components/MessagesModal';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  showModal: boolean;
  closeEvent: () => void;
}

export const MessagesModalSakIndex = (props: Props) => (
  <RawIntlProvider value={intl}>
    <MessagesModal {...props} />
  </RawIntlProvider>
);

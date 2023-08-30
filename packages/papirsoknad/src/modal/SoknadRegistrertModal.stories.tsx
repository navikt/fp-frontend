import React from 'react';
import { RawIntlProvider } from 'react-intl';
import { createIntl } from '@navikt/ft-utils';

import messages from '../../i18n/nb_NO.json';
import SoknadRegistrertModal from './SoknadRegistrertModal';

const intl = createIntl(messages);

export default {
  title: 'papirsoknad/modal/SoknadRegistrertModal',
  component: SoknadRegistrertModal,
};

export const visModal = () => (
  <RawIntlProvider value={intl}>
    <SoknadRegistrertModal isOpen />
  </RawIntlProvider>
);

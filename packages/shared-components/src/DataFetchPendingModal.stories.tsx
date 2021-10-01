import React from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@fpsak-frontend/utils';
import DataFetchPendingModal from './DataFetchPendingModal';

const intl = createIntl({
  'DataFetchPendingModal.LosningenJobberMedBehandlingen': 'Løsningen jobber med behandlingen...',
});

export default {
  title: 'sharedComponents/DataFetchPendingModal',
  component: DataFetchPendingModal,
};

export const Default = () => (
  <div style={{ width: '200px' }}>
    <RawIntlProvider value={intl}>
      <DataFetchPendingModal pendingMessage="Henting av data pågår" />
    </RawIntlProvider>
  </div>
);

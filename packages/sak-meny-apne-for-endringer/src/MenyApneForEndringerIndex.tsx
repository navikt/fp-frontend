import React, { FunctionComponent, useCallback } from 'react';
import { RawIntlProvider } from 'react-intl';

import { OkAvbrytModal } from '@fpsak-frontend/shared-components';
import { createIntl } from '@fpsak-frontend/utils';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

export const getMenytekst = () => intl.formatMessage({ id: 'MenyApneForEndringerIndex.ReopenBehandling' });

interface OwnProps {
  apneBehandlingForEndringer: () => void;
  lukkModal: () => void;
}

const MenyApneForEndringerIndex: FunctionComponent<OwnProps> = ({
  apneBehandlingForEndringer,
  lukkModal,
}) => {
  const submit = useCallback(() => {
    apneBehandlingForEndringer();

    lukkModal();
  }, []);

  return (
    <RawIntlProvider value={intl}>
      <OkAvbrytModal
        text={intl.formatMessage({ id: 'MenyApneForEndringerIndex.OpenBehandling' })}
        showModal
        submit={submit}
        cancel={lukkModal}
      />
    </RawIntlProvider>
  );
};

export default MenyApneForEndringerIndex;

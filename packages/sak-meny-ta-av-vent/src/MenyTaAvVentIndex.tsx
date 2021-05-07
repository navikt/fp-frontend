import React, { FunctionComponent, useCallback } from 'react';
import { RawIntlProvider } from 'react-intl';

import { OkAvbrytModal } from '@fpsak-frontend/shared-components';
import { createIntl } from '@fpsak-frontend/utils';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

export const getMenytekst = (): string => intl.formatMessage({ id: 'MenyTaAvVentIndex.ResumeBehandling' });

interface OwnProps {
  behandlingId: number;
  behandlingVersjon: number;
  taBehandlingAvVent: (params: {
    behandlingId: number;
    behandlingVersjon: number;
  }) => void;
  lukkModal: () => void;
}

const MenyTaAvVentIndex: FunctionComponent<OwnProps> = ({
  behandlingId,
  behandlingVersjon,
  taBehandlingAvVent,
  lukkModal,
}) => {
  const submit = useCallback(() => {
    taBehandlingAvVent({
      behandlingId,
      behandlingVersjon,
    });

    lukkModal();
  }, [behandlingId, behandlingVersjon]);

  return (
    <RawIntlProvider value={intl}>
      <OkAvbrytModal
        text={intl.formatMessage({ id: 'MenyTaAvVentIndex.TaAvVent' })}
        showModal
        submit={submit}
        cancel={lukkModal}
      />
    </RawIntlProvider>
  );
};

export default MenyTaAvVentIndex;

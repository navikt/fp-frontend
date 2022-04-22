import React, { FunctionComponent, useCallback } from 'react';
import { RawIntlProvider } from 'react-intl';

import { OkAvbrytModal } from '@navikt/ft-ui-komponenter';
import { createIntl } from '@navikt/ft-utils';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

export const getMenytekst = (): string => intl.formatMessage({ id: 'MenyTaAvVentIndex.ResumeBehandling' });

interface OwnProps {
  behandlingVersjon: number;
  taBehandlingAvVent: () => void;
  lukkModal: () => void;
}

const MenyTaAvVentIndex: FunctionComponent<OwnProps> = ({
  behandlingVersjon,
  taBehandlingAvVent,
  lukkModal,
}) => {
  const submit = useCallback(() => {
    taBehandlingAvVent();

    lukkModal();
  }, [behandlingVersjon]);

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

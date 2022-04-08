import React, { FunctionComponent, useCallback } from 'react';
import { RawIntlProvider } from 'react-intl';

import { OkAvbrytModal } from '@navikt/ft-ui-komponenter';
import { createIntl } from '@fpsak-frontend/utils';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

export const getMenytekst = (erOpprettVerge: boolean): string => intl.formatMessage({
  id: erOpprettVerge ? 'MenyVergeIndex.OpprettVerge' : 'MenyVergeIndex.FjernVerge',
});

interface OwnProps {
  fjernVerge?: () => Promise<void>;
  opprettVerge?: () => Promise<void>;
  lukkModal: () => void;
}

const MenyVergeIndex: FunctionComponent<OwnProps> = ({
  fjernVerge,
  opprettVerge,
  lukkModal,
}) => {
  const submit = useCallback(() => {
    lukkModal();
    const operasjon = opprettVerge || fjernVerge;
    if (operasjon) {
      return operasjon();
    }
    throw Error('Skal alltid ha enten opprettVerge eller fjernVerge');
  }, [opprettVerge, fjernVerge]);

  return (
    <RawIntlProvider value={intl}>
      <OkAvbrytModal
        text={intl.formatMessage({ id: opprettVerge ? 'MenyVergeIndex.OpprettVergeSporsmal' : 'MenyVergeIndex.FjernVergeSporsmal' })}
        showModal
        submit={submit}
        cancel={lukkModal}
      />
    </RawIntlProvider>
  );
};

export default MenyVergeIndex;

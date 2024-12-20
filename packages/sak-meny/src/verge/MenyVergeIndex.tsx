import React, { useCallback } from 'react';
import { RawIntlProvider } from 'react-intl';

import { OkAvbrytModal } from '@navikt/ft-ui-komponenter';
import { createIntl } from '@navikt/ft-utils';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

export const getMenytekst = (erOpprettVerge: boolean): string =>
  intl.formatMessage({
    id: erOpprettVerge ? 'MenyVergeIndex.OpprettVerge' : 'MenyVergeIndex.FjernVerge',
  });

interface Props {
  fjernVerge?: () => Promise<void>;
  opprettVerge?: () => Promise<void>;
  lukkModal: () => void;
}

export const MenyVergeIndex = ({ fjernVerge, opprettVerge, lukkModal }: Props) => {
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
        text={intl.formatMessage({
          id: opprettVerge ? 'MenyVergeIndex.OpprettVergeSporsmal' : 'MenyVergeIndex.FjernVergeSporsmal',
        })}
        showModal
        submit={submit}
        cancel={lukkModal}
      />
    </RawIntlProvider>
  );
};

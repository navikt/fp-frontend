import React, { FunctionComponent, useCallback } from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import EndreUtlandModal, { FormValues } from './components/EndreUtlandModal';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

export const getMenytekst = (): string => intl.formatMessage({ id: 'MenyEndreUtlandIndex.MenyTittel' });

interface OwnProps {
  saksnummer: string;
  utlandMarkering?: string;
  endreUtlandMarkering: (data: {
    saksnummer: string;
    utlandMarkering?: string;
  } & FormValues) => void;
  lukkModal: () => void;
}

const MenyEndreUtlandIndex: FunctionComponent<OwnProps> = ({
  saksnummer,
  utlandMarkering,
  endreUtlandMarkering,
  lukkModal,
}) => {
  const submit = useCallback((formValues: FormValues) => {
    const params = {
      saksnummer,
      ...formValues,
    };

    endreUtlandMarkering(params);

    lukkModal();
  }, []);
  return (
    <RawIntlProvider value={intl}>
      <EndreUtlandModal
        utlandMarkering={utlandMarkering}
        cancelEvent={lukkModal}
        submitCallback={submit}
      />
    </RawIntlProvider>
  );
};

export default MenyEndreUtlandIndex;

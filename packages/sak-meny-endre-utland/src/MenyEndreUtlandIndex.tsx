import React, { FunctionComponent, useCallback } from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import EndreUtlandModal, { FormValues } from './components/EndreUtlandModal';

import messages from '../i18n/nb_NO.json';
import { KodeverkMedNavn, Saksmarkering } from '@navikt/fp-types';

const intl = createIntl(messages);

export const getMenytekst = (): string => intl.formatMessage({ id: 'MenyEndreUtlandIndex.MenyTittel' });

interface OwnProps {
  saksnummer: string;
  fagsakMarkeringer?: Saksmarkering[];
  endreFagsakMarkering: (formData: FormValues) => void;
  lukkModal: () => void;
  fagsakMarkeringerKodeverk: KodeverkMedNavn[];
}

const MenyEndreUtlandIndex: FunctionComponent<OwnProps> = ({
  saksnummer,
  fagsakMarkeringer,
  endreFagsakMarkering,
  lukkModal,
  fagsakMarkeringerKodeverk,
}) => {
  const submit = useCallback((formValues: FormValues) => {
    endreFagsakMarkering(formValues);
    lukkModal();
  }, []);

  return (
    <RawIntlProvider value={intl}>
      <EndreUtlandModal
        saksnummer={saksnummer}
        fagsakMarkeringer={fagsakMarkeringer}
        cancelEvent={lukkModal}
        submitCallback={submit}
        fagsakMarkeringerKodeverk={fagsakMarkeringerKodeverk}
      />
    </RawIntlProvider>
  );
};

export default MenyEndreUtlandIndex;

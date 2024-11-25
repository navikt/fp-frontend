import React from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { EndreUtlandModal, FormValues } from './components/EndreUtlandModal';

import messages from '../i18n/nb_NO.json';
import { KodeverkMedNavn, Saksmarkering } from '@navikt/fp-types';

const intl = createIntl(messages);

export const getMenytekst = (): string => intl.formatMessage({ id: 'MenyEndreUtlandIndex.MenyTittel' });

interface Props {
  saksnummer: string;
  fagsakMarkeringer?: Saksmarkering[];
  endreFagsakMarkering: (formData: FormValues) => void;
  lukkModal: () => void;
  fagsakMarkeringerKodeverk: KodeverkMedNavn[];
}

export const MenyEndreUtlandIndex = ({ endreFagsakMarkering, lukkModal, ...rest }: Props) => {
  const submit = (formValues: FormValues) => {
    endreFagsakMarkering(formValues);
    lukkModal();
  };

  return (
    <RawIntlProvider value={intl}>
      <EndreUtlandModal cancelEvent={lukkModal} submitCallback={submit} {...rest} />
    </RawIntlProvider>
  );
};

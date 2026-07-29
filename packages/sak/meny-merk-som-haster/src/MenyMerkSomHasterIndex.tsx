import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { MerkSomHasterModal } from './components/MerkSomHasterModal';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

export const getMenytekst = () => intl.formatMessage({ id: 'MenyMerkSomHasterIndex.MerkSomHaster' });

interface Props {
  merkSomHaster: () => void;
  lukkModal: () => void;
  isPending?: boolean;
}

export const MenyMerkSomHasterIndex = ({ merkSomHaster, lukkModal, isPending }: Props) => {
  const submit = () => {
    merkSomHaster();
  };

  return (
    <RawIntlProvider value={intl}>
      <MerkSomHasterModal
        text={intl.formatMessage({ id: 'MenyMerkSomHasterIndex.MerkSomHasterSpørsmål' })}
        submitCallback={submit}
        cancelEvent={lukkModal}
        isPending={isPending}
      />
    </RawIntlProvider>
  );
};

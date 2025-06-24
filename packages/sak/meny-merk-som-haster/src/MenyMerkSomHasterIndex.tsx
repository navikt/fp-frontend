import { RawIntlProvider } from 'react-intl';

import { OkAvbrytModal } from '@navikt/ft-ui-komponenter';
import { createIntl } from '@navikt/ft-utils';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

export const getMenytekst = () => intl.formatMessage({ id: 'MenyMerkSomHasterIndex.MerkSomHaster' });

interface Props {
  merkSomHaster: () => void;
  lukkModal: () => void;
}

export const MenyMerkSomHasterIndex = ({ merkSomHaster, lukkModal }: Props) => {
  const submit = () => {
    merkSomHaster();

    lukkModal();
  };

  return (
    <RawIntlProvider value={intl}>
      <OkAvbrytModal
        text={intl.formatMessage({ id: 'MenyMerkSomHasterIndex.MerkSomHasterSpørsmål' })}
        showModal
        submit={submit}
        cancel={lukkModal}
      />
    </RawIntlProvider>
  );
};

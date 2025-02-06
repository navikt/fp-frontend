import { RawIntlProvider } from 'react-intl';

import { OkAvbrytModal } from '@navikt/ft-ui-komponenter';
import { createIntl } from '@navikt/ft-utils';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

export const getMenytekst = () => intl.formatMessage({ id: 'MenyApneForEndringerIndex.ReopenBehandling' });

interface Props {
  apneBehandlingForEndringer: () => void;
  lukkModal: () => void;
}

export const MenyApneForEndringerIndex = ({ apneBehandlingForEndringer, lukkModal }: Props) => {
  const submit = () => {
    apneBehandlingForEndringer();

    lukkModal();
  };

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

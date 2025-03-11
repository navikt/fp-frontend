import { RawIntlProvider } from 'react-intl';

import { OkAvbrytModal } from '@navikt/ft-ui-komponenter';
import { createIntl } from '@navikt/ft-utils';

import messages from '../../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  fjernVerge?: () => void;
  opprettVerge?: () => void;
  lukkModal: () => void;
}

export const MenyVergeIndex = ({ fjernVerge, opprettVerge, lukkModal }: Props) => {
  const submit = () => {
    lukkModal();
    const operasjon = opprettVerge || fjernVerge;
    if (!operasjon) {
      throw Error('Skal alltid ha enten opprettVerge eller fjernVerge');
    }
    operasjon();
  };

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

import { RawIntlProvider } from 'react-intl';

import { OkAvbrytModal } from '@navikt/ft-ui-komponenter';
import { createIntl } from '@navikt/ft-utils';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

export const getMenytekst = (): string => intl.formatMessage({ id: 'MenyTaAvVentIndex.ResumeBehandling' });

interface Props {
  taBehandlingAvVent: () => void;
  lukkModal: () => void;
}

export const MenyTaAvVentIndex = ({ taBehandlingAvVent, lukkModal }: Props) => {
  return (
    <RawIntlProvider value={intl}>
      <OkAvbrytModal
        text={intl.formatMessage({ id: 'MenyTaAvVentIndex.TaAvVent' })}
        showModal
        submit={() => {
          taBehandlingAvVent();
          lukkModal();
        }}
        cancel={lukkModal}
      />
    </RawIntlProvider>
  );
};

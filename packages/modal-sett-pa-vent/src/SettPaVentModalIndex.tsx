import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { KodeverkMedNavn } from '@navikt/fp-types';

import SettPaVentModal, { FormValues } from './components/SettPaVentModal';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  cancelEvent: () => void;
  submitCallback: (formData: FormValues) => void;
  showModal: boolean;
  ventearsaker: KodeverkMedNavn[];
  frist?: string;
  ventearsak?: string;
  visBrevErBestilt?: boolean;
  hasManualPaVent: boolean;
  erTilbakekreving: boolean;
  defaultVenteårsak?: string;
}

export const SettPaVentModalIndex = (props: Props) => (
  <RawIntlProvider value={intl}>
    <SettPaVentModal {...props} />
  </RawIntlProvider>
);

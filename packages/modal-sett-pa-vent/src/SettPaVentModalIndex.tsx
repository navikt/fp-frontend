import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { KodeverkMedNavn } from '@navikt/fp-types';

import { type FormValues, SettPaVentModal } from './components/SettPaVentModal';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  cancelEvent: () => void;
  submitCallback: (formData: FormValues) => void;
  showModal: boolean;
  ventearsaker: KodeverkMedNavn<'Venteårsak'>[];
  frist?: string | null;
  ventearsak?: string | null;
  visBrevErBestilt?: boolean;
  hasManualPaVent?: boolean;
  erTilbakekreving: boolean;
  defaultVenteårsak?: string;
}

export const SettPaVentModalIndex = ({ frist = null, ventearsak = null, hasManualPaVent = false, ...rest }: Props) => (
  <RawIntlProvider value={intl}>
    <SettPaVentModal frist={frist} ventearsak={ventearsak} hasManualPaVent={hasManualPaVent} {...rest} />
  </RawIntlProvider>
);

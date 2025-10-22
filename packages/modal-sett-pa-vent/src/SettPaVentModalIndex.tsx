import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type {
  KodeverkMedNavn,
  KodeverkMedNavnTilbakekreving,
  VenteArsakType,
  VenteÅrsakTypeFpTilbake,
} from '@navikt/fp-types';

import { type FormValues, SettPaVentModal } from './components/SettPaVentModal';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  cancelEvent: () => void;
  submitCallback: (formData: FormValues) => void;
  showModal: boolean;
  ventearsaker: KodeverkMedNavn<'Venteårsak'>[] | KodeverkMedNavnTilbakekreving<'Venteårsak'>[];
  frist?: string;
  ventearsak?: VenteArsakType | VenteÅrsakTypeFpTilbake;
  visBrevErBestilt?: boolean;
  hasManualPaVent?: boolean;
  erTilbakekreving: boolean;
  defaultVenteårsak?: VenteArsakType;
}

export const SettPaVentModalIndex = ({ frist, ventearsak, hasManualPaVent = false, ...rest }: Props) => (
  <RawIntlProvider value={intl}>
    <SettPaVentModal frist={frist} ventearsak={ventearsak} hasManualPaVent={hasManualPaVent} {...rest} />
  </RawIntlProvider>
);

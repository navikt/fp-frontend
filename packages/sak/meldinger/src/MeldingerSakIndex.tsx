import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { FagsakBehandlingDto, KodeverkMedNavn } from '@navikt/fp-types';

import { type ForhåndsvisBrevParams, type FormValues, Messages } from './components/Messages';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  submitCallback: (values: FormValues) => void;
  forhåndsvisBrev: (params: ForhåndsvisBrevParams) => void;
  revurderingVarslingArsak: KodeverkMedNavn<'RevurderingVarslingÅrsak'>[];
  fagsakYtelseType: string;
  kanVeilede: boolean;
  meldingFormData?: FormValues;
  setMeldingFormData: (data?: FormValues) => void;
  brukerManglerAdresse: boolean;
  behandling: FagsakBehandlingDto;
}

export const MeldingerSakIndex = (props: Props) => (
  <RawIntlProvider value={intl}>
    <Messages {...props} />
  </RawIntlProvider>
);

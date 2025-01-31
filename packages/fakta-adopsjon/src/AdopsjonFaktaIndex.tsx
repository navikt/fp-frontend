import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { FamilieHendelseSamling, Soknad, StandardFaktaPanelProps } from '@navikt/fp-types';

import AdopsjonInfoPanel from './components/AdopsjonInfoPanel';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  soknad: Soknad;
  familiehendelse: FamilieHendelseSamling;
  isForeldrepengerFagsak: boolean;
}

export const AdopsjonFaktaIndex = ({
  soknad,
  familiehendelse,
  aksjonspunkter,
  alleMerknaderFraBeslutter,
  alleKodeverk,
  submitCallback,
  readOnly,
  isForeldrepengerFagsak,
  harApneAksjonspunkter,
  submittable,
}: Props & StandardFaktaPanelProps) => (
  <RawIntlProvider value={intl}>
    <AdopsjonInfoPanel
      soknad={soknad}
      gjeldendeFamiliehendelse={familiehendelse.gjeldende}
      aksjonspunkter={aksjonspunkter}
      alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
      alleKodeverk={alleKodeverk}
      submitCallback={submitCallback}
      readOnly={readOnly}
      isForeldrepengerFagsak={isForeldrepengerFagsak}
      hasOpenAksjonspunkter={harApneAksjonspunkter}
      submittable={submittable}
    />
  </RawIntlProvider>
);

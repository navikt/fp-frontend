import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { StandardProsessPanelProps } from '@navikt/fp-types';

import ErForeldreansvarVilkaarOppfyltForm from './components/ErForeldreansvarVilkaarOppfyltForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  isForeldreansvar2Ledd: boolean;
  isEngangsstonad: boolean;
}

export const ForeldreansvarVilkarProsessIndex = ({
  behandling,
  aksjonspunkter,
  isEngangsstonad,
  isForeldreansvar2Ledd,
  status,
  submitCallback,
  isReadOnly,
  readOnlySubmitButton,
  alleKodeverk,
  alleMerknaderFraBeslutter,
}: Props & StandardProsessPanelProps) => (
  <RawIntlProvider value={intl}>
    <ErForeldreansvarVilkaarOppfyltForm
      behandlingsresultat={behandling.behandlingsresultat}
      isForeldreansvar2Ledd={isForeldreansvar2Ledd}
      isEngangsstonad={isEngangsstonad}
      aksjonspunkter={aksjonspunkter}
      status={status}
      submitCallback={submitCallback}
      readOnly={isReadOnly}
      readOnlySubmitButton={readOnlySubmitButton}
      alleKodeverk={alleKodeverk}
      erIkkeGodkjentAvBeslutter={aksjonspunkter.some(a => alleMerknaderFraBeslutter[a.definisjon]?.notAccepted)}
    />
  </RawIntlProvider>
);

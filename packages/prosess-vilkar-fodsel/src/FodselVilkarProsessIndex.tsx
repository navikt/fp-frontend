import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { StandardProsessPanelProps } from '@navikt/fp-types';

import FodselVilkarForm from './components/FodselVilkarForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  ytelseTypeKode: string;
}

export const FodselVilkarProsessIndex = ({
  behandling,
  aksjonspunkter,
  status,
  vilkar,
  ytelseTypeKode,
  submitCallback,
  isReadOnly,
  readOnlySubmitButton,
  isAksjonspunktOpen,
  alleKodeverk,
  alleMerknaderFraBeslutter,
}: Props & StandardProsessPanelProps) => (
  <RawIntlProvider value={intl}>
    <FodselVilkarForm
      behandlingsresultat={behandling.behandlingsresultat}
      aksjonspunkter={aksjonspunkter}
      status={status}
      vilkar={vilkar}
      ytelseTypeKode={ytelseTypeKode}
      submitCallback={submitCallback}
      readOnly={isReadOnly}
      readOnlySubmitButton={readOnlySubmitButton}
      isApOpen={isAksjonspunktOpen}
      alleKodeverk={alleKodeverk}
      erIkkeGodkjentAvBeslutter={aksjonspunkter.some(a => alleMerknaderFraBeslutter[a.definisjon]?.notAccepted)}
    />
  </RawIntlProvider>
);

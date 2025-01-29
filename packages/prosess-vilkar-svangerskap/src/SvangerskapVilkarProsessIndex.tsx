import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { FodselOgTilrettelegging, StandardProsessPanelProps } from '@navikt/fp-types';

import SvangerskapVilkarForm from './components/SvangerskapVilkarForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  svangerskapspengerTilrettelegging: FodselOgTilrettelegging;
}

export const SvangerskapVilkarProsessIndex = ({
  behandling,
  aksjonspunkter,
  status,
  submitCallback,
  isReadOnly,
  readOnlySubmitButton,
  isAksjonspunktOpen,
  alleKodeverk,
  alleMerknaderFraBeslutter,
  svangerskapspengerTilrettelegging,
}: StandardProsessPanelProps & Props) => (
  <RawIntlProvider value={intl}>
    <SvangerskapVilkarForm
      behandlingsresultat={behandling.behandlingsresultat}
      aksjonspunkter={aksjonspunkter}
      status={status}
      submitCallback={submitCallback}
      readOnly={isReadOnly}
      readOnlySubmitButton={readOnlySubmitButton}
      isApOpen={isAksjonspunktOpen}
      alleKodeverk={alleKodeverk}
      svangerskapspengerTilrettelegging={svangerskapspengerTilrettelegging}
      erIkkeGodkjentAvBeslutter={aksjonspunkter.some(a => alleMerknaderFraBeslutter[a.definisjon]?.notAccepted)}
    />
  </RawIntlProvider>
);

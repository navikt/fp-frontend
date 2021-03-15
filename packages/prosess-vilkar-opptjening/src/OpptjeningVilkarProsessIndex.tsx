import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import { StandardProsessPanelProps, Opptjening } from '@fpsak-frontend/types';

import OpptjeningVilkarForm from './components/OpptjeningVilkarForm';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  opptjening: Opptjening;
  lovReferanse?: string;
}

const OpptjeningVilkarProsessIndex: FunctionComponent<OwnProps & StandardProsessPanelProps> = ({
  behandling,
  opptjening,
  aksjonspunkter,
  status,
  lovReferanse,
  submitCallback,
  isReadOnly,
  isAksjonspunktOpen,
  readOnlySubmitButton,
}) => (
  <RawIntlProvider value={intl}>
    <OpptjeningVilkarForm
      behandlingId={behandling.id}
      behandlingVersjon={behandling.versjon}
      behandlingsresultat={behandling.behandlingsresultat}
      fastsattOpptjening={opptjening.fastsattOpptjening}
      status={status}
      lovReferanse={lovReferanse}
      aksjonspunkter={aksjonspunkter}
      submitCallback={submitCallback}
      readOnly={isReadOnly}
      isAksjonspunktOpen={isAksjonspunktOpen}
      readOnlySubmitButton={readOnlySubmitButton}
    />
  </RawIntlProvider>
);

export default OpptjeningVilkarProsessIndex;

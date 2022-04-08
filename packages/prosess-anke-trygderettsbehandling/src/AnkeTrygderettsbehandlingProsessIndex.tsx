import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { AnkeVurdering, StandardProsessPanelProps } from '@fpsak-frontend/types';
import { createIntl } from '@navikt/ft-utils';
import { ReduxWrapper } from '@fpsak-frontend/form';

import TrygderettsbehandlingForm from './components/TrygderettsbehandlingForm';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  ankeVurdering: AnkeVurdering;
}

const AnkeTrygderettsbehandlingProsessIndex: FunctionComponent<OwnProps & StandardProsessPanelProps> = ({
  behandling,
  ankeVurdering,
  aksjonspunkter,
  submitCallback,
  isReadOnly,
  readOnlySubmitButton,
  alleKodeverk,
  formData,
  setFormData,
}) => (
  <RawIntlProvider value={intl}>
    <ReduxWrapper formName="AnkeTrygderettsbehandlingProsessIndex" formData={formData} setFormData={setFormData}>
      <TrygderettsbehandlingForm
        ankeVurderingResultat={ankeVurdering.ankeVurderingResultat}
        aksjonspunkter={aksjonspunkter}
        submitCallback={submitCallback}
        sprakkode={behandling.sprakkode}
        readOnly={isReadOnly}
        readOnlySubmitButton={readOnlySubmitButton}
        ankeOmgorArsaker={alleKodeverk[kodeverkTyper.ANKE_OMGJOER_AARSAK]}
      />
    </ReduxWrapper>
  </RawIntlProvider>
);

export default AnkeTrygderettsbehandlingProsessIndex;

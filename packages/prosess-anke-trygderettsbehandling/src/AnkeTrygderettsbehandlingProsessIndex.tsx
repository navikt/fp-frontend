import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { AnkeVurdering, StandardProsessPanelProps } from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';
import { ReduxWrapper } from '@fpsak-frontend/form';

import TrygderettsbehandlingForm from './components/TrygderettsbehandlingForm';
import { BrevData } from './components/PreviewAnkeLink';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  ankeVurdering: AnkeVurdering;
  previewCallback: (data: BrevData) => Promise<any>;
}

const AnkeTrygderettsbehandlingProsessIndex: FunctionComponent<OwnProps & StandardProsessPanelProps> = ({
  behandling,
  ankeVurdering,
  aksjonspunkter,
  submitCallback,
  isReadOnly,
  readOnlySubmitButton,
  previewCallback,
  alleKodeverk,
  formData,
  setFormData,
}) => (
  <RawIntlProvider value={intl}>
    <ReduxWrapper formData={formData} setFormData={setFormData}>
      <TrygderettsbehandlingForm
        behandlingId={behandling.id}
        behandlingVersjon={behandling.versjon}
        ankeVurderingResultat={ankeVurdering.ankeVurderingResultat}
        aksjonspunkter={aksjonspunkter}
        submitCallback={submitCallback}
        sprakkode={behandling.sprakkode}
        readOnly={isReadOnly}
        readOnlySubmitButton={readOnlySubmitButton}
        previewCallback={previewCallback}
        ankeOmgorArsaker={alleKodeverk[kodeverkTyper.ANKE_OMGJOER_AARSAK]}
      />
    </ReduxWrapper>
  </RawIntlProvider>
);

export default AnkeTrygderettsbehandlingProsessIndex;

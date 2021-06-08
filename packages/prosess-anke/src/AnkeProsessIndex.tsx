import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { AnkeVurdering, StandardProsessPanelProps } from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';
import { ReduxWrapper } from '@fpsak-frontend/form';
import { AnkeVurderingResultatAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import BehandleAnkeForm, { BehandlingInfo } from './components/BehandleAnkeForm';
import { BrevData } from './components/PreviewAnkeLink';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  ankeVurdering: AnkeVurdering;
  saveAnke: (data: AnkeVurderingResultatAp) => Promise<any>;
  previewCallback: (data: BrevData) => Promise<any>;
  behandlinger: BehandlingInfo[];
}

const AnkeProsessIndex: FunctionComponent<OwnProps & StandardProsessPanelProps> = ({
  behandling,
  ankeVurdering,
  behandlinger,
  aksjonspunkter,
  submitCallback,
  isReadOnly,
  readOnlySubmitButton,
  saveAnke,
  previewCallback,
  alleKodeverk,
  formData,
  setFormData,
}) => (
  <RawIntlProvider value={intl}>
    <ReduxWrapper formName="AnkeProsessIndex" formData={formData} setFormData={setFormData}>
      <BehandleAnkeForm
        sprakkode={behandling.sprakkode}
        ankeVurderingResultat={ankeVurdering ? ankeVurdering.ankeVurderingResultat : undefined}
        behandlinger={behandlinger}
        aksjonspunkter={aksjonspunkter}
        submitCallback={submitCallback}
        readOnly={isReadOnly}
        readOnlySubmitButton={readOnlySubmitButton}
        saveAnke={saveAnke}
        previewCallback={previewCallback}
        ankeOmgorArsaker={alleKodeverk[kodeverkTyper.ANKE_OMGJOER_AARSAK]}
        behandlingTyper={alleKodeverk[kodeverkTyper.BEHANDLING_TYPE]}
        behandlingStatuser={alleKodeverk[kodeverkTyper.BEHANDLING_STATUS]}
      />
    </ReduxWrapper>
  </RawIntlProvider>
);

export default AnkeProsessIndex;

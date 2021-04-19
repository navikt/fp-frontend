import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { AnkeVurdering, StandardProsessPanelProps } from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';
import { ReduxWrapper } from '@fpsak-frontend/form';

import BehandleAnkeForm, { BehandlingInfo } from './components/BehandleAnkeForm';
import { AnkeData } from './components/TempsaveAnkeButton';
import { BrevData } from './components/PreviewAnkeLink';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  ankeVurdering: AnkeVurdering;
  saveAnke: (data: AnkeData) => Promise<any>;
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
        behandlingId={behandling.id}
        behandlingVersjon={behandling.versjon}
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
      />
    </ReduxWrapper>
  </RawIntlProvider>
);

export default AnkeProsessIndex;

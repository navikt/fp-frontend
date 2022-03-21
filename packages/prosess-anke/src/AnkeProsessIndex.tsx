import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

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
        ankeVurderingInput={ankeVurdering}
        behandlinger={behandlinger}
        aksjonspunkter={aksjonspunkter}
        submitCallback={submitCallback}
        readOnly={isReadOnly}
        readOnlySubmitButton={readOnlySubmitButton}
        saveAnke={saveAnke}
        previewCallback={previewCallback}
        alleKodeverk={alleKodeverk}
        alleAktuelleHjemler={ankeVurdering.aktuelleHjemler ? ankeVurdering.aktuelleHjemler : []}
      />
    </ReduxWrapper>
  </RawIntlProvider>
);

export default AnkeProsessIndex;

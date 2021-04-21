import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { AnkeVurdering, StandardProsessPanelProps } from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';
import { ReduxWrapper } from '@fpsak-frontend/form';

import BehandleResultatForm from './components/BehandleResultatForm';
import { BrevData } from './components/PreviewAnkeLink';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  ankeVurdering: AnkeVurdering;
  previewCallback: (data: BrevData) => Promise<any>;
}

const AnkeResultatProsessIndex: FunctionComponent<OwnProps & StandardProsessPanelProps> = ({
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
    <ReduxWrapper formName="AnkeResultatProsessIndex" formData={formData} setFormData={setFormData}>
      <BehandleResultatForm
        ankeVurderingResultat={ankeVurdering.ankeVurderingResultat}
        aksjonspunkter={aksjonspunkter}
        submitCallback={submitCallback}
        readOnly={isReadOnly}
        readOnlySubmitButton={readOnlySubmitButton}
        previewCallback={previewCallback}
        alleKodeverk={alleKodeverk}
      />
    </ReduxWrapper>
  </RawIntlProvider>
);

export default AnkeResultatProsessIndex;

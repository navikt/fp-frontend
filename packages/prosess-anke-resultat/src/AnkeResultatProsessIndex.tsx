import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import { AnkeVurdering, StandardProsessPanelProps } from '@fpsak-frontend/types';

import BehandleResultatForm from './components/BehandleResultatForm';
import { BrevData } from './components/PreviewAnkeLink';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  ankeVurdering: AnkeVurdering;
  previewCallback: (data: BrevData) => Promise<any>;
}

const AnkeResultatProsessIndex: FunctionComponent<OwnProps & StandardProsessPanelProps> = ({
  behandling,
  ankeVurdering,
  aksjonspunkter,
  submitCallback,
  isReadOnly,
  readOnlySubmitButton,
  previewCallback,
  alleKodeverk,
}) => (
  <RawIntlProvider value={intl}>
    <BehandleResultatForm
      behandlingId={behandling.id}
      behandlingVersjon={behandling.versjon}
      ankeVurderingResultat={ankeVurdering.ankeVurderingResultat}
      aksjonspunkter={aksjonspunkter}
      submitCallback={submitCallback}
      readOnly={isReadOnly}
      readOnlySubmitButton={readOnlySubmitButton}
      previewCallback={previewCallback}
      alleKodeverk={alleKodeverk}
    />
  </RawIntlProvider>
);

export default AnkeResultatProsessIndex;

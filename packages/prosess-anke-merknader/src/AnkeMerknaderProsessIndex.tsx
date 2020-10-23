import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import { AnkeVurdering } from '@fpsak-frontend/types';
import { StandardProsessFormProps } from '@fpsak-frontend/prosess-felles';

import BehandleMerknaderForm from './components/BehandleMerknaderForm';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  ankeVurdering: AnkeVurdering;
  saveAnke: (data: any) => Promise<any>;
  previewCallback: (data: any) => Promise<any>;
}

const AnkeMerknaderProsessIndex: FunctionComponent<OwnProps & StandardProsessFormProps> = ({
  behandling,
  ankeVurdering,
  aksjonspunkter,
  submitCallback,
  isReadOnly,
  readOnlySubmitButton,
  saveAnke,
  previewCallback,
}) => (
  <RawIntlProvider value={intl}>
    <BehandleMerknaderForm
      behandlingId={behandling.id}
      behandlingVersjon={behandling.versjon}
      ankeVurderingResultat={ankeVurdering.ankeVurderingResultat}
      aksjonspunkter={aksjonspunkter}
      submitCallback={submitCallback}
      sprakkode={behandling.sprakkode}
      readOnly={isReadOnly}
      readOnlySubmitButton={readOnlySubmitButton}
      saveAnke={saveAnke}
      previewCallback={previewCallback}
    />
  </RawIntlProvider>
);

export default AnkeMerknaderProsessIndex;

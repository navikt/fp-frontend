import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import { Aksjonspunkt, AnkeVurdering, Behandling } from '@fpsak-frontend/types';

import BehandleMerknaderForm from './components/BehandleMerknaderForm';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  behandling: Behandling;
  ankeVurdering: AnkeVurdering;
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (data: any) => Promise<any>;
  isReadOnly: boolean;
  readOnlySubmitButton: boolean;
  saveAnke: (data: any) => Promise<any>;
  previewCallback: (data: any) => Promise<any>;
}

const AnkeMerknaderProsessIndex: FunctionComponent<OwnProps> = ({
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

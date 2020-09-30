import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import { Aksjonspunkt, AnkeVurdering, Behandling } from '@fpsak-frontend/types';

import BehandleAnkeForm, { BehandlingInfo } from './components/BehandleAnkeForm';
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
  behandlinger: BehandlingInfo[];
}

const AnkeProsessIndex: FunctionComponent<OwnProps> = ({
  behandling,
  ankeVurdering,
  behandlinger,
  aksjonspunkter,
  submitCallback,
  isReadOnly,
  readOnlySubmitButton,
  saveAnke,
  previewCallback,
}) => (
  <RawIntlProvider value={intl}>
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
    />
  </RawIntlProvider>
);

export default AnkeProsessIndex;

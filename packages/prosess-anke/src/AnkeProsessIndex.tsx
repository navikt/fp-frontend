import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { AnkeVurdering, StandardProsessPanelProps } from '@fpsak-frontend/types';

import BehandleAnkeForm, { BehandlingInfo } from './components/BehandleAnkeForm';
import { AnkeData } from './components/TempsaveAnkeButton';
import { BrevData } from './components/PreviewAnkeLink';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

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
      ankeOmgorArsaker={alleKodeverk[kodeverkTyper.ANKE_OMGJOER_AARSAK]}
    />
  </RawIntlProvider>
);

export default AnkeProsessIndex;

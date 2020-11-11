import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { AnkeVurdering } from '@fpsak-frontend/types';
import { StandardProsessFormProps } from '@fpsak-frontend/prosess-felles';

import BehandleAnkeForm, { BehandlingInfo } from './components/BehandleAnkeForm';
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
  behandlinger: BehandlingInfo[];
}

const AnkeProsessIndex: FunctionComponent<OwnProps & StandardProsessFormProps> = ({
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

import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import {
  Aksjonspunkt, AlleKodeverk, AnkeVurdering, Behandling,
} from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';
import { AnkeVurderingResultatAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import BehandleAnkeForm, { BehandlingInfo } from './components/BehandleAnkeForm';
import { AnkeData } from './components/TempsaveAnkeButton';
import { BrevData } from './components/PreviewAnkeLink';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  ankeVurdering?: AnkeVurdering;
  saveAnke: (data: AnkeData) => Promise<any>;
  previewCallback: (data: BrevData) => Promise<any>;
  behandlinger: BehandlingInfo[];
  behandling: Behandling;
  alleKodeverk: AlleKodeverk;
  submitCallback: (data: AnkeVurderingResultatAp) => Promise<void>;
  isReadOnly: boolean;
  readOnlySubmitButton: boolean;
  aksjonspunkter: Aksjonspunkt[];
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
  alleKodeverk,
}) => (
  <RawIntlProvider value={intl}>
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
  </RawIntlProvider>
);

export default AnkeProsessIndex;

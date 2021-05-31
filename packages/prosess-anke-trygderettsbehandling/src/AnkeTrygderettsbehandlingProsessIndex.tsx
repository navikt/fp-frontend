import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import {
  Aksjonspunkt, AlleKodeverk, AnkeVurdering, Behandling,
} from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';
import { AnkeMerknaderResultatAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import TrygderettsbehandlingForm from './components/TrygderettsbehandlingForm';
import { BrevData } from './components/PreviewAnkeLink';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  ankeVurdering: AnkeVurdering;
  previewCallback: (data: BrevData) => Promise<any>;
  behandling: Behandling;
  alleKodeverk: AlleKodeverk;
  submitCallback: (data: AnkeMerknaderResultatAp) => Promise<void>;
  isReadOnly: boolean;
  readOnlySubmitButton: boolean;
  aksjonspunkter: Aksjonspunkt[];
}

const AnkeTrygderettsbehandlingProsessIndex: FunctionComponent<OwnProps> = ({
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
    <TrygderettsbehandlingForm
      ankeVurderingResultat={ankeVurdering.ankeVurderingResultat}
      aksjonspunkter={aksjonspunkter}
      submitCallback={submitCallback}
      sprakkode={behandling.sprakkode}
      readOnly={isReadOnly}
      readOnlySubmitButton={readOnlySubmitButton}
      previewCallback={previewCallback}
      ankeOmgorArsaker={alleKodeverk[kodeverkTyper.ANKE_OMGJOER_AARSAK]}
    />
  </RawIntlProvider>
);

export default AnkeTrygderettsbehandlingProsessIndex;

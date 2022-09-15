import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { AnkeVurdering, StandardProsessPanelProps } from '@fpsak-frontend/types';
import { createIntl } from '@navikt/ft-utils';
import { ReduxWrapper } from '@fpsak-frontend/form';

import TrygderettsbehandlingForm, { BehandlingInfo } from './components/TrygderettsbehandlingForm';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  ankeVurdering: AnkeVurdering;
  behandlinger: BehandlingInfo[];
}

const AnkeTrygderettsbehandlingProsessIndex: FunctionComponent<OwnProps & StandardProsessPanelProps> = ({
  behandling,
  ankeVurdering,
  behandlinger,
  aksjonspunkter,
  submitCallback,
  isReadOnly,
  readOnlySubmitButton,
  alleKodeverk,
  formData,
  setFormData,
}) => (
  <RawIntlProvider value={intl}>
    <ReduxWrapper formName="AnkeTrygderettsbehandlingProsessIndex" formData={formData} setFormData={setFormData}>
      <TrygderettsbehandlingForm
        // @ts-ignore
        ankeVurderingInput={ankeVurdering}
        // @ts-ignore
        alleKodeverk={alleKodeverk}
        // @ts-ignore
        alleAktuelleHjemler={ankeVurdering.aktuelleHjemler ? ankeVurdering.aktuelleHjemler : []}
        // @ts-ignore
        behandlinger={behandlinger}
        // @ts-ignore
        aksjonspunkter={aksjonspunkter}
        // @ts-ignore
        submitCallback={submitCallback}
        // @ts-ignore
        sprakkode={behandling.sprakkode}
        // @ts-ignore
        readOnly={isReadOnly}
        // @ts-ignore
        readOnlySubmitButton={readOnlySubmitButton}
      />
    </ReduxWrapper>
  </RawIntlProvider>
);

export default AnkeTrygderettsbehandlingProsessIndex;

import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { Aksjonspunkt, AlleKodeverk, AnkeVurdering } from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';
import { BekreftVedtakUtenTotrinnskontrollAp, ForeslaVedtakAp, ForeslaVedtakManueltAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import BehandleResultatForm from './components/BehandleResultatForm';
import { BrevData } from './components/PreviewAnkeLink';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  ankeVurdering: AnkeVurdering;
  previewCallback: (data: BrevData) => Promise<any>;
  alleKodeverk: AlleKodeverk;
  submitCallback: (data: ForeslaVedtakAp | ForeslaVedtakManueltAp | BekreftVedtakUtenTotrinnskontrollAp) => Promise<void>;
  isReadOnly: boolean;
  readOnlySubmitButton: boolean;
  aksjonspunkter: Aksjonspunkt[];
}

const AnkeResultatProsessIndex: FunctionComponent<OwnProps> = ({
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

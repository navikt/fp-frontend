import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { KlageVurdering, StandardProsessPanelProps } from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';
import { ReduxWrapper } from '@fpsak-frontend/form';

import messages from '../i18n/nb_NO.json';
import BehandleKlageFormKa from './components/ka/BehandleKlageFormKa';
import BehandleKlageFormNfp from './components/nfp/BehandleKlageFormNfp';
import { BrevData } from './components/felles/PreviewKlageLink';
import { TransformedValues } from './components/felles/TempsaveKlageButton';

const intl = createIntl(messages);

interface OwnProps {
  klageVurdering: KlageVurdering;
  previewCallback: (data: BrevData) => Promise<any>;
  saveKlage: (data: TransformedValues) => Promise<any>;
}

const KlagevurderingProsessIndex: FunctionComponent<OwnProps & StandardProsessPanelProps> = ({
  behandling,
  klageVurdering,
  alleKodeverk,
  saveKlage,
  submitCallback,
  isReadOnly,
  previewCallback,
  readOnlySubmitButton,
  aksjonspunkter,
  formData,
  setFormData,
}) => (
  <RawIntlProvider value={intl}>
    <ReduxWrapper formName="KlagevurderingProsessIndex" formData={formData} setFormData={setFormData}>
      {aksjonspunkter.some((a) => a.definisjon.kode === aksjonspunktCodes.BEHANDLE_KLAGE_NK) && (
        <BehandleKlageFormKa
          sprakkode={behandling.sprakkode}
          klageVurdering={klageVurdering}
          saveKlage={saveKlage}
          submitCallback={submitCallback}
          readOnly={isReadOnly}
          previewCallback={previewCallback}
          readOnlySubmitButton={readOnlySubmitButton}
          alleKodeverk={alleKodeverk}
        />
      )}
      {aksjonspunkter.some((a) => a.definisjon.kode === aksjonspunktCodes.BEHANDLE_KLAGE_NFP) && (
        <BehandleKlageFormNfp
          sprakkode={behandling.sprakkode}
          klageVurdering={klageVurdering}
          saveKlage={saveKlage}
          submitCallback={submitCallback}
          readOnly={isReadOnly}
          previewCallback={previewCallback}
          readOnlySubmitButton={readOnlySubmitButton}
          alleKodeverk={alleKodeverk}
        />
      )}
    </ReduxWrapper>
  </RawIntlProvider>
);

export default KlagevurderingProsessIndex;

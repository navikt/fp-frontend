import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { KlageVurdering } from '@fpsak-frontend/types';
import { StandardProsessFormProps } from '@fpsak-frontend/prosess-felles';

import messages from '../i18n/nb_NO.json';
import BehandleKlageFormKa from './components/ka/BehandleKlageFormKa';
import BehandleKlageFormNfp from './components/nfp/BehandleKlageFormNfp';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  klageVurdering: KlageVurdering;
  saveKlage: (data: any) => Promise<any>;
  previewCallback: (data: any) => Promise<any>;
}

const KlagevurderingProsessIndex: FunctionComponent<OwnProps & StandardProsessFormProps> = ({
  behandling,
  klageVurdering,
  alleKodeverk,
  saveKlage,
  submitCallback,
  isReadOnly,
  previewCallback,
  readOnlySubmitButton,
  aksjonspunkter,
}) => (
  <RawIntlProvider value={intl}>
    {aksjonspunkter.some((a) => a.definisjon.kode === aksjonspunktCodes.BEHANDLE_KLAGE_NK) && (
      <BehandleKlageFormKa
        behandlingId={behandling.id}
        behandlingVersjon={behandling.versjon}
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
        behandlingId={behandling.id}
        behandlingVersjon={behandling.versjon}
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
  </RawIntlProvider>
);

export default KlagevurderingProsessIndex;

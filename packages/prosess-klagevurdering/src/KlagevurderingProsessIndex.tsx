import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import { KlageVurdering, StandardProsessPanelProps } from '@navikt/fp-types';
import { createIntl } from '@navikt/ft-utils';

import messages from '../i18n/nb_NO.json';
import BehandleKlageFormKa from './components/ka/BehandleKlageFormKa';
import BehandleKlageFormNfp from './components/nfp/BehandleKlageFormNfp';
import { BrevData } from './components/nfp/PreviewKlageLink';
import { TransformedValues } from './components/nfp/TempsaveKlageButton';

import '@navikt/fp-prosess-felles/dist/style.css';

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
    {klageVurdering.klageVurderingResultatNK && (
      <BehandleKlageFormKa
        klageVurdering={klageVurdering}
        alleKodeverk={alleKodeverk}
      />
    )}
    {aksjonspunkter.some((a) => a.definisjon === AksjonspunktCode.BEHANDLE_KLAGE_NFP) && (
      <BehandleKlageFormNfp
        sprakkode={behandling.sprakkode}
        klageVurdering={klageVurdering}
        saveKlage={saveKlage}
        submitCallback={submitCallback}
        readOnly={isReadOnly}
        previewCallback={previewCallback}
        readOnlySubmitButton={readOnlySubmitButton}
        alleKodeverk={alleKodeverk}
        alleAktuelleHjemler={klageVurdering.aktuelleHjemler ? klageVurdering.aktuelleHjemler : []}
        formData={formData}
        setFormData={setFormData}
      />
    )}
  </RawIntlProvider>
);

export default KlagevurderingProsessIndex;

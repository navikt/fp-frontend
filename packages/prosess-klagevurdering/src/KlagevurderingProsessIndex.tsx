import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { KlageVurdering, StandardProsessPanelProps } from '@navikt/fp-types';

import BehandleKlageFormKa from './components/ka/BehandleKlageFormKa';
import BehandleKlageFormNfp from './components/nfp/BehandleKlageFormNfp';
import { BrevData } from './components/nfp/PreviewKlageLink';
import { TransformedValues } from './components/nfp/TempsaveKlageButton';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  klageVurdering: KlageVurdering;
  previewCallback: (data: BrevData) => void;
  saveKlage: (data: TransformedValues) => void;
}

export const KlagevurderingProsessIndex = ({
  behandling,
  klageVurdering,
  alleKodeverk,
  saveKlage,
  submitCallback,
  isReadOnly,
  previewCallback,
  readOnlySubmitButton,
  aksjonspunkter,
}: Props & StandardProsessPanelProps) => (
  <RawIntlProvider value={intl}>
    {klageVurdering.klageVurderingResultatNK && (
      <BehandleKlageFormKa klageVurdering={klageVurdering} alleKodeverk={alleKodeverk} />
    )}
    {aksjonspunkter.some(a => a.definisjon === AksjonspunktKode.BEHANDLE_KLAGE_NFP) && (
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
      />
    )}
  </RawIntlProvider>
);

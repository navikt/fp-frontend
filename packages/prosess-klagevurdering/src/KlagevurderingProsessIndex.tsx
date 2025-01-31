import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { KlageVurdering } from '@navikt/fp-types';
import { usePanelContext } from '@navikt/fp-utils';

import { BehandleKlageFormKa } from './components/ka/BehandleKlageFormKa';
import { BehandleKlageFormNfp } from './components/nfp/BehandleKlageFormNfp';
import { BrevData } from './components/nfp/PreviewKlageLink';
import { TransformedValues } from './components/nfp/TempsaveKlageButton';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  klageVurdering: KlageVurdering;
  previewCallback: (data: BrevData) => void;
  saveKlage: (data: TransformedValues) => void;
  readOnlySubmitButton: boolean;
}

export const KlagevurderingProsessIndex = ({
  klageVurdering,
  saveKlage,
  previewCallback,
  readOnlySubmitButton,
}: Props) => {
  const { aksjonspunkterForPanel } = usePanelContext();
  return (
    <RawIntlProvider value={intl}>
      {klageVurdering.klageVurderingResultatNK && <BehandleKlageFormKa klageVurdering={klageVurdering} />}
      {aksjonspunkterForPanel.some(a => a.definisjon === AksjonspunktKode.BEHANDLE_KLAGE_NFP) && (
        <BehandleKlageFormNfp
          klageVurdering={klageVurdering}
          saveKlage={saveKlage}
          previewCallback={previewCallback}
          readOnlySubmitButton={readOnlySubmitButton}
          alleAktuelleHjemler={klageVurdering.aktuelleHjemler ? klageVurdering.aktuelleHjemler : []}
        />
      )}
    </RawIntlProvider>
  );
};

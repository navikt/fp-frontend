import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import { KodeverkMedNavn } from '@fpsak-frontend/types';

import SettPaVentModal from './components/SettPaVentModal';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  cancelEvent: () => void;
  handleSubmit: (formData: any) => void;
  showModal: boolean;
  ventearsaker: KodeverkMedNavn[];
  frist?: string;
  originalFrist?: string;
  ventearsak?: string;
  originalVentearsak?: string;
  visBrevErBestilt?: boolean;
  hasManualPaVent: boolean;
  erTilbakekreving?: boolean;
}

const SettPaVentModalIndex: FunctionComponent<OwnProps> = ({
  cancelEvent,
  handleSubmit,
  showModal,
  ventearsaker,
  frist,
  originalFrist,
  ventearsak,
  originalVentearsak,
  visBrevErBestilt,
  hasManualPaVent,
  erTilbakekreving,
}) => (
  <RawIntlProvider value={intl}>
    <SettPaVentModal
      cancelEvent={cancelEvent}
      onSubmit={handleSubmit}
      showModal={showModal}
      ventearsaker={ventearsaker}
      frist={frist}
      originalFrist={originalFrist}
      ventearsak={ventearsak}
      originalVentearsak={originalVentearsak}
      visBrevErBestilt={visBrevErBestilt}
      hasManualPaVent={hasManualPaVent}
      erTilbakekreving={erTilbakekreving}
    />
  </RawIntlProvider>
);

export default SettPaVentModalIndex;

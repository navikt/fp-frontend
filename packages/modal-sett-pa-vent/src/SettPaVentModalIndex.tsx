import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { KodeverkMedNavn } from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';

import SettPaVentModal from './components/SettPaVentModal';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  cancelEvent: () => void;
  submitCallback: (formData: any) => void;
  showModal: boolean;
  ventearsaker: KodeverkMedNavn[];
  frist?: string;
  ventearsak?: string;
  visBrevErBestilt?: boolean;
  hasManualPaVent: boolean;
  erTilbakekreving: boolean;
}

const SettPaVentModalIndex: FunctionComponent<OwnProps> = ({
  cancelEvent,
  submitCallback,
  showModal,
  ventearsaker,
  frist,
  ventearsak,
  visBrevErBestilt,
  hasManualPaVent,
  erTilbakekreving,
}) => (
  <RawIntlProvider value={intl}>
    <SettPaVentModal
      cancelEvent={cancelEvent}
      submitCallback={submitCallback}
      showModal={showModal}
      ventearsaker={ventearsaker}
      frist={frist}
      ventearsak={ventearsak}
      visBrevErBestilt={visBrevErBestilt}
      hasManualPaVent={hasManualPaVent}
      erTilbakekreving={erTilbakekreving}
    />
  </RawIntlProvider>
);

export default SettPaVentModalIndex;

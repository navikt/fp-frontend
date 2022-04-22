import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { KodeverkMedNavn } from '@fpsak-frontend/types';
import { createIntl } from '@navikt/ft-utils';

import SettPaVentModal, { FormValues } from './components/SettPaVentModal';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  cancelEvent: () => void;
  submitCallback: (formData: FormValues) => void;
  showModal: boolean;
  ventearsaker: KodeverkMedNavn[];
  frist?: string;
  ventearsak?: string;
  visBrevErBestilt?: boolean;
  hasManualPaVent: boolean;
  erTilbakekreving: boolean;
  defaultVenteårsak?: string;
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
  defaultVenteårsak,
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
      defaultVenteårsak={defaultVenteårsak}
    />
  </RawIntlProvider>
);

export default SettPaVentModalIndex;

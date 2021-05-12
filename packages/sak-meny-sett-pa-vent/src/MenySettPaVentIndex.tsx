import React, { FunctionComponent, useCallback } from 'react';
import { RawIntlProvider } from 'react-intl';

import { KodeverkMedNavn } from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';
import SettPaVentModalIndex from '@fpsak-frontend/modal-sett-pa-vent';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

export const getMenytekst = (): string => intl.formatMessage({ id: 'MenySettPaVentIndex.BehandlingOnHold' });

interface OwnProps {
  behandlingVersjon?: number;
  settBehandlingPaVent: (params: {
    frist: string;
    ventearsak: string;
  }) => void;
  ventearsaker: KodeverkMedNavn[];
  lukkModal: () => void;
  erTilbakekreving: boolean;
}

const MenySettPaVentIndex: FunctionComponent<OwnProps> = ({
  behandlingVersjon,
  settBehandlingPaVent,
  ventearsaker,
  lukkModal,
  erTilbakekreving,
}) => {
  const submit = useCallback((formValues) => {
    const values = {
      frist: formValues.frist,
      ventearsak: formValues.ventearsak,
    };
    settBehandlingPaVent(values);

    lukkModal();
  }, [behandlingVersjon]);

  return (
    <RawIntlProvider value={intl}>
      <SettPaVentModalIndex
        showModal
        submitCallback={submit}
        cancelEvent={lukkModal}
        ventearsaker={ventearsaker}
        erTilbakekreving={erTilbakekreving}
        hasManualPaVent
      />
    </RawIntlProvider>
  );
};

export default MenySettPaVentIndex;

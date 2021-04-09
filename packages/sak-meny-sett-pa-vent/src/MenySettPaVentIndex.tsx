import React, { FunctionComponent, useCallback } from 'react';
import { RawIntlProvider } from 'react-intl';

import { KodeverkMedNavn } from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';
import SettPaVentModalIndex from '@fpsak-frontend/modal-sett-pa-vent';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

export const getMenytekst = (): string => intl.formatMessage({ id: 'MenySettPaVentIndex.BehandlingOnHold' });

interface OwnProps {
  behandlingId?: number;
  behandlingVersjon?: number;
  settBehandlingPaVent: (params: {
    behandlingVersjon: number;
    behandlingId: number;
    frist: string;
    ventearsak: string;
  }) => void;
  ventearsaker: KodeverkMedNavn[];
  lukkModal: () => void;
  erTilbakekreving: boolean;
}

const MenySettPaVentIndex: FunctionComponent<OwnProps> = ({
  behandlingId,
  behandlingVersjon,
  settBehandlingPaVent,
  ventearsaker,
  lukkModal,
  erTilbakekreving,
}) => {
  const submit = useCallback((formValues) => {
    const values = {
      behandlingVersjon,
      behandlingId,
      frist: formValues.frist,
      ventearsak: formValues.ventearsak,
    };
    settBehandlingPaVent(values);

    lukkModal();
  }, [behandlingId, behandlingVersjon]);

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

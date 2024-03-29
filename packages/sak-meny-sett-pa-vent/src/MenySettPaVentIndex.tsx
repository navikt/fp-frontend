import React, { FunctionComponent, useCallback } from 'react';
import { RawIntlProvider } from 'react-intl';

import { KodeverkMedNavn } from '@navikt/fp-types';
import { createIntl } from '@navikt/ft-utils';
import { SettPaVentModalIndex, FormValues } from '@navikt/fp-modal-sett-pa-vent';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

export const getMenytekst = (): string => intl.formatMessage({ id: 'MenySettPaVentIndex.BehandlingOnHold' });

interface OwnProps {
  behandlingVersjon?: number;
  settBehandlingPaVent: (params: FormValues) => void;
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
  const submit = useCallback(
    (formValues: FormValues) => {
      const values = {
        frist: formValues.frist,
        ventearsak: formValues.ventearsak,
      };
      settBehandlingPaVent(values);

      lukkModal();
    },
    [behandlingVersjon],
  );

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

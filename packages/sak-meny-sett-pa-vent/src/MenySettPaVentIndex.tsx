import React from 'react';
import { RawIntlProvider } from 'react-intl';

import { KodeverkMedNavn } from '@navikt/fp-types';
import { createIntl } from '@navikt/ft-utils';
import { SettPaVentModalIndex, FormValues } from '@navikt/fp-modal-sett-pa-vent';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

export const getMenytekst = (): string => intl.formatMessage({ id: 'MenySettPaVentIndex.BehandlingOnHold' });

interface Props {
  settBehandlingPaVent: (params: FormValues) => void;
  ventearsaker: KodeverkMedNavn[];
  lukkModal: () => void;
  erTilbakekreving: boolean;
}

export const MenySettPaVentIndex = ({ settBehandlingPaVent, ventearsaker, lukkModal, erTilbakekreving }: Props) => {
  const submit = (formValues: FormValues) => {
    const values = {
      frist: formValues.frist,
      ventearsak: formValues.ventearsak,
    };
    settBehandlingPaVent(values);

    lukkModal();
  };

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

import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { type FormValues, SettPaVentModalIndex } from '@navikt/fp-modal-sett-pa-vent';
import type { KodeverkMedNavn } from '@navikt/fp-types';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

export const getMenytekst = (): string => intl.formatMessage({ id: 'MenySettPaVentIndex.BehandlingOnHold' });

interface Props {
  settBehandlingPaVent: (params: { frist: string; ventearsak: string }) => void;
  ventearsaker: KodeverkMedNavn[];
  lukkModal: () => void;
  erTilbakekreving: boolean;
}

export const MenySettPaVentIndex = ({ settBehandlingPaVent, ventearsaker, lukkModal, erTilbakekreving }: Props) => {
  const submit = (formValues: FormValues) => {
    if (formValues.frist === undefined || formValues.ventearsak === undefined) {
      throw new Error('Frist eller venteårsak skal være satt');
    }

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
        frist={null}
        ventearsak={null}
      />
    </RawIntlProvider>
  );
};

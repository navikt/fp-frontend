import React, { useCallback, useMemo } from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { EndreBehandlendeEnhetModal, FormValues } from './modal/EndreBehandlendeEnhetModal';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

export const getMenytekst = (): string =>
  intl.formatMessage({ id: 'MenyEndreBehandlendeEnhetIndex.ByttBehandlendeEnhet' });

interface Props {
  behandlingVersjon: number;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  nyBehandlendeEnhet: (params: { enhetNavn: string; enhetId: string; begrunnelse: string }) => void;
  behandlendeEnheter: {
    enhetId: string;
    enhetNavn: string;
  }[];
  lukkModal: () => void;
}

export const MenyEndreBehandlendeEnhetIndex = ({
  behandlingVersjon,
  behandlendeEnhetId,
  behandlendeEnhetNavn,
  nyBehandlendeEnhet,
  behandlendeEnheter,
  lukkModal,
}: Props) => {
  const filtrerteBehandlendeEnheter = useMemo(
    () => behandlendeEnheter.filter(enhet => enhet.enhetId !== behandlendeEnhetId),
    [behandlendeEnheter],
  );

  const submit = useCallback(
    (formValues: FormValues) => {
      const nyEnhet = filtrerteBehandlendeEnheter[parseInt(formValues.nyEnhet, 10)];
      const values = {
        enhetNavn: nyEnhet.enhetNavn,
        enhetId: nyEnhet.enhetId,
        begrunnelse: formValues.begrunnelse,
      };
      nyBehandlendeEnhet(values);

      lukkModal();
    },
    [behandlingVersjon, nyBehandlendeEnhet],
  );
  return (
    <RawIntlProvider value={intl}>
      <EndreBehandlendeEnhetModal
        lukkModal={lukkModal}
        behandlendeEnheter={filtrerteBehandlendeEnheter}
        gjeldendeBehandlendeEnhetId={behandlendeEnhetId}
        gjeldendeBehandlendeEnhetNavn={behandlendeEnhetNavn}
        handleSubmit={submit}
      />
    </RawIntlProvider>
  );
};

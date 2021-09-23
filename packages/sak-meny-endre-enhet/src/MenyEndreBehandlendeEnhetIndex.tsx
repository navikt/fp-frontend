import React, { FunctionComponent, useCallback, useMemo } from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@fpsak-frontend/utils';

import EndreBehandlendeEnhetModal, { FormValues } from './components/EndreBehandlendeEnhetModal';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

export const getMenytekst = (): string => intl.formatMessage({ id: 'MenyEndreBehandlendeEnhetIndex.ByttBehandlendeEnhet' });

interface OwnProps {
  behandlingVersjon?: number;
  behandlendeEnhetId?: string;
  behandlendeEnhetNavn?: string;
  nyBehandlendeEnhet: (params: {
    enhetNavn: string;
    enhetId: string;
    begrunnelse: string;
  }) => void;
  behandlendeEnheter: {
    enhetId: string;
    enhetNavn: string;
  }[];
  lukkModal: () => void;
}

const MenyEndreBehandlendeEnhetIndex: FunctionComponent<OwnProps> = ({
  behandlingVersjon,
  behandlendeEnhetId,
  behandlendeEnhetNavn,
  nyBehandlendeEnhet,
  behandlendeEnheter,
  lukkModal,
}) => {
  const filtrerteBehandlendeEnheter = useMemo(() => behandlendeEnheter
    .filter((enhet) => enhet.enhetId !== behandlendeEnhetId), [behandlendeEnheter]);

  const submit = useCallback((formValues: FormValues) => {
    if (behandlingVersjon) {
      const nyEnhet = filtrerteBehandlendeEnheter[parseInt(formValues.nyEnhet, 10)];
      const values = {
        enhetNavn: nyEnhet.enhetNavn,
        enhetId: nyEnhet.enhetId,
        begrunnelse: formValues.begrunnelse,
      };
      nyBehandlendeEnhet(values);
    }

    lukkModal();
  }, [behandlingVersjon, nyBehandlendeEnhet]);
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

export default MenyEndreBehandlendeEnhetIndex;

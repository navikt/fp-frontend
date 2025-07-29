import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { EndreBehandlendeEnhetModal, type FormValues } from './modal/EndreBehandlendeEnhetModal';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

export const getMenytekst = (): string =>
  intl.formatMessage({ id: 'MenyEndreBehandlendeEnhetIndex.ByttBehandlendeEnhet' });

interface Props {
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
  behandlendeEnhetId,
  behandlendeEnhetNavn,
  nyBehandlendeEnhet,
  behandlendeEnheter,
  lukkModal,
}: Props) => {
  const filtrerteBehandlendeEnheter = behandlendeEnheter.filter(enhet => enhet.enhetId !== behandlendeEnhetId);

  const submit = (formValues: FormValues) => {
    const nyEnhet = filtrerteBehandlendeEnheter[parseInt(formValues.nyEnhet, 10)];
    const values = {
      enhetNavn: nyEnhet.enhetNavn,
      enhetId: nyEnhet.enhetId,
      begrunnelse: formValues.begrunnelse,
    };
    nyBehandlendeEnhet(values);

    lukkModal();
  };

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

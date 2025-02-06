import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { Dokument, Innsyn } from '@navikt/fp-types';

import { InnsynForm } from './components/InnsynForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  innsyn: Innsyn;
  alleDokumenter?: Dokument[];
  readOnlySubmitButton: boolean;
}

export const InnsynProsessIndex = ({ innsyn, alleDokumenter, readOnlySubmitButton }: Props) => (
  <RawIntlProvider value={intl}>
    <InnsynForm
      innsynMottattDato={innsyn.innsynMottattDato}
      innsynDokumenter={innsyn.dokumenter}
      innsynResultatType={innsyn.innsynResultatType}
      vedtaksdokumentasjon={innsyn.vedtaksdokumentasjon}
      alleDokumenter={alleDokumenter}
      readOnlySubmitButton={readOnlySubmitButton}
    />
  </RawIntlProvider>
);

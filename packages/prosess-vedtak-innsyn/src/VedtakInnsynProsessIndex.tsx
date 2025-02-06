import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { Dokument, Innsyn } from '@navikt/fp-types';

import { type ForhandsvisData, InnsynVedtakForm } from './components/InnsynVedtakForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  innsyn: Innsyn;
  alleDokumenter?: Dokument[];
  previewCallback: (data: ForhandsvisData) => void;
}

export const VedtakInnsynProsessIndex = ({ innsyn, alleDokumenter = [], previewCallback }: Props) => (
  <RawIntlProvider value={intl}>
    <InnsynVedtakForm
      innsynDokumenter={innsyn.dokumenter}
      innsynMottattDato={innsyn.innsynMottattDato}
      innsynResultatType={innsyn.innsynResultatType}
      alleDokumenter={alleDokumenter}
      previewCallback={previewCallback}
    />
  </RawIntlProvider>
);

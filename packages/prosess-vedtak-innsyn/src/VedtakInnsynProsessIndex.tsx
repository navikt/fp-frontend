import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { Dokument, Innsyn } from '@navikt/fp-types';

import { ForhandsvisData, InnsynVedtakForm } from './components/InnsynVedtakForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  innsyn: Innsyn;
  saksnummer: string;
  alleDokumenter?: Dokument[];
  previewCallback: (data: ForhandsvisData) => void;
}

export const VedtakInnsynProsessIndex = ({ innsyn, saksnummer, alleDokumenter = [], previewCallback }: Props) => (
  <RawIntlProvider value={intl}>
    <InnsynVedtakForm
      innsynDokumenter={innsyn.dokumenter}
      innsynMottattDato={innsyn.innsynMottattDato}
      innsynResultatType={innsyn.innsynResultatType}
      alleDokumenter={alleDokumenter}
      saksNr={saksnummer}
      previewCallback={previewCallback}
    />
  </RawIntlProvider>
);

import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { Dokument, Innsyn, StandardProsessPanelProps } from '@navikt/fp-types';

import InnsynVedtakForm, { ForhandsvisData } from './components/InnsynVedtakForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  innsyn: Innsyn;
  saksnummer: string;
  alleDokumenter?: Dokument[];
  previewCallback: (data: ForhandsvisData) => void;
}

export const VedtakInnsynProsessIndex = ({
  behandling,
  innsyn,
  saksnummer,
  aksjonspunkter,
  alleDokumenter = [],
  submitCallback,
  previewCallback,
  isReadOnly,
}: Props & StandardProsessPanelProps) => (
  <RawIntlProvider value={intl}>
    <InnsynVedtakForm
      sprakkode={behandling.sprakkode}
      innsynDokumenter={innsyn.dokumenter}
      innsynMottattDato={innsyn.innsynMottattDato}
      innsynResultatType={innsyn.innsynResultatType}
      alleDokumenter={alleDokumenter}
      saksNr={saksnummer}
      aksjonspunkter={aksjonspunkter}
      submitCallback={submitCallback}
      previewCallback={previewCallback}
      readOnly={isReadOnly}
    />
  </RawIntlProvider>
);

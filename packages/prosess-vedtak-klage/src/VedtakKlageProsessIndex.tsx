import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { KlageVurdering } from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

import { ForhandsvisData, VedtakKlageForm } from './components/VedtakKlageForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  klageVurdering: KlageVurdering;
  previewVedtakCallback: (data: ForhandsvisData) => void;
}

export const VedtakKlageProsessIndex = ({ klageVurdering, previewVedtakCallback }: Props) => {
  const { behandling } = usePanelDataContext();

  if (!behandling.behandlingsresultat) {
    throw new Error(`behandlingsresultat finnes ikke for behandling ${behandling.uuid}`);
  }

  return (
    <RawIntlProvider value={intl}>
      <VedtakKlageForm
        klageVurdering={klageVurdering}
        previewVedtakCallback={previewVedtakCallback}
        behandlingsresultat={behandling.behandlingsresultat}
      />
    </RawIntlProvider>
  );
};

import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { ManuellBehandlingResultat } from '@navikt/fp-types';

import { VilkarresultatMedOverstyringForm } from './components/VilkarresultatMedOverstyringForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  medlemskapManuellBehandlingResultat: ManuellBehandlingResultat | undefined;
  panelTekstKode: string;
}

export const VilkarresultatMedOverstyringProsessIndex = (props: Props) => {
  return (
    <RawIntlProvider value={intl}>
      <VilkarresultatMedOverstyringForm {...props} />
    </RawIntlProvider>
  );
};

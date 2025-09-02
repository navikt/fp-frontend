import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { KodeverkMedNavn, Medlemskap } from '@navikt/fp-types';

import { VilkarresultatMedOverstyringForm } from './components/VilkarresultatMedOverstyringForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  medlemskap?: Medlemskap;
  avslagsårsaker: KodeverkMedNavn<'Avslagsårsak'>[];
  panelTekstKode: string;
  lovReferanse?: string;
  status: string;
}

export const VilkarresultatMedOverstyringProsessIndex = ({ medlemskap, lovReferanse = '', ...rest }: Props) => {
  return (
    <RawIntlProvider value={intl}>
      <VilkarresultatMedOverstyringForm
        medlemskapManuellBehandlingResultat={medlemskap?.manuellBehandlingResultat ?? undefined}
        lovReferanse={lovReferanse}
        {...rest}
      />
    </RawIntlProvider>
  );
};

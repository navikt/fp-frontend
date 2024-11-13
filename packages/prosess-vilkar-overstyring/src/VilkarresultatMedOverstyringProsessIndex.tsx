import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { KodeverkMedNavn, Medlemskap, StandardProsessPanelProps } from '@navikt/fp-types';
import { createIntl } from '@navikt/ft-utils';
import { OverstyringAksjonspunkter } from '@navikt/fp-kodeverk';

import VilkarresultatMedOverstyringForm from './components/VilkarresultatMedOverstyringForm';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  medlemskap?: Medlemskap;
  overrideReadOnly: boolean;
  kanOverstyreAccess: {
    isEnabled: boolean;
  };
  toggleOverstyring: (fn: (oldArray: []) => void) => void;
  avslagsarsaker: KodeverkMedNavn[];
  erOverstyrt: boolean;
  panelTittelKode: string;
  overstyringApKode: OverstyringAksjonspunkter;
  lovReferanse?: string;
}

const VilkarresultatMedOverstyringProsessIndex: FunctionComponent<OwnProps & StandardProsessPanelProps> = ({
  behandling,
  medlemskap,
  aksjonspunkter,
  lovReferanse = '',
  alleMerknaderFraBeslutter,
  fagsak,
  ...rest
}) => (
  <RawIntlProvider value={intl}>
    <VilkarresultatMedOverstyringForm
      ytelseType={fagsak.fagsakYtelseType}
      behandlingsresultat={behandling.behandlingsresultat}
      medlemskapManuellBehandlingResultat={medlemskap?.manuellBehandlingResultat ?? undefined}
      aksjonspunkter={aksjonspunkter}
      behandling={behandling}
      lovReferanse={lovReferanse}
      erIkkeGodkjentAvBeslutter={aksjonspunkter.some(a => alleMerknaderFraBeslutter[a.definisjon]?.notAccepted)}
      {...rest}
    />
  </RawIntlProvider>
);

export default VilkarresultatMedOverstyringProsessIndex;

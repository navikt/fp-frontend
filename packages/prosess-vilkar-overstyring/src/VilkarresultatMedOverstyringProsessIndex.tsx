import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { AlleKodeverk, KodeverkMedNavn, MedlemskapV3, StandardProsessPanelProps } from '@navikt/fp-types';
import { createIntl } from '@navikt/ft-utils';
import { OverstyringAksjonspunkter } from '@navikt/fp-kodeverk';

import VilkarresultatMedOverstyringForm from './components/VilkarresultatMedOverstyringForm';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  alleKodeverk: AlleKodeverk;
  medlemskap?: MedlemskapV3;
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
  vilkarType: string;
}

const VilkarresultatMedOverstyringProsessIndex: FunctionComponent<OwnProps & StandardProsessPanelProps> = ({
  alleKodeverk,
  behandling,
  medlemskap,
  aksjonspunkter,
  submitCallback,
  overrideReadOnly,
  kanOverstyreAccess,
  toggleOverstyring,
  avslagsarsaker,
  status,
  erOverstyrt,
  panelTittelKode,
  overstyringApKode,
  lovReferanse = '',
  vilkarType,
  alleMerknaderFraBeslutter,
  formData,
  setFormData,
  fagsak,
}) => (
  <RawIntlProvider value={intl}>
    <VilkarresultatMedOverstyringForm
      ytelseType={fagsak.fagsakYtelseType}
      vilkarType={vilkarType}
      alleKodeverk={alleKodeverk}
      behandlingsresultat={behandling.behandlingsresultat}
      medlemskapManuellBehandlingResultat={medlemskap?.manuellBehandlingResultat ?? undefined}
      aksjonspunkter={aksjonspunkter}
      submitCallback={submitCallback}
      overrideReadOnly={overrideReadOnly}
      kanOverstyreAccess={kanOverstyreAccess}
      toggleOverstyring={toggleOverstyring}
      avslagsarsaker={avslagsarsaker}
      status={status}
      erOverstyrt={erOverstyrt}
      panelTittelKode={panelTittelKode}
      overstyringApKode={overstyringApKode}
      lovReferanse={lovReferanse}
      erIkkeGodkjentAvBeslutter={aksjonspunkter.some(a => alleMerknaderFraBeslutter[a.definisjon]?.notAccepted)}
      formData={formData}
      setFormData={setFormData}
    />
  </RawIntlProvider>
);

export default VilkarresultatMedOverstyringProsessIndex;

import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { Medlemskap, KodeverkMedNavn, StandardProsessPanelProps } from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';
import { OverstyringAksjonspunkter } from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { ReduxWrapper } from '@fpsak-frontend/form';

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
  erMedlemskapsPanel: boolean;
}

const VilkarresultatMedOverstyringProsessIndex: FunctionComponent<OwnProps & StandardProsessPanelProps> = ({
  behandling,
  medlemskap = {},
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
  erMedlemskapsPanel,
  alleMerknaderFraBeslutter,
  formData,
  setFormData,
}) => (
  <RawIntlProvider value={intl}>
    <ReduxWrapper formName="VilkarresultatMedOverstyringProsessIndex" formData={formData} setFormData={setFormData}>
      <VilkarresultatMedOverstyringForm
        behandlingType={behandling.type}
        behandlingsresultat={behandling.behandlingsresultat}
        medlemskapFom={medlemskap.fom}
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
        erMedlemskapsPanel={erMedlemskapsPanel}
        erIkkeGodkjentAvBeslutter={aksjonspunkter.some((a) => alleMerknaderFraBeslutter[a.definisjon.kode]?.notAccepted)}
      />
    </ReduxWrapper>
  </RawIntlProvider>
);

export default VilkarresultatMedOverstyringProsessIndex;

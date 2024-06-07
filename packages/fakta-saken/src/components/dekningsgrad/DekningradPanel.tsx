import React, { FunctionComponent } from 'react';

import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import { Aksjonspunkt, Fagsak, Soknad } from '@navikt/fp-types';
import { AvklarDekningsgradAp, OverstyringDekningsgradAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import DekningradApForm from './DekningradApForm';
import DekningradForm from './DekningradForm';

interface OwnProps {
  søknad: Soknad;
  fagsak: Fagsak;
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (data: OverstyringDekningsgradAp | AvklarDekningsgradAp) => Promise<void>;
  readOnly: boolean;
}

const DekningradPanel: FunctionComponent<OwnProps> = ({ søknad, fagsak, aksjonspunkter, submitCallback, readOnly }) => {
  const automatiskAp = aksjonspunkter.find(ap => ap.definisjon === AksjonspunktCode.AVKLAR_DEKNINGSGRAD);
  const overstyringsAp = aksjonspunkter.find(ap => ap.definisjon === AksjonspunktCode.OVERSTYR_DEKNINGSGRAD);

  return automatiskAp ? (
    <DekningradApForm
      søknad={søknad}
      fagsak={fagsak}
      aksjonspunkt={automatiskAp}
      submitCallback={submitCallback}
      readOnly={readOnly}
    />
  ) : (
    <DekningradForm
      søknad={søknad}
      fagsak={fagsak}
      aksjonspunkt={overstyringsAp}
      submitCallback={submitCallback}
      readOnly={readOnly}
    />
  );
};

export default DekningradPanel;

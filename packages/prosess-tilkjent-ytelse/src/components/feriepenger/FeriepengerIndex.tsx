import React, { FunctionComponent, useState } from 'react';

import { AlleKodeverk,ArbeidsgiverOpplysningerPerId, Feriepengegrunnlag } from '@navikt/fp-types';

import FeriepengerPanel from './FeriepengerPanel';

interface OwnProps {
  feriepengegrunnlag: Feriepengegrunnlag;
  alleKodeverk: AlleKodeverk;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

const FeriepengerIndex: FunctionComponent<OwnProps> = ({
  feriepengegrunnlag,
  alleKodeverk,
  arbeidsgiverOpplysningerPerId,
}) => {
  const [erPanelApent, togglePanel] = useState(false);
  return (
    <FeriepengerPanel
      feriepengegrunnlag={feriepengegrunnlag}
      alleKodeverk={alleKodeverk}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      erPanelÅpent={erPanelApent}
      togglePanel={() => togglePanel(!erPanelApent)}
    />
  );
};

export default FeriepengerIndex;

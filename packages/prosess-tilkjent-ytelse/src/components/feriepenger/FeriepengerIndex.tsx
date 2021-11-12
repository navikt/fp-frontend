import React, { FunctionComponent, useState } from 'react';
import { ArbeidsgiverOpplysningerPerId, Feriepengegrunnlag, AlleKodeverk } from '@fpsak-frontend/types';
import { FeriepengerPanel } from './FeriepengerPanel';

interface OwnProps {
  feriepengegrunnlag: Feriepengegrunnlag;
  alleKodeverk: AlleKodeverk;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const FeriepengerIndex: FunctionComponent<OwnProps> = ({
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

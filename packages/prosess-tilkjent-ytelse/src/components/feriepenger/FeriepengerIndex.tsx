import React, { FunctionComponent, useState } from 'react';
import { ArbeidsgiverOpplysningerPerId, Feriepengegrunnlag, KodeverkMedNavn } from '@fpsak-frontend/types';
import { FeriepengerPanel } from './FeriepengerPanel';

interface OwnProps {
  feriepengegrunnlag: Feriepengegrunnlag;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const FeriepengerIndex: FunctionComponent<OwnProps> = ({
  feriepengegrunnlag,
  alleKodeverk,
  arbeidsgiverOpplysningerPerId,
}) => {
  const [erPanelApent, togglePanel] = useState(false);
  return (
    <>
      <FeriepengerPanel
        feriepengegrunnlag={feriepengegrunnlag}
        alleKodeverk={alleKodeverk}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        erPanelÅpent={erPanelApent}
        togglePanel={() => togglePanel(!erPanelApent)}
      />
    </>
  );
};

export default FeriepengerIndex;

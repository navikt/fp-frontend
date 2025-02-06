import { useState } from 'react';

import type { AlleKodeverk, ArbeidsgiverOpplysningerPerId, Feriepengegrunnlag } from '@navikt/fp-types';

import { FeriepengerPanel } from './FeriepengerPanel';

interface Props {
  feriepengegrunnlag: Feriepengegrunnlag;
  alleKodeverk: AlleKodeverk;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const FeriepengerIndex = ({ feriepengegrunnlag, alleKodeverk, arbeidsgiverOpplysningerPerId }: Props) => {
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

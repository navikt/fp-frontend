import { Location } from 'history';

import { TotrinnskontrollAksjonspunkt } from '@fpsak-frontend/types';

export type TotrinnskontrollAksjonspunktMedFaktaValg = {
  feilFakta?: boolean;
  feilLov?: boolean;
  feilRegel?: boolean;
  annet?: boolean;
} & TotrinnskontrollAksjonspunkt;

type TotrinnContext = {
  contextCode: string;
  skjermlenke: Location;
  skjermlenkeNavn: string;
  aksjonspunkter: TotrinnskontrollAksjonspunktMedFaktaValg[];
}

export default TotrinnContext;

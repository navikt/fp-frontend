import { Location } from 'history';

import { TotrinnskontrollAksjonspunkt } from '@fpsak-frontend/types';

type TotrinnContext = {
  contextCode: string;
  skjermlenke: Location;
  skjermlenkeNavn: string;
  aksjonspunkter: TotrinnskontrollAksjonspunkt[];
}

export default TotrinnContext;

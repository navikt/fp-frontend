import React, { FunctionComponent, ReactNode } from 'react';
import { RawIntlProvider } from 'react-intl';

import { KodeverkMedNavn } from '@fpsak-frontend/types';
import { createIntl } from '@navikt/ft-utils';

import FagsakProfile from './components/FagsakProfile';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  saksnummer: string;
  fagsakYtelseType: KodeverkMedNavn;
  fagsakStatus: KodeverkMedNavn;
  renderBehandlingMeny: () => ReactNode;
  renderBehandlingVelger: () => ReactNode;
  dekningsgrad?: number;
}

const FagsakProfilSakIndex: FunctionComponent<OwnProps> = ({
  saksnummer,
  fagsakYtelseType,
  fagsakStatus,
  renderBehandlingMeny,
  renderBehandlingVelger,
  dekningsgrad,
}) => (
  <RawIntlProvider value={intl}>
    <FagsakProfile
      saksnummer={saksnummer}
      fagsakYtelseType={fagsakYtelseType}
      fagsakStatus={fagsakStatus}
      renderBehandlingMeny={renderBehandlingMeny}
      renderBehandlingVelger={renderBehandlingVelger}
      dekningsgrad={dekningsgrad}
    />
  </RawIntlProvider>
);

export default FagsakProfilSakIndex;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Location } from 'history';
import { Element } from 'nav-frontend-typografi';

import KodeverkType from '@fpsak-frontend/kodeverk/src/kodeverkTyper';

import { scrollUp } from './historikkUtils';

interface SkjermlenkeProps {
  skjermlenke?: string;
  behandlingLocation: Location;
  getKodeverknavn: (kode: string, kodeverk: KodeverkType, undertype?: string) => string;
  scrollUpOnClick?: boolean;
  createLocationForSkjermlenke: (behandlingLocation: Location, skjermlenkeKode: string) => Location | undefined;
}

const Skjermlenke: React.FunctionComponent<SkjermlenkeProps> = ({
  skjermlenke,
  behandlingLocation,
  getKodeverknavn,
  scrollUpOnClick,
  createLocationForSkjermlenke,
}) => {
  if (!skjermlenke) {
    return null;
  }

  const location = createLocationForSkjermlenke(behandlingLocation, skjermlenke);
  if (!location) {
    return null;
  }

  return (
    <Element>
      <NavLink
        to={location}
        onClick={scrollUpOnClick ? scrollUp : undefined}
      >
        {getKodeverknavn(skjermlenke, KodeverkType.SKJERMLENKE_TYPE)}
      </NavLink>
    </Element>
  );
};

export default Skjermlenke;

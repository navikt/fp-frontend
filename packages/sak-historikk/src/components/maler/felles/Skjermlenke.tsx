import React from 'react';
import { NavLink } from 'react-router-dom';
import { Location } from 'history';
import { Element } from 'nav-frontend-typografi';
import { Kodeverk } from '@fpsak-frontend/types';
import { scrollUp } from './historikkUtils';

interface SkjermlenkeProps {
  skjermlenke?: Kodeverk;
  behandlingLocation: Location;
  getKodeverknavn: (kodeverkObjekt: Kodeverk, undertype?: string) => string;
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

  const location = createLocationForSkjermlenke(behandlingLocation, skjermlenke.kode);
  if (!location) {
    return null;
  }

  return (
    <Element>
      <NavLink
        to={location}
        onClick={scrollUpOnClick ? scrollUp : undefined}
      >
        {getKodeverknavn(skjermlenke)}
      </NavLink>
    </Element>
  );
};

export default Skjermlenke;

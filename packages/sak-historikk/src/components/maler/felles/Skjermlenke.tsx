import React from 'react';
import { NavLink } from 'react-router-dom';
import { Location } from 'history';
import { Label } from '@navikt/ds-react';

import KodeverkType from '@fpsak-frontend/kodeverk/src/kodeverkTyper';

import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
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
    <>
      <Label size="small">
        <NavLink
          to={location}
          onClick={scrollUpOnClick ? scrollUp : undefined}
        >
          {getKodeverknavn(skjermlenke, KodeverkType.SKJERMLENKE_TYPE)}
        </NavLink>
      </Label>
      <VerticalSpacer fourPx />
    </>
  );
};

export default Skjermlenke;

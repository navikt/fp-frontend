import React from 'react';
import { NavLink } from 'react-router-dom';
import { Location } from 'history';
import { Heading } from '@navikt/ds-react';

import { KodeverkType } from '@navikt/fp-kodeverk';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

interface Props {
  skjermlenke?: string;
  behandlingLocation: Location;
  getKodeverknavn: (kode: string, kodeverk: KodeverkType, undertype?: string) => string;
  createLocationForSkjermlenke: (behandlingLocation: Location, skjermlenkeKode: string) => Location | undefined;
}

export const scrollUp = (): void => {
  if (window.innerWidth < 1305) {
    window.scroll(0, 0);
  }
};

export const Skjermlenke = ({
  skjermlenke,
  behandlingLocation,
  getKodeverknavn,
  createLocationForSkjermlenke,
}: Props) => {
  if (!skjermlenke) {
    return null;
  }

  const location = createLocationForSkjermlenke(behandlingLocation, skjermlenke);
  if (!location) {
    return null;
  }

  return (
    <>
      <Heading size="xsmall">
        <NavLink to={location} onClick={scrollUp}>
          {getKodeverknavn(skjermlenke, KodeverkType.SKJERMLENKE_TYPE)}
        </NavLink>
      </Heading>
      <VerticalSpacer fourPx />
    </>
  );
};

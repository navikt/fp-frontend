import { NavLink } from 'react-router-dom';

import { BodyShort } from '@navikt/ds-react';
import { type Location } from 'history';

import { KodeverkType } from '@navikt/fp-kodeverk';

interface Props {
  skjermlenke?: string;
  behandlingLocation: Location | undefined;
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
  if (!skjermlenke || !behandlingLocation) {
    return null;
  }

  const location = createLocationForSkjermlenke(behandlingLocation, skjermlenke);
  if (!location) {
    return null;
  }

  return (
    <BodyShort size="medium">
      <NavLink to={location} onClick={scrollUp}>
        {getKodeverknavn(skjermlenke, KodeverkType.SKJERMLENKE_TYPE)}
      </NavLink>
    </BodyShort>
  );
};

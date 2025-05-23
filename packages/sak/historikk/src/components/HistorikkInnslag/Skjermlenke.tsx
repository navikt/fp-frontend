import { NavLink } from 'react-router-dom';

import { BodyShort } from '@navikt/ds-react';
import { type Location } from 'history';

import type { AlleKodeverk, AlleKodeverkTilbakekreving } from '@navikt/fp-types';

interface Props {
  skjermlenke?: string;
  behandlingLocation: Location | undefined;
  alleKodeverk: AlleKodeverkTilbakekreving | AlleKodeverk;
  createLocationForSkjermlenke: (behandlingLocation: Location, skjermlenkeKode: string) => Location | undefined;
}

export const scrollUp = (): void => {
  if (window.innerWidth < 1305) {
    window.scroll(0, 0);
  }
};

export const Skjermlenke = ({ skjermlenke, behandlingLocation, alleKodeverk, createLocationForSkjermlenke }: Props) => {
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
        {alleKodeverk['SkjermlenkeType'].find(rolle => rolle.kode === skjermlenke)?.navn ?? ''}
      </NavLink>
    </BodyShort>
  );
};

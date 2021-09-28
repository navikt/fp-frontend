import React from 'react';

import FaktaGruppe from './FaktaGruppe';

export default {
  title: 'sharedComponents/FaktaGruppe',
  component: FaktaGruppe,
};

export const visDefaultFaktagruppe = () => (
  <FaktaGruppe>
    Dette er en tekst
  </FaktaGruppe>
);

export const visFaktagruppeMedTittel = () => (
  <FaktaGruppe title="Dette er en tittel">
    Dette er en tekst
  </FaktaGruppe>
);

export const visFaktagruppeUtenKantlinje = () => (
  <FaktaGruppe title="Dette er en tittel" withoutBorder>
    Dette er en tekst
  </FaktaGruppe>
);

export const visFaktagruppeMedMerknadFraBeslutter = () => (
  <FaktaGruppe title="Dette er en tittel" merknaderFraBeslutter={{ notAccepted: true }}>
    Dette er en tekst
  </FaktaGruppe>
);

import { HStack } from '@navikt/ds-react';
import { AlleKodeverk, MedlemskapV3, Soknad } from '@navikt/fp-types';
import React, { FC } from 'react';
import { useIntl } from 'react-intl';
import { formaterUtenlandsopphold, getSisteBostedsLand, getSistePersonstatus, getSisteRegion } from './situasjonUtils';
import Situasjon from './Situasjon';
import { FaktaKilde } from '../../faktaKilde';

interface Props {
  medlemskap: MedlemskapV3;
  soknad: Soknad;
  alleKodeverk: AlleKodeverk;
}

const SituasjonOversikt: FC<Props> = ({ soknad, medlemskap, alleKodeverk }) => {
  const intl = useIntl();

  return (
    <HStack gap="2" style={{ display: 'flex' }} aria-label="Situasjons Oversikt">
      <Situasjon
        labelFormatId="SituasjonLabel.HarBodd"
        value={formaterUtenlandsopphold(soknad.oppgittTilknytning.utlandsoppholdFor, alleKodeverk, intl)}
        kilde={FaktaKilde.SOKNAD}
      />
      <Situasjon
        labelFormatId="SituasjonLabel.SkalBo"
        value={formaterUtenlandsopphold(soknad.oppgittTilknytning.utlandsoppholdEtter, alleKodeverk, intl)}
        kilde={FaktaKilde.SOKNAD}
      />
      <Situasjon
        labelFormatId="SituasjonLabel.SisteAdresse"
        value={getSisteBostedsLand(medlemskap, intl)}
        kilde={FaktaKilde.FREG}
      />
      <Situasjon
        labelFormatId="SituasjonLabel.Statborgerskap"
        value={getSisteRegion(medlemskap, alleKodeverk, intl)}
        kilde={FaktaKilde.FREG}
      />
      <Situasjon
        labelFormatId="SituasjonLabel.Personstatus"
        value={getSistePersonstatus(medlemskap, alleKodeverk, intl)}
        kilde={FaktaKilde.FREG}
      />
    </HStack>
  );
};

export default SituasjonOversikt;

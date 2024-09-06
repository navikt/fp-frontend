import { HStack } from '@navikt/ds-react';
import { MedlemskapV3, Soknad } from '@navikt/fp-types';
import React, { FC } from 'react';
import { useIntl } from 'react-intl';
import { formaterUtenlandsopphold, getSisteBostedsLand, getSistePersonstatus, getSisteRegion } from './situasjonUtils';
import Situasjon from './Situasjon';

interface Props {
  medlemskap: MedlemskapV3;
  soknad: Soknad;
}

const SituasjonOversikt: FC<Props> = ({ soknad, medlemskap }) => {
  const intl = useIntl();
  return (
    <HStack gap="2">
      <Situasjon
        labelFormatId="SituasjonLabel.HarBodd"
        value={formaterUtenlandsopphold(soknad.oppgittTilknytning.utlandsoppholdFor, intl)}
        sourceFormatId="SituasjonSource.Soknad"
      />
      <Situasjon
        labelFormatId="SituasjonLabel.SkalBo"
        value={formaterUtenlandsopphold(soknad.oppgittTilknytning.utlandsoppholdEtter, intl)}
        sourceFormatId="SituasjonSource.Soknad"
      />
      <Situasjon
        labelFormatId="SituasjonLabel.SisteAdresse"
        value={getSisteBostedsLand(medlemskap, intl)}
        sourceFormatId="SituasjonSource.FREG"
      />
      <Situasjon
        labelFormatId="SituasjonLabel.Statborgerskap"
        value={getSisteRegion(medlemskap)}
        sourceFormatId="SituasjonSource.FREG"
      />
      <Situasjon
        labelFormatId="SituasjonLabel.Personstatus"
        value={getSistePersonstatus(medlemskap)}
        sourceFormatId="SituasjonSource.FREG"
      />
    </HStack>
  );
};

export default SituasjonOversikt;

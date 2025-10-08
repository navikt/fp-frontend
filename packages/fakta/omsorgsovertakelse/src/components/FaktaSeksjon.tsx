import { HGrid } from '@navikt/ds-react';

import type { OmsorgsovertakelseDto } from '@navikt/fp-types';

import { FaktaFraFReg } from './fakta/FaktaFraFReg';
import { FaktaFraSøknad } from './fakta/FaktaFraSøknad';
import { Situasjon } from './fakta/Situasjon';

interface Props {
  omsorgsovertakelse: OmsorgsovertakelseDto;
}

export const FaktaSeksjon = ({ omsorgsovertakelse }: Props) => {
  return (
    <>
      <Situasjon gjeldende={omsorgsovertakelse.gjeldende} />
      <HGrid columns={2} gap="space-16">
        <FaktaFraSøknad søknad={omsorgsovertakelse.søknad} />
        <FaktaFraFReg register={omsorgsovertakelse.register} />
      </HGrid>
    </>
  );
};

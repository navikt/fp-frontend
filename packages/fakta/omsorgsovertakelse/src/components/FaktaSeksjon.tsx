import { HGrid } from '@navikt/ds-react';

import type { OmsorgsovertakelseDto } from '@navikt/fp-types';

import { FaktaFraFReg } from './fakta/FaktaFraFReg';
import { FaktaFraSøknad } from './fakta/FaktaFraSøknad';
import { FaktaSammenligning } from './fakta/FaktaSammenligning';

interface Props {
  omsorgsovertakelse: OmsorgsovertakelseDto;
}

export const FaktaSeksjon = ({ omsorgsovertakelse }: Props) => {
  return (
    <>
      <FaktaSammenligning omsorgsovertakelse={omsorgsovertakelse} />
      <HGrid columns={2} gap="space-16">
        <FaktaFraSøknad søknad={omsorgsovertakelse.søknad} />
        <FaktaFraFReg register={omsorgsovertakelse.register} />
      </HGrid>
    </>
  );
};

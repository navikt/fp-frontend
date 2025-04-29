import { HGrid, VStack } from '@navikt/ds-react';

import { BehandlingType } from '@navikt/fp-kodeverk';
import type { FamilieHendelse, Soknad } from '@navikt/fp-types';

import { FaktaFødselFraFReg } from './fakta/FaktaFødselFraFReg';
import { FaktaFødselFraGjeldende } from './fakta/FaktaFødselFraGjeldende';
import { FaktaFødselFraSøknad } from './fakta/FaktaFødselFraSøknad';
import { FodselSammenligningRevurderingPanel } from './FodselSammenligningRevurderingPanel';

interface Props {
  behandlingsTypeKode: string;
  soknad: Soknad;
  soknadOriginalBehandling?: Soknad;
  familiehendelseOriginalBehandling?: FamilieHendelse;
  gjeldendeFamilieHendelse: FamilieHendelse | undefined;
  registerFamiliehendelse: FamilieHendelse | undefined;
}

/**
 * FodselSammenlingningPanel
 *
 * Presentasjonskomponent. Viser sammenligning av fødsel ved ytelsesvedtak/søknad og oppdatert informasjon fra TPS.
 */
export const FodselSammenligningPanel = ({
  behandlingsTypeKode,
  soknad,
  soknadOriginalBehandling,
  familiehendelseOriginalBehandling,
  gjeldendeFamilieHendelse,
  registerFamiliehendelse,
}: Props) => (
  <VStack gap="4" marginBlock="2">
    <HGrid columns={2} gap="4">
      <FaktaFødselFraSøknad søknad={soknad} />
      <FaktaFødselFraFReg registerFamiliehendelse={registerFamiliehendelse} />
    </HGrid>
    <FaktaFødselFraGjeldende gjeldendeFamiliehendelse={gjeldendeFamilieHendelse} />

    {behandlingsTypeKode === BehandlingType.REVURDERING && (
      <FodselSammenligningRevurderingPanel
        soknadOriginalBehandling={soknadOriginalBehandling}
        familiehendelseOriginalBehandling={familiehendelseOriginalBehandling}
        vedtaksDatoSomSvangerskapsuke={gjeldendeFamilieHendelse?.vedtaksDatoSomSvangerskapsuke}
      />
    )}
  </VStack>
);

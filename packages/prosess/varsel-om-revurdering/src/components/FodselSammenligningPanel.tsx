import { HStack } from '@navikt/ds-react';

import { BehandlingType } from '@navikt/fp-kodeverk';
import type { AvklartBarn, FamilieHendelse, Soknad } from '@navikt/fp-types';

import { FodselSammenligningOtherPanel } from './FodselSammenligningOtherPanel';
import { FodselSammenligningRevurderingPanel } from './FodselSammenligningRevurderingPanel';
import { OpplysningerFraFReg } from './OpplysningerFraFReg';

interface Props {
  behandlingsType: string;
  avklartBarn: AvklartBarn[] | undefined;
  soknad: Soknad;
  soknadOriginalBehandling: Soknad;
  familiehendelseOriginalBehandling: FamilieHendelse;
  termindato: string | undefined;
  vedtaksDatoSomSvangerskapsuke: number | undefined;
}

export const FodselSammenligningPanel = ({
  behandlingsType,
  avklartBarn = [],
  soknad,
  vedtaksDatoSomSvangerskapsuke,
  termindato,
  soknadOriginalBehandling,
  familiehendelseOriginalBehandling,
}: Props) => {
  const harDødtBarn = !!avklartBarn.find(barn => !!barn.dodsdato);

  return (
    <HStack gap="space-40">
      <div>
        {behandlingsType !== BehandlingType.REVURDERING && (
          <FodselSammenligningOtherPanel soknad={soknad} termindato={termindato} />
        )}
        {behandlingsType === BehandlingType.REVURDERING && (
          <FodselSammenligningRevurderingPanel
            soknadOriginalBehandling={soknadOriginalBehandling}
            familiehendelseOriginalBehandling={familiehendelseOriginalBehandling}
            vedtaksDatoSomSvangerskapsuke={vedtaksDatoSomSvangerskapsuke}
          />
        )}
      </div>
      <OpplysningerFraFReg avklartBarn={avklartBarn} harDødtBarn={harDødtBarn} />
    </HStack>
  );
};

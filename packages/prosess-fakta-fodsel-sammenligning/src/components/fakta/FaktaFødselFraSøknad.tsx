import { BodyShort, ExpansionCard, VStack } from '@navikt/ds-react';
import { DateLabel } from '@navikt/ft-ui-komponenter';
import { dateFormat } from '@navikt/ft-utils';

import { FaktaKilde, getLabelForFaktaKilde, ValueLabel } from '@navikt/fp-fakta-felles';
import type { Soknad } from '@navikt/fp-types';

interface Props {
  søknad: Soknad;
}

export const FaktaFødselFraSøknad = ({ søknad }: Props) => {
  return (
    <ExpansionCard size="small" aria-label="Opplysninger fra søknad" defaultOpen={true}>
      <ExpansionCard.Header>
        <ExpansionCard.Title>Opplysninger fra søknad</ExpansionCard.Title>
        <ExpansionCard.Description>{getLabelForFaktaKilde(FaktaKilde.SOKNAD)}</ExpansionCard.Description>
      </ExpansionCard.Header>
      <ExpansionCard.Content>
        <VStack gap="4">
          {søknad.antallBarn && <ValueLabel label="Antall Barn">{søknad.antallBarn}</ValueLabel>}
          {søknad.termindato && (
            <ValueLabel label="Termindato">
              {dateFormat(søknad.termindato) + (søknad.utstedtdato && ` (Utstedt: ${dateFormat(søknad.utstedtdato)})`)}
            </ValueLabel>
          )}
          {søknad.fodselsdatoer && (
            <ValueLabel label="Fødselsdato">
              <Fødselsdatoer fødseldatoer={søknad.fodselsdatoer} />
            </ValueLabel>
          )}
        </VStack>
      </ExpansionCard.Content>
    </ExpansionCard>
  );
};

const Fødselsdatoer = ({ fødseldatoer }: { fødseldatoer: Record<number, string> }) => {
  const datoer = Object.values(fødseldatoer);

  return datoer.length === 1 ? (
    <BodyShort>
      <DateLabel dateString={datoer[0]} />
    </BodyShort>
  ) : (
    datoer.map(([key, fd]) => (
      <BodyShort key={key}>
        <DateLabel dateString={fd} />
      </BodyShort>
    ))
  );
};

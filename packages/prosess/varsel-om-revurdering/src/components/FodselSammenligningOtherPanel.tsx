import { FormattedMessage } from 'react-intl';

import { BodyShort, Heading, HStack, Label, VStack } from '@navikt/ds-react';
import { DateLabel } from '@navikt/ft-ui-komponenter';
import { dateFormat } from '@navikt/ft-utils';

import type { Soknad } from '@navikt/fp-types';

interface Props {
  soknad: Soknad;
  termindato?: string;
}

export const FodselSammenligningOtherPanel = ({ soknad, termindato }: Props) => {
  const soknadFodselsdatoer = soknad.fodselsdatoer ? soknad.fodselsdatoer : {};

  const terminOrFodselLabel =
    Object.keys(soknadFodselsdatoer).length > 0
      ? 'FodselsammenligningPanel.Fodselsdato'
      : 'FodselsammenligningPanel.Termindato';
  const terminFodselHeader =
    Object.keys(soknadFodselsdatoer).length > 0
      ? 'FodselSammenligningOtherPanel.OpplysningerISoknad'
      : 'FodselSammenligningOtherPanel.TerminISoknad';

  const terminOrFødseldato = getTerminEllerFødselsdato(!!soknad, soknadFodselsdatoer, soknad.termindato, termindato);

  return (
    <VStack gap="4">
      <Heading size="small">
        <FormattedMessage id={terminFodselHeader} />
      </Heading>
      <HStack gap="4">
        {soknad.utstedtdato && (
          <div>
            <Label>
              <FormattedMessage id="FodselsammenligningPanel.UstedtDato" />
            </Label>
            <BodyShort>
              <DateLabel dateString={soknad.utstedtdato} />
            </BodyShort>
          </div>
        )}
        <div>
          <Label>
            <FormattedMessage id={terminOrFodselLabel} />
          </Label>
          <BodyShort>{terminOrFødseldato}</BodyShort>
        </div>
        <div>
          <Label>
            <FormattedMessage id="FodselsammenligningPanel.AntallBarn" />
          </Label>
          <BodyShort>{soknad.antallBarn}</BodyShort>
        </div>
      </HStack>
    </VStack>
  );
};

export const getTerminEllerFødselsdato = (
  hasSøknad: boolean,
  fødselsdatoerSoknad: { [key: number]: string },
  termindatoSoknad?: string,
  termindato?: string,
): string | null => {
  if (hasSøknad && Object.keys(fødselsdatoerSoknad).length > 0) {
    return dateFormat(Object.values(fødselsdatoerSoknad)[0]);
  }
  if (termindato) {
    return dateFormat(termindato);
  }
  if (!hasSøknad) {
    return null;
  }
  return termindatoSoknad ? dateFormat(termindatoSoknad) : '-';
};

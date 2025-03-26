import { FormattedMessage } from 'react-intl';

import { BodyShort, Heading, HStack, Label, VStack } from '@navikt/ds-react';
import { dateFormat } from '@navikt/ft-utils';

import type { Soknad } from '@navikt/fp-types';

interface Props {
  soknad: Soknad;
  termindato?: string;
}

export const getTerminEllerFodselsdato = (
  hasSoknad: boolean,
  fødselsdatoerSoknad: { [key: number]: string },
  termindatoSoknad?: string,
  termindato?: string,
): string | null => {
  if (hasSoknad && Object.keys(fødselsdatoerSoknad).length > 0) {
    return dateFormat(Object.values(fødselsdatoerSoknad)[0]);
  }
  if (termindato) {
    return dateFormat(termindato);
  }
  if (!hasSoknad) {
    return null;
  }
  return termindatoSoknad ? dateFormat(termindatoSoknad) : '-';
};

/**
 * FodselSammenligningOtherPanel
 *
 * Viser sammenligning av fødsel ved ytelsesvedtak/søknad og oppdatert informasjon fra TPS.
 */
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

  const terminOrFodselDate = getTerminEllerFodselsdato(!!soknad, soknadFodselsdatoer, soknad.termindato, termindato);

  return (
    <VStack gap="4">
      <Heading size="small">
        <FormattedMessage id={terminFodselHeader} />
      </Heading>
      <HStack gap="4">
        {soknad.utstedtdato && (
          <div>
            <Label size="small">
              <FormattedMessage id="FodselsammenligningPanel.UstedtDato" />
            </Label>
            <BodyShort size="small">{dateFormat(soknad.utstedtdato)}</BodyShort>
          </div>
        )}
        <div>
          <Label size="small">
            <FormattedMessage id={terminOrFodselLabel} />
          </Label>
          <BodyShort size="small">{terminOrFodselDate}</BodyShort>
        </div>
        <div>
          <Label size="small">
            <FormattedMessage id="FodselsammenligningPanel.AntallBarn" />
          </Label>
          <BodyShort size="small">{soknad.antallBarn}</BodyShort>
        </div>
      </HStack>
    </VStack>
  );
};

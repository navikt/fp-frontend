import { FormattedMessage } from 'react-intl';

import { BodyShort, Heading, HStack, Label, VStack } from '@navikt/ds-react';
import { dateFormat } from '@navikt/ft-utils';

import type { FamilieHendelse, Soknad } from '@navikt/fp-types';

interface Props {
  soknadOriginalBehandling?: Soknad;
  familiehendelseOriginalBehandling?: FamilieHendelse;
  vedtaksDatoSomSvangerskapsuke?: number;
}

export const FodselSammenligningRevurderingPanel = ({
  vedtaksDatoSomSvangerskapsuke,
  soknadOriginalBehandling,
  familiehendelseOriginalBehandling,
}: Props) => {
  const erTermin =
    (familiehendelseOriginalBehandling && !!familiehendelseOriginalBehandling.termindato) ||
    !soknadOriginalBehandling?.fodselsdatoer ||
    Object.keys(soknadOriginalBehandling.fodselsdatoer).length === 0;

  const terminOrFodselLabel = erTermin ? 'FodselsammenligningPanel.Termindato' : 'FodselsammenligningPanel.Fodselsdato';
  const terminOrFodselDate = getTermindatoEllerFødselsdato(
    erTermin,
    soknadOriginalBehandling,
    familiehendelseOriginalBehandling,
  );
  const antallBarn = getAntallBarn(erTermin, soknadOriginalBehandling, familiehendelseOriginalBehandling);
  const shouldShowVedtaksdatoAsSvangerskapsuke = !familiehendelseOriginalBehandling
    ? false
    : (!familiehendelseOriginalBehandling.avklartBarn || familiehendelseOriginalBehandling.avklartBarn.length === 0) &&
      !!vedtaksDatoSomSvangerskapsuke;

  return (
    <VStack gap="space-16">
      <Heading size="small" level="3">
        <FormattedMessage id="FodselsammenligningPanel.Ytelsesvedtak" />
      </Heading>
      <HStack gap="space-16">
        {shouldShowVedtaksdatoAsSvangerskapsuke && (
          <div>
            <Label>
              <FormattedMessage id="FodselsammenligningPanel.FodtISvangerskapsuke" />
            </Label>
            <BodyShort>{vedtaksDatoSomSvangerskapsuke}</BodyShort>
          </div>
        )}
        <div>
          <Label>
            <FormattedMessage id={terminOrFodselLabel} />
          </Label>
          <BodyShort>{terminOrFodselDate ?? '-'}</BodyShort>
        </div>
        <div>
          <Label>
            <FormattedMessage id="FodselsammenligningPanel.AntallBarn" />
          </Label>
          <BodyShort>{antallBarn ?? '-'}</BodyShort>
        </div>
      </HStack>
    </VStack>
  );
};

const getTermindatoEllerFødselsdato = (
  isTermin: boolean,
  originalSoknad?: Soknad,
  orginalFamiliehendelse?: FamilieHendelse,
): string | undefined => {
  if (!originalSoknad && !orginalFamiliehendelse) {
    return '';
  }

  const famHendelse = orginalFamiliehendelse ?? { termindato: undefined, avklartBarn: [] };

  if (isTermin) {
    const termDato = famHendelse?.termindato ?? originalSoknad?.termindato;
    return termDato ? dateFormat(termDato) : undefined;
  }

  if (famHendelse.avklartBarn?.length) {
    return dateFormat(famHendelse.avklartBarn[0].fodselsdato);
  }
  if (!originalSoknad?.fodselsdatoer) {
    return '-';
  }
  return dateFormat(Object.values(originalSoknad.fodselsdatoer)[0]);
};

const getAntallBarn = (
  isTermin: boolean,
  originalSoknad?: Soknad,
  orginalFamiliehendelse?: FamilieHendelse,
): number | undefined => {
  if (!originalSoknad && !orginalFamiliehendelse) {
    return 0;
  }
  const famHendelse = orginalFamiliehendelse ?? { termindato: undefined, antallBarnTermin: undefined, avklartBarn: [] };

  if (isTermin) {
    return famHendelse.termindato ? famHendelse.antallBarnTermin : originalSoknad?.antallBarn;
  }
  return famHendelse.avklartBarn && famHendelse.avklartBarn.length > 0
    ? famHendelse.avklartBarn.length
    : originalSoknad?.antallBarn;
};

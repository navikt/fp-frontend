import { useIntl } from 'react-intl';

import { HStack } from '@navikt/ds-react';
import { dateFormat } from '@navikt/ft-utils';

import { FaktaBox } from '@navikt/fp-fakta-felles';
import type { BarnHendelseData, FødselGjeldende } from '@navikt/fp-types';

interface Props {
  gjeldende: FødselGjeldende;
}

export const Situasjon = ({ gjeldende: { barn, termindato, utstedtdato } }: Props) => {
  const erLikeBarn =
    barn.length > 0 &&
    barn.every(
      b =>
        b.kilde === barn[0].kilde &&
        b.barn.fødselsdato === barn[0].barn.fødselsdato &&
        b.barn.dødsdato === barn[0].barn.dødsdato,
    );
  const intl = useIntl();
  return (
    <HStack gap="4" aria-label={intl.formatMessage({ id: 'Situasjon.OpplysningerGjeldende' })}>
      {(barn.length === 1 || erLikeBarn) && (
        <>
          <FaktaBox
            key={barn[0].barn.fødselsdato}
            kilde={barn[0].kilde}
            value={dateFormat(barn[0].barn.fødselsdato)}
            label={intl.formatMessage({ id: 'Label.Fodselsdato' })}
          />
          {barn[0].barn.dødsdato && (
            <FaktaBox
              key={barn[0].barn.fødselsdato}
              kilde={barn[0].kilde}
              value={dateFormat(barn[0].barn.dødsdato)}
              label={intl.formatMessage({ id: 'Label.Dodsdato' })}
            />
          )}
        </>
      )}
      {!erLikeBarn &&
        barn.map((b, index) => (
          <FaktaBox
            key={b.barn.fødselsdato}
            kilde={b.kilde}
            value={formaterLiv(b.barn)}
            label={intl.formatMessage({ id: 'Label.NummerertBarn' }, { nummer: index + 1 })}
          />
        ))}
      {termindato && (
        <FaktaBox
          kilde={termindato.kilde}
          label={intl.formatMessage({ id: 'Label.Termindato' })}
          value={dateFormat(termindato.termindato)}
        />
      )}
      {utstedtdato && (
        <FaktaBox
          kilde={utstedtdato.kilde}
          label={intl.formatMessage({ id: 'Label.Utstedtdato' })}
          value={dateFormat(utstedtdato.utstedtdato)}
        />
      )}
    </HStack>
  );
};
const formaterLiv = ({ fødselsdato, dødsdato }: BarnHendelseData): string => {
  const født = dateFormat(fødselsdato);
  const død = dødsdato ? dateFormat(dødsdato) : null;
  return dødsdato ? `f. ${født} - d. ${død}` : `f. ${født}`;
};

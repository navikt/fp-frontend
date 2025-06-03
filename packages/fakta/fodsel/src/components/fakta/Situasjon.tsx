import { FormattedMessage } from 'react-intl';

import { HStack } from '@navikt/ds-react';
import { dateFormat } from '@navikt/ft-utils';

import { FaktaBox } from '@navikt/fp-fakta-felles';
import type { FødselGjeldende } from '@navikt/fp-types';

interface Props {
  gjeldende: FødselGjeldende;
}

export const Situasjon = ({ gjeldende: { barn, termindato, utstedtdato } }: Props) => {
  const erLikeBarn =
    barn.length === 0 ||
    barn.every(
      b =>
        b.kilde === barn[0].kilde &&
        b.barn.fodselsdato === barn[0].barn.fodselsdato &&
        b.barn.dodsdato === barn[0].barn.dodsdato,
    );
  return (
    <HStack gap="4">
      {termindato && (
        <FaktaBox
          kilde={termindato.kilde}
          label={<FormattedMessage id="FodselsammenligningPanel.Termindato" />}
          value={dateFormat(termindato.termindato)}
        />
      )}
      {utstedtdato && (
        <FaktaBox
          kilde={utstedtdato.kilde}
          label={<FormattedMessage id="FodselsammenligningPanel.Utstedtdato" />}
          value={dateFormat(utstedtdato.utstedtdato)}
        />
      )}
      {barn.map((b, index) => (
        <FaktaBox
          key={b.barn.fodselsdato}
          kilde={b.kilde}
          value={dateFormat(b.barn.fodselsdato)}
          label={
            erLikeBarn ? (
              <FormattedMessage id="FodselsammenligningPanel.Fodselsdato" />
            ) : (
              <FormattedMessage id="FodselsammenligningPanel.FodselsdatoMedNr" values={{ nummer: index + 1 }} />
            )
          }
        />
      ))}
      {erLikeBarn && barn.length > 0 && (
        <FaktaBox
          kilde={barn[0].kilde}
          label={<FormattedMessage id="FodselsammenligningPanel.AntallBarn" />}
          value={barn.length.toString()}
        />
      )}
    </HStack>
  );
};

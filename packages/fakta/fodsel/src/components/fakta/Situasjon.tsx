import { FormattedMessage, useIntl } from 'react-intl';

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
  const intl = useIntl();
  return (
    <HStack gap="4" aria-label={intl.formatMessage({ id: 'Situasjon.OpplysningerGjeldende' })}>
      {termindato && (
        <FaktaBox
          kilde={termindato.kilde}
          label={<FormattedMessage id="Label.Termindato" />}
          value={dateFormat(termindato.termindato)}
        />
      )}
      {utstedtdato && (
        <FaktaBox
          kilde={utstedtdato.kilde}
          label={<FormattedMessage id="Label.Utstedtdato" />}
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
              <FormattedMessage id="Label.Fodselsdato" />
            ) : (
              <FormattedMessage id="FodselsammenligningPanel.FodselsdatoMedNr" values={{ nummer: index + 1 }} />
            )
          }
        />
      ))}
      {erLikeBarn && barn.length > 0 && (
        <FaktaBox
          kilde={barn[0].kilde}
          label={<FormattedMessage id="Label.AntallBarn" />}
          value={barn.length.toString()}
        />
      )}
    </HStack>
  );
};

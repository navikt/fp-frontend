import { FormattedMessage, useIntl } from 'react-intl';

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

      {barn.length === 1 ||
        (erLikeBarn && (
          <FaktaBox
            key={barn[0].barn.fødselsdato}
            kilde={barn[0].kilde}
            value={formaterLiv(barn[0].barn)}
            label={<FormattedMessage id="Label.Fodselsdato" />}
          />
        ))}
      {!erLikeBarn &&
        barn.map((b, index) => (
          <FaktaBox
            key={b.barn.fødselsdato}
            kilde={b.kilde}
            value={formaterLiv(b.barn)}
            label={<FormattedMessage id="FodselsammenligningPanel.FodselsdatoMedNr" values={{ nummer: index + 1 }} />}
          />
        ))}
    </HStack>
  );
};

const formaterLiv = ({ fødselsdato, dødsdato }: BarnHendelseData): string => {
  const født = dateFormat(fødselsdato);
  const død = dødsdato ? dateFormat(dødsdato) : null;
  return dødsdato ? `f. ${født} - d. ${død}` : `f. ${født}`;
};

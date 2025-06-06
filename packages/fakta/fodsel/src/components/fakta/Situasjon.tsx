import { FormattedMessage, useIntl } from 'react-intl';

import { HStack } from '@navikt/ds-react';
import { DateLabel } from '@navikt/ft-ui-komponenter';
import { dateFormat } from '@navikt/ft-utils';

import { FaktaBox } from '@navikt/fp-fakta-felles';
import type { BarnHendelseData, FødselGjeldende } from '@navikt/fp-types';

interface Props {
  gjeldende: FødselGjeldende;
}

export const Situasjon = ({ gjeldende: { barn, termindato, utstedtdato } }: Props) => {
  const intl = useIntl();
  const erLikeBarn =
    barn.length > 0 &&
    barn.every(
      b =>
        b.kilde === barn[0].kilde &&
        b.barn.fødselsdato === barn[0].barn.fødselsdato &&
        b.barn.dødsdato === barn[0].barn.dødsdato,
    );

  return (
    <HStack gap="4" aria-label={intl.formatMessage({ id: 'Situasjon.OpplysningerGjeldende' })}>
      {(barn.length === 1 || erLikeBarn) && (
        <>
          <FaktaBox
            key={barn[0].barn.fødselsdato}
            kilde={barn[0].kilde}
            value={<DateLabel dateString={barn[0].barn.fødselsdato} />}
            label={<FormattedMessage id="Label.Fodselsdato" />}
          />
          {barn[0].barn.dødsdato && (
            <FaktaBox
              key={barn[0].barn.fødselsdato}
              kilde={barn[0].kilde}
              value={<DateLabel dateString={barn[0].barn.dødsdato} />}
              label={<FormattedMessage id="Label.Dodsdato" />}
            />
          )}
        </>
      )}
      {!erLikeBarn &&
        barn.map((b, index) => (
          <FaktaBox
            key={`${b.barn.fødselsdato}-${b.barn.dødsdato}-${b.kilde}`}
            kilde={b.kilde}
            value={formaterLiv(b.barn)}
            label={<FormattedMessage id="Label.NummerertBarn" values={{ nummer: index + 1 }} />}
          />
        ))}
      {termindato && (
        <FaktaBox
          kilde={termindato.kilde}
          label={<FormattedMessage id="Label.Termindato" />}
          value={<DateLabel dateString={termindato.termindato} />}
        />
      )}
      {utstedtdato && (
        <FaktaBox
          kilde={utstedtdato.kilde}
          label={<FormattedMessage id="Label.Utstedtdato" />}
          value={<DateLabel dateString={utstedtdato.utstedtdato} />}
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

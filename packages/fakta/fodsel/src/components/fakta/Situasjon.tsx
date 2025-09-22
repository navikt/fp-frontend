import { useIntl } from 'react-intl';

import { HStack } from '@navikt/ds-react';
import { DateLabel } from '@navikt/ft-ui-komponenter';

import { FaktaBox } from '@navikt/fp-fakta-felles';
import type { FødselGjeldende } from '@navikt/fp-types';

import { erGjeldendeBarnLike, formaterLiv } from './barnUtils';

interface Props {
  gjeldende: FødselGjeldende;
}

export const Situasjon = ({ gjeldende: { barn, termin, utstedtdato, antallBarn } }: Props) => {
  const intl = useIntl();
  const barnErLike = erGjeldendeBarnLike(barn);

  return (
    <HStack gap="space-16" aria-label={intl.formatMessage({ id: 'Situasjon.OpplysningerGjeldende' })}>
      {barnErLike && (
        <>
          <FaktaBox
            key={barn[0].barn.fødselsdato}
            kilde={barn[0].kilde}
            value={<DateLabel dateString={barn[0].barn.fødselsdato} />}
            label={intl.formatMessage({ id: 'Label.Fødselsdato' })}
          />
          {barn[0].barn.dødsdato && (
            <FaktaBox
              key={barn[0].barn.fødselsdato + barn[0].barn.dødsdato}
              kilde={barn[0].kilde}
              value={<DateLabel dateString={barn[0].barn.dødsdato} />}
              label={intl.formatMessage({ id: 'Label.Dødsdato' })}
            />
          )}
        </>
      )}
      {!barnErLike &&
        barn.map((b, index) => (
          <FaktaBox
            key={`${b.barn.fødselsdato}-${b.barn.dødsdato}-${b.kilde}`}
            kilde={b.kilde}
            value={formaterLiv(b.barn)}
            label={intl.formatMessage({ id: 'Label.NummerertBarn' }, { nummer: index + 1 })}
          />
        ))}
      {termin && (
        <FaktaBox
          kilde={termin.kilde}
          label={intl.formatMessage({ id: 'Label.Termindato' })}
          value={<DateLabel dateString={termin.termindato} />}
        />
      )}
      {utstedtdato && (
        <FaktaBox
          kilde={utstedtdato.kilde}
          label={intl.formatMessage({ id: 'Label.Utstedtdato' })}
          value={<DateLabel dateString={utstedtdato.utstedtdato} />}
        />
      )}
      {antallBarn.kilde != 'SØKNAD' && (
        <FaktaBox
          kilde={antallBarn.kilde}
          label={intl.formatMessage({ id: 'Label.AntallBarn' })}
          value={antallBarn.antall}
        />
      )}
    </HStack>
  );
};

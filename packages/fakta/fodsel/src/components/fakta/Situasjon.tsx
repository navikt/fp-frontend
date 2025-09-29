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
  const barnet = barn[0];

  return (
    <HStack gap="space-16" aria-label={intl.formatMessage({ id: 'Situasjon.OpplysningerGjeldende' })}>
      {barnErLike && barnet && (
        <>
          <FaktaBox
            key={barnet.barn.fødselsdato}
            kilde={barnet.kilde}
            value={<DateLabel dateString={barnet.barn.fødselsdato} />}
            label={intl.formatMessage({ id: 'Label.Fødselsdato' })}
          />
          {barnet.barn.dødsdato && (
            <FaktaBox
              key={barnet.barn.fødselsdato + barnet.barn.dødsdato}
              kilde={barnet.kilde}
              value={<DateLabel dateString={barnet.barn.dødsdato} />}
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

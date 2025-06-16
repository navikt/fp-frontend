import { useIntl } from 'react-intl';

import { HStack } from '@navikt/ds-react';
import { DateLabel } from '@navikt/ft-ui-komponenter';
import { dateFormat } from '@navikt/ft-utils';

import { FaktaBox } from '@navikt/fp-fakta-felles';
import type { BarnHendelseData, FødselGjeldende } from '@navikt/fp-types';

interface Props {
  gjeldende: FødselGjeldende;
}

export const Situasjon = ({ gjeldende: { barn, termin, utstedtdato } }: Props) => {
  const intl = useIntl();
  const barnErLike = erBarnLike(barn);

  return (
    <HStack gap="4" aria-label={intl.formatMessage({ id: 'Situasjon.OpplysningerGjeldende' })}>
      {(barn.length === 1 || barnErLike) && (
        <>
          <FaktaBox
            key={barn[0].barn.fødselsdato}
            kilde={barn[0].kilde}
            value={<DateLabel dateString={barn[0].barn.fødselsdato} />}
            label={intl.formatMessage({ id: 'Label.Fodselsdato' })}
          />
          {barn[0].barn.dødsdato && (
            <FaktaBox
              key={barn[0].barn.fødselsdato}
              kilde={barn[0].kilde}
              value={<DateLabel dateString={barn[0].barn.dødsdato} />}
              label={intl.formatMessage({ id: 'Label.Dodsdato' })}
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
    </HStack>
  );
};

const formaterLiv = ({ fødselsdato, dødsdato }: BarnHendelseData): string => {
  const født = dateFormat(fødselsdato);
  const død = dødsdato ? dateFormat(dødsdato) : null;
  return dødsdato ? `f. ${født} - d. ${død}` : `f. ${født}`;
};
const erBarnLike = (barn: FødselGjeldende['barn']) =>
  barn.length > 0 &&
  barn.every(
    b =>
      b.kilde === barn[0].kilde &&
      b.barn.fødselsdato === barn[0].barn.fødselsdato &&
      b.barn.dødsdato === barn[0].barn.dødsdato,
  );

import { useIntl } from 'react-intl';

import { HStack } from '@navikt/ds-react';
import { DateLabel } from '@navikt/ft-ui-komponenter';
import { dateFormat } from '@navikt/ft-utils';

import { FaktaBox } from '@navikt/fp-fakta-felles';

import type { BarnHendelseData, Gjeldende, GjeldendeBarn } from '../../types';

interface Props {
  gjeldende: Gjeldende;
}

export const Situasjon = ({ gjeldende: { barn, antallBarn, omsorgsovertakelse } }: Props) => {
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

      {omsorgsovertakelse.omsorgsovertakelseDato && (
        <FaktaBox
          kilde={omsorgsovertakelse.kilde}
          label={intl.formatMessage({ id: 'Label.Omsorgsovertakelsesdato' })}
          value={<DateLabel dateString={omsorgsovertakelse.omsorgsovertakelseDato} />}
        />
      )}

      {omsorgsovertakelse.ankomstNorgeDato && (
        <FaktaBox
          kilde={omsorgsovertakelse.kilde}
          label={intl.formatMessage({ id: 'Label.Ankomstdato' })}
          value={<DateLabel dateString={omsorgsovertakelse.ankomstNorgeDato} />}
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

const formaterLiv = ({ fødselsdato, dødsdato }: BarnHendelseData): string => {
  const født = dateFormat(fødselsdato);
  const død = dødsdato ? dateFormat(dødsdato) : null;
  return dødsdato ? `f. ${født} - d. ${død}` : `f. ${født}`;
};

const erGjeldendeBarnLike = (alleBarn: GjeldendeBarn[]) => {
  const barnet = alleBarn[0];
  if (!barnet) {
    return false;
  }
  return !alleBarn.some(({ barn, kilde }) => kilde !== barnet.kilde || erBarnUlike(barnet.barn)(barn));
};

const erBarnUlike = (sammenlignbartBarn: BarnHendelseData) => (barn: BarnHendelseData) =>
  barn.fødselsdato !== sammenlignbartBarn.fødselsdato || barn.dødsdato !== sammenlignbartBarn.dødsdato;

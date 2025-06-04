import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, Tag, VStack } from '@navikt/ds-react';
import { DateLabel, PeriodLabel } from '@navikt/ft-ui-komponenter';

import { ValueLabel } from '@navikt/fp-fakta-felles';
import type { BarnHendelseData, FødselSøknad } from '@navikt/fp-types';
import { FaktaKort } from '@navikt/fp-ui-komponenter';

interface Props {
  søknad: FødselSøknad;
}

export const FaktaFødselFraSøknad = ({ søknad }: Props) => {
  const intl = useIntl();
  const tittel = intl.formatMessage({ id: 'FaktaFødselFraSøknad.Tittel' });
  return (
    <FaktaKort label={tittel}>
      <VStack gap="4">
        {søknad.termindato && (
          <ValueLabel label={<FormattedMessage id="Label.Termindato" />}>
            <DateLabel dateString={søknad.termindato} />
          </ValueLabel>
        )}
        {søknad.utstedtdato && (
          <ValueLabel label={<FormattedMessage id="Label.Utstedtdato" />}>
            <DateLabel dateString={søknad.utstedtdato} />
          </ValueLabel>
        )}
        {søknad.barn.length > 0 && (
          <ValueLabel label={<FormattedMessage id="Label.Fodselsdato" />}>
            <Fødselsdatoer barn={søknad.barn} />
          </ValueLabel>
        )}
        {søknad.antallBarn && (
          <ValueLabel label={<FormattedMessage id="Label.AntallBarn" />}>{søknad.antallBarn}</ValueLabel>
        )}
      </VStack>
    </FaktaKort>
  );
};

const Fødselsdatoer = ({ barn }: { barn: BarnHendelseData[] }) => {
  const filtrertBarn = barn.reduce<BarnHendelseData[]>((acc, curr) => {
    return acc.some(e => e.fødselsdato == curr.fødselsdato && e.dødsdato == curr.dødsdato) ? acc : acc.concat(curr);
  }, []);

  return filtrertBarn.map(({ fødselsdato, dødsdato }) => (
    <BodyShort key={fødselsdato}>
      {dødsdato ? (
        <>
          <PeriodLabel dateStringFom={fødselsdato} dateStringTom={dødsdato} />
          <Tag variant="info">Død</Tag>
        </>
      ) : (
        <DateLabel dateString={fødselsdato} />
      )}
      {}
    </BodyShort>
  ));
};

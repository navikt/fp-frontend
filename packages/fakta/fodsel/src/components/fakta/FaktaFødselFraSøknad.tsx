import { FormattedMessage } from 'react-intl';

import { BodyShort, VStack } from '@navikt/ds-react';
import { DateLabel } from '@navikt/ft-ui-komponenter';
import { dateFormat } from '@navikt/ft-utils';

import { ValueLabel } from '@navikt/fp-fakta-felles';
import type { Soknad } from '@navikt/fp-types';
import { FaktaKort } from '@navikt/fp-ui-komponenter';

interface Props {
  søknad: Soknad;
}

export const FaktaFødselFraSøknad = ({ søknad }: Props) => {
  return (
    <FaktaKort label={<FormattedMessage id="FodselsammenligningPanel.OpplysningerSoknad" />}>
      <VStack gap="4">
        {søknad.termindato && (
          <ValueLabel label={<FormattedMessage id="FodselsammenligningPanel.Termindato" />}>
            {dateFormat(søknad.termindato)}
          </ValueLabel>
        )}
        {søknad.utstedtdato && (
          <ValueLabel label={<FormattedMessage id="FodselsammenligningPanel.UstedtDato" />}>
            {dateFormat(søknad.utstedtdato)}
          </ValueLabel>
        )}
        {søknad.fodselsdatoer && (
          <ValueLabel label={<FormattedMessage id="FodselsammenligningPanel.Fodselsdato" />}>
            <Fødselsdatoer fødseldatoer={søknad.fodselsdatoer} />
          </ValueLabel>
        )}
        {søknad.antallBarn && (
          <ValueLabel label={<FormattedMessage id="FodselsammenligningPanel.AntallBarn" />}>
            {søknad.antallBarn}
          </ValueLabel>
        )}
      </VStack>
    </FaktaKort>
  );
};

const Fødselsdatoer = ({ fødseldatoer }: { fødseldatoer: Record<number, string> }) => {
  const datoer = Object.values(fødseldatoer);

  return datoer.length === 1 ? (
    <BodyShort>
      <DateLabel dateString={datoer[0]} />
    </BodyShort>
  ) : (
    datoer.map(([key, fd]) => (
      <BodyShort key={key}>
        <DateLabel dateString={fd} />
      </BodyShort>
    ))
  );
};

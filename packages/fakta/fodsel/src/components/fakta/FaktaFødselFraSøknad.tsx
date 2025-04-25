import { FormattedMessage, useIntl } from 'react-intl';

import { HStack, Label, VStack } from '@navikt/ds-react';
import { DateLabel } from '@navikt/ft-ui-komponenter';

import { ValueLabel } from '@navikt/fp-fakta-felles';
import type { FødselSøknad } from '@navikt/fp-types';
import { DokumentLink, type DokumentLinkReferanse, FaktaKort } from '@navikt/fp-ui-komponenter';

interface Props {
  søknad: FødselSøknad;
  terminbekreftelseDokument: DokumentLinkReferanse | undefined;
}

export const FaktaFødselFraSøknad = ({
  søknad: { termindato, utstedtdato, antallBarn, barn },
  terminbekreftelseDokument,
}: Props) => {
  const intl = useIntl();
  const tittel = intl.formatMessage({ id: 'FaktaFødselFraSøknad.Tittel' });
  return (
    <FaktaKort label={tittel}>
      <VStack gap="4">
        {termindato && (
          <ValueLabel label={<FormattedMessage id="Label.Termindato" />}>
            <DateLabel dateString={termindato} />
          </ValueLabel>
        )}
        {utstedtdato && (
          <ValueLabel label={<FormattedMessage id="Label.Utstedtdato" />}>
            <DateLabel dateString={utstedtdato} />
          </ValueLabel>
        )}
        {antallBarn && <ValueLabel label={<FormattedMessage id="Label.AntallBarn" />}>{antallBarn}</ValueLabel>}

        {barn.length > 0 && (
          <ValueLabel label={<FormattedMessage id="Label.Fodselsdato" />}>
            <DateLabel dateString={barn[0].fødselsdato} />
          </ValueLabel>
        )}

        {terminbekreftelseDokument && (
          <HStack gap="2">
            <Label>
              <FormattedMessage id="FaktaFødselFraSøknad.Terminbekreftelse" />:
            </Label>
            <DokumentLink {...terminbekreftelseDokument}>
              <FormattedMessage id="FaktaFødselFraSøknad.VisTerminbekreftelse" />
            </DokumentLink>
          </HStack>
        )}
      </VStack>
    </FaktaKort>
  );
};

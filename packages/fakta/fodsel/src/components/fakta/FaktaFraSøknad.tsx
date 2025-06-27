import { FormattedMessage, useIntl } from 'react-intl';

import { HStack, Label, VStack } from '@navikt/ds-react';
import { ReadOnlyField } from '@navikt/ft-form-hooks';
import { DateLabel } from '@navikt/ft-ui-komponenter';

import type { FødselSøknad } from '@navikt/fp-types';
import { DokumentLink, type DokumentLinkReferanse, FaktaKort } from '@navikt/fp-ui-komponenter';

interface Props {
  søknad: FødselSøknad;
  terminbekreftelseDokument: DokumentLinkReferanse | undefined;
}

export const FaktaFraSøknad = ({
  søknad: { termindato, utstedtdato, antallBarn, barn },
  terminbekreftelseDokument,
}: Props) => {
  const intl = useIntl();
  const tittel = intl.formatMessage({ id: 'FaktaFraSøknad.Tittel' });
  return (
    <FaktaKort label={tittel}>
      <VStack gap="4">
        {termindato && (
          <ReadOnlyField
            label={<FormattedMessage id="Label.Termindato" />}
            value={<DateLabel dateString={termindato} />}
          />
        )}
        {utstedtdato && (
          <ReadOnlyField
            label={<FormattedMessage id="Label.Utstedtdato" />}
            value={<DateLabel dateString={utstedtdato} />}
          />
        )}

        {barn.length > 0 && (
          <ReadOnlyField
            label={<FormattedMessage id="Label.Fodselsdato" />}
            value={<DateLabel dateString={barn[0].fødselsdato} />}
          />
        )}
        {antallBarn && <ReadOnlyField label={<FormattedMessage id="Label.AntallBarn" />} value={antallBarn} />}

        {terminbekreftelseDokument && (
          <HStack gap="2">
            <Label>
              <FormattedMessage id="FaktaFraSøknad.Terminbekreftelse" />:
            </Label>
            <DokumentLink {...terminbekreftelseDokument}>
              <FormattedMessage id="FaktaFraSøknad.VisTerminbekreftelse" />
            </DokumentLink>
          </HStack>
        )}
      </VStack>
    </FaktaKort>
  );
};

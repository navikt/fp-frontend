import { FormattedMessage, useIntl } from 'react-intl';

import { VStack } from '@navikt/ds-react';
import { DateLabel, LabeledValue } from '@navikt/ft-ui-komponenter';

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
  const barnet = barn[0];
  return (
    <FaktaKort label={intl.formatMessage({ id: 'FaktaFraSøknad.Tittel' })}>
      <VStack gap="space-16">
        {termindato && (
          <LabeledValue
            size="medium"
            label={<FormattedMessage id="Label.Termindato" />}
            value={<DateLabel dateString={termindato} />}
          />
        )}
        {utstedtdato && (
          <LabeledValue
            size="medium"
            label={<FormattedMessage id="Label.Utstedtdato" />}
            value={<DateLabel dateString={utstedtdato} />}
          />
        )}

        {barnet && (
          <LabeledValue
            size="medium"
            label={<FormattedMessage id="Label.Fødselsdato" />}
            value={<DateLabel dateString={barnet.fødselsdato} />}
          />
        )}
        {antallBarn && <LabeledValue label={<FormattedMessage id="Label.AntallBarn" />} value={antallBarn} />}

        {terminbekreftelseDokument && (
          <LabeledValue
            size="medium"
            horizontal
            label={<FormattedMessage id="FaktaFraSøknad.Terminbekreftelse" />}
            value={
              <DokumentLink {...terminbekreftelseDokument}>
                <FormattedMessage id="FaktaFraSøknad.VisTerminbekreftelse" />
              </DokumentLink>
            }
          />
        )}
      </VStack>
    </FaktaKort>
  );
};

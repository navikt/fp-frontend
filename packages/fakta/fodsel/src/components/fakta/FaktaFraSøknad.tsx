import { FormattedMessage, useIntl } from 'react-intl';

import { VStack } from '@navikt/ds-react';
import { DateLabel, FaktaBoks, LabeledValue } from '@navikt/ft-ui-komponenter';

import type { FødselSøknad } from '@navikt/fp-types';
import { DokumentLink, type DokumentLinkReferanse } from '@navikt/fp-ui-komponenter';

import { formaterLiv } from './barnUtils';

interface Props {
  søknad: FødselSøknad;
  terminbekreftelseDokument: DokumentLinkReferanse | undefined;
}

export const FaktaFraSøknad = ({
  søknad: { termindato, utstedtdato, antallBarn, barn },
  terminbekreftelseDokument,
}: Props) => {
  const intl = useIntl();
  return (
    <FaktaBoks tittel={intl.formatMessage({ id: 'FaktaFraSøknad.Tittel' })}>
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

        {barn.length === 1 && (
          <>
            <LabeledValue
              size="medium"
              label={<FormattedMessage id="Label.Fødselsdato" />}
              value={<DateLabel dateString={barn[0]!.fødselsdato} />}
            />
            {barn[0]!.dødsdato && (
              <LabeledValue
                size="medium"
                label={<FormattedMessage id="Label.Dødsdato" />}
                value={<DateLabel dateString={barn[0]!.dødsdato} />}
              />
            )}
          </>
        )}
        {barn.length > 1 &&
          barn.map((barnet, index) => (
            <LabeledValue
              key={`${barnet.barnNummer ?? index}-${barnet.fødselsdato}-${barnet.dødsdato ?? ''}`}
              size="medium"
              label={intl.formatMessage({ id: 'Label.NummerertBarn' }, { nummer: index + 1 })}
              value={formaterLiv(barnet)}
            />
          ))}
        {antallBarn && (
          <LabeledValue size="medium" label={<FormattedMessage id="Label.AntallBarn" />} value={antallBarn} />
        )}

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
    </FaktaBoks>
  );
};

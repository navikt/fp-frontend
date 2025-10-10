import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, HStack, Label, VStack } from '@navikt/ds-react';
import { ReadOnlyField } from '@navikt/ft-form-hooks';
import { DateLabel } from '@navikt/ft-ui-komponenter';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { type AdopsjonFamilieHendelse, type Soknad, søknadErAdopsjon } from '@navikt/fp-types';
import { FaktaKort } from '@navikt/fp-ui-komponenter';

interface Props {
  søknad: Soknad;
  adopsjon: AdopsjonFamilieHendelse;
}

export const BarnPanel = ({ søknad, adopsjon }: Props) => {
  const intl = useIntl();

  if (!søknadErAdopsjon(søknad)) {
    return null;
  }

  const fødselsdatoer = Object.entries(søknad.adopsjonFodelsedatoer ?? []);

  return (
    <FaktaKort label={intl.formatMessage({ id: 'BarnPanel.Tittel' })}>
      <VStack gap="space-8">
        <ReadOnlyField
          size="medium"
          label={<FormattedMessage id="BarnPanel.AntallBarn" />}
          value={adopsjon.antallBarn}
        />

        <Label size="medium">
          <FormattedMessage id="BarnPanel.Fødselsdato" />
        </Label>

        {fødselsdatoer.map(([childNumber, fødselsdato]) => (
          <HStack gap="space-16" key={`${AksjonspunktKode.AVKLAR_VILKÅR_FOR_OMSORGSOVERTAKELSE}-${childNumber}`}>
            {fødselsdatoer.length > 1 && (
              <Label size="small">
                <FormattedMessage id="BarnPanel.BarnNr" values={{ nummer: childNumber }} />
              </Label>
            )}
            <BodyShort size="medium">
              <DateLabel dateString={fødselsdato} />
            </BodyShort>
          </HStack>
        ))}
      </VStack>
    </FaktaKort>
  );
};

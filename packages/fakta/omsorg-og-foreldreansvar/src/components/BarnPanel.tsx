import { FormattedMessage, useIntl } from 'react-intl';

import { HStack, Label, VStack } from '@navikt/ds-react';
import { ReadOnlyField } from '@navikt/ft-form-hooks';
import { DateLabel } from '@navikt/ft-ui-komponenter';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { type Soknad, søknadErAdopsjon } from '@navikt/fp-types';
import { FaktaKort } from '@navikt/fp-ui-komponenter';

import styles from './barnPanel.module.css';

interface Props {
  søknad: Soknad;
}

export const BarnPanel = ({ søknad }: Props) => {
  const intl = useIntl();

  if (!søknadErAdopsjon(søknad)) {
    return null;
  }

  const fødselsdatoer = Object.entries(søknad.adopsjonFodelsedatoer ?? []);
  return (
    <FaktaKort label={intl.formatMessage({ id: 'BarnPanel.Tittel' })}>
      <VStack gap="space-8">
        {fødselsdatoer.map(([childNumber, fødselsdato], index) => (
          <HStack gap="space-16" key={`${AksjonspunktKode.OMSORGSOVERTAKELSE}-${childNumber}`}>
            {fødselsdatoer.length > 1 && (
              <Label size="medium" className={index === 0 ? styles['topMarginFirstRow'] : styles['topMargin']}>
                <FormattedMessage id="BarnPanel.BarnNr" values={{ nummer: childNumber }} />
              </Label>
            )}
            <ReadOnlyField
              size="medium"
              label={<FormattedMessage id="BarnPanel.Fødselsdato" />}
              hideLabel={index > 0}
              value={<DateLabel dateString={fødselsdato} />}
            />
          </HStack>
        ))}
      </VStack>
    </FaktaKort>
  );
};

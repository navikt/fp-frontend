import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { Alert, VStack } from '@navikt/ds-react';

import { TextAreaField } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import { Aksjonspunkt } from '@navikt/fp-types';
import { KontrollerEtterbetalingTilSøkerAP } from '@navikt/fp-types-avklar-aksjonspunkter';

import FormValues, { EtterbetalingSøkerFormValues } from '../../types/FormValues';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

export const transformValues = (values: FormValues): KontrollerEtterbetalingTilSøkerAP => ({
  kode: AksjonspunktCode.KONTROLLER_STOR_ETTERBETALING_SØKER,
  begrunnelse: values.begrunnelseEtterbetaling,
});

export const buildInitialValues = (aksjonspunkt?: Aksjonspunkt): EtterbetalingSøkerFormValues | undefined => {
  if (!aksjonspunkt || aksjonspunkt.definisjon !== AksjonspunktCode.KONTROLLER_STOR_ETTERBETALING_SØKER) {
    return undefined;
  }
  return {
    begrunnelseEtterbetaling: aksjonspunkt.begrunnelse,
  };
};

interface OwnProps {
  aksjonspunkt?: Aksjonspunkt;
  readOnly: boolean;
}

const TilbakekrevSøkerForm: FunctionComponent<OwnProps> = ({ readOnly, aksjonspunkt }) => {
  const intl = useIntl();

  if (!aksjonspunkt || aksjonspunkt.definisjon !== AksjonspunktCode.KONTROLLER_STOR_ETTERBETALING_SØKER) {
    return null;
  }

  return (
    <VStack gap="4">
      <Alert variant="info">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu augue nec lorem tempor aliquam in vitae
        massa. Mauris eget sapien quis lorem hendrerit mollis eu ut dolor. Vestibulum molestie a dolor vitae
        condimentum. Nunc eu felis sed enim semper gravida. Suspendisse nulla diam, commodo at odio eget, consectetur
        maximus nisl. Sed nec magna ex. Aliquam molestie vehicula mauris, a tincidunt tellus rhoncus eu.
      </Alert>
      <TextAreaField
        name="begrunnelseEtterbetaling"
        label={intl.formatMessage({ id: 'Simulering.Etterbetaling.Vurdering' })}
        validate={[required, minLength3, maxLength1500, hasValidText]}
        maxLength={1500}
        size="medium"
        readOnly={readOnly}
      />
    </VStack>
  );
};

export default TilbakekrevSøkerForm;

import { FormattedMessage, useIntl } from 'react-intl';

import { ReadMore, VStack } from '@navikt/ds-react';
import { TextAreaField } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { Aksjonspunkt } from '@navikt/fp-types';
import type { KontrollerEtterbetalingTilSøkerAP } from '@navikt/fp-types-avklar-aksjonspunkter';

import type { EtterbetalingSøkerFormValues, FormValues } from '../types/FormValues';

import styles from './etterbetalingSøkerForm.module.css';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

export const transformValues = (values: FormValues): KontrollerEtterbetalingTilSøkerAP => ({
  kode: AksjonspunktKode.KONTROLLER_STOR_ETTERBETALING_SØKER,
  begrunnelse: values.begrunnelseEtterbetaling,
});

export const buildInitialValues = (aksjonspunkt?: Aksjonspunkt): EtterbetalingSøkerFormValues | undefined => {
  if (!aksjonspunkt || aksjonspunkt.definisjon !== AksjonspunktKode.KONTROLLER_STOR_ETTERBETALING_SØKER) {
    return undefined;
  }
  return {
    begrunnelseEtterbetaling: aksjonspunkt.begrunnelse ?? '',
  };
};

interface Props {
  aksjonspunkt?: Aksjonspunkt;
  readOnly: boolean;
}

export const EtterbetalingSøkerForm = ({ readOnly, aksjonspunkt }: Props) => {
  const intl = useIntl();

  if (!aksjonspunkt || aksjonspunkt.definisjon !== AksjonspunktKode.KONTROLLER_STOR_ETTERBETALING_SØKER) {
    return null;
  }

  return (
    <VStack gap="4">
      <ReadMore header={<FormattedMessage id="Simulering.Etterbetaling.ReadMoreTittel" />} className={styles.readMore}>
        <FormattedMessage id="Simulering.Etterbetaling.ReadMoreInnhold" />
      </ReadMore>
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

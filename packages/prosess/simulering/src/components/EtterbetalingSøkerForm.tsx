import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { ReadMore, VStack } from '@navikt/ds-react';
import { RhfTextarea } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { Aksjonspunkt } from '@navikt/fp-types';
import type { KontrollerEtterbetalingTilSøkerAP } from '@navikt/fp-types-avklar-aksjonspunkter';

import type { EtterbetalingSøkerFormValues } from '../types/FormValues';

import styles from './etterbetalingSøkerForm.module.css';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

interface Props {
  aksjonspunkt?: Aksjonspunkt;
  readOnly: boolean;
}

export const EtterbetalingSøkerForm = ({ readOnly, aksjonspunkt }: Props) => {
  const intl = useIntl();

  const { control } = useFormContext<EtterbetalingSøkerFormValues>();

  if (!aksjonspunkt || aksjonspunkt.definisjon !== AksjonspunktKode.KONTROLLER_STOR_ETTERBETALING_SØKER) {
    return null;
  }

  return (
    <VStack gap="space-16">
      <ReadMore
        header={<FormattedMessage id="Simulering.Etterbetaling.ReadMoreTittel" />}
        className={styles['readMore']}
      >
        <FormattedMessage id="Simulering.Etterbetaling.ReadMoreInnhold" />
      </ReadMore>
      <RhfTextarea
        name="begrunnelseEtterbetaling"
        control={control}
        label={intl.formatMessage({ id: 'Simulering.Etterbetaling.Vurdering' })}
        validate={[required, minLength3, maxLength1500, hasValidText]}
        maxLength={1500}
        size="medium"
        readOnly={readOnly}
      />
    </VStack>
  );
};

EtterbetalingSøkerForm.initialValues = (aksjonspunkt?: Aksjonspunkt): EtterbetalingSøkerFormValues | undefined => {
  if (!aksjonspunkt || aksjonspunkt.definisjon !== AksjonspunktKode.KONTROLLER_STOR_ETTERBETALING_SØKER) {
    return undefined;
  }
  return {
    begrunnelseEtterbetaling: aksjonspunkt.begrunnelse ?? '',
  };
};

EtterbetalingSøkerForm.transformValues = (values: EtterbetalingSøkerFormValues): KontrollerEtterbetalingTilSøkerAP => ({
  kode: AksjonspunktKode.KONTROLLER_STOR_ETTERBETALING_SØKER,
  begrunnelse: values.begrunnelseEtterbetaling,
});

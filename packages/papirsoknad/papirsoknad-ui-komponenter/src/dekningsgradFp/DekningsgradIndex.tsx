import { Heading } from '@navikt/ds-react';
import { RadioGroupPanel } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { BorderBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { createIntl } from '@navikt/ft-utils';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

export type FormValues = {
  dekningsgrad?: string;
};

interface Props {
  readOnly: boolean;
}

/**
 * Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.
 */
export const DekningsgradIndex = ({ readOnly }: Props) => (
  <BorderBox>
    <Heading size="small">{intl.formatMessage({ id: 'Registrering.Dekningsgrad.Title' })}</Heading>
    <VerticalSpacer sixteenPx />
    <RadioGroupPanel
      name="dekningsgrad"
      validate={[required]}
      isReadOnly={readOnly}
      isHorizontal
      radios={[
        {
          label: intl.formatMessage({ id: 'Registrering.Dekningsgrad.prosent.80' }),
          value: '80_PROSENT',
        },
        {
          label: intl.formatMessage({ id: 'Registrering.Dekningsgrad.prosent.100' }),
          value: '100_PROSENT',
        },
      ]}
    />
  </BorderBox>
);

DekningsgradIndex.initialValues = (): FormValues => ({ dekningsgrad: undefined });
DekningsgradIndex.transformValues = ({ dekningsgrad }: FormValues) => ({ dekningsgrad });

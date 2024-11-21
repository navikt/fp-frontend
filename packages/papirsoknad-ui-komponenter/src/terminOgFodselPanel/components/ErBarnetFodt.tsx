import React from 'react';
import { FormattedMessage, RawIntlProvider } from 'react-intl';
import { RadioGroupPanel } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';

import messages from '../../../i18n/nb_NO.json';
import { createIntl } from '@navikt/ft-utils';

const intl = createIntl(messages);

interface Props {
  readOnly: boolean;
}

export const ErBarnetFodt = ({ readOnly }: Props) => (
  <RawIntlProvider value={intl}>
    <RadioGroupPanel
      name="erBarnetFodt"
      label={<FormattedMessage id="Registrering.TerminOgFodsel.ErBarnetFodt" />}
      validate={[required]}
      isReadOnly={readOnly}
      isTrueOrFalseSelection
      radios={[
        {
          label: <FormattedMessage id="Registrering.TerminOgFodsel.ErFodt" />,
          value: 'true',
        },
        {
          label: <FormattedMessage id="Registrering.TerminOgFodsel.ErIkkeFodt" />,
          value: 'false',
        },
      ]}
    />
  </RawIntlProvider>
);

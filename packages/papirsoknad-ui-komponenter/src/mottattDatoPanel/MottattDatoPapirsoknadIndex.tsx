import React from 'react';
import dayjs from 'dayjs';
import { FormattedMessage, RawIntlProvider } from 'react-intl';

import { Heading } from '@navikt/ds-react';
import { Datepicker } from '@navikt/ft-form-hooks';
import { BorderBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { dateAfterOrEqual, dateBeforeOrEqualToToday, hasValidDate, required } from '@navikt/ft-form-validators';

import { createIntl } from '@navikt/ft-utils';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

const minMottattdato = () => dayjs().subtract(1, 'year');
const maxMottattdato = () => dayjs().subtract(0, 'year');

export type MottattDatoFormValues = {
  mottattDato?: string;
};

interface Props {
  readOnly: boolean;
}

export const MottattDatoPapirsoknadIndex = ({ readOnly }: Props) => (
  <RawIntlProvider value={intl}>
    <BorderBox>
      <Heading size="small">
        <FormattedMessage key="regDatoTittel" id="Registrering.Omsoknaden.MottattDato" />
      </Heading>
      <VerticalSpacer sixteenPx />
      <Datepicker
        name="mottattDato"
        label={<FormattedMessage key="regDatoUnder" id="Registrering.Omsoknaden.MottattDato" />}
        fromDate={minMottattdato().toDate()}
        toDate={maxMottattdato().toDate()}
        validate={[required, hasValidDate, dateBeforeOrEqualToToday, dateAfterOrEqual(minMottattdato())]}
        isReadOnly={readOnly}
      />
    </BorderBox>
  </RawIntlProvider>
);

MottattDatoPapirsoknadIndex.transformValues = ({ mottattDato }: MottattDatoFormValues) => ({ mottattDato });

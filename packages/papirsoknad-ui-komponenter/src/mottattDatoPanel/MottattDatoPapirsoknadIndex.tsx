import { FormattedMessage, RawIntlProvider } from 'react-intl';

import { Heading, VStack } from '@navikt/ds-react';
import { RhfDatepicker } from '@navikt/ft-form-hooks';
import { dateAfterOrEqual, dateBeforeOrEqualToToday, hasValidDate, required } from '@navikt/ft-form-validators';
import { BorderBox } from '@navikt/ft-ui-komponenter';
import { createIntl } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

export const minMottattdato = () => dayjs().subtract(1, 'year').subtract(1, 'day');
export const maxMottattdato = () => dayjs();

export type MottattDatoFormValues = {
  mottattDato?: string;
};

interface Props {
  readOnly: boolean;
}

export const MottattDatoPapirsoknadIndex = ({ readOnly }: Props) => (
  <RawIntlProvider value={intl}>
    <BorderBox>
      <VStack gap="4">
        <Heading size="small">
          <FormattedMessage key="regDatoTittel" id="Registrering.Omsoknaden.MottattDato" />
        </Heading>
        <RhfDatepicker
          name="mottattDato"
          label={<FormattedMessage key="regDatoUnder" id="Registrering.Omsoknaden.MottattDato" />}
          fromDate={minMottattdato().toDate()}
          toDate={maxMottattdato().toDate()}
          validate={[required, hasValidDate, dateBeforeOrEqualToToday, dateAfterOrEqual(minMottattdato())]}
          isReadOnly={readOnly}
        />
      </VStack>
    </BorderBox>
  </RawIntlProvider>
);

MottattDatoPapirsoknadIndex.initialValues = (): MottattDatoFormValues => ({
  mottattDato: undefined,
});
MottattDatoPapirsoknadIndex.transformValues = ({ mottattDato }: MottattDatoFormValues) => ({ mottattDato });

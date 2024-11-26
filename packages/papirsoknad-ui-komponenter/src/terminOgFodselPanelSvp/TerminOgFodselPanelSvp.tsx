import React from 'react';
import { useFormContext, UseFormGetValues } from 'react-hook-form';
import { createIntl } from '@navikt/ft-utils';
import { Heading, VStack } from '@navikt/ds-react';
import { BorderBox } from '@navikt/ft-ui-komponenter';
import { Datepicker } from '@navikt/ft-form-hooks';
import {
  dateAfterOrEqual,
  dateBeforeOrEqual,
  dateBeforeOrEqualToToday,
  hasValidDate,
  required,
} from '@navikt/ft-form-validators';

import {
  maxFodselsdato,
  maxTermindato,
  minFodselsdato,
  minTermindato,
  terminErRundtFodselsdato,
} from '../terminOgFodselPanel/validator';
import { ErBarnetFodt } from '../terminOgFodselPanel/components/ErBarnetFodt';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

export type FormValues = {
  termindato?: string;
  foedselsDato?: string;
  erBarnetFodt?: boolean;
};

interface Props {
  readOnly: boolean;
}

const validateTermin = (getValues: UseFormGetValues<FormValues>) => (termindato: string) => {
  const fodselsdato = getValues('foedselsDato');

  return terminErRundtFodselsdato(fodselsdato, termindato);
};

/*
 * TerminOgFodselPanelSvp
 *
 * Form som brukes for registrere termin og fødsel i papirsøknad.
 */
export const TerminOgFodselPanelSvp = ({ readOnly }: Props) => {
  const { getValues, watch } = useFormContext<FormValues>();

  const erBarnetFodt = watch('erBarnetFodt');

  return (
    <BorderBox>
      <VStack gap="4">
        <Heading size="small">{intl.formatMessage({ id: 'Registrering.TerminOgFodsel.Tittel' })}</Heading>
        <ErBarnetFodt readOnly={readOnly} />
        {erBarnetFodt && (
          <Datepicker
            name="foedselsDato"
            label={intl.formatMessage({ id: 'Registrering.TerminOgFodsel.Fodselsdato' })}
            isReadOnly={readOnly}
            fromDate={minFodselsdato().toDate()}
            toDate={maxFodselsdato().toDate()}
            validate={[required, hasValidDate, dateBeforeOrEqualToToday, dateAfterOrEqual(minFodselsdato())]}
          />
        )}
        <Datepicker
          name="termindato"
          label={intl.formatMessage({ id: 'Registrering.TerminOgFodsel.Termindato' })}
          isReadOnly={readOnly}
          fromDate={minTermindato().toDate()}
          toDate={maxTermindato().toDate()}
          defaultMonth={new Date()}
          validate={[
            required,
            hasValidDate,
            dateAfterOrEqual(minTermindato()),
            dateBeforeOrEqual(maxTermindato()),
            validateTermin(getValues),
          ]}
        />
      </VStack>
    </BorderBox>
  );
};

TerminOgFodselPanelSvp.initialValues = (): FormValues => ({
  termindato: undefined,
  foedselsDato: undefined,
  erBarnetFodt: false,
});

TerminOgFodselPanelSvp.transformValues = ({ erBarnetFodt, foedselsDato, termindato }: FormValues) => ({
  erBarnetFodt,
  termindato,
  foedselsDato: erBarnetFodt ? foedselsDato : undefined,
});

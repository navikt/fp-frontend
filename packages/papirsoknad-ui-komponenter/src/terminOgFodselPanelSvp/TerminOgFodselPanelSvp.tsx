import { useFormContext, type UseFormGetValues } from 'react-hook-form';

import { Heading, VStack } from '@navikt/ds-react';
import { RhfDatepicker, RhfRadioGroup } from '@navikt/ft-form-hooks';
import {
  dateAfterOrEqual,
  dateBeforeOrEqual,
  dateBeforeOrEqualToToday,
  hasValidDate,
  required,
} from '@navikt/ft-form-validators';
import { BorderBox } from '@navikt/ft-ui-komponenter';
import { createIntl } from '@navikt/ft-utils';

import {
  maxFodselsdato,
  maxTermindato,
  minFodselsdato,
  minTermindato,
  terminErRundtFodselsdato,
} from '@navikt/fp-utils';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

type FormValues = {
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
 * RhfForm som brukes for registrere termin og fødsel i papirsøknad.
 */
export const TerminOgFodselPanelSvp = ({ readOnly }: Props) => {
  const { getValues, watch, control } = useFormContext<FormValues>();

  const erBarnetFodt = watch('erBarnetFodt');

  return (
    <BorderBox>
      <VStack gap="4">
        <Heading size="small">{intl.formatMessage({ id: 'Registrering.TerminOgFodsel.Tittel' })}</Heading>
        <RhfRadioGroup
          name="erBarnetFodt"
          control={control}
          label={intl.formatMessage({ id: 'Registrering.TerminOgFodsel.ErBarnetFodt' })}
          validate={[required]}
          isReadOnly={readOnly}
          isTrueOrFalseSelection
          radios={[
            {
              label: intl.formatMessage({ id: 'Registrering.TerminOgFodsel.ErFodt' }),
              value: 'true',
            },
            {
              label: intl.formatMessage({ id: 'Registrering.TerminOgFodsel.ErIkkeFodt' }),
              value: 'false',
            },
          ]}
        />
        {erBarnetFodt && (
          <RhfDatepicker
            name="foedselsDato"
            control={control}
            label={intl.formatMessage({ id: 'Registrering.TerminOgFodsel.Fodselsdato' })}
            isReadOnly={readOnly}
            fromDate={minFodselsdato().toDate()}
            toDate={maxFodselsdato().toDate()}
            validate={[required, hasValidDate, dateBeforeOrEqualToToday, dateAfterOrEqual(minFodselsdato())]}
          />
        )}
        <RhfDatepicker
          name="termindato"
          control={control}
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

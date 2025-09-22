import { type ComponentProps } from 'react';
import { useFormContext } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { RhfDatepicker } from '@navikt/ft-form-hooks';
import { dateAfterOrEqual, dateBeforeOrEqual, hasValidDate, required } from '@navikt/ft-form-validators';

import { type FaktaKilde } from '@navikt/fp-fakta-felles';
import type { FødselGjeldende } from '@navikt/fp-types';
import { maxTermindato, minTermindato } from '@navikt/fp-utils';

const notRequiredValidation: ComponentProps<typeof RhfDatepicker>['validate'] = [
  hasValidDate,
  dateAfterOrEqual(minTermindato()),
  dateBeforeOrEqual(maxTermindato()),
];

export type TermindatoFormValues = {
  termindato?: string;
  termindatoKilde: FaktaKilde;
};

interface TermindatoProps {
  isReadOnly: boolean;
  isRequired?: boolean;
}

export const Termindato = ({ isReadOnly, isRequired = true }: TermindatoProps) => {
  const intl = useIntl();
  const { control } = useFormContext<TermindatoFormValues>();

  return (
    <RhfDatepicker
      control={control}
      name="termindato"
      size="medium"
      label={intl.formatMessage({ id: 'Label.Termindato' })}
      validate={isRequired ? [required, ...notRequiredValidation] : notRequiredValidation}
      fromDate={minTermindato().toDate()}
      toDate={maxTermindato().toDate()}
      defaultMonth={new Date()}
      isReadOnly={isReadOnly}
    />
  );
};

Termindato.initialValues = (gjeldende: FødselGjeldende) => ({
  termindato: gjeldende.termin?.termindato ?? '',
  termindatoKilde: gjeldende.termin?.kilde ?? 'SØKNAD',
});

Termindato.transformValues = (values: TermindatoFormValues) => ({
  termindato: values.termindato || null,
});

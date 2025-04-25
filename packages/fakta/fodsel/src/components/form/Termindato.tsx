import { useFormContext } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { RhfDatepicker } from '@navikt/ft-form-hooks';
import { dateAfterOrEqual, dateBeforeOrEqual, hasValidDate, required } from '@navikt/ft-form-validators';

import { maxTermindato, minTermindato } from '@navikt/fp-utils';

export type TermindatoFormValues = {
  termindato?: string;
};

interface Props {
  isReadOnly: boolean;
  isEdited?: boolean;
}

export const Termindato = ({ isReadOnly, isEdited }: Props) => {
  const intl = useIntl();
  const { control } = useFormContext<TermindatoFormValues>();

  return (
    <RhfDatepicker
      control={control}
      name="termindato"
      size="medium"
      label={intl.formatMessage({ id: 'Label.Termindato' })}
      validate={[required, hasValidDate, dateAfterOrEqual(minTermindato()), dateBeforeOrEqual(maxTermindato())]}
      fromDate={minTermindato().toDate()}
      toDate={maxTermindato().toDate()}
      defaultMonth={new Date()}
      isReadOnly={isReadOnly}
      isEdited={isEdited}
    />
  );
};

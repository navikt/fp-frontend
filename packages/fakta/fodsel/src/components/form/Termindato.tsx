import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { PencilIcon, XMarkIcon } from '@navikt/aksel-icons';
import { Button, Detail, HStack } from '@navikt/ds-react';
import { RhfDatepicker } from '@navikt/ft-form-hooks';
import { dateAfterOrEqual, dateBeforeOrEqual, hasValidDate, required } from '@navikt/ft-form-validators';

import { type FaktaKilde, getLabelForFaktaKilde } from '@navikt/fp-fakta-felles';
import type { FødselGjeldende } from '@navikt/fp-types';
import { maxTermindato, minTermindato, notEmpty } from '@navikt/fp-utils';

export type TermindatoFormValues = {
  termindato?: string;
  termindatoKilde: FaktaKilde;
};

interface TermindatoProps {
  isReadOnly: boolean;
}

export const Termindato = ({ isReadOnly }: TermindatoProps) => {
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
    />
  );
};

interface TermindatoMedReadonlyToggleProps {
  isReadOnly: boolean;
}

export const TermindatoMedReadonlyToggle = ({ isReadOnly }: TermindatoMedReadonlyToggleProps) => {
  const intl = useIntl();
  const { getValues, getFieldState, resetField } = useFormContext<TermindatoFormValues>();

  // isReadOnly == true = false -> kan ikke redigere
  // isReadOnly == false = true -> kan redigere

  // skal endres hvis
  //!isReadOnly && erRedigerbar

  const [erRedigerbar, setErRedigerbar] = useState(isReadOnly);
  const { isDirty } = getFieldState('termindato');
  const kilde = getValues('termindatoKilde');

  const formatertKilde = getLabelForFaktaKilde(isDirty ? 'SAKSBEHANDLER' : kilde);
  const toggleTermindato = () => {
    setErRedigerbar(s => {
      if (!s) {
        resetField('termindato');
      }
      return !s;
    });
  };

  return (
    <HStack gap="2">
      <Termindato isReadOnly={isReadOnly || !erRedigerbar} />

      <HStack
        gap="2"
        align="center"
        paddingBlock={isReadOnly || !erRedigerbar ? 'space-24 space-0' : 'space-32 space-0'}
      >
        {!isReadOnly && (
          <Button
            size="small"
            icon={ erRedigerbar?<XMarkIcon aria-hidden/> :<PencilIcon aria-hidden />}
            title={intl.formatMessage({
              id: erRedigerbar ? 'Termindato.AvbrytRedigering' : 'Termindato.EndreTermindato',
            })}
            onClick={toggleTermindato}
            variant={erRedigerbar ? 'tertiary-neutral' : 'tertiary'}
          />
        )}
        <Detail>{formatertKilde}</Detail>
      </HStack>
    </HStack>
  );
};

Termindato.initialValues = (gjeldende: FødselGjeldende) => ({
  termindato: gjeldende.termin?.termindato ?? '',
  termindatoKilde: notEmpty(gjeldende.termin?.kilde),
});

Termindato.transformValues = (values: TermindatoFormValues) => ({
  termindato: notEmpty(values.termindato),
});

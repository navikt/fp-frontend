import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { PencilIcon, XMarkIcon } from '@navikt/aksel-icons';
import { Button, Detail, HStack } from '@navikt/ds-react';

import { getLabelForFaktaKilde } from '@navikt/fp-fakta-felles';

import type { ErBarnFødtFormValues } from './ErBarnFødt';
import { Termindato, type TermindatoFormValues } from './Termindato';

interface TermindatoMedReadonlyToggleProps {
  isReadOnly: boolean;
}

export const TermindatoMedReadonlyToggle = ({ isReadOnly }: TermindatoMedReadonlyToggleProps) => {
  const intl = useIntl();
  const { getValues, getFieldState } = useFormContext<TermindatoFormValues & ErBarnFødtFormValues>();

  const { skalViseKnapp, isInputReadonly, toggleTermindato } = useReadonlyToggle(isReadOnly);

  const { isDirty } = getFieldState('termindato');
  const kilde = getValues('termindatoKilde');
  const erBarnFødt = getValues('erBarnFødt');

  const formatertKilde = getLabelForFaktaKilde(isDirty ? 'SAKSBEHANDLER' : kilde);
  return (
    <HStack gap="space-8" align="start">
      <Termindato isReadOnly={isInputReadonly} isRequired={erBarnFødt === false} />

      {skalViseKnapp && (
        <Button
          size="small"
          type="button"
          className="mt-7 self-center"
          onClick={toggleTermindato}
          icon={isInputReadonly ? <PencilIcon aria-hidden /> : <XMarkIcon aria-hidden />}
          variant={isInputReadonly ? 'tertiary' : 'tertiary-neutral'}
          title={intl.formatMessage({
            id: isInputReadonly ? 'Termindato.EndreTermindato' : 'Termindato.AvbrytRedigering',
          })}
        />
      )}
      <Detail className="mt-7 self-center">{formatertKilde}</Detail>
    </HStack>
  );
};

const useReadonlyToggle = (isReadOnly: boolean) => {
  const { getValues, resetField } = useFormContext<TermindatoFormValues>();

  const harDefaultValue = getValues('termindato');
  const erRedigerbarInit = isReadOnly || !harDefaultValue;
  const [erRedigerbar, setErRedigerbar] = useState(erRedigerbarInit);

  const toggleTermindato = () => {
    if (erRedigerbar) {
      resetField('termindato');
    }
    setErRedigerbar(!erRedigerbar);
  };
  return {
    skalViseKnapp: !erRedigerbarInit,
    isInputReadonly: isReadOnly || !erRedigerbar,
    toggleTermindato,
  };
};

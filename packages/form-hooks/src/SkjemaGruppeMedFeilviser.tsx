import React, {
  ReactNode, ReactNodeArray, FunctionComponent, useMemo,
} from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { SkjemaGruppe } from 'nav-frontend-skjema';
import { getError, getValidationRules } from './formUtils';

interface NavFieldGroupProps {
  name?: string;
  description?: string;
  children: ReactNodeArray | ReactNode;
  className?: string;
  validate?: ((value: string) => any)[];
}

const SkjemaGruppeMedFeilviser: FunctionComponent<NavFieldGroupProps> = ({
  name,
  description,
  children,
  className,
  validate,
}) => {
  const { formState: { errors } } = useFormContext();
  const { field } = useController({
    name,
    rules: {
      validate: useMemo(() => getValidationRules(validate), [validate]),
    },
  });

  if (!name) {
    return (
      <SkjemaGruppe description={description} className={className}>
        {children}
      </SkjemaGruppe>
    );
  }

  return (
    <SkjemaGruppe
      description={description}
      feil={getError(errors, name)}
      className={className}
      {...field}
    >
      {children}
    </SkjemaGruppe>
  );
};

export default SkjemaGruppeMedFeilviser;

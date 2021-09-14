import React, {
  ReactNode, ReactNodeArray, FunctionComponent, useMemo,
} from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { SkjemaGruppe } from 'nav-frontend-skjema';
import getError from './formUtils';

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
  const validationFunctions = useMemo(() => validate.reduce((acc, fn, index) => ({
    ...acc,
    [index]: (value: any) => fn(value) || true,
  }), {}), [validate]);

  const { field } = useController({
    name,
    rules: {
      validate: validationFunctions,
    },
  });

  if (!name) {
    return (
      <SkjemaGruppe description={description} className={className}>
        {children}
      </SkjemaGruppe>
    );
  }

  const feil = getError(errors, name);

  return (
    <SkjemaGruppe
      description={description}
      feil={feil}
      className={className}
      {...field}
    >
      {children}
    </SkjemaGruppe>
  );
};

export default SkjemaGruppeMedFeilviser;

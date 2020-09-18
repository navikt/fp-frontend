import React, { FunctionComponent } from 'react';
import { Column } from 'nav-frontend-grid';

import { DatepickerField } from '@fpsak-frontend/form';
import { hasValidDate, required } from '@fpsak-frontend/utils';
import { FieldArrayFieldsProps } from 'redux-form';

const truncateEmployerName = (empName: string) => {
  const cutOffLength = 20;

  if (empName.length > cutOffLength) {
    return (`${empName.substring(0, cutOffLength - 3)}...`);
  }
  return empName;
};

interface OwnProps {
  fields: FieldArrayFieldsProps<{ arbeidsgiver: string }>;
}

export const ArbeidsgiverInfo: FunctionComponent<OwnProps> = ({
  fields,
}) => (
  <div>
    {fields.map((arbeidsgiverId: any, index: number) => {
      const arbeidsgiverNavn = fields.get(index).arbeidsgiver;

      return (
        <Column xs="4" key={arbeidsgiverId}>
          <DatepickerField
            name={`${arbeidsgiverId}.arbeidsgiverStartdato`}
            label={fields.length > 2 ? truncateEmployerName(arbeidsgiverNavn) : arbeidsgiverNavn}
            validate={[required, hasValidDate]}
            readOnly
          />
        </Column>
      );
    })}
  </div>
);

export default ArbeidsgiverInfo;

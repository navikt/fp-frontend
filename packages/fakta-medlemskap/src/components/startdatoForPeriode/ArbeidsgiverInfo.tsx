import React, { FunctionComponent } from 'react';
import { FieldArrayFieldsProps } from 'redux-form';
import { Column } from 'nav-frontend-grid';

import { DatepickerField } from '@fpsak-frontend/form';
import { hasValidDate, required } from '@fpsak-frontend/utils';
import { ArbeidsgiverOpplysningerPerId, IAYInntektsmelding } from '@fpsak-frontend/types';

const truncateEmployerName = (empName: string): string => {
  const cutOffLength = 20;

  if (empName.length > cutOffLength) {
    return (`${empName.substring(0, cutOffLength - 3)}...`);
  }
  return empName;
};

interface OwnProps {
  fields: FieldArrayFieldsProps<IAYInntektsmelding>;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const ArbeidsgiverInfo: FunctionComponent<OwnProps> = ({
  fields,
  arbeidsgiverOpplysningerPerId,
}) => (
  <>
    {fields.map((arbeidsgiverId, index) => {
      const inntektsmeldingData = fields.get(index);
      const arbeidsgiverOpplysninger = arbeidsgiverOpplysningerPerId[inntektsmeldingData.arbeidsgiverReferanse];

      return (
        <Column xs="4" key={arbeidsgiverId}>
          <DatepickerField
            name={`${arbeidsgiverId}.arbeidsgiverStartdato`}
            label={fields.length > 2 ? truncateEmployerName(arbeidsgiverOpplysninger.navn) : arbeidsgiverOpplysninger.navn}
            validate={[required, hasValidDate]}
            readOnly
          />
        </Column>
      );
    })}
  </>
);

export default ArbeidsgiverInfo;

import React, { FunctionComponent } from 'react';
import { injectIntl, WrappedComponentProps } from 'react-intl';

import { required } from '@fpsak-frontend/utils';
import { ArrowBox, VerticalSpacer } from '@fpsak-frontend/shared-components';
import { RadioGroupField, RadioOption, SelectField } from '@fpsak-frontend/form';
import { Arbeidsforhold, ArbeidsgiverOpplysningerPerId } from '@fpsak-frontend/types';

import BehandlingFormFieldCleaner from '../../util/BehandlingFormFieldCleaner';

const getEndCharFromId = (id: string): string => id.substring(id.length - 4, id.length);

const getOptionTekst = (arbeidsforhold: Arbeidsforhold, arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId): string => {
  const arbeidsgiverOpplysninger = arbeidsgiverOpplysningerPerId[arbeidsforhold.arbeidsgiverReferanse];
  return `${arbeidsgiverOpplysninger.navn}(${arbeidsgiverOpplysninger.identifikator})...${getEndCharFromId(arbeidsforhold.arbeidsforholdId)}`;
};

interface OwnProps {
  readOnly: boolean;
  isErstattArbeidsforhold: boolean;
  arbeidsforholdList: Arbeidsforhold[];
  formName: string;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

const PersonNyttEllerErstattArbeidsforholdPanel: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  intl,
  readOnly,
  isErstattArbeidsforhold,
  arbeidsforholdList,
  formName,
  arbeidsgiverOpplysningerPerId,
}) => (
  <BehandlingFormFieldCleaner
    formName={formName}
    fieldNames={['erNyttArbeidsforhold', 'erstatterArbeidsforholdId']}
  >
    <VerticalSpacer sixteenPx />
    <ArrowBox alignLeft alignOffset={50}>
      <RadioGroupField
        name="erNyttArbeidsforhold"
        validate={[required]}
        direction="vertical"
        readOnly={readOnly}
      >
        <RadioOption
          label={intl.formatMessage({ id: 'PersonNyttEllerErstattArbeidsforholdPanel.NyttArbeidsforhold' })}
          value
        />
        <RadioOption
          label={intl.formatMessage({ id: 'PersonNyttEllerErstattArbeidsforholdPanel.ErstattArbeidsforhold' })}
          value={false}
        />
      </RadioGroupField>
      {isErstattArbeidsforhold && (
        <SelectField
          name="erstatterArbeidsforholdId"
          label={intl.formatMessage({ id: 'PersonNyttEllerErstattArbeidsforholdPanel.SelectArbeidsforhold' })}
          placeholder={intl.formatMessage({ id: 'PersonNyttEllerErstattArbeidsforholdPanel.ChooseArbeidsforhold' })}
          validate={[required]}
          selectValues={arbeidsforholdList.map((a) => (
            <option key={a.arbeidsgiverReferanse + a.arbeidsforholdId} value={a.id}>
              {getOptionTekst(a, arbeidsgiverOpplysningerPerId)}
            </option>
          ))}
          bredde="xl"
          readOnly={readOnly}
        />
      )}
    </ArrowBox>
  </BehandlingFormFieldCleaner>
);

export default injectIntl(PersonNyttEllerErstattArbeidsforholdPanel);

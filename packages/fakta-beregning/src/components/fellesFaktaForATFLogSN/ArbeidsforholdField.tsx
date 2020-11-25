import React, { FunctionComponent } from 'react';
import { InputField, SelectField } from '@fpsak-frontend/form';
import { KodeverkMedNavn } from '@fpsak-frontend/types';
import { FieldArrayFieldsProps } from 'redux-form';
import { getUniqueListOfArbeidsforholdFields, createVisningsnavnForAktivitet } from '../ArbeidsforholdHelper';

const finnArbeidsforholdForAndel = (arbeidsforholdListe, val) => {
  const andelsnr = Number(val);
  return arbeidsforholdListe.find((arbeidsforhold) => arbeidsforhold.andelsnr === andelsnr);
};

const setArbeidsforholdInfo = (fields, index, arbeidsforholdList, val) => {
  const field = fields.get(index);
  const arbeidsforhold = finnArbeidsforholdForAndel(arbeidsforholdList, val);
  if (arbeidsforhold) {
    field.arbeidsforholdId = arbeidsforhold.arbeidsforholdId;
    field.arbeidsgiverNavn = arbeidsforhold.arbeidsgiverNavn;
    field.arbeidsgiverId = arbeidsforhold.arbeidsgiverId;
    field.arbeidsperiodeFom = arbeidsforhold.arbeidsperiodeFom;
    field.arbeidsperiodeTom = arbeidsforhold.arbeidsperiodeTom;
    field.andelsnrRef = arbeidsforhold.andelsnr;
  }
};

const fieldLabel = (index, labelId) => {
  if (index === 0) {
    return { id: labelId };
  }
  return '';
};

const arbeidsgiverSelectValues = (arbeidsforholdList, alleKodeverk) => (arbeidsforholdList
  .map((arbeidsforhold) => (
    <option value={arbeidsforhold.andelsnr.toString()} key={arbeidsforhold.andelsnr}>
      {createVisningsnavnForAktivitet(arbeidsforhold, alleKodeverk)}
    </option>
  )));

type OwnProps = {
    fields: FieldArrayFieldsProps<any>;
    index: number;
    readOnly: boolean;
    name: string;
    alleKodeverk: {[key: string]: KodeverkMedNavn[]};
};

export const ArbeidsforholdFieldImpl: FunctionComponent<OwnProps> = ({
  fields, index, name, readOnly, alleKodeverk,
}) => {
  const arbeidsforholdList = getUniqueListOfArbeidsforholdFields(fields);
  return (
    <>
      {(!fields.get(index).skalKunneEndreAktivitet)
      && (
      <InputField
        name={name}
        bredde="L"
        readOnly
      />
      )}
      {fields.get(index).skalKunneEndreAktivitet
      && (
      <SelectField
        name={name}
        bredde="l"
        label={fieldLabel(index, 'BeregningInfoPanel.FordelingBG.Andel')}
        selectValues={arbeidsgiverSelectValues(arbeidsforholdList, alleKodeverk)}
        readOnly={readOnly}
        onChange={(event) => setArbeidsforholdInfo(fields, index, arbeidsforholdList, event.target.value)}
      />
      )}
    </>
  );
};

export default ArbeidsforholdFieldImpl;

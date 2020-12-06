import React, { FunctionComponent } from 'react';
import { InputField, SelectField } from '@fpsak-frontend/form';
import { KodeverkMedNavn } from '@fpsak-frontend/types';
import { FieldArrayFieldsProps } from 'redux-form';
import ArbeidsgiverOpplysningerPerId from '@fpsak-frontend/types/src/arbeidsgiverOpplysningerTsType';
import { getKodeverknavnFn } from '@fpsak-frontend/utils';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
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

const lagVisningsnavn = (arbeidsforhold, alleKodeverk, arbeidsgiverOpplysningerPerId) => {
  if (!arbeidsforhold.arbeidsgiverId) {
    return arbeidsforhold.arbeidsforholdType ? getKodeverknavnFn(alleKodeverk, kodeverkTyper)(arbeidsforhold.arbeidsforholdType) : '';
  }
  const agOpplysning = arbeidsgiverOpplysningerPerId[arbeidsforhold.arbeidsgiverId];
  if (!agOpplysning) {
    return arbeidsforhold.arbeidsforholdType ? getKodeverknavnFn(alleKodeverk, kodeverkTyper)(arbeidsforhold.arbeidsforholdType) : '';
  }
  return createVisningsnavnForAktivitet(agOpplysning, undefined);
};

const arbeidsgiverSelectValues = (arbeidsforholdList, alleKodeverk, arbeidsgiverOpplysningerPerId) => (arbeidsforholdList
  .map((arbeidsforhold) => (
    <option value={arbeidsforhold.andelsnr.toString()} key={arbeidsforhold.andelsnr}>
      {lagVisningsnavn(arbeidsforhold, alleKodeverk, arbeidsgiverOpplysningerPerId)}
    </option>
  )));

type OwnProps = {
    fields: FieldArrayFieldsProps<any>;
    index: number;
    readOnly: boolean;
    name: string;
    alleKodeverk: {[key: string]: KodeverkMedNavn[]};
    arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
};

export const ArbeidsforholdFieldImpl: FunctionComponent<OwnProps> = ({
  fields,
  index,
  name,
  readOnly,
  alleKodeverk,
  arbeidsgiverOpplysningerPerId,
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
        selectValues={arbeidsgiverSelectValues(arbeidsforholdList, alleKodeverk, arbeidsgiverOpplysningerPerId)}
        readOnly={readOnly}
        onChange={(event) => setArbeidsforholdInfo(fields, index, arbeidsforholdList, event.target.value)}
      />
      )}
    </>
  );
};

export default ArbeidsforholdFieldImpl;

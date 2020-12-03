import React, { FunctionComponent } from 'react';
import {
  dateFormat,
  hasValidDate,
  required,
  dateAfterOrEqual,
  parseCurrencyInput,
  minValueFormatted,
  maxValueFormatted,
  removeSpacesFromNumber,
  formatCurrencyNoKr,
} from '@fpsak-frontend/utils';
import { Column, Row } from 'nav-frontend-grid';
import { DatepickerField, InputField } from '@fpsak-frontend/form';
import { FormattedMessage } from 'react-intl';

import { Normaltekst } from 'nav-frontend-typografi';
import { RefusjonTilVurderingAndel } from '@fpsak-frontend/types';
import styles from './vurderEndringRefusjonRad.less';

const getEndCharFromId = (id) => (id ? `...${id.substring(id.length - 4, id.length)}` : '');

const visningsnavn = (andel) => {
  const arbeidsgiverId = andel.arbeidsgiver.arbeidsgiverOrgnr || andel.arbeidsgiver.arbeidsgiverAktørId;
  return arbeidsgiverId
    ? `${andel.arbeidsgiverNavn} (${arbeidsgiverId})${getEndCharFromId(andel.eksternArbeidsforholdRef)}`
    : andel.arbeidsgiverNavn;
};

const FIELD_KEY_REFUSJONSTART = 'REFUSJON_ENDRING_DATO';
const FIELD_KEY_DELVIS_REF = 'DELVIS_REFUSJON_FØR_START_BELØP';

const lagNøkkel = (prefix, andel) => {
  if (andel.arbeidsgiver.arbeidsgiverOrgnr) {
    return `${prefix}${andel.arbeidsgiver.arbeidsgiverOrgnr}${andel.internArbeidsforholdRef}`;
  }
  return `${prefix}${andel.arbeidsgiver.arbeidsgiverAktørId}${andel.internArbeidsforholdRef}`;
};

export const lagNøkkelRefusjonsstart = (andel) => lagNøkkel(FIELD_KEY_REFUSJONSTART, andel);
export const lagNøkkelDelvisRefusjon = (andel) => lagNøkkel(FIELD_KEY_DELVIS_REF, andel);

type OwnProps = {
    refusjonAndel?: RefusjonTilVurderingAndel;
    readOnly: boolean;
    erAksjonspunktÅpent: boolean;
};

type TransformedValues = {
  arbeidsgiverOrgnr?: string;
  arbeidsgiverAktoerId?: string;
  internArbeidsforholdRef?: string;
  fastsattRefusjonFom: string;
  delvisRefusjonPrMndFørStart?: number;
}

interface StaticFunctions {
  buildInitialValues: (andel: RefusjonTilVurderingAndel) => any;
  transformValues: (values: any, andel: RefusjonTilVurderingAndel) => TransformedValues;
}

export const VurderEndringRefusjonRad: FunctionComponent<OwnProps> & StaticFunctions = ({ refusjonAndel, readOnly, erAksjonspunktÅpent }) => {
  if (!refusjonAndel) {
    return null;
  }
  const navn = visningsnavn(refusjonAndel);
  const andelTekst = refusjonAndel.skalKunneFastsetteDelvisRefusjon
    ? 'BeregningInfoPanel.RefusjonBG.TidligereRefusjon'
    : 'BeregningInfoPanel.RefusjonBG.IngenTidligereRefusjon';
  return (
    <>
      <Row>
        <Column xs="8">
          <FormattedMessage
            id={andelTekst}
            values={{
              ag: navn,
              dato: dateFormat(refusjonAndel.nyttRefusjonskravFom),
              b: (chunks) => <b>{chunks}</b>,
            }}
          />
        </Column>
      </Row>
      <Row>
        <Column xs="4">
          <Normaltekst className={styles.marginTopp}>
            <FormattedMessage
              id="BeregningInfoPanel.RefusjonBG.RefusjonFra"
            />
          </Normaltekst>
        </Column>
        <Column xs="4">
          <DatepickerField
            name={lagNøkkelRefusjonsstart(refusjonAndel)}
            readOnly={readOnly}
            validate={[required, hasValidDate, dateAfterOrEqual(refusjonAndel.tidligsteMuligeRefusjonsdato)]}
            isEdited={!!refusjonAndel.fastsattNyttRefusjonskravFom && !erAksjonspunktÅpent}
          />
        </Column>
      </Row>
      {refusjonAndel.skalKunneFastsetteDelvisRefusjon && (
        <Row>
          <Column xs="4">
            <Normaltekst className={styles.marginTopp}>
              <FormattedMessage
                id="BeregningInfoPanel.RefusjonBG.DelvisPrMnd"
              />
            </Normaltekst>
          </Column>
          <Column xs="4">
            <InputField
              name={lagNøkkelDelvisRefusjon(refusjonAndel)}
              bredde="S"
              validate={[required, minValueFormatted(1), maxValueFormatted(refusjonAndel.maksTillattDelvisRefusjonPrMnd)]}
              parse={parseCurrencyInput}
              readOnly={readOnly}
              isEdited={!!refusjonAndel.fastsattDelvisRefusjonPrMnd && !erAksjonspunktÅpent}
            />
          </Column>
        </Row>
      )}
    </>
  );
};

VurderEndringRefusjonRad.buildInitialValues = (refusjonAndel: RefusjonTilVurderingAndel) => {
  const initialValues = {};
  initialValues[lagNøkkelRefusjonsstart(refusjonAndel)] = refusjonAndel.fastsattNyttRefusjonskravFom;
  initialValues[lagNøkkelDelvisRefusjon(refusjonAndel)] = formatCurrencyNoKr(refusjonAndel.fastsattDelvisRefusjonPrMnd);
  return initialValues;
};

VurderEndringRefusjonRad.transformValues = (values, andel: RefusjonTilVurderingAndel) => {
  let delvisRefusjonPrMnd = null;
  if (andel.skalKunneFastsetteDelvisRefusjon) {
    const delvisNøkkel = lagNøkkelDelvisRefusjon(andel);
    delvisRefusjonPrMnd = removeSpacesFromNumber(values[delvisNøkkel]);
  }
  const datoNøkkel = lagNøkkelRefusjonsstart(andel);
  const fastsattDato = values[datoNøkkel];
  return {
    arbeidsgiverOrgnr: andel.arbeidsgiver.arbeidsgiverOrgnr,
    arbeidsgiverAktoerId: andel.arbeidsgiver.arbeidsgiverAktørId,
    internArbeidsforholdRef: andel.internArbeidsforholdRef,
    fastsattRefusjonFom: fastsattDato,
    delvisRefusjonPrMndFørStart: delvisRefusjonPrMnd,
  };
};

export default VurderEndringRefusjonRad;

import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { NavFieldGroup } from '@fpsak-frontend/form';
import {
  isArrayEmpty, removeSpacesFromNumber, required,
} from '@fpsak-frontend/utils';
import inntektskategorier from '@fpsak-frontend/kodeverk/src/inntektskategorier';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import faktaOmBeregningTilfelle from '@fpsak-frontend/kodeverk/src/faktaOmBeregningTilfelle';
import { Table, VerticalSpacer } from '@fpsak-frontend/shared-components';
import { FieldArrayFieldsProps, FieldArrayMetaProps } from 'redux-form';
import {
  AndelForFaktaOmBeregning, ArbeidsgiverOpplysningerPerId,
  KodeverkMedNavn, AlleKodeverk,
} from '@fpsak-frontend/types';
import Beregningsgrunnlag from '@fpsak-frontend/types/src/beregningsgrunnlagTsType';
import { mapAndelToField, skalHaBesteberegningSelector } from './BgFaktaUtils';
import styles from './inntektFieldArray.less';
import { SortedAndelInfo, validateUlikeAndeler, validateUlikeAndelerWithGroupingFunction } from './ValidateAndelerUtils';
import { getFormValuesForBeregning, isBeregningFormDirty as isFormDirty } from '../BeregningFormUtils';
import { AndelRow, getHeaderTextCodes } from './InntektFieldArrayRow';
import AddDagpengerAndelButton from './AddDagpengerAndelButton';
import SummaryRow from './SummaryRow';
import AndelFieldValue, { InntektTransformed } from '../../typer/FieldValues';
import { vurderMilitaerField } from './vurderMilitaer/VurderMilitaer';

const dagpenger = (aktivitetStatuser: KodeverkMedNavn[]) : AndelFieldValue => ({
  andel: aktivitetStatuser.find(({ kode }) => kode === aktivitetStatus.DAGPENGER).navn,
  aktivitetStatus: aktivitetStatus.DAGPENGER,
  fastsattBelop: '',
  inntektskategori: inntektskategorier.DAGPENGER,
  nyAndel: true,
  skalKunneEndreAktivitet: false,
  lagtTilAvSaksbehandler: true,
});

const lagNyMS = (aktivitetStatuser: KodeverkMedNavn[]) : AndelFieldValue => ({
  andel: aktivitetStatuser.find(({ kode }) => kode === aktivitetStatus.MILITAER_ELLER_SIVIL).navn,
  aktivitetStatus: aktivitetStatus.MILITAER_ELLER_SIVIL,
  fastsattBelop: '',
  inntektskategori: inntektskategorier.ARBEIDSTAKER,
  nyAndel: true,
  skalKunneEndreAktivitet: false,
  lagtTilAvSaksbehandler: true,
});

const isDirty = (meta, isBeregningFormDirty) => (meta.dirty || isBeregningFormDirty);

const getErrorMessage = (meta, isBeregningFormDirty) => (meta.error && isDirty(meta, isBeregningFormDirty)
&& meta.submitFailed ? meta.error : null);

const skalViseSletteknapp = (index, fields, readOnly) => (fields.get(index).skalKunneEndreAktivitet === true && !readOnly);

const skalViseRefusjon = (fields) => {
  let skalVise = false;
  fields.forEach((id, index) => {
    const field = fields.get(index);
    if (field.refusjonskrav !== '' && field.refusjonskrav !== null && field.refusjonskrav !== undefined) {
      skalVise = true;
    }
  });
  return skalVise;
};

const skalVisePeriode = (fields) => {
  let skalVise = false;
  fields.forEach((id, index) => {
    const field = fields.get(index);
    if (field.arbeidsgiverId !== '') {
      skalVise = true;
    }
  });
  return skalVise;
};

const removeAndel = (fields, index) => () => {
  fields.remove(index);
};

const createAndelerTableRows = (
  fields,
  readOnly,
  beregningsgrunnlag,
  isAksjonspunktClosed,
  alleKodeverk,
) => fields.map((andelElementFieldId, index) => (
  <AndelRow
    key={andelElementFieldId}
    fields={fields}
    skalVisePeriode={skalVisePeriode(fields)}
    skalViseRefusjon={skalViseRefusjon(fields)}
    skalViseSletteknapp={skalViseSletteknapp(index, fields, readOnly)}
    andelElementFieldId={andelElementFieldId}
    readOnly={readOnly}
    removeAndel={removeAndel(fields, index)}
    index={index}
    beregningsgrunnlag={beregningsgrunnlag}
    isAksjonspunktClosed={isAksjonspunktClosed}
    alleKodeverk={alleKodeverk}
  />
));

const createBruttoBGSummaryRow = (fields, readOnly, beregningsgrunnlag) => (
  <SummaryRow
    readOnly={readOnly}
    key="summaryRow"
    skalVisePeriode={skalVisePeriode(fields)}
    skalViseRefusjon={skalViseRefusjon(fields)}
    fields={fields}
    beregningsgrunnlag={beregningsgrunnlag}
  />
);

const findAktivitetStatusIndex = (fields: FieldArrayFieldsProps<AndelFieldValue>, aktivitetStatusKode: string) => {
  let index = -1;
  fields.forEach((id, nyIndex) => {
    const field = fields.get(nyIndex);
    if (field.aktivitetStatus === aktivitetStatusKode) {
      index = nyIndex;
    }
  });
  return index;
};

const harDagpenger = (fields: FieldArrayFieldsProps<AndelFieldValue>) => findAktivitetStatusIndex(fields, aktivitetStatus.DAGPENGER) !== -1;

const fjernEllerLeggTilAktivitetStatus = (fields: FieldArrayFieldsProps<AndelFieldValue>,
  aktivitetStatusKode: string,
  skalHaAndelMedAktivitetstatus: boolean,
  skalFjerne: (field: AndelFieldValue) => boolean,
  nyStatusAndel: AndelFieldValue) => {
  const statusIndex = findAktivitetStatusIndex(fields, aktivitetStatusKode);
  if (statusIndex !== -1) {
    const field = fields.get(statusIndex);
    if (skalFjerne(field)) {
      fields.remove(statusIndex);
    }
  }
  if (statusIndex !== -1) {
    return;
  }
  if (skalHaAndelMedAktivitetstatus) {
    fields.push(nyStatusAndel);
  }
};

export const leggTilDagpengerOmBesteberegning = (fields: FieldArrayFieldsProps<AndelFieldValue>,
  skalHaBesteberegning: boolean,
  aktivitetStatuser: KodeverkMedNavn[],
  skalKunneLeggeTilDagpenger: boolean) => {
  fjernEllerLeggTilAktivitetStatus(
    fields,
    aktivitetStatus.DAGPENGER,
    skalHaBesteberegning,
    (andel: AndelFieldValue) => !skalHaBesteberegning && !skalKunneLeggeTilDagpenger && andel.lagtTilAvSaksbehandler,
    dagpenger(aktivitetStatuser),
  );
};

const fjernEllerLeggTilMilitær = (fields: FieldArrayFieldsProps<AndelFieldValue>,
  skalHaMilitær: boolean,
  aktivitetStatuser: KodeverkMedNavn[]) => {
  fjernEllerLeggTilAktivitetStatus(
    fields,
    aktivitetStatus.MILITAER_ELLER_SIVIL,
    skalHaMilitær === true,
    () => skalHaMilitær === false,
    lagNyMS(aktivitetStatuser),
  );
};

type OwnProps = {
    readOnly: boolean;
    fields: FieldArrayFieldsProps<AndelFieldValue>;
    meta: FieldArrayMetaProps;
    isBeregningFormDirty: boolean;
    skalKunneLeggeTilDagpengerManuelt: boolean;
    skalHaBesteberegning: boolean;
    skalHaMilitær?: boolean,
    beregningsgrunnlag: Beregningsgrunnlag;
    alleKodeverk: AlleKodeverk;
    isAksjonspunktClosed: boolean;
};

interface StaticFunctions {
  validate: (values: AndelFieldValue[],
             erKunYtelse: boolean,
             skalFastsetteInntekt: (andel) => boolean) => any;
  buildInitialValues: (andeler: AndelForFaktaOmBeregning[],
                       arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
                       alleKodeverk: AlleKodeverk) => AndelFieldValue[];
  transformValues: (values: AndelFieldValue[]) => InntektTransformed[];
}

/**
 *  InntektFieldArray
 *
 * Presentasjonskomponent: Viser fordeling for andeler
 * Komponenten må rendres som komponenten til et FieldArray.
 */
export const InntektFieldArray: FunctionComponent<OwnProps> & StaticFunctions = ({
  fields,
  meta,
  readOnly,
  isBeregningFormDirty,
  skalKunneLeggeTilDagpengerManuelt,
  beregningsgrunnlag,
  isAksjonspunktClosed,
  alleKodeverk,
}) => {
  const tablerows = createAndelerTableRows(
    fields,
    readOnly,
    beregningsgrunnlag,
    isAksjonspunktClosed,
    alleKodeverk,
  );
  if (tablerows.length === 0) {
    if (skalKunneLeggeTilDagpengerManuelt) {
      return (
        <NavFieldGroup errorMessage={getErrorMessage(meta, isBeregningFormDirty)}>
          {!readOnly && !harDagpenger(fields)
      && (
        <AddDagpengerAndelButton
          fields={fields}
          alleKodeverk={alleKodeverk}
        />
      )}
          <VerticalSpacer eightPx />
        </NavFieldGroup>
      );
    }
    return null;
  }
  tablerows.push(createBruttoBGSummaryRow(fields, readOnly, beregningsgrunnlag));
  return (
    <NavFieldGroup errorMessage={getErrorMessage(meta, isBeregningFormDirty)}>
      <Table headerTextCodes={getHeaderTextCodes(skalVisePeriode(fields), skalViseRefusjon(fields))} noHover classNameTable={styles.inntektTable}>
        {tablerows}
      </Table>
      {!readOnly && skalKunneLeggeTilDagpengerManuelt && !harDagpenger(fields)
      && (
        <AddDagpengerAndelButton
          fields={fields}
          alleKodeverk={alleKodeverk}
        />
      )}
      <VerticalSpacer eightPx />
    </NavFieldGroup>
  );
};

InntektFieldArray.defaultProps = {
  skalKunneLeggeTilDagpengerManuelt: false,
};

InntektFieldArray.transformValues = (values: AndelFieldValue[]): InntektTransformed[] => (values
  ? values.filter(({ kanRedigereInntekt }) => kanRedigereInntekt)
    .filter(({ fastsattBelop }) => fastsattBelop !== null && fastsattBelop !== '')
    .map((fieldValue) => ({
      andelsnr: fieldValue.andelsnr,
      fastsattBelop: removeSpacesFromNumber(fieldValue.fastsattBelop),
      inntektskategori: fieldValue.inntektskategori,
      nyAndel: fieldValue.nyAndel,
      lagtTilAvSaksbehandler: fieldValue.lagtTilAvSaksbehandler,
      aktivitetStatus: fieldValue.aktivitetStatus,
      arbeidsforholdId: fieldValue.arbeidsforholdId,
      arbeidsgiverId: fieldValue.arbeidsgiverId,
    })) : null
);

const mapAndelToSortedObject = (value: AndelFieldValue): SortedAndelInfo => {
  const { andel, inntektskategori } = value;
  return { andelsinfo: andel, inntektskategori };
};

InntektFieldArray.validate = (values: AndelFieldValue[], erKunYtelse, skalFastsetteInntekt) => {
  // eslint-disable-next-line react/destructuring-assignment
  const arrayErrors = values
    .map((andelFieldValues) => {
      const fieldErrors = {
        andel: null,
        fastsattBelop: null,
        inntektskategori: null,
      };
      fieldErrors.andel = required(andelFieldValues.andel);
      fieldErrors.fastsattBelop = skalFastsetteInntekt(andelFieldValues) ? required(andelFieldValues.fastsattBelop) : null;
      fieldErrors.inntektskategori = required(andelFieldValues.inntektskategori);
      return fieldErrors.andel || fieldErrors.fastsattBelop || fieldErrors.inntektskategori ? fieldErrors : null;
    });
  if (arrayErrors.some((errors) => errors !== null)) {
    return arrayErrors;
  }
  if (isArrayEmpty(values)) {
    return null;
  }
  const ulikeAndelerError = erKunYtelse ? validateUlikeAndelerWithGroupingFunction(values, mapAndelToSortedObject) : validateUlikeAndeler(values);
  if (ulikeAndelerError) {
    return { _error: ulikeAndelerError };
  }
  return null;
};

InntektFieldArray.buildInitialValues = (andeler: AndelForFaktaOmBeregning[],
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  alleKodeverk: AlleKodeverk): AndelFieldValue[] => {
  if (!andeler || andeler.length === 0) {
    return [];
  }
  return andeler.map((a) => mapAndelToField(a, arbeidsgiverOpplysningerPerId, alleKodeverk));
};

export const mapStateToProps = (state, ownProps) => {
  const isBeregningFormDirty = isFormDirty(state);
  const aktivitetStatuser = ownProps.alleKodeverk[kodeverkTyper.AKTIVITET_STATUS];
  const skalHaBesteberegning = skalHaBesteberegningSelector(state) === true;
  const skalHaMilitær = getFormValuesForBeregning(state)[vurderMilitaerField];
  const tilfeller = ownProps.beregningsgrunnlag.faktaOmBeregning.faktaOmBeregningTilfeller
    ? ownProps.beregningsgrunnlag.faktaOmBeregning.faktaOmBeregningTilfeller.map(({ kode }) => kode) : [];
  fjernEllerLeggTilMilitær(ownProps.fields, skalHaMilitær, aktivitetStatuser);
  leggTilDagpengerOmBesteberegning(ownProps.fields, skalHaBesteberegning, aktivitetStatuser, ownProps.skalKunneLeggeTilDagpengerManuelt);
  return {
    isBeregningFormDirty,
    skalHaBesteberegning,
    skalHaMilitær,
    erKunYtelse: tilfeller && tilfeller.includes(faktaOmBeregningTilfelle.FASTSETT_BG_KUN_YTELSE),
  };
};
export default connect(mapStateToProps)(InntektFieldArray);

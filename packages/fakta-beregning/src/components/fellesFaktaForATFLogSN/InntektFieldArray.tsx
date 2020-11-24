import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { injectIntl, WrappedComponentProps } from 'react-intl';
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
  AndelForFaktaOmBeregning,
  KodeverkMedNavn,
} from '@fpsak-frontend/types';
import Beregningsgrunnlag from '@fpsak-frontend/types/src/beregningsgrunnlagTsType';
import Kodeverk from '@fpsak-frontend/types/src/kodeverkTsType';
import { mapAndelToField, skalHaBesteberegningSelector } from './BgFaktaUtils';
import styles from './inntektFieldArray.less';
import { validateUlikeAndeler, validateUlikeAndelerWithGroupingFunction } from './ValidateAndelerUtils';
import { isBeregningFormDirty as isFormDirty } from '../BeregningFormUtils';
import { AndelRow, getHeaderTextCodes } from './InntektFieldArrayRow';
import AddAndelButton from './AddAndelButton';
import SummaryRow from './SummaryRow';
import AndelFieldValue, { InntektTransformed } from './andelFieldValueTs';

const dagpenger = (aktivitetStatuser) => ({
  andel: aktivitetStatuser.filter(({ kode }) => kode === aktivitetStatus.DAGPENGER)[0].navn,
  aktivitetStatus: aktivitetStatus.DAGPENGER,
  fastsattBelop: '',
  inntektskategori: inntektskategorier.DAGPENGER,
  nyAndel: true,
  skalKunneEndreAktivitet: false,
  lagtTilAvSaksbehandler: true,
});

const isDirty = (meta, isBeregningFormDirty) => (meta.dirty || isBeregningFormDirty);

const getErrorMessage = (meta, intl, isBeregningFormDirty) => (meta.error && isDirty(meta, isBeregningFormDirty)
&& meta.submitFailed ? intl.formatMessage(...meta.error) : null);

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
  behandlingId,
  behandlingVersjon,
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
    behandlingId={behandlingId}
    beregningsgrunnlag={beregningsgrunnlag}
    behandlingVersjon={behandlingVersjon}
    isAksjonspunktClosed={isAksjonspunktClosed}
    alleKodeverk={alleKodeverk}
  />
));

const createBruttoBGSummaryRow = (fields, readOnly, beregningsgrunnlag, behandlingId, behandlingVersjon) => (
  <SummaryRow
    readOnly={readOnly}
    key="summaryRow"
    skalVisePeriode={skalVisePeriode(fields)}
    skalViseRefusjon={skalViseRefusjon(fields)}
    fields={fields}
    beregningsgrunnlag={beregningsgrunnlag}
    behandlingId={behandlingId}
    behandlingVersjon={behandlingVersjon}
  />
);

const findDagpengerIndex = (fields) => {
  let dagpengerIndex = -1;
  fields.forEach((id, index) => {
    const field = fields.get(index);
    if (field.aktivitetStatus === aktivitetStatus.DAGPENGER) {
      dagpengerIndex = index;
    }
  });
  return dagpengerIndex;
};

export const leggTilDagpengerOmBesteberegning = (fields, skalHaBesteberegning, aktivitetStatuser) => {
  const dpIndex = findDagpengerIndex(fields);
  if (!skalHaBesteberegning) {
    if (dpIndex !== -1) {
      const field = fields.get(dpIndex);
      if (field.lagtTilAvSaksbehandler) {
        fields.remove(dpIndex);
      }
    }
    return;
  }
  if (dpIndex !== -1) {
    return;
  }
  fields.push(dagpenger(aktivitetStatuser));
};

type OwnProps = {
    readOnly: boolean;
    fields: FieldArrayFieldsProps<any>;
    meta: FieldArrayMetaProps;
    isBeregningFormDirty: boolean;
    erKunYtelse: boolean;
    skalKunneLeggeTilAndel?: boolean;
    aktivitetStatuser: Kodeverk[];
    skalHaBesteberegning: boolean;
    behandlingId: number;
    behandlingVersjon: number;
    beregningsgrunnlag: Beregningsgrunnlag;
    alleKodeverk: {[key: string]: KodeverkMedNavn[]};
    isAksjonspunktClosed: boolean;
};

interface StaticFunctions {
  validate: (values: any,
             erKunYtelse: boolean,
             skalFastsetteInntekt: (andel) => boolean) => any;
  buildInitialValues: (andeler: AndelForFaktaOmBeregning[]) => any;
  transformValues: (values: any) => InntektTransformed;
}

/**
 *  InntektFieldArray
 *
 * Presentasjonskomponent: Viser fordeling for andeler
 * Komponenten må rendres som komponenten til et FieldArray.
 */
export const InntektFieldArrayImpl: FunctionComponent<OwnProps & WrappedComponentProps> & StaticFunctions = ({
  fields,
  meta,
  intl, readOnly,
  isBeregningFormDirty,
  erKunYtelse,
  skalKunneLeggeTilAndel,
  aktivitetStatuser,
  skalHaBesteberegning,
  behandlingId,
  behandlingVersjon,
  beregningsgrunnlag,
  isAksjonspunktClosed,
  alleKodeverk,
}) => {
  const tablerows = createAndelerTableRows(
    fields,
    readOnly,
    beregningsgrunnlag,
    behandlingId,
    behandlingVersjon,
    isAksjonspunktClosed,
    alleKodeverk,
  );
  leggTilDagpengerOmBesteberegning(fields, skalHaBesteberegning, aktivitetStatuser);
  if (tablerows.length === 0) {
    return null;
  }
  tablerows.push(createBruttoBGSummaryRow(fields, readOnly, beregningsgrunnlag, behandlingId, behandlingVersjon));
  return (
    <NavFieldGroup errorMessage={getErrorMessage(meta, intl, isBeregningFormDirty)}>
      <Table headerTextCodes={getHeaderTextCodes(skalVisePeriode(fields), skalViseRefusjon(fields))} noHover classNameTable={styles.inntektTable}>
        {tablerows}
      </Table>
      {!readOnly && skalKunneLeggeTilAndel
      && (
        <AddAndelButton
          erKunYtelse={erKunYtelse}
          fields={fields}
          alleKodeverk={alleKodeverk}
        />
      )}
      <VerticalSpacer eightPx />
    </NavFieldGroup>
  );
};

InntektFieldArrayImpl.defaultProps = {
  skalKunneLeggeTilAndel: true,
};

InntektFieldArrayImpl.transformValues = (values): InntektTransformed => (values
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

const mapAndelToSortedObject = (value) => {
  const { andel, inntektskategori } = value;
  return { andelsinfo: andel, inntektskategori };
};

InntektFieldArrayImpl.validate = (values: AndelFieldValue[], erKunYtelse, skalFastsetteInntekt) => {
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

InntektFieldArrayImpl.buildInitialValues = (andeler) => {
  if (!andeler || andeler.length === 0) {
    return {};
  }
  return andeler.map((a) => mapAndelToField(a));
};

export const mapStateToProps = (state, ownProps) => {
  const isBeregningFormDirty = isFormDirty(state, ownProps);
  const aktivitetStatuser = ownProps.alleKodeverk[kodeverkTyper.AKTIVITET_STATUS];
  const skalHaBesteberegning = skalHaBesteberegningSelector(state, ownProps) === true;
  const tilfeller = ownProps.beregningsgrunnlag.faktaOmBeregning.faktaOmBeregningTilfeller
    ? ownProps.beregningsgrunnlag.faktaOmBeregning.faktaOmBeregningTilfeller.map(({ kode }) => kode) : [];
  return {
    isBeregningFormDirty,
    skalHaBesteberegning,
    aktivitetStatuser,
    erKunYtelse: tilfeller && tilfeller.includes(faktaOmBeregningTilfelle.FASTSETT_BG_KUN_YTELSE),
  };
};
const InntektFieldArray = injectIntl(InntektFieldArrayImpl);
export default connect(mapStateToProps)(InntektFieldArray);

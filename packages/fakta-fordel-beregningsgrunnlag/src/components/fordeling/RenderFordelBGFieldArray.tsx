import React, { FunctionComponent, ReactElement } from 'react';
import { connect } from 'react-redux';
import {
  FormattedMessage, injectIntl, IntlShape, WrappedComponentProps,
} from 'react-intl';
import { Element, Undertekst } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';

import aktivitetStatuser from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import {
  formatCurrencyNoKr, isArrayEmpty, parseCurrencyInput, removeSpacesFromNumber, getKodeverknavnFn,
} from '@fpsak-frontend/utils';
import {
  Image, Table, TableColumn, TableRow,
} from '@fpsak-frontend/shared-components';
import bt from '@fpsak-frontend/kodeverk/src/behandlingType';
import {
  DecimalField, InputField, NavFieldGroup, PeriodpickerField, SelectField,
} from '@fpsak-frontend/form';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import beregningsgrunnlagAndeltyper from '@fpsak-frontend/kodeverk/src/beregningsgrunnlagAndeltyper';
import inntektskategorier, { isSelvstendigNæringsdrivende } from '@fpsak-frontend/kodeverk/src/inntektskategorier';
import addCircleIcon from '@fpsak-frontend/assets/images/add-circle.svg';

import { FieldArrayFieldsProps, FieldArrayMetaProps } from 'redux-form';
import {
  ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag, Kodeverk, KodeverkMedNavn, AlleKodeverk,
} from '@fpsak-frontend/types';
import LabelType from '@fpsak-frontend/form/src/LabelType';
import finnUnikeArbeidsforhold from '../FinnUnikeArbeidsforhold';
import {
  validateAndeler, validateSumFastsattBelop, validateTotalRefusjonPrArbeidsforhold, validateUlikeAndeler,
  validateSumRefusjon, validateSumFastsattForUgraderteAktiviteter,
} from '../ValidateAndelerUtils';
import styles from './renderFordelBGFieldArray.less';
import { createVisningsnavnForAktivitetFordeling } from '../util/visningsnavnHelper';
import { BGFordelArbeidsforhold, FordelBeregningsgrunnlagAndelValues, PeriodeTsType } from '../../types/FordelingTsType';

const defaultBGFordeling = (periodeUtenAarsak: boolean): FordelBeregningsgrunnlagAndelValues => ({
  nyAndel: true,
  kilde: 'SAKSBEHANDLER_FORDELING',
  fordelingForrigeBehandling: '0',
  fastsattBelop: formatCurrencyNoKr(0),
  lagtTilAvSaksbehandler: true,
  refusjonskravFraInntektsmelding: 0,
  belopFraInntektsmelding: null,
  skalRedigereInntekt: !periodeUtenAarsak,
});

const fieldLabel = (index: number, labelId: string): LabelType => {
  if (index === 0) {
    return { id: labelId };
  }
  return '';
};

const lagVisningsnavn = (arbeidsforhold: BGFordelArbeidsforhold,
  getKodeverknavn: (kodeverk: Kodeverk) => string,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId): string => {
  const agOpplysninger = arbeidsgiverOpplysningerPerId[arbeidsforhold.arbeidsgiverId];
  if (!agOpplysninger) {
    return arbeidsforhold.arbeidsforholdType ? getKodeverknavn(arbeidsforhold.arbeidsforholdType) : '';
  }
  return createVisningsnavnForAktivitetFordeling(agOpplysninger, arbeidsforhold.eksternArbeidsforholdId);
};

const arbeidsgiverSelectValues = (arbeidsforholdList: BGFordelArbeidsforhold[],
  getKodeverknavn: (kodeverk: Kodeverk) => string,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId): ReactElement[] => (arbeidsforholdList
  .map((arbeidsforhold) => (
    <option value={arbeidsforhold.andelsnr.toString()} key={arbeidsforhold.andelsnr}>
      {lagVisningsnavn(arbeidsforhold, getKodeverknavn, arbeidsgiverOpplysningerPerId)}
    </option>
  )));

const arbeidsgiverSelectValuesForKunYtelse = (arbeidsforholdList: BGFordelArbeidsforhold[],
  intl: IntlShape,
  getKodeverknavn: (kodeverk: Kodeverk) => string,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId): ReactElement[] => {
  const nedtrekksvalgListe = arbeidsforholdList
    .map((arbeidsforhold) => (
      <option value={arbeidsforhold.andelsnr.toString()} key={arbeidsforhold.andelsnr}>
        {lagVisningsnavn(arbeidsforhold, getKodeverknavn, arbeidsgiverOpplysningerPerId)}
      </option>
    ));
  nedtrekksvalgListe.push(
    <option value={beregningsgrunnlagAndeltyper.BRUKERS_ANDEL} key={beregningsgrunnlagAndeltyper.BRUKERS_ANDEL}>
      {intl.formatMessage({ id: 'BeregningInfoPanel.FordelingBG.Ytelse' })}
    </option>,
  );
  return nedtrekksvalgListe;
};

const inntektskategoriSelectValues = (kategorier: KodeverkMedNavn[]): ReactElement[] => kategorier.map((ik) => (
  <option value={ik.kode} key={ik.kode}>
    {ik.navn}
  </option>
));

const summerFordelingForrigeBehandlingFraFields = (fields: FieldArrayFieldsProps<FordelBeregningsgrunnlagAndelValues>): string => {
  let sum = 0;
  let index = 0;
  for (index; index < fields.length; index += 1) {
    const { fordelingForrigeBehandling } = fields.get(index);
    if (fordelingForrigeBehandling !== undefined && fordelingForrigeBehandling !== null && fordelingForrigeBehandling !== '') {
      sum += Number(removeSpacesFromNumber(fordelingForrigeBehandling));
    }
  }
  return sum > 0 ? formatCurrencyNoKr(sum) : '';
};

const summerFordeling = (fields: FieldArrayFieldsProps<FordelBeregningsgrunnlagAndelValues>): string => {
  let sum = 0;
  let index = 0;
  for (index; index < fields.length; index += 1) {
    const field = fields.get(index);
    if (field.skalRedigereInntekt) {
      sum += field.fastsattBelop ? Number(removeSpacesFromNumber(field.fastsattBelop)) : 0;
    } else {
      sum += field.readOnlyBelop ? Number(removeSpacesFromNumber(field.readOnlyBelop)) : 0;
    }
  }
  return sum > 0 ? formatCurrencyNoKr(sum) : '';
};

const summerBeregningsgrunnlagPrAar = (fields: FieldArrayFieldsProps<FordelBeregningsgrunnlagAndelValues>): string => {
  let sum = 0;
  let index = 0;
  for (index; index < fields.length; index += 1) {
    const field = fields.get(index);
    if (field.beregningsgrunnlagPrAar) {
      sum += field.beregningsgrunnlagPrAar ? Number(removeSpacesFromNumber(field.beregningsgrunnlagPrAar)) : 0;
    }
  }
  return sum > 0 ? formatCurrencyNoKr(sum) : '';
};

const isSelvstendigOrFrilanser = (fieldVal: FordelBeregningsgrunnlagAndelValues): boolean => (isSelvstendigNæringsdrivende(fieldVal.inntektskategori)
  || inntektskategorier.FRILANSER === fieldVal.inntektskategori);

// @ts-ignore Sender inn FieldArrayMetaProps.error, som har en any shape, så slipper ikke unna any her
const renderMessage = (intl: IntlShape, error: any): string => (error[0] && error[0].id ? intl.formatMessage(...error) : error);

const getErrorMessage = (meta: FieldArrayMetaProps, intl: IntlShape): string => (meta.error
&& meta.submitFailed ? renderMessage(intl, meta.error) : null);

const onKeyDown = (fields: FieldArrayFieldsProps<FordelBeregningsgrunnlagAndelValues>,
  periodeUtenAarsak: boolean): (arg: React.KeyboardEvent) => void => ({ key }) => {
  if (key === 'Enter') {
    fields.push(defaultBGFordeling(periodeUtenAarsak));
  }
};

const finnArbeidsforholdForAndel = (arbeidsforholdListe: BGFordelArbeidsforhold[], val: string): BGFordelArbeidsforhold => {
  const andelsnr = Number(val);
  return arbeidsforholdListe.find((arbeidsforhold) => arbeidsforhold.andelsnr === andelsnr);
};

const finnAktivitetStatus = (fields: FieldArrayFieldsProps<FordelBeregningsgrunnlagAndelValues>, val: string): string => {
  const andelsnr = Number(val);
  for (let index = 0; index < fields.length; index += 1) {
    if (fields.get(index).andelsnr === andelsnr) {
      return fields.get(index).aktivitetStatus;
    }
  }
  return null;
};

const setArbeidsforholdInfo = (fields: FieldArrayFieldsProps<FordelBeregningsgrunnlagAndelValues>,
  index: number,
  arbeidsforholdList: BGFordelArbeidsforhold[],
  val: string): void => {
  const field = fields.get(index);
  const arbeidsforhold = finnArbeidsforholdForAndel(arbeidsforholdList, val);
  if (arbeidsforhold) {
    field.arbeidsforholdId = arbeidsforhold.arbeidsforholdId;
    field.arbeidsgiverNavn = arbeidsforhold.arbeidsgiverNavn;
    field.arbeidsgiverId = arbeidsforhold.arbeidsgiverId;
    field.arbeidsperiodeFom = arbeidsforhold.startdato;
    field.arbeidsperiodeTom = arbeidsforhold.opphoersdato;
    field.andelsnrRef = arbeidsforhold.andelsnr;
    field.aktivitetStatus = finnAktivitetStatus(fields, val);
    field.nyttArbeidsforhold = arbeidsforhold.nyttArbeidsforhold;
    field.arbeidsforholdType = arbeidsforhold.arbeidsforholdType;
    field.beregningsperiodeTom = arbeidsforhold.beregningsperiodeTom;
    field.beregningsperiodeFom = arbeidsforhold.beregningsperiodeFom;
  }
};

const arbeidsforholdReadOnlyOrSelect = (fields: FieldArrayFieldsProps<FordelBeregningsgrunnlagAndelValues>,
  index: number,
  elementFieldId: string,
  selectVals: ReactElement[],
  isReadOnly: boolean,
  arbeidsforholdList: BGFordelArbeidsforhold[]): ReactElement => (
    <>
      {(!fields.get(index).nyAndel)
      && (
      <InputField
        name={`${elementFieldId}.andel`}
        bredde="L"
        readOnly
      />
      )}
      {fields.get(index).nyAndel
      && (
      <SelectField
        name={`${elementFieldId}.andel`}
        bredde="l"
        label={fieldLabel(index, 'BeregningInfoPanel.FordelBG.Andel')}
        selectValues={selectVals}
        readOnly={isReadOnly}
        onChange={(event) => setArbeidsforholdInfo(fields, index, arbeidsforholdList, event.target.value)}
      />
      )}
    </>
);

export const lagBelopKolonne = (andelElementFieldId: string,
  readOnly: boolean,
  periodeUtenAarsak: boolean,
  isAksjonspunktClosed: boolean): ReactElement => {
  if (!readOnly && periodeUtenAarsak) {
    return (
      <TableColumn>
        <InputField
          name={`${andelElementFieldId}.readOnlyBelop`}
          bredde="S"
          parse={parseCurrencyInput}
          readOnly
          isEdited={false}
        />
      </TableColumn>
    );
  }
  return (
    <TableColumn className={styles.rightAlignInput}>
      <InputField
        name={`${andelElementFieldId}.fastsattBelop`}
        bredde="XS"
        parse={parseCurrencyInput}
        readOnly={readOnly}
        isEdited={isAksjonspunktClosed && !periodeUtenAarsak}
      />
    </TableColumn>
  );
};

const skalViseSletteknapp = (index: number,
  fields: FieldArrayFieldsProps<FordelBeregningsgrunnlagAndelValues>,
  readOnly: boolean): boolean => ((fields.get(index).nyAndel
|| fields.get(index).lagtTilAvSaksbehandler) && !readOnly);

const createAndelerTableRows = (fields: FieldArrayFieldsProps<FordelBeregningsgrunnlagAndelValues>,
  isAksjonspunktClosed: boolean,
  readOnly: boolean,
  inntektskategoriKoder: KodeverkMedNavn[],
  periodeUtenAarsak: boolean,
  arbeidsforholdList: BGFordelArbeidsforhold[],
  selectVals: ReactElement[],
  erRevurdering: boolean): ReactElement[] => (
  fields.map((andelElementFieldId, index) => (
    <TableRow key={andelElementFieldId}>
      <TableColumn>
        {arbeidsforholdReadOnlyOrSelect(fields, index, andelElementFieldId, selectVals, (readOnly || periodeUtenAarsak), arbeidsforholdList)}
        {!isSelvstendigOrFrilanser(fields.get(index))
        && (
          <div className={styles.wordwrap}>
            <PeriodpickerField
              names={[`${andelElementFieldId}.arbeidsperiodeFom`, `${andelElementFieldId}.arbeidsperiodeTom`]}
              readOnly
              renderIfMissingDateOnReadOnly
            />
          </div>
        )}
      </TableColumn>
      {erRevurdering
      && (
      <TableColumn>
        <InputField
          name={`${andelElementFieldId}.fordelingForrigeBehandling`}
          bredde="S"
          readOnly
          parse={parseCurrencyInput}
        />
      </TableColumn>
      )}
      <TableColumn>
        <DecimalField
          name={`${andelElementFieldId}.andelIArbeid`}
          readOnly
          bredde="S"
          format={(value) => {
            if (value || value === 0) {
              return `${value} %`;
            }
            return '';
          }}
          // @ts-ignore Fiks
          normalizeOnBlur={(value) => (Number.isNaN(value) ? value : parseFloat(value).toFixed(2))}
        />
      </TableColumn>
      <TableColumn className={(readOnly || periodeUtenAarsak) || !fields.get(index).skalKunneEndreRefusjon ? undefined : styles.rightAlignInput}>
        <InputField
          name={`${andelElementFieldId}.refusjonskrav`}
          bredde="XS"
          readOnly={(readOnly || periodeUtenAarsak) || !fields.get(index).skalKunneEndreRefusjon}
          parse={parseCurrencyInput}
        />
      </TableColumn>
      <TableColumn>
        <InputField
          name={`${andelElementFieldId}.beregningsgrunnlagPrAar`}
          bredde="S"
          readOnly
          parse={parseCurrencyInput}
        />
      </TableColumn>
      {lagBelopKolonne(andelElementFieldId, readOnly, periodeUtenAarsak, isAksjonspunktClosed)}
      <TableColumn className={(readOnly || periodeUtenAarsak) ? styles.shortLeftAligned : undefined}>
        <SelectField
          label=""
          name={`${andelElementFieldId}.inntektskategori`}
          bredde="s"
          selectValues={inntektskategoriSelectValues(inntektskategoriKoder)}
          value={fields.get(index).inntektskategori}
          readOnly={(readOnly || periodeUtenAarsak)}
        />
      </TableColumn>
      <TableColumn>
        {skalViseSletteknapp(index, fields, (readOnly || periodeUtenAarsak))
        && (
          <button
            className={styles.buttonRemove}
            type="button"
            onClick={() => {
              fields.remove(index);
            }}
          />
        )}
      </TableColumn>
    </TableRow>
  ))
);

const createBruttoBGSummaryRow = (sumFordelingForrigeBehandling: string,
  sumFordeling: string,
  sumBeregningsgrunnlagPrAar: string,
  erRevurdering: boolean): ReactElement => (
    <TableRow key="bruttoBGSummaryRow">
      <TableColumn>
        <FormattedMessage id="BeregningInfoPanel.FordelBG.Sum" />
      </TableColumn>
      {erRevurdering
    && (
    <TableColumn>
      <Element>
        {sumFordelingForrigeBehandling}
      </Element>
    </TableColumn>
    )}
      <TableColumn />
      <TableColumn />
      <TableColumn>
        <Element>
          {sumBeregningsgrunnlagPrAar}
        </Element>
      </TableColumn>
      <TableColumn>
        <Element>
          {sumFordeling}
        </Element>
      </TableColumn>
      <TableColumn />
      <TableColumn />
    </TableRow>
);

const getHeaderTextCodes = (erRevurdering: boolean): string[] => {
  const headerCodes = [];
  headerCodes.push('BeregningInfoPanel.FordelBG.Andel');
  if (erRevurdering) {
    headerCodes.push('BeregningInfoPanel.FordelBG.FordelingForrigeBehandling');
  }
  headerCodes.push('BeregningInfoPanel.FordelBG.AndelIArbeid');
  headerCodes.push('BeregningInfoPanel.FordelBG.Refusjonskrav');
  headerCodes.push('BeregningInfoPanel.FordelBG.Beregningsgrunnlag');
  headerCodes.push('BeregningInfoPanel.FordelBG.Fordeling');
  headerCodes.push('BeregningInfoPanel.FordelBG.Inntektskategori');
  return headerCodes;
};

type MappedOwnProps = {
  erRevurdering: boolean;
  inntektskategoriKoder: KodeverkMedNavn[];
  getKodeverknavn: (kodeverk: Kodeverk) => string;
  arbeidsforholdList: BGFordelArbeidsforhold[];
  harKunYtelse: boolean;
}

type OwnProps = {
    readOnly: boolean;
    fields: FieldArrayFieldsProps<FordelBeregningsgrunnlagAndelValues>;
    meta: FieldArrayMetaProps;
    isAksjonspunktClosed: boolean;
    periodeUtenAarsak: boolean;
    alleKodeverk: AlleKodeverk;
    behandlingType: Kodeverk;
    beregningsgrunnlag: Beregningsgrunnlag;
    arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
};

interface StaticFunctions {
  validate: (intl: IntlShape,
             values: FordelBeregningsgrunnlagAndelValues[],
             sumIPeriode: number,
             getKodeverknavn: (kodeverk: Kodeverk) => string,
             grunnbeløp: number,
             periode: PeriodeTsType,
             skalValidereRefusjon: boolean,
             arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId) => any;
}

/**
 *  RenderFordelBGFieldArray
 *
 * Presentasjonskomponent: Viser fordeling av brutto beregningsgrunnlag ved endret beregningsgrunnlag
 * Komponenten må rendres som komponenten til et FieldArray.
 */
export const RenderFordelBGFieldArrayImpl: FunctionComponent<OwnProps & MappedOwnProps & WrappedComponentProps> & StaticFunctions = ({
  fields,
  meta,
  intl,
  arbeidsforholdList,
  inntektskategoriKoder,
  readOnly,
  periodeUtenAarsak,
  isAksjonspunktClosed,
  harKunYtelse,
  erRevurdering,
  getKodeverknavn,
  arbeidsgiverOpplysningerPerId,
}) => {
  const sumFordelingForrigeBehandling = summerFordelingForrigeBehandlingFraFields(fields);
  const sumFordeling = summerFordeling(fields);
  const sumBeregningsgrunnlagPrAar = summerBeregningsgrunnlagPrAar(fields);
  const selectVals = harKunYtelse
    ? arbeidsgiverSelectValuesForKunYtelse(arbeidsforholdList, intl, getKodeverknavn, arbeidsgiverOpplysningerPerId)
    : arbeidsgiverSelectValues(arbeidsforholdList, getKodeverknavn, arbeidsgiverOpplysningerPerId);
  const tablerows = createAndelerTableRows(fields, isAksjonspunktClosed, readOnly, inntektskategoriKoder, periodeUtenAarsak,
    arbeidsforholdList, selectVals, erRevurdering);
  tablerows.push(createBruttoBGSummaryRow(sumFordelingForrigeBehandling, sumFordeling, sumBeregningsgrunnlagPrAar, erRevurdering));
  const error = getErrorMessage(meta, intl);
  return (
    <NavFieldGroup errorMessage={error} className={styles.dividerTop}>
      <Table headerTextCodes={getHeaderTextCodes(erRevurdering)} noHover classNameTable={styles.inntektTable}>
        {tablerows}
      </Table>
      {!readOnly && !periodeUtenAarsak
      && (
      <Row className={styles.buttonRow}>
        <Column xs="3">
          {// eslint-disable-next-line jsx-a11y/click-events-have-key-events
          }
          <div
            id="leggTilAndelDiv"
            onClick={() => {
              fields.push(defaultBGFordeling(periodeUtenAarsak));
            }}
            onKeyDown={onKeyDown(fields, periodeUtenAarsak)}
            className={styles.addPeriode}
            role="button"
            tabIndex={0}
          >
            <Image
              className={styles.addCircleIcon}
              src={addCircleIcon}
            />
            <Undertekst className={styles.imageText}>
              <FormattedMessage
                id="BeregningInfoPanel.FordelingBG.LeggTilAndel"
              />
            </Undertekst>
          </div>
        </Column>
      </Row>
      )}
    </NavFieldGroup>
  );
};

const RenderFordelBGFieldArray = injectIntl(RenderFordelBGFieldArrayImpl);

RenderFordelBGFieldArrayImpl.validate = (intl, values, sumIPeriode, getKodeverknavn,
  grunnbeløp, periodeDato, skalValidereRefusjon, arbeidsgiverOpplysningerPerId) => {
  const fieldErrors = validateAndeler(intl, values, periodeDato);
  if (fieldErrors != null) {
    return fieldErrors;
  }
  if (isArrayEmpty(values)) {
    return null;
  }
  const ulikeAndelerError = validateUlikeAndeler(values);
  if (ulikeAndelerError) {
    return { _error: <FormattedMessage id={ulikeAndelerError[0].id} /> };
  }
  const fastsattForUgraderteAktiviteterError = validateSumFastsattForUgraderteAktiviteter(values, grunnbeløp, getKodeverknavn);
  if (fastsattForUgraderteAktiviteterError) {
    return { _error: <FormattedMessage id={fastsattForUgraderteAktiviteterError[0].id} values={fastsattForUgraderteAktiviteterError[1]} /> };
  }
  if (skalValidereRefusjon) {
    const totalRefusjonError = validateSumRefusjon(values, grunnbeløp);
    if (totalRefusjonError) {
      return { _error: <FormattedMessage id={totalRefusjonError[0].id} values={totalRefusjonError[1]} /> };
    }
    const refusjonPrArbeidsforholdError = validateTotalRefusjonPrArbeidsforhold(values, getKodeverknavn, arbeidsgiverOpplysningerPerId);
    if (refusjonPrArbeidsforholdError) {
      return { _error: <FormattedMessage id={refusjonPrArbeidsforholdError[0].id} values={refusjonPrArbeidsforholdError[1]} /> };
    }
  }
  if (sumIPeriode !== undefined && sumIPeriode !== null && values.some((andel) => andel.skalRedigereInntekt === true)) {
    const fastsattBelopError = validateSumFastsattBelop(values, sumIPeriode);
    if (fastsattBelopError) {
      return { _error: <FormattedMessage id={fastsattBelopError[0].id} values={fastsattBelopError[1]} /> };
    }
  }
  return null;
};

const mapStateToPropsFactory = (initialState: any, initialOwnProps: OwnProps) => {
  const { behandlingType } = initialOwnProps;
  const erRevurdering = behandlingType ? behandlingType.kode === bt.REVURDERING : false;
  const inntektskategoriKoder = initialOwnProps.alleKodeverk[kodeverkTyper.INNTEKTSKATEGORI];
  const getKodeverknavn = getKodeverknavnFn(initialOwnProps.alleKodeverk, kodeverkTyper);
  return (state: any, ownProps: OwnProps): MappedOwnProps => ({
    erRevurdering,
    inntektskategoriKoder,
    getKodeverknavn,
    arbeidsforholdList: finnUnikeArbeidsforhold(ownProps),
    harKunYtelse: initialOwnProps.beregningsgrunnlag.aktivitetStatus
      .some((status) => status.kode === aktivitetStatuser.KUN_YTELSE),
  });
};

export default connect(mapStateToPropsFactory)(RenderFordelBGFieldArray);

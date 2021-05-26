import React, { FunctionComponent } from 'react';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import { InputField, PeriodpickerField, SelectField } from '@fpsak-frontend/form';
import { parseCurrencyInput } from '@fpsak-frontend/utils';
import { TableColumn, TableRow } from '@fpsak-frontend/shared-components';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { FieldArrayFieldsProps } from 'redux-form';
import Kodeverk from '@fpsak-frontend/types/src/kodeverkTsType';
import { AlleKodeverk } from '@fpsak-frontend/types';
import styles from './inntektFieldArray.less';
import { getKanRedigereInntekt, getSkalRedigereInntektskategori } from './BgFaktaUtils';

export const getHeaderTextCodes = (skalVisePeriode, skalViseRefusjon) => {
  const headerCodes = [];
  headerCodes.push('BeregningInfoPanel.FordelingBG.Andel');
  if (skalVisePeriode) {
    headerCodes.push('BeregningInfoPanel.FordelingBG.Arbeidsperiode');
  }
  headerCodes.push('BeregningInfoPanel.FordelingBG.Fordeling');
  if (skalViseRefusjon) {
    headerCodes.push('BeregningInfoPanel.FordelingBG.Refusjonskrav');
  }
  headerCodes.push('BeregningInfoPanel.FordelingBG.Inntektskategori');

  return headerCodes;
};

const inntektskategoriSelectValues = (kategorier) => kategorier.map((ik) => (
  <option value={ik.kode} key={ik.kode}>
    {ik.navn}
  </option>
));

type OwnProps = {
    readOnly: boolean;
    fields: FieldArrayFieldsProps<any>;
    inntektskategoriKoder: Kodeverk[];
    isAksjonspunktClosed: boolean;
    skalVisePeriode: boolean;
    skalViseRefusjon: boolean;
    skalViseSletteknapp: boolean;
    kanRedigereInntekt: boolean;
    skalRedigereInntektskategori: boolean;
    andelElementFieldId: string;
    removeAndel: (...args: any[]) => any;
    index: number;
    alleKodeverk: AlleKodeverk;
    skalHaMilitær?: boolean;
};

/**
 *  InntektFieldArrayAndelRow
 *
 * Presentasjonskomponent: Viser en rad korresponderende til ein andel i beregning.
 */
export const AndelRowImpl:FunctionComponent<OwnProps & WrappedComponentProps> = ({
  fields,
  index,
  intl, skalVisePeriode,
  skalViseRefusjon,
  skalViseSletteknapp,
  kanRedigereInntekt,
  skalRedigereInntektskategori,
  andelElementFieldId,
  inntektskategoriKoder,
  readOnly,
  isAksjonspunktClosed,
  removeAndel,
}) => {
  const field = fields.get(index);
  field.kanRedigereInntekt = kanRedigereInntekt;
  return (
    <TableRow>
      <TableColumn>
        <InputField
          name={`${andelElementFieldId}.andel`}
          bredde="L"
          readOnly
        />
      </TableColumn>
      {skalVisePeriode
      && (
      <TableColumn>
        <PeriodpickerField
          names={[`${andelElementFieldId}.arbeidsperiodeFom`, `${andelElementFieldId}.arbeidsperiodeTom`]}
          readOnly
          renderIfMissingDateOnReadOnly
        />
      </TableColumn>
      )}
      {kanRedigereInntekt
    && (
    <TableColumn className={styles.rightAlignInput}>
      <InputField
        name={`${andelElementFieldId}.fastsattBelop`}
        bredde="M"
        parse={parseCurrencyInput}
        readOnly={readOnly}
        isEdited={isAksjonspunktClosed}
      />
    </TableColumn>
    )}
      {!kanRedigereInntekt
    && (
    <TableColumn className={styles.rightAlign}>
      <InputField
        name={`${andelElementFieldId}.belopReadOnly`}
        bredde="M"
        parse={parseCurrencyInput}
        readOnly
      />
    </TableColumn>
    )}
      {skalViseRefusjon
          && (
          <TableColumn className={styles.rightAlign}>
            <InputField
              name={`${andelElementFieldId}.refusjonskrav`}
              bredde="XS"
              readOnly
              parse={parseCurrencyInput}
            />
          </TableColumn>
          )}
      <TableColumn className={styles.rightAlign}>
        <SelectField
          label=""
          name={`${andelElementFieldId}.inntektskategori`}
          bredde="l"
          selectValues={inntektskategoriSelectValues(inntektskategoriKoder)}
          value={fields.get(index).inntektskategori}
          readOnly={readOnly || !skalRedigereInntektskategori}
        />
      </TableColumn>
      <TableColumn>
        {skalViseSletteknapp
    && (
      <button
        className={styles.buttonRemove}
        type="button"
        onClick={() => removeAndel()}
        title={intl.formatMessage({ id: 'BeregningInfoPanel.FordelingBG.FjernDagpenger' })}
      />
    )}
      </TableColumn>
    </TableRow>
  );
};

export const getInntektskategorierAlfabetiskSortert = createSelector(
  [(ownProps: OwnProps) => ownProps.alleKodeverk[kodeverkTyper.INNTEKTSKATEGORI]],
  (kodeverkListe) => kodeverkListe.slice().sort((a, b) => a.navn.localeCompare(b.navn)),
);

export const mapStateToProps = (state, ownProps) => {
  const field = ownProps.fields.get(ownProps.index);
  const kanRedigereInntekt = getKanRedigereInntekt(state, ownProps)(field);
  const skalRedigereInntektskategori = getSkalRedigereInntektskategori(state, ownProps)(field);
  return {
    kanRedigereInntekt,
    skalRedigereInntektskategori,
    inntektskategoriKoder: getInntektskategorierAlfabetiskSortert(ownProps),
  };
};

export const AndelRow = connect(mapStateToProps)(injectIntl(AndelRowImpl));

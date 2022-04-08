import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Normaltekst } from 'nav-frontend-typografi';
import { TableColumn, TableRow } from '@navikt/ft-ui-komponenter';
import { formatCurrencyNoKr, removeSpacesFromNumber } from '@fpsak-frontend/utils';
import { getKanRedigereInntekt } from './BgFaktaUtils';

import styles from './inntektFieldArray.less';

const summerBeregnet = (fields, skalRedigereInntekt) => {
  let sum = 0;
  fields.forEach((andelElementFieldId, index) => {
    const field = fields.get(index);
    const belop = skalRedigereInntekt(field) ? field.fastsattBelop : field.belopReadOnly;
    sum += belop ? removeSpacesFromNumber(belop) : 0;
  });
  return sum > 0 ? sum : 0;
};

type OwnProps = {
    readOnly: boolean;
    skalVisePeriode: boolean;
    skalViseRefusjon: boolean;
    sumBeregnet: number;
};

const SummaryRow: FunctionComponent<OwnProps> = ({
  skalVisePeriode, skalViseRefusjon, readOnly, sumBeregnet,
}) => (
  <TableRow key="bruttoBGSummaryRow">
    <TableColumn>
      <FormattedMessage id="BeregningInfoPanel.FordelingBG.Sum" />
    </TableColumn>
    {skalVisePeriode
          && <TableColumn />}
    <TableColumn className={styles.rightAlign}>
      <div className={styles.readOnlyContainer}>
        <Normaltekst className={readOnly ? styles.readOnlyContent : ''}>
          {formatCurrencyNoKr(sumBeregnet)}
        </Normaltekst>
      </div>
    </TableColumn>
    {skalViseRefusjon
          && <TableColumn />}
    <TableColumn />
  </TableRow>
);

export const mapStateToProps = (state, ownProps) => {
  // @ts-ignore FIX reselect
  const sumBeregnet = summerBeregnet(ownProps.fields, getKanRedigereInntekt(state, ownProps)) || 0;
  return {
    sumBeregnet,
  };
};

export default connect(mapStateToProps)(SummaryRow);

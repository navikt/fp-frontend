import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Normaltekst } from 'nav-frontend-typografi';
import { TableColumn, TableRow } from '@fpsak-frontend/shared-components';
import { formatCurrencyNoKr, removeSpacesFromNumber } from '@fpsak-frontend/utils';
import { getKanRedigereInntekt } from './BgFordelingUtils';

import styles from './inntektFieldArray.less';

const summerBeregnet = (fields, skalRedigereInntekt) => {
  let sum = 0;
  fields.forEach((andelElementFieldId, index) => {
    const field = fields.get(index);
    const belop = skalRedigereInntekt(field) ? field.fastsattBelop : field.belopReadOnly;
    sum += belop ? parseInt(removeSpacesFromNumber(belop), 10) : 0;
  });
  return sum > 0 ? sum : 0;
};

const SummaryRow = ({
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

SummaryRow.propTypes = {
  readOnly: PropTypes.bool.isRequired,
  skalVisePeriode: PropTypes.bool.isRequired,
  skalViseRefusjon: PropTypes.bool.isRequired,
  sumBeregnet: PropTypes.number.isRequired,
};

export const mapStateToProps = (state, ownProps) => {
  const sumBeregnet = summerBeregnet(ownProps.fields, getKanRedigereInntekt(state, ownProps)) || 0;
  return {
    sumBeregnet,
  };
};

export default connect(mapStateToProps)(SummaryRow);

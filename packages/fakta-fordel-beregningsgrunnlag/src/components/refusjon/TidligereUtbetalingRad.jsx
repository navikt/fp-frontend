import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Normaltekst } from 'nav-frontend-typografi';
import { TableColumn, TableRow } from '@fpsak-frontend/shared-components';
import { dateFormat, TIDENES_ENDE } from '@fpsak-frontend/utils';
import { Column, Row } from 'nav-frontend-grid';

import { refusjonAndelTilVurderingPropType } from '../../propTypes/beregningsgrunnlagPropType';

const visningsnavn = (andel) => {
  if (andel.arbeidsgiverNavn) {
    return andel.arbeidsgiverNavn;
  } if (andel.arbeidsgiverId && andel.arbeidsgiverId.arbeidsgiverOrgnr) {
    return andel.arbeidsgiverId.arbeidsgiverOrgnr;
  } if (andel.arbeidsgiverId && andel.arbeidsgiverId.arbeidsgiverAktørId) {
    return andel.arbeidsgiverId.arbeidsgiverAktørId;
  }
  return undefined;
};

const utbetalingTil = (utbetalinger, andelsnavn) => utbetalinger.map((utbetaling) => (
  <Row>
    <Column>
      {utbetaling && utbetaling.erTildeltRefusjon
        ? <Normaltekst>{andelsnavn}</Normaltekst>
        : <FormattedMessage id="BeregningInfoPanel.RefusjonBG.Direkteutbetaling" />}
    </Column>
  </Row>
));

const lagPeriode = (utbetaling) => {
  if (!utbetaling) {
    return undefined;
  }
  const utbTom = utbetaling.tom === TIDENES_ENDE ? undefined : utbetaling.tom;
  return (
    <FormattedMessage
      id="BeregningInfoPanel.RefusjonBG.Periode"
      values={{ fom: dateFormat(utbetaling.fom), tom: utbTom ? dateFormat(utbTom) : '' }}
    />
  );
};

const perioder = (utbetalinger) => utbetalinger.map((utbetaling) => (
  <Row>
    <Column>
      {lagPeriode(utbetaling)}
    </Column>
  </Row>
));

export const TidligereUtbetalingRad = ({
  refusjonAndel,
}) => (
  <TableRow>
    <TableColumn>
      {visningsnavn(refusjonAndel)}
    </TableColumn>
    <TableColumn>
      {utbetalingTil(refusjonAndel.tidligereUtbetalinger, visningsnavn(refusjonAndel))}
    </TableColumn>
    <TableColumn>
      {perioder(refusjonAndel.tidligereUtbetalinger)}
    </TableColumn>
  </TableRow>
);
TidligereUtbetalingRad.propTypes = {
  refusjonAndel: refusjonAndelTilVurderingPropType,
};

export default TidligereUtbetalingRad;

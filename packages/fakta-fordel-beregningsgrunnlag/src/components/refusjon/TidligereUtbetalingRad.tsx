import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Normaltekst } from 'nav-frontend-typografi';
import { TableColumn, TableRow } from '@fpsak-frontend/shared-components';
import { dateFormat, TIDENES_ENDE } from '@fpsak-frontend/utils';
import { Column, Row } from 'nav-frontend-grid';

import { RefusjonTilVurderingAndel } from '@fpsak-frontend/types';
import styles from './tidligereUtbetalinger.less';

const getEndCharFromId = (id) => (id ? `...${id.substring(id.length - 4, id.length)}` : '');

const visningsnavn = (andel) => {
  const arbeidsgiverId = andel.arbeidsgiver.arbeidsgiverOrgnr || andel.arbeidsgiver.arbeidsgiverAktørId;
  return arbeidsgiverId
    ? `${andel.arbeidsgiverNavn} (${arbeidsgiverId})${getEndCharFromId(andel.eksternArbeidsforholdRef)}`
    : andel.arbeidsgiverNavn;
};

const utbetalingTil = (utbetalinger, andelsnavn) => utbetalinger.map((utbetaling) => (
  <Row className={styles.correctPadding} key={`${andelsnavn}_(${utbetaling.fom}_(${utbetaling.erTildeltRefusjon})`}>
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
  <Row className={styles.correctPadding} key={`${utbetaling.fom}_(${utbetaling.erTildeltRefusjon})`}>
    <Column>
      {lagPeriode(utbetaling)}
    </Column>
  </Row>
));

type OwnProps = {
    refusjonAndel?: RefusjonTilVurderingAndel;
};

export const TidligereUtbetalingRad: FunctionComponent<OwnProps> = ({ refusjonAndel }) => (
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

export default TidligereUtbetalingRad;

import React, {FunctionComponent, ReactElement} from 'react';
import { FormattedMessage } from 'react-intl';
import { Normaltekst } from 'nav-frontend-typografi';
import { TableColumn, TableRow } from '@fpsak-frontend/shared-components';
import { dateFormat, TIDENES_ENDE } from '@fpsak-frontend/utils';
import { Column, Row } from 'nav-frontend-grid';

import { ArbeidsgiverOpplysningerPerId, RefusjonTilVurderingAndel, TidligereUtbetalinger } from '@fpsak-frontend/types';
import styles from './tidligereUtbetalinger.less';
import { createVisningsnavnForAktivitetRefusjon } from '../util/visningsnavnHelper';

const utbetalingTil = (utbetalinger: TidligereUtbetalinger[], andelsnavn: string): ReactElement[] => utbetalinger.map((utbetaling) => (
  <Row className={styles.correctPadding} key={`${andelsnavn}_(${utbetaling.fom}_(${utbetaling.erTildeltRefusjon})`}>
    <Column>
      {utbetaling && utbetaling.erTildeltRefusjon
        ? <Normaltekst>{andelsnavn}</Normaltekst>
        : <FormattedMessage id="BeregningInfoPanel.RefusjonBG.Direkteutbetaling" />}
    </Column>
  </Row>
));

const lagPeriode = (utbetaling: TidligereUtbetalinger): ReactElement | undefined => {
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

const perioder = (utbetalinger: TidligereUtbetalinger[]): ReactElement[] => utbetalinger.map((utbetaling) => (
  <Row className={styles.correctPadding} key={`${utbetaling.fom}_(${utbetaling.erTildeltRefusjon})`}>
    <Column>
      {lagPeriode(utbetaling)}
    </Column>
  </Row>
));

type OwnProps = {
    refusjonAndel?: RefusjonTilVurderingAndel;
    arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
};

export const TidligereUtbetalingRad: FunctionComponent<OwnProps> = ({
  refusjonAndel,
  arbeidsgiverOpplysningerPerId,
}) => (
  <TableRow>
    <TableColumn>
      {createVisningsnavnForAktivitetRefusjon(refusjonAndel, arbeidsgiverOpplysningerPerId)}
    </TableColumn>
    <TableColumn>
      {utbetalingTil(refusjonAndel.tidligereUtbetalinger, createVisningsnavnForAktivitetRefusjon(refusjonAndel, arbeidsgiverOpplysningerPerId))}
    </TableColumn>
    <TableColumn>
      {perioder(refusjonAndel.tidligereUtbetalinger)}
    </TableColumn>
  </TableRow>
);

export default TidligereUtbetalingRad;

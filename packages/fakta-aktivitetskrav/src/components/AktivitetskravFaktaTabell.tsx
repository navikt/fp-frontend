import React, { FunctionComponent } from 'react';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import { Image } from '@navikt/fp-react-components';

import endretFelt from '@fpsak-frontend/assets/images/endret_felt.svg';
import {
  Table, TableColumn, TableRow,
} from '@fpsak-frontend/shared-components';
import { KodeverkMedNavn, UttakKontrollerAktivitetskrav } from '@fpsak-frontend/types';
import { dateFormat } from '@fpsak-frontend/utils';

import styles from './aktivitetskravFaktaTabell.less';

const HEADER_TEXT_CODES = [
  'AktivitetskravFaktaTabell.Periode',
  'AktivitetskravFaktaTabell.MorsAktivitet',
  'AktivitetskravFaktaTabell.Avklaring',
  'EMPTY',
];

interface PureOwnProps {
  aktivitetskrav: UttakKontrollerAktivitetskrav[];
  valgtAktivitetskravFom?: string;
  velgAktivitetskrav: (event: React.MouseEvent | React.KeyboardEvent, id?: void, model?: UttakKontrollerAktivitetskrav) => void;
  aktivitetskravAvklaringer: KodeverkMedNavn[];
  morsAktiviteter: KodeverkMedNavn[];
}

const AktivitetskravFaktaTabell: FunctionComponent<PureOwnProps & WrappedComponentProps> = ({
  intl,
  aktivitetskrav,
  valgtAktivitetskravFom,
  velgAktivitetskrav,
  aktivitetskravAvklaringer,
  morsAktiviteter,
}) => (
  <Table headerTextCodes={HEADER_TEXT_CODES}>
    {aktivitetskrav.map((krav) => (
      <TableRow<void, UttakKontrollerAktivitetskrav>
        key={krav.fom + krav.tom}
        model={krav}
        isSelected={valgtAktivitetskravFom === krav.fom}
        isApLeftBorder={!krav.avklaring}
        onMouseDown={velgAktivitetskrav}
        onKeyDown={velgAktivitetskrav}
      >
        <TableColumn>{`${dateFormat(krav.fom)} - ${dateFormat(krav.tom)}`}</TableColumn>
        <TableColumn>{krav.morsAktivitet ? morsAktiviteter.find((aktivtet) => aktivtet.kode === krav.morsAktivitet)?.navn : ''}</TableColumn>
        <TableColumn>{krav.avklaring ? aktivitetskravAvklaringer.find((avklaring) => avklaring.kode === krav.avklaring)?.navn : ''}</TableColumn>
        <TableColumn>
          {krav.endret && (
            <Image
              src={endretFelt}
              className={styles.image}
              alt={intl.formatMessage({ id: 'AktivitetskravFaktaTabell.ErEndret' })}
              tooltip={intl.formatMessage({ id: 'AktivitetskravFaktaTabell.ErEndret' })}
              tabIndex={0}
              alignTooltipLeft
            />
          )}
        </TableColumn>
      </TableRow>
    ))}
  </Table>
);

export default injectIntl(AktivitetskravFaktaTabell);

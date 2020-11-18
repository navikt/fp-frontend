import React, { FunctionComponent, ReactNode } from 'react';
import moment from 'moment';

import { Table } from '@fpsak-frontend/shared-components';

import FeilutbetalingPerioderForm from './FeilutbetalingPerioderForm';

import styles from './feilutbetalingPerioderTable.less';
import FeilutbetalingAarsak from '../types/feilutbetalingAarsakTsType';

const headerTextCodes = [
  'FeilutbetalingInfoPanel.Period',
  'FeilutbetalingInfoPanel.Hendelse',
  'FeilutbetalingInfoPanel.Beløp',
];

type OwnProps = {
  perioder: {
    fom: string;
    tom: string;
    belop: number;
  }[];
  formName: string;
  årsaker: FeilutbetalingAarsak['hendelseTyper'];
  readOnly: boolean;
  onChangeÅrsak: (event: ReactNode, elementId: number, årsak: string) => void;
  onChangeUnderÅrsak: (event: ReactNode, elementId: number, årsak: string) => void;
  behandlingId: number;
  behandlingVersjon: number;
};

const FeilutbetalingPerioderTable: FunctionComponent<OwnProps> = ({
  perioder,
  formName,
  årsaker,
  readOnly,
  onChangeÅrsak,
  onChangeUnderÅrsak,
  behandlingId,
  behandlingVersjon,
}) => (
  <div className={styles.feilutbetalingTable}>
    <Table
      headerTextCodes={headerTextCodes}
      noHover
    >
      { perioder.sort((a, b) => moment(a.fom).diff(moment(b.fom))).map((periode, index) => (
        <FeilutbetalingPerioderForm
          behandlingId={behandlingId}
          behandlingVersjon={behandlingVersjon}
          periode={periode}
          elementId={index}
          formName={formName}
          årsaker={årsaker}
          readOnly={readOnly}
          onChangeÅrsak={onChangeÅrsak}
          onChangeUnderÅrsak={onChangeUnderÅrsak}
          key={`formIndex${index + 1}`}
        />
      ))}
    </Table>
  </div>
);

export default FeilutbetalingPerioderTable;

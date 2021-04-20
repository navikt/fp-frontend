import React, { FunctionComponent, ReactNode } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { TableColumn, TableRow } from '@fpsak-frontend/shared-components';
import { DDMMYYYY_DATE_FORMAT, required } from '@fpsak-frontend/utils';
import { SelectField } from '@fpsak-frontend/form';
import { FeilutbetalingAarsak } from '@fpsak-frontend/types';

import { formValueSelector } from 'redux-form';
import styles from './feilutbetalingPerioderTable.less';

const getHendelseUndertyper = (årsakNavn: string, årsaker: FeilutbetalingAarsak['hendelseTyper']): { kode: string; navn: string}[] | null => {
  const årsak = årsaker.find((a) => a.hendelseType.kode === årsakNavn);
  return årsak && årsak.hendelseUndertyper.length > 0 ? årsak.hendelseUndertyper : null;
};

interface PureOwnProps {
  formName: string;
  periode: {
    fom: string;
    tom: string;
    belop: number;
  };
  elementId: number;
  årsaker: FeilutbetalingAarsak['hendelseTyper'];
  readOnly: boolean;
  onChangeÅrsak: (event: ReactNode, elementId: number, årsak: string) => void;
  onChangeUnderÅrsak: (event: ReactNode, elementId: number, årsak: string) => void;
}

interface MappedOwnProps {
  årsak?: string;
}

export const FeilutbetalingPerioderFormImpl: FunctionComponent<PureOwnProps & MappedOwnProps> = ({
  periode,
  årsak,
  elementId,
  årsaker,
  readOnly,
  onChangeÅrsak,
  onChangeUnderÅrsak,
}) => {
  const hendelseUndertyper = getHendelseUndertyper(årsak, årsaker);
  return (
    <TableRow>
      <TableColumn>
        {`${moment(periode.fom).format(DDMMYYYY_DATE_FORMAT)} - ${moment(periode.tom).format(DDMMYYYY_DATE_FORMAT)}`}
      </TableColumn>
      <TableColumn>
        <SelectField
          name={`perioder.${elementId}.årsak`}
          selectValues={årsaker.map((a) => <option key={a.hendelseType.kode} value={a.hendelseType.kode}>{a.hendelseType.navn}</option>)}
          validate={[required]}
          disabled={readOnly}
          onChange={(event) => onChangeÅrsak(event, elementId, årsak)}
          bredde="m"
          label=""
        />
        {hendelseUndertyper && (
          <SelectField
            name={`perioder.${elementId}.${årsak}.underÅrsak`}
            selectValues={hendelseUndertyper.map((a) => <option key={a.kode} value={a.kode}>{a.navn}</option>)}
            validate={[required]}
            disabled={readOnly}
            onChange={(event) => onChangeUnderÅrsak(event, elementId, årsak)}
            bredde="m"
            label=""
          />
        )}
      </TableColumn>
      <TableColumn className={styles.redText}>
        {periode.belop}
      </TableColumn>
    </TableRow>
  );
};

const mapStateToProps = (state: any, ownProps: PureOwnProps): MappedOwnProps => ({
  årsak: formValueSelector(ownProps.formName)(state, `perioder.${ownProps.elementId}.årsak`),
});

const FeilutbetalingPerioderForm = connect(mapStateToProps)(FeilutbetalingPerioderFormImpl);
export default FeilutbetalingPerioderForm;

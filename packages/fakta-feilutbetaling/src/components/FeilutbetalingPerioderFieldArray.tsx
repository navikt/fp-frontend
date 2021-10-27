import React, { FunctionComponent } from 'react';
import { useFormContext, useFieldArray } from 'react-hook-form';
import moment from 'moment';

import { Table, TableRow, TableColumn } from '@fpsak-frontend/shared-components';
import { FeilutbetalingAarsak, FeilutbetalingFakta } from '@fpsak-frontend/types';
import { DDMMYYYY_DATE_FORMAT, required } from '@fpsak-frontend/utils';
import { SelectField } from '@fpsak-frontend/form-hooks';

import styles from './feilutbetalingPerioderTable.less';

const FIELD_ARRAY_NAME = 'perioder';

const headerTextCodes = [
  'FeilutbetalingInfoPanel.Period',
  'FeilutbetalingInfoPanel.Hendelse',
  'FeilutbetalingInfoPanel.Beløp',
];

const getHendelseUndertyper = (årsakNavn: string, årsaker: FeilutbetalingAarsak['hendelseTyper']): { kode: string; navn: string}[] | null => {
  const årsak = årsaker.find((a) => a.hendelseType.kode === årsakNavn);
  return årsak && årsak.hendelseUndertyper.length > 0 ? årsak.hendelseUndertyper : null;
};

export type FormValues = {
  perioder?: {
    fom: string;
    tom: string;
    årsak?: string;
  }[];
}

type OwnProps = {
  perioder: FeilutbetalingFakta['behandlingFakta']['perioder'];
  årsaker: FeilutbetalingAarsak['hendelseTyper'];
  readOnly: boolean;
  behandlePerioderSamlet: boolean;
};

const FeilutbetalingPerioderFieldArray: FunctionComponent<OwnProps> = ({
  perioder,
  årsaker,
  readOnly,
  behandlePerioderSamlet,
}) => {
  const { control, watch, setValue } = useFormContext<FormValues>();
  const { fields, update } = useFieldArray({
    control,
    name: FIELD_ARRAY_NAME,
  });

  const settAndreFelter = (navn: string, verdi: string, index: number) => {
    if (behandlePerioderSamlet) {
      fields.forEach((f, fieldIndex) => {
        if (index !== fieldIndex) {
          update(fieldIndex, {
            ...f,
            [navn]: verdi,
          });
          setValue(`${FIELD_ARRAY_NAME}.${fieldIndex}.${navn}`, verdi);
        }
      });
    }
  };

  return (
    <div className={styles.feilutbetalingTable}>
      <Table
        headerTextCodes={headerTextCodes}
        noHover
      >
        {fields.map((periode, index) => {
          const årsak = watch(`${FIELD_ARRAY_NAME}.${index}.årsak`);
          const hendelseUndertyper = getHendelseUndertyper(årsak, årsaker);
          return (
            <TableRow key={periode.id}>
              <TableColumn>
                {`${moment(periode.fom).format(DDMMYYYY_DATE_FORMAT)} - ${moment(periode.tom).format(DDMMYYYY_DATE_FORMAT)}`}
              </TableColumn>
              <TableColumn>
                <SelectField
                  name={`${FIELD_ARRAY_NAME}.${index}.årsak`}
                  selectValues={årsaker.map((a) => <option key={a.hendelseType.kode} value={a.hendelseType.kode}>{a.hendelseType.navn}</option>)}
                  validate={[required]}
                  disabled={readOnly}
                  onClick={(event) => settAndreFelter('årsak', event.target.value, index)}
                  bredde="m"
                  label=""
                />
                {hendelseUndertyper && (
                  <SelectField
                    name={`${FIELD_ARRAY_NAME}.${index}.${årsak}.underÅrsak`}
                    selectValues={hendelseUndertyper.map((a) => <option key={a.kode} value={a.kode}>{a.navn}</option>)}
                    validate={[required]}
                    disabled={readOnly}
                    onClick={(event) => settAndreFelter(`${årsak}.underÅrsak`, event.target.value, index)}
                    bredde="m"
                    label=""
                  />
                )}
              </TableColumn>
              <TableColumn className={styles.redText}>
                {perioder[index].belop}
              </TableColumn>
            </TableRow>
          );
        })}
      </Table>
    </div>
  );
};

export default FeilutbetalingPerioderFieldArray;

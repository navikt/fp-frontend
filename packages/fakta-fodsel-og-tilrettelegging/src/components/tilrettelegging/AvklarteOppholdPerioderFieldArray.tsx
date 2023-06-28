import React, { FunctionComponent, useCallback, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { Button, Table } from '@navikt/ds-react';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { ArbeidsforholdTilretteleggingDato, SvpAvklartOppholdPeriode } from '@navikt/fp-types';

import OppholdPeriodePanel from './OppholdPeriodePanel';

export const defaultFormValues = {
  type: undefined,
  stillingsprosent: undefined,
  fom: undefined,
};

interface OwnProps {
  readOnly: boolean;
  formSectionName: string;
  tilrettelegginger: ArbeidsforholdTilretteleggingDato[];
}

const AvklarteOppholdPerioderFieldArray: FunctionComponent<OwnProps> = ({
  readOnly,
  formSectionName,
  tilrettelegginger,
}) => {
  const fieldPrefix = `${formSectionName}.avklarteOppholdPerioder`;

  const { control, watch } = useFormContext<Record<string, SvpAvklartOppholdPeriode[]>>();
  const { fields, remove, append } = useFieldArray({
    control,
    name: fieldPrefix,
  });

  const perioder = watch(fieldPrefix);

  const [erNyPeriode, setNyPeriode] = useState(false);

  const leggTilNyPeriode = useCallback(() => {
    append({
      fom: null,
      tom: null,
      oppholdÅrsak: undefined,
    });
    setNyPeriode(true);
  }, []);

  return (
    <>
      <Table style={{ minWidth: '600px' }}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope="col">
              <FormattedMessage id="AvklarteOppholdPerioderFieldArray.Fom" />
            </Table.HeaderCell>
            <Table.HeaderCell scope="col">
              <FormattedMessage id="AvklarteOppholdPerioderFieldArray.Tom" />
            </Table.HeaderCell>
            <Table.HeaderCell scope="col">
              <FormattedMessage id="AvklarteOppholdPerioderFieldArray.OppholdArsak" />
            </Table.HeaderCell>
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {fields.map((field, index) => {
            const data = perioder[index];
            return (
              <OppholdPeriodePanel
                fieldId={field.id}
                index={index}
                readOnly={readOnly}
                periode={data}
                fieldPrefix={fieldPrefix}
                remove={remove}
                erNyPeriode={erNyPeriode && perioder.length - 1 === index}
                tilrettelegginger={tilrettelegginger}
              />
            );
          })}
        </Table.Body>
      </Table>
      <VerticalSpacer twentyPx />
      {!readOnly && (
        <Button size="small" type="button" variant="secondary" onClick={leggTilNyPeriode}>
          <FormattedMessage id="AvklarteOppholdPerioderFieldArray.LeggTil" />
        </Button>
      )}
    </>
  );
};

export default AvklarteOppholdPerioderFieldArray;

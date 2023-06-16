import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { ArbeidsforholdFodselOgTilrettelegging, ArbeidsgiverOpplysningerPerId } from '@navikt/fp-types';

import { Table } from '@navikt/ds-react';
import styles from './tilretteleggingFieldArray.module.css';
import TilretteleggingsbehovPanel from './TilretteleggingsbehovPanel';

interface OwnProps {
  readOnly: boolean;
  sorterteArbeidsforhold: ArbeidsforholdFodselOgTilrettelegging[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  stateIndex: number;
}

const TilretteleggingFieldArray: FunctionComponent<OwnProps> = ({
  sorterteArbeidsforhold,
  arbeidsgiverOpplysningerPerId,
  stateIndex,
}) => {
  const intl = useIntl();

  const arrayName = `arbeidsforhold.${stateIndex}.tilretteleggingDatoer`;

  const { control } = useFormContext();
  const { fields } = useFieldArray({
    control,
    name: arrayName,
  });

  const { tilretteleggingDatoer } = sorterteArbeidsforhold[stateIndex];

  return (
    <>
      {fields.map((field, index: number) => {
        const stateName = `${arrayName}.${index}`;
        const t = tilretteleggingDatoer[index];
        return (
          <Table size="small">
            <Table.Body>
              <Table.ExpandableRow
                key={t.fom}
                content={<TilretteleggingsbehovPanel tilrettelegging={t} stateName={stateName} />}
                togglePlacement="right"
                className={styles.row}
              >
                <Table.DataCell>{t.fom}</Table.DataCell>
                <Table.DataCell>{t.type}</Table.DataCell>
              </Table.ExpandableRow>
            </Table.Body>
          </Table>
        );
      })}
    </>
  );
};

export default TilretteleggingFieldArray;

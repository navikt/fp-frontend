import React, { FunctionComponent, useState } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import {
  ArbeidsforholdFodselOgTilrettelegging,
  ArbeidsforholdTilretteleggingDato,
  ArbeidsgiverOpplysningerPerId,
} from '@navikt/fp-types';

import { Table } from '@navikt/ds-react';
import styles from './tilretteleggingFieldArray.module.css';
import TilretteleggingsbehovPanel from './TilretteleggingsbehovPanel';

interface WrapperProps {
  readOnly: boolean;
  sorterteArbeidsforhold: ArbeidsforholdFodselOgTilrettelegging[];
  tilrettelegingInfo: ArbeidsforholdTilretteleggingDato;
  stateName: string;
}

const ExpandableRowWrapper: FunctionComponent<WrapperProps> = ({ tilrettelegingInfo, stateName }) => {
  const [open, setOpen] = useState(false);

  return (
    <Table.ExpandableRow
      open={open}
      onClick={() => setOpen(!open)}
      key={tilrettelegingInfo.fom}
      content={<TilretteleggingsbehovPanel tilrettelegging={tilrettelegingInfo} stateName={stateName} />}
      togglePlacement="right"
      className={styles.row}
    >
      <Table.DataCell>{tilrettelegingInfo.fom}</Table.DataCell>
      <Table.DataCell>{tilrettelegingInfo.type}</Table.DataCell>
    </Table.ExpandableRow>
  );
};

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
  const arrayName = `arbeidsforhold.${stateIndex}.tilretteleggingDatoer`;

  const { control } = useFormContext();
  const { fields } = useFieldArray({
    control,
    name: arrayName,
  });

  const { tilretteleggingDatoer } = sorterteArbeidsforhold[stateIndex];

  return (
    <Table size="small" className={styles.table}>
      <Table.Body>
        {fields.map((field, index: number) => {
          const stateName = `${arrayName}.${index}`;
          const t = tilretteleggingDatoer[index];
          return <ExpandableRowWrapper stateName={stateName} tilrettelegingInfo={t} />;
        })}
      </Table.Body>
    </Table>
  );
};

export default TilretteleggingFieldArray;

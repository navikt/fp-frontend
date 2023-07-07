import React, { FunctionComponent, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Table } from '@navikt/ds-react';
import {
  ArbeidsforholdFodselOgTilrettelegging,
  ArbeidsforholdTilretteleggingDato,
  SvpAvklartOppholdPeriode,
} from '@navikt/fp-types';

import TilretteleggingsbehovForm from './TilretteleggingsbehovForm';

import styles from './expandableRowWrapper.module.css';

export type TilretteleggingEllerOpphold = {
  radType: 'tilrettelegging' | 'opphold';
} & (ArbeidsforholdTilretteleggingDato | SvpAvklartOppholdPeriode);

interface WrapperProps {
  sorterteArbeidsforhold: ArbeidsforholdFodselOgTilrettelegging[];
  radInfo: TilretteleggingEllerOpphold;
  arrayName: string;
  readOnly: boolean;
  index: number;
  openRad: boolean;
}

const ExpandableRowWrapper: FunctionComponent<WrapperProps> = ({ radInfo, arrayName, index, readOnly, openRad }) => {
  const [open, setOpen] = useState(openRad);

  const { setValue } = useFormContext();

  const oppdaterTilrettelegging = (values: ArbeidsforholdTilretteleggingDato) => {
    setOpen(false);
    // TODO Om ein endrar tom så lukkar rada seg for fort
    setValue(arrayName, values);
  };
  const avbrytEditering = () => {
    setOpen(false);
  };

  return (
    <Table.ExpandableRow
      open={open}
      onClick={() => setOpen(!open)}
      key={radInfo.fom}
      content={
        <>
          {radInfo.radType === 'tilrettelegging' && (
            <TilretteleggingsbehovForm
              tilrettelegging={radInfo as ArbeidsforholdTilretteleggingDato}
              index={index}
              oppdaterTilrettelegging={oppdaterTilrettelegging}
              avbrytEditering={avbrytEditering}
              readOnly={readOnly}
            />
          )}
          {radInfo.radType === 'opphold' && <div>test</div>}
        </>
      }
      togglePlacement="right"
      className={open ? styles.openRow : styles.row}
    >
      <Table.DataCell>{radInfo.fom}</Table.DataCell>
      <Table.DataCell>{radInfo.radType === 'tilrettelegging' ? 'Tilrettelegging' : 'Opphold'}</Table.DataCell>
    </Table.ExpandableRow>
  );
};

export default ExpandableRowWrapper;

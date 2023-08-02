import React, { FunctionComponent, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Table } from '@navikt/ds-react';
import { ArbeidsforholdTilretteleggingDato, SvpAvklartOppholdPeriode } from '@navikt/fp-types';

import { PeriodLabel } from '@navikt/ft-ui-komponenter';
import TilretteleggingForm from './TilretteleggingForm';

import styles from './tilretteleggingPerioderTabellRad.module.css';
import OppholdForm from './OppholdForm';

export type TilretteleggingEllerOpphold = {
  radType: 'tilrettelegging' | 'opphold';
} & (ArbeidsforholdTilretteleggingDato | SvpAvklartOppholdPeriode);

interface WrapperProps {
  radInfo: TilretteleggingEllerOpphold;
  tilretteleggingNavn: string;
  oppholdNavn: string;
  readOnly: boolean;
  index: number;
  openRad: boolean;
  fjernTilretteleggingEllerOpphold: (erTilrettelegging: boolean) => void;
}

const TilretteleggingPerioderTabellRad: FunctionComponent<WrapperProps> = ({
  radInfo,
  tilretteleggingNavn,
  oppholdNavn,
  index,
  readOnly,
  openRad,
  fjernTilretteleggingEllerOpphold,
}) => {
  const [open, setOpen] = useState(openRad);

  const { setValue } = useFormContext();

  const oppdaterTilrettelegging = (values: ArbeidsforholdTilretteleggingDato) => {
    setOpen(false);
    // TODO Om ein endrar tom så lukkar rada seg for fort
    setValue(tilretteleggingNavn, values);
  };
  const oppdaterOpphold = (values: SvpAvklartOppholdPeriode) => {
    setOpen(false);
    // TODO Om ein endrar tom så lukkar rada seg for fort
    setValue(oppholdNavn, values);
  };
  const avbrytEditering = () => {
    if (!radInfo.fom) {
      fjernTilretteleggingEllerOpphold(radInfo.radType === 'tilrettelegging');
    }
    setOpen(false);
  };

  return (
    <Table.ExpandableRow
      open={open}
      onClick={() => setOpen(!open)}
      key={radInfo.fom}
      content={
        <>
          {open && radInfo.radType === 'tilrettelegging' && (
            <TilretteleggingForm
              tilrettelegging={radInfo as ArbeidsforholdTilretteleggingDato}
              index={index}
              oppdaterTilrettelegging={oppdaterTilrettelegging}
              avbrytEditering={avbrytEditering}
              readOnly={readOnly}
            />
          )}
          {open && radInfo.radType === 'opphold' && (
            <OppholdForm
              opphold={radInfo as SvpAvklartOppholdPeriode}
              index={index}
              oppdaterOpphold={oppdaterOpphold}
              avbrytEditering={avbrytEditering}
              readOnly={readOnly}
            />
          )}
        </>
      }
      togglePlacement="right"
      className={open ? styles.openRow : styles.row}
    >
      <Table.DataCell>
        {radInfo.fom ? <PeriodLabel dateStringFom={radInfo.fom} dateStringTom={radInfo.tom} /> : 'Periode'}
      </Table.DataCell>
      <Table.DataCell>{radInfo.radType === 'tilrettelegging' ? 'Tilrettelegging' : 'Opphold'}</Table.DataCell>
      <Table.DataCell>{radInfo.fom ? 'Test' : 'Saksbehandler'}</Table.DataCell>
    </Table.ExpandableRow>
  );
};

export default TilretteleggingPerioderTabellRad;

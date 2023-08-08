import React, { FunctionComponent, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Table, Tag } from '@navikt/ds-react';
import { ArbeidsforholdTilretteleggingDato, SvpAvklartOppholdPeriode } from '@navikt/fp-types';

import { PeriodLabel } from '@navikt/ft-ui-komponenter';
import TilretteleggingForm from './TilretteleggingForm';
import OppholdForm from './OppholdForm';

import styles from './tilretteleggingPerioderTabellRad.module.css';

interface WrapperProps {
  navn: string;
  tilrettelegging?: ArbeidsforholdTilretteleggingDato;
  opphold?: SvpAvklartOppholdPeriode;
  readOnly: boolean;
  index: number;
  openRad: boolean;
  fjernTilretteleggingEllerOpphold: (erTilrettelegging: boolean) => void;
}

const TilretteleggingPerioderTabellRad: FunctionComponent<WrapperProps> = ({
  navn,
  tilrettelegging,
  opphold,
  index,
  readOnly,
  openRad,
  fjernTilretteleggingEllerOpphold,
}) => {
  const [open, setOpen] = useState(openRad);

  const { setValue, watch } = useFormContext();

  const fom = tilrettelegging ? tilrettelegging.fom : opphold?.fom;
  const tom = tilrettelegging ? tilrettelegging.tom : opphold?.tom;

  const oppdaterTilrettelegging = (values: ArbeidsforholdTilretteleggingDato) => {
    setOpen(false);
    // TODO Om ein endrar tom så lukkar rada seg for fort
    setValue(navn, values);
  };
  const oppdaterOpphold = (values: SvpAvklartOppholdPeriode) => {
    setOpen(false);
    // TODO Om ein endrar tom så lukkar rada seg for fort
    setValue(navn, values);
  };
  const avbrytEditering = () => {
    if (!fom) {
      fjernTilretteleggingEllerOpphold(!!tilrettelegging);
    }
    setOpen(false);
  };

  const termindato = watch('termindato');

  return (
    <Table.ExpandableRow
      open={open}
      onClick={() => setOpen(!open)}
      content={
        <>
          {open && tilrettelegging && (
            <TilretteleggingForm
              tilrettelegging={tilrettelegging}
              termindato={termindato}
              index={index}
              oppdaterTilrettelegging={oppdaterTilrettelegging}
              avbrytEditering={avbrytEditering}
              readOnly={readOnly}
            />
          )}
          {open && opphold && (
            <OppholdForm
              opphold={opphold}
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
      <Table.DataCell>{fom ? <PeriodLabel dateStringFom={fom} dateStringTom={tom} /> : 'Periode'}</Table.DataCell>
      <Table.DataCell>{tilrettelegging ? 'Tilrettelegging' : 'Opphold'}</Table.DataCell>
      <Table.DataCell>
        <Tag size="small" variant="neutral">
          {fom ? 'test' : 'Saksbehandler'}
        </Tag>
      </Table.DataCell>
    </Table.ExpandableRow>
  );
};

export default TilretteleggingPerioderTabellRad;

import { useState } from 'react';

import { Table, VStack } from '@navikt/ds-react';
import { PeriodLabel } from '@navikt/ft-ui-komponenter';
import dayjs from 'dayjs';

import type { AnnenforelderUttakEøsPeriode } from '@navikt/fp-types';

import { UttakEøsFaktaForm } from './UttakEøsFaktaForm';

interface Props {
  annenForelderUttakEøsPerioder: AnnenforelderUttakEøsPeriode[];
  setPerioder: React.Dispatch<React.SetStateAction<AnnenforelderUttakEøsPeriode[]>>;
}

export const UttakEøsFaktaTable = ({ annenForelderUttakEøsPerioder, setPerioder }: Props) => {
  return (
    <VStack gap="6">
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope="col">Periode</Table.HeaderCell>
            <Table.HeaderCell scope="col">Kontotype</Table.HeaderCell>
            <Table.HeaderCell scope="col">Trekkdager</Table.HeaderCell>
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {annenForelderUttakEøsPerioder.map(annenForelderUttakEøsPeriode => {
            return (
              <Rad
                key={annenForelderUttakEøsPeriode.fom + annenForelderUttakEøsPeriode.tom}
                annenForelderUttakEøsPeriode={annenForelderUttakEøsPeriode}
                setPerioder={setPerioder}
              />
            );
          })}
        </Table.Body>
      </Table>
    </VStack>
  );
};

interface RadProps {
  annenForelderUttakEøsPeriode: AnnenforelderUttakEøsPeriode;
  setPerioder: React.Dispatch<React.SetStateAction<AnnenforelderUttakEøsPeriode[]>>;
}

const Rad = ({ annenForelderUttakEøsPeriode, setPerioder }: RadProps) => {
  const [erÅpen, setErÅpen] = useState(false);

  const oppdaterPeriode = (oppdatertPeriode: AnnenforelderUttakEøsPeriode) => {
    setErÅpen(false);
    setPerioder(prevPerioder => {
      const perioderSomIkkeErOppdatert = prevPerioder.filter(
        periode => periode.fom !== annenForelderUttakEøsPeriode.fom && periode.tom !== annenForelderUttakEøsPeriode.tom,
      );
      return [...perioderSomIkkeErOppdatert, oppdatertPeriode].sort((a, b) => dayjs(a.fom).diff(dayjs(b.fom)));
    });
  };

  const slettPeriode = () => {
    setErÅpen(false);
    setPerioder(prevPerioder => {
      return prevPerioder.filter(
        periode => periode.fom !== annenForelderUttakEøsPeriode.fom && periode.tom !== annenForelderUttakEøsPeriode.tom,
      );
    });
  };

  const avbryt = () => {
    setErÅpen(false);
  };

  return (
    <Table.ExpandableRow
      key={annenForelderUttakEøsPeriode.fom + annenForelderUttakEøsPeriode.tom}
      content={
        erÅpen && (
          <UttakEøsFaktaForm
            annenForelderUttakEøsPeriode={annenForelderUttakEøsPeriode}
            oppdater={oppdaterPeriode}
            slettPeriode={slettPeriode}
            avbryt={avbryt}
          />
        )
      }
      expandOnRowClick
      onOpenChange={() => setErÅpen(!erÅpen)}
      open={erÅpen}
      togglePlacement="right"
    >
      <Table.DataCell>
        <PeriodLabel
          dateStringFom={annenForelderUttakEøsPeriode.fom}
          dateStringTom={annenForelderUttakEøsPeriode.tom}
        />
      </Table.DataCell>
      <Table.DataCell>{annenForelderUttakEøsPeriode.trekkonto}</Table.DataCell>
      <Table.DataCell>{annenForelderUttakEøsPeriode.trekkdager}</Table.DataCell>
    </Table.ExpandableRow>
  );
};

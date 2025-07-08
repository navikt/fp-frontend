import React, { useState } from 'react';

import { Table, VStack } from '@navikt/ds-react';
import { PeriodLabel } from '@navikt/ft-ui-komponenter';
import dayjs from 'dayjs';

import type { AnnenforelderUttakEøsPeriode } from '@navikt/fp-types';

import { toTitleCapitalization, UttakEøsFaktaDetailForm } from './UttakEøsFaktaDetailForm.tsx';

import styles from './UttakEøsFaktaTable.module.css';
import classnames from 'classnames/bind';
import { FormattedMessage } from 'react-intl';
import { finnDager, finnUker } from '@navikt/fp-utils';

const classNames = classnames.bind(styles);

interface Props {
  annenForelderUttakEøsPerioder: AnnenforelderUttakEøsPeriode[];
  setPerioder: React.Dispatch<React.SetStateAction<AnnenforelderUttakEøsPeriode[]>>;
  isReadOnly: boolean;
}

export const UttakEøsFaktaTable = ({ annenForelderUttakEøsPerioder, setPerioder, isReadOnly }: Props) => {
  return (
    <VStack gap="6">
      <Table>
        <Table.Header>
          <Table.Row className={styles.headerRow}>
            <Table.HeaderCell scope="col">
              <FormattedMessage id="UttakEøsFaktaTable.Periode" />
            </Table.HeaderCell>
            <Table.HeaderCell scope="col">
              <FormattedMessage id="UttakEøsFaktaTable.Kontotype" />
            </Table.HeaderCell>
            <Table.HeaderCell scope="col" align="center">
              <FormattedMessage id="UttakEøsFaktaTable.Trekkdager" />
            </Table.HeaderCell>
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
                isReadOnly={isReadOnly}
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
  isReadOnly: boolean;
}

const Rad = ({ annenForelderUttakEøsPeriode, setPerioder, isReadOnly }: RadProps) => {
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
      expandOnRowClick
      expansionDisabled={isReadOnly}
      togglePlacement="right"
      open={erÅpen}
      onOpenChange={() => setErÅpen(!erÅpen)}
      className={classNames('row', {
        isOpen: erÅpen,
      })}
      contentGutter="none"
      content={
        erÅpen && (
          <div className={styles.panelOpen}>
            <UttakEøsFaktaDetailForm
              annenForelderUttakEøsPeriode={annenForelderUttakEøsPeriode}
              oppdater={oppdaterPeriode}
              slettPeriode={slettPeriode}
              avbryt={avbryt}
            />
          </div>
        )
      }
    >
      <Table.DataCell>
        <PeriodLabel
          dateStringFom={annenForelderUttakEøsPeriode.fom}
          dateStringTom={annenForelderUttakEøsPeriode.tom}
        />
      </Table.DataCell>
      <Table.DataCell>{toTitleCapitalization(annenForelderUttakEøsPeriode.trekkonto)}</Table.DataCell>
      <Table.DataCell align="center">
        {finnUker(annenForelderUttakEøsPeriode.trekkdager)} / {finnDager(annenForelderUttakEøsPeriode.trekkdager)}
      </Table.DataCell>
    </Table.ExpandableRow>
  );
};

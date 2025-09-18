import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { PlusCircleIcon } from '@navikt/aksel-icons';
import { Alert, Button, Heading, Table, VStack } from '@navikt/ds-react';
import { PeriodLabel } from '@navikt/ft-ui-komponenter';
import classnames from 'classnames/bind';
import dayjs from 'dayjs';

import type { AnnenforelderUttakEøsPeriode } from '@navikt/fp-types';
import { finnDager, finnUker } from '@navikt/fp-utils';

import { toTitleCapitalization, UttakEøsFaktaDetailForm } from './UttakEøsFaktaDetailForm.tsx';

import styles from './uttakEøsFaktaTable.module.css';

const classNames = classnames.bind(styles);

interface Props {
  annenForelderUttakEøsPerioder: AnnenforelderUttakEøsPeriode[];
  setPerioder: React.Dispatch<React.SetStateAction<AnnenforelderUttakEøsPeriode[]>>;
  isReadOnly: boolean;
  erRedigerbart?: boolean;
  visLeggTilPeriodeForm?: boolean;
  setVisLeggTilPeriodeForm: (vis: boolean) => void;
  setDirty: (isDirty: boolean) => void;
}

export const UttakEøsFaktaTable = ({
  annenForelderUttakEøsPerioder,
  setPerioder,
  isReadOnly,
  erRedigerbart,
  visLeggTilPeriodeForm,
  setVisLeggTilPeriodeForm,
  setDirty,
}: Props) => {
  return (
    <VStack gap="space-16">
      <Table>
        <Table.Header>
          <Table.Row className={styles['headerRow']}>
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
                setDirty={setDirty}
              />
            );
          })}
        </Table.Body>
      </Table>
      {annenForelderUttakEøsPerioder.length === 0 && (
        <Alert variant="info" size="small">
          <FormattedMessage id="UttakEøsFaktaForm.IngenPerioderRegistrert" />
        </Alert>
      )}
      {erRedigerbart && (
        <>
          {visLeggTilPeriodeForm && (
            <VStack gap="4" className={styles['panel']}>
              <Heading size="small">
                <FormattedMessage id="UttakEøsFaktaForm.NyPeriode" />
              </Heading>
              <UttakEøsFaktaDetailForm
                oppdater={(nyPeriode: AnnenforelderUttakEøsPeriode) => {
                  setPerioder(prevPerioder =>
                    [...prevPerioder, nyPeriode].sort((a, b) => dayjs(a.fom).diff(dayjs(b.fom))),
                  );
                  setVisLeggTilPeriodeForm(false);
                  setDirty(true);
                }}
                avbryt={() => setVisLeggTilPeriodeForm(false)}
              />
            </VStack>
          )}
          {!visLeggTilPeriodeForm && (
            <div>
              <Button
                size="small"
                variant="tertiary"
                type="button"
                icon={<PlusCircleIcon />}
                onClick={() => setVisLeggTilPeriodeForm(true)}
                disabled={isReadOnly}
              >
                <FormattedMessage id="UttakEøsFaktaForm.LeggTilPeriode" />
              </Button>
            </div>
          )}
        </>
      )}
    </VStack>
  );
};

interface RadProps {
  annenForelderUttakEøsPeriode: AnnenforelderUttakEøsPeriode;
  setPerioder: React.Dispatch<React.SetStateAction<AnnenforelderUttakEøsPeriode[]>>;
  isReadOnly: boolean;
  setDirty: (isDirty: boolean) => void;
}

const Rad = ({ annenForelderUttakEøsPeriode, setPerioder, isReadOnly, setDirty }: RadProps) => {
  const [erÅpen, setErÅpen] = useState(false);

  const oppdaterPeriode = (oppdatertPeriode: AnnenforelderUttakEøsPeriode) => {
    setErÅpen(false);
    setPerioder(prevPerioder => {
      const perioderSomIkkeErOppdatert = prevPerioder.filter(
        periode => periode.fom !== annenForelderUttakEøsPeriode.fom && periode.tom !== annenForelderUttakEøsPeriode.tom,
      );
      return [...perioderSomIkkeErOppdatert, oppdatertPeriode].sort((a, b) => dayjs(a.fom).diff(dayjs(b.fom)));
    });
    setDirty(true);
  };

  const slettPeriode = () => {
    setErÅpen(false);
    setPerioder(prevPerioder => {
      return prevPerioder.filter(
        periode => periode.fom !== annenForelderUttakEøsPeriode.fom && periode.tom !== annenForelderUttakEøsPeriode.tom,
      );
    });
    setDirty(true);
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
          <div className={styles['panelOpen']}>
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

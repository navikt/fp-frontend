import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { PlusCircleIcon } from '@navikt/aksel-icons';
import { Alert, Box, Button, Heading, Table } from '@navikt/ds-react';
import { PeriodLabel } from '@navikt/ft-ui-komponenter';
import dayjs from 'dayjs';

import type { AlleKodeverk, AnnenforelderUttakEøsPeriode } from '@navikt/fp-types';
import { finnDager, finnUker } from '@navikt/fp-utils';

import { finnTrekkkonto, UttakEøsFaktaDetailForm } from './UttakEøsFaktaDetailForm';

import styles from './uttakEøsFaktaTable.module.css';

interface Props {
  annenForelderUttakEøsPerioder: AnnenforelderUttakEøsPeriode[];
  setPerioder: React.Dispatch<React.SetStateAction<AnnenforelderUttakEøsPeriode[]>>;
  isReadOnly: boolean;
  erRedigerbart?: boolean;
  visLeggTilPeriodeForm?: boolean;
  setVisLeggTilPeriodeForm: (vis: boolean) => void;
  setDirty: (isDirty: boolean) => void;
  alleKodeverk: AlleKodeverk;
}

export const UttakEøsFaktaTable = ({
  annenForelderUttakEøsPerioder,
  setPerioder,
  isReadOnly,
  erRedigerbart,
  visLeggTilPeriodeForm,
  setVisLeggTilPeriodeForm,
  setDirty,
  alleKodeverk,
}: Props) => (
  <>
    <Table className={styles['table']}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell scope="col">
            <FormattedMessage id="UttakEøsFaktaTable.Periode" />
          </Table.HeaderCell>
          <Table.HeaderCell scope="col">
            <FormattedMessage id="UttakEøsFaktaTable.Kontotype" />
          </Table.HeaderCell>
          <Table.HeaderCell scope="col">
            <FormattedMessage id="UttakEøsFaktaTable.Trekkdager" />
          </Table.HeaderCell>
          <Table.HeaderCell />
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {annenForelderUttakEøsPerioder.map(annenForelderUttakEøsPeriode => (
          <Rad
            key={annenForelderUttakEøsPeriode.fom + annenForelderUttakEøsPeriode.tom}
            annenForelderUttakEøsPeriode={annenForelderUttakEøsPeriode}
            setPerioder={setPerioder}
            isReadOnly={isReadOnly}
            setDirty={setDirty}
            alleKodeverk={alleKodeverk}
          />
        ))}
        {annenForelderUttakEøsPerioder.length === 0 && (
          <Table.Row shadeOnHover={false}>
            <Table.DataCell colSpan={4}>
              <Alert inline variant="info" size="small">
                <FormattedMessage id="UttakEøsFaktaForm.IngenPerioderRegistrert" tagName="i" />
              </Alert>
            </Table.DataCell>
          </Table.Row>
        )}
      </Table.Body>
    </Table>

    {erRedigerbart && visLeggTilPeriodeForm && (
      <Box.New background="sunken" padding="space-16">
        <Heading size="small" level="3">
          <FormattedMessage id="UttakEøsFaktaForm.NyPeriode" />
        </Heading>
        <UttakEøsFaktaDetailForm
          oppdater={(nyPeriode: AnnenforelderUttakEøsPeriode) => {
            setPerioder(prevPerioder => [...prevPerioder, nyPeriode].sort((a, b) => dayjs(a.fom).diff(dayjs(b.fom))));
            setVisLeggTilPeriodeForm(false);
            setDirty(true);
          }}
          avbryt={() => setVisLeggTilPeriodeForm(false)}
        />
      </Box.New>
    )}
    {erRedigerbart && !visLeggTilPeriodeForm && (
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
);

interface RadProps {
  annenForelderUttakEøsPeriode: AnnenforelderUttakEøsPeriode;
  setPerioder: React.Dispatch<React.SetStateAction<AnnenforelderUttakEøsPeriode[]>>;
  isReadOnly: boolean;
  setDirty: (isDirty: boolean) => void;
  alleKodeverk: AlleKodeverk;
}

const Rad = ({ annenForelderUttakEøsPeriode, setPerioder, isReadOnly, setDirty, alleKodeverk }: RadProps) => {
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

  const { fom, tom, trekkonto, trekkdager } = annenForelderUttakEøsPeriode;

  return (
    <Table.ExpandableRow
      key={fom + tom}
      expandOnRowClick
      expansionDisabled={isReadOnly}
      togglePlacement="right"
      open={erÅpen}
      onOpenChange={() => setErÅpen(!erÅpen)}
      contentGutter="none"
      content={
        <UttakEøsFaktaDetailForm
          annenForelderUttakEøsPeriode={annenForelderUttakEøsPeriode}
          oppdater={oppdaterPeriode}
          slettPeriode={slettPeriode}
          avbryt={avbryt}
        />
      }
    >
      <Table.DataCell>
        <PeriodLabel dateStringFom={fom} dateStringTom={tom} />
      </Table.DataCell>
      <Table.DataCell>{finnTrekkkonto(trekkonto, alleKodeverk)}</Table.DataCell>
      <Table.DataCell>
        {finnUker(trekkdager)} / {finnDager(trekkdager)}
      </Table.DataCell>
    </Table.ExpandableRow>
  );
};

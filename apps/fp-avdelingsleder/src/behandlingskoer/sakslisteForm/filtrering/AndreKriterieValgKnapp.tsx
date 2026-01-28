import type { ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';

import { MinusIcon, PlusIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, HStack } from '@navikt/ds-react';

import type { AndreKriterierType, LosKodeverkMedNavn } from '@navikt/fp-types';

import type { FormValues } from './AndreKriterierVelger.tsx';

import styles from './AvOgPåKnapper.module.css';

enum FilterStatus {
  PLUS = 'PLUS',
  MINUS = 'MINUS',
  OFF = 'OFF',
}

type Props = {
  andreKriterierType: LosKodeverkMedNavn<'AndreKriterierType'>;
  lagreAndreKriterier: (valuesToStore: {
    andreKriterierType: AndreKriterierType;
    checked: boolean;
    inkluder: boolean;
  }) => void;
};

export const AndreKriterieValgKnapp = ({ andreKriterierType, lagreAndreKriterier }: Props): ReactElement => {
  const { setValue, watch } = useFormContext<FormValues>();
  const values = watch();

  const filterStatus = getFilterStatus(values[`${andreKriterierType.kode}_inkluder`]);

  const togglePlussKnapp = () => {
    if (filterStatus === FilterStatus.PLUS) {
      setValue(`${andreKriterierType.kode}_inkluder`, undefined);
      lagreAndreKriterier({
        andreKriterierType: andreKriterierType.kode,
        checked: false,
        inkluder: false,
      });
    } else {
      setValue(`${andreKriterierType.kode}_inkluder`, true);
      lagreAndreKriterier({
        andreKriterierType: andreKriterierType.kode,
        checked: true,
        inkluder: true,
      });
    }
  };

  const toggleMinusKnapp = () => {
    if (filterStatus === FilterStatus.MINUS) {
      setValue(`${andreKriterierType.kode}_inkluder`, undefined);
      lagreAndreKriterier({
        andreKriterierType: andreKriterierType.kode,
        checked: false,
        inkluder: false,
      });
    } else {
      setValue(`${andreKriterierType.kode}_inkluder`, false);
      lagreAndreKriterier({
        andreKriterierType: andreKriterierType.kode,
        checked: true,
        inkluder: false,
      });
    }
  };

  return (
    <HStack gap="space-4" data-testid={`av-og-pa-knapper-${andreKriterierType.kode}`}>
      <PlussKnapp filterStatus={filterStatus} toggle={togglePlussKnapp} />
      <MinusKnapp filterStatus={filterStatus} toggle={toggleMinusKnapp} />
      <BodyShort>{andreKriterierType.navn}</BodyShort>
    </HStack>
  );
};

type PlussKnappProps = {
  filterStatus: FilterStatus;
  toggle: () => void;
};

const PlussKnapp = ({ filterStatus, toggle }: PlussKnappProps): ReactElement => (
  <Button
    className={styles['knapp']}
    variant={filterStatus === FilterStatus.PLUS ? 'primary' : 'secondary'}
    size="xsmall"
    icon={<PlusIcon title="Filtrer" />}
    type="button"
    onClick={toggle}
    aria-label="pluss"
  />
);

type MinusKnappProps = {
  filterStatus: FilterStatus;
  toggle: () => void;
};

const MinusKnapp = ({ filterStatus, toggle }: MinusKnappProps): ReactElement => (
  <Button
    className={styles['knapp']}
    variant={filterStatus === FilterStatus.MINUS ? 'danger' : 'secondary'}
    size="xsmall"
    icon={<MinusIcon title="Filtrer bort" />}
    type="button"
    onClick={toggle}
    aria-label="minus"
  />
);

const getFilterStatus = (inkluder: boolean | undefined): FilterStatus => {
  switch (inkluder) {
    case undefined:
      return FilterStatus.OFF;
    case true:
      return FilterStatus.PLUS;
    case false:
      return FilterStatus.MINUS;
  }
};

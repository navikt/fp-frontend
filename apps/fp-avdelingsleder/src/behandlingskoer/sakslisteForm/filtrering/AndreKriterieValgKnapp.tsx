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
  const inkluderVerdi = watch(`${andreKriterierType.kode}_inkluder`);
  const filterStatus = getFilterStatus(inkluderVerdi);

  const deaktiverKnapp = () => {
    setValue(`${andreKriterierType.kode}_inkluder`, undefined);
    lagreAndreKriterier({
      andreKriterierType: andreKriterierType.kode,
      checked: false,
      inkluder: false,
    });
  };

  const aktiverKnapp = (knapp: FilterStatus.PLUS | FilterStatus.MINUS) => {
    const inkluder = knapp === FilterStatus.PLUS;
    setValue(`${andreKriterierType.kode}_inkluder`, inkluder);
    lagreAndreKriterier({
      andreKriterierType: andreKriterierType.kode,
      checked: true,
      inkluder: inkluder,
    });
  };

  const toggleKnapp = (knapp: FilterStatus.PLUS | FilterStatus.MINUS) => {
    if (knapp == filterStatus) {
      deaktiverKnapp();
    } else {
      aktiverKnapp(knapp);
    }
  };

  return (
    <HStack gap="space-4" data-testid={`av-og-pa-knapper-${andreKriterierType.kode}`}>
      <PlussKnapp filterStatus={filterStatus} toggle={toggleKnapp} />
      <MinusKnapp filterStatus={filterStatus} toggle={toggleKnapp} />
      <BodyShort>{andreKriterierType.navn}</BodyShort>
    </HStack>
  );
};

type KnappProps = {
  filterStatus: FilterStatus;
  toggle: (knapp: FilterStatus.PLUS | FilterStatus.MINUS) => void;
};

const PlussKnapp = ({ filterStatus, toggle }: KnappProps): ReactElement => (
  <Button
    className={styles['knapp']}
    variant={filterStatus === FilterStatus.PLUS ? 'primary' : 'secondary'}
    size="xsmall"
    icon={<PlusIcon title="Filtrer" />}
    type="button"
    onClick={() => toggle(FilterStatus.PLUS)}
    aria-label="pluss"
  />
);

const MinusKnapp = ({ filterStatus, toggle }: KnappProps): ReactElement => (
  <Button
    className={styles['knapp']}
    variant={filterStatus === FilterStatus.MINUS ? 'primary' : 'secondary'}
    data-color={filterStatus === FilterStatus.MINUS ? 'danger' : undefined}
    size="xsmall"
    icon={<MinusIcon title="Filtrer bort" />}
    type="button"
    onClick={() => toggle(FilterStatus.MINUS)}
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

import type { ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { MinusIcon, PlusIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, HStack } from '@navikt/ds-react';

import type { AndreKriterierType, LosKodeverkMedNavn } from '@navikt/fp-types';

import styles from './AvOgPåKnapper.module.css';

export type FormValues = {
  andreKriterie: {
    inkluder: AndreKriterierType[];
    ekskluder: AndreKriterierType[];
  };
};

enum FilterStatus {
  PLUS = 'PLUS',
  MINUS = 'MINUS',
  OFF = 'OFF',
}

type Props = {
  andreKriterierType: LosKodeverkMedNavn<'AndreKriterierType'>;
};

export const AndreKriterieValgKnapp = ({ andreKriterierType }: Props): ReactElement => {
  const intl = useIntl();
  const { watch, setValue } = useFormContext<FormValues>();
  const andreKriterier = watch('andreKriterie');
  const inkluderVerdi = andreKriterier.inkluder;
  const ekskluderVerdi = andreKriterier.ekskluder;

  const deaktiverKnapp = () => {
    const inkluderKriterier = inkluderVerdi.filter(k => k !== andreKriterierType.kode);
    const eksluderKriterier = ekskluderVerdi.filter(k => k !== andreKriterierType.kode);
    setValue('andreKriterie', { inkluder: inkluderKriterier, ekskluder: eksluderKriterier }, { shouldDirty: true });
  };

  const aktiverKnapp = (knapp: FilterStatus.PLUS | FilterStatus.MINUS) => {
    const nyInkluder = inkluderVerdi.filter(k => k !== andreKriterierType.kode);
    const nyEkskluder = ekskluderVerdi.filter(k => k !== andreKriterierType.kode);

    if (knapp === FilterStatus.PLUS) {
      nyInkluder.push(andreKriterierType.kode);
    } else {
      nyEkskluder.push(andreKriterierType.kode);
    }

    setValue('andreKriterie', { inkluder: nyInkluder, ekskluder: nyEkskluder }, { shouldDirty: true });
  };

  const filterStatus = getFilterStatus(andreKriterierType.kode, inkluderVerdi, ekskluderVerdi);
  const toggleKnapp = (knapp: FilterStatus.PLUS | FilterStatus.MINUS) => {
    if (knapp === filterStatus) {
      deaktiverKnapp();
    } else {
      aktiverKnapp(knapp);
    }
  };
  return (
    <HStack gap="space-8" data-testid={`av-og-pa-knapper-${andreKriterierType.kode}`}>
      <HStack gap="space-4">
        <PlussKnapp
          iconTittel={intl.formatMessage({ id: 'AndreKriterieValgKnapp.PlusKnappIconTittel' })}
          filterStatus={filterStatus}
          toggle={toggleKnapp}
        />
        <MinusKnapp
          iconTittel={intl.formatMessage({ id: 'AndreKriterieValgKnapp.MinusKnappIconTittel' })}
          filterStatus={filterStatus}
          toggle={toggleKnapp}
        />
      </HStack>
      <BodyShort>{andreKriterierType.navn}</BodyShort>
    </HStack>
  );
};

type KnappProps = {
  iconTittel: string;
  filterStatus: FilterStatus;
  toggle: (knapp: FilterStatus.PLUS | FilterStatus.MINUS) => void;
};

const PlussKnapp = ({ iconTittel, filterStatus, toggle }: KnappProps): ReactElement => (
  <Button
    className={styles['knapp']}
    variant={filterStatus === FilterStatus.PLUS ? 'primary' : 'secondary'}
    size="xsmall"
    icon={<PlusIcon title={iconTittel} />}
    type="button"
    onClick={() => toggle(FilterStatus.PLUS)}
    aria-label="pluss"
  />
);

const MinusKnapp = ({ iconTittel, filterStatus, toggle }: KnappProps): ReactElement => (
  <Button
    className={styles['knapp']}
    variant={filterStatus === FilterStatus.MINUS ? 'primary' : 'secondary'}
    data-color={filterStatus === FilterStatus.MINUS ? 'danger' : undefined}
    size="xsmall"
    icon={<MinusIcon title={iconTittel} />}
    type="button"
    onClick={() => toggle(FilterStatus.MINUS)}
    aria-label="minus"
  />
);

const getFilterStatus = (
  kode: AndreKriterierType,
  inkluder: AndreKriterierType[],
  ekskluder: AndreKriterierType[],
): FilterStatus => {
  if (inkluder.includes(kode)) {
    return FilterStatus.PLUS;
  }
  if (ekskluder.includes(kode)) {
    return FilterStatus.MINUS;
  }
  return FilterStatus.OFF;
};

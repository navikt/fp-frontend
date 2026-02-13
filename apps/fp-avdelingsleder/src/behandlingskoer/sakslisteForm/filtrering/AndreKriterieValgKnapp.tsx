import type { ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { MinusIcon, PlusIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, HStack } from '@navikt/ds-react';

import type { AndreKriterierType, LosKodeverkMedNavn } from '@navikt/fp-types';

import type { FormValues } from '../UtvalgskriterierForSakslisteForm';

import styles from './AvOgPåKnapper.module.css';

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
  const kode = andreKriterierType.kode;

  const oppdaterKriterier = (nyStatus: FilterStatus) => {
    const base = {
      inkluder: inkluderVerdi.filter(k => k !== kode),
      ekskluder: ekskluderVerdi.filter(k => k !== kode),
    };
    if (nyStatus === FilterStatus.PLUS) {
      base.inkluder = [...base.inkluder, kode];
    }

    if (nyStatus === FilterStatus.MINUS) {
      base.ekskluder = [...base.ekskluder, kode];
    }

    setValue('andreKriterie', base, { shouldDirty: true });
  };

  const filterStatus = getFilterStatus(kode, inkluderVerdi, ekskluderVerdi);
  const toggleKnapp = (knapp: FilterStatus.PLUS | FilterStatus.MINUS) => {
    oppdaterKriterier(knapp === filterStatus ? FilterStatus.OFF : knapp);
  };

  return (
    <HStack gap="space-8" data-testid={`av-og-pa-knapper-${kode}`}>
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
      <BodyShort size="small">{andreKriterierType.navn}</BodyShort>
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

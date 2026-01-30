import type { ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { MinusIcon, PlusIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, HStack } from '@navikt/ds-react';

import type { AndreKriterierType, LosKodeverkMedNavn } from '@navikt/fp-types';

import styles from './AvOgPåKnapper.module.css';

export type FormValues = { [key in AndreKriterierType]?: boolean } & {
  [K in AndreKriterierType as `${K}_inkluder`]?: boolean;
};

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
  const intl = useIntl();
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

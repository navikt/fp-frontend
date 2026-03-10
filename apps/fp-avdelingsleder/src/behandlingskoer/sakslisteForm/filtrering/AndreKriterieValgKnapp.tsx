import type { ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { MinusIcon, PlusIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, HStack } from '@navikt/ds-react';

import type { AndreKriterierType, LosKodeverkMedNavn } from '@navikt/fp-types';

import type { FormValues } from '../UtvalgskriterierForSakslisteForm';

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
    <HStack wrap={false} as="li" data-testid={`av-og-pa-knapper-${kode}`} className="pb-2">
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
    variant={filterStatus === FilterStatus.PLUS ? 'primary' : 'secondary'}
    size="xsmall"
    icon={<PlusIcon title={iconTittel} />}
    type="button"
    onClick={() => toggle(FilterStatus.PLUS)}
    aria-label="pluss"
    className="mr-1 self-start"
  />
);

const MinusKnapp = ({ iconTittel, filterStatus, toggle }: KnappProps): ReactElement => (
  <Button
    variant={filterStatus === FilterStatus.MINUS ? 'primary' : 'secondary'}
    data-color={filterStatus === FilterStatus.MINUS ? 'danger' : undefined}
    size="xsmall"
    icon={<MinusIcon title={iconTittel} />}
    type="button"
    onClick={() => toggle(FilterStatus.MINUS)}
    aria-label="minus"
    className="mr-2 self-start"
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

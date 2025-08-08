import { FormattedMessage } from 'react-intl';

import { BodyShort, Label, VStack } from '@navikt/ds-react';
import { BTag, createWeekAndDay, periodFormat } from '@navikt/ft-utils';

import type { AlleKodeverk, AnnenforelderUttakEøsPeriode } from '@navikt/fp-types';

import styles from './uttakPeriodeInfoEøs.module.css';

interface Props {
  valgtPeriode: AnnenforelderUttakEøsPeriode;
  alleKodeverk: AlleKodeverk;
}

export const UttakPeriodeInfoEØS = ({ valgtPeriode, alleKodeverk }: Props) => {
  return (
    <VStack gap="space-16" className={styles.greenDetailsPeriod}>
      <VStack>
        <Label size="small">
          <FormattedMessage id="UttakPeriodeInfoEØS.Uttak" />
        </Label>
        <BodyShort>{stonadskonto(valgtPeriode, alleKodeverk)}</BodyShort>
      </VStack>

      <VStack>
        <Label size="small">{periodFormat(valgtPeriode.fom, valgtPeriode.tom)}</Label>
        <BodyShort>
          <FormattedMessage
            id="UttakPeriodeInfoEØS.Trekkdager"
            values={{
              trekkdager: createWeekAndDay(Math.floor(valgtPeriode.trekkdager / 5), valgtPeriode.trekkdager % 5)
                .formattedString,
              b: BTag,
            }}
          />
        </BodyShort>
      </VStack>

      <BodyShort>
        <FormattedMessage id="UttakPeriodeInfoEØS.RegistrertAvSaksbehandler" />
      </BodyShort>
    </VStack>
  );
};

const stonadskonto = (valgtPeriode: AnnenforelderUttakEøsPeriode, alleKodeverk: AlleKodeverk): string => {
  return alleKodeverk['StønadskontoType'].find(k => k.kode === valgtPeriode.trekkonto)?.navn ?? '';
};

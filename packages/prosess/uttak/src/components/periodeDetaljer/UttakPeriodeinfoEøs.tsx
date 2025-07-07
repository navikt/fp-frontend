import { FormattedMessage } from 'react-intl';

import { StarsEuIcon } from '@navikt/aksel-icons';
import { BodyShort, HStack, Label, VStack } from '@navikt/ds-react';
import { BTag, periodFormat } from '@navikt/ft-utils';

import type { AlleKodeverk, AnnenforelderUttakEøsPeriode } from '@navikt/fp-types';

import styles from './uttakPeriodeInfoEøs.module.css';

interface Props {
  valgtPeriode: AnnenforelderUttakEøsPeriode;
  alleKodeverk: AlleKodeverk;
}

export const UttakPeriodeInfoEØS = ({ valgtPeriode, alleKodeverk }: Props) => {
  return (
    <VStack gap="4" className={styles.greenDetailsPeriod}>
      <HStack gap="2" justify="space-between">
        <div>
          <Label size="small">
            <FormattedMessage id="UttakPeriodeInfoEØS.Uttak" />
          </Label>
          <BodyShort>{stonadskonto(valgtPeriode, alleKodeverk)}</BodyShort>
        </div>
        <StarsEuIcon className={styles.eosIcon} />
      </HStack>

      <div>
        <Label size="small">{periodFormat(valgtPeriode.fom, valgtPeriode.tom)}</Label>
        <BodyShort>
          <FormattedMessage
            id="UttakPeriodeInfoEØS.Trekkdager"
            values={{ trekkdager: valgtPeriode.trekkdager, b: BTag }}
          />
        </BodyShort>
      </div>
    </VStack>
  );
};

const stonadskonto = (valgtPeriode: AnnenforelderUttakEøsPeriode, alleKodeverk: AlleKodeverk): string => {
  return alleKodeverk['StønadskontoType'].find(k => k.kode === valgtPeriode.trekkonto)?.navn ?? '';
};

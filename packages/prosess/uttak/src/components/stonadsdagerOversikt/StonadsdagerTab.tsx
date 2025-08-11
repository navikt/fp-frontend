import { FormattedMessage } from 'react-intl';

import { BodyShort, Detail, VStack } from '@navikt/ds-react';
import { BTag } from '@navikt/ft-utils';
import classnames from 'classnames/bind';

import { StonadskontoType } from '@navikt/fp-kodeverk';
import type { Stonadskonto } from '@navikt/fp-types';

import styles from './stonadsdagerTab.module.css';

const classNames = classnames.bind(styles);

const finnKorrektLabelForKvote = (stonadtype: string): string => {
  switch (stonadtype) {
    case StonadskontoType.FEDREKVOTE:
      return 'TimeLineTab.Stonadinfo.Fedrekvote';
    case StonadskontoType.MØDREKVOTE:
      return 'TimeLineTab.Stonadinfo.Modrekvote';
    case StonadskontoType.FELLESPERIODE:
      return 'TimeLineTab.Stonadinfo.Fellesperiode';
    case StonadskontoType.FORELDREPENGER_FØR_FØDSEL:
      return 'TimeLineTab.Stonadinfo.ForeldrepengerFF';
    case StonadskontoType.FLERBARNSDAGER:
      return 'TimeLineTab.Stonadinfo.Flerbarnsdager';
    case StonadskontoType.FORELDREPENGER:
      return 'TimeLineTab.Stonadinfo.ForeldrePenger';
    case StonadskontoType.UTEN_AKTIVITETSKRAV:
      return 'TimeLineTab.Stonadinfo.UtenAktivitetskrav';
    case StonadskontoType.MINSTERETT:
      return 'TimeLineTab.Stonadinfo.Minsterett';
    case StonadskontoType.MINSTERETT_NESTE_STØNADSPERIODE:
      return 'TimeLineTab.Stonadinfo.MinsterettNesteStønadsperiode';
    default:
      return 'TimeLineTab.Stonadinfo.Empty';
  }
};

export const finnAntallUkerOgDager = (saldo: number): { uker: number; dager: number } => {
  const modifier = saldo < 0 ? -1 : 1;
  const justertSaldo = saldo * modifier;
  return {
    uker: Math.floor(justertSaldo / 5) * modifier,
    dager: (justertSaldo % 5) * modifier,
  };
};

interface Props {
  stønadskonto: Stonadskonto;
  visDagerForKonto: (stønadskonto: Stonadskonto) => void;
  aktiv?: boolean;
}

export const StonadsdagerTab = ({ stønadskonto, visDagerForKonto, aktiv = false }: Props) => {
  const fordelteDager = finnAntallUkerOgDager(stønadskonto.saldo);
  const kontonavnTekst = finnKorrektLabelForKvote(stønadskonto.stonadskontotype);

  const velgKonto = () => visDagerForKonto(stønadskonto);

  const uker = Math.floor(stønadskonto.maxDager / 5);

  return (
    <div className={styles.tabs}>
      <li
        role="presentation"
        className={classNames('tab', { aktiv, error: stønadskonto && !stønadskonto.gyldigForbruk })}
      >
        <button
          role="tab"
          className={classNames('tabInner', { error: stønadskonto && !stønadskonto.gyldigForbruk })}
          type="button"
          onClick={velgKonto}
          aria-selected={aktiv}
        >
          <VStack gap="space-4">
            <Detail>
              <FormattedMessage
                id={kontonavnTekst}
                values={{
                  uker,
                  dager: stønadskonto.maxDager - uker * 5,
                }}
              />
            </Detail>
            <BodyShort size="small">
              <FormattedMessage
                id="TimeLineTab.Stonadinfo.UkerDager"
                values={{
                  ukerVerdi: fordelteDager.uker,
                  dagerVerdi: fordelteDager.dager,
                  b: BTag,
                }}
              />
            </BodyShort>
          </VStack>
        </button>
      </li>
    </div>
  );
};

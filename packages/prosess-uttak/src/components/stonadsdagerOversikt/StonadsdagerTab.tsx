import React, { FunctionComponent, useCallback, useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import classnames from 'classnames/bind';
import { BodyShort, Detail } from '@navikt/ds-react';
import { FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';

import { StonadskontoType } from '@navikt/fp-kodeverk';
import { Stonadskonto } from '@navikt/fp-types';

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

interface OwnProps {
  stønadskonto: Stonadskonto;
  visDagerForKonto: (stønadskontotype: string) => void;
  aktiv?: boolean;
}

const StonadsdagerTab: FunctionComponent<OwnProps> = ({ stønadskonto, visDagerForKonto, aktiv = false }) => {
  const fordelteDager = useMemo(() => finnAntallUkerOgDager(stønadskonto.saldo), [stønadskonto]);
  const kontonavnTekst = useMemo(() => finnKorrektLabelForKvote(stønadskonto.stonadskontotype), [stønadskonto]);

  const velgKonto = useCallback(() => visDagerForKonto(stønadskonto.stonadskontotype), [stønadskonto]);

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
          <FlexContainer>
            <FlexRow>
              <FlexColumn>
                <Detail>
                  <FormattedMessage
                    id={kontonavnTekst}
                    values={{
                      uker: Math.floor(stønadskonto.maxDager / 5),
                    }}
                  />
                </Detail>
              </FlexColumn>
            </FlexRow>
            <FlexRow>
              <FlexColumn>
                <BodyShort size="small">
                  <FormattedMessage
                    id="TimeLineTab.Stonadinfo.UkerDager"
                    values={{
                      ukerVerdi: fordelteDager.uker,
                      dagerVerdi: fordelteDager.dager,
                      b: (chunks: any) => <b>{chunks}</b>,
                    }}
                  />
                </BodyShort>
              </FlexColumn>
            </FlexRow>
          </FlexContainer>
        </button>
      </li>
    </div>
  );
};

export default StonadsdagerTab;

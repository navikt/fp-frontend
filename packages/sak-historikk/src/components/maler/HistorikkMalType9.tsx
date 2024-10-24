import React, { useCallback } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { KodeverkType, tilbakekrevingVidereBehandling } from '@navikt/fp-kodeverk';
import { HistorikkinnslagEndretFelt } from '@navikt/fp-types';

import historikkinnslagType from '../../kodeverk/historikkinnslagType';
import { findEndretFeltVerdi } from './felles/historikkUtils';
import Skjermlenke from './felles/Skjermlenke';
import BubbleText from './felles/bubbleText';
import HistorikkMal from '../HistorikkMalTsType';

import styles from './historikkMalType9.module.css';

const getSplitPeriods = (endredeFelter: HistorikkinnslagEndretFelt[]): string => {
  let text = '';
  endredeFelter.forEach((felt, index) => {
    if (index === endredeFelter.length - 1) {
      text += ` og ${felt.tilVerdi}`;
    } else if (index === endredeFelter.length - 2) {
      text += `${felt.tilVerdi} `;
    } else {
      text += `${felt.tilVerdi}, `;
    }
  });
  return text;
};

const HistorikkMalType9 = ({
  historikkinnslag,
  behandlingLocation,
  getKodeverknavn,
  createLocationForSkjermlenke,
}: HistorikkMal) => {
  const intl = useIntl();

  const bTag = useCallback((...chunks: any) => <b>{chunks}</b>, []);

  return (
    <>
      {historikkinnslag.historikkinnslagDeler.map((historikkinnslagDel, historikkinnslagDelIndex) => (
        <div key={`historikkinnslagDel${historikkinnslagDelIndex}`}>
          <div>
            <Skjermlenke
              skjermlenke={historikkinnslagDel.skjermlenke}
              behandlingLocation={behandlingLocation}
              getKodeverknavn={getKodeverknavn}
              scrollUpOnClick
              createLocationForSkjermlenke={createLocationForSkjermlenke}
            />
            {historikkinnslagDel.endredeFelter && historikkinnslag.type === historikkinnslagType.OVST_UTTAK_SPLITT && (
              <FormattedMessage
                id="Historikk.Template.9"
                values={{
                  opprinneligPeriode: historikkinnslagDel.endredeFelter[0].fraVerdi,
                  numberOfPeriods: historikkinnslagDel.endredeFelter.length,
                  splitPeriods: getSplitPeriods(historikkinnslagDel.endredeFelter),
                  b: bTag,
                  br: <br />,
                }}
              />
            )}

            {historikkinnslagDel.endredeFelter &&
              historikkinnslag.type === historikkinnslagType.FASTSATT_UTTAK_SPLITT && (
                <FormattedMessage
                  id="Historikk.Template.9.ManuellVurdering"
                  values={{
                    opprinneligPeriode: historikkinnslagDel.endredeFelter[0].fraVerdi,
                    numberOfPeriods: historikkinnslagDel.endredeFelter.length,
                    splitPeriods: getSplitPeriods(historikkinnslagDel.endredeFelter),
                    b: bTag,
                    br: <br />,
                  }}
                />
              )}

            {historikkinnslag.type === historikkinnslagType.TILBAKEKR_VIDEREBEHANDLING &&
              historikkinnslagDel.endredeFelter &&
              historikkinnslagDel.endredeFelter
                .filter(endretFelt => endretFelt.tilVerdi !== tilbakekrevingVidereBehandling.TILBAKEKR_INNTREKK)
                .map((endretFelt, index) => (
                  <div className={styles.tilbakekrevingTekst} key={`endretFelt${index + 1}`}>
                    <FormattedMessage
                      id="Historikk.Template.9.TilbakekrViderebehandling"
                      values={{
                        felt: getKodeverknavn(endretFelt.endretFeltNavn, KodeverkType.HISTORIKK_ENDRET_FELT_TYPE),
                        verdi: findEndretFeltVerdi(endretFelt, endretFelt.tilVerdi, intl),
                        b: bTag,
                      }}
                    />
                  </div>
                ))}
            {historikkinnslagDel.begrunnelsetekst && <BubbleText bodyText={historikkinnslagDel.begrunnelsetekst} />}
            {historikkinnslagDel.begrunnelseFritekst && (
              <BubbleText bodyText={historikkinnslagDel.begrunnelseFritekst} />
            )}
          </div>
        </div>
      ))}
    </>
  );
};

HistorikkMalType9.displayName = 'HistorikkMalType9';

export default HistorikkMalType9;

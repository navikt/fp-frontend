import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { NavLink } from 'react-router-dom';
import { Element } from 'nav-frontend-typografi';

import tilbakekrevingVidereBehandling from '@fpsak-frontend/kodeverk/src/tilbakekrevingVidereBehandling';

import historikkinnslagType from '../../kodeverk/historikkinnslagType';
import { findEndretFeltVerdi } from './felles/historikkUtils';
import BubbleText from './felles/bubbleText';
import historikkinnslagDelPropType from '../../propTypes/historikkinnslagDelPropType';

// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module './historikkMalType.less' or it... Remove this comment to see the full error message
import styles from './historikkMalType.less';

type Props = {
    historikkinnslagDeler: historikkinnslagDelPropType[];
    behandlingLocation: {};
    intl: {};
    originType: {};
    getKodeverknavn: (...args: any[]) => any;
    createLocationForSkjermlenke: (...args: any[]) => any;
};

export const HistorikkMalType9 = ({
  historikkinnslagDeler, behandlingLocation, originType, intl, getKodeverknavn, createLocationForSkjermlenke,
}: Props) => {
  const getSplitPeriods = (endredeFelter) => {
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

  return (
    historikkinnslagDeler
      .map((historikkinnslagDel, historikkinnslagDelIndex) => (
        <div key={
          `historikkinnslagDel${historikkinnslagDelIndex}` // eslint-disable-line react/no-array-index-key
        }
        >
          <div>
            {historikkinnslagDel.skjermlenke
            && (
              <Element>
                <NavLink to={createLocationForSkjermlenke(behandlingLocation, historikkinnslagDel.skjermlenke.kode)}>
                  {getKodeverknavn(historikkinnslagDeler[0].skjermlenke)}
                </NavLink>
              </Element>
            )}

            {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'kode' does not exist on type '{}'. */}
            {historikkinnslagDel.endredeFelter && originType.kode === historikkinnslagType.OVST_UTTAK_SPLITT
            && (
              <FormattedMessage
                id="Historikk.Template.9"
                values={{
                  opprinneligPeriode: historikkinnslagDel.endredeFelter[0].fraVerdi,
                  numberOfPeriods: historikkinnslagDel.endredeFelter.length,
                  splitPeriods: getSplitPeriods(historikkinnslagDel.endredeFelter),
                  b: (chunks) => <b>{chunks}</b>,
                  br: <br />,
                }}
              />
            )}

            {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'kode' does not exist on type '{}'. */}
            {historikkinnslagDel.endredeFelter && originType.kode === historikkinnslagType.FASTSATT_UTTAK_SPLITT
            && (
              <FormattedMessage
                id="Historikk.Template.9.ManuellVurdering"
                values={{
                  opprinneligPeriode: historikkinnslagDel.endredeFelter[0].fraVerdi,
                  numberOfPeriods: historikkinnslagDel.endredeFelter.length,
                  splitPeriods: getSplitPeriods(historikkinnslagDel.endredeFelter),
                  b: (chunks) => <b>{chunks}</b>,
                  br: <br />,
                }}
              />
            )}

            {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'kode' does not exist on type '{}'. */}
            {(originType.kode === historikkinnslagType.TILBAKEKR_VIDEREBEHANDLING && historikkinnslagDel.endredeFelter) && (
              historikkinnslagDel.endredeFelter
                .filter((endretFelt) => endretFelt.tilVerdi !== tilbakekrevingVidereBehandling.TILBAKEKR_INNTREKK)
                .map((endretFelt, index) => (
                  <div className={styles.tilbakekrevingTekst} key={`endretFelt${index + 1}`}>
                    <FormattedMessage
                      id="Historikk.Template.9.TilbakekrViderebehandling"
                      values={{
                        felt: getKodeverknavn(endretFelt.endretFeltNavn),
                        verdi: findEndretFeltVerdi(endretFelt, endretFelt.tilVerdi, intl),
                        b: (chunks) => <b>{chunks}</b>,
                      }}
                    />
                  </div>
                ))
            )}
            {/* @ts-expect-error ts-migrate(2322) FIXME: Property 'className' does not exist on type 'Intri... Remove this comment to see the full error message */}
            {historikkinnslagDel.begrunnelse && <BubbleText bodyText={getKodeverknavn(historikkinnslagDel.begrunnelse)} className="snakkeboble-panel__tekst" />}
            {/* @ts-expect-error ts-migrate(2322) FIXME: Property 'className' does not exist on type 'Intri... Remove this comment to see the full error message */}
            {historikkinnslagDel.begrunnelseFritekst && <BubbleText bodyText={historikkinnslagDel.begrunnelseFritekst} className="snakkeboble-panel__tekst" />}
          </div>
        </div>
      )));
};

// @ts-expect-error ts-migrate(2769) FIXME: Type '({ historikkinnslagDeler, behandlingLocation... Remove this comment to see the full error message
export default injectIntl(HistorikkMalType9);

import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { NavLink } from 'react-router-dom';
import { Element, Normaltekst } from 'nav-frontend-typografi';

import {
  findEndretFeltNavn, findEndretFeltVerdi, findHendelseText, findIdForOpplysningCode, findResultatText,
} from './felles/historikkUtils';
import BubbleText from './felles/bubbleText';
import HistorikkDokumentLenke from './felles/HistorikkDokumentLenke';
import historikkinnslagDelPropType from '../../propTypes/historikkinnslagDelPropType';

type Props = {
    historikkinnslagDeler: historikkinnslagDelPropType[];
    behandlingLocation: {};
    dokumentLinks: {}[];
    intl: {};
    saksNr: number;
    getKodeverknavn: (...args: any[]) => any;
    createLocationForSkjermlenke: (...args: any[]) => any;
};

const HistorikkMalType7 = ({
  historikkinnslagDeler, behandlingLocation, dokumentLinks, intl, saksNr, getKodeverknavn, createLocationForSkjermlenke,
}: Props) => {
  const formatChangedField = (endretFelt) => {
    const fieldName = findEndretFeltNavn(endretFelt, intl);
    const sub1 = fieldName.substring(0, fieldName.lastIndexOf(';'));
    const sub2 = fieldName.substring(fieldName.lastIndexOf(';') + 1);
    const fromValue = findEndretFeltVerdi(endretFelt, endretFelt.fraVerdi, intl);
    const toValue = findEndretFeltVerdi(endretFelt, endretFelt.tilVerdi, intl);

    if (endretFelt.fraVerdi !== null) {
      return (
        <div>
          <FormattedMessage
            id="Historikk.Template.7.ChangedFromTo"
            values={{
              sub1,
              sub2,
              fromValue,
              toValue,
              b: (chunks) => <b>{chunks}</b>,
            }}
          />
        </div>
      );
    }
    return false;
  };

  return (
    historikkinnslagDeler
      // @ts-expect-error ts-migrate(2362) FIXME: The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
      .sort((a, b) => !a.skjermlenke - !b.skjermlenke)
      .map((historikkinnslagDel, historikkinnslagDelIndex) => (
        <div key={
          `historikkinnslagDel${historikkinnslagDelIndex}` // eslint-disable-line react/no-array-index-key
        }
        >
          <div>
            {historikkinnslagDel.skjermlenke
            && (
              <Element>
                <NavLink
                  to={createLocationForSkjermlenke(behandlingLocation, historikkinnslagDel.skjermlenke.kode)}
                >
                  {getKodeverknavn(historikkinnslagDel.skjermlenke)}
                </NavLink>
              </Element>
            )}

            {historikkinnslagDel.hendelse
            && <Element>{findHendelseText(historikkinnslagDel.hendelse, getKodeverknavn)}</Element>}

            {historikkinnslagDel.resultat
            && <Element>{findResultatText(historikkinnslagDel.resultat, intl)}</Element>}

            {historikkinnslagDel.endredeFelter && historikkinnslagDel.endredeFelter
              .map((endretFelt, i) => <div key={`endredeFelter${i + 1}`}>{formatChangedField(endretFelt)}</div>)}

            {historikkinnslagDel.opplysninger && historikkinnslagDel.opplysninger
              .map((opplysning) => (
                <FormattedMessage
                  id={findIdForOpplysningCode(opplysning)}
                  values={{
                    antallBarn: opplysning.tilVerdi,
                    b: (chunks) => <b>{chunks}</b>,
                  }}
                />
              ))}
            {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'tema' does not exist on type 'historikki... Remove this comment to see the full error message */}
            {!!historikkinnslagDel.tema && historikkinnslagDel.tema.navnVerdi !== undefined
            && (
            <Normaltekst>
              (
              {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'tema' does not exist on type 'historikki... Remove this comment to see the full error message */}
              {historikkinnslagDel.tema.navnVerdi}
              )
            </Normaltekst>
            )}
            {historikkinnslagDel.aarsak && <Normaltekst>{getKodeverknavn(historikkinnslagDel.aarsak)}</Normaltekst>}
            {/* @ts-expect-error ts-migrate(2322) FIXME: Type '{ kode?: string; kodeverk?: string; }' is no... Remove this comment to see the full error message */}
            {historikkinnslagDel.begrunnelse && <BubbleText bodyText={(historikkinnslagDel.begrunnelse)} className="snakkeboble-panel__tekst" />}
            {/* @ts-expect-error ts-migrate(2322) FIXME: Property 'className' does not exist on type 'Intri... Remove this comment to see the full error message */}
            {historikkinnslagDel.begrunnelseFritekst && <BubbleText bodyText={historikkinnslagDel.begrunnelseFritekst} className="snakkeboble-panel__tekst" />}
            <div>
              {dokumentLinks && dokumentLinks.map((dokumentLenke) => (
                <HistorikkDokumentLenke
                  // @ts-expect-error ts-migrate(2339) FIXME: Property 'tag' does not exist on type '{}'.
                  key={`${dokumentLenke.tag}@${dokumentLenke.url}`}
                  // @ts-expect-error ts-migrate(2322) FIXME: Property 'dokumentLenke' does not exist on type 'I... Remove this comment to see the full error message
                  dokumentLenke={dokumentLenke}
                  saksNr={saksNr}
                />
              ))}
            </div>
          </div>
        </div>

      )));
};

// @ts-expect-error ts-migrate(2769) FIXME: Type '({ historikkinnslagDeler, behandlingLocation... Remove this comment to see the full error message
export default injectIntl(HistorikkMalType7);

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import { NavLink } from 'react-router-dom';
import { Element } from 'nav-frontend-typografi';

import historikkinnslagType from '../../kodeverk/historikkinnslagType';
import historikkEndretFeltTypeCodes from '../../kodeverk/historikkEndretFeltTypeCodes';
import historikkOpplysningTypeCodes from '../../kodeverk/historikkOpplysningTypeCodes';
import { findEndretFeltNavn, findEndretFeltVerdi } from './felles/historikkUtils';
import HistorikkDokumentLenke from './felles/HistorikkDokumentLenke';
import BubbleText from './felles/bubbleText';
import historikkinnslagDelPropType from '../../propTypes/historikkinnslagDelPropType';

const scrollUp = () => {
  window.scroll(0, 0);
};

const HistorikkMalType10 = ({
  historikkinnslagDeler, behandlingLocation, dokumentLinks, intl, originType, saksNr, getKodeverknavn, createLocationForSkjermlenke,
}) => {
  const historikkFromToValues = (endretFelt, fieldName) => {
    const fromValue = findEndretFeltVerdi(endretFelt, endretFelt.fraVerdi, intl);
    const toValue = findEndretFeltVerdi(endretFelt, endretFelt.tilVerdi, intl);
    let messageId = fromValue ? 'Historikk.Template.10.ChangedFromTo' : 'Historikk.Template.10.FieldSetTo';
    if ((endretFelt.endretFeltNavn.kode === historikkEndretFeltTypeCodes.UTTAK_PROSENT_UTBETALING.kode) && fromValue) {
      messageId = 'Historikk.Template.10.ChangedFromToProsentUtbetaling';
    } else if (endretFelt.endretFeltNavn.kode === historikkEndretFeltTypeCodes.UTTAK_PROSENT_UTBETALING.kode) {
      messageId = 'Historikk.Template.10.ChangedFromToProsentUtbetalingFromNothing';
    } else if ((endretFelt.endretFeltNavn.kode === historikkEndretFeltTypeCodes.UTTAK_PERIODE_RESULTAT_TYPE.kode)
      && endretFelt.fraVerdi === 'MANUELL_BEHANDLING') {
      messageId = 'Historikk.Template.10.FieldSetTo';
    } else if (endretFelt.endretFeltNavn.kode === historikkEndretFeltTypeCodes.UTTAK_PERIODE_RESULTAT_ÅRSAK.kode
      || endretFelt.endretFeltNavn.kode === historikkEndretFeltTypeCodes.UTTAK_GRADERING_AVSLAG_ÅRSAK.kode) {
      if (endretFelt.tilVerdi === '-') {
        return '';
      }
      if (endretFelt.fraVerdi === '-') {
        messageId = 'Historikk.Template.10.FieldSetTo';
      }
    } else if (endretFelt.endretFeltNavn.kode === historikkEndretFeltTypeCodes.UTTAK_STØNADSKONTOTYPE.kode && endretFelt.fraVerdi === '-') {
      messageId = 'Historikk.Template.10.FieldSetTo';
    }
    return (
      <div>
        <FormattedMessage
          id={messageId}
          values={{
            fieldName,
            fromValue,
            toValue,
            b: (chunks) => <b>{chunks}</b>,
          }}
        />
      </div>
    );
  };

  const formatChangedField = (endretFelt) => {
    const fieldName = findEndretFeltNavn(endretFelt, intl);
    if (endretFelt.endretFeltNavn.kode === historikkEndretFeltTypeCodes.UTTAK_TREKKDAGER.kode) {
      const fromValueWeeks = Math.floor(endretFelt.fraVerdi / 5);
      const fromValueDays = (endretFelt.fraVerdi % 1 === 0) ? endretFelt.fraVerdi % 5 : (endretFelt.fraVerdi % 5).toFixed(1);
      const toValueWeeks = Math.floor(endretFelt.tilVerdi / 5);
      const toValueDays = (endretFelt.tilVerdi % 1 === 0) ? endretFelt.tilVerdi % 5 : (endretFelt.tilVerdi % 5).toFixed(1);

      return (
        <div>
          <FormattedMessage
            id="Historikk.Template.10.ChangedFromToTrekkdager"
            values={{
              fieldName,
              fromValueWeeks,
              fromValueDays,
              toValueWeeks,
              toValueDays,
              b: (chunks) => <b>{chunks}</b>,
            }}
          />
        </div>
      );
    }
    return historikkFromToValues(endretFelt, fieldName);
  };

  const sortArray = ((endredeFelter) => {
    if (endredeFelter.length > 1) {
      const resultatFelt = endredeFelter.filter((e) => e.endretFeltNavn.kode === 'UTTAK_PERIODE_RESULTAT_TYPE');
      if (resultatFelt.length > 0) {
        const andreFelt = endredeFelter.filter((e) => e.endretFeltNavn.kode !== 'UTTAK_PERIODE_RESULTAT_TYPE');
        return andreFelt.concat(resultatFelt);
      }
    }
    return endredeFelter;
  });

  const finnFomOpplysning = (opplysninger) => {
    const [found] = opplysninger.filter((o) => o.opplysningType.kode === historikkOpplysningTypeCodes.UTTAK_PERIODE_FOM.kode);
    return found.tilVerdi;
  };

  const finnTomOpplysning = (opplysninger) => {
    const [found] = opplysninger.filter((o) => o.opplysningType.kode === historikkOpplysningTypeCodes.UTTAK_PERIODE_TOM.kode);
    return found.tilVerdi;
  };

  return (
    historikkinnslagDeler.map((historikkinnslagDel, historikkinnslagDelIndex) => (
      <div key={
        `historikkinnslagDel${historikkinnslagDelIndex}` // eslint-disable-line react/no-array-index-key
      }
      >
        {historikkinnslagDel.skjermlenke
        && (
        <Element>
          <NavLink
            to={createLocationForSkjermlenke(behandlingLocation, historikkinnslagDel.skjermlenke.kode)}
            onClick={scrollUp}
          >
            {getKodeverknavn(historikkinnslagDeler[0].skjermlenke)}
          </NavLink>
        </Element>
        )}

        {historikkinnslagDel.opplysninger && originType.kode === historikkinnslagType.OVST_UTTAK
        && (
        <FormattedMessage
          id="Historikk.Template.10.OverstyrtVurderingPeriode"
          values={{
            periodeFom: finnFomOpplysning(historikkinnslagDel.opplysninger),
            periodeTom: finnTomOpplysning(historikkinnslagDel.opplysninger),
            b: (chunks) => <b>{chunks}</b>,
          }}
        />
        )}

        {historikkinnslagDel.opplysninger && originType.kode === historikkinnslagType.FASTSATT_UTTAK
        && (
        <FormattedMessage
          id="Historikk.Template.10.ManuellVurderingPeriode"
          values={{
            periodeFom: finnFomOpplysning(historikkinnslagDel.opplysninger),
            periodeTom: finnTomOpplysning(historikkinnslagDel.opplysninger),
            b: (chunks) => <b>{chunks}</b>,
          }}
        />
        )}

        {historikkinnslagDel.endredeFelter && sortArray(historikkinnslagDel.endredeFelter)
          .map((endretFelt, i) => <div key={`endredeFelter${i + 1}`}>{formatChangedField(endretFelt)}</div>)}

        {historikkinnslagDel.begrunnelse && (
        <BubbleText
          bodyText={historikkinnslagDel.begrunnelse}
          className="snakkeboble-panel__tekst"
        />
        )}

        <div>
          {dokumentLinks && dokumentLinks.map((dokumentLenke) => (
            <HistorikkDokumentLenke
              key={`${dokumentLenke.tag}@${dokumentLenke.url}`}
              dokumentLenke={dokumentLenke}
              saksNr={saksNr}
            />
          ))}
        </div>
      </div>
    )));
};

HistorikkMalType10.propTypes = {
  historikkinnslagDeler: PropTypes.arrayOf(historikkinnslagDelPropType).isRequired,
  behandlingLocation: PropTypes.shape().isRequired,
  dokumentLinks: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  intl: PropTypes.shape().isRequired,
  originType: PropTypes.shape().isRequired,
  saksNr: PropTypes.number.isRequired,
  getKodeverknavn: PropTypes.func.isRequired,
  createLocationForSkjermlenke: PropTypes.func.isRequired,
};

export default injectIntl(HistorikkMalType10);

import React, { ReactNode, useCallback } from 'react';
import { FormattedMessage, useIntl, IntlShape } from 'react-intl';

import { HistorikkinnslagDel, HistorikkinnslagEndretFelt } from '@navikt/fp-types';

import historikkinnslagType from '../../kodeverk/historikkinnslagType';
import historikkEndretFeltTypeCodes from '../../kodeverk/historikkEndretFeltTypeCodes';
import historikkOpplysningTypeCodes from '../../kodeverk/historikkOpplysningTypeCodes';
import { findEndretFeltNavn, findEndretFeltVerdi } from './felles/historikkUtils';
import HistorikkDokumentLenke from './felles/HistorikkDokumentLenke';
import Skjermlenke from './felles/Skjermlenke';
import BubbleText from './felles/bubbleText';
import HistorikkMal from '../HistorikkMalTsType';

const historikkFromToValues = (
  endretFelt: HistorikkinnslagEndretFelt,
  fieldName: string,
  intl: IntlShape,
): ReactNode => {
  const fromValue = findEndretFeltVerdi(endretFelt, endretFelt.fraVerdi, intl);
  const toValue = findEndretFeltVerdi(endretFelt, endretFelt.tilVerdi, intl);
  let messageId = fromValue ? 'Historikk.Template.10.ChangedFromTo' : 'Historikk.Template.10.FieldSetTo';
  if (endretFelt.endretFeltNavn === historikkEndretFeltTypeCodes.UTTAK_PROSENT_UTBETALING.kode && fromValue) {
    messageId = 'Historikk.Template.10.ChangedFromToProsentUtbetaling';
  } else if (endretFelt.endretFeltNavn === historikkEndretFeltTypeCodes.UTTAK_PROSENT_UTBETALING.kode) {
    messageId = 'Historikk.Template.10.ChangedFromToProsentUtbetalingFromNothing';
  } else if (
    endretFelt.endretFeltNavn === historikkEndretFeltTypeCodes.UTTAK_PERIODE_RESULTAT_TYPE.kode &&
    endretFelt.fraVerdi === 'MANUELL_BEHANDLING'
  ) {
    messageId = 'Historikk.Template.10.FieldSetTo';
  } else if (
    endretFelt.endretFeltNavn === historikkEndretFeltTypeCodes.UTTAK_PERIODE_RESULTAT_ÅRSAK.kode ||
    endretFelt.endretFeltNavn === historikkEndretFeltTypeCodes.UTTAK_GRADERING_AVSLAG_ÅRSAK.kode
  ) {
    if (endretFelt.tilVerdi === '-') {
      return '';
    }
    if (endretFelt.fraVerdi === '-') {
      messageId = 'Historikk.Template.10.FieldSetTo';
    }
  } else if (
    endretFelt.endretFeltNavn === historikkEndretFeltTypeCodes.UTTAK_STØNADSKONTOTYPE.kode &&
    endretFelt.fraVerdi === '-'
  ) {
    messageId = 'Historikk.Template.10.FieldSetTo';
  }
  return (
    <FormattedMessage
      id={messageId}
      values={{
        fieldName,
        fromValue,
        toValue,
        b: (chunks: any) => <b>{chunks}</b>,
        br: <br />,
      }}
    />
  );
};

const formatChangedField = (endretFelt: HistorikkinnslagEndretFelt, intl: IntlShape): ReactNode => {
  const fieldName = findEndretFeltNavn(endretFelt, intl);
  if (
    endretFelt.endretFeltNavn === historikkEndretFeltTypeCodes.UTTAK_TREKKDAGER.kode &&
    typeof endretFelt.fraVerdi === 'number' &&
    typeof endretFelt.tilVerdi === 'number'
  ) {
    const fromValueWeeks = Math.floor(endretFelt.fraVerdi / 5);
    const fromValueDays =
      endretFelt.fraVerdi % 1 === 0 ? endretFelt.fraVerdi % 5 : (endretFelt.fraVerdi % 5).toFixed(1);
    const toValueWeeks = Math.floor(endretFelt.tilVerdi / 5);
    const toValueDays = endretFelt.tilVerdi % 1 === 0 ? endretFelt.tilVerdi % 5 : (endretFelt.tilVerdi % 5).toFixed(1);

    return (
      <FormattedMessage
        id="Historikk.Template.10.ChangedFromToTrekkdager"
        values={{
          fieldName,
          fromValueWeeks,
          fromValueDays,
          toValueWeeks,
          toValueDays,
          b: (chunks: any) => <b>{chunks}</b>,
        }}
      />
    );
  }
  return historikkFromToValues(endretFelt, fieldName, intl);
};

const finnFomOpplysning = (opplysninger: HistorikkinnslagDel['opplysninger']): string => {
  const [found] = opplysninger.filter(o => o.opplysningType === historikkOpplysningTypeCodes.UTTAK_PERIODE_FOM.kode);
  return found.tilVerdi || '';
};

const finnTomOpplysning = (opplysninger: HistorikkinnslagDel['opplysninger']): string => {
  const [found] = opplysninger.filter(o => o.opplysningType === historikkOpplysningTypeCodes.UTTAK_PERIODE_TOM.kode);
  return found.tilVerdi || '';
};

const sortArray = (endredeFelter: HistorikkinnslagEndretFelt[]): HistorikkinnslagEndretFelt[] => {
  if (endredeFelter.length > 1) {
    const resultatFelt = endredeFelter.filter(e => e.endretFeltNavn === 'UTTAK_PERIODE_RESULTAT_TYPE');
    if (resultatFelt.length > 0) {
      const andreFelt = endredeFelter.filter(e => e.endretFeltNavn !== 'UTTAK_PERIODE_RESULTAT_TYPE');
      return andreFelt.concat(resultatFelt);
    }
  }
  return endredeFelter;
};

/**
 * Mal for Historikk
 */
const HistorikkMalType10 = ({
  historikkinnslag,
  behandlingLocation,
  getKodeverknavn,
  createLocationForSkjermlenke,
  saksnummer,
}: HistorikkMal) => {
  const intl = useIntl();
  const { historikkinnslagDeler, dokumentLinks, type: originType } = historikkinnslag;

  const bTag = useCallback((...chunks: any) => <b>{chunks}</b>, []);

  return (
    <>
      {historikkinnslagDeler.map((historikkinnslagDel, historikkinnslagDelIndex) => (
        <div key={`historikkinnslagDel${historikkinnslagDelIndex}`}>
          <Skjermlenke
            skjermlenke={historikkinnslagDel.skjermlenke}
            behandlingLocation={behandlingLocation}
            getKodeverknavn={getKodeverknavn}
            scrollUpOnClick
            createLocationForSkjermlenke={createLocationForSkjermlenke}
          />

          {historikkinnslagDel.opplysninger && originType === historikkinnslagType.OVST_UTTAK && (
            <FormattedMessage
              id="Historikk.Template.10.OverstyrtVurderingPeriode"
              values={{
                periodeFom: finnFomOpplysning(historikkinnslagDel.opplysninger),
                periodeTom: finnTomOpplysning(historikkinnslagDel.opplysninger),
                b: bTag,
              }}
            />
          )}

          {historikkinnslagDel.opplysninger && originType === historikkinnslagType.FASTSATT_UTTAK && (
            <FormattedMessage
              id="Historikk.Template.10.ManuellVurderingPeriode"
              values={{
                periodeFom: finnFomOpplysning(historikkinnslagDel.opplysninger),
                periodeTom: finnTomOpplysning(historikkinnslagDel.opplysninger),
                b: bTag,
              }}
            />
          )}

          {historikkinnslagDel.endredeFelter &&
            sortArray(historikkinnslagDel.endredeFelter).map((endretFelt, i) => (
              <div key={`endredeFelter${i + 1}`}>{formatChangedField(endretFelt, intl)}</div>
            ))}

          {historikkinnslagDel.begrunnelseFritekst && <BubbleText bodyText={historikkinnslagDel.begrunnelseFritekst} />}

          <div>
            {dokumentLinks &&
              dokumentLinks.map(dokumentLenke => (
                <HistorikkDokumentLenke
                  key={`${dokumentLenke.tag}@${dokumentLenke.url}`}
                  dokumentLenke={dokumentLenke}
                  saksnummer={saksnummer}
                />
              ))}
          </div>
        </div>
      ))}
    </>
  );
};

HistorikkMalType10.displayName = 'HistorikkMalType10';

export default HistorikkMalType10;

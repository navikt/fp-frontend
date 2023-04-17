import React, { FunctionComponent, ReactNode, useCallback } from 'react';
import { FormattedMessage, useIntl, IntlShape } from 'react-intl';
import { BodyShort } from '@navikt/ds-react';

import { HistorikkinnslagEndretFelt } from '@navikt/fp-types';

import {
  findEndretFeltNavn,
  findEndretFeltVerdi,
  findHendelseText,
  findIdForOpplysningCode,
  findResultatText,
} from './felles/historikkUtils';
import HistorikkDokumentLenke from './felles/HistorikkDokumentLenke';
import Skjermlenke from './felles/Skjermlenke';
import BubbleText from './felles/bubbleText';
import HistorikkMal from '../HistorikkMalTsType';

const formatChangedField = (endretFelt: HistorikkinnslagEndretFelt, intl: IntlShape): ReactNode => {
  const fieldName = findEndretFeltNavn(endretFelt, intl);
  const fromValue = findEndretFeltVerdi(endretFelt, endretFelt.fraVerdi, intl);
  const toValue = findEndretFeltVerdi(endretFelt, endretFelt.tilVerdi, intl);

  if (endretFelt.fraVerdi !== null) {
    return (
      <FormattedMessage
        id="Historikk.Template.8.ChangedFromTo"
        values={{
          fieldName,
          fromValue,
          toValue,
          b: (chunks: any) => <b>{chunks}</b>,
        }}
      />
    );
  }
  return (
    <FormattedMessage
      id="Historikk.Template.8.LagtTil"
      values={{
        fieldName,
        value: toValue,
        b: (chunks: any) => <b>{chunks}</b>,
      }}
    />
  );
};

const HistorikkMalType8: FunctionComponent<HistorikkMal> = ({
  historikkinnslag,
  behandlingLocation,
  getKodeverknavn,
  createLocationForSkjermlenke,
  saksnummer,
}) => {
  const intl = useIntl();
  const { historikkinnslagDeler, dokumentLinks } = historikkinnslag;

  const bTag = useCallback((...chunks: any) => <b>{chunks}</b>, []);

  return (
    <>
      {historikkinnslagDeler.map((historikkinnslagDel, historikkinnslagDelIndex) => (
        <div
          key={
            `historikkinnslagDel${historikkinnslagDelIndex}` // eslint-disable-line react/no-array-index-key
          }
        >
          <Skjermlenke
            skjermlenke={historikkinnslagDel.skjermlenke}
            behandlingLocation={behandlingLocation}
            getKodeverknavn={getKodeverknavn}
            scrollUpOnClick
            createLocationForSkjermlenke={createLocationForSkjermlenke}
          />

          {historikkinnslagDel.hendelse && (
            <BodyShort size="small">{findHendelseText(historikkinnslagDel.hendelse, getKodeverknavn)}</BodyShort>
          )}

          {historikkinnslagDel.resultat && (
            <BodyShort size="small">{findResultatText(historikkinnslagDel.resultat, intl)}</BodyShort>
          )}

          {historikkinnslagDel.endredeFelter &&
            historikkinnslagDel.endredeFelter.map((endretFelt, i) => (
              <div key={`endredeFelter${i + 1}`}>{formatChangedField(endretFelt, intl)}</div>
            ))}

          {historikkinnslagDel.opplysninger &&
            historikkinnslagDel.opplysninger.map(opplysning => (
              <FormattedMessage
                key={findIdForOpplysningCode(opplysning)}
                id={findIdForOpplysningCode(opplysning)}
                values={{ antallBarn: opplysning.tilVerdi, b: bTag }}
              />
            ))}

          {historikkinnslagDel.årsaktekst && <BodyShort size="small">{historikkinnslagDel.årsaktekst}</BodyShort>}
          {historikkinnslagDel.begrunnelsetekst && <BubbleText bodyText={historikkinnslagDel.begrunnelsetekst} />}
          {historikkinnslagDel.begrunnelseFritekst && <BubbleText bodyText={historikkinnslagDel.begrunnelseFritekst} />}
          {dokumentLinks &&
            dokumentLinks.map(dokumentLenke => (
              <HistorikkDokumentLenke
                key={`${dokumentLenke.tag}@${dokumentLenke.url}`}
                dokumentLenke={dokumentLenke}
                saksnummer={saksnummer}
              />
            ))}
        </div>
      ))}
    </>
  );
};

export default HistorikkMalType8;

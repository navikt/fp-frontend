import React, { FunctionComponent, ReactNode } from 'react';
import { FormattedMessage, useIntl, IntlShape } from 'react-intl';
import { BodyShort } from '@navikt/ds-react';

import { HistorikkinnslagEndretFelt } from '@navikt/fp-types';

import {
  findEndretFeltNavn, findEndretFeltVerdi, findHendelseText, findIdForOpplysningCode, findResultatText,
} from './felles/historikkUtils';
import BubbleText from './felles/bubbleText';
import HistorikkDokumentLenke from './felles/HistorikkDokumentLenke';
import Skjermlenke from './felles/Skjermlenke';
import HistorikkMal from '../HistorikkMalTsType';

const formatChangedField = (endretFelt: HistorikkinnslagEndretFelt, intl: IntlShape): ReactNode => {
  const fieldName = findEndretFeltNavn(endretFelt, intl);
  const sub1 = fieldName.substring(0, fieldName.lastIndexOf(';'));
  const sub2 = fieldName.substring(fieldName.lastIndexOf(';') + 1);
  const fromValue = findEndretFeltVerdi(endretFelt, endretFelt.fraVerdi, intl);
  const toValue = findEndretFeltVerdi(endretFelt, endretFelt.tilVerdi, intl);

  if (endretFelt.fraVerdi !== null) {
    return (
      <FormattedMessage
        id="Historikk.Template.7.ChangedFromTo"
        values={{
          sub1,
          sub2,
          fromValue,
          toValue,
          b: (chunks: any) => <b>{chunks}</b>,
        }}
      />
    );
  }
  return false;
};

const HistorikkMalType7: FunctionComponent<HistorikkMal> = ({
  historikkinnslag,
  behandlingLocation,
  getKodeverknavn,
  createLocationForSkjermlenke,
  saksnummer,
}) => {
  const intl = useIntl();
  const { historikkinnslagDeler, dokumentLinks } = historikkinnslag;

  return (
    <>
      {historikkinnslagDeler
        .map((historikkinnslagDel, historikkinnslagDelIndex) => (
          <div key={
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

            {historikkinnslagDel.hendelse && <BodyShort size="small">{findHendelseText(historikkinnslagDel.hendelse, getKodeverknavn)}</BodyShort>}

            {historikkinnslagDel.resultat && <BodyShort size="small">{findResultatText(historikkinnslagDel.resultat, intl)}</BodyShort>}

            {historikkinnslagDel.endredeFelter && historikkinnslagDel.endredeFelter
              .map((endretFelt, i) => <div key={`endredeFelter${i + 1}`}>{formatChangedField(endretFelt, intl)}</div>)}

            {historikkinnslagDel.opplysninger && historikkinnslagDel.opplysninger
              .map((opplysning) => (
                <FormattedMessage
                  id={findIdForOpplysningCode(opplysning)}
                  values={{
                    antallBarn: opplysning.tilVerdi,
                    b: (chunks: any) => <b>{chunks}</b>,
                  }}
                />
              ))}
            {!!historikkinnslagDel.tema && historikkinnslagDel.tema.navnVerdi !== undefined && (
            <BodyShort size="small">
              (
              {historikkinnslagDel.tema.navnVerdi}
              )
            </BodyShort>
            )}
            {historikkinnslagDel.årsaktekst && <BodyShort size="small">{historikkinnslagDel.årsaktekst}</BodyShort>}
            {historikkinnslagDel.begrunnelsetekst && <BubbleText bodyText={historikkinnslagDel.begrunnelsetekst} />}
            {historikkinnslagDel.begrunnelseFritekst && <BubbleText bodyText={historikkinnslagDel.begrunnelseFritekst} />}
            {dokumentLinks && dokumentLinks.map((dokumentLenke) => (
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

export default HistorikkMalType7;

import React, { FunctionComponent, ReactNode } from 'react';
import {
  FormattedMessage, injectIntl, IntlShape, WrappedComponentProps,
} from 'react-intl';
import { Element, Normaltekst } from 'nav-frontend-typografi';

import { HistorikkinnslagEndretFelt } from '@fpsak-frontend/types';

import {
  findEndretFeltNavn, findEndretFeltVerdi, findHendelseText, findIdForOpplysningCode, findResultatText,
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

const HistorikkMalType8: FunctionComponent<HistorikkMal & WrappedComponentProps> = ({
  intl,
  historikkinnslag,
  behandlingLocation,
  getKodeverknavn,
  createLocationForSkjermlenke,
  saksnummer,
}) => {
  const { historikkinnslagDeler, dokumentLinks } = historikkinnslag;

  return (
    <>
      {historikkinnslagDeler.map((
        historikkinnslagDel, historikkinnslagDelIndex,
      ) => (
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

          {historikkinnslagDel.hendelse && <Element>{findHendelseText(historikkinnslagDel.hendelse, getKodeverknavn)}</Element>}

          {historikkinnslagDel.resultat && <Element>{findResultatText(historikkinnslagDel.resultat, intl)}</Element>}

          {historikkinnslagDel.endredeFelter && historikkinnslagDel.endredeFelter
            .map((endretFelt, i) => <div key={`endredeFelter${i + 1}`}>{formatChangedField(endretFelt, intl)}</div>)}

          {historikkinnslagDel.opplysninger && historikkinnslagDel.opplysninger.map((opplysning) => (
            <FormattedMessage
              id={findIdForOpplysningCode(opplysning)}
              values={{ antallBarn: opplysning.tilVerdi, b: (chunks: any) => <b>{chunks}</b> }}
            />
          ))}

          {historikkinnslagDel.årsaktekst && <Normaltekst>{historikkinnslagDel.årsaktekst}</Normaltekst>}
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

export default injectIntl(HistorikkMalType8);

import React, { FunctionComponent } from 'react';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import { BodyShort } from '@navikt/ds-react';

import { findHendelseText, findResultatText } from './felles/historikkUtils';
import Skjermlenke from './felles/Skjermlenke';
import HistorikkMal from '../HistorikkMalTsType';

const HistorikkMalType2: FunctionComponent<HistorikkMal & WrappedComponentProps> = ({
  intl,
  historikkinnslag,
  behandlingLocation,
  getKodeverknavn,
  createLocationForSkjermlenke,
}) => {
  const { historikkinnslagDeler } = historikkinnslag;
  return (
    <>
      <Skjermlenke
        skjermlenke={historikkinnslagDeler[0].skjermlenke}
        behandlingLocation={behandlingLocation}
        getKodeverknavn={getKodeverknavn}
        scrollUpOnClick
        createLocationForSkjermlenke={createLocationForSkjermlenke}
      />
      {historikkinnslagDeler[0].resultat && historikkinnslagDeler[0].hendelse && (
        <BodyShort size="small" className="snakkeboble-panel__tekst">
          {`${findHendelseText(historikkinnslagDeler[0].hendelse, getKodeverknavn)}: ${findResultatText(historikkinnslagDeler[0].resultat, intl)}`}
        </BodyShort>
      )}
      {!historikkinnslagDeler[0].resultat && historikkinnslagDeler[0].hendelse && (
        <BodyShort size="small" className="snakkeboble-panel__tekst">{findHendelseText(historikkinnslagDeler[0].hendelse, getKodeverknavn)}</BodyShort>
      )}
    </>
  );
};

export default injectIntl(HistorikkMalType2);

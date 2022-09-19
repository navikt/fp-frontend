import React, { FunctionComponent } from 'react';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import { Label } from '@navikt/ds-react';

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
        <Label size="small" className="snakkeboble-panel__tekst">
          {`${findHendelseText(historikkinnslagDeler[0].hendelse, getKodeverknavn)}: ${findResultatText(historikkinnslagDeler[0].resultat, intl)}`}
        </Label>
      )}
      {!historikkinnslagDeler[0].resultat && historikkinnslagDeler[0].hendelse && (
        <Label size="small" className="snakkeboble-panel__tekst">{findHendelseText(historikkinnslagDeler[0].hendelse, getKodeverknavn)}</Label>
      )}
    </>
  );
};

export default injectIntl(HistorikkMalType2);

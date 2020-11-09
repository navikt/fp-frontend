import React, { FunctionComponent } from 'react';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import { NavLink } from 'react-router-dom';
import { Element } from 'nav-frontend-typografi';

import { findHendelseText, findResultatText } from './felles/historikkUtils';
import HistorikkMal from '../HistorikkMalTsType';

const scrollUp = () => {
  window.scroll(0, 0);
};

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
      {historikkinnslagDeler[0].skjermlenke && (
        <Element className="snakkeboble-panel__tekst">
          <NavLink
            to={createLocationForSkjermlenke(behandlingLocation, historikkinnslagDeler[0].skjermlenke.kode)}
            onClick={scrollUp}
          >
            {getKodeverknavn(historikkinnslagDeler[0].skjermlenke)}
          </NavLink>
        </Element>
      )}
      {historikkinnslagDeler[0].resultat && historikkinnslagDeler[0].hendelse && (
        <Element className="snakkeboble-panel__tekst">
          {`${findHendelseText(historikkinnslagDeler[0].hendelse, getKodeverknavn)}: ${findResultatText(historikkinnslagDeler[0].resultat, intl)}`}
        </Element>
      )}
      {!historikkinnslagDeler[0].resultat && historikkinnslagDeler[0].hendelse && (
        <Element className="snakkeboble-panel__tekst">{findHendelseText(historikkinnslagDeler[0].hendelse, getKodeverknavn)}</Element>
      )}
    </>
  );
};

export default injectIntl(HistorikkMalType2);

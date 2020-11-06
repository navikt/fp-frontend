import React from 'react';
import { injectIntl } from 'react-intl';
import { NavLink } from 'react-router-dom';
import { Element } from 'nav-frontend-typografi';

import historikkinnslagDelPropType from '../../propTypes/historikkinnslagDelPropType';
import { findHendelseText, findResultatText } from './felles/historikkUtils';

const scrollUp = () => {
  window.scroll(0, 0);
};

type HistorikkMalType2Props = {
    historikkinnslagDeler: historikkinnslagDelPropType[];
    behandlingLocation: {};
    getKodeverknavn: (...args: any[]) => any;
    createLocationForSkjermlenke: (...args: any[]) => any;
    intl: {};
};

const HistorikkMalType2 = ({
  historikkinnslagDeler, behandlingLocation, intl, getKodeverknavn, createLocationForSkjermlenke,
}: HistorikkMalType2Props) => (
  <div>
    {historikkinnslagDeler[0].skjermlenke
    && (
    <Element className="snakkeboble-panel__tekst">
      <NavLink
        to={createLocationForSkjermlenke(behandlingLocation, historikkinnslagDeler[0].skjermlenke.kode)}
        onClick={scrollUp}
      >
        {getKodeverknavn(historikkinnslagDeler[0].skjermlenke)}
      </NavLink>
    </Element>
    )}
    {historikkinnslagDeler[0].resultat && historikkinnslagDeler[0].hendelse
      && (
      <Element className="snakkeboble-panel__tekst">
        {`${findHendelseText(historikkinnslagDeler[0].hendelse, getKodeverknavn)}: ${findResultatText(historikkinnslagDeler[0].resultat, intl)}`}
      </Element>
      )}
    {!historikkinnslagDeler[0].resultat && historikkinnslagDeler[0].hendelse
      && <Element className="snakkeboble-panel__tekst">{findHendelseText(historikkinnslagDeler[0].hendelse, getKodeverknavn)}</Element>}
  </div>
);

// @ts-expect-error ts-migrate(2769) FIXME: Type '({ historikkinnslagDeler, behandlingLocation... Remove this comment to see the full error message
export default injectIntl(HistorikkMalType2);

/*

URL:
 http://[HOSTNAME]<:PORT>/#[/fagsak/FAGSAK_ID]</behandling/[BEHANDLING_ID]></punkt/[PUNKT_NAVN]></fakta/[FAKTA_NAVN]></SIDOPANEL_NAVN>

 PUNKT_NAVN: default | beregningsresultat | vedtak | vilkår-type navn uten norske tegn
 FAKTA_NAVN: default | tilleggsopplysninger | vilkår-type navn uten norske tegn ("-" er separator hvis flere)
 SIDOPANEL_NAVN: historikk, meldinger, etc

 */

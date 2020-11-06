import React from 'react';
import { Element } from 'nav-frontend-typografi';

import BubbleText from './felles/bubbleText';
import { findHendelseText } from './felles/historikkUtils';
import HistorikkDokumentLenke from './felles/HistorikkDokumentLenke';
import historikkinnslagDelPropType from '../../propTypes/historikkinnslagDelPropType';

type Props = {
    historikkinnslagDeler: historikkinnslagDelPropType[];
    dokumentLinks: {}[];
    saksNr: number;
    getKodeverknavn: (...args: any[]) => any;
};

const HistorikkMalType1 = ({
  historikkinnslagDeler, dokumentLinks, saksNr, getKodeverknavn,
}: Props) => (
  <div>
    {historikkinnslagDeler[0] && historikkinnslagDeler[0].hendelse
      && <Element className="snakkeboble-panel__tekst">{findHendelseText(historikkinnslagDeler[0].hendelse, getKodeverknavn)}</Element>}

    {historikkinnslagDeler[0].begrunnelse && (
      <BubbleText
        bodyText={getKodeverknavn(historikkinnslagDeler[0].begrunnelse)}
        cutOffLength={70}
        // @ts-expect-error ts-migrate(2322) FIXME: Property 'className' does not exist on type 'Intri... Remove this comment to see the full error message
        className="snakkeboble-panel__tekst"
      />
    )}
    {historikkinnslagDeler[0].begrunnelseFritekst
    // @ts-expect-error ts-migrate(2322) FIXME: Property 'className' does not exist on type 'Intri... Remove this comment to see the full error message
    && <BubbleText bodyText={historikkinnslagDeler[0].begrunnelseFritekst} className="snakkeboble-panel__tekst" />}
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
);

export default HistorikkMalType1;

/*
 https://confluence.adeo.no/display/MODNAV/OMR-13+SF4+Sakshistorikk+-+UX+og+grafisk+design

 Fem design patterns:

 +----------------------------+
 | Type 1                     |
 | BEH_VENT                   |
 | BEH_GJEN                   |
 | KØET_BEH_GJEN              |
 | BEH_STARTET                |
 | VEDLEGG_MOTTATT            |
 | BREV_SENT                  |
 | BREV_BESTILT               |
 | REGISTRER_PAPIRSØK         |
 | MANGELFULL_SØKNAD          |
 +----------------------------+
 <tidspunkt> // <rolle> <id>
 <hendelse>
 <begrunnelsestekst>
 <dokumentLinker>

 +----------------------------+
 | Type 2                     |
 | FORSLAG_VEDTAK             |
 | FORSLAG_VEDTAK_UTEN_TOTRINN|
 | VEDTAK_FATTET              |
 | VEDTAK_FATTET_AUTOMATISK   |
 | OVERSTYRT (hvis beslutter) |
 | REGISTRER_OM_VERGE         |
 +----------------------------+
 <tidspunkt> // <rolle> <id>
 <hendelse>: <resultat>
 <skjermlinke>

 +----------------------------+
 | Type 3                     |
 | SAK_RETUR                  |
 +----------------------------+
 <tidspunkt> // <rolle> <id>
 <hendelse>
 <begrunnelsestekst>
 <dokumentLinker>

 +----------------------------+
 | Type 4                     |
 | AVBRUTT_BEH                |
 | OVERSTYRT (hvis saksbeh.)  |
 +----------------------------+
 <tidspunkt> // <rolle> <id>
 <hendelse>
 <årsak>
 <begrunnelsestekst>

 +----------------------------+
 | Type 5                     |
 | FAKTA_ENDRET               |
 +----------------------------+
 <tidspunkt> // <rolle> <id>
 <skjermlinke>
 <feltnavn> er endret <fra-verdi> til <til-verdi>
 <radiogruppe> er satt til <verdi>
 <begrunnelsestekst>
 <dokumentLinker>

 +----------------------------+
 | Type 6                     |
 | NY_INFO_FRA_TPS            |
 +----------------------------+
 Ikke definert

 +----------------------------+
 | Type 7                     |
 | OVERSTYRT                  |
 +----------------------------+
 <tidspunkt> // <rolle> <id>
 <skjermlinke>
 Overstyrt <vurdering/beregning>: <Utfallet/beløpet> er endret fra <fra-verdi> til <til-verdi>
 <begrunnelsestekst>

+----------------------------+
 | Type 8                     |
 | ???                        |
 +----------------------------+
 Ikke definiert

 */

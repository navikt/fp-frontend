import React from 'react';
import { Element, Normaltekst } from 'nav-frontend-typografi';

import historikkinnslagDelPropType from '../../propTypes/historikkinnslagDelPropType';
import { findHendelseText } from './felles/historikkUtils';
import BubbleText from './felles/bubbleText';

type Props = {
    historikkinnslagDeler: historikkinnslagDelPropType[];
    getKodeverknavn: (...args: any[]) => any;
};

const HistorikkMalType4 = ({ historikkinnslagDeler, getKodeverknavn }: Props) => (
  <div>
    {
      historikkinnslagDeler.map((del, delIndex) => (
        <div key={
          `del${delIndex}` // eslint-disable-line react/no-array-index-key
        }
        >
          <Element className="snakkeboble-panel__tekst">{findHendelseText(del.hendelse, getKodeverknavn)}</Element>
          {del.aarsak && <Normaltekst>{getKodeverknavn(del.aarsak)}</Normaltekst>}
          {/* @ts-expect-error ts-migrate(2322) FIXME: Property 'className' does not exist on type 'Intri... Remove this comment to see the full error message */}
          {del.begrunnelse && <BubbleText bodyText={getKodeverknavn(del.begrunnelse)} className="snakkeboble-panel__tekst" />}
          {/* @ts-expect-error ts-migrate(2322) FIXME: Property 'className' does not exist on type 'Intri... Remove this comment to see the full error message */}
          {del.begrunnelseFritekst && <BubbleText bodyText={del.begrunnelseFritekst} className="snakkeboble-panel__tekst" />}
        </div>
      ))
    }
  </div>
);

export default HistorikkMalType4;

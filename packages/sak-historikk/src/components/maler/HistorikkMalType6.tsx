import React from 'react';
import { Element, Normaltekst } from 'nav-frontend-typografi';

import { findHendelseText } from './felles/historikkUtils';
import historikkinnslagDelPropType from '../../propTypes/historikkinnslagDelPropType';

// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module './historikkMalType.less' or it... Remove this comment to see the full error message
import styles from './historikkMalType.less';

type Props = {
    historikkinnslagDeler: historikkinnslagDelPropType[];
    getKodeverknavn: (...args: any[]) => any;
};

const HistorikkMalType6 = ({ historikkinnslagDeler, getKodeverknavn }: Props) => {
  const formaterOpplysning = (opplysning, index) => (
    <div key={`opplysning${index}`}>
      <Normaltekst className={styles.keyValuePair}>
        {getKodeverknavn(opplysning.opplysningType)}
        :
      </Normaltekst>
      &ensp;
      <Element className={styles.keyValuePair}>{opplysning.tilVerdi}</Element>
    </div>
  );

  return (
    <div>
      {
        historikkinnslagDeler.map((del) => (
          // @ts-expect-error ts-migrate(2322) FIXME: Type '{ navn?: { kode?: string; }; verdi?: string;... Remove this comment to see the full error message
          <div key={del.hendelse}>
            <Element className="snakkeboble-panel__tekst">{findHendelseText(del.hendelse, getKodeverknavn)}</Element>
            {del.opplysninger.map(formaterOpplysning)}
          </div>
        ))
      }
    </div>
  );
};

export default HistorikkMalType6;

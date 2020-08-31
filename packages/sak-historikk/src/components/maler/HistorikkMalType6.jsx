import React from 'react';
import PropTypes from 'prop-types';
import { Element, Normaltekst } from 'nav-frontend-typografi';

import { findHendelseText } from './felles/historikkUtils';
import historikkinnslagDelPropType from '../../propTypes/historikkinnslagDelPropType';

import styles from './historikkMalType.less';

const HistorikkMalType6 = ({
  historikkinnslagDeler,
  getKodeverknavn,
}) => {
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
          <div key={del.hendelse}>
            <Element className="snakkeboble-panel__tekst">{findHendelseText(del.hendelse, getKodeverknavn)}</Element>
            {del.opplysninger.map(formaterOpplysning(del.hendelse.kode))}
          </div>
        ))
      }
    </div>
  );
};

HistorikkMalType6.propTypes = {
  historikkinnslagDeler: PropTypes.arrayOf(historikkinnslagDelPropType).isRequired,
  getKodeverknavn: PropTypes.func.isRequired,
};

export default HistorikkMalType6;

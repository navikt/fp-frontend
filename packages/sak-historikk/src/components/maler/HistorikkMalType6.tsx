import React from 'react';
import { BodyShort } from '@navikt/ds-react';

import { HistorikkInnslagOpplysning } from '@navikt/fp-types';
import { KodeverkType } from '@navikt/fp-kodeverk';

import { findHendelseText } from './felles/historikkUtils';
import HistorikkMal from '../HistorikkMalTsType';

import styles from './historikkMalType6.module.css';

const formaterOpplysning = (
  opplysning: HistorikkInnslagOpplysning,
  index: number,
  getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string,
) => (
  <div key={`opplysning${index}`}>
    <BodyShort size="small" className={styles.keyValuePair}>
      {getKodeverknavn(opplysning.opplysningType, KodeverkType.HISTORIKK_OPPLYSNING_TYPE)}:
    </BodyShort>
    &ensp;
    <BodyShort size="small" className={styles.keyValuePair}>
      {opplysning.tilVerdi}
    </BodyShort>
  </div>
);

const HistorikkMalType6 = ({ historikkinnslag, getKodeverknavn }: HistorikkMal) => (
  <>
    {historikkinnslag.historikkinnslagDeler.map(del => (
      <div key={del.hendelse?.navn}>
        <BodyShort size="small" className="snakkeboble-panel__tekst">
          {findHendelseText(del.hendelse, getKodeverknavn)}
        </BodyShort>
        {del.opplysninger.map((opplysning, index) => formaterOpplysning(opplysning, index, getKodeverknavn))}
      </div>
    ))}
  </>
);

HistorikkMalType6.displayName = 'HistorikkMalType6';

export default HistorikkMalType6;

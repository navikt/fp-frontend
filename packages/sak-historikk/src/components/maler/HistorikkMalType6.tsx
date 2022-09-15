import React, { FunctionComponent } from 'react';
import { Label, BodyShort } from '@navikt/ds-react';

import { HistorikkInnslagOpplysning } from '@fpsak-frontend/types';
import KodeverkType from '@fpsak-frontend/kodeverk/src/kodeverkTyper';

import { findHendelseText } from './felles/historikkUtils';
import HistorikkMal from '../HistorikkMalTsType';

import styles from './historikkMalType.less';

const formaterOpplysning = (
  opplysning: HistorikkInnslagOpplysning,
  index: number,
  getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string,
) => (
  <div key={`opplysning${index}`}>
    <BodyShort size="small" className={styles.keyValuePair}>
      {getKodeverknavn(opplysning.opplysningType, KodeverkType.HISTORIKK_OPPLYSNING_TYPE)}
      :
    </BodyShort>
    &ensp;
    <Label size="small" className={styles.keyValuePair}>{opplysning.tilVerdi}</Label>
  </div>
);

const HistorikkMalType6: FunctionComponent<HistorikkMal> = ({
  historikkinnslag,
  getKodeverknavn,
}) => (
  <>
    {historikkinnslag.historikkinnslagDeler.map((del) => (
      <div key={del.hendelse?.navn}>
        <Label size="small" className="snakkeboble-panel__tekst">{findHendelseText(del.hendelse, getKodeverknavn)}</Label>
        {del.opplysninger.map((opplysning, index) => formaterOpplysning(opplysning, index, getKodeverknavn))}
      </div>
    ))}
  </>
);

export default HistorikkMalType6;

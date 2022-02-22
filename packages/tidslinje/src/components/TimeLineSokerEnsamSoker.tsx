import React, { FunctionComponent } from 'react';
import { Row } from 'nav-frontend-grid';
import { Image } from '@navikt/fp-react-components';

import { Kjønnkode } from '@fpsak-frontend/types';
import navBrukerKjonn from '@fpsak-frontend/kodeverk/src/navBrukerKjonn';
import urlMann from '@fpsak-frontend/assets/images/mann.svg';
import urlKvinne from '@fpsak-frontend/assets/images/kvinne.svg';
import { createIntl } from '@fpsak-frontend/utils';

import messages from '../../i18n/nb_NO.json';

import styles from './timeLineSokerEnsamSoker.less';

const intl = createIntl(messages);

const isKvinne = (kode: string): boolean => kode === navBrukerKjonn.KVINNE;

/**
 * TimeLineSoker
 *
 * Presentationskomponent. Viser korrekt ikon for soker/medsoker
 */
const TimeLineSokerEnsamSoker: FunctionComponent<{ hovedsokerKjonnKode: Kjønnkode }> = ({
  hovedsokerKjonnKode,
}) => (
  <div className={styles.timelineSokerContatinerEnsamSoker}>
    <Row>
      <Image
        className={styles.iconMedsoker}
        src={isKvinne(hovedsokerKjonnKode) ? urlKvinne : urlMann}
        alt={intl.formatMessage({ id: 'Person.ImageText' })}
        tooltip={intl.formatMessage({ id: isKvinne(hovedsokerKjonnKode) ? 'Person.Woman' : 'Person.Man' })}
      />
    </Row>
  </div>
);

export default TimeLineSokerEnsamSoker;

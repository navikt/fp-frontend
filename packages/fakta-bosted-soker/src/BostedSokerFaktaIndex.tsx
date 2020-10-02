import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { KodeverkMedNavn, Personopplysninger } from '@fpsak-frontend/types';

import BostedSokerView from './components/BostedSokerView';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  personopplysninger: Personopplysninger;
  sokerTypeTextId?: string;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
}

const BostedSokerFaktaIndex: FunctionComponent<OwnProps> = ({
  personopplysninger,
  sokerTypeTextId,
  alleKodeverk,
}) => (
  <RawIntlProvider value={intl}>
    <BostedSokerView
      personopplysninger={personopplysninger}
      sokerTypeTextId={sokerTypeTextId}
      regionTypes={alleKodeverk[kodeverkTyper.REGION]}
      sivilstandTypes={alleKodeverk[kodeverkTyper.SIVILSTAND_TYPE]}
      personstatusTypes={alleKodeverk[kodeverkTyper.PERSONSTATUS_TYPE]}
    />
  </RawIntlProvider>
);

BostedSokerFaktaIndex.defaultProps = {
  sokerTypeTextId: 'BostedSokerFaktaIndex.Soker',
};

export default BostedSokerFaktaIndex;

import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { ArbeidOgInntektsmelding } from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';

import ArbeidOgInntektFaktaPanel from './components/ArbeidOgInntektFaktaPanel';
import messages from '../i18n/nb_NO.json';

interface OwnProps {
  arbeidOgInntekt: ArbeidOgInntektsmelding;
}

const intl = createIntl(messages);

const ArbeidOgInntektFaktaIndex: FunctionComponent<OwnProps> = ({
  arbeidOgInntekt,
}) => (
  <RawIntlProvider value={intl}>
    <ArbeidOgInntektFaktaPanel
      arbeidOgInntekt={arbeidOgInntekt}
    />
  </RawIntlProvider>
);

export default ArbeidOgInntektFaktaIndex;

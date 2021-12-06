import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Undertittel } from 'nav-frontend-typografi';

import { ArbeidOgInntektsmelding } from '@fpsak-frontend/types';
import { VerticalSpacer } from '@fpsak-frontend/shared-components';

interface OwnProps {
  arbeidOgInntekt: ArbeidOgInntektsmelding;
}

const ArbeidOgInntektFaktaPanel: FunctionComponent<OwnProps> = ({
  arbeidOgInntekt,
}) => (
  <>
    <Undertittel><FormattedMessage id="ArbeidOgInntektFaktaPanel.Overskrift" /></Undertittel>
    <VerticalSpacer eightPx />
    {arbeidOgInntekt}
  </>
);

export default ArbeidOgInntektFaktaPanel;

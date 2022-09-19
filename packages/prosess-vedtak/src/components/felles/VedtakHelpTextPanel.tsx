import React, { FunctionComponent } from 'react';
import {
  FormattedMessage, IntlShape, useIntl,
} from 'react-intl';
import { Alert, BodyShort } from '@navikt/ds-react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { Aksjonspunkt } from '@fpsak-frontend/types';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

const findHelpTexts = (
  intl: IntlShape,
  aksjonspunkter: Aksjonspunkt[],
): string[] => {
  const helpTexts = [];
  if (aksjonspunkter && aksjonspunkter.some((a) => a.definisjon === aksjonspunktCodes.VURDERE_ANNEN_YTELSE)) {
    helpTexts.push(intl.formatMessage({ id: 'VedtakForm.VurderAnnenYtelse' }));
  }
  if (aksjonspunkter && aksjonspunkter.some((a) => a.definisjon === aksjonspunktCodes.VURDERE_DOKUMENT)) {
    helpTexts.push(intl.formatMessage({ id: 'VedtakForm.VurderDokument' }));
  }
  if (aksjonspunkter && aksjonspunkter.some((a) => a.definisjon === aksjonspunktCodes.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST)) {
    helpTexts.push(intl.formatMessage({ id: 'VedtakForm.KontrollerRevurderingsbehandling' }));
  }

  return helpTexts;
};

interface OwnProps {
  isReadOnly: boolean;
  aksjonspunkter: Aksjonspunkt[];
}

const VedtakHelpTextPanel: FunctionComponent<OwnProps> = ({
  isReadOnly,
  aksjonspunkter,
}) => {
  const intl = useIntl();
  const helpTexts = findHelpTexts(intl, aksjonspunkter);
  if (!isReadOnly && helpTexts.length > 0) {
    return (
      <>
        <VerticalSpacer sixteenPx />
        <Alert variant="info" size="small">
          <BodyShort size="small"><FormattedMessage id="VedtakHelpTextPanel.Vurder" /></BodyShort>
          <ul>
            {helpTexts.map((text) => <li key={text}><BodyShort size="small">{text}</BodyShort></li>)}
          </ul>
        </Alert>
      </>
    );
  }
  return null;
};

export default VedtakHelpTextPanel;

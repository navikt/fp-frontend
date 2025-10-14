import { FormattedMessage, type IntlShape, useIntl } from 'react-intl';

import { Alert, BodyShort } from '@navikt/ds-react';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { Aksjonspunkt } from '@navikt/fp-types';

const helpTextMap: Record<string, string> = {
  [AksjonspunktKode.VURDERE_ANNEN_YTELSE_FØR_VEDTAK]: 'VedtakForm.VurderAnnenYtelse',
  [AksjonspunktKode.VURDERE_DOKUMENT_FØR_VEDTAK]: 'VedtakForm.VurderDokument',
  [AksjonspunktKode.VURDERE_INNTEKTSMELDING_FØR_VEDTAK]: 'VedtakForm.VurderInntektsmeldingKlage',
  [AksjonspunktKode.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST]: 'VedtakForm.KontrollerRevurderingsbehandling',
};

interface Props {
  isReadOnly: boolean;
  aksjonspunkterForPanel: Aksjonspunkt[];
}

export const VedtakHelpTextPanel = ({ isReadOnly, aksjonspunkterForPanel }: Props) => {
  const intl = useIntl();
  const helpTexts = findHelpTexts(intl, aksjonspunkterForPanel);
  if (!isReadOnly && helpTexts.length > 0) {
    return (
      <Alert variant="info" size="small">
        <BodyShort size="small">
          <FormattedMessage id="VedtakHelpTextPanel.Vurder" />
        </BodyShort>
        <ul>
          {helpTexts.map(text => (
            <li key={text}>
              <BodyShort size="small">{text}</BodyShort>
            </li>
          ))}
        </ul>
      </Alert>
    );
  }
  return null;
};

const findHelpTexts = (intl: IntlShape, aksjonspunkterForPanel: Aksjonspunkt[]): string[] => {
  return aksjonspunkterForPanel
    .map(a => helpTextMap[a.definisjon])
    .filter(Boolean)
    .map(id => intl.formatMessage({ id }));
};

import { FormattedMessage, type IntlShape, useIntl } from 'react-intl';

import { Alert, BodyShort } from '@navikt/ds-react';

import type { Aksjonspunkt } from '@navikt/fp-types';

const findHelpTexts = (intl: IntlShape, aksjonspunkter: Aksjonspunkt[]): string[] => {
  const helpTexts = [];
  if (aksjonspunkter.some(a => a.definisjon === '5033')) {
    helpTexts.push(intl.formatMessage({ id: 'VedtakForm.VurderAnnenYtelse' }));
  }
  if (aksjonspunkter.some(a => a.definisjon === '5034')) {
    helpTexts.push(intl.formatMessage({ id: 'VedtakForm.VurderDokument' }));
  }
  if (aksjonspunkter.some(a => a.definisjon === '5003')) {
    helpTexts.push(intl.formatMessage({ id: 'VedtakForm.VurderInntektsmeldingKlage' }));
  }
  if (aksjonspunkter.some(a => a.definisjon === '5055')) {
    helpTexts.push(intl.formatMessage({ id: 'VedtakForm.KontrollerRevurderingsbehandling' }));
  }

  return helpTexts;
};

interface Props {
  isReadOnly: boolean;
  aksjonspunkter: Aksjonspunkt[];
}

export const VedtakHelpTextPanel = ({ isReadOnly, aksjonspunkter }: Props) => {
  const intl = useIntl();
  const helpTexts = findHelpTexts(intl, aksjonspunkter);
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

import React, { FunctionComponent, useState, useCallback } from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { AvklarTilleggsopplysningerAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import TilleggsopplysningerFaktaForm from './TilleggsopplysningerFaktaForm';

interface PureOwnProps {
  hasOpenAksjonspunkter: boolean;
  readOnly: boolean;
  behandlingId: number;
  behandlingVersjon: number;
  tilleggsopplysninger?: string;
  submitCallback: (data: AvklarTilleggsopplysningerAp) => Promise<void>;
}

/**
 * TilleggsopplysningerInfoPanel
 *
 * Presentasjonskomponent. Har ansvar for å sette opp Redux Formen for Tilleggsopplysninger.
 */
export const TilleggsopplysningerInfoPanel: FunctionComponent<PureOwnProps> = ({
  hasOpenAksjonspunkter,
  readOnly,
  tilleggsopplysninger = '',
  submitCallback,
}) => {
  const [isSubmitting, setSubmitting] = useState(false);
  const submit = useCallback((evt) => {
    setSubmitting(true);
    submitCallback({ kode: aksjonspunktCodes.TILLEGGSOPPLYSNINGER });
    evt.preventDefault();
  }, []);
  return (
    <form onSubmit={submit}>
      <TilleggsopplysningerFaktaForm
        readOnly={!hasOpenAksjonspunkter || readOnly}
        submitting={isSubmitting}
        tilleggsopplysninger={tilleggsopplysninger}
      />
    </form>
  );
};

export default TilleggsopplysningerInfoPanel;

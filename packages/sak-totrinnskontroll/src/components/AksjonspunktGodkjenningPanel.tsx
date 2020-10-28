import React, { FunctionComponent } from 'react';
import { Normaltekst } from 'nav-frontend-typografi';

import { NavFieldGroup, RadioGroupField, RadioOption } from '@fpsak-frontend/form';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import {
  Kodeverk, KodeverkMedNavn, TotrinnsKlageVurdering, TotrinnskontrollAksjonspunkt,
} from '@fpsak-frontend/types';

import getAksjonspunktText from './ApprovalTextUtils';
import AksjonspunktGodkjenningArsakPanel from './AksjonspunktGodkjenningArsakPanel';

import styles from './aksjonspunktGodkjenningPanel.less';

interface OwnProps {
  aksjonspunkt: TotrinnskontrollAksjonspunkt;
  readOnly: boolean;
  approvalIndex?: number;
  contextIndex?: number;
  currentValue?: TotrinnskontrollAksjonspunkt;
  showBegrunnelse?: boolean;
  klageKA?: boolean;
  isForeldrepengerFagsak: boolean;
  klagebehandlingVurdering?: TotrinnsKlageVurdering,
  behandlingStatus: Kodeverk,
  arbeidsforholdHandlingTyper: KodeverkMedNavn[],
  erTilbakekreving: boolean,
}

/*
 * AksjonspunktGodkjenningPanel
 *
 * Presentasjonskomponent. Holds the radiobuttons for approving or disapproving the decisions of the handler
 */
const AksjonspunktGodkjenningPanel: FunctionComponent<OwnProps> = ({
  aksjonspunkt,
  readOnly,
  currentValue,
  approvalIndex,
  contextIndex,
  showBegrunnelse,
  klageKA,
  isForeldrepengerFagsak,
  klagebehandlingVurdering,
  behandlingStatus,
  arbeidsforholdHandlingTyper,
  erTilbakekreving,
}) => {
  const fieldName = `approvals[${contextIndex}].aksjonspunkter[${approvalIndex}]`;
  const erKlageKA = (klageKA && currentValue && currentValue.totrinnskontrollGodkjent);
  const erAnke = aksjonspunkt.aksjonspunktKode === aksjonspunktCodes.MANUELL_VURDERING_AV_ANKE && currentValue.totrinnskontrollGodkjent === true;
  const showOnlyBegrunnelse = erAnke || erKlageKA ? currentValue.totrinnskontrollGodkjent : showBegrunnelse;
  const showReasons = (erAnke || ((currentValue && currentValue.totrinnskontrollGodkjent === false) || erKlageKA));

  const aksjonspunktText = getAksjonspunktText(isForeldrepengerFagsak, klagebehandlingVurdering, behandlingStatus,
    arbeidsforholdHandlingTyper, erTilbakekreving, aksjonspunkt);

  return (
    <div className={styles.approvalItemContainer}>
      {aksjonspunktText.map((formattedMessage, index) => (
        <div key={aksjonspunkt.aksjonspunktKode.concat('_'.concat(index.toString()))} className={styles.aksjonspunktTextContainer}>
          <Normaltekst>
            {formattedMessage}
          </Normaltekst>
        </div>
      ))}
      <NavFieldGroup>
        <RadioGroupField name={`${fieldName}.totrinnskontrollGodkjent`} bredde="M" readOnly={readOnly}>
          <RadioOption label={{ id: 'ApprovalField.Godkjent' }} value />
          <RadioOption label={{ id: 'ApprovalField.Vurder' }} value={false} />
        </RadioGroupField>
        {showReasons
        && (
        <AksjonspunktGodkjenningArsakPanel
          fieldName={fieldName}
          godkjentHosKA={erKlageKA}
          visKunBegrunnelse={showOnlyBegrunnelse}
        />
        )}
      </NavFieldGroup>
    </div>
  );
};

AksjonspunktGodkjenningPanel.defaultProps = {
  showBegrunnelse: false,
  klageKA: false,
};

export default AksjonspunktGodkjenningPanel;

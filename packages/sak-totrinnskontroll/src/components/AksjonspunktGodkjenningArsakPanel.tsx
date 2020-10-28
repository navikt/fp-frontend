import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Undertekst } from 'nav-frontend-typografi';

import {
  ArrowBox, FlexColumn, FlexContainer, FlexRow,
} from '@fpsak-frontend/shared-components';
import { CheckboxField, NavFieldGroup, TextAreaField } from '@fpsak-frontend/form';
import {
  hasValidText, maxLength, minLength, required,
} from '@fpsak-frontend/utils';

import styles from './aksjonspunktGodkjenningArsakPanel.less';

const minLength3 = minLength(3);
const maxLength2000 = maxLength(2000);

interface OwnProps {
  fieldName: string;
  visKunBegrunnelse: boolean;
  godkjentHosKA: boolean;
}

/*
 * AksjonspunktGodkjenningArsakPanel
 *
 * Presentasjonskomponent. Lar beslutter velge årsaken til valg "vurder på nytt"
 *
 * Eksempel:
 * ```html
 * <AksjonspunktGodkjenningArsakPanel fieldName={fieldName} visKunBegrunnelse={showBegrunnelse} />
 * ```
 */
const AksjonspunktGodkjenningArsakPanel: FunctionComponent<OwnProps> = ({
  fieldName,
  godkjentHosKA,
  visKunBegrunnelse,
}) => (
  <>
    <ArrowBox
      alignOffset={godkjentHosKA ? 1 : 110}
    >
      {!visKunBegrunnelse && (
        <FlexContainer wrap>
          <FlexRow>
            <FlexColumn>
              <Undertekst className="blokk-xs"><FormattedMessage id="AksjonspunktGodkjenningArsakPanel.Arsak" /></Undertekst>
            </FlexColumn>
          </FlexRow>
          <FlexRow>
            <NavFieldGroup className={styles.fullWidth} errorMessageName={`${fieldName}.missingArsakError`}>
              <FlexRow>
                <FlexColumn className={styles.halfColumn}>
                  <CheckboxField
                    name={`${fieldName}.feilFakta`}
                    label={<FormattedMessage id="AksjonspunktGodkjenningArsakPanel.FeilFakta" />}
                  />
                  <CheckboxField
                    name={`${fieldName}.feilRegel`}
                    label={<FormattedMessage id="AksjonspunktGodkjenningArsakPanel.FeilRegelForstaelse" />}
                  />
                </FlexColumn>
                <FlexColumn className={styles.halfColumn}>
                  <CheckboxField
                    name={`${fieldName}.feilLov`}
                    label={<FormattedMessage id="AksjonspunktGodkjenningArsakPanel.FeilLovanvendelse" />}
                  />
                  <CheckboxField
                    name={`${fieldName}.annet`}
                    label={<FormattedMessage id="AksjonspunktGodkjenningArsakPanel.Annet" />}
                  />
                </FlexColumn>
              </FlexRow>
            </NavFieldGroup>
          </FlexRow>
        </FlexContainer>
      )}
      <TextAreaField
        name={`${fieldName}.besluttersBegrunnelse`}
        label={<FormattedMessage id="AksjonspunktGodkjenningArsakPanel.Begrunnelse" />}
        validate={[required, minLength3, maxLength2000, hasValidText]}
      />
    </ArrowBox>
  </>
);

export default AksjonspunktGodkjenningArsakPanel;

import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { UseFormGetValues, useFormContext } from 'react-hook-form';
import { ErrorMessage, Label, BodyShort } from '@navikt/ds-react';
import { ArrowBox, FlexColumn, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { CheckboxField, TextAreaField, RadioGroupPanel, useCustomValidation } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, required, isRequiredMessage } from '@navikt/ft-form-validators';

import { TotrinnskontrollSkjermlenkeContext } from '@navikt/fp-types';

import styles from './godkjenningPanel.module.css';

const minLength3 = minLength(3);
const maxLength2000 = maxLength(2000);

const FIELD_ARRAY_NAME = 'aksjonspunktGodkjenning';

const harIkkeValgtMinstEnFakta = (getValues: UseFormGetValues<any>, fieldIndex: string) =>
  !getValues(`${fieldIndex}.feilFakta`) &&
  !getValues(`${fieldIndex}.feilLov`) &&
  !getValues(`${fieldIndex}.feilSkjønn`) &&
  !getValues(`${fieldIndex}.feilUtredning`) &&
  !getValues(`${fieldIndex}.annet`);

type OwnProps = {
  index: number;
  totrinnskontrollSkjermlenkeContext: TotrinnskontrollSkjermlenkeContext[];
  readOnly: boolean;
};

const GodkjenningPanel: FunctionComponent<OwnProps> = ({ index, totrinnskontrollSkjermlenkeContext, readOnly }) => {
  const { watch, getValues } = useFormContext();

  const aksjonspunktGodkjenning = watch('aksjonspunktGodkjenning');

  const { aksjonspunktKode, totrinnskontrollGodkjent } = aksjonspunktGodkjenning[index];
  const context = totrinnskontrollSkjermlenkeContext.find(c =>
    c.totrinnskontrollAksjonspunkter.some(ta => ta.aksjonspunktKode === aksjonspunktKode),
  );
  const totrinnskontrollAksjonspunkt = context?.totrinnskontrollAksjonspunkter.find(
    c => c.aksjonspunktKode === aksjonspunktKode,
  );

  const fieldIndex = `${FIELD_ARRAY_NAME}.${index}`;

  const feilmelding =
    !totrinnskontrollGodkjent && harIkkeValgtMinstEnFakta(getValues, fieldIndex) ? isRequiredMessage() : undefined;
  const errorMessage = useCustomValidation(`${fieldIndex}.faktagruppe`, feilmelding);

  if (!context || !totrinnskontrollAksjonspunkt) {
    return null;
  }

  return (
    <>
      <RadioGroupPanel
        name={`${fieldIndex}.totrinnskontrollGodkjent`}
        isReadOnly={readOnly}
        isHorizontal
        isTrueOrFalseSelection
        hideLegend
        radios={[
          {
            value: 'true',
            label: <FormattedMessage id="ApprovalField.Godkjent" />,
          },
          {
            value: 'false',
            label: <FormattedMessage id="ApprovalField.Vurder" />,
          },
        ]}
      />
      {totrinnskontrollGodkjent === false && (
        <>
          <VerticalSpacer sixteenPx />
          <ArrowBox alignOffset={totrinnskontrollGodkjent ? 1 : 110}>
            <Label size="small">
              <FormattedMessage id="AksjonspunktGodkjenningArsakPanel.Arsak" />
            </Label>
            <BodyShort size="small">
              <FormattedMessage id="AksjonspunktGodkjenningArsakPanel.Forklaring" />
            </BodyShort>
            <FlexRow>
              <FlexColumn className={styles.halfColumn}>
                <CheckboxField
                  name={`${fieldIndex}.feilFakta`}
                  label={<FormattedMessage id="AksjonspunktGodkjenningArsakPanel.Fakta" />}
                  readOnly={readOnly}
                />
                <CheckboxField
                  name={`${fieldIndex}.feilSkjønn`}
                  label={<FormattedMessage id="AksjonspunktGodkjenningArsakPanel.Skjønn" />}
                  readOnly={readOnly}
                />
                <CheckboxField
                  name={`${fieldIndex}.feilLov`}
                  label={<FormattedMessage id="AksjonspunktGodkjenningArsakPanel.Lovanvendelse" />}
                  readOnly={readOnly}
                />
              </FlexColumn>
              <FlexColumn className={styles.halfColumn}>
                <CheckboxField
                  name={`${fieldIndex}.feilUtredning`}
                  label={<FormattedMessage id="AksjonspunktGodkjenningArsakPanel.Utredning" />}
                  readOnly={readOnly}
                />
                <CheckboxField
                  name={`${fieldIndex}.annet`}
                  label={<FormattedMessage id="AksjonspunktGodkjenningArsakPanel.Annet" />}
                  readOnly={readOnly}
                />
              </FlexColumn>
            </FlexRow>
            {errorMessage && <ErrorMessage size="small">{errorMessage}</ErrorMessage>}
            <VerticalSpacer sixteenPx />
            <TextAreaField
              name={`${fieldIndex}.besluttersBegrunnelse`}
              label={<FormattedMessage id="AksjonspunktGodkjenningArsakPanel.Begrunnelse" />}
              validate={[required, minLength3, maxLength2000, hasValidText]}
              readOnly={readOnly}
            />
          </ArrowBox>
        </>
      )}
    </>
  );
};

export default GodkjenningPanel;

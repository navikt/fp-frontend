import React from 'react';
import { useFormContext, UseFormGetValues } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { BodyShort, ErrorMessage, HStack, Label, VStack } from '@navikt/ds-react';
import { CheckboxField, RadioGroupPanel, TextAreaField, useCustomValidation } from '@navikt/ft-form-hooks';
import { hasValidText, isRequiredMessage, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { ArrowBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { TotrinnskontrollSkjermlenkeContext } from '@navikt/fp-types';

const minLength3 = minLength(3);
const maxLength2000 = maxLength(2000);

const FIELD_ARRAY_NAME = 'aksjonspunktGodkjenning';

const harIkkeValgtMinstEnFakta = (getValues: UseFormGetValues<any>, fieldIndex: string) =>
  !getValues(`${fieldIndex}.feilFakta`) &&
  !getValues(`${fieldIndex}.feilLov`) &&
  !getValues(`${fieldIndex}.feilSkjønn`) &&
  !getValues(`${fieldIndex}.feilUtredning`) &&
  !getValues(`${fieldIndex}.feilSaksflyt`) &&
  !getValues(`${fieldIndex}.feilBegrunnelse`);

type Props = {
  index: number;
  totrinnskontrollSkjermlenkeContext: TotrinnskontrollSkjermlenkeContext[];
  readOnly: boolean;
};

export const GodkjenningPanel = ({ index, totrinnskontrollSkjermlenkeContext, readOnly }: Props) => {
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
            <VStack gap="2">
              <Label size="small">
                <FormattedMessage id="AksjonspunktGodkjenningArsakPanel.Arsak" />
              </Label>
              <BodyShort size="small">
                <FormattedMessage id="AksjonspunktGodkjenningArsakPanel.Forklaring" />
              </BodyShort>
              <VStack gap="1">
                <HStack justify="space-between" style={{ width: '300px' }}>
                  <VStack>
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
                  </VStack>
                  <VStack>
                    <CheckboxField
                      name={`${fieldIndex}.feilUtredning`}
                      label={<FormattedMessage id="AksjonspunktGodkjenningArsakPanel.Utredning" />}
                      readOnly={readOnly}
                    />
                    <CheckboxField
                      name={`${fieldIndex}.feilSaksflyt`}
                      label={<FormattedMessage id="AksjonspunktGodkjenningArsakPanel.Saksflyt" />}
                      readOnly={readOnly}
                    />
                    <CheckboxField
                      name={`${fieldIndex}.feilBegrunnelse`}
                      label={<FormattedMessage id="AksjonspunktGodkjenningArsakPanel.Begrunnelse" />}
                      readOnly={readOnly}
                    />
                  </VStack>
                </HStack>
              </VStack>
              {errorMessage && <ErrorMessage size="small">{errorMessage}</ErrorMessage>}
              <VerticalSpacer sixteenPx />
              <TextAreaField
                name={`${fieldIndex}.besluttersBegrunnelse`}
                label={<FormattedMessage id="AksjonspunktGodkjenningArsakPanel.Begrunnelse" />}
                validate={[required, minLength3, maxLength2000, hasValidText]}
                readOnly={readOnly}
              />
            </VStack>
          </ArrowBox>
        </>
      )}
    </>
  );
};

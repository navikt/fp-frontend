import { useFormContext, type UseFormGetValues } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { BodyShort, ErrorMessage, HStack, Label, VStack } from '@navikt/ds-react';
import { CheckboxField, RadioGroupPanel, TextAreaField, useCustomValidation } from '@navikt/ft-form-hooks';
import { hasValidText, isRequiredMessage, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { ArrowBox } from '@navikt/ft-ui-komponenter';

import type { TotrinnskontrollSkjermlenkeContext } from '@navikt/fp-types';

import type { AksjonspunktGodkjenningData } from './AksjonspunktGodkjenningFieldArray';

const minLength3 = minLength(3);
const maxLength2000 = maxLength(2000);

const FIELD_ARRAY_NAME = 'aksjonspunktGodkjenning';

const harIkkeValgtMinstEnFakta = (
  getValues: UseFormGetValues<{
    aksjonspunktGodkjenning: AksjonspunktGodkjenningData[];
  }>,
  fieldIndex: number,
) =>
  !getValues(`${FIELD_ARRAY_NAME}.${fieldIndex}.feilFakta`) &&
  !getValues(`${FIELD_ARRAY_NAME}.${fieldIndex}.feilLov`) &&
  !getValues(`${FIELD_ARRAY_NAME}.${fieldIndex}.feilSkjønn`) &&
  !getValues(`${FIELD_ARRAY_NAME}.${fieldIndex}.feilUtredning`) &&
  !getValues(`${FIELD_ARRAY_NAME}.${fieldIndex}.feilSaksflyt`) &&
  !getValues(`${FIELD_ARRAY_NAME}.${fieldIndex}.feilBegrunnelse`);

type Props = {
  index: number;
  totrinnskontrollSkjermlenkeContext: TotrinnskontrollSkjermlenkeContext[];
  readOnly: boolean;
};

export const GodkjenningPanel = ({ index, totrinnskontrollSkjermlenkeContext, readOnly }: Props) => {
  const { watch, getValues } = useFormContext<{
    aksjonspunktGodkjenning: AksjonspunktGodkjenningData[];
  }>();

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
    !totrinnskontrollGodkjent && harIkkeValgtMinstEnFakta(getValues, index) ? isRequiredMessage() : undefined;
  const errorMessage = useCustomValidation(`${fieldIndex}.faktagruppe`, feilmelding);

  if (!context || !totrinnskontrollAksjonspunkt) {
    return null;
  }

  return (
    <VStack gap="3">
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
        <ArrowBox alignOffset={totrinnskontrollGodkjent ? 1 : 110}>
          <VStack gap="2">
            <Label size="small">
              <FormattedMessage id="AksjonspunktGodkjenningArsakPanel.Arsak" />
            </Label>
            <BodyShort size="small">
              <FormattedMessage id="AksjonspunktGodkjenningArsakPanel.Forklaring" />
            </BodyShort>
            <VStack gap="4">
              <VStack gap="1">
                <HStack justify="space-between" style={{ width: '300px' }}>
                  <VStack gap="1">
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
                  <VStack gap="1">
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
              <TextAreaField
                name={`${fieldIndex}.besluttersBegrunnelse`}
                label={<FormattedMessage id="AksjonspunktGodkjenningArsakPanel.Begrunnelse" />}
                validate={[required, minLength3, maxLength2000, hasValidText]}
                readOnly={readOnly}
              />
            </VStack>
          </VStack>
        </ArrowBox>
      )}
    </VStack>
  );
};

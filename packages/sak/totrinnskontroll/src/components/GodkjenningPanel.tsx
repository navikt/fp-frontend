import { useFormContext, type UseFormGetValues } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { BodyShort, ErrorMessage, HStack, Label, VStack } from '@navikt/ds-react';
import { RhfCheckbox, RhfRadioGroup, RhfTextarea, useCustomValidation } from '@navikt/ft-form-hooks';
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
  const { watch, getValues, control } = useFormContext<{
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

  const feilmelding =
    !totrinnskontrollGodkjent && harIkkeValgtMinstEnFakta(getValues, index) ? isRequiredMessage() : undefined;
  const errorMessage = useCustomValidation(`${FIELD_ARRAY_NAME}.${index}.faktagruppe`, feilmelding);

  if (!context || !totrinnskontrollAksjonspunkt) {
    return null;
  }

  return (
    <VStack gap="space-12">
      <RhfRadioGroup
        name={`${FIELD_ARRAY_NAME}.${index}.totrinnskontrollGodkjent`}
        control={control}
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
          <VStack gap="space-8">
            <Label size="small">
              <FormattedMessage id="AksjonspunktGodkjenningArsakPanel.Arsak" />
            </Label>
            <BodyShort size="small">
              <FormattedMessage id="AksjonspunktGodkjenningArsakPanel.Forklaring" />
            </BodyShort>
            <VStack gap="space-16">
              <VStack gap="space-4">
                <HStack justify="space-between" style={{ width: '300px' }}>
                  <VStack gap="space-4">
                    <RhfCheckbox
                      name={`${FIELD_ARRAY_NAME}.${index}.feilFakta`}
                      control={control}
                      label={<FormattedMessage id="AksjonspunktGodkjenningArsakPanel.Fakta" />}
                      readOnly={readOnly}
                    />
                    <RhfCheckbox
                      name={`${FIELD_ARRAY_NAME}.${index}.feilSkjønn`}
                      control={control}
                      label={<FormattedMessage id="AksjonspunktGodkjenningArsakPanel.Skjønn" />}
                      readOnly={readOnly}
                    />
                    <RhfCheckbox
                      name={`${FIELD_ARRAY_NAME}.${index}.feilLov`}
                      control={control}
                      label={<FormattedMessage id="AksjonspunktGodkjenningArsakPanel.Lovanvendelse" />}
                      readOnly={readOnly}
                    />
                  </VStack>
                  <VStack gap="space-4">
                    <RhfCheckbox
                      name={`${FIELD_ARRAY_NAME}.${index}.feilUtredning`}
                      control={control}
                      label={<FormattedMessage id="AksjonspunktGodkjenningArsakPanel.Utredning" />}
                      readOnly={readOnly}
                    />
                    <RhfCheckbox
                      name={`${FIELD_ARRAY_NAME}.${index}.feilSaksflyt`}
                      control={control}
                      label={<FormattedMessage id="AksjonspunktGodkjenningArsakPanel.Saksflyt" />}
                      readOnly={readOnly}
                    />
                    <RhfCheckbox
                      name={`${FIELD_ARRAY_NAME}.${index}.feilBegrunnelse`}
                      control={control}
                      label={<FormattedMessage id="AksjonspunktGodkjenningArsakPanel.Begrunnelse" />}
                      readOnly={readOnly}
                    />
                  </VStack>
                </HStack>
              </VStack>
              {errorMessage && <ErrorMessage size="small">{errorMessage}</ErrorMessage>}
              <RhfTextarea
                name={`${FIELD_ARRAY_NAME}.${index}.besluttersBegrunnelse`}
                control={control}
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

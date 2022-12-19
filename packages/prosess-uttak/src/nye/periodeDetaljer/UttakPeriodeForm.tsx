import React, { FunctionComponent } from 'react';
import { Button } from '@navikt/ds-react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import { Form, TextAreaField, RadioGroupPanel } from '@navikt/ft-form-hooks';
import {
  hasValidText, maxLength, minLength, required,
} from '@navikt/ft-form-validators';
import {
  FlexColumn, FlexContainer, FlexRow, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';

import { PeriodeSoker } from '@fpsak-frontend/types';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

type FormValues = PeriodeSoker;

interface OwnProps {
  valgtPeriode: PeriodeSoker;
  isReadOnly: boolean;
  oppdaterPeriode: (periode: any) => void;
  lukkPeriodeVisning: () => void;
}

const UttakPeriodeForm: FunctionComponent<OwnProps> = ({
  valgtPeriode,
  oppdaterPeriode,
  lukkPeriodeVisning,
  isReadOnly,
}) => {
  const intl = useIntl();

  const formMethods = useForm<FormValues>({
    defaultValues: valgtPeriode,
  });

  return (
    <Form formMethods={formMethods} onSubmit={oppdaterPeriode}>
      <TextAreaField
        name="begrunnelse"
        label={intl.formatMessage({ id: 'UttakActivity.Vurdering' })}
        validate={[required, minLength3, maxLength1500, hasValidText]}
        maxLength={1500}
        readOnly={isReadOnly}
      />
      <VerticalSpacer sixteenPx />
      <RadioGroupPanel
        name="erOppfylt"
        hideLegend
        validate={[required]}
        isReadOnly={isReadOnly}
        isHorizontal
        isTrueOrFalseSelection
        radios={[
          { label: intl.formatMessage({ id: 'UttakActivity.Oppfylt' }), value: 'true' },
          { label: intl.formatMessage({ id: 'UttakActivity.IkkeOppfylt' }), value: 'false' },
        ]}
      />
      <VerticalSpacer sixteenPx />
      <FlexContainer>
        <FlexRow>
          <FlexColumn>
            <Button
              size="small"
              variant="primary"
            >
              <FormattedMessage id="UttakActivity.Oppdater" />
            </Button>
          </FlexColumn>
          <FlexColumn>
            <Button size="small" variant="secondary" onClick={lukkPeriodeVisning} type="button">
              <FormattedMessage id="UttakActivity.Avbryt" />
            </Button>
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
    </Form>
  );
};

export default UttakPeriodeForm;

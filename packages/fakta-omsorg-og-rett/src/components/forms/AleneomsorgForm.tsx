import React, { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { Hovedknapp } from 'nav-frontend-knapper';
import {
  RadioGroupField, RadioOption, Form, TextAreaField,
} from '@navikt/ft-form-hooks';
import {
  hasValidText, maxLength, minLength, required,
} from '@navikt/ft-utils';
import { Element } from 'nav-frontend-typografi';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import Boks from '../Boks';
import HarAnnenForelderRettFelter from './HarAnnenForelderRettFelter';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

type FormValues = {
  harAleneomsorg: boolean;
}

interface OwnProps {
  readOnly: boolean;
}

const AleneomsorgForm: FunctionComponent<OwnProps> = ({
  readOnly,
}) => {
  const formMethods = useForm<FormValues>({
    defaultValues: {
      harAleneomsorg: undefined,
    },
  });

  const harAleneomsorg = formMethods.watch('harAleneomsorg');

  return (
    <Form formMethods={formMethods}>
      <Boks harBorderTop={false}>
        <VerticalSpacer thirtyTwoPx />
        <RadioGroupField
          name="harAleneomsorg"
          label={<Element><FormattedMessage id="AleneomsorgForm.Aleneomsorg" /></Element>}
          validate={[required]}
          bredde="XL"
          readOnly={readOnly}
          parse={(value: string) => value === 'true'}
          direction="vertical"
        >
          <RadioOption value="true" label={<FormattedMessage id="AleneomsorgForm.HarAleneomsorg" />} />
          <RadioOption
            value="false"
            label={(
              <FormattedMessage
                id="AleneomsorgForm.HarIkkeAleneomsorg"
                values={{
                  b: (chunks: any) => <b>{chunks}</b>,
                }}
              />
            )}
          />
        </RadioGroupField>
        {harAleneomsorg === false && (
          <>
            <VerticalSpacer thirtyTwoPx />
            <HarAnnenForelderRettFelter readOnly={readOnly} />
          </>
        )}
        <VerticalSpacer thirtyTwoPx />
        <TextAreaField
          label={<Element><FormattedMessage id="AleneomsorgForm.Begrunn" /></Element>}
          name="begrunnelse"
          validate={[required, minLength3, maxLength1500, hasValidText]}
          maxLength={1500}
          readOnly={readOnly}
        />
        <VerticalSpacer sixteenPx />
        {!readOnly && (
          <Hovedknapp
            mini
            disabled={!formMethods.formState.isDirty || formMethods.formState.isSubmitting}
            spinner={formMethods.formState.isSubmitting}
          >
            <FormattedMessage id="AleneomsorgForm.Bekreft" />
          </Hovedknapp>
        )}
      </Boks>
    </Form>
  );
};

export default AleneomsorgForm;

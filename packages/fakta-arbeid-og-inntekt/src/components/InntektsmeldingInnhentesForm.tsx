import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import { Element, Undertekst } from 'nav-frontend-typografi';
import { Knapp, Flatknapp } from 'nav-frontend-knapper';

import {
  required, hasValidText, maxLength, minLength,
} from '@fpsak-frontend/utils';
import {
  TextAreaField, RadioGroupField, RadioOption, Form,
} from '@fpsak-frontend/form-hooks';
import { Inntekt } from '@fpsak-frontend/types';
import {
  VerticalSpacer, Table, TableRow, TableColumn, FlexColumn, FlexContainer, FlexRow,
} from '@fpsak-frontend/shared-components';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

type FormValues = {
  skalInnhenteInntektsmelding: boolean;
  begrunnelse: string;
}

interface OwnProps {
  inntekter: Inntekt[];
  isReadOnly: boolean;
}

const InntektsmeldingInnhentesForm: FunctionComponent<OwnProps> = ({
  inntekter,
  isReadOnly,
}) => {
  const intl = useIntl();
  const formMethods = useForm<FormValues>();

  const skalInnhenteInntektsmelding = formMethods.watch('skalInnhenteInntektsmelding');

  return (
    <>
      <VerticalSpacer sixteenPx />
      <Element><FormattedMessage id="InntektsmeldingInnhentesForm.Stillingsprosent" /></Element>
      <VerticalSpacer thirtyTwoPx />
      <Element><FormattedMessage id="InntektsmeldingInnhentesForm.Inntekter" /></Element>
      <Table noHover>
        {inntekter[0].inntekter.map((inntekt) => (
          <TableRow>
            <TableColumn>
              {inntekt.fom}
            </TableColumn>
            <TableColumn>
              {inntekt.beløp}
            </TableColumn>
          </TableRow>
        ))}
      </Table>
      <Form formMethods={formMethods} onSubmit={(values) => undefined}>
        <RadioGroupField
          label={<Undertekst><FormattedMessage id="InntektsmeldingInnhentesForm.MåInnhentes" /></Undertekst>}
          name="skalInnhenteInntektsmelding"
          validate={[required]}
          readOnly={isReadOnly}
          parse={(value: string) => value === 'true'}
          direction="vertical"
        >
          <RadioOption value="true" label={intl.formatMessage({ id: 'InntektsmeldingInnhentesForm.TarKontakt' })} />
          <RadioOption value="false" label={intl.formatMessage({ id: 'InntektsmeldingInnhentesForm.GåVidere' })} />
        </RadioGroupField>
        {skalInnhenteInntektsmelding === false && (
          <TextAreaField
            label={<FormattedMessage id="InntektsmeldingInnhentesForm.Begrunn" />}
            name="begrunnelse"
            validate={[required, minLength3, maxLength1500, hasValidText]}
            maxLength={1500}
            readOnly={isReadOnly}
          />
        )}
        {skalInnhenteInntektsmelding !== undefined && (
          <FlexContainer>
            <FlexRow>
              <FlexColumn>
                <Knapp
                  mini
                  spinner={false}
                  disabled={false}
                  htmlType="submit"
                >
                  <FormattedMessage id="InntektsmeldingInnhentesForm.Lagre" />
                </Knapp>
              </FlexColumn>
              <FlexColumn>
                <Flatknapp
                  mini
                  spinner={false}
                  disabled={false}
                  onClick={() => undefined}
                  htmlType="button"
                >
                  <FormattedMessage id="InntektsmeldingInnhentesForm.Avbryt" />
                </Flatknapp>
              </FlexColumn>
            </FlexRow>
          </FlexContainer>
        )}
      </Form>
    </>
  );
};

export default InntektsmeldingInnhentesForm;

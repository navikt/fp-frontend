import React, { FunctionComponent, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import { Element } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';
import {
  FlexColumn, FlexContainer, FlexRow, Image,
} from '@navikt/ft-ui-komponenter';

import behandleImageURL from '@fpsak-frontend/assets/images/advarsel.svg';
import {
  VerticalSpacer,
} from '@fpsak-frontend/shared-components';
import {
  hasValidText, maxLength, minLength, required,
} from '@fpsak-frontend/utils';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import {
  Form, RadioGroupField, RadioOption, TextAreaField,
} from '@fpsak-frontend/form-hooks';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { ProsessStegSubmitButtonNew } from '@fpsak-frontend/prosess-felles';
import { Aksjonspunkt, BeregningsresultatFp } from '@fpsak-frontend/types';
import { VurderTilbaketrekkAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import styles from './tilbaketrekkpanel.less';

const radioFieldName = 'radioVurderTilbaketrekk';
const begrunnelseFieldName = 'begrunnelseVurderTilbaketrekk';

const maxLength1500 = maxLength(1500);
const minLength3 = minLength(3);

export type FormValues = {
  radioVurderTilbaketrekk: boolean;
  begrunnelseVurderTilbaketrekk?: string;
}

const buildInitialValues = (ap?: Aksjonspunkt, beregningsresultat?: BeregningsresultatFp): FormValues => {
  const tidligereValgt = beregningsresultat?.skalHindreTilbaketrekk;
  if (tidligereValgt === undefined || tidligereValgt === null || !ap || !ap.begrunnelse) {
    return undefined;
  }
  return {
    radioVurderTilbaketrekk: tidligereValgt,
    begrunnelseVurderTilbaketrekk: ap.begrunnelse,
  };
};

const transformValues = (values: FormValues): VurderTilbaketrekkAp => {
  const hindreTilbaketrekk = values[radioFieldName];
  const begrunnelse = values[begrunnelseFieldName];
  return {
    kode: aksjonspunktCodes.VURDER_TILBAKETREKK,
    begrunnelse,
    hindreTilbaketrekk,
  };
};

interface OwnProps {
  readOnly: boolean;
  vurderTilbaketrekkAP?: Aksjonspunkt;
  submitCallback: (data: VurderTilbaketrekkAp) => Promise<void>;
  readOnlySubmitButton: boolean;
  beregningsresultat?: BeregningsresultatFp;
  formData?: FormValues;
  setFormData: (data: FormValues) => void;
}

const Tilbaketrekkpanel: FunctionComponent<OwnProps> = ({
  readOnly,
  vurderTilbaketrekkAP,
  readOnlySubmitButton,
  beregningsresultat,
  submitCallback,
  formData,
  setFormData,
}) => {
  const intl = useIntl();

  const initialValues = useMemo(() => buildInitialValues(vurderTilbaketrekkAP, beregningsresultat), [vurderTilbaketrekkAP, beregningsresultat]);
  const formMethods = useForm<FormValues>({
    defaultValues: formData || initialValues,
  });

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(formValues: FormValues) => submitCallback(transformValues(formValues))}
      setDataOnUnmount={setFormData}
    >
      <div className={styles.container}>
        <FlexContainer>
          <FlexRow>
            <FlexColumn>
              <Image
                className={styles.image}
                alt={intl.formatMessage({ id: 'HelpText.Aksjonspunkt' })}
                src={behandleImageURL}
              />
            </FlexColumn>
            <FlexColumn>
              <div className={styles.divider} />
            </FlexColumn>
            <FlexColumn className={styles.aksjonspunktText}>
              <div className={styles.oneElement}>
                <Element className={styles.wordwrap}>
                  <FormattedMessage id="TilkjentYtelse.VurderTilbaketrekk.Aksjonspunkttekst" />
                </Element>
              </div>
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
      </div>
      <VerticalSpacer twentyPx />
      <Row>
        <Column xs="9">
          <RadioGroupField
            name={radioFieldName}
            validate={[required]}
            direction="horizontal"
            readOnly={readOnly}
            isEdited={!isAksjonspunktOpen(vurderTilbaketrekkAP.status)}
          >
            <RadioOption
              label={<FormattedMessage id="TilkjentYtelse.VurderTilbaketrekk.Utfør" />}
              value="false"
            />
            <RadioOption
              label={<FormattedMessage id="TilkjentYtelse.VurderTilbaketrekk.Hindre" />}
              value="true"
            />
          </RadioGroupField>
        </Column>
      </Row>
      <Row>
        <Column xs="6">
          <TextAreaField
            name={begrunnelseFieldName}
            label={<FormattedMessage id="Beregningsgrunnlag.Forms.Vurdering" />}
            validate={[required, maxLength1500, minLength3, hasValidText]}
            maxLength={1500}
            readOnly={readOnly}
          />
        </Column>
      </Row>
      <Row>
        <Column xs="1">
          <VerticalSpacer eightPx />
          <ProsessStegSubmitButtonNew
            isReadOnly={readOnly}
            isSubmittable={!readOnlySubmitButton}
            isSubmitting={formMethods.formState.isSubmitting}
            isDirty={formMethods.formState.isDirty}
          />
        </Column>
      </Row>
    </Form>
  );
};

export default Tilbaketrekkpanel;

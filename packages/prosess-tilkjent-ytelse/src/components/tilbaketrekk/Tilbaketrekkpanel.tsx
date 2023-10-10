import React, { FunctionComponent, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import { Label } from '@navikt/ds-react';
import { VerticalSpacer, FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';

import { AksjonspunktCode, aksjonspunktStatus } from '@navikt/fp-kodeverk';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { Form, RadioGroupPanel, TextAreaField } from '@navikt/ft-form-hooks';
import { ProsessStegSubmitButtonNew } from '@navikt/fp-prosess-felles';
import { Aksjonspunkt, BeregningsresultatDagytelse } from '@navikt/fp-types';
import { VurderTilbaketrekkAp } from '@navikt/fp-types-avklar-aksjonspunkter';

import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import styles from './tilbaketrekkpanel.module.css';

const radioFieldName = 'radioVurderTilbaketrekk';
const begrunnelseFieldName = 'begrunnelseVurderTilbaketrekk';

const maxLength1500 = maxLength(1500);
const minLength3 = minLength(3);

export type FormValues = {
  radioVurderTilbaketrekk: boolean;
  begrunnelseVurderTilbaketrekk?: string;
};

const buildInitialValues = (
  ap?: Aksjonspunkt,
  beregningsresultat?: BeregningsresultatDagytelse,
): FormValues | undefined => {
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
    kode: AksjonspunktCode.VURDER_TILBAKETREKK,
    begrunnelse,
    hindreTilbaketrekk,
  };
};

interface OwnProps {
  readOnly: boolean;
  vurderTilbaketrekkAP?: Aksjonspunkt;
  submitCallback: (data: VurderTilbaketrekkAp) => Promise<void>;
  readOnlySubmitButton: boolean;
  beregningsresultat?: BeregningsresultatDagytelse;
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

  const initialValues = useMemo(
    () => buildInitialValues(vurderTilbaketrekkAP, beregningsresultat),
    [vurderTilbaketrekkAP, beregningsresultat],
  );
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
              <ExclamationmarkTriangleFillIcon
                className={styles.image}
                title={intl.formatMessage({ id: 'HelpText.Aksjonspunkt' })}
              />
            </FlexColumn>
            <FlexColumn>
              <div className={styles.divider} />
            </FlexColumn>
            <FlexColumn className={styles.aksjonspunktText}>
              <div className={styles.oneElement}>
                <Label size="small" className={styles.wordwrap}>
                  <FormattedMessage id="TilkjentYtelse.VurderTilbaketrekk.Aksjonspunkttekst" />
                </Label>
              </div>
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
      </div>
      <VerticalSpacer twentyPx />
      <RadioGroupPanel
        name={radioFieldName}
        validate={[required]}
        isReadOnly={readOnly}
        isEdited={vurderTilbaketrekkAP?.status !== aksjonspunktStatus.OPPRETTET}
        isHorizontal
        radios={[
          {
            value: 'false',
            label: <FormattedMessage id="TilkjentYtelse.VurderTilbaketrekk.Utfør" />,
          },
          {
            value: 'true',
            label: <FormattedMessage id="TilkjentYtelse.VurderTilbaketrekk.Hindre" />,
          },
        ]}
      />
      <VerticalSpacer sixteenPx />
      <TextAreaField
        name={begrunnelseFieldName}
        label={<FormattedMessage id="Beregningsgrunnlag.Forms.Vurdering" />}
        validate={[required, maxLength1500, minLength3, hasValidText]}
        maxLength={1500}
        readOnly={readOnly}
      />
      <VerticalSpacer sixteenPx />
      <ProsessStegSubmitButtonNew
        isReadOnly={readOnly}
        isSubmittable={!readOnlySubmitButton}
        isSubmitting={formMethods.formState.isSubmitting}
        isDirty={formMethods.formState.isDirty}
      />
    </Form>
  );
};

export default Tilbaketrekkpanel;

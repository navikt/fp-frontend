import React, { FunctionComponent, useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { Label, Detail, Heading } from '@navikt/ds-react';

import { Aksjonspunkt, BeregningsresultatEs } from '@navikt/fp-types';
import { VerticalSpacer, OverstyringKnapp, FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';
import { hasValidInteger, maxValue, minValue, required } from '@navikt/ft-form-validators';
import { formatCurrencyWithKr, decodeHtmlEntity } from '@navikt/ft-utils';
import { InputField, Form } from '@navikt/ft-form-hooks';
import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import { OverstyringPanel } from '@navikt/fp-prosess-felles';
import { OverstyringBeregningAp } from '@navikt/fp-types-avklar-aksjonspunkter';

import styles from './beregningsresultatEngangsstonadForm.module.css';

const minValue1 = minValue(1);
const maxValue500000 = maxValue(500000);

type FormValues = {
  beregnetTilkjentYtelse?: number;
  begrunnelse?: string;
};

const buildInitialValues = (
  aksjonspunkter: Aksjonspunkt[],
  behandlingResultatstruktur?: BeregningsresultatEs,
): FormValues => {
  const aksjonspunkt = aksjonspunkter.find(ap => ap.definisjon === AksjonspunktCode.OVERSTYR_BEREGNING);
  return {
    begrunnelse: decodeHtmlEntity(aksjonspunkt && aksjonspunkt.begrunnelse ? aksjonspunkt.begrunnelse : ''),
    beregnetTilkjentYtelse: behandlingResultatstruktur.beregnetTilkjentYtelse,
  };
};

const transformValues = (values: FormValues): OverstyringBeregningAp => ({
  kode: AksjonspunktCode.OVERSTYR_BEREGNING,
  beregnetTilkjentYtelse: values.beregnetTilkjentYtelse,
  begrunnelse: values.begrunnelse,
});

interface OwnProps {
  overrideReadOnly: boolean;
  kanOverstyre: boolean;
  toggleOverstyring: (fn: (oldArray: []) => void) => void;
  behandlingResultatstruktur?: BeregningsresultatEs;
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (data: OverstyringBeregningAp) => Promise<void>;
  erIkkeGodkjentAvBeslutter: boolean;
  formData?: FormValues;
  setFormData: (data: FormValues) => void;
}

/**
 * BeregningsresultatEngangsstonadForm
 *
 * Viser beregnet engangsstønad. Resultatet kan overstyres av Nav-ansatt med overstyr-rettighet.
 */
const BeregningsresultatEngangsstonadForm: FunctionComponent<OwnProps> = ({
  overrideReadOnly,
  kanOverstyre,
  toggleOverstyring,
  behandlingResultatstruktur,
  aksjonspunkter,
  erIkkeGodkjentAvBeslutter,
  formData,
  setFormData,
  submitCallback,
}) => {
  const formMethods = useForm<FormValues>({
    defaultValues: formData || buildInitialValues(aksjonspunkter, behandlingResultatstruktur),
  });

  const [erIOverstyringsmodus, toggleOverstyringsmodus] = useState(false);
  const toggleAv = useCallback(() => {
    toggleOverstyringsmodus(false);
    formMethods.reset();
    toggleOverstyring(oldArray => oldArray.filter(code => code !== AksjonspunktCode.OVERSTYR_BEREGNING));
  }, []);
  const togglePa = useCallback(() => {
    toggleOverstyringsmodus(true);
    toggleOverstyring(oldArray => [...oldArray, AksjonspunktCode.OVERSTYR_BEREGNING]);
  }, []);

  const harOverstyringAksjonspunkt =
    aksjonspunkter.some(ap => ap.definisjon === AksjonspunktCode.OVERSTYR_BEREGNING) || false;

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values))}
      setDataOnUnmount={setFormData}
    >
      <FlexContainer>
        <FlexRow>
          <FlexColumn>
            <Heading size="small">
              <FormattedMessage id="BeregningEngangsstonadForm.Beregning" />
            </Heading>
          </FlexColumn>
          {(kanOverstyre || overrideReadOnly) && (
            <FlexColumn>
              <OverstyringKnapp onClick={togglePa} erOverstyrt={erIOverstyringsmodus || !kanOverstyre} />
            </FlexColumn>
          )}
        </FlexRow>
      </FlexContainer>
      <VerticalSpacer eightPx />
      <FlexContainer>
        <FlexRow>
          <FlexColumn className={styles.firstColWidth}>
            <Detail size="small">
              <FormattedMessage id="BeregningEngangsstonadForm.Sats" />
            </Detail>
          </FlexColumn>
          <FlexColumn>
            <Label size="small">{formatCurrencyWithKr(behandlingResultatstruktur.satsVerdi)}</Label>
          </FlexColumn>
        </FlexRow>
        <FlexRow>
          <FlexColumn className={styles.firstColWidth}>
            <Detail size="small">
              <FormattedMessage id="BeregningEngangsstonadForm.AntallBarn" />
            </Detail>
          </FlexColumn>
          <FlexColumn>
            <Label size="small">{behandlingResultatstruktur.antallBarn}</Label>
          </FlexColumn>
        </FlexRow>
        {!erIOverstyringsmodus && !harOverstyringAksjonspunkt && (
          <>
            <FlexRow>
              <FlexColumn className={styles.dividerWidth}>
                <hr className={styles.divider} />
              </FlexColumn>
            </FlexRow>
            <FlexRow>
              <FlexColumn className={styles.firstColWidth}>
                <Detail size="small">
                  <FormattedMessage id="BeregningEngangsstonadForm.BeregnetEngangsstonad" />
                </Detail>
              </FlexColumn>
              <FlexColumn>
                <Label size="small">{formatCurrencyWithKr(behandlingResultatstruktur.beregnetTilkjentYtelse)}</Label>
              </FlexColumn>
            </FlexRow>
          </>
        )}
      </FlexContainer>
      {(erIOverstyringsmodus || harOverstyringAksjonspunkt) && (
        <>
          <VerticalSpacer sixteenPx />
          <OverstyringPanel
            erOverstyrt={erIOverstyringsmodus}
            isSolvable
            erVilkarOk
            hasAksjonspunkt={harOverstyringAksjonspunkt}
            overrideReadOnly={overrideReadOnly}
            isSubmitting={formMethods.formState.isSubmitting}
            isPristine={!formMethods.formState.isDirty}
            toggleAv={toggleAv}
            erIkkeGodkjentAvBeslutter={erIkkeGodkjentAvBeslutter}
          >
            <FlexContainer>
              <FlexRow>
                <FlexColumn>
                  <Label size="small" className={!erIOverstyringsmodus || overrideReadOnly ? '' : styles.text}>
                    <FormattedMessage id="BeregningEngangsstonadForm.BeregnetEngangsstonad" />
                  </Label>
                </FlexColumn>
                <FlexColumn>
                  <InputField
                    name="beregnetTilkjentYtelse"
                    parse={value => {
                      // @ts-ignore Fiks
                      const parsedValue = parseInt(value, 10);
                      return Number.isNaN(parsedValue) ? value : parsedValue;
                    }}
                    className={styles.bredde}
                    validate={[required, hasValidInteger, minValue1, maxValue500000]}
                    readOnly={!erIOverstyringsmodus || overrideReadOnly}
                  />
                </FlexColumn>
                <FlexColumn>
                  <Label size="small" className={!erIOverstyringsmodus || overrideReadOnly ? '' : styles.text}>
                    <FormattedMessage id="BeregningEngangsstonadForm.Kroner" />
                  </Label>
                </FlexColumn>
              </FlexRow>
            </FlexContainer>
            <VerticalSpacer sixteenPx />
          </OverstyringPanel>
        </>
      )}
    </Form>
  );
};

BeregningsresultatEngangsstonadForm.defaultProps = {
  behandlingResultatstruktur: {
    beregnetTilkjentYtelse: 0,
    antallBarn: 0,
    satsVerdi: 0,
  },
};

export default BeregningsresultatEngangsstonadForm;

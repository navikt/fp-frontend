import React, { FunctionComponent, useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import {
  Element, Undertekst, Undertittel, Normaltekst,
} from 'nav-frontend-typografi';

import { Aksjonspunkt, BeregningsresultatEs } from '@fpsak-frontend/types';
import {
  VerticalSpacer, OverstyringKnapp, FlexColumn, FlexContainer, FlexRow,
} from '@navikt/ft-ui-komponenter';
import {
  formatCurrencyWithKr, hasValidInteger, maxValue, minValue, required, decodeHtmlEntity,
} from '@navikt/ft-utils';
import { InputField, Form } from '@navikt/ft-form-hooks';
import aksjonspunktCode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { OverstyringPanel } from '@fpsak-frontend/prosess-felles';
import { OverstyringBeregningAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import styles from './beregningsresultatEngangsstonadForm.less';

const minValue1 = minValue(1);
const maxValue500000 = maxValue(500000);

type FormValues = {
  beregnetTilkjentYtelse?: number;
  begrunnelse?: string;
}

const buildInitialValues = (
  aksjonspunkter: Aksjonspunkt[],
  behandlingResultatstruktur?: BeregningsresultatEs,
): FormValues => {
  const aksjonspunkt = aksjonspunkter.find((ap) => ap.definisjon === aksjonspunktCode.OVERSTYR_BEREGNING);
  return {
    begrunnelse: decodeHtmlEntity(aksjonspunkt && aksjonspunkt.begrunnelse ? aksjonspunkt.begrunnelse : ''),
    beregnetTilkjentYtelse: behandlingResultatstruktur.beregnetTilkjentYtelse,
  };
};

const transformValues = (values: FormValues): OverstyringBeregningAp => ({
  kode: aksjonspunktCode.OVERSTYR_BEREGNING,
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
    toggleOverstyring((oldArray) => oldArray.filter((code) => code !== aksjonspunktCode.OVERSTYR_BEREGNING));
  }, []);
  const togglePa = useCallback(() => {
    toggleOverstyringsmodus(true);
    toggleOverstyring((oldArray) => [...oldArray, aksjonspunktCode.OVERSTYR_BEREGNING]);
  }, []);

  const harOverstyringAksjonspunkt = aksjonspunkter.some((ap) => ap.definisjon === aksjonspunktCode.OVERSTYR_BEREGNING) || false;

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values))}
      setDataOnUnmount={setFormData}
    >
      <FlexContainer>
        <FlexRow>
          <FlexColumn>
            <Undertittel><FormattedMessage id="BeregningEngangsstonadForm.Beregning" /></Undertittel>
          </FlexColumn>
          {(kanOverstyre || overrideReadOnly) && (
            <FlexColumn>
              <OverstyringKnapp onClick={togglePa} erOverstyrt={erIOverstyringsmodus || !kanOverstyre} />
            </FlexColumn>
          )}
        </FlexRow>
      </FlexContainer>
      <VerticalSpacer eightPx />
      <Row>
        <Column xs="2">
          <Undertekst><FormattedMessage id="BeregningEngangsstonadForm.Sats" /></Undertekst>
        </Column>
        <Column xs="2">
          <Element>{formatCurrencyWithKr(behandlingResultatstruktur.satsVerdi)}</Element>
        </Column>
      </Row>
      <Row>
        <Column xs="2">
          <Undertekst><FormattedMessage id="BeregningEngangsstonadForm.AntallBarn" /></Undertekst>
        </Column>
        <Column xs="2">
          <Element>{behandlingResultatstruktur.antallBarn}</Element>
        </Column>
      </Row>
      {!erIOverstyringsmodus && !harOverstyringAksjonspunkt && (
        <>
          <Row>
            <Column xs="3">
              <hr className={styles.divider} />
            </Column>
          </Row>
          <Row>
            <Column xs="2">
              <Undertekst><FormattedMessage id="BeregningEngangsstonadForm.BeregnetEngangsstonad" /></Undertekst>
            </Column>
            <Column xs="2">
              <Element>{formatCurrencyWithKr(behandlingResultatstruktur.beregnetTilkjentYtelse)}</Element>
            </Column>
          </Row>
        </>
      )}
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
                  <Normaltekst className={!erIOverstyringsmodus || overrideReadOnly ? '' : styles.text}>
                    <FormattedMessage id="BeregningEngangsstonadForm.BeregnetEngangsstonad" />
                  </Normaltekst>
                </FlexColumn>
                <FlexColumn>
                  <InputField
                    name="beregnetTilkjentYtelse"
                    parse={(value) => {
                      // @ts-ignore Fiks
                      const parsedValue = parseInt(value, 10);
                      return Number.isNaN(parsedValue) ? value : parsedValue;
                    }}
                    validate={[required, hasValidInteger, minValue1, maxValue500000]}
                    bredde="XS"
                    readOnly={!erIOverstyringsmodus || overrideReadOnly}
                  />
                </FlexColumn>
                <FlexColumn>
                  <Element className={!erIOverstyringsmodus || overrideReadOnly ? '' : styles.text}>
                    <FormattedMessage id="BeregningEngangsstonadForm.Kroner" />
                  </Element>
                </FlexColumn>
              </FlexRow>
            </FlexContainer>
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

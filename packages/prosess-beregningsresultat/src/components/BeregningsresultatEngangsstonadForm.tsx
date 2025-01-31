import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Detail, Heading, Label } from '@navikt/ds-react';
import { Form, InputField } from '@navikt/ft-form-hooks';
import { hasValidInteger, maxValue, minValue, required } from '@navikt/ft-form-validators';
import { FlexColumn, FlexContainer, FlexRow, OverstyringKnapp, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { decodeHtmlEntity, formatCurrencyWithKr } from '@navikt/ft-utils';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { OverstyringPanel } from '@navikt/fp-prosess-felles';
import { Aksjonspunkt, BeregningsresultatEs } from '@navikt/fp-types';
import { OverstyringBeregningAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useFormData, usePanelContext, usePanelOverstyring } from '@navikt/fp-utils';

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
  const aksjonspunkt = aksjonspunkter.find(ap => ap.definisjon === AksjonspunktKode.OVERSTYR_BEREGNING);
  return {
    begrunnelse: decodeHtmlEntity(aksjonspunkt && aksjonspunkt.begrunnelse ? aksjonspunkt.begrunnelse : ''),
    beregnetTilkjentYtelse: behandlingResultatstruktur?.beregnetTilkjentYtelse,
  };
};

const transformValues = (values: FormValues): OverstyringBeregningAp => ({
  kode: AksjonspunktKode.OVERSTYR_BEREGNING,
  beregnetTilkjentYtelse: values.beregnetTilkjentYtelse!,
  begrunnelse: values.begrunnelse,
});

interface Props {
  behandlingResultatstruktur?: BeregningsresultatEs;
}

/**
 * BeregningsresultatEngangsstonadForm
 *
 * Viser beregnet engangsstønad. Resultatet kan overstyres av Nav-ansatt med overstyr-rettighet.
 */
export const BeregningsresultatEngangsstonadForm = ({
  behandlingResultatstruktur = {
    beregnetTilkjentYtelse: 0,
    antallBarn: 0,
    satsVerdi: 0,
  },
}: Props) => {
  const { aksjonspunkterForPanel, submitCallback, alleMerknaderFraBeslutter } = usePanelContext();

  const erIkkeGodkjentAvBeslutter = aksjonspunkterForPanel.some(
    a => alleMerknaderFraBeslutter[a.definisjon]?.notAccepted,
  );

  const { formData, setFormData } = useFormData<FormValues>();

  const { toggleOverstyring, kanOverstyreAccess, overrideReadOnly } = usePanelOverstyring();

  const formMethods = useForm<FormValues>({
    defaultValues: formData || buildInitialValues(aksjonspunkterForPanel, behandlingResultatstruktur),
  });

  const [erIOverstyringsmodus, toggleOverstyringsmodus] = useState(false);
  const toggleAv = () => {
    toggleOverstyringsmodus(false);
    formMethods.reset();
    toggleOverstyring();
  };
  const togglePa = () => {
    toggleOverstyringsmodus(true);
    toggleOverstyring();
  };

  const harOverstyringAksjonspunkt =
    aksjonspunkterForPanel.some(ap => ap.definisjon === AksjonspunktKode.OVERSTYR_BEREGNING) || false;

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
          {(kanOverstyreAccess.isEnabled || overrideReadOnly) && (
            <FlexColumn>
              <OverstyringKnapp
                onClick={togglePa}
                erOverstyrt={erIOverstyringsmodus || !kanOverstyreAccess.isEnabled}
              />
            </FlexColumn>
          )}
        </FlexRow>
      </FlexContainer>
      <VerticalSpacer eightPx />
      <FlexContainer>
        <FlexRow>
          <FlexColumn className={styles.firstColWidth}>
            <Detail>
              <FormattedMessage id="BeregningEngangsstonadForm.Sats" />
            </Detail>
          </FlexColumn>
          <FlexColumn>
            <Label size="small">
              {behandlingResultatstruktur?.satsVerdi ? formatCurrencyWithKr(behandlingResultatstruktur.satsVerdi) : '-'}
            </Label>
          </FlexColumn>
        </FlexRow>
        <FlexRow>
          <FlexColumn className={styles.firstColWidth}>
            <Detail>
              <FormattedMessage id="BeregningEngangsstonadForm.AntallBarn" />
            </Detail>
          </FlexColumn>
          <FlexColumn>
            <Label size="small">
              {behandlingResultatstruktur?.antallBarn ? behandlingResultatstruktur.antallBarn : '-'}
            </Label>
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
                <Detail>
                  <FormattedMessage id="BeregningEngangsstonadForm.BeregnetEngangsstonad" />
                </Detail>
              </FlexColumn>
              <FlexColumn>
                <Label size="small">
                  {behandlingResultatstruktur?.beregnetTilkjentYtelse
                    ? formatCurrencyWithKr(behandlingResultatstruktur.beregnetTilkjentYtelse)
                    : '-'}
                </Label>
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
                      // @ts-expect-error Fiks
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

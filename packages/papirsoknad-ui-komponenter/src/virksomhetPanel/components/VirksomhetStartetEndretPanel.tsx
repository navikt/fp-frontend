import React, { FunctionComponent, useEffect } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { ErrorMessage, Label } from '@navikt/ds-react';
import { ArrowBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { hasValidDate, hasValidInteger, required, hasValidText } from '@navikt/ft-form-validators';
import { CheckboxField, Datepicker, InputField, RadioGroupPanel, TextAreaField } from '@navikt/ft-form-hooks';

import { useFormContext } from 'react-hook-form';
import styles from './virksomhetStartetEndretPanel.module.css';

type VirtuellFeilType = {
  ingenArsakValgt?: boolean;
};

export type FormValues = {
  varigEndretEllerStartetSisteFireAr?: boolean;
  harVarigEndring?: boolean;
  varigEndringGjeldendeFom?: string;
  erNyoppstartet?: boolean;
  erNyIArbeidslivet?: boolean;
  nyIArbeidslivetFom?: string;
  beskrivelseAvEndring?: string;
  inntekt?: number;
};

interface OwnProps {
  readOnly: boolean;
}

/**
 * VirksomhetStartetEndretPanel
 *
 * Komponenten vises som del av skjermbildet for registrering av
 * papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for søker.
 */
export const VirksomhetStartetEndretPanel: FunctionComponent<OwnProps> = ({ readOnly }) => {
  const intl = useIntl();
  const { watch, setError, clearErrors, formState } = useFormContext<FormValues & VirtuellFeilType>();
  const varigEndretEllerStartetSisteFireAr = watch('varigEndretEllerStartetSisteFireAr') || false;
  const harVarigEndring = watch('harVarigEndring') || false;
  const erNyoppstartet = watch('erNyoppstartet') || false;
  const erNyIArbeidslivet = watch('erNyIArbeidslivet') || false;

  const isError = !harVarigEndring && !erNyoppstartet && !erNyIArbeidslivet;

  useEffect(() => {
    if (isError && varigEndretEllerStartetSisteFireAr) {
      setError('ingenArsakValgt', {
        type: 'custom',
        message: intl.formatMessage({ id: 'Registrering.VirksomhetStartetPanel.MaFylleUtEnArsak' }),
      });
    }
    if (!isError || !varigEndretEllerStartetSisteFireAr) {
      clearErrors('ingenArsakValgt');
    }
  }, [isError, varigEndretEllerStartetSisteFireAr]);

  return (
    <>
      <VerticalSpacer sixteenPx />
      <RadioGroupPanel
        name="varigEndretEllerStartetSisteFireAr"
        label={<FormattedMessage id="Registrering.VirksomhetStartetPanel.NewlyStartedOrChanged" />}
        isReadOnly={readOnly}
        isTrueOrFalseSelection
        isHorizontal
        radios={[
          {
            label: <FormattedMessage id="Registrering.VirksomhetStartetPanel.Yes" />,
            value: 'true',
          },
          {
            label: <FormattedMessage id="Registrering.VirksomhetStartetPanel.No" />,
            value: 'false',
          },
        ]}
      />
      {varigEndretEllerStartetSisteFireAr && (
        <div>
          <VerticalSpacer eightPx />
          <ArrowBox>
            <Label size="small">
              <FormattedMessage id="Registrering.VirksomhetStartetPanel.Reason" />
            </Label>
            <VerticalSpacer fourPx />
            <CheckboxField
              name="harVarigEndring"
              label={<FormattedMessage id="Registrering.VirksomhetStartetPanel.HarVarigEndring" />}
            />
            <VerticalSpacer fourPx />
            {harVarigEndring && (
              <>
                <VerticalSpacer sixteenPx />
                <ArrowBox>
                  <Datepicker
                    name="varigEndringGjeldendeFom"
                    isReadOnly={readOnly}
                    validate={[hasValidDate, required]}
                    label={<FormattedMessage id="Registrering.VirksomhetStartetPanel.GjeldendeFom" />}
                  />
                </ArrowBox>
              </>
            )}
            <CheckboxField
              name="erNyoppstartet"
              label={<FormattedMessage id="Registrering.VirksomhetStartetPanel.ErNyoppstartet" />}
            />
            <VerticalSpacer fourPx />
            <CheckboxField
              name="erNyIArbeidslivet"
              label={<FormattedMessage id="Registrering.VirksomhetNyIArbeidslivetPanel.ErNyIArbeidslivet" />}
            />
            <VerticalSpacer fourPx />
            {erNyIArbeidslivet && (
              <>
                <VerticalSpacer sixteenPx />
                <ArrowBox>
                  <Datepicker
                    name="nyIArbeidslivetFom"
                    isReadOnly={readOnly}
                    validate={[hasValidDate, required]}
                    label={<FormattedMessage id="Registrering.VirksomhetStartetPanel.GjeldendeFom" />}
                  />
                </ArrowBox>
              </>
            )}
            {formState.isSubmitted && formState.errors?.ingenArsakValgt?.message && (
              <ErrorMessage>{formState.errors?.ingenArsakValgt?.message}</ErrorMessage>
            )}
            <VerticalSpacer sixteenPx />
            <TextAreaField
              name="beskrivelseAvEndring"
              label={<FormattedMessage id="Registrering.VirksomhetStartetPanel.VirksomhetEndretBeskrivelse" />}
              validate={[hasValidText]}
            />
            <VerticalSpacer sixteenPx />
            <InputField
              name="inntekt"
              label={<FormattedMessage id="Registrering.VirksomhetStartetPanel.Inntekt" />}
              readOnly={readOnly}
              validate={[hasValidInteger, required]}
              className={styles.inntektBredde}
              parse={value => {
                const parsedValue = parseInt(value.toString(), 10);
                return Number.isNaN(parsedValue) ? value : parsedValue;
              }}
            />
          </ArrowBox>
        </div>
      )}
      <VerticalSpacer eightPx />
    </>
  );
};

export default VirksomhetStartetEndretPanel;

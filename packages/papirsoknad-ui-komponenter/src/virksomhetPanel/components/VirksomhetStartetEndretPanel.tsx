import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Undertekst } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';
import { ArrowBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import {
  hasValidDate, hasValidInteger, required, hasValidText,
} from '@navikt/ft-form-validators';
import {
  CheckboxField, Datepicker, InputField, RadioGroupField, RadioOption, TextAreaField, formHooks,
} from '@navikt/ft-form-hooks';

export type FormValues = {
  varigEndretEllerStartetSisteFireAr?: boolean;
  harVarigEndring?: boolean;
  varigEndringGjeldendeFom?: string;
  erNyoppstartet?: boolean;
  erNyIArbeidslivet?: boolean;
  nyIArbeidslivetFom?: string;
  beskrivelseAvEndring?: string;
  inntekt?: number;
}

interface OwnProps {
  readOnly: boolean;
}

/**
 * VirksomhetStartetEndretPanel
 *
 * Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av
 * papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for søker.
 */
export const VirksomhetStartetEndretPanel: FunctionComponent<OwnProps> = ({
  readOnly,
}) => {
  const { watch } = formHooks.useFormContext<FormValues>();
  const varigEndretEllerStartetSisteFireAr = watch('varigEndretEllerStartetSisteFireAr') || false;
  const harVarigEndring = watch('harVarigEndring') || false;
  const erNyIArbeidslivet = watch('erNyIArbeidslivet') || false;

  return (
    <>
      <VerticalSpacer sixteenPx />
      <Undertekst><FormattedMessage id="Registrering.VirksomhetStartetPanel.NewlyStartedOrChanged" /></Undertekst>
      <VerticalSpacer fourPx />
      <RadioGroupField name="varigEndretEllerStartetSisteFireAr" readOnly={readOnly} parse={(value: string) => value === 'true'}>
        <RadioOption key="Ja" label={<FormattedMessage id="Registrering.VirksomhetStartetPanel.Yes" />} value="true" />
        <RadioOption key="Nei" label={<FormattedMessage id="Registrering.VirksomhetStartetPanel.No" />} value="false" />
      </RadioGroupField>
      {varigEndretEllerStartetSisteFireAr && (
        <Row>
          <Column xs="6">
            <ArrowBox>
              <Undertekst><FormattedMessage id="Registrering.VirksomhetStartetPanel.Reason" /></Undertekst>
              <VerticalSpacer fourPx />
              <CheckboxField name="harVarigEndring" label={<FormattedMessage id="Registrering.VirksomhetStartetPanel.HarVarigEndring" />} />
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
              <CheckboxField name="erNyoppstartet" label={<FormattedMessage id="Registrering.VirksomhetStartetPanel.ErNyoppstartet" />} />
              <VerticalSpacer fourPx />
              <CheckboxField name="erNyIArbeidslivet" label={<FormattedMessage id="Registrering.VirksomhetNyIArbeidslivetPanel.ErNyIArbeidslivet" />} />
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
              <TextAreaField
                name="beskrivelseAvEndring"
                label={<FormattedMessage id="Registrering.VirksomhetStartetPanel.VirksomhetEndretBeskrivelse" />}
                validate={[hasValidText]}
              />
              <InputField
                name="inntekt"
                label={<FormattedMessage id="Registrering.VirksomhetStartetPanel.Inntekt" />}
                readOnly={readOnly}
                validate={[hasValidInteger, required]}
                parse={(value: string) => {
                  const parsedValue = parseInt(value, 10);
                  return Number.isNaN(parsedValue) ? value : parsedValue;
                }}
                bredde="S"
              />
            </ArrowBox>
          </Column>
        </Row>
      )}
      <VerticalSpacer eightPx />
    </>
  );
};

export default VirksomhetStartetEndretPanel;

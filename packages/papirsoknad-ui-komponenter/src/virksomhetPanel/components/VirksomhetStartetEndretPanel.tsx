import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import { Undertekst } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';

import { ArrowBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import {
  hasValidDate, hasValidInteger, required, hasValidText,
} from '@navikt/ft-form-validators';
import {
  CheckboxField, DatepickerField, InputField, RadioGroupField, RadioOption, TextAreaField,
} from '@fpsak-frontend/form';

interface PureOwnProps {
  readOnly: boolean;
  form: string;
}

interface MappedOwnProps {
  varigEndretEllerStartetSisteFireAr?: boolean;
  harVarigEndring?: boolean;
  erNyIArbeidslivet?: boolean;
}

/**
 * VirksomhetStartetEndretPanel
 *
 * Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av
 * papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for
 * søker.
 */
export const VirksomhetStartetEndretPanel: FunctionComponent<PureOwnProps & MappedOwnProps> = ({
  readOnly,
  varigEndretEllerStartetSisteFireAr,
  erNyIArbeidslivet,
  harVarigEndring,
}) => (
  <>
    <VerticalSpacer sixteenPx />
    <Undertekst><FormattedMessage id="Registrering.VirksomhetStartetPanel.NewlyStartedOrChanged" /></Undertekst>
    <VerticalSpacer fourPx />
    <RadioGroupField name="varigEndretEllerStartetSisteFireAr" readOnly={readOnly}>
      <RadioOption key="Ja" label={<FormattedMessage id="Registrering.VirksomhetStartetPanel.Yes" />} value />
      <RadioOption key="Nei" label={<FormattedMessage id="Registrering.VirksomhetStartetPanel.No" />} value={false} />
    </RadioGroupField>
    {varigEndretEllerStartetSisteFireAr
    && (
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
                <DatepickerField
                  name="varigEndringGjeldendeFom"
                  readOnly={readOnly}
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
                <DatepickerField
                  name="nyIArbeidslivetFom"
                  readOnly={readOnly}
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
            parse={(value) => {
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

VirksomhetStartetEndretPanel.defaultProps = {
  varigEndretEllerStartetSisteFireAr: false,
  harVarigEndring: false,
  erNyIArbeidslivet: false,
};

const mapStateToProps = (state: any, initialProps: PureOwnProps): MappedOwnProps => ({
  varigEndretEllerStartetSisteFireAr: formValueSelector(initialProps.form)(state, 'varigEndretEllerStartetSisteFireAr'),
  harVarigEndring: formValueSelector(initialProps.form)(state, 'harVarigEndring'),
  erNyIArbeidslivet: formValueSelector(initialProps.form)(state, 'erNyIArbeidslivet'),
});

export default connect(mapStateToProps)(VirksomhetStartetEndretPanel);

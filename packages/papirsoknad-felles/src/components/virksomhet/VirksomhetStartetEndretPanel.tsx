import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import { Undertekst } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';

import { ArrowBox, VerticalSpacer } from '@fpsak-frontend/shared-components';
import { hasValidDate, hasValidInteger, required } from '@fpsak-frontend/utils';
import {
  CheckboxField, DatepickerField, InputField, RadioGroupField, RadioOption, TextAreaField,
} from '@fpsak-frontend/form';

type OwnVirksomhetStartetEndretPanelProps = {
    readOnly: boolean;
    varigEndretEllerStartetSisteFireAr?: boolean;
    harVarigEndring?: boolean;
    erNyIArbeidslivet?: boolean;
};

// @ts-expect-error ts-migrate(2456) FIXME: Type alias 'VirksomhetStartetEndretPanelProps' cir... Remove this comment to see the full error message
type VirksomhetStartetEndretPanelProps = OwnVirksomhetStartetEndretPanelProps & typeof VirksomhetStartetEndretPanel.defaultProps;

/**
 * VirksomhetStartetEndretPanel
 *
 * Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av
 * papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for
 * søker.
 */
// @ts-expect-error ts-migrate(7022) FIXME: 'VirksomhetStartetEndretPanel' implicitly has type... Remove this comment to see the full error message
export const VirksomhetStartetEndretPanel = ({
  readOnly, varigEndretEllerStartetSisteFireAr, erNyIArbeidslivet, harVarigEndring,
}: VirksomhetStartetEndretPanelProps) => (
  <>
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
          {harVarigEndring
          && (
          <ArrowBox>
            <DatepickerField
              name="varigEndringGjeldendeFom"
              readOnly={readOnly}
              // @ts-expect-error ts-migrate(2322) FIXME: Type 'null' is not assignable to type '({ id: stri... Remove this comment to see the full error message
              validate={[hasValidDate, required]}
              label={<FormattedMessage id="Registrering.VirksomhetStartetPanel.GjeldendeFom" />}
            />
          </ArrowBox>
          )}
          <CheckboxField name="erNyoppstartet" label={<FormattedMessage id="Registrering.VirksomhetStartetPanel.ErNyoppstartet" />} />
          <CheckboxField name="erNyIArbeidslivet" label={<FormattedMessage id="Registrering.VirksomhetNyIArbeidslivetPanel.ErNyIArbeidslivet" />} />
          {erNyIArbeidslivet
          && (
          <ArrowBox>
            <DatepickerField
              name="nyIArbeidslivetFom"
              readOnly={readOnly}
              // @ts-expect-error ts-migrate(2322) FIXME: Type '(text: any) => { id: string; }[] | null' is ... Remove this comment to see the full error message
              validate={[hasValidDate, required]}
              label={<FormattedMessage id="Registrering.VirksomhetStartetPanel.GjeldendeFom" />}
            />
          </ArrowBox>
          )}
          <TextAreaField
            name="beskrivelseAvEndring"
            label={<FormattedMessage id="Registrering.VirksomhetStartetPanel.VirksomhetEndretBeskrivelse" />}
          />
          <InputField
            name="inntekt"
            label={<FormattedMessage id="Registrering.VirksomhetStartetPanel.Inntekt" />}
            readOnly={readOnly}
            // @ts-expect-error ts-migrate(2322) FIXME: Type 'null' is not assignable to type '({ id: stri... Remove this comment to see the full error message
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

const mapStateToProps = (state: any, initialProps: any) => ({
  varigEndretEllerStartetSisteFireAr: formValueSelector(initialProps.form)(state, 'varigEndretEllerStartetSisteFireAr'),
  harVarigEndring: formValueSelector(initialProps.form)(state, 'harVarigEndring'),
  erNyIArbeidslivet: formValueSelector(initialProps.form)(state, 'erNyIArbeidslivet'),
});

export default connect(mapStateToProps)(VirksomhetStartetEndretPanel);

import React from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { FormSection, formValueSelector } from 'redux-form';
import { SkjemaGruppe } from 'nav-frontend-skjema';

// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__kodeverk` ... Remove this comment to see the full error message
import kanIkkeOppgiAnnenForelderArsaker from '@fpsak-frontend/kodeverk/src/kanIkkeOppgiAnnenForelderArsak';
import {
  CheckboxField, InputField, NavFieldGroup, RadioGroupField, RadioOption, SelectField,
} from '@fpsak-frontend/form';
import {
  hasValidFodselsnummer, hasValidFodselsnummerFormat, hasValidName, required, sammeFodselsnummerSomSokerMessage,
} from '@fpsak-frontend/utils';
import { ArrowBox, BorderBox } from '@fpsak-frontend/shared-components';
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__prop-types... Remove this comment to see the full error message
import { kodeverkPropType } from '@fpsak-frontend/prop-types';
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__kodeverk` ... Remove this comment to see the full error message
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__kodeverk` ... Remove this comment to see the full error message
import landkoder from '@fpsak-frontend/kodeverk/src/landkoder';

const countrySelectValues = (countryCodes: any) => countryCodes
  .filter(({
    kode,
  }: any) => kode !== landkoder.NORGE)
  .map(({
    kode,
    navn,
  }: any) => <option value={kode} key={kode}>{navn}</option>);

type KanIkkeOppgiBegrunnelsePanelProps = {
    readOnly: boolean;
    kanIkkeOppgiBegrunnelse: {};
    formatMessage: (...args: any[]) => any;
    countryCodes: {
        kode?: string;
        navn?: string;
    }[];
};

/*
 * AnnenForelderForm
 *
 * Form som brukes vid registrering av annen forelder.
 */
export const KanIkkeOppgiBegrunnelsePanel = ({
  readOnly, kanIkkeOppgiBegrunnelse, formatMessage, countryCodes,
}: KanIkkeOppgiBegrunnelsePanelProps) => (
  <NavFieldGroup title={formatMessage({ id: 'Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.Title' })}>
    <RadioGroupField name="arsak" columns={1} readOnly={readOnly}>
      <RadioOption label={{ id: 'Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.1' }} value={kanIkkeOppgiAnnenForelderArsaker.UKJENT_FORELDER} />
      <RadioOption label={{ id: 'Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.2' }} value={kanIkkeOppgiAnnenForelderArsaker.IKKE_NORSK_FNR} />
    </RadioGroupField>
    {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'arsak' does not exist on type '{}'. */}
    {kanIkkeOppgiBegrunnelse.arsak === kanIkkeOppgiAnnenForelderArsaker.IKKE_NORSK_FNR
    && (
      <>
        <SelectField
          name="land"
          label={formatMessage({ id: 'Registrering.TheOtherParent.CannotSpecifyOtherParent.Land' })}
          selectValues={countrySelectValues(countryCodes)}
          bredde="l"
          readOnly={readOnly}
        />
        <InputField
          name="utenlandskFoedselsnummer"
          label={formatMessage({ id: 'Registrering.TheOtherParent.CannotSpecifyOtherParent.UtenlandsFodselsnummer' })}
          bredde="S"
          readOnly={readOnly}
        />
      </>
    )}
  </NavFieldGroup>
);

type OwnAnnenForelderPanelImplProps = {
    intl: {};
    countryCodes: any; // TODO: kodeverkPropType
    kanIkkeOppgiAnnenForelder?: boolean;
    kanIkkeOppgiBegrunnelse?: {};
    readOnly?: boolean;
    permisjonRettigheterPanel?: React.ReactNode;
};

// @ts-expect-error ts-migrate(2456) FIXME: Type alias 'AnnenForelderPanelImplProps' circularl... Remove this comment to see the full error message
type AnnenForelderPanelImplProps = OwnAnnenForelderPanelImplProps & typeof AnnenForelderPanelImpl.defaultProps;

// @ts-expect-error ts-migrate(7022) FIXME: 'AnnenForelderPanelImpl' implicitly has type 'any'... Remove this comment to see the full error message
export const AnnenForelderPanelImpl = ({
  readOnly, intl, countryCodes, kanIkkeOppgiAnnenForelder, kanIkkeOppgiBegrunnelse, permisjonRettigheterPanel,
}: AnnenForelderPanelImplProps) => {
  const { formatMessage } = intl;
  const sortedCountriesByName = countryCodes.slice().sort((a: any, b: any) => a.navn.localeCompare(b.navn));
  return (
    <BorderBox>
      <SkjemaGruppe legend={formatMessage({ id: 'Registrering.TheOtherParent.Title' })}>
        <InputField
          name="foedselsnummer"
          label={formatMessage({ id: 'Registrering.TheOtherParent.Fodselsnummer' })}
          bredde="S"
          parse={(value) => (value ? value.replace(/\s/g, '') : value)}
          readOnly={readOnly}
          disabled={kanIkkeOppgiAnnenForelder}
        />
        <CheckboxField
          name="kanIkkeOppgiAnnenForelder"
          label={formatMessage({ id: 'Registrering.TheOtherParent.CannotSpecifyOtherParent' })}
          readOnly={readOnly}
        />
        {kanIkkeOppgiAnnenForelder === true
        && (
          <ArrowBox>
            <FormSection name="kanIkkeOppgiBegrunnelse">
              <KanIkkeOppgiBegrunnelsePanel
                kanIkkeOppgiBegrunnelse={kanIkkeOppgiBegrunnelse}
                formatMessage={formatMessage}
                countryCodes={sortedCountriesByName}
                readOnly={readOnly}
              />
            </FormSection>
          </ArrowBox>
        )}
        {permisjonRettigheterPanel}
      </SkjemaGruppe>
    </BorderBox>
  );
};

AnnenForelderPanelImpl.defaultProps = {
  kanIkkeOppgiAnnenForelder: null,
  kanIkkeOppgiBegrunnelse: {},
  readOnly: true,
  permisjonRettigheterPanel: undefined,
};

const mapStateToProps = (state: any, initialProps: any) => ({
  countryCodes: initialProps.alleKodeverk[kodeverkTyper.LANDKODER],
  ...formValueSelector(initialProps.form)(state, initialProps.namePrefix),
});

const AnnenForelderPanel = connect(mapStateToProps)(injectIntl(AnnenForelderPanelImpl));

// @ts-expect-error ts-migrate(2339) FIXME: Property 'validate' does not exist on type 'Connec... Remove this comment to see the full error message
AnnenForelderPanel.validate = (sokerPersonnummer: any, values = {}) => {
  const errors = {};
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'kanIkkeOppgiAnnenForelder' does not exis... Remove this comment to see the full error message
  if (values.kanIkkeOppgiAnnenForelder) {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'kanIkkeOppgiBegrunnelse' does not exist ... Remove this comment to see the full error message
    const begrunnelse = values.kanIkkeOppgiBegrunnelse || {};
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'kanIkkeOppgiBegrunnelse' does not exist ... Remove this comment to see the full error message
    errors.kanIkkeOppgiBegrunnelse = {};
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'kanIkkeOppgiBegrunnelse' does not exist ... Remove this comment to see the full error message
    errors.kanIkkeOppgiBegrunnelse.arsak = required(begrunnelse.arsak);
  } else {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'fornavn' does not exist on type '{}'.
    errors.fornavn = required(values.fornavn) || hasValidName(values.fornavn);
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'etternavn' does not exist on type '{}'.
    errors.etternavn = required(values.etternavn) || hasValidName(values.etternavn);
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'foedselsnummer' does not exist on type '... Remove this comment to see the full error message
    errors.foedselsnummer = required(values.foedselsnummer)
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'foedselsnummer' does not exist on type '... Remove this comment to see the full error message
      || hasValidFodselsnummerFormat(values.foedselsnummer)
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'foedselsnummer' does not exist on type '... Remove this comment to see the full error message
      || hasValidFodselsnummer(values.foedselsnummer)
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'foedselsnummer' does not exist on type '... Remove this comment to see the full error message
      || ((values.foedselsnummer === sokerPersonnummer) ? sammeFodselsnummerSomSokerMessage() : null);
  }
  return errors;
};

export default AnnenForelderPanel;

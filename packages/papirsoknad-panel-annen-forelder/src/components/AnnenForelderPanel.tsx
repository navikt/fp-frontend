import React, { FunctionComponent, ReactNode } from 'react';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import { connect } from 'react-redux';
import { FormSection, formValueSelector } from 'redux-form';
import { SkjemaGruppe } from 'nav-frontend-skjema';

import kanIkkeOppgiAnnenForelderArsaker from '@fpsak-frontend/kodeverk/src/kanIkkeOppgiAnnenForelderArsak';
import {
  CheckboxField, InputField, NavFieldGroup, RadioGroupField, RadioOption, SelectField,
} from '@fpsak-frontend/form';
import {
  hasValidFodselsnummer, hasValidFodselsnummerFormat, hasValidName, required, sammeFodselsnummerSomSokerMessage,
} from '@fpsak-frontend/utils';
import { ArrowBox, BorderBox } from '@fpsak-frontend/shared-components';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import landkoder from '@fpsak-frontend/kodeverk/src/landkoder';
import { KodeverkMedNavn } from '@fpsak-frontend/types';

const countrySelectValues = (countryCodes: KodeverkMedNavn[]) => countryCodes
  .filter(({
    kode,
  }) => kode !== landkoder.NORGE)
  .map(({
    kode,
    navn,
  }) => <option value={kode} key={kode}>{navn}</option>);

interface OwnProps {
  readOnly: boolean;
  kanIkkeOppgiBegrunnelse: {};
  formatMessage: (...args: any[]) => any;
  countryCodes: KodeverkMedNavn[];
}

/*
 * AnnenForelderForm
 *
 * Form som brukes vid registrering av annen forelder.
 */
export const KanIkkeOppgiBegrunnelsePanel: FunctionComponent<OwnProps> = ({
  readOnly,
  kanIkkeOppgiBegrunnelse,
  formatMessage,
  countryCodes,
}) => (
  <NavFieldGroup title={formatMessage({ id: 'Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.Title' })}>
    <RadioGroupField name="arsak" columns={1} readOnly={readOnly}>
      <RadioOption label={{ id: 'Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.1' }} value={kanIkkeOppgiAnnenForelderArsaker.UKJENT_FORELDER} />
      <RadioOption label={{ id: 'Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.2' }} value={kanIkkeOppgiAnnenForelderArsaker.IKKE_NORSK_FNR} />
    </RadioGroupField>
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

interface OwnPropsAnnenForelderPanel {
  countryCodes: KodeverkMedNavn[];
  kanIkkeOppgiAnnenForelder?: boolean;
  kanIkkeOppgiBegrunnelse?: {};
  readOnly?: boolean;
  permisjonRettigheterPanel?: ReactNode;
}

export const AnnenForelderPanelImpl: FunctionComponent<OwnPropsAnnenForelderPanel & WrappedComponentProps> = ({
  readOnly,
  intl,
  countryCodes,
  kanIkkeOppgiAnnenForelder,
  kanIkkeOppgiBegrunnelse,
  permisjonRettigheterPanel,
}) => {
  const { formatMessage } = intl;
  const sortedCountriesByName = countryCodes.slice().sort((a, b) => a.navn.localeCompare(b.navn));
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
  kanIkkeOppgiBegrunnelse: {},
  readOnly: true,
};

const mapStateToProps = (state: any, initialProps: OwnProps) => ({
  countryCodes: initialProps.alleKodeverk[kodeverkTyper.LANDKODER],
  ...formValueSelector(initialProps.form)(state, initialProps.namePrefix),
});

const AnnenForelderPanel = connect(mapStateToProps)(injectIntl(AnnenForelderPanelImpl));

AnnenForelderPanel.validate = (sokerPersonnummer: any, values = {}) => {
  const errors = {};
  if (values.kanIkkeOppgiAnnenForelder) {
    const begrunnelse = values.kanIkkeOppgiBegrunnelse || {};
    errors.kanIkkeOppgiBegrunnelse = {};
    errors.kanIkkeOppgiBegrunnelse.arsak = required(begrunnelse.arsak);
  } else {
    errors.fornavn = required(values.fornavn) || hasValidName(values.fornavn);
    errors.etternavn = required(values.etternavn) || hasValidName(values.etternavn);
    errors.foedselsnummer = required(values.foedselsnummer)
      || hasValidFodselsnummerFormat(values.foedselsnummer)
      || hasValidFodselsnummer(values.foedselsnummer)
      || ((values.foedselsnummer === sokerPersonnummer) ? sammeFodselsnummerSomSokerMessage() : null);
  }
  return errors;
};

export default AnnenForelderPanel;

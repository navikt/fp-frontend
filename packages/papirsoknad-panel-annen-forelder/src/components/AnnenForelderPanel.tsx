import React, { FunctionComponent, ReactElement, ReactNode } from 'react';
import { connect } from 'react-redux';
import { useIntl } from 'react-intl';
import { FormSection, formValueSelector } from 'redux-form';
import { SkjemaGruppe } from 'nav-frontend-skjema';

import { SoknadData } from '@fpsak-frontend/papirsoknad-felles';
import kanIkkeOppgiAnnenForelderArsaker from '@fpsak-frontend/kodeverk/src/kanIkkeOppgiAnnenForelderArsak';
import {
  CheckboxField, InputField, NavFieldGroup, RadioGroupField, RadioOption, SelectField,
} from '@fpsak-frontend/form';
import {
  hasValidFodselsnummer, hasValidFodselsnummerFormat, hasValidName, required, sammeFodselsnummerSomSokerMessage,
} from '@navikt/ft-utils';
import { ArrowBox, BorderBox } from '@navikt/ft-ui-komponenter';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import landkoder from '@fpsak-frontend/kodeverk/src/landkoder';
import { AlleKodeverk, KodeverkMedNavn } from '@fpsak-frontend/types';

const countrySelectValues = (countryCodes: KodeverkMedNavn[]): ReactElement[] => countryCodes
  .filter(({
    kode,
  }) => kode !== landkoder.NORGE)
  .map(({
    kode,
    navn,
  }) => <option value={kode} key={kode}>{navn}</option>);

interface OwnProps {
  readOnly: boolean;
  kanIkkeOppgiBegrunnelse: {
    arsak: string;
  };
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

interface PureOwnPropsAnnenForelderPanel {
  readOnly?: boolean;
  permisjonRettigheterPanel?: ReactNode;
  form: string;
  namePrefix: string;
  alleKodeverk: AlleKodeverk;
  soknadData: SoknadData;
}

interface MappedOwnPropsAnnenForelderPanel {
  kanIkkeOppgiAnnenForelder?: boolean;
  kanIkkeOppgiBegrunnelse?: {
    arsak: string;
  };
}

export type FormValues = {
  kanIkkeOppgiAnnenForelder?: boolean;
  kanIkkeOppgiBegrunnelse: {
    arsak: string;
  };
  fornavn?: string;
  etternavn?: string;
  foedselsnummer?: string;
}

interface StaticFunctions {
  validate?: (sokerPersonnummer: string, values?: FormValues) => any,
}

export const AnnenForelderPanelImpl: FunctionComponent<PureOwnPropsAnnenForelderPanel & MappedOwnPropsAnnenForelderPanel> & StaticFunctions = ({
  readOnly = true,
  kanIkkeOppgiAnnenForelder,
  kanIkkeOppgiBegrunnelse = {
    arsak: '',
  },
  permisjonRettigheterPanel,
  alleKodeverk,
}) => {
  const countryCodes = alleKodeverk[kodeverkTyper.LANDKODER];
  const { formatMessage } = useIntl();
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

const mapStateToProps = (state: any, initialProps: PureOwnPropsAnnenForelderPanel) => ({
  ...formValueSelector(initialProps.form)(state, initialProps.namePrefix),
});

const AnnenForelderPanel = connect(mapStateToProps)(AnnenForelderPanelImpl);

AnnenForelderPanel.validate = (sokerPersonnummer, values?) => {
  if (!values) {
    return undefined;
  }
  if (values.kanIkkeOppgiAnnenForelder) {
    const begrunnelse = values.kanIkkeOppgiBegrunnelse || { arsak: undefined };
    return {
      kanIkkeOppgiBegrunnelse: {
        arsak: required(begrunnelse.arsak),
      },
    };
  }

  return {
    fornavn: required(values.fornavn) || hasValidName(values.fornavn),
    etternavn: required(values.etternavn) || hasValidName(values.etternavn),
    foedselsnummer: required(values.foedselsnummer)
      || hasValidFodselsnummerFormat(values.foedselsnummer)
      || hasValidFodselsnummer(values.foedselsnummer)
      || ((values.foedselsnummer === sokerPersonnummer) ? sammeFodselsnummerSomSokerMessage() : null),
  };
};

export default AnnenForelderPanel;

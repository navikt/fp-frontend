import React, {
  FunctionComponent, ReactElement, ReactNode, useMemo,
} from 'react';
import { useIntl } from 'react-intl';
import { SkjemaGruppe } from 'nav-frontend-skjema';
import {
  CheckboxField, formHooks, InputField, RadioGroupField, RadioOption, SelectField,
} from '@navikt/ft-form-hooks';
import { ArrowBox, BorderBox } from '@navikt/ft-ui-komponenter';
import { AlleKodeverk, KodeverkMedNavn } from '@navikt/ft-types';
import { Landkode, KodeverkType } from '@navikt/ft-kodeverk';

import kanIkkeOppgiAnnenForelderArsaker from '@fpsak-frontend/kodeverk/src/kanIkkeOppgiAnnenForelderArsak';

const ANNEN_FORELDER_NAME_PREFIX = 'annenForelder';
const KAN_IKKE_OPPGI_NAME_PREFIX = 'kanIkkeOppgiBegrunnelse';

const filtrerLandOgLagOptions = (landkoder: KodeverkMedNavn[]): ReactElement[] => landkoder
  .filter(({
    kode,
  }) => kode !== Landkode.NORGE)
  .map(({
    kode,
    navn,
  }) => <option value={kode} key={kode}>{navn}</option>);

interface OwnProps {
  readOnly?: boolean;
  permisjonRettigheterPanel?: ReactNode;
  alleKodeverk: AlleKodeverk;
}

export type FormValues = {
  kanIkkeOppgiAnnenForelder?: boolean;
  kanIkkeOppgiBegrunnelse: {
    arsak: string;
    land: string;
    utenlandskFoedselsnummer: string;
  };
  foedselsnummer?: string;
}

/*
 * AnnenForelderForm
 *
 * Form som brukes ved registrering av annen forelder.
 */
const AnnenForelderPanel: FunctionComponent<OwnProps> = ({
  readOnly = true,
  permisjonRettigheterPanel,
  alleKodeverk,
}) => {
  const { formatMessage } = useIntl();

  const { watch } = formHooks.useFormContext<{ [ANNEN_FORELDER_NAME_PREFIX]: FormValues }>();

  const kanIkkeOppgiAnnenForelder = watch(`${ANNEN_FORELDER_NAME_PREFIX}.kanIkkeOppgiAnnenForelder`);
  const kanIkkeOppgiBegrunnelse = watch(`${ANNEN_FORELDER_NAME_PREFIX}.${KAN_IKKE_OPPGI_NAME_PREFIX}`);

  const landkoder = alleKodeverk[KodeverkType.LANDKODER];
  const sorterteLand = useMemo(() => landkoder.slice().sort((a, b) => a.navn.localeCompare(b.navn)), [landkoder]);

  return (
    <BorderBox>
      <SkjemaGruppe legend={formatMessage({ id: 'Registrering.TheOtherParent.Title' })}>
        <InputField
          name={`${ANNEN_FORELDER_NAME_PREFIX}.foedselsnummer`}
          label={formatMessage({ id: 'Registrering.TheOtherParent.Fodselsnummer' })}
          bredde="S"
          parse={(value: string) => (value ? value.replace(/\s/g, '') : value)}
          readOnly={readOnly}
          disabled={kanIkkeOppgiAnnenForelder}
        />
        <CheckboxField
          name={`${ANNEN_FORELDER_NAME_PREFIX}.kanIkkeOppgiAnnenForelder`}
          label={formatMessage({ id: 'Registrering.TheOtherParent.CannotSpecifyOtherParent' })}
          readOnly={readOnly}
        />
        {kanIkkeOppgiAnnenForelder === true && (
          <ArrowBox>
            <SkjemaGruppe title={formatMessage({ id: 'Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.Title' })}>
              <RadioGroupField
                name={`${ANNEN_FORELDER_NAME_PREFIX}.${KAN_IKKE_OPPGI_NAME_PREFIX}.arsak`}
                readOnly={readOnly}
              >
                <RadioOption
                  label={formatMessage({ id: 'Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.1' })}
                  value={kanIkkeOppgiAnnenForelderArsaker.UKJENT_FORELDER}
                />
                <RadioOption
                  label={formatMessage({ id: 'Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.2' })}
                  value={kanIkkeOppgiAnnenForelderArsaker.IKKE_NORSK_FNR}
                />
              </RadioGroupField>
              {kanIkkeOppgiBegrunnelse.arsak === kanIkkeOppgiAnnenForelderArsaker.IKKE_NORSK_FNR && (
                <>
                  <SelectField
                    name={`${ANNEN_FORELDER_NAME_PREFIX}.${KAN_IKKE_OPPGI_NAME_PREFIX}.land`}
                    label={formatMessage({ id: 'Registrering.TheOtherParent.CannotSpecifyOtherParent.Land' })}
                    selectValues={filtrerLandOgLagOptions(sorterteLand)}
                    bredde="l"
                    readOnly={readOnly}
                  />
                  <InputField
                    name={`${ANNEN_FORELDER_NAME_PREFIX}.${KAN_IKKE_OPPGI_NAME_PREFIX}.utenlandskFoedselsnummer`}
                    label={formatMessage({ id: 'Registrering.TheOtherParent.CannotSpecifyOtherParent.UtenlandsFodselsnummer' })}
                    bredde="S"
                    readOnly={readOnly}
                  />
                </>
              )}
            </SkjemaGruppe>
          </ArrowBox>
        )}
        {permisjonRettigheterPanel}
      </SkjemaGruppe>
    </BorderBox>
  );
};

/*
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
};*/

export default AnnenForelderPanel;

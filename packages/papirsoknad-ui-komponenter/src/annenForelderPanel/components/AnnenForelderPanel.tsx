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
import {
  hasValidFodselsnummer, hasValidFodselsnummerFormat, required, sammeFodselsnummerSomSokerMessage,
} from '@navikt/ft-form-validators';

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
  fagsakPersonnummer: string;
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
  fagsakPersonnummer,
}) => {
  const { formatMessage } = useIntl();

  const { watch, trigger, formState: { isSubmitted } } = formHooks.useFormContext<{ [ANNEN_FORELDER_NAME_PREFIX]: FormValues }>();

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
          validate={kanIkkeOppgiAnnenForelder ? [] : [
            required,
            hasValidFodselsnummerFormat,
            hasValidFodselsnummer,
            (foedselsnummer) => (foedselsnummer === fagsakPersonnummer ? sammeFodselsnummerSomSokerMessage() : null),
          ]}
          disabled={kanIkkeOppgiAnnenForelder}
        />
        <CheckboxField
          name={`${ANNEN_FORELDER_NAME_PREFIX}.kanIkkeOppgiAnnenForelder`}
          label={formatMessage({ id: 'Registrering.TheOtherParent.CannotSpecifyOtherParent' })}
          readOnly={readOnly}
          onChange={() => (isSubmitted ? trigger() : undefined)}
        />
        {kanIkkeOppgiAnnenForelder === true && (
          <ArrowBox>
            <SkjemaGruppe title={formatMessage({ id: 'Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.Title' })}>
              <RadioGroupField
                name={`${ANNEN_FORELDER_NAME_PREFIX}.${KAN_IKKE_OPPGI_NAME_PREFIX}.arsak`}
                readOnly={readOnly}
                direction="vertical"
                validate={[required]}
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
              {kanIkkeOppgiBegrunnelse?.arsak === kanIkkeOppgiAnnenForelderArsaker.IKKE_NORSK_FNR && (
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

export default AnnenForelderPanel;

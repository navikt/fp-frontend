import React, {
  FunctionComponent, ReactElement, ReactNode, useMemo,
} from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Heading } from '@navikt/ds-react';
import {
  CheckboxField, formHooks, InputField, RadioGroupPanel, SelectField,
} from '@navikt/ft-form-hooks';
import { ArrowBox, BorderBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { AlleKodeverk, KodeverkMedNavn } from '@navikt/ft-types';
import { Landkode, KodeverkType } from '@navikt/ft-kodeverk';

import kanIkkeOppgiAnnenForelderArsaker from '@navikt/fp-kodeverk/src/kanIkkeOppgiAnnenForelderArsak';
import {
  hasValidFodselsnummer, hasValidFodselsnummerFormat, required, sammeFodselsnummerSomSokerMessage,
} from '@navikt/ft-form-validators';

import styles from './annenForelderPanel.less';

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
      <Heading size="small">
        <FormattedMessage id="Registrering.TheOtherParent.Title" />
      </Heading>
      <VerticalSpacer sixteenPx />
      <InputField
        name={`${ANNEN_FORELDER_NAME_PREFIX}.foedselsnummer`}
        label={formatMessage({ id: 'Registrering.TheOtherParent.Fodselsnummer' })}
        parse={(value: string) => (value ? value.replace(/\s/g, '') : value)}
        readOnly={readOnly}
        className={styles.inputBredde}
        validate={kanIkkeOppgiAnnenForelder ? [] : [
          required,
          hasValidFodselsnummerFormat,
          hasValidFodselsnummer,
          (foedselsnummer) => (foedselsnummer === fagsakPersonnummer ? sammeFodselsnummerSomSokerMessage() : null),
        ]}
        disabled={kanIkkeOppgiAnnenForelder}
      />
      <VerticalSpacer sixteenPx />
      <CheckboxField
        name={`${ANNEN_FORELDER_NAME_PREFIX}.kanIkkeOppgiAnnenForelder`}
        label={formatMessage({ id: 'Registrering.TheOtherParent.CannotSpecifyOtherParent' })}
        readOnly={readOnly}
        onChange={() => (isSubmitted ? trigger() : undefined)}
      />
      {kanIkkeOppgiAnnenForelder === true && (
        <>
          <VerticalSpacer eightPx />
          <ArrowBox>
            <Heading size="small">{formatMessage({ id: 'Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.Title' })}</Heading>
            <RadioGroupPanel
              name={`${ANNEN_FORELDER_NAME_PREFIX}.${KAN_IKKE_OPPGI_NAME_PREFIX}.arsak`}
              hideLegend
              validate={[required]}
              isReadOnly={readOnly}
              radios={[{
                label: formatMessage({ id: 'Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.1' }),
                value: kanIkkeOppgiAnnenForelderArsaker.UKJENT_FORELDER,
              }, {
                label: formatMessage({ id: 'Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.2' }),
                value: kanIkkeOppgiAnnenForelderArsaker.IKKE_NORSK_FNR,
              }]}
            />
            {kanIkkeOppgiBegrunnelse?.arsak === kanIkkeOppgiAnnenForelderArsaker.IKKE_NORSK_FNR && (
            <>
              <VerticalSpacer sixteenPx />
              <SelectField
                name={`${ANNEN_FORELDER_NAME_PREFIX}.${KAN_IKKE_OPPGI_NAME_PREFIX}.land`}
                label={formatMessage({ id: 'Registrering.TheOtherParent.CannotSpecifyOtherParent.Land' })}
                selectValues={filtrerLandOgLagOptions(sorterteLand)}
                validate={[required]}
                className={styles.inputBredde}
                readOnly={readOnly}
              />
              <VerticalSpacer sixteenPx />
              <InputField
                name={`${ANNEN_FORELDER_NAME_PREFIX}.${KAN_IKKE_OPPGI_NAME_PREFIX}.utenlandskFoedselsnummer`}
                label={formatMessage({ id: 'Registrering.TheOtherParent.CannotSpecifyOtherParent.UtenlandsFodselsnummer' })}
                validate={[required]}
                className={styles.inputBredde}
                readOnly={readOnly}
              />
            </>
            )}
          </ArrowBox>
        </>
      )}
      <VerticalSpacer sixteenPx />
      {permisjonRettigheterPanel}
    </BorderBox>
  );
};

export default AnnenForelderPanel;

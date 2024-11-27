import React, { ReactElement, ReactNode, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Heading } from '@navikt/ds-react';
import { CheckboxField, InputField, RadioGroupPanel, SelectField } from '@navikt/ft-form-hooks';
import {
  harSammeFodselsnummerSomSoker,
  hasValidFodselsnummer,
  hasValidFodselsnummerFormat,
  required,
} from '@navikt/ft-form-validators';
import { ArrowBox, BorderBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { KanIkkeOppgiAnnenForelderArsak, KodeverkType, Landkode } from '@navikt/fp-kodeverk';
import { AlleKodeverk, KodeverkMedNavn } from '@navikt/fp-types';

import styles from './annenForelderPanel.module.css';

const ANNEN_FORELDER_NAME_PREFIX = 'annenForelder';
const KAN_IKKE_OPPGI_NAME_PREFIX = 'kanIkkeOppgiBegrunnelse';

const filtrerLandOgLagOptions = (landkoder: KodeverkMedNavn[]): ReactElement[] =>
  landkoder
    .filter(({ kode }) => kode !== Landkode.NORGE)
    .map(({ kode, navn }) => (
      <option value={kode} key={kode}>
        {navn}
      </option>
    ));

interface Props {
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
};

/*
 * AnnenForelderForm
 *
 * Form som brukes ved registrering av annen forelder.
 */
export const AnnenForelderPanel = ({
  readOnly = true,
  permisjonRettigheterPanel,
  alleKodeverk,
  fagsakPersonnummer,
}: Props) => {
  const { formatMessage } = useIntl();

  const {
    watch,
    trigger,
    formState: { isSubmitted },
  } = useFormContext<{ [ANNEN_FORELDER_NAME_PREFIX]: FormValues }>();

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
        parse={value => (value ? value.toString().replace(/\s/g, '') : value)}
        readOnly={readOnly}
        className={styles.inputBredde}
        validate={
          kanIkkeOppgiAnnenForelder
            ? []
            : [
                required,
                hasValidFodselsnummerFormat,
                hasValidFodselsnummer,
                harSammeFodselsnummerSomSoker(fagsakPersonnummer),
              ]
        }
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
            <Heading size="small">
              {formatMessage({ id: 'Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.Title' })}
            </Heading>
            <RadioGroupPanel
              name={`${ANNEN_FORELDER_NAME_PREFIX}.${KAN_IKKE_OPPGI_NAME_PREFIX}.arsak`}
              hideLegend
              validate={[required]}
              isReadOnly={readOnly}
              radios={[
                {
                  label: formatMessage({ id: 'Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.1' }),
                  value: KanIkkeOppgiAnnenForelderArsak.UKJENT_FORELDER,
                },
                {
                  label: formatMessage({ id: 'Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.2' }),
                  value: KanIkkeOppgiAnnenForelderArsak.IKKE_NORSK_FNR,
                },
              ]}
            />
            {kanIkkeOppgiBegrunnelse?.arsak === KanIkkeOppgiAnnenForelderArsak.IKKE_NORSK_FNR && (
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
                  label={formatMessage({
                    id: 'Registrering.TheOtherParent.CannotSpecifyOtherParent.UtenlandsFodselsnummer',
                  })}
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

import React, { ReactElement, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { useIntl } from 'react-intl';
import { Heading, VStack } from '@navikt/ds-react';
import { CheckboxField, InputField, RadioGroupPanel, SelectField } from '@navikt/ft-form-hooks';
import { ArrowBox } from '@navikt/ft-ui-komponenter';

import { AlleKodeverk, KodeverkMedNavn } from '@navikt/fp-types';
import { KanIkkeOppgiAnnenForelderArsak, KodeverkType, Landkode } from '@navikt/fp-kodeverk';
import {
  hasValidFodselsnummer,
  hasValidFodselsnummerFormat,
  required,
  harSammeFodselsnummerSomSoker,
} from '@navikt/ft-form-validators';

import styles from './annenForelderPanel.module.css';
import { AnnenForelderSubFormValues, AnnenForelderFormValues } from '../types';
import { ANNEN_FORELDER_NAME_PREFIX, KAN_IKKE_OPPGI_NAME_PREFIX } from '../constant';

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
  alleKodeverk: AlleKodeverk;
  fagsakPersonnummer: string;
}

/*
 * AnnenForelderForm
 *
 * Form som brukes ved registrering av annen forelder.
 */
export const AnnenForelderPanel = ({ readOnly = true, alleKodeverk, fagsakPersonnummer }: Props) => {
  const { formatMessage } = useIntl();

  const {
    watch,
    trigger,
    formState: { isSubmitted },
  } = useFormContext<AnnenForelderFormValues>();

  const kanIkkeOppgiAnnenForelder = watch(`${ANNEN_FORELDER_NAME_PREFIX}.kanIkkeOppgiAnnenForelder`);
  const kanIkkeOppgiBegrunnelse = watch(`${ANNEN_FORELDER_NAME_PREFIX}.${KAN_IKKE_OPPGI_NAME_PREFIX}`);

  const landkoder = alleKodeverk[KodeverkType.LANDKODER];
  const sorterteLand = useMemo(() => landkoder.slice().sort((a, b) => a.navn.localeCompare(b.navn)), [landkoder]);

  return (
    <>
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
      <CheckboxField
        name={`${ANNEN_FORELDER_NAME_PREFIX}.kanIkkeOppgiAnnenForelder`}
        label={formatMessage({ id: 'Registrering.TheOtherParent.CannotSpecifyOtherParent' })}
        readOnly={readOnly}
        onChange={() => (isSubmitted ? trigger() : undefined)}
      />
      {kanIkkeOppgiAnnenForelder === true && (
        <ArrowBox>
          <VStack gap="4">
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
                <SelectField
                  name={`${ANNEN_FORELDER_NAME_PREFIX}.${KAN_IKKE_OPPGI_NAME_PREFIX}.land`}
                  label={formatMessage({ id: 'Registrering.TheOtherParent.CannotSpecifyOtherParent.Land' })}
                  selectValues={filtrerLandOgLagOptions(sorterteLand)}
                  validate={[required]}
                  className={styles.inputBredde}
                  readOnly={readOnly}
                />

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
          </VStack>
        </ArrowBox>
      )}
    </>
  );
};

AnnenForelderPanel.transformValues = ({
  foedselsnummer,
  kanIkkeOppgiAnnenForelder,
  kanIkkeOppgiBegrunnelse: { arsak, land, utenlandskFoedselsnummer } = {},
}: AnnenForelderSubFormValues): AnnenForelderSubFormValues => {
  if (kanIkkeOppgiAnnenForelder) {
    const erUkjentFar = arsak === kanIkkeOppgiAnnenForelderArsak.IKKE_NORSK_FNR;
    return {
      foedselsnummer: undefined,
      kanIkkeOppgiAnnenForelder: true,
      kanIkkeOppgiBegrunnelse: erUkjentFar ? { arsak, land, utenlandskFoedselsnummer } : { arsak },
    };
  }

  return {
    foedselsnummer,
    kanIkkeOppgiAnnenForelder: false,
    kanIkkeOppgiBegrunnelse: undefined,
  };
};

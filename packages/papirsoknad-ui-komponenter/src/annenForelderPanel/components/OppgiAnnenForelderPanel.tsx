import { type ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { Heading, VStack } from '@navikt/ds-react';
import { RhfCheckbox, RhfRadioGroup, RhfSelect, RhfTextField } from '@navikt/ft-form-hooks';
import {
  harSammeFodselsnummerSomSoker,
  hasValidFodselsnummer,
  hasValidFodselsnummerFormat,
  required,
} from '@navikt/ft-form-validators';
import { ArrowBox } from '@navikt/ft-ui-komponenter';

import { KanIkkeOppgiAnnenForelderArsak, Landkode } from '@navikt/fp-kodeverk';
import type { AlleKodeverk, KodeverkMedNavn } from '@navikt/fp-types';

import { ANNEN_FORELDER_NAME_PREFIX, KAN_IKKE_OPPGI_NAME_PREFIX } from '../constant';
import type { AnnenForelderFormValues, AnnenForelderSubFormValues } from '../types';

import styles from './annenForelderPanel.module.css';

const filtrerLandOgLagOptions = (landkoder: KodeverkMedNavn<'Landkoder'>[]): ReactElement[] =>
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

export const OppgiAnnenForelderPanel = ({ readOnly = true, alleKodeverk, fagsakPersonnummer }: Props) => {
  const { formatMessage } = useIntl();

  const {
    watch,
    control,
    trigger,
    formState: { isSubmitted },
  } = useFormContext<AnnenForelderFormValues>();

  const kanIkkeOppgiAnnenForelder = watch(`${ANNEN_FORELDER_NAME_PREFIX}.kanIkkeOppgiAnnenForelder`);
  const kanIkkeOppgiBegrunnelse = watch(`${ANNEN_FORELDER_NAME_PREFIX}.${KAN_IKKE_OPPGI_NAME_PREFIX}`);

  const landkoder = alleKodeverk['Landkoder'];
  const sorterteLand = landkoder.slice().sort((a, b) => a.navn.localeCompare(b.navn));

  return (
    <>
      <RhfTextField
        name={`${ANNEN_FORELDER_NAME_PREFIX}.foedselsnummer`}
        control={control}
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
      <RhfCheckbox
        name={`${ANNEN_FORELDER_NAME_PREFIX}.kanIkkeOppgiAnnenForelder`}
        control={control}
        label={formatMessage({ id: 'Registrering.TheOtherParent.CannotSpecifyOtherParent' })}
        readOnly={readOnly}
        onChange={() => (isSubmitted ? trigger() : undefined)}
      />
      {kanIkkeOppgiAnnenForelder === true && (
        <ArrowBox>
          <VStack gap="space-16">
            <Heading size="small" level="4">
              {formatMessage({ id: 'Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.Title' })}
            </Heading>
            <RhfRadioGroup
              name={`${ANNEN_FORELDER_NAME_PREFIX}.${KAN_IKKE_OPPGI_NAME_PREFIX}.arsak`}
              control={control}
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
                <RhfSelect
                  name={`${ANNEN_FORELDER_NAME_PREFIX}.${KAN_IKKE_OPPGI_NAME_PREFIX}.land`}
                  control={control}
                  label={formatMessage({ id: 'Registrering.TheOtherParent.CannotSpecifyOtherParent.Land' })}
                  selectValues={filtrerLandOgLagOptions(sorterteLand)}
                  validate={[required]}
                  className={styles.inputBredde}
                  readOnly={readOnly}
                />

                <RhfTextField
                  name={`${ANNEN_FORELDER_NAME_PREFIX}.${KAN_IKKE_OPPGI_NAME_PREFIX}.utenlandskFoedselsnummer`}
                  control={control}
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

OppgiAnnenForelderPanel.transformValues = ({
  foedselsnummer,
  kanIkkeOppgiAnnenForelder,
  kanIkkeOppgiBegrunnelse: { arsak, land, utenlandskFoedselsnummer } = {},
}: AnnenForelderSubFormValues): AnnenForelderSubFormValues => {
  if (kanIkkeOppgiAnnenForelder) {
    const erUkjentFar = arsak === KanIkkeOppgiAnnenForelderArsak.IKKE_NORSK_FNR;
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

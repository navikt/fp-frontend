import { type ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Heading, Radio, VStack } from '@navikt/ds-react';
import { RhfCheckbox, RhfRadioGroup, RhfSelect, RhfTextField } from '@navikt/ft-form-hooks';
import {
  harSammeFodselsnummerSomSoker,
  hasValidFodselsnummer,
  hasValidFodselsnummerFormat,
  required,
} from '@navikt/ft-form-validators';
import { ArrowBox } from '@navikt/ft-ui-komponenter';

import type { AlleKodeverk, KodeverkMedNavn } from '@navikt/fp-types';

import { ANNEN_FORELDER_NAME_PREFIX, KAN_IKKE_OPPGI_NAME_PREFIX } from '../constant';
import type { AnnenForelderFormValues, AnnenForelderSubFormValues } from '../types';
import type { KanIkkeOppgiAnnenForelderArsak } from './kanIkkeOppgiAnnenForelderArsak';

import styles from './annenForelderPanel.module.css';

const filtrerLandOgLagOptions = (landkoder: KodeverkMedNavn<'Landkoder'>[]): ReactElement[] =>
  landkoder
    .filter(({ kode }) => kode !== 'NOR')
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
  const årsak = watch(`${ANNEN_FORELDER_NAME_PREFIX}.${KAN_IKKE_OPPGI_NAME_PREFIX}.årsak`);

  const landkoder = alleKodeverk['Landkoder'];
  const sorterteLand = landkoder.slice().sort((a, b) => a.navn.localeCompare(b.navn));

  return (
    <>
      <RhfTextField
        name={`${ANNEN_FORELDER_NAME_PREFIX}.fødselsnummer`}
        control={control}
        label={formatMessage({ id: 'Registrering.TheOtherParent.Fodselsnummer' })}
        parse={value => (value ? value.toString().replace(/\s/g, '') : value)}
        readOnly={readOnly}
        className={styles['inputBredde']}
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
      <VStack gap="space-12">
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
                name={`${ANNEN_FORELDER_NAME_PREFIX}.${KAN_IKKE_OPPGI_NAME_PREFIX}.årsak`}
                control={control}
                legend=""
                hideLegend
                validate={[required]}
                readOnly={readOnly}
              >
                <Radio value={'UKJENT_FORELDER' satisfies KanIkkeOppgiAnnenForelderArsak} size="small">
                  <FormattedMessage id="Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.1" />
                </Radio>
                <Radio value={'IKKE_NORSK_FNR' satisfies KanIkkeOppgiAnnenForelderArsak} size="small">
                  <FormattedMessage id="Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.2" />
                </Radio>
              </RhfRadioGroup>
              {årsak === 'IKKE_NORSK_FNR' && (
                <>
                  <RhfSelect
                    name={`${ANNEN_FORELDER_NAME_PREFIX}.${KAN_IKKE_OPPGI_NAME_PREFIX}.land`}
                    control={control}
                    label={formatMessage({ id: 'Registrering.TheOtherParent.CannotSpecifyOtherParent.Land' })}
                    selectValues={filtrerLandOgLagOptions(sorterteLand)}
                    validate={[required]}
                    className={styles['inputBredde']}
                    readOnly={readOnly}
                  />

                  <RhfTextField
                    name={`${ANNEN_FORELDER_NAME_PREFIX}.${KAN_IKKE_OPPGI_NAME_PREFIX}.utenlandskFødselsnummer`}
                    control={control}
                    label={formatMessage({
                      id: 'Registrering.TheOtherParent.CannotSpecifyOtherParent.UtenlandsFodselsnummer',
                    })}
                    validate={[required]}
                    className={styles['inputBredde']}
                    readOnly={readOnly}
                  />
                </>
              )}
            </VStack>
          </ArrowBox>
        )}
      </VStack>
    </>
  );
};

OppgiAnnenForelderPanel.transformValues = ({
  fødselsnummer,
  kanIkkeOppgiAnnenForelder,
  kanIkkeOppgiBegrunnelse: { årsak, land, utenlandskFødselsnummer } = {},
}: AnnenForelderSubFormValues): AnnenForelderSubFormValues => {
  if (kanIkkeOppgiAnnenForelder) {
    const erUkjentFar = årsak === 'IKKE_NORSK_FNR';
    return {
      fødselsnummer: undefined,
      kanIkkeOppgiAnnenForelder: true,
      kanIkkeOppgiBegrunnelse: erUkjentFar ? { årsak, land, utenlandskFødselsnummer } : { årsak: årsak },
    };
  }

  return {
    fødselsnummer,
    kanIkkeOppgiAnnenForelder: false,
    kanIkkeOppgiBegrunnelse: undefined,
  };
};

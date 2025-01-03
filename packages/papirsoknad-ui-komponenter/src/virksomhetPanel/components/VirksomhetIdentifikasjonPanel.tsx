import React, { ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { HStack, VStack } from '@navikt/ds-react';
import { Datepicker, InputField, SelectField } from '@navikt/ft-form-hooks';
import {
  dateBeforeOrEqualToToday,
  hasValidDate,
  hasValidInteger,
  hasValidOrgNumber,
  required,
  validPeriodeFomTom,
} from '@navikt/ft-form-validators';
import { ArrowBox } from '@navikt/ft-ui-komponenter';

import { KodeverkType } from '@navikt/fp-kodeverk';
import { AlleKodeverk, KodeverkMedNavn } from '@navikt/fp-types';

import { TrueFalseInput } from '../../felles/TrueFalseInput';
import { VIRKSOMHET_FORM_NAME_PREFIX } from '../constants';
import { RegistrerVirksomhetFormValues, VirksomhetFormValues } from '../types';

import styles from './virksomhetIdentifikasjonPanel.module.css';

const countrySelectValues = (countryCodes: KodeverkMedNavn[]): ReactElement[] =>
  countryCodes.map(({ kode, navn }) => (
    <option value={kode} key={kode}>
      {navn}
    </option>
  ));

interface Props {
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
  index: number;
}

/**
 * VirksomhetIdentifikasjonPanel
 *
 * Komponenten vises som del av skjermbildet for registrering av
 * papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for søker.
 */
export const VirksomhetIdentifikasjonPanel = ({ index, readOnly, alleKodeverk }: Props) => {
  const intl = useIntl();
  const sortedCountriesByName = alleKodeverk[KodeverkType.LANDKODER]
    .slice()
    .sort((a, b) => a.navn.localeCompare(b.navn));

  const { getValues } = useFormContext<VirksomhetFormValues>();

  return (
    <TrueFalseInput
      name={`${VIRKSOMHET_FORM_NAME_PREFIX}.${index}.virksomhetRegistrertINorge`}
      label={<FormattedMessage id="Registrering.VirksomhetIdentifikasjonPanel.RegisteredInNorway" />}
      readOnly={readOnly}
      trueContent={
        <ArrowBox marginTop={8}>
          <InputField
            name={`${VIRKSOMHET_FORM_NAME_PREFIX}.${index}.organisasjonsnummer`}
            readOnly={readOnly}
            validate={[required, hasValidInteger, hasValidOrgNumber]}
            label={<FormattedMessage id="Registrering.VirksomhetIdentifikasjonPanel.OrganizationNumber" />}
          />
        </ArrowBox>
      }
      falseContent={
        <ArrowBox alignOffset={58} marginTop={8}>
          <VStack gap="4">
            <SelectField
              name={`${VIRKSOMHET_FORM_NAME_PREFIX}.${index}.landJobberFra`}
              className={styles.landBredde}
              selectValues={countrySelectValues(sortedCountriesByName)}
              validate={[required]}
              label={intl.formatMessage({ id: 'Registrering.VirksomhetIdentifikasjonPanel.Country' })}
            />

            <HStack gap="4">
              <Datepicker
                isReadOnly={readOnly}
                validate={[required, hasValidDate, dateBeforeOrEqualToToday]}
                name={`${VIRKSOMHET_FORM_NAME_PREFIX}.${index}.fom`}
                label={intl.formatMessage({ id: 'Registrering.VirksomhetIdentifikasjonPanel.periodeFom' })}
              />
              <Datepicker
                isReadOnly={readOnly}
                validate={[
                  hasValidDate,
                  tomDato => {
                    const fom = getValues(`${VIRKSOMHET_FORM_NAME_PREFIX}.${index}.fom`);
                    return fom ? validPeriodeFomTom(fom, tomDato) : null;
                  },
                ]}
                name={`${VIRKSOMHET_FORM_NAME_PREFIX}.${index}.tom`}
                label={intl.formatMessage({ id: 'Registrering.VirksomhetIdentifikasjonPanel.periodeTom' })}
              />
            </HStack>
          </VStack>
        </ArrowBox>
      }
    />
  );
};

VirksomhetIdentifikasjonPanel.transformValues = ({
  virksomhetRegistrertINorge,
  organisasjonsnummer,
  landJobberFra,
  fom,
  tom,
}: RegistrerVirksomhetFormValues) => ({
  virksomhetRegistrertINorge,
  organisasjonsnummer: virksomhetRegistrertINorge ? organisasjonsnummer : undefined,

  ...(virksomhetRegistrertINorge === false
    ? {
        landJobberFra,
        fom,
        tom,
      }
    : { landJobberFra: 'NOR' }),
});

import { type ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { HStack, VStack } from '@navikt/ds-react';
import { RhfDatepicker, RhfSelect, RhfTextField } from '@navikt/ft-form-hooks';
import {
  dateBeforeOrEqualToToday,
  hasValidDate,
  hasValidInteger,
  hasValidOrgNumber,
  required,
  validPeriodeFomTom,
} from '@navikt/ft-form-validators';
import { ArrowBox } from '@navikt/ft-ui-komponenter';

import type { AlleKodeverk, KodeverkMedNavn } from '@navikt/fp-types';

import { TrueFalseInput } from '../../felles/TrueFalseInput';
import { VIRKSOMHET_FORM_NAME_PREFIX } from '../constants';
import type { RegistrerVirksomhetFormValues, VirksomhetFormValues } from '../types';

import styles from './virksomhetIdentifikasjonPanel.module.css';

const countrySelectValues = (countryCodes: KodeverkMedNavn<'Landkoder'>[]): ReactElement[] =>
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
  const sortedCountriesByName = alleKodeverk['Landkoder'].slice().sort((a, b) => a.navn.localeCompare(b.navn));

  const { getValues, control } = useFormContext<VirksomhetFormValues>();

  return (
    <TrueFalseInput
      name={`${VIRKSOMHET_FORM_NAME_PREFIX}.${index}.virksomhetRegistrertINorge`}
      control={control}
      label={<FormattedMessage id="Registrering.VirksomhetIdentifikasjonPanel.RegisteredInNorway" />}
      readOnly={readOnly}
      trueContent={
        <ArrowBox marginTop={8}>
          <RhfTextField
            name={`${VIRKSOMHET_FORM_NAME_PREFIX}.${index}.organisasjonsnummer`}
            control={control}
            readOnly={readOnly}
            validate={[required, hasValidInteger, hasValidOrgNumber]}
            label={<FormattedMessage id="Registrering.VirksomhetIdentifikasjonPanel.OrganizationNumber" />}
          />
        </ArrowBox>
      }
      falseContent={
        <ArrowBox alignOffset={58} marginTop={8}>
          <VStack gap="4">
            <RhfSelect
              name={`${VIRKSOMHET_FORM_NAME_PREFIX}.${index}.landJobberFra`}
              control={control}
              className={styles.landBredde}
              selectValues={countrySelectValues(sortedCountriesByName)}
              validate={[required]}
              label={intl.formatMessage({ id: 'Registrering.VirksomhetIdentifikasjonPanel.Country' })}
            />

            <HStack gap="4">
              <RhfDatepicker
                name={`${VIRKSOMHET_FORM_NAME_PREFIX}.${index}.fom`}
                control={control}
                isReadOnly={readOnly}
                validate={[required, hasValidDate, dateBeforeOrEqualToToday]}
                label={intl.formatMessage({ id: 'Registrering.VirksomhetIdentifikasjonPanel.periodeFom' })}
              />
              <RhfDatepicker
                name={`${VIRKSOMHET_FORM_NAME_PREFIX}.${index}.tom`}
                control={control}
                isReadOnly={readOnly}
                validate={[
                  hasValidDate,
                  tomDato => {
                    const fom = getValues(`${VIRKSOMHET_FORM_NAME_PREFIX}.${index}.fom`);
                    return fom ? validPeriodeFomTom(fom, tomDato) : null;
                  },
                ]}
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

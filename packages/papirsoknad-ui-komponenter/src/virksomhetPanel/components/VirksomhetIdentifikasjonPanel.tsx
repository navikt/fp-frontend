import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Undertekst } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';
import {
  formHooks, Datepicker, InputField, RadioGroupField, RadioOption, SelectField,
} from '@navikt/ft-form-hooks';
import { ArrowBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import {
  dateBeforeOrEqualToToday, hasValidDate, hasValidInteger, hasValidOrgNumber, required, validPeriodeFomTom,
} from '@navikt/ft-form-validators';
import { AlleKodeverk, KodeverkMedNavn } from '@navikt/ft-types';
import { KodeverkType } from '@navikt/ft-kodeverk';

const countrySelectValues = (countryCodes: KodeverkMedNavn[]): ReactElement[] => countryCodes
  .map(({
    kode,
    navn,
  }) => <option value={kode} key={kode}>{navn}</option>);

interface OwnProps {
  readOnly?: boolean;
  alleKodeverk: AlleKodeverk;
}

export type FormValues = {
  fom?: string;
  tom?: string;
  navn?: string;
  virksomhetRegistrertINorge?: boolean;
  organisasjonsnummer?: string;
  landJobberFra?: string;
}

/**
 * VirksomhetIdentifikasjonPanel
 *
 * Komponenten vises som del av skjermbildet for registrering av
 * papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for søker.
 */
const VirksomhetIdentifikasjonPanel: FunctionComponent<OwnProps> = ({
  readOnly = true,
  alleKodeverk,
}) => {
  const intl = useIntl();
  const sortedCountriesByName = alleKodeverk[KodeverkType.LANDKODER].slice().sort((a, b) => a.navn.localeCompare(b.navn));

  const { watch, getValues } = formHooks.useFormContext<FormValues>();

  const virksomhetRegistrertINorge = watch('virksomhetRegistrertINorge');

  return (
    <>
      <InputField
        name="navn"
        bredde="XL"
        validate={[required]}
        label={<FormattedMessage id="Registrering.VirksomhetIdentifikasjonPanel.Name" />}
        readOnly={readOnly}
      />
      <VerticalSpacer sixteenPx />
      <Undertekst><FormattedMessage id="Registrering.VirksomhetIdentifikasjonPanel.RegisteredInNorway" /></Undertekst>
      <VerticalSpacer fourPx />
      <RadioGroupField
        name="virksomhetRegistrertINorge"
        validate={[required]}
        readOnly={readOnly}
        parse={(value: string) => value === 'true'}
      >
        <RadioOption key="Ja" label={<FormattedMessage id="Registrering.VirksomhetIdentifikasjonPanel.Yes" />} value="true" />
        <RadioOption key="Nei" label={<FormattedMessage id="Registrering.VirksomhetIdentifikasjonPanel.No" />} value="false" />
      </RadioGroupField>
      {virksomhetRegistrertINorge && (
        <>
          <Row>
            <Column xs="5">
              <ArrowBox>
                <InputField
                  name="organisasjonsnummer"
                  readOnly={readOnly}
                  validate={[required, hasValidInteger, hasValidOrgNumber]}
                  label={<FormattedMessage id="Registrering.VirksomhetIdentifikasjonPanel.OrganizationNumber" />}
                />
              </ArrowBox>
            </Column>
          </Row>
          <VerticalSpacer sixteenPx />
        </>
      )}
      {!virksomhetRegistrertINorge && virksomhetRegistrertINorge !== undefined && (
        <ArrowBox alignOffset={57}>
          <Row>
            <Column xs="5">
              <SelectField
                name="landJobberFra"
                selectValues={countrySelectValues(sortedCountriesByName)}
                validate={[required]}
                label={intl.formatMessage({ id: 'Registrering.VirksomhetIdentifikasjonPanel.Country' })}
              />
            </Column>
          </Row>
          <VerticalSpacer sixteenPx />
          <Row>
            <Column xs="4">
              <Datepicker
                isReadOnly={readOnly}
                validate={[required, hasValidDate, dateBeforeOrEqualToToday]}
                name="fom"
                label={intl.formatMessage({ id: 'Registrering.VirksomhetIdentifikasjonPanel.periodeFom' })}
              />
            </Column>
            <Column xs="3">
              <Datepicker
                isReadOnly={readOnly}
                validate={[hasValidDate, (fomDato) => validPeriodeFomTom(getValues('fom'), fomDato)]}
                name="tom"
                label={intl.formatMessage({ id: 'Registrering.VirksomhetIdentifikasjonPanel.periodeTom' })}
              />
            </Column>
          </Row>
        </ArrowBox>
      )}
    </>
  );
};

export default VirksomhetIdentifikasjonPanel;

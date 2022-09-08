import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import {
  formHooks, Datepicker, InputField, RadioGroupPanel, SelectField,
} from '@navikt/ft-form-hooks';
import { ArrowBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import {
  dateBeforeOrEqualToToday, hasValidDate, hasValidInteger, hasValidOrgNumber, required, validPeriodeFomTom,
} from '@navikt/ft-form-validators';
import { AlleKodeverk, KodeverkMedNavn } from '@navikt/ft-types';
import { KodeverkType } from '@navikt/ft-kodeverk';

import styles from './virksomhetIdentifikasjonPanel.less';

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
        validate={[required]}
        label={<FormattedMessage id="Registrering.VirksomhetIdentifikasjonPanel.Name" />}
        className={styles.navnBredde}
        readOnly={readOnly}
      />
      <VerticalSpacer sixteenPx />
      <RadioGroupPanel
        name="virksomhetRegistrertINorge"
        label={<FormattedMessage id="Registrering.VirksomhetIdentifikasjonPanel.RegisteredInNorway" />}
        validate={[required]}
        isReadOnly={readOnly}
        isTrueOrFalseSelection
        isHorizontal
        radios={[{
          label: intl.formatMessage({ id: 'Registrering.VirksomhetIdentifikasjonPanel.Yes' }),
          value: 'true',
        }, {
          label: intl.formatMessage({ id: 'Registrering.VirksomhetIdentifikasjonPanel.No' }),
          value: 'false',
        }]}
      />
      {virksomhetRegistrertINorge && (
        <>
          <Row>
            <Column xs="5">
              <VerticalSpacer eightPx />
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
        <>
          <VerticalSpacer eightPx />
          <ArrowBox alignOffset={57}>
            <Row>
              <Column xs="6">
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
        </>
      )}
    </>
  );
};

export default VirksomhetIdentifikasjonPanel;

import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { Undertekst } from 'nav-frontend-typografi';

import { formHooks, RadioGroupField, RadioOption } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

const ANNEN_FORELDER_NAME_PREFIX = 'annenForelder';

export type FormValues = {
  sokerHarAleneomsorg: boolean;
  denAndreForelderenHarRettPaForeldrepenger?: boolean;
  morMottarUføretrygd?: boolean;
  morHarForeldrepengerEØS?: boolean;
}

interface OwnProps {
  readOnly: boolean;
  denAndreForelderenHarRettPaForeldrepenger?: boolean;
  sokerErMor: boolean;
}

// TODO Kvifor ligg dette panelet her og ikkje under ANNEN_FORELDER?

/**
 * AndreYtelserPanel
 *
 * Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.
 */
const PermisjonRettigheterPanel: FunctionComponent<OwnProps> = ({
  readOnly,
  denAndreForelderenHarRettPaForeldrepenger,
  sokerErMor,
}) => {
  const intl = useIntl();

  const { watch } = formHooks.useFormContext<{ [ANNEN_FORELDER_NAME_PREFIX]: FormValues }>();
  const sokerHarAleneomsorg = watch(`${ANNEN_FORELDER_NAME_PREFIX}.sokerHarAleneomsorg`);

  return (
    <>
      <Undertekst>
        {intl.formatMessage({ id: 'Registrering.Permisjon.SøkerHarAleneomsorg' })}
      </Undertekst>
      <VerticalSpacer eightPx />
      <RadioGroupField
        validate={[required]}
        readOnly={readOnly}
        name={`${ANNEN_FORELDER_NAME_PREFIX}.sokerHarAleneomsorg`}
        parse={(value: string) => value === 'true'}
      >
        <RadioOption
          label={intl.formatMessage({ id: 'Registrering.Permisjon.SøkerHarAleneomsorg.Yes' })}
          value="true"
        />
        <RadioOption
          label={intl.formatMessage({ id: 'Registrering.Permisjon.SøkerHarAleneomsorg.No' })}
          value="false"
        />
      </RadioGroupField>
      {sokerHarAleneomsorg === false && (
        <div>
          <Undertekst>
            {intl.formatMessage({ id: 'Registrering.Permisjon.HarRettPaForeldrepenger' })}
          </Undertekst>
          <VerticalSpacer eightPx />
          <RadioGroupField
            name={`${ANNEN_FORELDER_NAME_PREFIX}.denAndreForelderenHarRettPaForeldrepenger`}
            validate={[required]}
            readOnly={readOnly}
            parse={(value: string) => value === 'true'}
          >
            <RadioOption label={intl.formatMessage({ id: 'Registrering.Permisjon.HarRettPaForeldrepenger.Yes' })} value="true" />
            <RadioOption label={intl.formatMessage({ id: 'Registrering.Permisjon.HarRettPaForeldrepenger.No' })} value="false" />
          </RadioGroupField>
        </div>
      )}
      {!sokerErMor && sokerHarAleneomsorg === false && denAndreForelderenHarRettPaForeldrepenger === false && (
        <div>
          <Undertekst>
            {intl.formatMessage({ id: 'Registrering.Permisjon.MorUføretrygd' })}
          </Undertekst>
          <VerticalSpacer eightPx />
          <RadioGroupField
            name={`${ANNEN_FORELDER_NAME_PREFIX}.morMottarUføretrygd`}
            validate={[required]}
            readOnly={readOnly}
            parse={(value: string) => value === 'true'}
          >
            <RadioOption label={intl.formatMessage({ id: 'Registrering.Permisjon.MorUføretrygd.Yes' })} value="true" />
            <RadioOption label={intl.formatMessage({ id: 'Registrering.Permisjon.MorUføretrygd.No' })} value="false" />
          </RadioGroupField>
          <Undertekst>
            {intl.formatMessage({ id: 'Registrering.Permisjon.MorForeldrepengerEØS' })}
          </Undertekst>
          <VerticalSpacer eightPx />
          <RadioGroupField
            name={`${ANNEN_FORELDER_NAME_PREFIX}.morHarForeldrepengerEØS`}
            validate={[required]}
            readOnly={readOnly}
          >
            <RadioOption label={intl.formatMessage({ id: 'Registrering.Permisjon.MorForeldrepengerEØS.Yes' })} value="true" />
            <RadioOption label={intl.formatMessage({ id: 'Registrering.Permisjon.MorForeldrepengerEØS.No' })} value="false" />
          </RadioGroupField>
        </div>
      )}
    </>
  );
};

export default PermisjonRettigheterPanel;

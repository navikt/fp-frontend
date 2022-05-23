import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { Undertekst } from 'nav-frontend-typografi';
import { SkjemaGruppe } from 'nav-frontend-skjema';
import { RadioGroupField, RadioOption, formHooks } from '@navikt/ft-form-hooks';
import { ArrowBox, BorderBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { AlleKodeverk } from '@navikt/ft-types';
import { KodeverkType } from '@navikt/ft-kodeverk';

import familieHendelseType from '@fpsak-frontend/kodeverk/src/familieHendelseType';

import SoknadData from '../../felles/SoknadData';
import UtenlandsOppholdField, { FormValues as FormValuesFieldArray } from './UtenlandsOppholdField';

import styles from './oppholdINorgePanel.less';

interface OwnProps {
  soknadData: SoknadData;
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
}

export type FormValues = {
  oppholdINorge?: boolean;
  harTidligereOppholdUtenlands?: boolean;
  harFremtidigeOppholdUtenlands?: boolean;
  tidligereOppholdUtenlands?: FormValuesFieldArray[];
  fremtidigeOppholdUtenlands?: FormValuesFieldArray[];
  mottattDato?: string;
};

interface StaticFunctions {
  buildInitialValues?: () => FormValues;
}

/**
 * OppholdINorgePanel
 *
 * Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder engangsstønad.
 * Inneholder delen av skjemaet som omhandler informasjon om utenlandsopphold.
 * Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.
 */
const OppholdINorgePanel: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly = true,
  alleKodeverk,
  soknadData,
}) => {
  const { formatMessage } = useIntl();
  const sortedCountriesByName = alleKodeverk[KodeverkType.LANDKODER].slice().sort((a, b) => a.navn.localeCompare(b.navn));

  const { watch } = formHooks.useFormContext<any>();
  const harTidligereOppholdUtenlands = watch('harTidligereOppholdUtenlands') || false;
  const harFremtidigeOppholdUtenlands = watch('harFremtidigeOppholdUtenlands') || false;

  return (
    <BorderBox>
      <SkjemaGruppe className={styles.fullWidth} legend={formatMessage({ id: 'Registrering.Opphold' })}>
        {soknadData.getFamilieHendelseType() === familieHendelseType.ADOPSJON && (
          <Undertekst>
            {` ${formatMessage({ id: 'Registrering.OppholdVedAdopsjon' })} `}
          </Undertekst>
        )}
        {soknadData.getFamilieHendelseType() !== familieHendelseType.ADOPSJON && (
          <Undertekst>
            {` ${formatMessage({ id: 'Registrering.OppholdVedFodsel' })} `}
          </Undertekst>
        )}
        <VerticalSpacer eightPx />
        <RadioGroupField name="oppholdINorge" readOnly={readOnly} parse={(value: string) => value === 'true'}>
          <RadioOption label={formatMessage({ id: 'Registrering.Opphold.Yes' })} value="true" />
          <RadioOption label={formatMessage({ id: 'Registrering.Opphold.No' })} value="false" />
        </RadioGroupField>
        <Undertekst>
          {` ${formatMessage({ id: 'Registrering.OppholdSisteTolv' })} `}
        </Undertekst>
        <VerticalSpacer eightPx />
        <RadioGroupField name="harTidligereOppholdUtenlands" readOnly={readOnly} parse={(value: string) => value === 'true'}>
          <RadioOption label={formatMessage({ id: 'Registrering.Opphold.Yes' })} value="false" />
          <RadioOption label={formatMessage({ id: 'Registrering.Opphold.No' })} value="true" />
        </RadioGroupField>
        {harTidligereOppholdUtenlands ? (
          <ArrowBox alignOffset={64}>
            <UtenlandsOppholdField
              erTidligereOpphold
              countryCodes={sortedCountriesByName}
              readOnly={readOnly}
            />
          </ArrowBox>
        ) : null}
        <Undertekst>
          {` ${formatMessage({ id: 'Registrering.OppholdNesteTolv' })} `}
        </Undertekst>
        <VerticalSpacer eightPx />
        <RadioGroupField name="harFremtidigeOppholdUtenlands" readOnly={readOnly} parse={(value: string) => value === 'true'}>
          <RadioOption label={formatMessage({ id: 'Registrering.Opphold.Yes' })} value="false" />
          <RadioOption label={formatMessage({ id: 'Registrering.Opphold.No' })} value="true" />
        </RadioGroupField>
        {harFremtidigeOppholdUtenlands ? (
          <ArrowBox alignOffset={64}>
            <UtenlandsOppholdField
              erTidligereOpphold={false}
              countryCodes={sortedCountriesByName}
              readOnly={readOnly}
            />
          </ArrowBox>
        ) : null}
      </SkjemaGruppe>
    </BorderBox>
  );
};

/* type OppholdErrors = {
  oppholdINorge?: string;
  harTidligereOppholdUtenlands?: string;
  tidligereOppholdUtenlands?: string;
  harFremtidigeOppholdUtenlands?: string;
  fremtidigeOppholdUtenlands?: string;
}

OppholdINorgePanel.validate = (values: FormValues) => {
  const errors = {
    oppholdINorge: undefined,
    harTidligereOppholdUtenlands: undefined,
    tidligereOppholdUtenlands: undefined,
    harFremtidigeOppholdUtenlands: undefined,
    fremtidigeOppholdUtenlands: undefined,
  } as OppholdErrors;
  if (values.oppholdINorge === undefined) {
    errors.oppholdINorge = isRequiredMessage();
  }
  if (values.harTidligereOppholdUtenlands === undefined) {
    errors.harTidligereOppholdUtenlands = isRequiredMessage();
  } else if (values.harTidligereOppholdUtenlands) {
    errors.tidligereOppholdUtenlands = UtenlandsOppholdField.validate(values.tidligereOppholdUtenlands, { todayOrBefore: true });
  }
  if (values.harFremtidigeOppholdUtenlands === undefined) {
    errors.harFremtidigeOppholdUtenlands = isRequiredMessage();
  } else if (values.harFremtidigeOppholdUtenlands) {
    errors.fremtidigeOppholdUtenlands = UtenlandsOppholdField.validate(values.fremtidigeOppholdUtenlands, { tidligstDato: values.mottattDato });
  }
  return errors;
}; */

OppholdINorgePanel.buildInitialValues = (): FormValues => ({
  tidligereOppholdUtenlands: [{ periodeFom: undefined, periodeTom: undefined }],
  fremtidigeOppholdUtenlands: [{ periodeFom: undefined, periodeTom: undefined }],
});

export default OppholdINorgePanel;

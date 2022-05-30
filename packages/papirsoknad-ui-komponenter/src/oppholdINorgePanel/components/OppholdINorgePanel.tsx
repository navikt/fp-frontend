import React, { FunctionComponent, useMemo } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Undertekst } from 'nav-frontend-typografi';
import { SkjemaGruppe } from 'nav-frontend-skjema';
import { RadioGroupField, RadioOption, formHooks } from '@navikt/ft-form-hooks';
import { ArrowBox, BorderBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { AlleKodeverk } from '@navikt/ft-types';
import { KodeverkType } from '@navikt/ft-kodeverk';

import { required } from '@navikt/ft-form-validators';
import UtenlandsOppholdField, { FormValues as FormValuesFieldArray } from './UtenlandsOppholdField';

import styles from './oppholdINorgePanel.less';

export type FormValues = {
  oppholdINorge?: boolean;
  harTidligereOppholdUtenlands?: boolean;
  harFremtidigeOppholdUtenlands?: boolean;
  tidligereOppholdUtenlands?: FormValuesFieldArray[];
  fremtidigeOppholdUtenlands?: FormValuesFieldArray[];
};

interface OwnProps {
  erAdopsjon: boolean;
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
  mottattDato?: string;
}

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
  mottattDato,
  erAdopsjon,
}) => {
  const { formatMessage } = useIntl();
  const sortedCountriesByName = useMemo(() => alleKodeverk[KodeverkType.LANDKODER]
    .slice().sort((a, b) => a.navn.localeCompare(b.navn)), [alleKodeverk]);

  const { watch } = formHooks.useFormContext<any>();
  const harTidligereOppholdUtenlands = watch('harTidligereOppholdUtenlands') || false;
  const harFremtidigeOppholdUtenlands = watch('harFremtidigeOppholdUtenlands') || false;

  return (
    <BorderBox>
      <SkjemaGruppe className={styles.fullWidth} legend={formatMessage({ id: 'Registrering.Opphold' })}>
        <Undertekst>
          <FormattedMessage id={erAdopsjon ? 'Registrering.OppholdVedAdopsjon' : 'Registrering.OppholdVedFodsel'} />
        </Undertekst>
        <VerticalSpacer eightPx />
        <RadioGroupField
          name="oppholdINorge"
          readOnly={readOnly}
          parse={(value: string) => value === 'true'}
          validate={[required]}
        >
          <RadioOption label={formatMessage({ id: 'Registrering.Opphold.Yes' })} value="true" />
          <RadioOption label={formatMessage({ id: 'Registrering.Opphold.No' })} value="false" />
        </RadioGroupField>
        <Undertekst>
          <FormattedMessage id="Registrering.OppholdSisteTolv" />
        </Undertekst>
        <VerticalSpacer eightPx />
        <RadioGroupField
          name="harTidligereOppholdUtenlands"
          readOnly={readOnly}
          parse={(value: string) => value === 'true'}
          validate={[required]}
        >
          <RadioOption label={formatMessage({ id: 'Registrering.Opphold.Yes' })} value="false" />
          <RadioOption label={formatMessage({ id: 'Registrering.Opphold.No' })} value="true" />
        </RadioGroupField>
        {harTidligereOppholdUtenlands ? (
          <ArrowBox alignOffset={64}>
            <UtenlandsOppholdField
              erTidligereOpphold
              mottattDato={mottattDato}
              countryCodes={sortedCountriesByName}
              readOnly={readOnly}
            />
          </ArrowBox>
        ) : null}
        <Undertekst>
          <FormattedMessage id="Registrering.OppholdNesteTolv" />
        </Undertekst>
        <VerticalSpacer eightPx />
        <RadioGroupField
          name="harFremtidigeOppholdUtenlands"
          readOnly={readOnly}
          parse={(value: string) => value === 'true'}
          validate={[required]}
        >
          <RadioOption label={formatMessage({ id: 'Registrering.Opphold.Yes' })} value="false" />
          <RadioOption label={formatMessage({ id: 'Registrering.Opphold.No' })} value="true" />
        </RadioGroupField>
        {harFremtidigeOppholdUtenlands ? (
          <ArrowBox alignOffset={64}>
            <UtenlandsOppholdField
              erTidligereOpphold={false}
              mottattDato={mottattDato}
              countryCodes={sortedCountriesByName}
              readOnly={readOnly}
            />
          </ArrowBox>
        ) : null}
      </SkjemaGruppe>
    </BorderBox>
  );
};

OppholdINorgePanel.buildInitialValues = (): FormValues => ({
  tidligereOppholdUtenlands: [{ periodeFom: undefined, periodeTom: undefined }],
  fremtidigeOppholdUtenlands: [{ periodeFom: undefined, periodeTom: undefined }],
});

export default OppholdINorgePanel;

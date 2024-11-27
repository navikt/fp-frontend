import React, { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Heading } from '@navikt/ds-react';
import { RadioGroupPanel } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { ArrowBox, BorderBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { KodeverkType } from '@navikt/fp-kodeverk';
import { AlleKodeverk } from '@navikt/fp-types';

import { FormValues as FormValuesFieldArray,UtenlandsOppholdField } from './UtenlandsOppholdField';

export type FormValues = {
  oppholdINorge?: boolean;
  harTidligereOppholdUtenlands?: boolean;
  harFremtidigeOppholdUtenlands?: boolean;
  tidligereOppholdUtenlands?: FormValuesFieldArray[];
  fremtidigeOppholdUtenlands?: FormValuesFieldArray[];
};

interface Props {
  erAdopsjon: boolean;
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
  mottattDato?: string;
}

/**
 * OppholdINorgePanel
 *
 * Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder engangsstønad.
 * Inneholder delen av skjemaet som omhandler informasjon om utenlandsopphold.
 * Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.
 */
export const OppholdINorgePanel = ({ readOnly = true, alleKodeverk, mottattDato, erAdopsjon }: Props) => {
  const { formatMessage } = useIntl();
  const sortedCountriesByName = useMemo(
    () => alleKodeverk[KodeverkType.LANDKODER].slice().sort((a, b) => a.navn.localeCompare(b.navn)),
    [alleKodeverk],
  );

  const { watch } = useFormContext<any>();
  const harTidligereOppholdUtenlands = watch('harTidligereOppholdUtenlands') || false;
  const harFremtidigeOppholdUtenlands = watch('harFremtidigeOppholdUtenlands') || false;

  return (
    <BorderBox>
      <Heading size="small">
        <FormattedMessage id="Registrering.Opphold" />
      </Heading>
      <VerticalSpacer sixteenPx />
      <RadioGroupPanel
        name="oppholdINorge"
        label={
          <FormattedMessage id={erAdopsjon ? 'Registrering.OppholdVedAdopsjon' : 'Registrering.OppholdVedFodsel'} />
        }
        validate={[required]}
        isReadOnly={readOnly}
        isTrueOrFalseSelection
        isHorizontal
        radios={[
          {
            label: formatMessage({ id: 'Registrering.Opphold.Yes' }),
            value: 'true',
          },
          {
            label: formatMessage({ id: 'Registrering.Opphold.No' }),
            value: 'false',
          },
        ]}
      />
      <VerticalSpacer sixteenPx />
      <RadioGroupPanel
        name="harTidligereOppholdUtenlands"
        label={<FormattedMessage id="Registrering.OppholdSisteTolv" />}
        validate={[required]}
        isReadOnly={readOnly}
        isTrueOrFalseSelection
        isHorizontal
        radios={[
          {
            label: formatMessage({ id: 'Registrering.Opphold.Yes' }),
            value: 'false',
          },
          {
            label: formatMessage({ id: 'Registrering.Opphold.No' }),
            value: 'true',
          },
        ]}
      />
      {harTidligereOppholdUtenlands ? (
        <>
          <VerticalSpacer eightPx />
          <ArrowBox alignOffset={64}>
            <UtenlandsOppholdField
              erTidligereOpphold
              mottattDato={mottattDato}
              countryCodes={sortedCountriesByName}
              readOnly={readOnly}
            />
          </ArrowBox>
        </>
      ) : null}
      <VerticalSpacer sixteenPx />
      <RadioGroupPanel
        name="harFremtidigeOppholdUtenlands"
        label={<FormattedMessage id="Registrering.OppholdNesteTolv" />}
        validate={[required]}
        isReadOnly={readOnly}
        isTrueOrFalseSelection
        isHorizontal
        radios={[
          {
            label: formatMessage({ id: 'Registrering.Opphold.Yes' }),
            value: 'false',
          },
          {
            label: formatMessage({ id: 'Registrering.Opphold.No' }),
            value: 'true',
          },
        ]}
      />
      {harFremtidigeOppholdUtenlands ? (
        <>
          <VerticalSpacer eightPx />
          <ArrowBox alignOffset={64}>
            <UtenlandsOppholdField mottattDato={mottattDato} countryCodes={sortedCountriesByName} readOnly={readOnly} />
          </ArrowBox>
        </>
      ) : null}
    </BorderBox>
  );
};

OppholdINorgePanel.buildInitialValues = (): FormValues => ({
  tidligereOppholdUtenlands: [{ periodeFom: undefined, periodeTom: undefined }],
  fremtidigeOppholdUtenlands: [{ periodeFom: undefined, periodeTom: undefined }],
});

OppholdINorgePanel.transformValues = (formValues: FormValues): FormValues => ({
  ...formValues,
  fremtidigeOppholdUtenlands: formValues.harFremtidigeOppholdUtenlands
    ? formValues.fremtidigeOppholdUtenlands
    : undefined,
  tidligereOppholdUtenlands: formValues.harTidligereOppholdUtenlands ? formValues.tidligereOppholdUtenlands : undefined,
});

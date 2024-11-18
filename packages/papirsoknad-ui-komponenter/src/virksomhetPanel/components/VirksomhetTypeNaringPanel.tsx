import React, { Fragment, useEffect, useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import { Label, ErrorMessage } from '@navikt/ds-react';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { CheckboxField } from '@navikt/ft-form-hooks';
import { AlleKodeverk } from '@navikt/fp-types';
import { NaringsvirksomhetType, KodeverkType } from '@navikt/fp-kodeverk';
import { isRequiredMessage } from '@navikt/ft-form-validators';
import { useFormContext } from 'react-hook-form';

const TYPE_VIRKSOMHET_PREFIX = 'typeVirksomhet';

const naringsvirksomhetTypeOrder = {
  [NaringsvirksomhetType.DAGMAMMA]: 1,
  [NaringsvirksomhetType.FISKE]: 2,
  [NaringsvirksomhetType.JORDBRUK_ELLER_SKOGBRUK]: 3,
  [NaringsvirksomhetType.ANNEN]: 4,
} as Record<string, number>;

const compare = (arg1: number, arg2: number): number => {
  if (arg1 > arg2) {
    return 1;
  }
  return arg1 < arg2 ? -1 : 0;
};

type VirtualErrorField = {
  notRegisteredInput?: string;
};

export type FormValues = {
  [TYPE_VIRKSOMHET_PREFIX]: Record<string, boolean>;
};

interface Props {
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
}

/**
 * VirksomhetTypeNaringPanel
 *
 * Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av
 * papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for søker.
 */
export const VirksomhetTypeNaringPanel = ({ readOnly, alleKodeverk }: Props) => {
  const virksomhetTyper = alleKodeverk[KodeverkType.VIRKSOMHET_TYPE];
  const naringvirksomhetTyper = useMemo(
    () =>
      virksomhetTyper
        .filter(t => t.kode !== NaringsvirksomhetType.FRILANSER)
        .sort((a, b) => compare(naringsvirksomhetTypeOrder[a.kode], naringsvirksomhetTypeOrder[b.kode])),
    [],
  );

  const { watch, setError, formState, clearErrors } = useFormContext<FormValues & VirtualErrorField>();

  const checkboxVerdier = watch(TYPE_VIRKSOMHET_PREFIX);

  const isError = !checkboxVerdier || !Object.values(checkboxVerdier).some(v => v === true);

  useEffect(() => {
    if (isError) {
      setError('notRegisteredInput', {
        type: 'custom',
        message: isRequiredMessage(),
      });
    }
    if (!isError) {
      clearErrors('notRegisteredInput');
    }
  }, [isError]);

  return (
    <>
      <VerticalSpacer eightPx />
      <Label size="small">
        <FormattedMessage id="Registrering.VirksomhetNaeringTypePanel.Title" />
      </Label>
      <VerticalSpacer fourPx />
      {naringvirksomhetTyper.map(nv => (
        <Fragment key={nv.kode}>
          <VerticalSpacer fourPx />
          <CheckboxField
            name={`${TYPE_VIRKSOMHET_PREFIX}.${nv.kode}`}
            key={nv.kode}
            label={nv.navn}
            readOnly={readOnly}
          />
        </Fragment>
      ))}
      {formState.isSubmitted && formState.errors.notRegisteredInput?.message && (
        <ErrorMessage>{formState.errors.notRegisteredInput?.message}</ErrorMessage>
      )}
    </>
  );
};

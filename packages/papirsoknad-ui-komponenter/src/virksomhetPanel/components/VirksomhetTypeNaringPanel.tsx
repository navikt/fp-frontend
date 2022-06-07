import React, {
  Fragment, FunctionComponent, useEffect, useMemo,
} from 'react';
import { FormattedMessage } from 'react-intl';
import { Undertekst } from 'nav-frontend-typografi';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { CheckboxField, formHooks } from '@navikt/ft-form-hooks';
import { AlleKodeverk } from '@navikt/ft-types';
import { KodeverkType } from '@navikt/ft-kodeverk';

import naringsvirksomhetType from '@fpsak-frontend/kodeverk/src/naringsvirksomhetType';
import { isRequiredMessage } from '@navikt/ft-form-validators';
import { SkjemaGruppe } from 'nav-frontend-skjema';

const TYPE_VIRKSOMHET_PREFIX = 'typeVirksomhet';

const naringsvirksomhetTypeOrder = {
  [naringsvirksomhetType.DAGMAMMA]: 1,
  [naringsvirksomhetType.FISKE]: 2,
  [naringsvirksomhetType.JORDBRUK_ELLER_SKOGBRUK]: 3,
  [naringsvirksomhetType.ANNEN]: 4,
};

const compare = (arg1: number, arg2: number): number => {
  if (arg1 > arg2) {
    return 1;
  }
  return arg1 < arg2 ? -1 : 0;
};

type VirtualErrorField = {
  notRegisteredInput?: string;
}

export type FormValues = {
  [TYPE_VIRKSOMHET_PREFIX]: Record<string, boolean>;
}

interface OwnProps {
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
}

/**
 * VirksomhetTypeNaringPanel
 *
 * Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av
 * papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for søker.
 */
const VirksomhetTypeNaringPanel: FunctionComponent<OwnProps> = ({
  readOnly,
  alleKodeverk,
}) => {
  const virksomhetTyper = alleKodeverk[KodeverkType.VIRKSOMHET_TYPE];
  const naringvirksomhetTyper = useMemo(() => virksomhetTyper
    .filter((t) => t.kode !== naringsvirksomhetType.FRILANSER)
    .sort((a, b) => compare(naringsvirksomhetTypeOrder[a.kode], naringsvirksomhetTypeOrder[b.kode])),
  []);

  const {
    watch, setError, formState, clearErrors,
  } = formHooks.useFormContext<FormValues & VirtualErrorField>();

  const checkboxVerdier = watch(TYPE_VIRKSOMHET_PREFIX);

  const isError = !checkboxVerdier || !Object.values(checkboxVerdier).some((v) => v === true);

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
      <Undertekst><FormattedMessage id="Registrering.VirksomhetNaeringTypePanel.Title" /></Undertekst>
      <VerticalSpacer fourPx />
      <SkjemaGruppe feil={formState.errors.notRegisteredInput?.message}>
        {naringvirksomhetTyper.map((nv) => (
          <Fragment key={nv.kode}>
            <VerticalSpacer fourPx />
            <CheckboxField name={`${TYPE_VIRKSOMHET_PREFIX}.${nv.kode}`} key={nv.kode} label={nv.navn} readOnly={readOnly} />
          </Fragment>
        ))}
      </SkjemaGruppe>
    </>
  );
};

export default VirksomhetTypeNaringPanel;

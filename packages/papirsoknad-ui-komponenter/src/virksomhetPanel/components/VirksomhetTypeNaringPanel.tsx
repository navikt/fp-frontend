import React, { Fragment, FunctionComponent, useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import { Undertekst } from 'nav-frontend-typografi';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { CheckboxField, SkjemaGruppeMedFeilviser } from '@navikt/ft-form-hooks';
import { AlleKodeverk } from '@navikt/ft-types';
import { KodeverkType } from '@navikt/ft-kodeverk';

import naringsvirksomhetType from '@fpsak-frontend/kodeverk/src/naringsvirksomhetType';

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

export type FormValues = {
  [TYPE_VIRKSOMHET_PREFIX]: Record<string, boolean>;
}

interface OwnProps {
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
  hasError: boolean;
}

/**
 * VirksomhetTypeNaringPanel
 *
 * Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av
 * papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for søker.
 */
const VirksomhetTypeNaringPanel: FunctionComponent<OwnProps> = ({
  readOnly,
  hasError,
  alleKodeverk,
}) => {
  const virksomhetTyper = alleKodeverk[KodeverkType.VIRKSOMHET_TYPE];
  const naringvirksomhetTyper = useMemo(() => virksomhetTyper
    .filter((t) => t.kode !== naringsvirksomhetType.FRILANSER)
    .sort((a, b) => compare(naringsvirksomhetTypeOrder[a.kode], naringsvirksomhetTypeOrder[b.kode])),
  []);

  return (
    <>
      <Undertekst><FormattedMessage id="Registrering.VirksomhetNaeringTypePanel.Title" /></Undertekst>
      <VerticalSpacer fourPx />
      <SkjemaGruppeMedFeilviser name="feil" errorMessage={hasError ? 'Feil' : undefined}>
        {naringvirksomhetTyper.map((nv) => (
          <Fragment key={nv.kode}>
            <VerticalSpacer fourPx />
            <CheckboxField name={`${TYPE_VIRKSOMHET_PREFIX}.${nv.kode}`} key={nv.kode} label={nv.navn} readOnly={readOnly} />
          </Fragment>
        ))}
      </SkjemaGruppeMedFeilviser>
    </>
  );
};

/*
VirksomhetTypeNaringPanel.validate = (values: any) => {
  if (!values.typeVirksomhet
    || Object.keys(values.typeVirksomhet).length === 0
    || !Object.values(values.typeVirksomhet).some((verdi) => verdi === true)
  ) {
    return { _error: isRequiredMessage() };
  }
  return {};
};*/

export default VirksomhetTypeNaringPanel;

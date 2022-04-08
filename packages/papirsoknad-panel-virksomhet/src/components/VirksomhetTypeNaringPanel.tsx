import React, { Fragment, FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import { Undertekst } from 'nav-frontend-typografi';

import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { CheckboxField, NavFieldGroup } from '@fpsak-frontend/form';
import naringsvirksomhetType from '@fpsak-frontend/kodeverk/src/naringsvirksomhetType';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { AlleKodeverk, KodeverkMedNavn } from '@fpsak-frontend/types';
import { isRequiredMessage } from '@navikt/ft-utils';

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

interface PureOwnProps {
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
  error?: string;
}

interface MappedOwnProps {
  naringvirksomhetTyper: KodeverkMedNavn[];
}

interface StaticFunctions {
  validate: (values: any) => any;
}

/**
 * VirksomhetTypeNaringPanel
 *
 * Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av
 * papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for
 * søker.
 */
export const VirksomhetTypeNaringPanel: FunctionComponent<PureOwnProps & MappedOwnProps> & StaticFunctions = ({
  readOnly,
  naringvirksomhetTyper,
  error,
}) => (
  <>
    <Undertekst><FormattedMessage id="Registrering.VirksomhetNaeringTypePanel.Title" /></Undertekst>
    <VerticalSpacer fourPx />
    <NavFieldGroup errorMessage={error}>
      {[...naringvirksomhetTyper].sort((a, b) => compare(naringsvirksomhetTypeOrder[a.kode], naringsvirksomhetTypeOrder[b.kode]))
        .map((nv) => (
          <Fragment key={nv.kode}>
            <VerticalSpacer fourPx />
            <CheckboxField name={nv.kode} key={nv.kode} label={nv.navn} readOnly={readOnly} />
          </Fragment>
        ))}
    </NavFieldGroup>
  </>
);

VirksomhetTypeNaringPanel.validate = (values: any) => {
  if (!values.typeVirksomhet
    || Object.keys(values.typeVirksomhet).length === 0
    || !Object.values(values.typeVirksomhet).some((verdi) => verdi === true)
  ) {
    return { _error: isRequiredMessage() };
  }
  return {};
};

const getFilteredNaringsvirksomhetTypes = createSelector(
  [(ownProps: PureOwnProps) => ownProps.alleKodeverk[kodeverkTyper.VIRKSOMHET_TYPE]], (types = []) => types
    .filter((t) => t.kode !== naringsvirksomhetType.FRILANSER),
);

const mapStateToProps = (_state: any, ownProps: PureOwnProps): MappedOwnProps => ({
  naringvirksomhetTyper: getFilteredNaringsvirksomhetTypes(ownProps),
});

export default connect(mapStateToProps)(VirksomhetTypeNaringPanel);

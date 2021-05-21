import React, { Fragment, FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import { Undertekst } from 'nav-frontend-typografi';

import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import { CheckboxField } from '@fpsak-frontend/form';
import naringsvirksomhetType from '@fpsak-frontend/kodeverk/src/naringsvirksomhetType';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { AlleKodeverk, KodeverkMedNavn } from '@fpsak-frontend/types';

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
}

interface MappedOwnProps {
  naringvirksomhetTyper: KodeverkMedNavn[];
}

/**
 * VirksomhetTypeNaringPanel
 *
 * Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av
 * papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for
 * søker.
 */
export const VirksomhetTypeNaringPanel: FunctionComponent<PureOwnProps & MappedOwnProps> = ({
  readOnly,
  naringvirksomhetTyper,
}) => (
  <>
    <Undertekst><FormattedMessage id="Registrering.VirksomhetNaeringTypePanel.Title" /></Undertekst>
    <VerticalSpacer fourPx />
    {naringvirksomhetTyper.sort((a, b) => compare(naringsvirksomhetTypeOrder[a.kode], naringsvirksomhetTypeOrder[b.kode]))
      .map((nv) => (
        <Fragment key={nv.kode}>
          <VerticalSpacer fourPx />
          <CheckboxField name={nv.kode} key={nv.kode} label={nv.navn} readOnly={readOnly} />
        </Fragment>
      ))}
  </>
);

const getFilteredNaringsvirksomhetTypes = createSelector(
  [(ownProps: PureOwnProps) => ownProps.alleKodeverk[kodeverkTyper.VIRKSOMHET_TYPE]], (types = []) => types
    .filter((t) => t.kode !== naringsvirksomhetType.FRILANSER),
);

const mapStateToProps = (_state, ownProps: PureOwnProps): MappedOwnProps => ({
  naringvirksomhetTyper: getFilteredNaringsvirksomhetTypes(ownProps),
});

export default connect(mapStateToProps)(VirksomhetTypeNaringPanel);

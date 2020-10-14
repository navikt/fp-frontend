import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import { Undertekst } from 'nav-frontend-typografi';

import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import { CheckboxField } from '@fpsak-frontend/form';
import naringsvirksomhetType from '@fpsak-frontend/kodeverk/src/naringsvirksomhetType';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { KodeverkMedNavn } from '@fpsak-frontend/types';

const naringsvirksomhetTypeOrder = {
  [naringsvirksomhetType.DAGMAMMA]: 1,
  [naringsvirksomhetType.FISKE]: 2,
  [naringsvirksomhetType.JORDBRUK_ELLER_SKOGBRUK]: 3,
  [naringsvirksomhetType.ANNEN]: 4,
};

interface OwnProps {
  readOnly: boolean;
  naringvirksomhetTyper: KodeverkMedNavn[];
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
}

/**
 * VirksomhetTypeNaringPanel
 *
 * Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av
 * papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for
 * søker.
 */
export const VirksomhetTypeNaringPanel: FunctionComponent<OwnProps> = ({
  readOnly,
  naringvirksomhetTyper,
}) => (
  <>
    <Undertekst><FormattedMessage id="Registrering.VirksomhetNaeringTypePanel.Title" /></Undertekst>
    <VerticalSpacer fourPx />
    {naringvirksomhetTyper.sort((a, b) => naringsvirksomhetTypeOrder[a.kode] > naringsvirksomhetTypeOrder[b.kode])
      .map((nv: any) => <CheckboxField name={nv.kode} key={nv.kode} label={nv.navn} readOnly={readOnly} />)}
  </>
);

const getFilteredNaringsvirksomhetTypes = createSelector(
  [(ownProps: OwnProps) => ownProps.alleKodeverk[kodeverkTyper.VIRKSOMHET_TYPE]], (types = []) => types
    .filter((t) => t.kode !== naringsvirksomhetType.FRILANSER),
);

const mapStateToProps = (state: any, ownProps: OwnProps) => ({
  naringvirksomhetTyper: getFilteredNaringsvirksomhetTypes(ownProps),
});

export default connect(mapStateToProps)(VirksomhetTypeNaringPanel);

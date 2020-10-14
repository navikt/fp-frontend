import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import { Undertekst } from 'nav-frontend-typografi';

import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import { CheckboxField } from '@fpsak-frontend/form';
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__prop-types... Remove this comment to see the full error message
import { kodeverkPropType } from '@fpsak-frontend/prop-types';
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__kodeverk` ... Remove this comment to see the full error message
import naringsvirksomhetType from '@fpsak-frontend/kodeverk/src/naringsvirksomhetType';
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__kodeverk` ... Remove this comment to see the full error message
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';

const naringsvirksomhetTypeOrder = {
  [naringsvirksomhetType.DAGMAMMA]: 1,
  [naringsvirksomhetType.FISKE]: 2,
  [naringsvirksomhetType.JORDBRUK_ELLER_SKOGBRUK]: 3,
  [naringsvirksomhetType.ANNEN]: 4,
};

type VirksomhetTypeNaringPanelProps = {
    readOnly: boolean;
    naringvirksomhetTyper: any; // TODO: kodeverkPropType
};

/**
 * VirksomhetTypeNaringPanel
 *
 * Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av
 * papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for
 * søker.
 */
export const VirksomhetTypeNaringPanel = ({ readOnly, naringvirksomhetTyper }: VirksomhetTypeNaringPanelProps) => (
  <>
    <Undertekst><FormattedMessage id="Registrering.VirksomhetNaeringTypePanel.Title" /></Undertekst>
    <VerticalSpacer fourPx />
    {naringvirksomhetTyper.sort((a: any, b: any) => naringsvirksomhetTypeOrder[a.kode] > naringsvirksomhetTypeOrder[b.kode])
      .map((nv: any) => <CheckboxField name={nv.kode} key={nv.kode} label={nv.navn} readOnly={readOnly} />)}
  </>
);

const getFilteredNaringsvirksomhetTypes = createSelector(
  // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
  [(ownProps) => ownProps.alleKodeverk[kodeverkTyper.VIRKSOMHET_TYPE]], (types = []) => types.filter((t: any) => t.kode !== naringsvirksomhetType.FRILANSER),
);

const mapStateToProps = (state: any, ownProps: any) => ({
  naringvirksomhetTyper: getFilteredNaringsvirksomhetTypes(ownProps),
});

export default connect(mapStateToProps)(VirksomhetTypeNaringPanel);

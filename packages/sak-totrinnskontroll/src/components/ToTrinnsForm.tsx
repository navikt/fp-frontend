import React, { FunctionComponent, useMemo } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { InjectedFormProps } from 'redux-form';
import { NavLink } from 'react-router-dom';
import { Hovedknapp } from 'nav-frontend-knapper';

import konsekvensForYtelsen from '@fpsak-frontend/kodeverk/src/konsekvensForYtelsen';
import { ariaCheck, isRequiredMessage } from '@fpsak-frontend/utils';
import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import { behandlingForm, behandlingFormValueSelector } from '@fpsak-frontend/form';
import { Kodeverk, KodeverkMedNavn } from '@fpsak-frontend/types';

import ApprovalField from './ApprovalField';

import styles from './ToTrinnsForm.less';

const allApproved = (formState: any) => formState
  .reduce((a: any, b: any) => a.concat(b.aksjonspunkter), [])
  .every((ap: any) => ap.totrinnskontrollGodkjent && ap.totrinnskontrollGodkjent === true);

const allSelected = (formState: any) => formState
  .reduce((a: any, b: any) => a.concat(b.aksjonspunkter), [])
  .every((ap: any) => ap.totrinnskontrollGodkjent !== null);

const harIkkeKonsekvenserForYtelsen = (behandlingResultat: any, ...konsekvenserForYtelsenKoder) => {
  if (!behandlingResultat) {
    return true;
  }
  const { konsekvenserForYtelsen } = behandlingResultat;
  if (!Array.isArray(konsekvenserForYtelsen) || konsekvenserForYtelsen.length !== 1) {
    return true;
  }
  return !konsekvenserForYtelsenKoder.some((kode) => kode === konsekvenserForYtelsen[0].kode);
};

interface OwnProps {
  totrinnskontrollContext?: {}[];
  formState?: {}[];
  forhandsvisVedtaksbrev: (...args: any[]) => any;
  klageVurderingResultatNFP?: {};
  klageVurderingResultatNK?: {};
  behandlingKlageVurdering?: {};
  behandlingsresultat?: {};
  erBehandlingEtterKlage?: boolean;
  readOnly: boolean;
  erTilbakekreving?: boolean;
  behandlingStatus: Kodeverk;
  isForeldrepengerFagsak: boolean;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
}

/*
  * ToTrinnsForm
  *
  * Presentasjonskomponent. Holds the form of the totrinnkontroll
  */
export const ToTrinnsFormImpl: FunctionComponent<OwnProps & InjectedFormProps> = ({
  handleSubmit,
  formState,
  forhandsvisVedtaksbrev,
  readOnly,
  totrinnskontrollContext,
  erBehandlingEtterKlage,
  behandlingKlageVurdering,
  behandlingStatus,
  isForeldrepengerFagsak,
  alleKodeverk,
  erTilbakekreving,
  behandlingsresultat,
  ...formProps
}) => {
  if (formState.length !== totrinnskontrollContext.length) {
    return null;
  }

  const erKlage = !!behandlingKlageVurdering.klageVurderingResultatNFP || !!behandlingKlageVurdering.klageVurderingResultatNK;

  const harIkkeKonsekvensForYtelse = useMemo(() => harIkkeKonsekvenserForYtelsen(behandlingsresultat,
    konsekvensForYtelsen.ENDRING_I_FORDELING_AV_YTELSEN, konsekvensForYtelsen.INGEN_ENDRING), [behandlingsresultat]);

  return (
    <form name="toTrinn" onSubmit={handleSubmit}>
      {totrinnskontrollContext.map(({
        contextCode,
        skjermlenke,
        aksjonspunkter,
        skjermlenkeNavn,
      }: any, contextIndex: any) => {
        if (aksjonspunkter.length > 0) {
          return (
            <div key={contextCode}>
              <NavLink to={skjermlenke} onClick={() => window.scroll(0, 0)} className={styles.lenke}>
                {skjermlenkeNavn}
              </NavLink>
              {aksjonspunkter.map((aksjonspunkt: any, approvalIndex: any) => (
                <div key={aksjonspunkt.aksjonspunktKode}>
                  <ApprovalField
                    aksjonspunkt={aksjonspunkt}
                    contextIndex={contextIndex}
                    currentValue={formState[contextIndex].aksjonspunkter[approvalIndex]}
                    approvalIndex={approvalIndex}
                    readOnly={readOnly}
                    klageKA={!!behandlingKlageVurdering.klageVurderingResultatNK}
                    isForeldrepengerFagsak={isForeldrepengerFagsak}
                    behandlingKlageVurdering={behandlingKlageVurdering}
                    behandlingStatus={behandlingStatus}
                    alleKodeverk={alleKodeverk}
                    erTilbakekreving={erTilbakekreving}
                  />
                </div>
              ))}
            </div>
          );
        }
        return null;
      })}
      <div className={styles.buttonRow}>
        <Hovedknapp
          mini
          disabled={!allApproved(formState) || !allSelected(formState) || formProps.submitting}
          spinner={formProps.submitting}
        >
          <FormattedMessage id="ToTrinnsForm.Godkjenn" />
        </Hovedknapp>
        <Hovedknapp
          mini
          disabled={allApproved(formState) || !allSelected(formState) || formProps.submitting}
          spinner={formProps.submitting}
          onClick={ariaCheck}
        >
          <FormattedMessage id="ToTrinnsForm.SendTilbake" />
        </Hovedknapp>
        {!erKlage && !erBehandlingEtterKlage && !erTilbakekreving && harIkkeKonsekvensForYtelse && (
          <>
            <VerticalSpacer eightPx />
            <button
              type="button"
              className={styles.buttonLink}
              onClick={forhandsvisVedtaksbrev}
            >
              <FormattedMessage id="ToTrinnsForm.ForhandvisBrev" />
            </button>
          </>
        )}
      </div>
    </form>
  );
};

ToTrinnsFormImpl.defaultProps = {
  totrinnskontrollContext: [],
  formState: [{ aksjonspunkter: [] }],
  behandlingKlageVurdering: {},
  erTilbakekreving: false,
};

const validate = (values: any) => {
  const errors = {};
  if (!values.approvals) {
    return errors;
  }

  errors.approvals = values.approvals.map((kontekst: any) => ({
    aksjonspunkter: kontekst.aksjonspunkter.map((ap: any) => {
      if (!ap.feilFakta && !ap.feilLov && !ap.feilRegel && !ap.annet) {
        return { missingArsakError: isRequiredMessage() };
      }

      return undefined;
    }),
  }));

  return errors;
};

const formName = 'toTrinnForm';

const mapStateToProps = (state: any, ownProps: any) => ({
  formState: behandlingFormValueSelector(formName, ownProps.behandlingId, ownProps.behandlingVersjon)(state, 'approvals'),
});
const ToTrinnsForm = behandlingForm({ form: formName, validate })(connect(mapStateToProps)(ToTrinnsFormImpl));

ToTrinnsForm.formName = formName;

export default ToTrinnsForm;

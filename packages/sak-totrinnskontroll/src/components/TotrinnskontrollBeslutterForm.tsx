import React, { FunctionComponent, useMemo } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { InjectedFormProps } from 'redux-form';
import { NavLink } from 'react-router-dom';
import { Hovedknapp } from 'nav-frontend-knapper';

import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import konsekvensForYtelsen from '@fpsak-frontend/kodeverk/src/konsekvensForYtelsen';
import { ariaCheck, isRequiredMessage } from '@fpsak-frontend/utils';
import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import { behandlingForm, behandlingFormValueSelector } from '@fpsak-frontend/form';
import {
  Behandling, Kodeverk, KodeverkMedNavn, TotrinnsKlageVurdering,
} from '@fpsak-frontend/types';

import AksjonspunktGodkjenningPanel from './AksjonspunktGodkjenningPanel';
import TotrinnContext from '../TotrinnContextTsType';

import styles from './totrinnskontrollBeslutterForm.less';

const erAlleGodkjent = (formState: TotrinnContext[]) => formState
  .reduce((a, b) => a.concat(b.aksjonspunkter), [])
  .every((ap) => ap.totrinnskontrollGodkjent && ap.totrinnskontrollGodkjent === true);

const erAlleGodkjentEllerAvvist = (formState: TotrinnContext[]) => formState
  .reduce((a, b) => a.concat(b.aksjonspunkter), [])
  .every((ap) => ap.totrinnskontrollGodkjent !== null);

const harIkkeKonsekvenserForYtelsen = (konsekvenserForYtelsenKoder: string[], behandlingResultat?: Behandling['behandlingsresultat']) => {
  if (!behandlingResultat) {
    return true;
  }
  const { konsekvenserForYtelsen } = behandlingResultat;
  if (!Array.isArray(konsekvenserForYtelsen) || konsekvenserForYtelsen.length !== 1) {
    return true;
  }
  return !konsekvenserForYtelsenKoder.some((kode) => kode === konsekvenserForYtelsen[0].kode);
};

interface PureOwnProps {
  behandlingId: number;
  behandlingVersjon: number;
  totrinnskontrollContext?: TotrinnContext[];
  forhandsvisVedtaksbrev: () => void;
  behandlingKlageVurdering?: TotrinnsKlageVurdering;
  behandlingsresultat?: Behandling['behandlingsresultat'];
  erBehandlingEtterKlage?: boolean;
  readOnly: boolean;
  erTilbakekreving: boolean;
  behandlingStatus: Kodeverk;
  erForeldrepengerFagsak: boolean;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
}

interface MappedOwnProps {
  formState?: TotrinnContext[];
}

/*
  * TotrinnskontrollBeslutterForm
  *
  * Presentasjonskomponent. Holds the form of the totrinnkontroll
  */
export const TotrinnskontrollBeslutterForm: FunctionComponent<PureOwnProps & MappedOwnProps & InjectedFormProps> = ({
  handleSubmit,
  formState,
  forhandsvisVedtaksbrev,
  readOnly,
  totrinnskontrollContext = [],
  erBehandlingEtterKlage,
  behandlingKlageVurdering,
  behandlingStatus,
  erForeldrepengerFagsak,
  alleKodeverk,
  erTilbakekreving,
  behandlingsresultat,
  ...formProps
}) => {
  if (!formState || formState.length !== totrinnskontrollContext.length) {
    return null;
  }

  const erKlage = behandlingKlageVurdering && (!!behandlingKlageVurdering.klageVurderingResultatNFP || !!behandlingKlageVurdering.klageVurderingResultatNK);

  const harIkkeKonsekvensForYtelse = useMemo(() => harIkkeKonsekvenserForYtelsen([
    konsekvensForYtelsen.ENDRING_I_FORDELING_AV_YTELSEN, konsekvensForYtelsen.INGEN_ENDRINGbehandlingsresultat,
  ], behandlingsresultat), [behandlingsresultat]);

  return (
    <form name="toTrinn" onSubmit={handleSubmit}>
      {totrinnskontrollContext.filter((context) => context.aksjonspunkter.length > 0).map(({
        contextCode,
        skjermlenke,
        aksjonspunkter,
        skjermlenkeNavn,
      }, contextIndex) => (
        <div key={contextCode}>
          <NavLink to={skjermlenke} onClick={() => window.scroll(0, 0)} className={styles.lenke}>
            {skjermlenkeNavn}
          </NavLink>
          {aksjonspunkter.map((aksjonspunkt, approvalIndex) => (
            <div key={aksjonspunkt.aksjonspunktKode}>
              <AksjonspunktGodkjenningPanel
                aksjonspunkt={aksjonspunkt}
                contextIndex={contextIndex}
                currentValue={formState[contextIndex].aksjonspunkter[approvalIndex]}
                approvalIndex={approvalIndex}
                readOnly={readOnly}
                klageKA={!!behandlingKlageVurdering?.klageVurderingResultatNK}
                erForeldrepengerFagsak={erForeldrepengerFagsak}
                klagebehandlingVurdering={behandlingKlageVurdering}
                behandlingStatus={behandlingStatus}
                erTilbakekreving={erTilbakekreving}
                arbeidsforholdHandlingTyper={alleKodeverk[kodeverkTyper.ARBEIDSFORHOLD_HANDLING_TYPE]}
              />
              <VerticalSpacer sixteenPx />
            </div>
          ))}
        </div>
      ))}
      <div className={styles.buttonRow}>
        <Hovedknapp
          mini
          disabled={!erAlleGodkjent(formState) || !erAlleGodkjentEllerAvvist(formState) || formProps.submitting}
          spinner={formProps.submitting}
        >
          <FormattedMessage id="ToTrinnsForm.Godkjenn" />
        </Hovedknapp>
        <Hovedknapp
          mini
          disabled={erAlleGodkjent(formState) || !erAlleGodkjentEllerAvvist(formState) || formProps.submitting}
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

type FormValues = {
  approvals?: TotrinnContext[];
}

const validate = (values: FormValues) => {
  const errors = {};
  if (!values.approvals) {
    return errors;
  }

  return {
    approvals: values.approvals.map((kontekst) => ({
      aksjonspunkter: kontekst.aksjonspunkter.map((ap) => {
        if (!ap.feilFakta && !ap.feilLov && !ap.feilRegel && !ap.annet) {
          return { missingArsakError: isRequiredMessage() };
        }

        return undefined;
      }),
    })),
  };
};

const formName = 'toTrinnForm';

const mapStateToProps = (state: any, ownProps: PureOwnProps) => ({
  formState: behandlingFormValueSelector(formName, ownProps.behandlingId, ownProps.behandlingVersjon)(state, 'approvals'),
});

export default behandlingForm({ form: formName, validate })(connect(mapStateToProps)(TotrinnskontrollBeslutterForm));
